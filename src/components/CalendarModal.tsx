import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { Language, t } from '../translations';
import { UPCOMING_FESTIVALS } from '../data';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onNavigateToBook: (preselectedDate?: string) => void;
}

export default function CalendarModal({
  isOpen,
  onClose,
  language,
  onNavigateToBook
}: CalendarModalProps) {
  // Calendar date picker state
  const [currentCalMonth, setCurrentCalMonth] = useState(() => new Date().getMonth());
  const [currentCalYear, setCurrentCalYear] = useState(() => new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState<string>('');

  const calendarMonths = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    if (currentCalMonth === 0) {
      setCurrentCalMonth(11);
      setCurrentCalYear(prev => prev - 1);
    } else {
      setCurrentCalMonth(prev => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentCalMonth === 11) {
      setCurrentCalMonth(0);
      setCurrentCalYear(prev => prev + 1);
    } else {
      setCurrentCalMonth(prev => prev + 1);
    }
  };

  const handleSelectDay = (day: number) => {
    const formattedMonth = (currentCalMonth + 1).toString().padStart(2, '0');
    const formattedDay = day.toString().padStart(2, '0');
    const dateStr = `${currentCalYear}-${formattedMonth}-${formattedDay}`;
    setSelectedDate(dateStr);
  };

  // Load dynamic festivals list
  const [festivals] = useState<any[]>(() => {
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

    try {
      const stored = localStorage.getItem('custom_festivals');
      if (stored) {
        const parsed = JSON.parse(stored);
        const merged = [...parsed];
        UPCOMING_FESTIVALS.forEach(defFest => {
          if (!merged.some(f => f.id === defFest.id)) {
            merged.push(defFest);
          }
        });
        return filterActiveFestivals(merged);
      }
      return filterActiveFestivals(UPCOMING_FESTIVALS);
    } catch (e) {
      return filterActiveFestivals(UPCOMING_FESTIVALS);
    }
  });

  const hasFestivalOnDay = (day: number) => {
    const formattedMonthText = calendarMonths[currentCalMonth];
    return festivals.find(fest => {
      return Number(fest.day) === day && 
             fest.monthYear.toLowerCase().includes(formattedMonthText.toLowerCase()) && 
             fest.monthYear.includes(currentCalYear.toString());
    });
  };

  const handleBookClick = () => {
    onNavigateToBook(selectedDate);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-55 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4" onClick={onClose}>
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white p-6 rounded-3xl max-w-sm w-full relative border border-[#e2bfb0]/30 shadow-2xl space-y-6 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              title="Close"
              aria-label="Close"
              className="absolute top-4 right-4 text-[#5a4136] hover:text-[#a04100] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <h3 className="font-serif font-bold text-lg text-[#a04100] tracking-wider uppercase">
                {language === 'hi' ? 'शुभ मुहूर्त कैलेंडर' : language === 'sa' ? 'शुभ मुहूर्त पञ्चाङ्गम्' : 'Auspicious Days Calendar'}
              </h3>
              <p className="text-[10px] text-[#5a4136]/60 leading-relaxed">
                {language === 'hi' ? 'नारंगी रंग में दर्शित शुभ दिनों को देखकर पूजा बुक करें' : 'Select a highlighted auspicious date to book your ceremony.'}
              </p>
            </div>

            {/* Visual Month-View Calendar Date Picker */}
            <div className="bg-white border border-[#e2bfb0]/25 rounded-[32px] p-5 space-y-4 shadow-sm w-full">
              <div className="flex justify-between items-center pb-2">
                <button 
                  type="button"
                  onClick={handlePrevMonth}
                  className="p-1 hover:bg-[#ffdbcc]/20 rounded-lg text-[#a04100] transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="font-serif font-bold text-xs md:text-sm text-[#a04100] uppercase tracking-widest">
                  {calendarMonths[currentCalMonth].toUpperCase()} {currentCalYear}
                </span>
                <button 
                  type="button"
                  onClick={handleNextMonth}
                  className="p-1 hover:bg-[#ffdbcc]/20 rounded-lg text-[#a04100] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="border-t border-[#e2bfb0]/20 pt-3">
                <div className="grid grid-cols-7 gap-1 text-center">
                  {['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'].map((dayName) => (
                    <span key={dayName} className="text-[9px] font-bold text-[#5a4136]/50 uppercase tracking-widest py-1.5">
                      {dayName}
                    </span>
                  ))}
                  
                  {/* Empty cells for starting day week offset */}
                  {Array.from({ length: getFirstDayOfMonth(currentCalMonth, currentCalYear) }).map((_, idx) => (
                    <span key={`empty-${idx}`} />
                  ))}
                  
                  {/* Day cells */}
                  {Array.from({ length: getDaysInMonth(currentCalMonth, currentCalYear) }).map((_, idx) => {
                    const dayVal = idx + 1;
                    const cellDate = new Date(currentCalYear, currentCalMonth, dayVal);
                    const today = new Date();
                    today.setHours(0,0,0,0);
                    const isPast = cellDate < today;
                    
                    const formattedMonth = (currentCalMonth + 1).toString().padStart(2, '0');
                    const formattedDay = dayVal.toString().padStart(2, '0');
                    const dateStr = `${currentCalYear}-${formattedMonth}-${formattedDay}`;
                    const isSelected = selectedDate === dateStr;
                    const fest = hasFestivalOnDay(dayVal);
                    
                    return (
                      <button
                        key={`day-${dayVal}`}
                        type="button"
                        disabled={isPast}
                        onClick={() => handleSelectDay(dayVal)}
                        className={`py-1.5 text-[10px] transition-all font-semibold rounded-lg relative flex flex-col items-center justify-center ${
                          isSelected 
                            ? 'bg-[#a04100] text-white shadow-xs font-bold' 
                            : isPast 
                              ? 'text-gray-300 cursor-not-allowed opacity-30' 
                              : fest
                                ? 'bg-[#ffdbcc]/40 border border-[#a04100]/60 text-[#a04100] font-bold cursor-pointer group/cell'
                                : 'hover:bg-[#ffdbcc]/20 text-[#1b1c1c] cursor-pointer'
                        }`}
                      >
                        <span>{dayVal}</span>
                        {fest && (
                          <>
                            <span className={`w-1 h-1 rounded-full absolute bottom-0.5 ${isSelected ? 'bg-white' : 'bg-[#a04100]'}`} />
                            {/* Tooltip on hover */}
                            <span className="absolute bottom-full mb-1.5 hidden group-hover/cell:block z-50 bg-[#1b1c1c] text-white text-[9px] rounded-lg p-2 max-w-[130px] text-center shadow-lg pointer-events-none font-normal leading-normal">
                              {fest.titleKey ? t(fest.titleKey, language) : fest.title}
                            </span>
                          </>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-[#e2bfb0]/20 pt-3 text-center">
                <p className="text-[9px] text-[#5a4136]/50 italic">
                  {language === 'hi' ? '* नारंगी रंग में शुभ दिन दर्शाए गए हैं। नाम देखने के लिए माउस लाएं।' : 
                   language === 'sa' ? '* मङ्गलदिवसाः नारङ्गवर्णेन सूचिताः सन्ति।' :
                   language === 'te' ? '* శుభ దినాలు నారింజ రంగులో చూపబడ్డాయి. పండుగ పేరు కోసం తాకండి.' :
                   language === 'ta' ? '* சுப நாட்கள் ஆரஞ்சு நிறத்தில் குறிக்கப்பட்டுள்ளன.' :
                   language === 'mr' ? '* नारंगी रंगात शुभ दिवस दर्शवले आहेत.' :
                   language === 'gu' ? '* નારંગી રંગમાં શુભ દિવસો દર્શાવેલ છે.' :
                   '* Auspicious days highlighted in orange. Hover for festival names.'}
                </p>
              </div>
            </div>

            {selectedDate && (
              <p className="text-[10px] text-[#a04100] font-bold">
                {language === 'hi' ? 'चयनित तिथि: ' : 
                 language === 'sa' ? 'चयनिततिथिः: ' :
                 language === 'te' ? 'ఎంచుకున్న తేదీ: ' :
                 language === 'ta' ? 'தேர்ந்தெடுக்கப்பட்ட தேதி: ' :
                 language === 'mr' ? 'निवडलेली तारीख: ' :
                 language === 'gu' ? 'પસંદ કરેલી તારીખ: ' :
                 'Selected: '} {new Date(selectedDate).toLocaleDateString(language === 'hi' ? 'hi-IN' : language === 'te' ? 'te-IN' : 'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            )}

            <div className="flex flex-col gap-2 pt-2">
              <button 
                onClick={handleBookClick}
                className="w-full py-3 bg-[#a04100] text-white text-xs font-bold rounded-full hover:opacity-90 transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-md shadow-[#a04100]/15"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                {selectedDate 
                  ? (language === 'hi' ? 'इस तिथि पर पूजा बुक करें' : 'Book Pooja on this Day') 
                  : (language === 'hi' ? 'पूजा बुकिंग फॉर्म पर जाएं' : 'Go to Booking Form')
                }
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
