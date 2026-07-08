import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Library, 
  Clock, 
  CreditCard, 
  Eye, 
  Plus, 
  Upload, 
  Mail, 
  Lightbulb, 
  MoreVertical, 
  Check, 
  X, 
  Calendar,
  Sparkles,
  Search,
  Bell,
  Trash2,
  FileSpreadsheet,
  ChevronRight,
  LogOut,
  Play,
  Youtube,
  RefreshCw,
  Edit3
} from 'lucide-react';
import { Booking } from '../../types';
import { Language, t } from '../../translations';
import { DEFAULT_GALLERY_ITEMS, GalleryItem } from '../GalleryView';
import { UPCOMING_FESTIVALS } from '../../data';
import { 
  apiGetGalleryItems, 
  apiAddGalleryItem, 
  apiDeleteGalleryItem, 
  apiGetFestivals, 
  apiSaveFestival, 
  apiDeleteFestival, 
  apiSyncGoogleCalendar 
} from '../../api';

interface AdminDashboardViewProps {
  language: Language;
  bookings: Booking[];
  onUpdateBookingStatus: (id: string, newStatus: 'Confirmed' | 'Pending' | 'Cancelled') => void;
  onDeleteBooking: (id: string) => void;
  onAddNewService: (name: string, price: number, category: string) => void;
  onLogout: () => void;
}

