import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Language, t } from '../translations';
import { FAQS } from '../data';

interface FAQViewProps {
  language: Language;
}

export default function FAQView({ language }: FAQViewProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 py-8 space-y-12">
      <div className="text-center space-y-4">
        <span className="inline-block px-4 py-1.5 bg-[#ffdbcc] dark:bg-[#ffdbcc]/10 text-[#a04100] dark:text-[#ff9d66] font-bold text-xs uppercase tracking-widest rounded-full">
          {t('nav.faq', language)}
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#1b1c1c] dark:text-[#fbf9f8]">
          {language === 'sa' ? 'जिज्ञासा समाधानम्' : 'Frequently Asked Questions'}
        </h1>
        <p className="text-[#5a4136] dark:text-[#fbf9f8]/70 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          {language === 'sa' 
            ? 'पूजा-मङ्गलकाल-सामग्री-सङ्कल्पादीनां विषये सामान्यप्रश्नोत्तराणि अत्र पठन्तु।' 
            : 'Find immediate answers to all queries relating to puja procedures, samagri items, cancellation refunds, and certified Vedic credentials.'}
        </p>
      </div>

      <div className="space-y-4 pt-6">
        {FAQS.map((faq, idx) => {
          const isOpen = activeIndex === idx;
          return (
            <div 
              key={idx}
              className="bg-white dark:bg-[#141211] border border-[#e2bfb0]/25 dark:border-[#e2bfb0]/10 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer focus:outline-hidden gap-4"
              >
                <div className="flex items-center gap-3.5">
                  <HelpCircle className="w-5 h-5 text-[#a04100] shrink-0" />
                  <span className="font-serif text-base font-bold text-[#1b1c1c] dark:text-[#fbf9f8]">
                    {language === 'sa' ? (idx === 0 ? 'किं भवन्तः पूजासामग्रीं आनयन्ति?' : idx === 1 ? 'पण्डितानां योग्यता कथं ज्ञायते?' : idx === 2 ? 'किं वयम् अन्तर्जालेन पूजां कर्तुं शक्नुमः?' : 'किं निरस्तीकरणे धनं प्रत्यागतं भवति?') : faq.question}
                  </span>
                </div>
                <ChevronDown className={`w-4 h-4 text-[#a04100] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              <div 
                className={`transition-all duration-300 overflow-hidden ${
                  isOpen ? 'max-h-60 border-t border-[#e2bfb0]/15 dark:border-[#e2bfb0]/10' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-5 text-sm text-[#5a4136] dark:text-[#fbf9f8]/75 leading-relaxed bg-[#fbf9f8]/50 dark:bg-[#0c0b0a]/30">
                  {language === 'sa' ? (
                    idx === 0 ? 'आम्, सर्वसामग्रीं आचार्यः स्वयमेव आनयति। भवद्भिः केवलं पुष्पाणि फलानि च सज्जीकर्तव्यानि।' :
                    idx === 1 ? 'अस्माकं सर्वे आचार्याः वाराणस्याः संस्कृतविश्वविद्यालयेभ्यः दीक्षिताः शास्त्री-आचार्यपदवीधराः च सन्ति।' :
                    idx === 2 ? 'आम्, दूरस्थानां भक्तानां कृते वयं उच्चगुणवत्तायुक्तां ई-पूजां (Video Call) अपि आयोजयामः।' :
                    'पूजासमयात् २४ होरापूर्वं निरस्तीकरणे पूर्णधनं प्रत्यागतं भविष्यति।'
                  ) : faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
