import React from 'react';
import { BookOpen, Calendar, User, ArrowRight } from 'lucide-react';
import { Language, t } from '../translations';

interface BlogViewProps {
  language: Language;
}

const BLOG_POSTS = [
  {
    id: 'grihapravesh-significance',
    title: 'The Spiritual Significance of Griha Pravesh Puja',
    titleHi: 'गृह प्रवेश पूजा का आध्यात्मिक और वैज्ञानिक महत्व',
    date: 'July 10, 2026',
    author: 'Pandit Dhirendra Shastri Ji',
    desc: 'Understand why cleansing a new home with sacred Vedic mantras, Gau Puja, and Vastu Havan is essential for family health and prosperity.',
    descHi: 'जानिए क्यों नए घर को वैदिक मंत्रों, गौ पूजा और वास्तु हवन से शुद्ध करना परिवार की खुशहाली और स्वास्थ्य के लिए अनिवार्य है।',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH-GarctjYpeKQ6HZsUMT5ahnK6jRRZSEEg2ATnvTe7zsHw-hg-9gvN2mA8Eu7MrJoblTuShPB-ZCNLcutfFzbG_vjxscVyapyMNAuH0TCaE1zFrzGGxHNua3X7r7n9R1XdFUYhgrM7M8zMhIf0UBeGkeoHXR-tZvUbxVDJ_5YKQnV4f8V33NnVGvUIJ2JWAT6NAWshg_5aTvOypeU_dTaOIedL_TQBen64A0Av-MUzb5DmNXFqZ0D6R3e7A_Qbj7cRCcCL6nJnY8i'
  },
  {
    id: 'rudrabhishek-benefits',
    title: 'Why Perform Rudrabhishek in the Month of Shravana?',
    titleHi: 'सावन के पवित्र महीने में रुद्राभिषेक करने के लाभ',
    date: 'July 05, 2026',
    author: 'Pandit Dhirendra Shastri Ji',
    desc: 'Learn about the cosmic energies active during Shravana and how performing Shiva Rudrabhishek with milk, honey, and cane juice helps astrological balancing.',
    descHi: 'श्रावण मास में सक्रिय ब्रह्मांडीय ऊर्जाओं और शिव रुद्राभिषेक से कुंडली के ग्रहों को शांत करने की विधि के बारे में जानें।',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXVp6nH85YURUHr5R27KRMSfhXPnAEMgBjG4cUs7f6LbIbVbIy3Ygh4yHXjlVbmKKrMz5eVgySE652yCwVV7DWo2Ba06dNezPDr6fN4Zp1KsPR4mHLd8MOSZILU3AUSBTCEmOoH9OxBJ526XzSJOd1prkUsEO0v9muepzfg4O9fNy72P1reZJjFu-IdEpk2uL4Bgaqrwu2uxwlBGAqzib5M2mY01LIFeXKTg81idVjG-PLoUYhFJn2Cnnc3TQkAHwvtztHkBY-Yh8h'
  },
  {
    id: 'satyanarayan-prosper',
    title: 'Astrological & Spiritual Benefits of Satyanarayan Puja',
    titleHi: 'श्री सत्यनारायण व्रत कथा के ज्योतिषीय और आध्यात्मिक लाभ',
    date: 'June 28, 2026',
    author: 'Pandit Dhirendra Shastri Ji',
    desc: 'The complete guide to performing Satyanarayan katha on Purnima (full moon) days to resolve business disputes, marital delay, and family stress.',
    descHi: 'व्यापार में लाभ, वैवाहिक बाधाओं को दूर करने और मानसिक शांति के लिए पूर्णिमा पर सत्यनारायण कथा कराने की विधि का संपूर्ण गाइड।',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjGEflm6WAoB3z3mtBZAuIuhDiv9geJ0a7QhjrUsYlWVZ9eLLbZXLMdogfy_33ue3UVppAJan2SEfkUZ20Ltz9CIJBvkZ8-goqZJQd7KL9ELcxv4IqDRsaLeSakVPStUeIY7bVoREZsG2WCv-l_XdvAaJipnxOrw2KLG-fIAVYTC4pDFdJJ8uUlB_MZYm1_r0z2ca32xoAy3lEDR2Bny_HP33FZMTs4WWhtA-ZT2QPwKj1cEI-YRv4aB4o9GjN1gXfdcnp_6F6Ujh5'
  }
];

export default function BlogView({ language }: BlogViewProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 space-y-12">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="inline-block px-4 py-1.5 bg-[#ffdbcc] dark:bg-[#ffdbcc]/10 text-[#a04100] dark:text-[#ff9d66] font-bold text-xs uppercase tracking-widest rounded-full">
          {t('nav.blog', language)}
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#1b1c1c] dark:text-[#fbf9f8]">
          {language === 'sa' ? 'वैदिक ज्ञानगङ्गा' : 'Vedic Wisdom & Ritual Guides'}
        </h1>
        <p className="text-[#5a4136] dark:text-[#fbf9f8]/70 text-sm md:text-base leading-relaxed">
          {language === 'sa' 
            ? 'शास्त्रोक्तकथानाम्, पूजाविधीनाम्, ज्योतिषशास्त्रस्य च चर्चा अत्र पठन्तु।' 
            : 'Explore rich resources on scriptural significance, auspicious muhurats, and step-by-step guides on home pujas written by our Vedic scholars.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
        {BLOG_POSTS.map((post) => (
          <article 
            key={post.id}
            className="bg-white dark:bg-[#141211] border border-[#e2bfb0]/25 dark:border-[#e2bfb0]/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="h-52 overflow-hidden relative bg-[#ffdbcc]/10">
                <img 
                  src={post.image} 
                  alt={language === 'en' ? post.title : post.titleHi} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 space-y-4">
                {/* Meta details */}
                <div className="flex items-center gap-4 text-[10px] uppercase font-bold text-[#5a4136]/50 dark:text-[#fbf9f8]/40 tracking-wider">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#a04100]" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#a04100]" />
                    {language === 'en' ? post.author : 'आचार्य धीरेन्द्र'}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#1b1c1c] dark:text-[#fbf9f8] hover:text-[#a04100] transition-colors leading-snug line-clamp-2">
                  {language === 'en' ? post.title : post.titleHi}
                </h3>

                <p className="text-[#5a4136] dark:text-[#fbf9f8]/70 text-xs md:text-sm leading-relaxed line-clamp-3">
                  {language === 'en' ? post.desc : post.descHi}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button 
                onClick={() => alert(language === 'en' ? 'Detailed reading available soon!' : 'विस्तृत पठनं शीघ्रमेव आरप्स्यते!')}
                className="flex items-center gap-1.5 text-xs font-bold text-[#a04100] hover:text-[#853500] hover:gap-2 transition-all cursor-pointer"
              >
                <span>{language === 'sa' ? 'विस्तृतं पठन्तु' : 'Read Article'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
