import React, { useState } from 'react';
import { Menu, X, Globe, User, Sun, Moon } from 'lucide-react';
import poojaPanditLogo from '../assets/images/pooja_pandit_logo_1783261742775.jpg';
import { Language, LANGUAGES, t } from '../translations';
import panditPortrait from '../assets/pandit_dheeraj_portrait.png';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export default function Header({ activeTab, setActiveTab, language, setLanguage, theme, setTheme }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const navItems = [
    { id: 'home', labelKey: 'nav.home' },
    { id: 'services', labelKey: 'nav.services' },
    { id: 'gallery', labelKey: 'nav.gallery' },
    { id: 'about', labelKey: 'nav.about' },
    { id: 'book', labelKey: 'nav.book' },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-[#fbf9f8]/80 dark:bg-[#0c0b0a]/80 backdrop-blur-xl border-b-[0.5px] border-[#e2bfb0]/30 dark:border-[#e2bfb0]/15 shadow-sm h-20 flex justify-between items-center px-6 md:px-12 transition-all duration-300">
        {/* Left logo */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setActiveTab('home')} 
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-hidden"
          >
            <img 
              src={poojaPanditLogo} 
              alt="Pooja Pandit Logo" 
              className="h-10 w-10 object-cover rounded-xl border border-[#e2bfb0]/30 group-hover:scale-105 transition-transform shadow-xs"
              referrerPolicy="no-referrer"
            />
            <div>
              <span className="font-bold text-lg text-[#a04100] tracking-wider uppercase block leading-none">
                Pooja Pandit
              </span>
              <span className="text-[10px] text-[#5a4136]/70 uppercase tracking-widest font-semibold block mt-1">
                Pandit Dhirendra Shastri Ji
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={item.id === 'home' ? '/' : `/${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(item.id);
                }}
                className={`relative py-2 text-sm font-semibold transition-colors cursor-pointer ${
                  isActive 
                    ? 'text-[#a04100] dark:text-[#ff9d66] font-bold' 
                    : 'text-[#5a4136]/80 dark:text-[#fbf9f8]/80 hover:text-[#a04100] dark:hover:text-[#ff9d66]'
                }`}
              >
                {t(item.labelKey, language)}
              </a>
            );
          })}
        </nav>

        {/* Right tools */}
        <div className="flex items-center gap-4">
          {/* Theme switcher */}
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="w-8 h-8 rounded-full border border-[#a04100]/20 bg-white dark:bg-[#141211] text-[#a04100] dark:text-[#ff9d66] hover:bg-[#ffdbcc]/10 dark:hover:bg-[#ffdbcc]/5 flex items-center justify-center cursor-pointer transition-all active:scale-95 shadow-xs"
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          {/* Custom Language Dropdown Selector */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="px-4 py-1.5 rounded-full border border-[#a04100]/20 bg-white dark:bg-[#141211] hover:bg-[#ffdbcc]/10 dark:hover:bg-[#ffdbcc]/5 text-xs font-semibold text-[#a04100] dark:text-[#ff9d66] transition-all cursor-pointer flex items-center gap-2 shadow-xs active:scale-95"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{LANGUAGES.find(l => l.code === language)?.label}</span>
              <span className={`text-[9px] transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>

            {/* Dropdown Items list */}
            {langDropdownOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setLangDropdownOpen(false)} />
                <div className="absolute right-0 mt-2.5 w-40 bg-white/95 dark:bg-[#141211]/95 backdrop-blur-md border border-[#e2bfb0]/40 dark:border-[#e2bfb0]/15 rounded-2xl shadow-xl overflow-hidden py-1.5 z-20 animate-in fade-in slide-in-from-top-2 duration-200">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-medium transition-colors hover:bg-[#ffdbcc]/30 dark:hover:bg-[#ffdbcc]/10 cursor-pointer ${
                        language === lang.code ? 'text-[#a04100] dark:text-[#ff9d66] font-bold bg-[#ffdbcc]/20 dark:bg-[#ffdbcc]/5' : 'text-[#5a4136] dark:text-[#fbf9f8]/75'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-[#5a4136] hover:text-[#a04100] cursor-pointer"
            title="Open Menu"
            aria-label="Open mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="fixed top-0 left-0 bottom-0 w-72 bg-[#fbf9f8] dark:bg-[#0c0b0a] shadow-2xl flex flex-col border-r border-[#e2bfb0]/20 dark:border-[#e2bfb0]/15 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <img 
                  src={poojaPanditLogo} 
                  alt="Pooja Pandit Logo" 
                  className="h-8 w-8 object-cover rounded-lg border border-[#e2bfb0]/30 shadow-xs"
                  referrerPolicy="no-referrer"
                />
                <span className="font-bold text-base text-[#a04100] tracking-wider uppercase">
                  Pooja Pandit
                </span>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                title="Close Menu"
                aria-label="Close mobile menu"
                className="p-1 text-[#5a4136] dark:text-[#fbf9f8]/80"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Profile banner inside drawer */}
            <div className="mb-4 p-4 bg-[#ffdbcc]/40 dark:bg-[#ffdbcc]/10 rounded-xl flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-[#a04100]/20">
                <img 
                  src={panditPortrait} 
                  alt="Pandit Portrait"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <p className="font-bold text-sm text-[#a04100] dark:text-[#ff9d66]">
                  {language === 'sa' ? 'धीरेंद्र शास्त्री जी' : language === 'te' ? 'ధీరేంద్ర శాస్త్రి జీ' : 'Pandit Dhirendra Shastri Ji'}
                </p>
                <p className="text-[10px] text-[#5a4136]/70 dark:text-[#fbf9f8]/60 uppercase tracking-wider font-semibold">
                  {language === 'sa' ? 'ऋग्वेदाचार्य' : 'Vedic Master'}
                </p>
              </div>
            </div>

            {/* Mobile Language Selector */}
            <div className="mb-4 p-1 bg-[#ffdbcc]/20 dark:bg-[#ffdbcc]/5 border border-[#e2bfb0]/10 dark:border-[#e2bfb0]/15 rounded-xl">
              <p className="text-[9px] text-[#5a4136]/50 uppercase tracking-widest font-bold px-2 py-1 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#a04100]" />
                Language / भाषा
              </p>
              <div className="grid grid-cols-2 gap-1 p-1">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-2 py-1.5 rounded-lg text-center text-[11px] font-semibold transition-all cursor-pointer ${
                      language === lang.code 
                        ? 'bg-[#a04100] dark:bg-[#ff9d66] dark:text-[#0c0b0a] text-white shadow-xs' 
                        : 'text-[#5a4136] dark:text-[#fbf9f8]/85 hover:bg-[#ffdbcc]/40 bg-white/40 dark:bg-[#141211]/40'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.id === 'home' ? '/' : `/${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(item.id);
                      setMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`flex items-center justify-between p-3 rounded-xl font-medium text-left text-sm transition-all ${
                      isActive 
                        ? 'bg-[#a04100] dark:bg-[#ff9d66] dark:text-[#0c0b0a] text-white' 
                        : 'text-[#5a4136] dark:text-[#fbf9f8]/85 hover:bg-[#ffdbcc]/20 dark:hover:bg-[#ffdbcc]/10'
                    }`}
                  >
                    <span>{t(item.labelKey, language)}</span>
                  </a>
                );
              })}
            </nav>

            {/* Subtle disclaimer in drawer */}
            <div className="mt-auto pt-4 border-t border-[#e2bfb0]/20 text-center">
              <p className="text-[10px] text-[#5a4136]/50 dark:text-[#fbf9f8]/40">
                {language === 'sa' ? 'सर्वे भद्राणि पश्यन्तु' : 'May all see auspiciousness'}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
