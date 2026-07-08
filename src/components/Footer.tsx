import React, { useState } from 'react';
import { Mail, Send, Check } from 'lucide-react';
import poojaPanditLogo from '../assets/images/pooja_pandit_logo_1783261742775.jpg';
import { Language, t } from '../translations';

interface FooterProps {
  language: Language;
  setActiveTab: (tab: string) => void;
}

export default function Footer({ language, setActiveTab }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }
  };

  return (
    <footer className="bg-[#f0eded] border-t-[0.5px] border-[#e2bfb0]/30 py-16 px-6 md:px-12 mt-12 transition-all duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <img 
              src={poojaPanditLogo} 
              alt="Pooja Pandit Logo" 
              className="h-10 w-10 object-cover rounded-lg border border-[#e2bfb0]/30 shadow-xs"
              referrerPolicy="no-referrer"
            />
            <span className="font-serif text-2xl font-bold text-[#a04100]">
              {t('footer.brand', language)}
            </span>
          </div>
          <p className="text-[#5a4136] text-[14px] leading-relaxed max-w-sm mb-6">
            {t('footer.desc', language)}
          </p>
          <p className="text-[11px] text-[#5a4136]/60">
            © 2026 {t('footer.rights', language)}
          </p>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="font-semibold text-sm tracking-widest text-[#a04100] uppercase mb-6">
            {t('footer.quick_links', language)}
          </h4>
          <ul className="space-y-3 text-[13px] text-[#5a4136]/80">
            <li>
              <a 
                href="/services"
                onClick={(e) => { e.preventDefault(); setActiveTab('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                className="hover:text-[#a04100] transition-colors block text-left"
              >
                {t('footer.link.services', language)}
              </a>
            </li>
            <li>
              <a 
                href="/about"
                onClick={(e) => { e.preventDefault(); setActiveTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                className="hover:text-[#a04100] transition-colors block text-left"
              >
                {t('footer.link.about', language)}
              </a>
            </li>
            <li>
              <a 
                href="/book"
                onClick={(e) => { e.preventDefault(); setActiveTab('book'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                className="hover:text-[#a04100] transition-colors block text-left"
              >
                {t('footer.link.book', language)}
              </a>
            </li>
            <li>
              <a href="#register" className="hover:text-[#a04100] transition-colors block">
                {t('footer.link.register', language)}
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Column */}
        <div>
          <h4 className="font-semibold text-sm tracking-widest text-[#a04100] uppercase mb-6">
            {t('footer.legal', language)}
          </h4>
          <ul className="space-y-3 text-[13px] text-[#5a4136]/80">
            <li>
              <a href="#privacy" className="hover:text-[#a04100] transition-colors block">
                {t('footer.link.privacy', language)}
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-[#a04100] transition-colors block">
                {t('footer.link.terms', language)}
              </a>
            </li>
            <li>
              <a href="#refunds" className="hover:text-[#a04100] transition-colors block">
                {t('footer.link.refund', language)}
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter / Contact Column */}
        <div>
          <h4 className="font-semibold text-sm tracking-widest text-[#a04100] uppercase mb-4">
            {t('footer.newsletter', language)}
          </h4>
          <p className="text-xs text-[#5a4136]/80 mb-4 leading-relaxed">
            {t('footer.newsletter.desc', language)}
          </p>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <input 
              type="email" 
              required
              placeholder={t('footer.placeholder.email', language)}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/70 border border-[#e2bfb0]/40 rounded-xl px-3.5 py-2.5 text-xs text-[#1b1c1c] placeholder-[#5a4136]/40 focus:outline-none focus:border-[#a04100] focus:ring-1 focus:ring-[#a04100] w-full"
            />
            <button 
              type="submit"
              className="bg-[#a04100] text-white p-2.5 rounded-xl hover:bg-[#a04100]/90 transition-all flex items-center justify-center cursor-pointer"
            >
              {subscribed ? <Check className="w-4 h-4" /> : <Send className="w-4 h-4" />}
            </button>
          </form>

          {subscribed && (
            <span className="text-[11px] text-green-700 font-medium block mt-2 animate-pulse">
              {t('footer.subscribed', language)}
            </span>
          )}

          <div className="mt-6 pt-4 border-t border-[#e2bfb0]/20 space-y-1">
            <p className="text-[11px] text-[#5a4136]/70">
              <strong className="text-[#a04100]">Email:</strong> dheerajtripathi632@gmail.com
            </p>
            <p className="text-[11px] text-[#5a4136]/70">
              <strong className="text-[#a04100]">Phone:</strong> +91 70677 04371
            </p>
            <p className="text-[11px] text-[#5a4136]/70">
              <strong className="text-[#a04100]">Address:</strong> Begum Bazar, Kondapur, Hyderabad
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
