import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  BookOpen, 
  Flame, 
  Video, 
  ChevronRight,
  ChevronLeft,
  Sun,
  Moon,
  Home,
  X
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
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  // Rating Form States
  const [revName, setRevName] = useState('');
  const [revRole, setRevRole] = useState('');
  const [revRating, setRevRating] = useState(5);
  const [revComment, setRevComment] = useState('');
  const [revSubmitted, setRevSubmitted] = useState(false);

  // Load dynamic reviews state
  const [reviews, setReviews] = useState<any[]>(() => {
    try {
      const stored = localStorage.getItem('custom_testimonials');
      return stored ? [...TESTIMONIALS, ...JSON.parse(stored)] : TESTIMONIALS;
    } catch (e) {
      return TESTIMONIALS;
    }
  });

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (revName && revComment) {
      const newRev = {
        id: 'custom-rev-' + Date.now(),
        name: revName,
        role: revRole || (language === 'sa' ? 'भक्तः' : 'Devotee'),
        rating: revRating,
        comment: revComment,
        avatarColor: ['bg-red-100 text-red-600', 'bg-blue-100 text-blue-600', 'bg-amber-100 text-amber-600', 'bg-purple-100 text-purple-600', 'bg-emerald-100 text-emerald-600'][Math.floor(Math.random() * 5)]
      };
      const stored = localStorage.getItem('custom_testimonials');
      const list = stored ? JSON.parse(stored) : [];
      list.push(newRev);
      localStorage.setItem('custom_testimonials', JSON.stringify(list));
      setReviews([...TESTIMONIALS, ...list]);
      setRevSubmitted(true);
      setTimeout(() => {
        setRevSubmitted(false);
        setIsReviewModalOpen(false);
        setRevName('');
        setRevRole('');
        setRevRating(5);
        setRevComment('');
      }, 3000);
    }
  };

  // Filter past festivals (monthly expiration)
  const filterActiveFestivals = (list: any[]) => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth(); // 0-indexed (6 = July)

    return list.filter(fest => {
      try {
        if (fest.date) {
          const fDate = new Date(fest.date);
          if (fDate.getFullYear() < currentYear) return false;
          if (fDate.getFullYear() === currentYear && fDate.getMonth() < currentMonth) return false;
          return true;
        }
        if (fest.day && fest.monthYear) {
          const fDate = new Date(fest.day + ' ' + fest.monthYear);
          if (isNaN(fDate.getTime())) return true;
          if (fDate.getFullYear() < currentYear) return false;
          if (fDate.getFullYear() === currentYear && fDate.getMonth() < currentMonth) return false;
          return true;
        }
      } catch (e) {
        console.error(e);
      }
      return true;
    });
  };

  // Filter 3 services to show as featured
  const featuredServices = SERVICES.slice(0, 3);

  // Load dynamic festivals list
  const [festivals, setFestivals] = useState<any[]>(() => {
    try {
      const stored = localStorage.getItem('custom_festivals');
      const list = stored ? JSON.parse(stored) : UPCOMING_FESTIVALS;
      return filterActiveFestivals(list);
    } catch (e) {
      return filterActiveFestivals(UPCOMING_FESTIVALS);
    }
  });

  useEffect(() => {
    const handleUpdate = () => {
      try {
        const stored = localStorage.getItem('custom_festivals');
        if (stored) {
          setFestivals(filterActiveFestivals(JSON.parse(stored)));
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
      <section className="relative min-h-165 flex items-center overflow-hidden px-6 md:px-12 py-16 bg-[#fbf9f8] dark:bg-[#0c0b0a]">
        {/* Background image & gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmYLqhX8h9-vT7Zc9JSvzjDERkAed3M0LSuQzeI2ZSP5EGT8D_HsaMePSiQaLbVrqr8aSkyiVrWdf7EvFSs-kL4NVcX4X-IoICaArTUubT0lxAcqTqpXrAZrt4GFt7isGgiC3t13M8iE766pLLOh6ousxPAP2q1rpcUjshR7M-A9zRiUpypDsCnbYvvT4KxL-BAMyJe-A_k7OI8mBFh_XRNTP3KcXFB-n7X39SKQ6SprPPEn0M_u2-zs4igDADfqSnwI2wRofQ9OUv" 
            alt="Vedic Temple Sanctuary" 
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#fbf9f8] via-[#fbf9f8]/95 to-transparent dark:from-[#0c0b0a] dark:via-[#0c0b0a]/95"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-2xl space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-[#ffdbcc]/70 dark:bg-[#ffdbcc]/10 text-[#a04100] dark:text-[#ff9d66] font-semibold text-xs uppercase tracking-widest rounded-full"
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
            <h3 className="font-serif text-3xl font-bold text-[#a04100]">10,000+</h3>
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
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1b1c1c] dark:text-[#fbf9f8]">
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
              <div className="flex items-center gap-0.5 text-amber-400 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-current" />
                ))}
                <span className="text-[10px] text-white/90 font-bold ml-1.5">4.9 (64 reviews)</span>
              </div>
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
                <h3 className="font-serif text-lg font-bold text-[#1b1c1c] dark:text-[#fbf9f8] mb-2">
                  {t('bento.rudrabhishek.title', language)}
                </h3>
                <div className="flex items-center gap-0.5 text-amber-500 mb-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3 h-3 fill-current" />
                  ))}
                  <span className="text-[10px] text-[#5a4136]/80 dark:text-[#fbf9f8]/60 font-bold ml-1.5">4.9 (52 reviews)</span>
                </div>
                <p className="text-[#5a4136] dark:text-[#fbf9f8]/70 text-xs line-clamp-3">
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
            <h4 className="font-serif font-bold text-[17px] text-[#1b1c1c] dark:text-[#fbf9f8]">
              {t('bento.griha.title', language)}
            </h4>
            <p className="text-[#5a4136] dark:text-[#fbf9f8]/75 text-xs leading-relaxed max-w-55">
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

      
      {/* Popular Pujas & Sacred Havans Showcase */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#a04100] tracking-wider uppercase block">
              {language === 'sa' ? 'लोकप्रिय-वैदिक-पूजाः' : 'Vedic Rituals & Havans'}
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#1b1c1c] dark:text-[#fbf9f8]">
              {language === 'sa' ? 'मुख्यपूजाः अनुष्ठानानि च' : 'Featured Pujas, Havans & Anushthans'}
            </h2>
            <p className="text-sm text-[#5a4136] dark:text-[#fbf9f8]/70 max-w-xl">
              {language === 'sa' 
                ? 'वेदोक्तविधिना सम्पाद्यमानाः प्रमुखाः पूजाः हवनविधयश्च।' 
                : 'Book certified Vedic Pandits for Chandi Havan, Mahamrityunjay Jap, Navgrah Shanti, Kaal Sarp Dosh, and all Sanatan Pujas.'}
            </p>
          </div>
          <button 
            onClick={onNavigateToServices}
            className="px-6 py-3 bg-[#a04100] hover:bg-[#853500] text-white text-xs font-bold rounded-full hover:scale-105 transition-all cursor-pointer shadow-md flex items-center gap-2 shrink-0"
          >
            <span>{language === 'sa' ? 'सर्वाः ४५+ सेवाः पश्यन्तु' : 'Explore All 45+ Services'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              id: 'chandihavan',
              name: 'Chandi Havan',
              nameHi: 'चंडी हवन',
              price: '₹7,000',
              img: '/assets/chandi_havan.png',
              badge: 'Protection',
              desc: 'Powerful Vedic Havan dedicated to Goddess Chandi for victory over negative forces & divine protection.'
            },
            {
              id: 'mahamrityunjayjap',
              name: 'Mahamrityunjay Jap',
              nameHi: 'महामृत्युंजय जाप',
              price: '₹11,000',
              img: '/assets/mahamrityunjay_jap.png',
              badge: 'Health',
              desc: 'Sacred chanting of 11,000 Maha Mrityunjaya Mantras for health rejuvenation, longevity & Shiva blessings.'
            },
            {
              id: 'navgrahshanti',
              name: 'Navgrah Shanti Puja',
              nameHi: 'नवग्रह शांति पूजा',
              price: '₹11,000',
              img: '/assets/navgrah_shanti.png',
              badge: 'Astrology',
              desc: 'Planetary alignment ritual with 9 colored grains & wood to pacify all nine planets & eliminate doshas.'
            },
            {
              id: 'kaalsarpdosh',
              name: 'Kaal Sarp Dosh Puja',
              nameHi: 'कालसर्प दोष पूजा',
              price: '₹11,000',
              img: '/assets/kaalsarp_dosh.png',
              badge: 'Remedy',
              desc: 'Specialized Vedic ritual with silver Nag Devta idol & havan to neutralize Rahu-Ketu Kaal Sarp Dosh.'
            },
            {
              id: 'pitradosh',
              name: 'Pitra Dosh Shanti Puja',
              nameHi: 'पितृ दोष शांति पूजा',
              price: '₹11,000',
              img: '/assets/pitra_dosh.png',
              badge: 'Ancestral',
              desc: 'Ancestral Tarpan & Pinda Daan ceremony to seek blessings of ancestors and achieve family progress.'
            },
            {
              id: 'ramcharitmanas',
              name: 'Musical Ramcharitmanas Path',
              nameHi: 'संगीतबद्ध श्रीरामचरितमानस पाठ',
              price: '₹25,000',
              img: '/assets/ramcharitmanas.png',
              badge: 'Akhand Path',
              desc: 'Complete 24-hour Akhand recitation of Sri Ramcharitmanas with devotional musical accompaniment.'
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              className="group bg-white dark:bg-[#141211] rounded-2xl overflow-hidden shadow-md border border-[#e2bfb0]/25 dark:border-[#e2bfb0]/10 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-[#a04100] text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.badge}
                </span>
              </div>
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-serif font-bold text-base text-[#1b1c1c] dark:text-[#fbf9f8]">
                      {language === 'hi' ? item.nameHi : item.name}
                    </h3>
                    <span className="font-bold text-sm text-[#a04100] dark:text-[#ff9d66]">{item.price}</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3 h-3 fill-current" />
                    ))}
                    <span className="text-[10px] text-[#5a4136]/70 dark:text-zinc-400 font-bold ml-1">4.9 (50+ reviews)</span>
                  </div>
                  <p className="text-xs text-[#5a4136] dark:text-[#fbf9f8]/70 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <button
                  onClick={() => onNavigateToBook(item.id)}
                  className="w-full py-2.5 bg-[#f6f3f2] dark:bg-[#0c0b0a] hover:bg-[#a04100] text-[#a04100] hover:text-white dark:text-[#ff9d66] text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>{language === 'sa' ? 'सङ्कल्पं कुर्वन्तु' : 'Book Now'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
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
            <p className="text-sm text-[#5a4136] dark:text-[#fbf9f8]/70 max-w-lg mx-auto">
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

      {/* Blog Preview Section */}
      <section className="py-20 bg-[#f6f3f2]/40 dark:bg-[#0c0b0a]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold text-[#a04100] tracking-wider uppercase block">
                {language === 'sa' ? 'ज्ञानगङ्गा' : 'Vedic Wisdom'}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1b1c1c] dark:text-[#fbf9f8]">
                {language === 'sa' ? 'शास्त्रचर्चा ज्ञानमञ्जरी च' : 'Latest Spiritual Blog Posts'}
              </h2>
            </div>
            <button 
              onClick={() => {
                window.history.pushState({ tab: 'blog' }, '', '/blog');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
              className="text-[#a04100] dark:text-[#ff9d66] hover:text-[#a04100]/80 text-xs font-bold flex items-center gap-1.5 justify-center md:justify-start cursor-pointer transition-all hover:gap-2 shrink-0"
            >
              <span>{language === 'sa' ? 'सर्वं पठन्तु' : 'View All Articles'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'The Spiritual Significance of Griha Pravesh Puja',
                titleHi: 'गृह प्रवेश पूजा का आध्यात्मिक और वैज्ञानिक महत्व',
                desc: 'Understand why cleansing a new home with sacred Vedic mantras, Gau Puja, and Vastu Havan is essential for family health and prosperity.',
                descHi: 'जानिए क्यों नए घर को वैदिक मंत्रों, गौ पूजा और वास्तु हवन से शुद्ध करना परिवार की खुशहाली और स्वास्थ्य के लिए अनिवार्य है।',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH-GarctjYpeKQ6HZsUMT5ahnK6jRRZSEEg2ATnvTe7zsHw-hg-9gvN2mA8Eu7MrJoblTuShPB-ZCNLcutfFzbG_vjxscVyapyMNAuH0TCaE1zFrzGGxHNua3X7r7n9R1XdFUYhgrM7M8zMhIf0UBeGkeoHXR-tZvUbxVDJ_5YKQnV4f8V33NnVGvUIJ2JWAT6NAWshg_5aTvOypeU_dTaOIedL_TQBen64A0Av-MUzb5DmNXFqZ0D6R3e7A_Qbj7cRCcCL6nJnY8i'
              },
              {
                title: 'Why Perform Rudrabhishek in the Month of Shravana?',
                titleHi: 'सावन के पवित्र महीने में रुद्राभिषेक करने के लाभ',
                desc: 'Learn about the cosmic energies active during Shravana and how performing Shiva Rudrabhishek with milk, honey, and cane juice helps astrological balancing.',
                descHi: 'श्रावण मास में सक्रिय ब्रह्मांडीय ऊर्जाओं और शिव रुद्राभिषेक से कुंडली के ग्रहों को शांत करने की विधि के बारे में जानें।',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXVp6nH85YURUHr5R27KRMSfhXPnAEMgBjG4cUs7f6LbIbVbIy3Ygh4yHXjlVbmKKrMz5eVgySE652yCwVV7DWo2Ba06dNezPDr6fN4Zp1KsPR4mHLd8MOSZILU3AUSBTCEmOoH9OxBJ526XzSJOd1prkUsEO0v9muepzfg4O9fNy72P1reZJjFu-IdEpk2uL4Bgaqrwu2uxwlBGAqzib5M2mY01LIFeXKTg81idVjG-PLoUYhFJn2Cnnc3TQkAHwvtztHkBY-Yh8h'
              },
              {
                title: 'Astrological & Spiritual Benefits of Satyanarayan Puja',
                titleHi: 'श्री सत्यनारायण व्रत कथा के ज्योतिषीय और आध्यात्मिक लाभ',
                desc: 'The complete guide to performing Satyanarayan katha on Purnima (full moon) days to resolve business disputes, marital delay, and family stress.',
                descHi: 'व्यापार में लाभ, वैवाहिक बाधाओं को दूर करने और मानसिक शांति के लिए पूर्णिमा पर सत्यनारायण कथा कराने की विधि का संपूर्ण गाइड।',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjGEflm6WAoB3z3mtBZAuIuhDiv9geJ0a7QhjrUsYlWVZ9eLLbZXLMdogfy_33ue3UVppAJan2SEfkUZ20Ltz9CIJBvkZ8-goqZJQd7KL9ELcxv4IqDRsaLeSakVPStUeIY7bVoREZsG2WCv-l_XdvAaJipnxOrw2KLG-fIAVYTC4pDFdJJ8uUlB_MZYm1_r0z2ca32xoAy3lEDR2Bny_HP33FZMTs4WWhtA-ZT2QPwKj1cEI-YRv4aB4o9GjN1gXfdcnp_6F6Ujh5'
              }
            ].map((post, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-[#141211] border border-[#e2bfb0]/25 dark:border-[#e2bfb0]/10 rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 overflow-hidden relative bg-[#ffdbcc]/10">
                    <img 
                      src={post.image} 
                      alt={language === 'en' ? post.title : post.titleHi} 
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif font-bold text-sm text-[#1b1c1c] dark:text-[#fbf9f8] line-clamp-2 leading-snug">{language === 'en' ? post.title : post.titleHi}</h3>
                    <p className="text-[11px] text-[#5a4136] dark:text-[#fbf9f8]/70 line-clamp-3 leading-relaxed">{language === 'en' ? post.desc : post.descHi}</p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <button 
                    onClick={() => {
                      window.history.pushState({ tab: 'blog' }, '', '/blog');
                      window.dispatchEvent(new PopStateEvent('popstate'));
                    }}
                    className="text-[#a04100] dark:text-[#ff9d66] hover:text-[#a04100]/80 text-[11px] font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <span>{language === 'sa' ? 'पठन्तु' : 'Read Article'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divine Experiences Shared (Testimonials) */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-2 dark:text-[#fbf9f8]">
          <span className="text-xs font-bold text-[#a04100] tracking-wider uppercase block">
            {t('testimonials.tagline', language)}
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1b1c1c]">
            {t('testimonials.title', language)}
          </h2>
          <div className="w-20 h-0.5 bg-[#a04100] mx-auto rounded-full mt-3"></div>
          <button 
            onClick={() => setIsReviewModalOpen(true)}
            className="mt-6 px-5 py-2.5 bg-[#a04100] hover:bg-[#853500] text-white text-xs font-bold rounded-full hover:scale-105 transition-all cursor-pointer shadow-xs active:scale-95 flex items-center gap-1.5 mx-auto"
          >
            <span>★</span>
            <span>{language === 'sa' ? 'समीक्षां लिखन्तु' : 'Write a Review / समीक्षा लिखें'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((test) => {
            return (
              <div 
                key={test.id} 
                className="bg-white/80 dark:bg-[#141211]/80 border border-[#e2bfb0]/25 dark:border-[#e2bfb0]/10 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
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

      
      {/* Write a Review Modal */}
      <AnimatePresence>
        {isReviewModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-[#141211] border border-[#e2bfb0]/30 dark:border-[#e2bfb0]/15 p-6 md:p-8 rounded-3xl max-w-md w-full shadow-2xl space-y-6"
            >
              <div className="flex justify-between items-center pb-4 border-b border-[#e2bfb0]/15 dark:border-[#e2bfb0]/10">
                <h3 className="font-serif text-lg font-bold text-[#a04100] dark:text-[#ff9d66]">
                  {language === 'sa' ? 'नूतन-समीक्षा-लेखनम्' : 'Submit a Review / समीक्षा लिखें'}
                </h3>
                <button 
                  onClick={() => setIsReviewModalOpen(false)}
                  className="p-1 hover:bg-[#ffdbcc]/20 rounded-full cursor-pointer text-[#5a4136] dark:text-[#fbf9f8]/60"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {revSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-950/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto">
                    ✓
                  </div>
                  <h4 className="font-bold text-base text-[#1b1c1c] dark:text-[#fbf9f8]">Review Submitted!</h4>
                  <p className="text-xs text-[#5a4136]/75 dark:text-[#fbf9f8]/60">Thank you for sharing your divine experience.</p>
                </div>
              ) : (
                <form onSubmit={handleAddReview} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#5a4136] dark:text-[#fbf9f8]/70">Your Name / नाम</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={revName}
                      onChange={(e) => setRevName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#fbf9f8] dark:bg-[#0c0b0a] border border-[#e2bfb0]/30 dark:border-[#e2bfb0]/15 rounded-xl text-xs text-[#1b1c1c] dark:text-[#fbf9f8]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#5a4136] dark:text-[#fbf9f8]/70">Role / पद (e.g. Devotee, Homeowner)</label>
                    <input 
                      type="text"
                      placeholder="e.g. Devotee"
                      value={revRole}
                      onChange={(e) => setRevRole(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#fbf9f8] dark:bg-[#0c0b0a] border border-[#e2bfb0]/30 dark:border-[#e2bfb0]/15 rounded-xl text-xs text-[#1b1c1c] dark:text-[#fbf9f8]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#5a4136] dark:text-[#fbf9f8]/70 block mb-1">Rating / रेटिंग</label>
                    <div className="flex gap-1.5">
                      {[1, 2, 3, 4, 5].map((starVal) => (
                        <button
                          key={starVal}
                          type="button"
                          onClick={() => setRevRating(starVal)}
                          className="cursor-pointer transition-transform active:scale-90"
                        >
                          <Star 
                            className={'w-7 h-7 ' + (starVal <= revRating ? 'fill-amber-500 text-amber-500' : 'text-gray-300 dark:text-zinc-700')}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#5a4136] dark:text-[#fbf9f8]/70">Your Review / समीक्षा</label>
                    <textarea 
                      rows={3}
                      required
                      placeholder="Share your spiritual feedback..."
                      value={revComment}
                      onChange={(e) => setRevComment(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#fbf9f8] dark:bg-[#0c0b0a] border border-[#e2bfb0]/30 dark:border-[#e2bfb0]/15 rounded-xl text-xs text-[#1b1c1c] dark:text-[#fbf9f8]"
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button 
                      type="button"
                      onClick={() => setIsReviewModalOpen(false)}
                      className="flex-1 py-3 border border-[#e2bfb0]/30 text-[#5a4136] dark:text-[#fbf9f8]/80 text-xs font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="flex-1 py-3 bg-[#a04100] text-white text-xs font-bold rounded-xl hover:bg-[#853500] transition-colors cursor-pointer shadow-xs"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Frequently Asked Questions */}
      <section className="max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1b1c1c] dark:text-[#fbf9f8] text-center mb-12">
          {t('faq.title', language)}
        </h2>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx} 
                className="bg-white dark:bg-[#141211] rounded-xl border border-[#e2bfb0]/25 dark:border-[#e2bfb0]/10 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-5 text-left font-serif font-semibold text-xs md:text-[14px] text-[#1b1c1c] dark:text-[#fbf9f8] hover:bg-[#ffdbcc]/10 dark:hover:bg-[#ffdbcc]/5 transition-colors cursor-pointer"
                >
                  <span>{t(faq.question, language)}</span>
                  <ChevronDown className={`w-4 h-4 text-[#a04100] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isOpen && (
                  <div className="p-5 pt-0 text-xs md:text-[13px] text-[#5a4136] dark:text-[#fbf9f8]/80 leading-relaxed border-t border-[#e2bfb0]/10 dark:border-[#e2bfb0]/5 bg-[#fbf9f8] dark:bg-[#0c0b0a]/30">
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