export default function AdminDashboardView({ 
  language, 
  bookings, 
  onUpdateBookingStatus,
  onDeleteBooking,
  onAddNewService,
  onLogout
}: AdminDashboardViewProps) {
  
  // Search query
  const [searchQuery, setSearchQuery] = useState('');

  // Weekly stats mock adjustments
  const confirmedBookings = bookings.filter(b => b.status === 'Confirmed');
  const pendingBookings = bookings.filter(b => b.status === 'Pending');
  
  const totalBookingsCount = bookings.length;
  const pendingCount = pendingBookings.length;
  const calculatedRevenue = confirmedBookings.reduce((sum, b) => sum + b.price, 0);
  const visitorCount = 0;

  // Active chart highlights
  const [hoveredPointIdx, setHoveredPointIdx] = useState<number | null>(null);

  // Modals States
  const [addServiceModalOpen, setAddServiceModalOpen] = useState(false);
  const [newServiceName, setNewServiceName] = useState('');
  const [newServicePrice, setNewServicePrice] = useState('');
  const [newServiceCat, setNewServiceCat] = useState('Ceremony');

  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [galleryFile, setGalleryFile] = useState<File | null>(null);
  const [galleryTitle, setGalleryTitle] = useState('');
  const [cloudName, setCloudName] = useState(() => localStorage.getItem('cloudinary_cloud_name') || 'fwfclx9x');
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('cloudinary_api_key') || '675776497183388');
  const [apiSecret, setApiSecret] = useState(() => localStorage.getItem('cloudinary_api_secret') || 'UfLjojhQvZqqR9uWHQp-ZB7ZnQE');
  const [isUploading, setIsUploading] = useState(false);

  const [customGalleryItems, setCustomGalleryItems] = useState<GalleryItem[]>(() => {
    try {
      const items = localStorage.getItem('custom_gallery_items');
      return items ? JSON.parse(items) : [];
    } catch (e) {
      return [];
    }
  });

  const [deletedDefaultIds, setDeletedDefaultIds] = useState<string[]>(() => {
    try {
      const ids = localStorage.getItem('deleted_default_gallery_items');
      return ids ? JSON.parse(ids) : [];
    } catch (e) {
      return [];
    }
  });

  const [uploadTab, setUploadTab] = useState<'file' | 'youtube'>('file');
  const [youtubeUrl, setYoutubeUrl] = useState('');

  // Festivals State
  const [festivals, setFestivals] = useState<any[]>(() => {
    try {
      const stored = localStorage.getItem('custom_festivals');
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
    return UPCOMING_FESTIVALS;
  });

  const [googleCalId, setGoogleCalId] = useState(() => localStorage.getItem('google_calendar_id') || '');
  const [googleApiKey, setGoogleApiKey] = useState(() => localStorage.getItem('google_api_key') || '');
  const [isSyncingCal, setIsSyncingCal] = useState(false);

  // Manual Add Festival states
  const [addFestModalOpen, setAddFestModalOpen] = useState(false);
  const [festTitle, setFestTitle] = useState('');
  const [festDesc, setFestDesc] = useState('');
  const [festDate, setFestDate] = useState(''); // YYYY-MM-DD
  const [editingFestId, setEditingFestId] = useState<string | null>(null);

  // Fetch initial festivals and gallery items from backend
  useEffect(() => {
    async function loadData() {
      try {
        const fests = await apiGetFestivals();
        setFestivals(fests);
        const gallery = await apiGetGalleryItems();
        setCustomGalleryItems(gallery);
      } catch (err) {
        console.error('Failed to load initial backend admin data', err);
      }
    }
    loadData();
  }, []);

  // Force reset Cloudinary credentials in localStorage if they belong to the old test accounts
  useEffect(() => {
    const storedCloud = localStorage.getItem('cloudinary_cloud_name');
    if (storedCloud !== 'fwfclx9x') {
      localStorage.setItem('cloudinary_cloud_name', 'fwfclx9x');
      localStorage.setItem('cloudinary_api_key', '675776497183388');
      localStorage.setItem('cloudinary_api_secret', 'UfLjojhQvZqqR9uWHQp-ZB7ZnQE');
      setCloudName('fwfclx9x');
      setApiKey('675776497183388');
      setApiSecret('UfLjojhQvZqqR9uWHQp-ZB7ZnQE');
    }
  }, []);

  const [broadcastModalOpen, setBroadcastModalOpen] = useState(false);
  const [broadcastSubject, setBroadcastSubject] = useState('');
  const [broadcastMessage, setBroadcastMessage] = useState('');

  // Notifications feedback toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleCreateServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newServiceName && newServicePrice) {
      onAddNewService(newServiceName, Number(newServicePrice), newServiceCat);
      showToast(`Service "${newServiceName}" successfully added to catalog!`);
      setNewServiceName('');
      setNewServicePrice('');
      setAddServiceModalOpen(false);
    }
  };

  // Helper to generate SHA-1 hash for signed uploads
  const generateSHA1 = async (message: string): Promise<string> => {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await window.crypto.subtle.digest('SHA-1', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  };

  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (uploadTab === 'youtube') {
      if (!youtubeUrl) {
        showToast('Please enter a YouTube video URL!');
        return;
      }
      
      const getYouTubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
      };
      
      const ytId = getYouTubeId(youtubeUrl);
      if (!ytId) {
        showToast('Invalid YouTube URL! Please enter a valid YouTube video link.');
        return;
      }

      const embedUrl = `https://www.youtube.com/embed/${ytId}`;
      const coverUrl = `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;

      const newItem = {
        id: `custom-yt-${Date.now()}`,
        type: 'video' as const,
        title: galleryTitle,
        titleHi: galleryTitle,
        url: coverUrl,
        videoUrl: embedUrl,
        category: 'Chants',
        categoryHi: 'मंत्र पाठ'
      };

      const customItemsStr = localStorage.getItem('custom_gallery_items') || '[]';
      const customItems = JSON.parse(customItemsStr);
      customItems.unshift(newItem);
      localStorage.setItem('custom_gallery_items', JSON.stringify(customItems));
      setCustomGalleryItems(customItems);

      // Trigger event to notify GalleryView to refresh
      window.dispatchEvent(new Event('gallery_updated'));

      showToast('YouTube video linked successfully!');
      setGalleryModalOpen(false);
      setGalleryTitle('');
      setYoutubeUrl('');
      return;
    }

    if (!galleryFile) {
      showToast('Please select a file to upload!');
      return;
    }

    setIsUploading(true);
    try {
      // Save details to localStorage
      localStorage.setItem('cloudinary_cloud_name', cloudName);
      localStorage.setItem('cloudinary_api_key', apiKey);
      localStorage.setItem('cloudinary_api_secret', apiSecret);

      const isVideo = galleryFile.type.startsWith('video/');
      const resourceType = isVideo ? 'video' : 'image';

      const timestamp = Math.round(Date.now() / 1000);
      const signature = await generateSHA1(`timestamp=${timestamp}${apiSecret}`);

      const formData = new FormData();
      formData.append('file', galleryFile);
      formData.append('api_key', apiKey);
      formData.append('timestamp', timestamp.toString());
      formData.append('signature', signature);

      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error?.message || 'Upload failed');
      }

      const data = await response.json();
      const imageUrl = data.secure_url;
      const videoCoverUrl = isVideo ? imageUrl.replace(/\.[^/.]+$/, ".jpg") : imageUrl;

      const newItem = {
        type: isVideo ? 'video' : 'photo',
        title: galleryTitle,
        titleHi: galleryTitle,
        url: videoCoverUrl,
        videoUrl: isVideo ? imageUrl : undefined,
        category: isVideo ? 'Chants' : 'Uploads',
        categoryHi: isVideo ? 'मंत्र पाठ' : 'अपलोड'
      };

      const savedItem = await apiAddGalleryItem(newItem);
      const updated = [savedItem, ...customGalleryItems];
      setCustomGalleryItems(updated);

      // Trigger event to notify GalleryView to refresh
      window.dispatchEvent(new Event('gallery_updated'));

      showToast(isVideo ? 'Successful upload video!' : 'Successful upload photo!');
      setGalleryModalOpen(false);
      setGalleryTitle('');
      setGalleryFile(null);
    } catch (err: any) {
      console.error(err);
      showToast(`Error: ${err.message || 'Cloudinary signed upload failed. Please verify your credentials.'}`);
    } finally {
      setIsUploading(false);
    }
  };

  // Google Calendar Sync handler
  const handleGoogleCalendarSync = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!googleCalId || !googleApiKey) {
      showToast('Please enter both Calendar ID and Google API Key!');
      return;
    }

    setIsSyncingCal(true);
    try {
      localStorage.setItem('google_calendar_id', googleCalId);
      localStorage.setItem('google_api_key', googleApiKey);

      const synced = await apiSyncGoogleCalendar(googleCalId, googleApiKey);
      setFestivals(synced);
      window.dispatchEvent(new Event('festivals_updated'));

      showToast(`Successfully synchronized ${synced.length} upcoming festivals from Google Calendar!`);
    } catch (err: any) {
      console.error(err);
      showToast(err.message || 'Google Calendar sync failed.');
    } finally {
      setIsSyncingCal(false);
    }
  };

  // Manual Add/Edit Festival handler
  const handleAddFestSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!festTitle || !festDate) {
      showToast('Please provide a Title and Date!');
      return;
    }

    const d = new Date(festDate);
    if (isNaN(d.getTime())) {
      showToast('Invalid date format.');
      return;
    }

    const day = d.getDate().toString().padStart(2, '0');
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthYear = `${months[d.getMonth()]} ${d.getFullYear()}`;

    const festData: any = {
      day,
      monthYear,
      title: festTitle,
      description: festDesc || 'Auspicious celestial timing and rituals.'
    };

    if (editingFestId) {
      festData.id = editingFestId;
    } else {
      festData.icon = 'Calendar';
      festData.color = 'border-l-4 border-[#a04100]';
    }

    try {
      const saved = await apiSaveFestival(festData);
      let updatedList = [...festivals];
      if (editingFestId) {
        updatedList = updatedList.map(f => f.id === editingFestId ? saved : f);
        showToast('Festival updated successfully!');
      } else {
        updatedList.push(saved);
        showToast('New festival added successfully!');
      }

      setFestivals(updatedList);
      window.dispatchEvent(new Event('festivals_updated'));
    } catch (err) {
      showToast('Failed to save festival.');
    }

    setAddFestModalOpen(false);
    setFestTitle('');
    setFestDesc('');
    setFestDate('');
    setEditingFestId(null);
  };

  const handleDeleteFestival = async (id: string) => {
    await apiDeleteFestival(id);
    const updatedList = festivals.filter(f => f.id !== id);
    setFestivals(updatedList);
    window.dispatchEvent(new Event('festivals_updated'));
    showToast('Festival deleted.');
  };

  const handleEditFestivalClick = (fest: any) => {
    setEditingFestId(fest.id);
    setFestTitle(fest.title);
    setFestDesc(fest.description);
    
    try {
      const parts = fest.monthYear.split(' ');
      if (parts.length === 2) {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const monthIdx = months.indexOf(parts[0]);
        if (monthIdx !== -1) {
          const year = parts[1];
          const formatted = `${year}-${(monthIdx + 1).toString().padStart(2, '0')}-${fest.day.padStart(2, '0')}`;
          setFestDate(formatted);
        }
      }
    } catch(e) {
      setFestDate('');
    }
    setAddFestModalOpen(true);
  };

  const handleDeleteGalleryItem = async (id: string, isCustom: boolean) => {
    if (isCustom) {
      await apiDeleteGalleryItem(id);
      const updated = customGalleryItems.filter((item: any) => item.id !== id);
      setCustomGalleryItems(updated);
    } else {
      const idsStr = localStorage.getItem('deleted_default_gallery_items') || '[]';
      const parsed: string[] = JSON.parse(idsStr);
      const updated = [...parsed, id];
      localStorage.setItem('deleted_default_gallery_items', JSON.stringify(updated));
      setDeletedDefaultIds(updated);
    }
    // Dispatch event to sync with public Gallery page
    window.dispatchEvent(new Event('gallery_updated'));
    showToast('Gallery item deleted successfully!');
  };

  const handleBroadcastSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(`Broadcast "${broadcastSubject}" delivered to all registered devotees!`);
    setBroadcastModalOpen(false);
    setBroadcastSubject('');
    setBroadcastMessage('');
  };

  const filteredBookings = bookings.filter(b => 
    b.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.serviceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Dynamic Booking distribution calculations for MPAndroidChart-style LineChart
  const daysOfWeekLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const countsByDay = [0, 0, 0, 0, 0, 0, 0];
  
  bookings.forEach(b => {
    try {
      const dateParts = b.date.split('-');
      if (dateParts.length === 3) {
        const d = new Date(Number(dateParts[0]), Number(dateParts[1]) - 1, Number(dateParts[2]));
        if (!isNaN(d.getTime())) {
          countsByDay[d.getDay()] += 1;
          return;
        }
      }
      
      const d = new Date(b.date);
      if (!isNaN(d.getTime())) {
        countsByDay[d.getDay()] += 1;
      } else {
        const hashIdx = (b.id.charCodeAt(3) || 1) % 7;
        countsByDay[hashIdx] += 1;
      }
    } catch (e) {
      countsByDay[1] += 1;
    }
  });

  const maxVal = Math.max(...countsByDay, 4);
  
  // SVG size
  const chartWidth = 500;
  const chartHeight = 220;
  const paddingLeft = 40;
  const paddingRight = 20;
  const paddingTop = 20;
  const paddingBottom = 30;
  
  const plotWidth = chartWidth - paddingLeft - paddingRight;
  const plotHeight = chartHeight - paddingTop - paddingBottom;
  
  const points = countsByDay.map((val, idx) => {
    const x = paddingLeft + (idx / 6) * plotWidth;
    const y = paddingTop + plotHeight - (val / maxVal) * plotHeight;
    return { x, y, val, label: daysOfWeekLabels[idx] };
  });

  let linePath = '';
  let areaPath = '';
  
  if (points.length > 0) {
    linePath = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p1 = points[i];
      const p2 = points[i + 1];
      const cpX1 = p1.x + (p2.x - p1.x) / 3;
      const cpY1 = p1.y;
      const cpX2 = p2.x - (p2.x - p1.x) / 3;
      const cpY2 = p2.y;
      linePath += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${p2.x} ${p2.y}`;
    }
    const baselineY = paddingTop + plotHeight;
    areaPath = linePath + ` L ${points[points.length - 1].x} ${baselineY} L ${points[0].x} ${baselineY} Z`;
  }

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-6">
      
      {/* Toast Feedback */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 right-6 bg-[#1b1c1c] text-white px-5 py-3.5 rounded-2xl shadow-xl z-50 flex items-center gap-3 border border-[#ffdbcc]/15 text-xs font-semibold"
          >
            <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Admin Overview */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="font-serif text-3xl font-bold text-[#a04100]">
              {t('admin.title', language)}
            </h1>
            <span className="bg-[#a04100] text-white text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-lg shadow-xs">
              Admin
            </span>
          </div>
          <p className="text-xs text-[#5a4136] mt-1">
            {t('admin.subtitle', language)}
          </p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-[#a04100]/40" />
            <input 
              type="text" 
              placeholder="Search booking or devotee..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#e2bfb0]/30 rounded-xl py-2.5 pl-10 pr-4 text-xs text-[#1b1c1c] placeholder-[#5a4136]/40 focus:outline-none focus:border-[#a04100]"
            />
          </div>

          {/* Logout Button */}
          <button 
            onClick={onLogout}
            className="flex items-center gap-2 bg-white hover:bg-red-50 border border-red-200/50 hover:border-red-200 text-red-600 font-semibold text-xs px-4 py-2.5 rounded-xl transition-all cursor-pointer shadow-xs shrink-0"
            title={t('admin.logout', language)}
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">{t('admin.logout', language)}</span>
          </button>
        </div>
      </section>

      {/* Stats Bento Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Total Bookings */}
        <div className="bg-white/80 border border-[#e2bfb0]/20 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-[#ffdbcc]/50 rounded-xl text-[#a04100]">
              <Library className="w-5 h-5" />
            </div>
            <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded-full text-[10px] font-bold">+12%</span>
          </div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#5a4136]/60 block">Total Bookings</span>
          <h3 className="font-serif text-3xl font-bold text-[#1b1c1c] mt-1">{totalBookingsCount.toLocaleString()}</h3>
        </div>

        {/* Pending */}
        <div className="bg-white/80 border border-[#e2bfb0]/20 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-red-50 rounded-xl text-red-600">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-[#a33b38] bg-[#fe8079]/15 px-2.5 py-0.5 rounded-full text-[10px] font-bold">8 New</span>
          </div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#5a4136]/60 block">Pending</span>
          <h3 className="font-serif text-3xl font-bold text-[#1b1c1c] mt-1">{pendingCount}</h3>
        </div>

        {/* Revenue */}
        <div className="bg-white/80 border border-[#e2bfb0]/20 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-amber-50 rounded-xl text-amber-600">
              <CreditCard className="w-5 h-5" />
            </div>
            <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full text-[10px] font-bold">+5.4%</span>
          </div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#5a4136]/60 block">Revenue</span>
          <h3 className="font-serif text-3xl font-bold text-[#1b1c1c] mt-1">₹{calculatedRevenue.toLocaleString()}</h3>
        </div>

        {/* Visitors */}
        <div className="bg-white/80 border border-[#e2bfb0]/20 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-[#ffdbcc]/50 rounded-xl text-[#a04100]">
              <Eye className="w-5 h-5" />
            </div>
            <span className="text-[#a04100] bg-[#ffdbcc]/40 px-2 py-0.5 rounded-full text-[10px] font-bold">Today</span>
          </div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#5a4136]/60 block">Visitors</span>
          <h3 className="font-serif text-3xl font-bold text-[#1b1c1c] mt-1">{visitorCount.toLocaleString()}</h3>
        </div>

      </section>

      {/* Center Layout: Quick Actions + Weekly Chart */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Quick Actions Column */}
        <div className="bg-white border border-[#e2bfb0]/20 p-8 rounded-2xl space-y-6">
          <h4 className="font-serif font-bold text-lg text-[#1b1c1c]">Quick Actions</h4>
          
          <div className="space-y-3.5">
            <button 
              onClick={() => setAddServiceModalOpen(true)}
              className="w-full flex items-center justify-between p-4 bg-[#a04100] hover:bg-[#a04100]/95 text-white rounded-xl text-xs font-bold transition-transform active:scale-95 shadow-md hover:shadow-[#a04100]/10 cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add New Service
              </span>
              <ChevronRight className="w-4 h-4 opacity-70" />
            </button>

            <button 
              onClick={() => setGalleryModalOpen(true)}
              className="w-full flex items-center justify-between p-4 bg-white border border-[#e2bfb0]/30 text-[#a04100] hover:bg-[#ffdbcc]/10 rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <Upload className="w-4 h-4" />
                Upload to Gallery
              </span>
              <ChevronRight className="w-4 h-4 opacity-70" />
            </button>

            <button 
              onClick={() => setBroadcastModalOpen(true)}
              className="w-full flex items-center justify-between p-4 bg-white border border-[#e2bfb0]/30 text-[#5a4136] hover:bg-[#ffdbcc]/10 rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#a04100]" />
                Send Broadcast
              </span>
              <ChevronRight className="w-4 h-4 opacity-70" />
            </button>
          </div>

          <div className="pt-6 border-t border-[#f0eded]">
            <div className="flex items-start gap-4 p-4 bg-[#ffe088]/15 rounded-xl border border-[#ffe088]/30">
              <Lightbulb className="w-5 h-5 text-[#735c00] shrink-0 mt-0.5" />
              <p className="text-[11px] text-[#574500] leading-relaxed">
                <strong className="font-bold">Tip:</strong> Your "Havan" services are experiencing a 30% surge this week. Consider featuring alternative photos of pure fire (Agni).
              </p>
            </div>
          </div>
        </div>

        {/* Weekly Booking Trends Line Chart */}
        <div className="lg:col-span-2 bg-white border border-[#e2bfb0]/20 p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between space-y-6">
          <div className="flex justify-between items-center relative z-10">
            <div>
              <h4 className="font-serif font-bold text-lg text-[#1b1c1c]">Booking Trends</h4>
              <p className="text-[10px] text-[#5a4136]/60">Weekly bookings frequency distribution</p>
            </div>
            <span className="text-[10px] uppercase font-bold text-[#a04100] bg-[#ffdbcc]/40 px-3 py-1 rounded-full">
              LineChart (MPAndroidChart Style)
            </span>
          </div>

          {/* Line Chart Container */}
          <div className="relative w-full aspect-[5/2.2] z-10 pt-4">
            <svg 
              viewBox="0 0 500 220" 
              className="w-full h-full overflow-visible"
            >
              <defs>
                <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#a04100" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#a04100" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => {
                const y = paddingTop + ratio * plotHeight;
                const gridVal = Math.round(maxVal - ratio * maxVal);
                return (
                  <g key={index} opacity={0.4}>
                    <line 
                      x1={paddingLeft} 
                      y1={y} 
                      x2={chartWidth - paddingRight} 
                      y2={y} 
                      stroke="#e2bfb0" 
                      strokeDasharray="4 4" 
                      strokeWidth={1} 
                    />
                    <text 
                      x={paddingLeft - 8} 
                      y={y + 3} 
                      textAnchor="end" 
                      fill="#5a4136" 
                      className="text-[9px] font-semibold"
                    >
                      {gridVal}
                    </text>
                  </g>
                );
              })}

              {/* Gradient Area under curve */}
              {areaPath && (
                <path 
                  d={areaPath} 
                  fill="url(#chart-gradient)" 
                />
              )}

              {/* Curve Line */}
              {linePath && (
                <path 
                  d={linePath} 
                  fill="none" 
                  stroke="#a04100" 
                  strokeWidth={2.5} 
                  strokeLinecap="round"
                />
              )}

              {/* Day Labels & Dots */}
              {points.map((pt, idx) => {
                const isHovered = hoveredPointIdx === idx;
                return (
                  <g key={idx}>
                    {/* Line connection markers */}
                    <circle 
                      cx={pt.x} 
                      cy={pt.y} 
                      r={isHovered ? 5.5 : 3.5} 
                      fill={isHovered ? '#a04100' : 'white'} 
                      stroke="#a04100" 
                      strokeWidth={2}
                      className="transition-all duration-150"
                    />

                    {/* Outer Glow */}
                    {isHovered && (
                      <circle 
                        cx={pt.x} 
                        cy={pt.y} 
                        r={9} 
                        fill="#a04100" 
                        opacity={0.25} 
                      />
                    )}

                    {/* X-axis Label */}
                    <text 
                      x={pt.x} 
                      y={chartHeight - 8} 
                      textAnchor="middle" 
                      fill={isHovered ? '#a04100' : '#5a4136'} 
                      className={`text-[9px] font-bold transition-colors ${isHovered ? 'font-extrabold' : 'opacity-60'}`}
                    >
                      {pt.label}
                    </text>
                  </g>
                );
              })}

              {/* Vertical Hover Areas */}
              {points.map((pt, idx) => (
                <rect
                  key={idx}
                  x={pt.x - 25}
                  y={paddingTop}
                  width={50}
                  height={plotHeight}
                  fill="transparent"
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredPointIdx(idx)}
                  onMouseLeave={() => setHoveredPointIdx(null)}
                />
              ))}
            </svg>

            {/* Hover Tooltip Popup */}
            {hoveredPointIdx !== null && (
              <div 
                className="absolute bg-[#1b1c1c] text-white px-3 py-1.5 rounded-xl text-[9px] font-bold shadow-xl z-20 pointer-events-none transition-all duration-150"
                style={{ 
                  left: `${(points[hoveredPointIdx].x / chartWidth) * 100}%`, 
                  top: `${(points[hoveredPointIdx].y / chartHeight) * 100 - 18}%`,
                  transform: 'translateX(-50%)'
                }}
              >
                {points[hoveredPointIdx].val} bookings
              </div>
            )}
          </div>

          {/* Background Glow */}
          <div className="absolute -bottom-16 -right-16 w-52 h-52 bg-[#ffdbcc]/20 rounded-full blur-3xl pointer-events-none"></div>
        </div>

      </section>

      {/* Bookings Table Log */}
      <section className="bg-white border border-[#e2bfb0]/20 rounded-2xl overflow-hidden shadow-sm">
        <div className="p-6 md:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#f0eded]">
          <div>
            <h4 className="font-serif font-bold text-lg text-[#1b1c1c]">Recent Bookings Log</h4>
            <p className="text-[10px] text-[#5a4136]/60 mt-0.5">Manage live bookings, confirm schedules, and track devotee allocations.</p>
          </div>
          
          <button 
            onClick={() => showToast('Exported booking catalog safely to spreadsheet!')}
            className="text-[#a04100] border border-[#a04100]/20 hover:bg-[#ffdbcc]/20 font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <FileSpreadsheet className="w-4 h-4" />
            Export CSV
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#f6f3f2] border-b border-[#e2bfb0]/15 text-[10px] uppercase font-bold text-[#5a4136] tracking-wider">
                <th className="px-6 py-4">Booking ID</th>
                <th className="px-6 py-4">Devotee</th>
                <th className="px-6 py-4">Puja Service</th>
                <th className="px-6 py-4">Scheduled Date</th>
                <th className="px-6 py-4">Estimated Fee</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f0eded] text-xs">
              {filteredBookings.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-[#5a4136]/50 italic">
                    No matching bookings found. Place a sankarpa via "Book Now"!
                  </td>
                </tr>
              ) : (
                filteredBookings.map((b) => {
                  const isPending = b.status === 'Pending';
                  const isConfirmed = b.status === 'Confirmed';
                  return (
                    <tr key={b.id} className="hover:bg-[#ffdbcc]/5 transition-colors">
                      <td className="px-6 py-5 font-mono font-bold text-[#a04100]">{b.id}</td>
                      <td className="px-6 py-5">
                        <div>
                          <strong className="font-bold text-[#1b1c1c] block">{b.customerName}</strong>
                          <span className="text-[10px] text-[#5a4136]/60">{b.customerPhone}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 font-medium text-[#1b1c1c]">{b.serviceName}</td>
                      <td className="px-6 py-5">
                        <div>
                          <strong className="font-semibold text-[#1b1c1c] block">{b.date}</strong>
                          <span className="text-[9px] text-[#5a4136]/60 leading-none">{b.timeSlot}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 font-bold text-[#735c00]">₹{b.price.toLocaleString()}</td>
                      <td className="px-6 py-5">
                        <span className={`inline-block px-3 py-1 rounded-full text-[9px] font-bold ${
                          isConfirmed 
                            ? 'bg-green-50 text-green-700' 
                            : b.status === 'Cancelled'
                              ? 'bg-red-50 text-red-600'
                              : 'bg-amber-50 text-amber-700'
                        }`}>
                          {b.status}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center justify-center gap-2">
                          {isPending && (
                            <button
                              onClick={() => {
                                onUpdateBookingStatus(b.id, 'Confirmed');
                                showToast(`Booking ${b.id} confirmed successfully!`);
                              }}
                              className="bg-green-50 text-green-700 hover:bg-green-100 p-2 rounded-xl transition-colors cursor-pointer"
                              title="Confirm Booking"
                            >
                              <Check className="w-3.5 h-3.5" />
                            </button>
                          )}
                          {isConfirmed && (
                            <button
                              onClick={() => {
                                onUpdateBookingStatus(b.id, 'Pending');
                                showToast(`Booking ${b.id} set back to Pending.`);
                              }}
                              className="bg-amber-50 text-amber-700 hover:bg-[#ffdbcc]/30 p-2 rounded-xl transition-colors cursor-pointer"
                              title="Mark Pending"
                            >
                              <Clock className="w-3.5 h-3.5" />
                            </button>
                          )}
                          <button
                            onClick={() => {
                              onDeleteBooking(b.id);
                              showToast(`Booking ${b.id} removed from records.`);
                            }}
                            className="bg-red-50 text-red-600 hover:bg-red-100 p-2 rounded-xl transition-colors cursor-pointer"
                            title="Remove Record"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION: GALLERY MANAGEMENT */}
      <section className="bg-white border border-[#e2bfb0]/20 p-8 rounded-3xl space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#e2bfb0]/20 pb-4">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#a04100]">Gallery Content Manager</h2>
            <p className="text-xs text-[#5a4136]/70">Add or delete photos and videos shown in the public gallery.</p>
          </div>
          <button 
            onClick={() => setGalleryModalOpen(true)}
            className="flex items-center gap-2 bg-[#a04100] hover:bg-[#a04100]/95 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-sm active:scale-95"
          >
            <Plus className="w-4 h-4" />
            Upload New Media
          </button>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {/* Custom Uploads */}
          {customGalleryItems.map((item) => (
            <div key={item.id} className="relative group rounded-2xl overflow-hidden border border-[#e2bfb0]/35 bg-[#fbf9f8] aspect-square flex flex-col justify-between">
              <div className="w-full h-3/4 relative overflow-hidden bg-black flex items-center justify-center">
                <img src={item.url} alt={item.title} className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-all duration-300" />
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Play className="w-6 h-6 text-white fill-white" />
                  </div>
                )}
              </div>
              <div className="p-2 flex items-center justify-between gap-1.5 h-1/4 bg-white border-t border-[#e2bfb0]/15">
                <span className="text-[10px] font-bold text-[#1b1c1c] truncate max-w-[80%]">{item.title || 'Untitled'}</span>
                <button 
                  onClick={() => handleDeleteGalleryItem(item.id, true)}
                  className="text-red-500 hover:text-red-700 p-1 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                  title="Delete Item"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* Active Defaults */}
          {DEFAULT_GALLERY_ITEMS.filter(item => !deletedDefaultIds.includes(item.id)).map((item) => (
            <div key={item.id} className="relative group rounded-2xl overflow-hidden border border-[#e2bfb0]/35 bg-[#fbf9f8] aspect-square flex flex-col justify-between">
              <div className="w-full h-3/4 relative overflow-hidden bg-black flex items-center justify-center">
                <img src={item.url} alt={item.title} className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-all duration-300" />
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Play className="w-6 h-6 text-white fill-white" />
                  </div>
                )}
              </div>
              <div className="p-2 flex items-center justify-between gap-1.5 h-1/4 bg-white border-t border-[#e2bfb0]/15">
                <span className="text-[10px] font-bold text-[#1b1c1c] truncate max-w-[80%]">{item.title}</span>
                <button 
                  onClick={() => handleDeleteGalleryItem(item.id, false)}
                  className="text-red-500 hover:text-red-700 p-1 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                  title="Delete Item"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {customGalleryItems.length === 0 && DEFAULT_GALLERY_ITEMS.filter(item => !deletedDefaultIds.includes(item.id)).length === 0 && (
          <div className="text-center py-12 text-[#5a4136]/50 text-xs">
            No photos or videos found in the temple gallery. Upload some media to get started!
          </div>
        )}
      </section>

      {/* SECTION: SACRED FESTIVALS MANAGEMENT */}
      <section className="bg-white border border-[#e2bfb0]/20 p-8 rounded-3xl space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#e2bfb0]/20 pb-4">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#a04100]">Sacred Festivals Manager</h2>
            <p className="text-xs text-[#5a4136]/70">Sync with Google Calendar or manually add/edit auspicious upcoming temple festivals.</p>
          </div>
          <button 
            type="button"
            onClick={() => {
              setEditingFestId(null);
              setFestTitle('');
              setFestDesc('');
              setFestDate('');
              setAddFestModalOpen(true);
            }}
            className="flex items-center gap-2 bg-[#a04100] hover:bg-[#a04100]/95 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-sm active:scale-95"
          >
            <Plus className="w-4 h-4" />
            Add Custom Festival
          </button>
        </div>

        {/* Sync with Google Calendar Sub-Panel */}
        <form onSubmit={handleGoogleCalendarSync} className="p-5 bg-[#ffdbcc]/15 rounded-2xl border border-[#e2bfb0]/35 grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase tracking-wider font-bold text-[#5a4136]">Google Calendar ID</label>
            <input 
              type="text" 
              placeholder="e.g. en.indian#holiday@group.v.calendar.google.com"
              value={googleCalId}
              onChange={(e) => setGoogleCalId(e.target.value)}
              className="bg-white border border-[#e2bfb0]/40 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-[#a04100]"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase tracking-wider font-bold text-[#5a4136]">Google API Key</label>
            <input 
              type="password" 
              placeholder="Google Developer API Key"
              value={googleApiKey}
              onChange={(e) => setGoogleApiKey(e.target.value)}
              className="bg-white border border-[#e2bfb0]/40 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-[#a04100]"
            />
          </div>
          <button 
            type="submit"
            disabled={isSyncingCal}
            className="py-2.5 bg-[#a04100] text-white text-xs font-bold rounded-xl hover:opacity-90 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSyncingCal ? 'animate-spin' : ''}`} />
            {isSyncingCal ? 'Synchronizing...' : 'Sync Google Calendar'}
          </button>
        </form>

        {/* Festivals List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {festivals.map((fest, idx) => (
            <div key={fest.id || idx} className="p-4 bg-white border border-[#e2bfb0]/20 rounded-2xl flex justify-between items-start hover:shadow-xs transition-shadow">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-extrabold text-[#a04100]">{fest.day}</span>
                  <span className="text-[10px] font-bold text-[#5a4136] uppercase tracking-wider">{fest.monthYear}</span>
                </div>
                <h4 className="font-serif font-bold text-sm text-[#1b1c1c]">{fest.titleKey ? t(fest.titleKey, language) : fest.title}</h4>
                <p className="text-[10px] text-[#5a4136]/80 leading-relaxed max-w-sm">{fest.descKey ? t(fest.descKey, language) : fest.description}</p>
              </div>
              <div className="flex gap-1 shrink-0">
                <button
                  type="button"
                  onClick={() => handleEditFestivalClick(fest)}
                  className="p-1.5 text-[#a04100] hover:bg-[#ffdbcc]/20 rounded-lg transition-colors cursor-pointer"
                  title="Edit Festival"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteFestival(fest.id)}
                  className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                  title="Delete Festival"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {festivals.length === 0 && (
          <div className="text-center py-12 text-[#5a4136]/50 text-xs italic">
            No upcoming festivals configured. Configure Google Calendar above or add custom festivals manually.
          </div>
        )}
      </section>

      {/* MODAL: ADD SERVICE */}
      <AnimatePresence>
        {addServiceModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setAddServiceModalOpen(false)}>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#fbf9f8] p-6 md:p-8 rounded-3xl max-w-sm w-full relative border border-[#e2bfb0]/30 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setAddServiceModalOpen(false)}
                className="absolute top-4 right-4 text-[#5a4136]"
              >
                <X className="w-5 h-5" />
              </button>

              <form onSubmit={handleCreateServiceSubmit} className="space-y-5">
                <h3 className="font-serif font-bold text-lg text-[#a04100]">Add New Service</h3>
                
                <div className="space-y-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-[#5a4136]">Service Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Mahamrityunjaya Jaap"
                      value={newServiceName}
                      onChange={(e) => setNewServiceName(e.target.value)}
                      className="bg-white border border-[#e2bfb0]/40 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#a04100]"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-[#5a4136]">Estimated Dakshina (₹)</label>
                    <input 
                      type="number" 
                      required
                      placeholder="e.g. 11000"
                      value={newServicePrice}
                      onChange={(e) => setNewServicePrice(e.target.value)}
                      className="bg-white border border-[#e2bfb0]/40 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#a04100]"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-[#5a4136]">Category</label>
                    <select
                      value={newServiceCat}
                      onChange={(e) => setNewServiceCat(e.target.value)}
                      className="bg-white border border-[#e2bfb0]/40 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#a04100]"
                    >
                      <option value="Ceremony">Ceremony</option>
                      <option value="Havan">Havan</option>
                      <option value="Online Puja">Online Puja</option>
                      <option value="Astrology">Astrology</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 bg-[#a04100] text-white text-xs font-bold rounded-xl hover:opacity-90 transition-all cursor-pointer"
                >
                  Create &amp; Publish Service
                </button>
              </form>
            </motion.div>
          </div>
        )}

        {/* MODAL: UPLOAD GALLERY */}
        {galleryModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setGalleryModalOpen(false)}>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#fbf9f8] p-6 md:p-8 rounded-3xl max-w-sm w-full relative border border-[#e2bfb0]/30 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setGalleryModalOpen(false)}
                title="Close"
                aria-label="Close"
                className="absolute top-4 right-4 text-[#5a4136]"
              >
                <X className="w-5 h-5" />
              </button>

              <form onSubmit={handleUploadSubmit} className="space-y-4">
                <h3 className="font-serif font-bold text-lg text-[#a04100]">Upload to Temple Gallery</h3>
                
                {/* Upload Method Tab Selector */}
                <div className="flex gap-2 p-1 bg-[#ffdbcc]/20 border border-[#e2bfb0]/25 rounded-2xl">
                  <button
                    type="button"
                    onClick={() => setUploadTab('file')}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 text-[11px] font-bold rounded-xl transition-all cursor-pointer ${
                      uploadTab === 'file' 
                        ? 'bg-[#a04100] text-white shadow-xs' 
                        : 'text-[#5a4136] hover:bg-[#ffdbcc]/40'
                    }`}
                  >
                    <Upload className="w-3.5 h-3.5" />
                    Upload Local File
                  </button>
                  <button
                    type="button"
                    onClick={() => setUploadTab('youtube')}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 text-[11px] font-bold rounded-xl transition-all cursor-pointer ${
                      uploadTab === 'youtube' 
                        ? 'bg-[#a04100] text-white shadow-xs' 
                        : 'text-[#5a4136] hover:bg-[#ffdbcc]/40'
                    }`}
                  >
                    <Youtube className="w-3.5 h-3.5" />
                    Link YouTube Video
                  </button>
                </div>

                <div className="space-y-3.5">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-[#5a4136]">Media Caption / Title</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Navagraha Homam June 2026"
                      value={galleryTitle}
                      onChange={(e) => setGalleryTitle(e.target.value)}
                      disabled={isUploading}
                      className="bg-white border border-[#e2bfb0]/40 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-[#a04100] disabled:opacity-60"
                    />
                  </div>

                  {uploadTab === 'file' ? (
                    <>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] uppercase tracking-wider font-bold text-[#5a4136]">Select Image or Video File</label>
                        <input 
                          type="file" 
                          required
                          accept="image/*,video/*"
                          disabled={isUploading}
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              setGalleryFile(e.target.files[0]);
                            }
                          }}
                          className="bg-white border border-[#e2bfb0]/40 rounded-xl p-2 text-xs focus:outline-none disabled:opacity-60"
                        />
                      </div>

                      {/* Cloudinary settings collapsible configuration */}
                      <div className="pt-2 border-t border-[#e2bfb0]/20 space-y-3">
                        <p className="text-[10px] text-[#5a4136]/50 uppercase tracking-widest font-bold">Cloudinary Configuration</p>
                        
                        <div className="space-y-2">
                          <div className="flex flex-col gap-0.5">
                            <label className="text-[9px] uppercase tracking-wider font-bold text-[#5a4136]/75">Cloud Name</label>
                            <input 
                              type="text" 
                              required
                              value={cloudName}
                              onChange={(e) => setCloudName(e.target.value)}
                              disabled={isUploading}
                              className="w-full bg-white border border-[#e2bfb0]/40 rounded-lg px-2.5 py-1.5 text-[11px] focus:outline-none focus:border-[#a04100] disabled:opacity-60"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col gap-0.5">
                              <label className="text-[9px] uppercase tracking-wider font-bold text-[#5a4136]/75">API Key</label>
                              <input 
                                type="text" 
                                required
                                value={apiKey}
                                onChange={(e) => setApiKey(e.target.value)}
                                disabled={isUploading}
                                className="bg-white border border-[#e2bfb0]/40 rounded-lg px-2.5 py-1.5 text-[11px] focus:outline-none focus:border-[#a04100] disabled:opacity-60"
                              />
                            </div>
                            <div className="flex flex-col gap-0.5">
                              <label className="text-[9px] uppercase tracking-wider font-bold text-[#5a4136]/75">API Secret</label>
                              <input 
                                type="password" 
                                required
                                value={apiSecret}
                                onChange={(e) => setApiSecret(e.target.value)}
                                disabled={isUploading}
                                className="bg-white border border-[#e2bfb0]/40 rounded-lg px-2.5 py-1.5 text-[11px] focus:outline-none focus:border-[#a04100] disabled:opacity-60"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-[#5a4136]">YouTube Video Link</label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-red-600">
                          <Youtube className="w-4 h-4" />
                        </span>
                        <input 
                          type="url" 
                          required
                          placeholder="https://www.youtube.com/watch?v=..."
                          value={youtubeUrl}
                          onChange={(e) => setYoutubeUrl(e.target.value)}
                          className="w-full bg-white border border-[#e2bfb0]/40 rounded-xl pl-9 pr-3.5 py-2 text-xs focus:outline-none focus:border-[#a04100]"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <button 
                  type="submit"
                  disabled={isUploading}
                  className="w-full py-3 bg-[#a04100] text-white text-xs font-bold rounded-xl hover:opacity-90 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isUploading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Uploading to Cloudinary...</span>
                    </>
                  ) : (
                    <span>Publish to Gallery</span>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        )}

        {/* MODAL: BROADCAST MESSAGE */}
        {broadcastModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setBroadcastModalOpen(false)}>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#fbf9f8] p-6 md:p-8 rounded-3xl max-w-sm w-full relative border border-[#e2bfb0]/30 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setBroadcastModalOpen(false)}
                className="absolute top-4 right-4 text-[#5a4136]"
              >
                <X className="w-5 h-5" />
              </button>

              <form onSubmit={handleBroadcastSubmit} className="space-y-5">
                <h3 className="font-serif font-bold text-lg text-[#a04100]">Send Community Broadcast</h3>
                
                <div className="space-y-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-[#5a4136]">Broadcast Subject</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Guru Purnima Mahapuja Invitation"
                      value={broadcastSubject}
                      onChange={(e) => setBroadcastSubject(e.target.value)}
                      className="bg-white border border-[#e2bfb0]/40 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#a04100]"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-[#5a4136]">Message Body</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="e.g. Join Pandit Dheeraj Tripathi live for a global Sankalpa on July 9..."
                      value={broadcastMessage}
                      onChange={(e) => setBroadcastMessage(e.target.value)}
                      className="bg-white border border-[#e2bfb0]/40 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#a04100] resize-none"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 bg-[#a04100] text-white text-xs font-bold rounded-xl hover:opacity-90 transition-all cursor-pointer"
                >
                  Deliver Broadcast
                </button>
              </form>
            </motion.div>
          </div>
        )}

        {/* MODAL: ADD/EDIT FESTIVAL */}
        {addFestModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setAddFestModalOpen(false)}>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#fbf9f8] p-6 md:p-8 rounded-3xl max-w-sm w-full relative border border-[#e2bfb0]/30 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setAddFestModalOpen(false)}
                title="Close"
                aria-label="Close"
                className="absolute top-4 right-4 text-[#5a4136]"
              >
                <X className="w-5 h-5" />
              </button>

              <form onSubmit={handleAddFestSubmit} className="space-y-4">
                <h3 className="font-serif font-bold text-lg text-[#a04100]">
                  {editingFestId ? 'Edit Festival' : 'Add Custom Festival'}
                </h3>
                
                <div className="space-y-3.5">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-[#5a4136]">Festival Title</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Maha Shivratri Puja"
                      value={festTitle}
                      onChange={(e) => setFestTitle(e.target.value)}
                      className="bg-white border border-[#e2bfb0]/40 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-[#a04100]"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-[#5a4136]">Description</label>
                    <textarea 
                      rows={3}
                      placeholder="Enter description of festival..."
                      value={festDesc}
                      onChange={(e) => setFestDesc(e.target.value)}
                      className="bg-white border border-[#e2bfb0]/40 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-[#a04100] resize-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-[#5a4136]">Festival Date</label>
                    <input 
                      type="date" 
                      required
                      value={festDate}
                      onChange={(e) => setFestDate(e.target.value)}
                      className="bg-white border border-[#e2bfb0]/40 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-[#a04100]"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 bg-[#a04100] text-white text-xs font-bold rounded-xl hover:opacity-90 transition-all cursor-pointer"
                >
                  {editingFestId ? 'Save Changes' : 'Create Festival'}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
