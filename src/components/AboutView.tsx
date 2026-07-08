import React from 'react';
import { Sparkles } from 'lucide-react';
import { LANGUAGE_PROFICIENCIES } from '../data';
import { Language, t } from '../translations';
import acharyaPhoto from '../assets/acharya_shlokam.jpg';

interface AboutViewProps {
  language: Language;
}

export default function AboutView({ language }: AboutViewProps) {
  return (
    <div className="space-y-20">
      {/* Hero / Intro Section */}
      <section className="bg-[#f0eded]/30 rounded-3xl p-8 md:p-12 mx-6 md:mx-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Text Info */}
          <div className="md:col-span-7 space-y-6">
            <span className="inline-block px-4 py-1.5 bg-[#ffdbcc] text-[#a04100] font-bold text-xs uppercase tracking-widest rounded-full">
              {t('about.hero.badge', language)}
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#1b1c1c] leading-tight">
              {t('about.hero.title', language)}
            </h1>
            <p className="text-[#5a4136] text-sm md:text-base leading-relaxed">
              {t('about.hero.desc', language)}
            </p>

            {/* Quick stats badges */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="bg-white border border-[#e2bfb0]/20 p-4 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm">
                <span className="font-serif text-xl md:text-2xl font-bold text-[#a04100]">3+</span>
                <span className="text-[10px] uppercase font-bold text-[#5a4136]/60 tracking-wider">
                  {t('about.stats.experience', language)}
                </span>
              </div>
              <div className="bg-white border border-[#e2bfb0]/20 p-4 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm">
                <span className="font-serif text-xl md:text-2xl font-bold text-[#a04100]">300+</span>
                <span className="text-[10px] uppercase font-bold text-[#5a4136]/60 tracking-wider">
                  {t('about.stats.pujas', language)}
                </span>
              </div>
              <div className="bg-white border border-[#e2bfb0]/20 p-4 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm">
                <span className="font-serif text-xl md:text-2xl font-bold text-[#a04100]">12</span>
                <span className="text-[10px] uppercase font-bold text-[#5a4136]/60 tracking-wider">
                  {t('about.stats.temples', language)}
                </span>
              </div>
            </div>
          </div>

          {/* Portrait Image */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-4/5 rounded-2xl overflow-hidden shadow-xl shadow-[#a33b38]/10 border border-[#e2bfb0]/20 group">
              <div className="absolute inset-0 bg-linear-to-t from-[#1b1c1c]/40 via-transparent to-transparent z-10"></div>
              <img 
                src={acharyaPhoto} 
                alt="Pandit Dheeraj Tripathi" 
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Language Proficiency Section */}
      <section className="bg-[#f6f3f2] py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#a04100]">
              {t('about.languages', language)}
            </h2>
            <p className="text-xs text-[#5a4136]/70 max-w-md mx-auto">Ability to recite and explain liturgies in vernaculars.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {LANGUAGE_PROFICIENCIES.map((prof, idx) => {
              return (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-[#e2bfb0]/10 flex justify-between items-center shadow-xs">
                  <div>
                    <h4 className="font-bold text-xs text-[#1b1c1c]">{prof.name}</h4>
                    <span className="text-[10px] text-[#5a4136]/60 font-semibold">{t(prof.level, language)}</span>
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
