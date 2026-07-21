import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Users, ArrowRight, Sparkles, Filter, Info, X, Check, Star } from 'lucide-react';
import { Service } from '../types';
import { Language, t } from '../translations';

interface ServicesViewProps {
  language: Language;
  onSelectServiceToBook: (serviceId: string) => void;
  services: Service[];
}

type CategoryType = 'All' | 'Ceremony' | 'Havan' | 'Online Puja' | 'Astrology';

export default function ServicesView({ language, onSelectServiceToBook, services }: ServicesViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDetailService, setActiveDetailService] = useState<Service | null>(null);
  const [serviceRating, setServiceRating] = useState(0);
  const [serviceRated, setServiceRated] = useState(false);
  
  // Custom Puja Modal State
  const [customPujaModalOpen, setCustomPujaModalOpen] = useState(false);
  const [customName, setCustomName] = useState('');
  const [customDesc, setCustomDesc] = useState('');
  const [customSubmitted, setCustomSubmitted] = useState(false);

  const categories: { id: CategoryType; labelKey: string }[] = [
    { id: 'All', labelKey: 'services.filter.all' },
    { id: 'Ceremony', labelKey: 'services.filter.ceremony' },
    { id: 'Havan', labelKey: 'services.filter.havan' },
    { id: 'Online Puja', labelKey: 'services.filter.online' },
    { id: 'Astrology', labelKey: 'services.filter.astrology' },
  ];

  const filteredServices = services.filter(s => {
    const matchesCategory = selectedCategory === 'All' || s.category === selectedCategory;
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t(s.name, language).toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (s.details && s.details.some(d => d.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customName && customDesc) {
      setCustomSubmitted(true);
      setTimeout(() => {
        setCustomSubmitted(false);
        setCustomPujaModalOpen(false);
        setCustomName('');
        setCustomDesc('');
      }, 4000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 space-y-16">
      {/* Intro Header */}
      <section className="text-center md:text-left space-y-4">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#f0eded] dark:bg-[#f0eded]/10 text-[#a04100] dark:text-[#ff9d66] border border-[#e2bfb0]/30 dark:border-[#e2bfb0]/15 animate-pulse">
          <Sparkles className="w-3.5 h-3.5 mr-2" />
          <span className="text-[10px] uppercase font-bold tracking-widest">
            {t('hero.tagline', language)}
          </span>
        </div>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#a04100] dark:text-[#ff9d66]">
          {t('bento.tagline', language)}
        </h1>
        <p className="text-[#5a4136] dark:text-[#fbf9f8]/70 text-sm md:text-base max-w-2xl leading-relaxed">
          {t('hero.subtitle', language)}
        </p>
      </section>

      {/* Category Filters & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-4 border-b border-[#e2bfb0]/15 dark:border-[#e2bfb0]/10">
        <div className="flex flex-wrap items-center gap-3 overflow-x-auto scrollbar-none shrink-0">
          <Filter className="w-4 h-4 text-[#a04100] mr-2 shrink-0 hidden md:block" />
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#a04100] text-white shadow-md shadow-[#a04100]/20 scale-105'
                    : 'bg-white dark:bg-[#141211] text-[#5a4136] dark:text-[#fbf9f8]/80 border border-[#e2bfb0]/30 dark:border-[#e2bfb0]/15 hover:border-[#a04100] hover:text-[#a04100] dark:hover:text-[#ff9d66]'
                }`}
              >
                {t(cat.labelKey, language)}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:max-w-xs shrink-0">
          <input
            type="text"
            placeholder={language === 'sa' ? 'पूजा अन्वेषणम्...' : language === 'te' ? 'సేవలను శోధించండి...' : 'Search pujas & rituals...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-10 py-2.5 bg-white dark:bg-[#141211] border border-[#e2bfb0]/30 dark:border-[#e2bfb0]/15 rounded-full text-xs text-[#1b1c1c] dark:text-[#fbf9f8] placeholder-[#5a4136]/40 dark:placeholder-[#fbf9f8]/30 focus:outline-hidden focus:ring-1 focus:ring-[#a04100]"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#a04100]/60 dark:text-[#ff9d66]/60">🔍</span>
        </div>
      </div>

      {/* Grid of Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service) => {
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md shadow-[#a33b38]/5 border border-[#f0eded] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Card Banner */}
                <div className="h-60 overflow-hidden relative">
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img 
                    src={service.imageUrl} 
                    alt={service.name} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 right-4 z-20 bg-[#a04100]/90 text-white px-3.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest">
                    {service.badge || service.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-serif font-bold text-lg text-[#a04100] leading-tight">
                        {t(service.name, language)}
                      </h3>
                      {/* Service rating stars */}
                      <div className="flex items-center gap-1 mt-1 text-amber-500">
                        <div className="flex gap-0.5">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} className="w-3 h-3 fill-current" />
                          ))}
                        </div>
                        <span className="text-[9px] text-[#5a4136]/75 dark:text-zinc-400 font-bold ml-1">
                          4.9 (48+ reviews)
                        </span>
                      </div>
                      <span className="font-semibold text-sm text-[#735c00] shrink-0 font-sans">
                        ₹{service.price.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-xs text-[#5a4136]/90 leading-relaxed line-clamp-3">
                      {t(service.description, language)}
                    </p>
                  </div>

                  {/* Metadata and Actions */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-[#5a4136]/80 text-[11px] font-semibold border-t border-[#f0eded] pt-4">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#a04100]" />
                        <span>{t('services.card.duration', language)}: {t(service.duration, language)}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#a04100]" />
                        <span>{t('services.card.pandits', language)}: {t(service.panditsCount, language)}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setActiveDetailService(service)}
                        className="py-3 bg-[#f6f3f2] hover:bg-[#ffdbcc]/40 text-[#5a4136] hover:text-[#a04100] text-xs font-semibold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1"
                      >
                        <Info className="w-3.5 h-3.5" />
                        {language === 'sa' ? 'विवरणम्' : 'Details'}
                      </button>
                      <button
                        onClick={() => onSelectServiceToBook(service.id)}
                        className="py-3 bg-[#a04100] hover:bg-[#a04100]/90 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1 group cursor-pointer"
                      >
                        {t('services.card.book', language)}
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* More Services Banner / Request Custom Puja */}
      <section className="bg-[#f0eded] border border-[#e2bfb0]/30 p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
        <div className="max-w-xl text-center md:text-left space-y-2">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-[#a04100]">
            {t('services.custom.title', language)}
          </h2>
          <p className="text-xs md:text-sm text-[#5a4136] leading-relaxed">
            {t('services.custom.desc', language)}
          </p>
        </div>
        <button 
          onClick={() => setCustomPujaModalOpen(true)}
          className="px-8 py-3.5 bg-[#a33b38] hover:bg-[#a33b38]/90 text-white rounded-full font-semibold text-xs transition-all whitespace-nowrap cursor-pointer shadow-md hover:shadow-[#a33b38]/20"
        >
          {t('services.custom.button', language)}
        </button>
      </section>

      {/* Details Drawer / Modal Dialog */}
      <AnimatePresence>
        {activeDetailService && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setActiveDetailService(null)}>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveDetailService(null)}
                title="Close Details"
                aria-label="Close service details"
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-1.5 transition-colors z-20 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="h-52 relative">
                <img 
                  src={activeDetailService.imageUrl} 
                  alt={activeDetailService.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="bg-[#fe8079]/90 text-[#410004] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider block w-fit mb-1">
                    {t(activeDetailService.category, language)}
                  </span>
                  <h3 className="text-xl font-bold text-white font-serif">{t(activeDetailService.name, language)}</h3>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-6 max-h-100 overflow-y-auto">
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-[#a04100] uppercase tracking-widest">
                    {language === 'sa' ? 'पूजा परिचयः' : 'Ritual Overview'}
                  </h4>
                  <p className="text-[#5a4136] text-xs leading-relaxed">{t(activeDetailService.description, language)}</p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-[#a04100] uppercase tracking-widest">
                    {language === 'sa' ? 'यज्ञ विधी चरणानि' : 'Ceremony Inclusions & Steps'}
                  </h4>
                  <ul className="space-y-2">
                    {activeDetailService.details.map((detail, index) => (
                      <li key={index} className="flex gap-2 text-xs text-[#5a4136]">
                        <span className="text-[#a04100] font-bold shrink-0">🕉</span>
                        <span>{t(detail, language)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Rate this Service section */}
                <div className="space-y-3 pt-4 border-t border-[#e2bfb0]/20 dark:border-[#e2bfb0]/10">
                  <h4 className="text-xs font-bold text-[#a04100] dark:text-[#ff9d66] uppercase tracking-widest">
                    {language === 'sa' ? 'पूजा मूल्यांकनम्' : 'Rate this Puja / रेटिंग दें'}
                  </h4>
                  {serviceRated ? (
                    <p className="text-xs text-green-600 dark:text-green-400 font-semibold">
                      {language === 'sa' ? 'धन्यवादः! भवतः मूल्यांकनं सुरक्षितम्।' : 'Thank you for your feedback!'}
                    </p>
                  ) : (
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        {[1, 2, 3, 4, 5].map((starVal) => (
                          <button
                            key={starVal}
                            type="button"
                            onClick={() => {
                              setServiceRating(starVal);
                              setServiceRated(true);
                              setTimeout(() => setServiceRated(false), 3000);
                            }}
                            className="cursor-pointer transition-transform active:scale-90"
                          >
                            <Star 
                              className={'w-5 h-5 ' + (starVal <= serviceRating ? 'fill-amber-500 text-amber-500' : 'text-gray-300 dark:text-zinc-700')}
                            />
                          </button>
                        ))}
                      </div>
                      <span className="text-[10px] text-zinc-500 dark:text-zinc-400">
                        {serviceRating > 0 ? serviceRating + ' Stars' : 'Tap to rate'}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center bg-[#f6f3f2] dark:bg-[#0c0b0a]/30 p-4 rounded-xl">
                  <div>
                    <span className="text-[10px] text-[#5a4136]/60 font-semibold uppercase block">
                      {t('services.card.dakshina', language)}
                    </span>
                    <strong className="text-base text-[#a04100] font-sans">
                      ₹{activeDetailService.price.toLocaleString()}
                    </strong>
                  </div>
                  <button
                    onClick={() => {
                      onSelectServiceToBook(activeDetailService.id);
                      setActiveDetailService(null);
                    }}
                    className="bg-[#a04100] hover:bg-[#a04100]/90 text-white font-bold text-xs px-6 py-2.5 rounded-xl transition-all cursor-pointer"
                  >
                    {t('services.card.book', language)}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Custom Puja Request Modal */}
        {customPujaModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setCustomPujaModalOpen(false)}>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#fbf9f8] border border-[#e2bfb0]/20 rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setCustomPujaModalOpen(false)}
                title="Close"
                aria-label="Close form"
                className="absolute top-4 right-4 text-[#5a4136] hover:text-[#a04100] p-1.5 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {customSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1b1c1c]">
                    {language === 'sa' ? 'प्रार्थना स्वीकृता' : 'Request Received'}
                  </h3>
                  <p className="text-xs text-[#5a4136] leading-relaxed">
                    {language === 'sa' 
                      ? 'भवतः विशिष्टपूजाप्रार्थना स्वीकृता अस्ति। पण्डित धीरेंद्र शास्त्री जी २ घंटे अभ्यन्तरे भवतः दूरभाषे सम्पर्कं करिष्यति।'
                      : 'Your bespoke Puja request has been delivered to Pandit Dhirendra Shastri Ji. Our representatives will call you shortly with Vastu/Astrology details.'
                    }
                  </p>
                </div>
              ) : (
                <form onSubmit={handleCustomSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-[#a04100]">
                      {language === 'sa' ? 'विशिष्ट पूजा प्रार्थना' : 'Request Custom Ritual'}
                    </h3>
                    <p className="text-xs text-[#5a4136]/80 leading-relaxed">
                      Describe your astrological concern, familial tradition, or specific deities you wish to worship.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-[#5a4136]">Your Full Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Vikramaditya Sharma"
                        value={customName}
                        onChange={(e) => setCustomName(e.target.value)}
                        className="bg-white border border-[#e2bfb0]/40 rounded-xl px-4 py-3 text-xs text-[#1b1c1c] focus:outline-none focus:border-[#a04100] focus:ring-1 focus:ring-[#a04100]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-[#5a4136]">Ceremony details / Astro Concerns</label>
                      <textarea 
                        required
                        rows={4}
                        placeholder="e.g. Navagraha Dosha Nivaran for new business launch..."
                        value={customDesc}
                        onChange={(e) => setCustomDesc(e.target.value)}
                        className="bg-white border border-[#e2bfb0]/40 rounded-xl px-4 py-3 text-xs text-[#1b1c1c] focus:outline-none focus:border-[#a04100] focus:ring-1 focus:ring-[#a04100] resize-none"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#a04100] hover:bg-[#a04100]/90 text-white font-bold text-xs py-3.5 rounded-xl transition-all cursor-pointer"
                  >
                    {language === 'sa' ? 'प्रार्थनां प्रेषयतु' : 'Send Request to Pandit Ji'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
