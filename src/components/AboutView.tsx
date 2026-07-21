import React from 'react';
import { Sparkles } from 'lucide-react';
import { LANGUAGE_PROFICIENCIES } from '../data';
import { Language, t } from '../translations';
import acharyaPhoto from '../assets/pandit_dheeraj_portrait.png';

interface AboutViewProps {
  language: Language;
}

export default function AboutView({ language }: AboutViewProps) {
  return (
    <div className="space-y-20">
      {/* Hero / Intro Section */}
      <section className="bg-[#f0eded]/30 dark:bg-[#141211]/50 border border-transparent dark:border-[#e2bfb0]/10 rounded-3xl p-8 md:p-12 mx-6 md:mx-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Text Info */}
          <div className="md:col-span-7 space-y-6">
            <span className="inline-block px-4 py-1.5 bg-[#ffdbcc] dark:bg-[#ffdbcc]/10 text-[#a04100] dark:text-[#ff9d66] font-bold text-xs uppercase tracking-widest rounded-full">
              {t('about.hero.badge', language)}
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#1b1c1c] dark:text-[#fbf9f8] leading-tight">
              {t('about.hero.title', language)}
            </h1>
            <p className="text-[#5a4136] dark:text-[#fbf9f8]/75 text-sm md:text-base leading-relaxed">
              {t('about.hero.desc', language)}
            </p>

            {/* Quick stats badges */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="bg-white dark:bg-[#141211] border border-[#e2bfb0]/20 dark:border-[#e2bfb0]/10 p-4 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm">
                <span className="font-serif text-xl md:text-2xl font-bold text-[#a04100]">10+</span>
                <span className="text-[10px] uppercase font-bold text-[#5a4136]/60 dark:text-[#fbf9f8]/40 tracking-wider">
                  {t('about.stats.experience', language)}
                </span>
              </div>
              <div className="bg-white border border-[#e2bfb0]/20 p-4 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm">
                <span className="font-serif text-xl md:text-2xl font-bold text-[#a04100]">12000+</span>
                <span className="text-[10px] uppercase font-bold text-[#5a4136]/60 tracking-wider">
                  {t('about.stats.pujas', language)}
                </span>
              </div>
              <div className="bg-white border border-[#e2bfb0]/20 p-4 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm">
                <span className="font-serif text-xl md:text-2xl font-bold text-[#a04100]">50+</span>
                <span className="text-[10px] uppercase font-bold text-[#5a4136]/60 tracking-wider">
                  {t('about.stats.temples', language)}
                </span>
              </div>
            </div>
          </div>

          {/* Portrait Image */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-white dark:bg-[#141211] p-3 rounded-3xl shadow-2xl shadow-[#a33b38]/15 border border-[#e2bfb0]/30 group">
              <div className="overflow-hidden rounded-2xl bg-[#fdfbf7] dark:bg-[#0c0b0a] flex justify-center items-center">
                <img 
                  src={acharyaPhoto} 
                  alt="Pandit Dhirendra Shastri Ji - 10+ Years Vedic Scholar" 
                  loading="lazy"
                  className="w-full h-auto max-h-[600px] object-contain group-hover:scale-102 transition-transform duration-500 mx-auto"
                />
              </div>
              <div className="text-center pt-3 pb-1">
                <p className="font-serif font-bold text-base text-[#a04100] dark:text-[#ff9d66]">
                  {language === 'sa' ? 'पं. धीरेंद्र शास्त्री जी' : 'Pandit Dhirendra Shastri Ji'}
                </p>
                <p className="text-[11px] font-semibold text-[#5a4136]/75 dark:text-[#fbf9f8]/60 uppercase tracking-widest mt-0.5">
                  {language === 'sa' ? '10+ वर्षाणाम् वैदिक अनुभवः' : '10+ Years Experienced Vedic Pandit'}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Language Proficiency Section */}
      <section className="bg-[#f6f3f2] dark:bg-[#0c0b0a]/30 py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#a04100] dark:text-[#ff9d66]">
              {t('about.languages', language)}
            </h2>
            <p className="text-xs text-[#5a4136]/70 dark:text-[#fbf9f8]/50 max-w-md mx-auto">Ability to recite and explain liturgies in vernaculars.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {LANGUAGE_PROFICIENCIES.map((prof, idx) => {
              return (
                <div key={idx} className="bg-white dark:bg-[#141211] p-5 rounded-2xl border border-[#e2bfb0]/10 dark:border-[#e2bfb0]/5 flex justify-between items-center shadow-xs">
                  <div>
                    <h4 className="font-bold text-xs text-[#1b1c1c] dark:text-[#fbf9f8]">{prof.name}</h4>
                    <span className="text-[10px] text-[#5a4136]/60 dark:text-[#fbf9f8]/40 font-semibold">{t(prof.level, language)}</span>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <span 
                        key={i} 
                        className={`w-2 h-2 rounded-full ${i < prof.rating ? 'bg-[#a04100]' : 'bg-[#e2bfb0]/30'}`}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
