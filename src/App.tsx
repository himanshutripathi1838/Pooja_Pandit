import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ServicesView from './components/ServicesView';
import AboutView from './components/AboutView';
import BookNowView from './components/BookNowView';
import AdminDashboardView from './components/admin/AdminDashboardView';
import AdminLoginView from './components/admin/AdminLoginView';
import GalleryView from './components/GalleryView';
import { Phone, Calendar } from 'lucide-react';
import CalendarModal from './components/CalendarModal';

import { SERVICES as INITIAL_SERVICES, INITIAL_BOOKINGS, FAQS } from './data';
import { Booking, Service } from './types';
import { Language, t } from './translations';
import { apiGetBookings, apiCreateBooking, apiUpdateBookingStatus, apiDeleteBooking } from './api';
import SEO from './components/SEO';
import FAQView from './components/FAQView';
import BlogView from './components/BlogView';
import ContactView from './components/ContactView';
import LegalView from './components/LegalView';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem('theme');
    return (stored === 'light' || stored === 'dark') ? stored : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      document.body.style.backgroundColor = '#0c0b0a';
    } else {
      root.classList.remove('dark');
      document.body.style.backgroundColor = '#fbf9f8';
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Initialize state based on current URL path
  const getInitialTab = () => {
    const path = window.location.pathname.toLowerCase();
    
    // Check if redirect query parameter from a 404 page exists
    const searchParams = new URLSearchParams(window.location.search);
    const queryPath = (searchParams.get('p') || '').toLowerCase();
    
    const resolveFromPath = (p: string) => {
      const cleanPath = p.replace(/^\//, '');
      if (cleanPath.startsWith('admin')) return 'admin';
      if (cleanPath.startsWith('services')) return 'services';
      if (cleanPath.startsWith('gallery')) return 'gallery';
      if (cleanPath.startsWith('about')) return 'about';
      if (cleanPath.startsWith('book')) return 'book';
      if (cleanPath.startsWith('faq')) return 'faq';
      if (cleanPath.startsWith('blog')) return 'blog';
      if (cleanPath.startsWith('contact')) return 'contact';
      if (cleanPath.startsWith('privacy')) return 'privacy';
      if (cleanPath.startsWith('terms')) return 'terms';
      return null;
    };

    const resolved = resolveFromPath(path) || resolveFromPath(queryPath);
    if (resolved) return resolved;

    if (path === '/' || path === '' || queryPath === 'home') return 'home';
    return '404';
  };

  const [activeTab, setActiveTab] = useState(getInitialTab());
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  // Unified global state for bookings & published services
  const [bookings, setBookings] = useState<Booking[]>(() => {
    const stored = localStorage.getItem('pooja_bookings');
    if (stored) {
      const parsed: Booking[] = JSON.parse(stored);
      return parsed.filter(b => !['BK-1001', 'BK-1002', 'BK-1003', 'BK-1004'].includes(b.id));
    }
    return INITIAL_BOOKINGS;
  });
  const [services, setServices] = useState<Service[]>(() => {
    const stored = localStorage.getItem('pooja_services');
    return stored ? JSON.parse(stored) : INITIAL_SERVICES;
  });
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | null>(null);
  const [preselectedDate, setPreselectedDate] = useState<string>('');
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);

  // Synchronize state with localStorage
  useEffect(() => {
    localStorage.setItem('pooja_bookings', JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    localStorage.setItem('pooja_services', JSON.stringify(services));
  }, [services]);

  // Load initial bookings from backend
  useEffect(() => {
    async function load() {
      try {
        const data = await apiGetBookings();
        setBookings(data);
      } catch (err) {
        console.error('Failed to load bookings from API', err);
      }
    }
    load();
  }, []);

  // A helper function to switch tabs and update the URL path dynamically
  const navigateToTab = (tab: string) => {
    setActiveTab(tab);
    const newPath = tab === 'home' ? '/' : `/${tab}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState({ tab }, '', newPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync state with back/forward browser buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      if (path === '/' || path === '') {
        setActiveTab('home');
      } else if (path.startsWith('/admin')) {
        setActiveTab('admin');
      } else if (path.startsWith('/services')) {
        setActiveTab('services');
      } else if (path.startsWith('/about')) {
        setActiveTab('about');
      } else if (path.startsWith('/book')) {
        setActiveTab('book');
      } else if (path.startsWith('/gallery')) {
        setActiveTab('gallery');
      } else if (path.startsWith('/faq')) {
        setActiveTab('faq');
      } else if (path.startsWith('/blog')) {
        setActiveTab('blog');
      } else if (path.startsWith('/contact')) {
        setActiveTab('contact');
      } else if (path.startsWith('/privacy')) {
        setActiveTab('privacy');
      } else if (path.startsWith('/terms')) {
        setActiveTab('terms');
      } else {
        setActiveTab('404');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Google Analytics & Google Search Console verification injections
  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_ID;
    if (gaId) {
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.text = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}');
      `;
      document.head.appendChild(script2);
    }

    const gscVerification = import.meta.env.VITE_GSC_VERIFICATION;
    if (gscVerification) {
      let element = document.querySelector('meta[name="google-site-verification"]');
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', 'google-site-verification');
        document.head.appendChild(element);
      }
      element.setAttribute('content', gscVerification);
    }
  }, []);

  // Booking handlers
  const handleBookingCreated = async (newBooking: Booking) => {
    const saved = await apiCreateBooking(newBooking);
    setBookings((prev) => [saved, ...prev]);
  };

  const handleUpdateBookingStatus = async (id: string, newStatus: 'Confirmed' | 'Pending' | 'Cancelled') => {
    if (newStatus === 'Confirmed' || newStatus === 'Pending') {
      await apiUpdateBookingStatus(id, newStatus);
    }
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
    );
  };

  const handleDeleteBooking = async (id: string) => {
    await apiDeleteBooking(id);
    setBookings((prev) => prev.filter((b) => b.id !== id));
  };

  // Service handler
  const handleAddNewService = (name: string, price: number, category: string) => {
    const id = name.toLowerCase().replace(/\s+/g, '-');
    const newService: Service = {
      id,
      name,
      category: category as any,
      price,
      priceUSD: Math.round(price / 75), // conversion estimation
      duration: '3 Hours',
      panditsCount: '1 Pandit',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH-GarctjYpeKQ6HZsUMT5ahnK6jRRZSEEg2ATnvTe7zsHw-hg-9gvN2mA8Eu7MrJoblTuShPB-ZCNLcutfFzbG_vjxscVyapyMNAuH0TCaE1zFrzGGxHNua3X7r7n9R1XdFUYhgrM7M8zMhIf0UBeGkeoHXR-tZvUbxVDJ_5YKQnV4f8V33NnVGvUIJ2JWAT6NAWshg_5aTvOypeU_dTaOIedL_TQBen64A0Av-MUzb5DmNXFqZ0D6R3e7A_Qbj7cRCcCL6nJnY8i',
      badge: 'New Service',
      description: `Authentic Vedic ${name} ritual performed in complete accordance with scriptural rites and sacred mantras.`,
      details: [
        'Ganpati invocation prayer rites',
        'Installation of deities and sacred water pot (Kalash)',
        'Mantra path chants and phonetic offerings',
        'Traditional Aarti and blessings distribution'
      ]
    };

    setServices((prev) => [...prev, newService]);
  };

  // Navigations Proxy
  const handleNavigateToBook = (serviceId?: string | null, dateStr?: string) => {
    setPreselectedServiceId(serviceId || null);
    setPreselectedDate(dateStr || '');
    navigateToTab('book');
  };

  const handleSelectServiceToBook = (serviceId: string) => {
    setPreselectedServiceId(serviceId);
    setPreselectedDate('');
    navigateToTab('book');
  };

  if (activeTab === 'admin') {
    return (
      <div className="min-h-screen bg-[#fbf9f8] text-[#1b1c1c] font-sans flex flex-col justify-between selection:bg-[#ffdbcc] selection:text-[#a04100]">
        <SEO 
          title={t('seo.title.admin', language)}
          description={t('seo.desc.admin', language)}
          canonicalPath="/admin"
          language={language}
          pageNameForBreadcrumb="Admin"
        />
        <div className="flex-grow py-12">
          {isAdminAuthenticated ? (
            <AdminDashboardView 
              language={language} 
              bookings={bookings} 
              onUpdateBookingStatus={handleUpdateBookingStatus} 
              onDeleteBooking={handleDeleteBooking} 
              onAddNewService={handleAddNewService} 
              onLogout={() => {
                setIsAdminAuthenticated(false);
                navigateToTab('home');
              }}
            />
          ) : (
            <AdminLoginView 
              language={language} 
              onLoginSuccess={() => setIsAdminAuthenticated(true)} 
              onBackToHome={() => navigateToTab('home')}
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fbf9f8] text-[#1b1c1c] font-sans flex flex-col justify-between selection:bg-[#ffdbcc] selection:text-[#a04100]">
      <SEO 
        title={t(`seo.title.${activeTab}`, language)}
        description={t(`seo.desc.${activeTab}`, language)}
        canonicalPath={activeTab === 'home' ? '/' : `/${activeTab}`}
        faqItems={activeTab === 'faq' ? FAQS : undefined}
        language={language}
        pageNameForBreadcrumb={
          activeTab === 'home' ? undefined :
          activeTab === 'services' ? 'Services' :
          activeTab === 'about' ? 'About Pandit Ji' :
          activeTab === 'gallery' ? 'Gallery' :
          activeTab === 'book' ? 'Book' :
          activeTab === 'faq' ? 'FAQs' :
          activeTab === 'blog' ? 'Blog' :
          activeTab === 'contact' ? 'Contact' :
          activeTab === 'privacy' ? 'Privacy Policy' :
          activeTab === 'terms' ? 'Terms & Conditions' :
          activeTab === '404' ? '404 Page Not Found' : undefined
        }
      />
      
      {/* Dynamic Header */}
      <Header 
        language={language} 
        setLanguage={setLanguage} 
        activeTab={activeTab} 
        setActiveTab={navigateToTab} 
        theme={theme}
        setTheme={setTheme}
      />

      {/* Main Screen Router */}
      <main className="flex-grow pt-32 pb-16">
        {activeTab === 'home' && (
          <HomeView 
            language={language} 
            onNavigateToServices={() => navigateToTab('services')} 
            onNavigateToBook={handleNavigateToBook} 
          />
        )}

        {activeTab === 'services' && (
          <ServicesView 
            language={language} 
            onSelectServiceToBook={handleSelectServiceToBook} 
            services={services}
          />
        )}

        {activeTab === 'about' && (
          <AboutView 
            language={language} 
          />
        )}

        {activeTab === 'gallery' && (
          <GalleryView 
            language={language} 
          />
        )}

        {activeTab === 'book' && (
          <BookNowView 
            language={language} 
            preselectedServiceId={preselectedServiceId} 
            preselectedDate={preselectedDate}
            onBookingCreated={handleBookingCreated} 
            onNavigateToDashboard={() => navigateToTab('admin')} 
            services={services}
          />
        )}

        {activeTab === 'faq' && (
          <FAQView 
            language={language} 
          />
        )}

        {activeTab === 'blog' && (
          <BlogView 
            language={language} 
          />
        )}

        {activeTab === 'contact' && (
          <ContactView 
            language={language} 
          />
        )}

        {(activeTab === 'privacy' || activeTab === 'terms') && (
          <LegalView 
            language={language} 
            view={activeTab as 'privacy' | 'terms'}
          />
        )}

        {activeTab === '404' && (
          <div className="max-w-2xl mx-auto text-center py-20 px-6 space-y-6">
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-[#a04100] animate-pulse">404</h1>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1b1c1c]">
              {language === 'sa' ? 'मार्गभ्रष्टः - पृष्ठं न लब्धम्' : language === 'te' ? 'పేజీ కనుగొనబడలేదు' : 'Spiritual Path Not Found'}
            </h2>
            <p className="text-[#5a4136] text-sm md:text-base leading-relaxed max-w-md mx-auto">
              {language === 'sa' 
                ? 'अनुरोधितः मार्गः अस्मिन् संसारे न लब्धः। कृपया मुख्यपृष्ठं गत्वा शुभाय सङ्कल्पं कुरु।' 
                : 'The page you are looking for has taken a spiritual detour or does not exist. Let us return you to the sacred path.'}
            </p>
            <div className="pt-4">
              <a 
                href="/" 
                onClick={(e) => { e.preventDefault(); navigateToTab('home'); }}
                className="inline-block px-8 py-3.5 bg-[#a04100] text-white rounded-full font-bold text-xs hover:scale-105 transition-all shadow-md cursor-pointer"
              >
                {language === 'sa' ? 'मुख्यपृष्ठम्' : 'Return to Home'}
              </a>
            </div>
          </div>
        )}
      </main>

      {/* Shared Deep Footer */}
      <Footer 
        language={language} 
        setActiveTab={navigateToTab} 
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Book Now Calendar Float Button */}
        <a 
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsCalendarModalOpen(true);
          }}
          onTouchStart={(e) => {
            e.preventDefault();
            setIsCalendarModalOpen(true);
          }}
          className="w-14 h-14 bg-gradient-to-br from-[#a04100] to-[#732d00] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-[#a04100]/30 hover:scale-110 transition-all duration-300 group cursor-pointer"
          title="View Auspicious Calendar"
        >
          <Calendar className="w-6 h-6 animate-pulse pointer-events-none" />
        </a>

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/917067704371?text=Namaste,%20I%20want%20to%20inquire%20about%20Pooja%20services." 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-[#25D366]/30 hover:scale-110 transition-all duration-300 group cursor-pointer"
          title="WhatsApp Chat"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.588 1.45 5.416 1.451 5.316 0 9.643-4.32 9.647-9.638.002-2.578-1.002-5-2.825-6.822-1.821-1.822-4.247-2.825-6.83-2.826-5.32 0-9.648 4.321-9.653 9.64-.001 1.936.505 3.824 1.467 5.49l-.962 3.51 3.593-.943zm10.166-5.467c-.29-.145-1.72-.848-1.986-.944-.267-.097-.461-.145-.655.145-.194.29-.752.944-.922 1.137-.169.194-.339.218-.63.073-.29-.145-1.223-.45-2.33-1.439-.86-.767-1.44-1.716-1.609-2.007-.17-.29-.018-.447.127-.591.13-.13.29-.339.436-.508.145-.17.194-.29.291-.484.097-.194.048-.363-.024-.508-.073-.145-.655-1.579-.897-2.16-.235-.568-.475-.49-.655-.499-.17-.008-.363-.01-.556-.01-.194 0-.508.073-.774.363-.266.29-1.017.992-1.017 2.42 0 1.427 1.04 2.809 1.186 3.002.145.194 2.047 3.127 4.96 4.385.692.3 1.232.478 1.653.612.695.22 1.329.19 1.83.115.558-.084 1.72-.702 1.962-1.38.242-.678.242-1.258.17-1.38-.073-.12-.266-.194-.556-.34z"/>
          </svg>
        </a>

        {/* Call Button */}
        <a 
          href="tel:+917067704371"
          className="w-14 h-14 bg-gradient-to-br from-[#ff6b00] to-[#ff3b00] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-[#ff3b00]/30 hover:scale-110 transition-all duration-300 group cursor-pointer"
          title="Direct Call"
        >
          <Phone className="w-7 h-7" />
        </a>
      </div>

      {/* Global Auspicious Calendar Overlay */}
      <CalendarModal 
        isOpen={isCalendarModalOpen}
        onClose={() => setIsCalendarModalOpen(false)}
        language={language}
        onNavigateToBook={(dateStr) => handleNavigateToBook(null, dateStr)}
      />

    </div>
  );
}
