import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Image as ImageIcon, Video, X, Maximize2 } from 'lucide-react';
import { Language, t } from '../translations';

// Import local assets
import acharyaPhoto from '../assets/acharya_shlokam.jpg';
import diwaliLakshmiImg from '../assets/diwali_lakshmi_puja.png';
import marriageCeremonyImg from '../assets/marriage_ceremony.png';
import birthdayPujaImg from '../assets/birthday_puja.png';
import officeOpeningImg from '../assets/office_opening.png';
import ganeshChaturthiImg from '../assets/ganesh_chaturthi.png';
import galleryWedding from '../assets/gallery_wedding.jpg';
import galleryChanting from '../assets/gallery_chanting.jpg';
import galleryTempleYellow from '../assets/gallery_temple_yellow.jpg';
import galleryTempleRed from '../assets/gallery_temple_red.jpg';

interface GalleryViewProps {
  language: Language;
}

export interface GalleryItem {
  id: string;
  type: 'photo' | 'video';
  title: string;
  titleHi: string;
  url: string;
  videoUrl?: string; // YouTube embed or similar
  category: string;
  categoryHi: string;
}

export default function GalleryView({ language }: GalleryViewProps) {
  const [activeTab, setActiveTab] = useState<'photo' | 'video'>('photo');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Listen for Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };
    if (selectedItem) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedItem]);

  const [customItems, setCustomItems] = useState<GalleryItem[]>(() => {
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

  useEffect(() => {
    const handleUpdate = () => {
      try {
        const items = localStorage.getItem('custom_gallery_items');
        setCustomItems(items ? JSON.parse(items) : []);
        
        const ids = localStorage.getItem('deleted_default_gallery_items');
        setDeletedDefaultIds(ids ? JSON.parse(ids) : []);
      } catch (e) {}
    };
    window.addEventListener('gallery_updated', handleUpdate);
    return () => {
      window.removeEventListener('gallery_updated', handleUpdate);
    };
  }, []);
  const combinedItems = [
    ...customItems, 
    ...DEFAULT_GALLERY_ITEMS.filter(item => !deletedDefaultIds.includes(item.id))
  ];
  const filteredItems = combinedItems.filter(item => item.type === activeTab);

  return (
    <div className="max-w-7xl mx-auto px-6 py-4">
      {/* Header Info */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-3xl md:text-4xl font-bold text-[#1b1c1c] dark:text-[#fbf9f8] tracking-wide"
        >
          {t('gallery.title', language)}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-base text-[#5a4136]/80 dark:text-[#fbf9f8]/70 leading-relaxed"
        >
          {t('gallery.subtitle', language)}
        </motion.p>
      </div>

      {/* Tabs Selector Toggle */}
      <div className="flex justify-center mb-12">
        <div className="bg-[#ffdbcc]/40 dark:bg-[#ffdbcc]/5 border border-[#e2bfb0]/30 dark:border-[#e2bfb0]/15 p-1 rounded-2xl flex gap-1 shadow-sm">
          <button
            onClick={() => setActiveTab('photo')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === 'photo'
                ? 'bg-[#a04100] text-white shadow-md shadow-[#a04100]/25'
                : 'text-[#5a4136]/80 dark:text-[#fbf9f8]/80 hover:text-[#a04100] dark:hover:text-[#ff9d66]'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            {t('gallery.photos', language)}
          </button>
          <button
            onClick={() => setActiveTab('video')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === 'video'
                ? 'bg-[#a04100] text-white shadow-md shadow-[#a04100]/25'
                : 'text-[#5a4136]/80 dark:text-[#fbf9f8]/80 hover:text-[#a04100] dark:hover:text-[#ff9d66]'
            }`}
          >
            <Video className="w-4 h-4" />
            {t('gallery.videos', language)}
          </button>
        </div>
      </div>

      {/* Media Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => setSelectedItem(item)}
              className="group relative bg-white dark:bg-[#141211] border border-[#e2bfb0]/20 dark:border-[#e2bfb0]/10 rounded-2xl overflow-hidden shadow-md shadow-[#a04100]/3 hover:shadow-xl hover:shadow-[#a04100]/8 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Media Thumbnail Container */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#ffdbcc]/10">
                <img 
                  src={item.url} 
                  alt={language === 'en' ? item.title : item.titleHi} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Hover overlay icon decoration */}
                <div className="absolute inset-0 bg-[#a04100]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-[#a04100] shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {item.type === 'video' ? (
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    ) : (
                      <Maximize2 className="w-5 h-5" />
                    )}
                  </div>
                </div>

                {/* Badge Category Tag */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-[#e2bfb0]/40 text-[#a04100] font-semibold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full z-10 shadow-sm">
                  {language === 'en' ? item.category : item.categoryHi}
                </span>
              </div>

              {/* Title info */}
              <div className="p-5 border-t border-[#e2bfb0]/10 bg-white dark:bg-[#141211]">
                <h3 className="font-serif text-[15px] font-bold text-[#1b1c1c] dark:text-[#fbf9f8] leading-snug group-hover:text-[#a04100] transition-colors line-clamp-2">
                  {language === 'en' ? item.title : item.titleHi}
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Glassmorphic Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-[#1b1c1c]/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            {/* Close handler backdrop */}
            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setSelectedItem(null)} />

            {/* Modal Content container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full transition-all cursor-pointer z-50 shadow-md"
                aria-label="Close Gallery Modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Media viewer */}
              <div className="relative w-full bg-black flex items-center justify-center overflow-hidden min-h-[40vh] max-h-[75vh]">
                {selectedItem.type === 'photo' ? (
                  <img 
                    src={selectedItem.url} 
                    alt={language === 'en' ? selectedItem.title : selectedItem.titleHi} 
                    className="max-h-[75vh] w-auto max-w-full object-contain block"
                  />
                ) : (
                  <div className="w-full aspect-video flex items-center justify-center bg-black">
                    {selectedItem.videoUrl?.includes('youtube.com') || selectedItem.videoUrl?.includes('youtu.be') ? (
                      <iframe
                        className="w-full h-full"
                        src={`${selectedItem.videoUrl}?autoplay=1`}
                        title={language === 'en' ? selectedItem.title : selectedItem.titleHi}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <video 
                        className="w-full h-full max-h-[75vh]"
                        controls 
                        autoPlay 
                        src={selectedItem.videoUrl}
                      />
                    )}
                  </div>
                )}
              </div>

              {/* Caption */}
              <div className="p-6 bg-white border-t border-[#e2bfb0]/20 flex justify-between items-center gap-4">
                <div>
                  <span className="text-[10px] text-[#a04100] font-bold uppercase tracking-wider block mb-1">
                    {language === 'en' ? selectedItem.category : selectedItem.categoryHi}
                  </span>
                  <h2 className="font-serif text-lg font-bold text-[#1b1c1c]">
                    {language === 'en' ? selectedItem.title : selectedItem.titleHi}
                  </h2>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export const DEFAULT_GALLERY_ITEMS: GalleryItem[] = [
  // Photos
  {
    id: 'user-photo-1',
    type: 'photo',
    title: 'Sacred Vivah Sanskar (Wedding Yagna) Rituals',
    titleHi: 'वैदिक विवाह यज्ञ अनुष्ठान एवं पाणिग्रहण संस्कार',
    url: galleryWedding,
    category: 'Marriage',
    categoryHi: 'विवाह संस्कार'
  },
  {
    id: 'user-photo-2',
    type: 'photo',
    title: 'Pandit Ji Reciting Devotional Mantras & Bhajans',
    titleHi: 'भजन संकीर्तन एवं वैदिक मंगलाचरण करते हुए आचार्य जी',
    url: galleryChanting,
    category: 'Chanting',
    categoryHi: 'मंगलाचरण'
  },
  {
    id: 'user-photo-3',
    type: 'photo',
    title: 'Blessings Ceremony & Altar Seva with Devotees',
    titleHi: 'भक्तों के साथ आशीर्वाद समारोह एवं देव वेदी सेवा',
    url: galleryTempleYellow,
    category: 'Blessings',
    categoryHi: 'आशीर्वाद'
  },
  {
    id: 'user-photo-4',
    type: 'photo',
    title: 'Temple Aarti and Satsang Gathering',
    titleHi: 'देवालय महाआरती एवं सामूहिक सत्संग दर्शन',
    url: galleryTempleRed,
    category: 'Blessings',
    categoryHi: 'आशीर्वाद'
  },
  {
    id: 'photo-5',
    type: 'photo',
    title: 'Office Altar Grih Pravesh Dwar Pooja',
    titleHi: 'कार्यालय गृह-प्रवेश द्वार पूजा विधान',
    url: officeOpeningImg,
    category: 'Vastu',
    categoryHi: 'वास्तु'
  },
  {
    id: 'photo-6',
    type: 'photo',
    title: 'Ganesh Chaturthi Pratishthapana Altar',
    titleHi: 'श्री गणेश चतुर्थी मंगल मूर्ति स्थापना',
    url: ganeshChaturthiImg,
    category: 'Festivals',
    categoryHi: 'उत्सव'
  },

  // Videos
  {
    id: 'video-1',
    type: 'video',
    title: 'Divine Ganga Aarti Darshan Varanasi',
    titleHi: 'मां गंगा आरती महा दर्शन - काशी',
    url: 'https://images.unsplash.com/photo-1561361513-2d000a50f0db?auto=format&fit=crop&w=600&q=80',
    videoUrl: 'https://www.youtube.com/embed/a9hK4JgG69g',
    category: 'Darshan',
    categoryHi: 'दर्शन'
  },
  {
    id: 'video-2',
    type: 'video',
    title: 'Maha Mrityunjaya Mantra 108 Chants',
    titleHi: 'महामृत्युंजय मंत्र १०८ आवर्तन पाठ',
    url: 'https://images.unsplash.com/photo-1609137144813-f61b0c0f0dfd?auto=format&fit=crop&w=600&q=80',
    videoUrl: 'https://www.youtube.com/embed/2M0I1EwXJd4',
    category: 'Chants',
    categoryHi: 'मंत्र पाठ'
  },
  {
    id: 'video-3',
    type: 'video',
    title: 'Satyanarayan Katha Chapter 1 recitation',
    titleHi: 'श्री सत्यनारायण व्रत कथा प्रथम अध्याय पाठ',
    url: 'https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=600&q=80',
    videoUrl: 'https://www.youtube.com/embed/eW6u4e7zTio',
    category: 'Recitation',
    categoryHi: 'कथा प्रवचन'
  },
  {
    id: 'video-4',
    type: 'video',
    title: 'Sacred Rudrabhishek Puja Live Stream',
    titleHi: 'रूद्राभिषेक पूजन महा शिव आराधना',
    url: 'https://images.unsplash.com/photo-1561361049-7b3b9fcf822e?auto=format&fit=crop&w=600&q=80',
    videoUrl: 'https://www.youtube.com/embed/H0Lz33aFk_A',
    category: 'Live Puja',
    categoryHi: 'लाइव पूजा'
  }
];
