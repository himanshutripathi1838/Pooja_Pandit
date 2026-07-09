import React, { useState } from 'react';
import { Menu, X, Globe, User, Sun, Moon } from 'lucide-react';
import poojaPanditLogo from '../assets/images/pooja_pandit_logo_1783261742775.jpg';
import { Language, LANGUAGES, t } from '../translations';

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
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-[#a04100] hover:opacity-80 transition-all p-1"
            aria-label="Toggle Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <a 
            href="/" 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={(e) => {
              e.preventDefault();
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img 
              src={poojaPanditLogo} 
              alt="Pooja Pandit Logo" 
              className="h-10 w-10 object-cover rounded-lg border border-[#e2bfb0]/30 shadow-sm"
              referrerPolicy="no-referrer"
            />
            <span className="text-[#a04100] font-bold text-lg md:text-xl tracking-wider uppercase flex items-center gap-1.5">
              Pooja Pandit
            </span>
          </a>
        </div>

        {/* Center Navigation (Desktop) */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={item.id === 'home' ? '/' : `/${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`relative font-medium text-[15px] transition-colors duration-300 py-2 cursor-pointer ${
                  isActive 
                    ? 'text-[#a04100] dark:text-[#ff9d66] font-bold' 
                    : 'text-[#5a4136]/80 dark:text-[#fbf9f8]/80 hover:text-[#a04100] dark:hover:text-[#ff9d66]'
                }`}
              >
                {t(item.labelKey, language)}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#a04100] dark:bg-[#ff9d66] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right tools */}
        <div className="flex items-center gap-4">
          {/* Custom Language Dropdown Selector */}
          
          {/* Theme switcher */}
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="w-8 h-8 rounded-full border border-[#a04100]/20 bg-white dark:bg-[#141211] text-[#a04100] dark:text-[#ff9d66] hover:bg-[#ffdbcc]/10 dark:hover:bg-[#ffdbcc]/5 flex items-center justify-center cursor-pointer transition-all active:scale-95 shadow-xs"
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

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
                <div className="absolute right-0 mt-2.5 w-40 bg-white/95 backdrop-blur-md border border-[#e2bfb0]/40 rounded-2xl shadow-xl overflow-hidden py-1.5 z-20 animate-in fade-in slide-in-from-top-2 duration-200">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-medium transition-colors hover:bg-[#ffdbcc]/30 cursor-pointer ${
                        language === lang.code ? 'text-[#a04100] font-bold bg-[#ffdbcc]/20' : 'text-[#5a4136]'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Slide-out Drawer for Mobile */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-60 bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setMobileMenuOpen(false)}>
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuByFrlSzjQz__-hPuQ_861Ulk-bFND7ydx2Rk5o6qVuDDbSNG9K1yLGtP4MB_1op4HoXX7zHxKNzjSTWpDlHoG99_oj5EXenDJsHph3wHp76wWR0w4IDKYTTfk7lC0k1Dm2LUMYR_F7Ce59FoEq4wVX_mPexdIroYs4T3OXg_1o7g5ZHw6Uh1pDodEyVM8yIOTazMWSVMRcgmu-3x8CuQR1qYczPv6U6_wvXMuAJ0VMiYuMrisc6WNtLOULN-PAqiONOzxz2n85GfG5" 
                  alt="Pandit Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-sm text-[#a04100] dark:text-[#ff9d66]">
                  {language === 'sa' ? 'धीरज त्रिपाठी' : language === 'te' ? 'ధీరజ్ త్రిపాఠి' : 'Dheeraj Tripathi'}
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
