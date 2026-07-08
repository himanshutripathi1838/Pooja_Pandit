import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Calendar, 
  Heart, 
  Award, 
  ArrowRight, 
  Phone, 
  ChevronDown, 
  Star, 
  MapPin, 
  Flame, 
  Video, 
  ChevronRight,
  ChevronLeft,
  Sun,
  Moon,
  Home
} from 'lucide-react';
import { SERVICES, FAQS, TESTIMONIALS, UPCOMING_FESTIVALS } from '../data';
import { Service } from '../types';
import { Language, t } from '../translations';

interface HomeViewProps {
  language: Language;
  onNavigateToServices: () => void;
  onNavigateToBook: (serviceId?: string) => void;
}

export default function HomeView({ language, onNavigateToServices, onNavigateToBook }: HomeViewProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Filter 3 services to show as featured
  const featuredServices = SERVICES.slice(0, 3);

  // Load dynamic festivals list
  const [festivals, setFestivals] = useState<any[]>(() => {
    try {
      const stored = localStorage.getItem('custom_festivals');
      return stored ? JSON.parse(stored) : UPCOMING_FESTIVALS;
    } catch (e) {
      return UPCOMING_FESTIVALS;
    }
  });

  useEffect(() => {
    const handleUpdate = () => {
      try {
        const stored = localStorage.getItem('custom_festivals');
        if (stored) {
          setFestivals(JSON.parse(stored));
        }
      } catch (e) {
        console.error(e);
      }
    };
    window.addEventListener('festivals_updated', handleUpdate);
    return () => window.removeEventListener('festivals_updated', handleUpdate);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const getBentoServiceKeys = (id: string) => {
    switch (id) {
      case 'satyanarayan':
        return { title: 'bento.satyanarayan.title', desc: 'bento.satyanarayan.desc' };
      case 'rudrabhishek':
        return { title: 'bento.rudrabhishek.title', desc: 'bento.rudrabhishek.desc' };
      case 'grihapravesh':
        return { title: 'bento.griha.title', desc: 'bento.griha.desc' };
      default:
        return { title: '', desc: '' };
    }
  };

  const festKeys = [
    { titleKey: 'fest.holi.title', descKey: 'fest.holi.desc' },
    { titleKey: 'fest.navratri.title', descKey: 'fest.navratri.desc' },
    { titleKey: 'fest.ramnavami.title', descKey: 'fest.ramnavami.desc' }
  ];

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative min-h-165 flex items-center overflow-hidden px-6 md:px-12 py-16 bg-[#fbf9f8]">
        {/* Background image & gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmYLqhX8h9-vT7Zc9JSvzjDERkAed3M0LSuQzeI2ZSP5EGT8D_HsaMePSiQaLbVrqr8aSkyiVrWdf7EvFSs-kL4NVcX4X-IoICaArTUubT0lxAcqTqpXrAZrt4GFt7isGgiC3t13M8iE766pLLOh6ousxPAP2q1rpcUjshR7M-A9zRiUpypDsCnbYvvT4KxL-BAMyJe-A_k7OI8mBFh_XRNTP3KcXFB-n7X39SKQ6SprPPEn0M_u2-zs4igDADfqSnwI2wRofQ9OUv" 
            alt="Vedic Temple Sanctuary" 
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#fbf9f8] via-[#fbf9f8]/95 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-2xl space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-[#ffdbcc]/70 text-[#a04100] font-semibold text-xs uppercase tracking-widest rounded-full"
          >
            {t('hero.tagline', language)}
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-[#1b1c1c] leading-[1.15]"
          >
            {t('hero.title.1', language)}
            <span className="text-[#a04100] italic">{t('hero.title.italic', language)}</span>
            {t('hero.title.2', language)}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-[#5a4136] leading-relaxed max-w-lg"
          >
            {t('hero.subtitle', language)}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button 
              onClick={() => onNavigateToBook()}
              className="bg-[#a04100] hover:bg-[#a04100]/90 text-white font-semibold text-[14px] px-8 py-3.5 rounded-full hover:shadow-lg hover:shadow-[#a04100]/20 transition-all flex items-center gap-2 cursor-pointer group"
            >
              {t('hero.book_btn', language)}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="tel:+917067704371"
              className="border border-[#a04100] text-[#a04100] hover:bg-[#ffdbcc]/20 font-semibold text-[14px] px-8 py-3.5 rounded-full transition-all flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              {t('hero.call_btn', language)}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-y border-[#e2bfb0]/20 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center">
          <div className="space-y-1">
            <h3 className="font-serif text-3xl font-bold text-[#a04100]">1,000+</h3>
            <p className="text-xs text-[#5a4136]/70 uppercase tracking-widest font-semibold">
              {t('stats.pujas', language)}
            </p>
          </div>
          <div className="space-y-1 md:border-x md:border-[#e2bfb0]/20">
            <h3 className="font-serif text-3xl font-bold text-[#a04100]">20+</h3>
            <p className="text-xs text-[#5a4136]/70 uppercase tracking-widest font-semibold">
              {t('stats.cities', language)}
            </p>
          </div>
          <div className="space-y-1">
            <div className="flex justify-center items-center gap-1.5">
              <h3 className="font-serif text-3xl font-bold text-[#a04100]">4.9/5</h3>
              <div className="flex text-amber-500">
                <Star className="w-4 h-4 fill-amber-500" />
              </div>
            </div>
            <p className="text-xs text-[#5a4136]/70 uppercase tracking-widest font-semibold">
              {t('stats.rating', language)}
            </p>
          </div>
        </div>
      </section>

      {/* Sacred Services Bento Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-bold text-[#a04100] tracking-wider uppercase block">
              {t('bento.tagline', language)}
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1b1c1c]">
              {t('bento.title', language)}
            </h2>
            <p className="text-sm text-[#5a4136]">
              {t('hero.subtitle', language)}
            </p>
          </div>
          <button 
            onClick={onNavigateToServices}
            className="text-[#a04100] font-bold text-sm flex items-center gap-1.5 hover:translate-x-1.5 transition-transform cursor-pointer"
          >
            {language === 'sa' ? 'सर्वाः सेवाः पश्यन्तु' : 'View All Services'}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento Column 8 - Large Featured Card (Satyanarayan Katha) */}
          <div className="md:col-span-8 group relative rounded-2xl overflow-hidden bg-white shadow-md shadow-[#a33b38]/5 h-100">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH-GarctjYpeKQ6HZsUMT5ahnK6jRRZSEEg2ATnvTe7zsHw-hg-9gvN2mA8Eu7MrJoblTuShPB-ZCNLcutfFzbG_vjxscVyapyMNAuH0TCaE1zFrzGGxHNua3X7r7n9R1XdFUYhgrM7M8zMhIf0UBeGkeoHXR-tZvUbxVDJ_5YKQnV4f8V33NnVGvUIJ2JWAT6NAWshg_5aTvOypeU_dTaOIedL_TQBen64A0Av-MUzb5DmNXFqZ0D6R3e7A_Qbj7cRCcCL6nJnY8i" 
              alt="Satyanarayan Katha Setup" 
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-8">
              <span className="bg-[#fe8079] text-[#410004] px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest w-fit mb-4">
                {language === 'sa' ? 'लोकप्रियतमा' : 'Most Popular'}
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                {t('bento.satyanarayan.title', language)}
              </h3>
              <p className="text-white/80 max-w-md text-sm mb-6">
                {t('bento.satyanarayan.desc', language)}
              </p>
              <button 
                onClick={() => onNavigateToBook('satyanarayan')}
                className="bg-white hover:bg-[#ffdbcc] text-[#a04100] font-bold text-xs px-6 py-2.5 rounded-full w-fit hover:scale-105 transition-transform cursor-pointer"
              >
                {language === 'sa' ? 'सङ्कल्पं कुर्वन्तु' : 'Book Now • ₹2,100'}
              </button>
            </div>
          </div>

          {/* Bento Column 4 - Vertical Card (Rudrabhishek) */}
          <div className="md:col-span-4 group flex flex-col rounded-2xl overflow-hidden bg-white shadow-md shadow-[#a33b38]/5">
            <div className="h-48 overflow-hidden relative">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHtqVNIfYQaa0_t5490K6yMNliGj0XRO-9pwo_HkWLmSN3lw6j7OoKFY2qhLlhqcsNGRehSwjzoDKWFPceXPrS98gj-NIUjl2JjO1Z6v2-Yt1UzX_RNKTATa11aVH17T1zdXk8T7BWKrZiXm9s3D7mlWZ6rY0ewlwfrCIksBzmf0mgO4qGB58qvsOh5TikpJJd2AgAkRTibCaRrKshDONOy9DARKzwTrfWEevaGMpgpUGTjjOuaQNnGGun4_vGP8xEc2OxvBOIuB7b" 
                alt="Rudrabhishek Ceremony" 
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 right-4 bg-[#a04100] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                {language === 'sa' ? 'रुद्रविधिः' : 'Ritual'}
              </span>
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#1b1c1c] mb-2">
                  {t('bento.rudrabhishek.title', language)}
                </h3>
                <p className="text-[#5a4136] text-xs line-clamp-3">
                  {t('bento.rudrabhishek.desc', language)}
                </p>
              </div>
              <button 
                onClick={() => onNavigateToBook('rudrabhishek')}
                className="mt-4 text-[#a04100] hover:text-[#a04100]/80 text-xs font-bold flex items-center gap-1 cursor-pointer"
              >
                {language === 'sa' ? 'विवरणं सङ्कल्पश्च' : 'Details & Booking'}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Row of Smaller Cards - Bento Grids (Griha Pravesh, Vivah Sanskar, Astrology) */}
          <div className="md:col-span-4 bg-white/70 border border-[#e2bfb0]/20 p-6 rounded-2xl flex flex-col items-center text-center space-y-4 hover:border-[#a04100]/40 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#ffdbcc]/40 flex items-center justify-center text-[#a04100]">
              <Home className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-[17px] text-[#1b1c1c]">
              {t('bento.griha.title', language)}
            </h4>
            <p className="text-[#5a4136] text-xs leading-relaxed max-w-55">
              {t('bento.griha.desc', language)}
            </p>
          </div>

          <div className="md:col-span-4 bg-white/70 border border-[#e2bfb0]/20 p-6 rounded-2xl flex flex-col items-center text-center space-y-4 hover:border-[#a04100]/40 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#ffdbcc]/40 flex items-center justify-center text-[#a04100]">
              <Heart className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-[17px] text-[#1b1c1c]">
              {t('bento.wedding.title', language)}
            </h4>
            <p className="text-[#5a4136] text-xs leading-relaxed max-w-55">
              {t('bento.wedding.desc', language)}
            </p>
          </div>

          <div className="md:col-span-4 bg-white/70 border border-[#e2bfb0]/20 p-6 rounded-2xl flex flex-col items-center text-center space-y-4 hover:border-[#a04100]/40 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#ffdbcc]/40 flex items-center justify-center text-[#a04100]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-[17px] text-[#1b1c1c]">
              {t('bento.astrology.title', language)}
            </h4>
            <p className="text-[#5a4136] text-xs leading-relaxed max-w-55">
              {t('bento.astrology.desc', language)}
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Festivals Section */}
      <section className="py-20 bg-[#f6f3f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-bold text-[#a04100] tracking-wider uppercase block">
              {t('calendar.tagline', language)}
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1b1c1c]">
              {t('calendar.title', language)}
            </h2>
            <p className="text-sm text-[#5a4136] max-w-lg mx-auto">
              {t('calendar.desc', language)}
            </p>
          </div>

          {/* Festival Cards Scroll Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {festivals.map((fest, idx) => {
              const title = fest.titleKey ? t(fest.titleKey, language) : fest.title;
              const description = fest.descKey ? t(fest.descKey, language) : fest.description;
              
              const getIcon = (iconName: string) => {
                switch (iconName) {
                  case 'Sun':
                    return <Sun className="w-6 h-6 animate-spin" style={{ animationDuration: '20s' }} />;
                  case 'Moon':
                    return <Moon className="w-6 h-6" />;
                  case 'Award':
                    return <Award className="w-6 h-6" />;
                  default:
                    return <Calendar className="w-6 h-6" />;
                }
              };

              return (
                <div 
                  key={fest.id || idx} 
                  className={`bg-white rounded-2xl p-6 shadow-sm border-l-4 ${
                    fest.color || (idx % 3 === 0 ? 'border-[#a04100]' : idx % 3 === 1 ? 'border-[#a33b38]' : 'border-[#735c00]')
                  } flex flex-col justify-between space-y-6`}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-[#a04100] font-bold text-3xl">{fest.day}</p>
                        <p className="text-[#5a4136] text-xs font-bold uppercase tracking-tight">
                          {fest.monthYear}
                        </p>
                      </div>
                      <div className="p-2.5 bg-[#fbf9f8] rounded-xl text-[#a04100]/40">
                        {getIcon(fest.icon)}
                      </div>
                    </div>
                    <h3 className="font-serif font-bold text-[17px] text-[#1b1c1c]">{title}</h3>
                    <p className="text-xs text-[#5a4136] leading-relaxed">{description}</p>
                  </div>

                  <button 
                    onClick={() => onNavigateToBook()}
                    className="w-full text-center border border-[#ffdbcc] text-[#a04100] hover:bg-[#ffdbcc]/15 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer"
                  >
                    {t('calendar.prebook', language)}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divine Experiences Shared (Testimonials) */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-2">
          <span className="text-xs font-bold text-[#a04100] tracking-wider uppercase block">
            {t('testimonials.tagline', language)}
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1b1c1c]">
            {t('testimonials.title', language)}
          </h2>
          <div className="w-20 h-0.5 bg-[#a04100] mx-auto rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((test) => {
            return (
              <div 
                key={test.id} 
                className="bg-white/80 border border-[#e2bfb0]/20 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-amber-500 mb-5">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <p className="italic text-[#5a4136] text-[14px] leading-relaxed mb-6 font-serif">
                    "{t(test.comment, language)}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#e2bfb0]/10">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${test.avatarColor}`}>
                    {test.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-[#1b1c1c]">{test.name}</h5>
                    <p className="text-[10px] text-[#5a4136]/60">{test.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1b1c1c] text-center mb-12">
          {t('faq.title', language)}
        </h2>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-xl border border-[#e2bfb0]/20 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-5 text-left font-serif font-semibold text-xs md:text-[14px] text-[#1b1c1c] hover:bg-[#ffdbcc]/10 transition-colors cursor-pointer"
                >
                  <span>{t(faq.question, language)}</span>
                  <ChevronDown className={`w-4 h-4 text-[#a04100] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isOpen && (
                  <div className="p-5 pt-0 text-xs md:text-[13px] text-[#5a4136] leading-relaxed border-t border-[#e2bfb0]/10 bg-[#fbf9f8]">
                    {t(faq.answer, language)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#a04100] rounded-2xl p-8 md:p-12 mx-6 md:mx-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:24px_24px] pointer-events-none"></div>
        <div className="max-w-xl relative z-10 space-y-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold leading-tight">
            {t('home.cta.title', language)}
          </h2>
          <p className="text-white/85 text-xs md:text-sm leading-relaxed max-w-md">
            {t('home.cta.subtitle', language)}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button 
              onClick={() => onNavigateToBook()}
              className="bg-white text-[#a04100] font-bold text-xs px-6 py-3 rounded-full hover:scale-105 transition-transform cursor-pointer"
            >
              {t('home.cta.book', language)}
            </button>
            <button 
              onClick={onNavigateToServices}
              className="border border-white/40 text-white hover:bg-white/10 font-bold text-xs px-6 py-3 rounded-full transition-all cursor-pointer"
            >
              {t('home.cta.view', language)}
            </button>
          </div>
        </div>

        <div className="relative w-40 h-40 flex items-center justify-center relative z-10 shrink-0">
          <div className="absolute inset-0 bg-white/5 rounded-full animate-ping"></div>
          <div className="absolute inset-4 bg-white/10 rounded-full animate-pulse"></div>
          <Flame className="w-16 h-16 text-orange-200 relative animate-bounce" />
        </div>
      </section>
    </div>
  );
}
