import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft, 
  Check,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Booking, Service } from '../types';
import { Language, t } from '../translations';
import { UPCOMING_FESTIVALS } from '../data';

interface BookNowViewProps {
  language: Language;
  preselectedServiceId: string | null;
  preselectedDate: string;
  onBookingCreated: (booking: Booking) => void;
  onNavigateToDashboard: () => void;
  services: Service[];
}

export default function BookNowView({ 
  language, 
  preselectedServiceId, 
  preselectedDate,
  onBookingCreated,
  onNavigateToDashboard,
  services
}: BookNowViewProps) {
  const [step, setStep] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const [receiptModalOpen, setReceiptModalOpen] = useState(false);

  // Form States
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const [selectedServiceId, setSelectedServiceId] = useState(preselectedServiceId || (services[0]?.id || ''));
  const [preferredDate, setPreferredDate] = useState(preselectedDate || '');
  const [timeSlot, setTimeSlot] = useState('Morning (6:00 AM - 10:00 AM)');
  
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [newBookingId, setNewBookingId] = useState('');

  // Custom Calendar date picker state
  const [currentCalMonth, setCurrentCalMonth] = useState(() => new Date().getMonth());
  const [currentCalYear, setCurrentCalYear] = useState(() => new Date().getFullYear());

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
    setPreferredDate(dateStr);
  };

  // Load dynamic festivals list to show auspicious dates in date picker
  const [festivals, setFestivals] = useState<any[]>(() => {
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

  // Inline Validation Messages
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (preselectedServiceId) {
      setSelectedServiceId(preselectedServiceId);
    }
  }, [preselectedServiceId]);

  useEffect(() => {
    if (preselectedDate) {
      setPreferredDate(preselectedDate);
    }
  }, [preselectedDate]);

  const activeService = services.find(s => s.id === selectedServiceId) || services[0] || { id: '', name: 'Custom Puja', price: 2100, priceUSD: 29 };

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};
    if (currentStep === 1) {
      if (!fullName.trim()) newErrors.fullName = language === 'sa' ? 'पूर्ण नामं आवश्यकम्' : 'Full Name is required';
      if (!phone.trim()) newErrors.phone = language === 'sa' ? 'दूरभाष सङ्ख्या आवश्यकी' : 'Phone number is required';
      else if (!/^\+?[\d\s-]{10,15}$/.test(phone)) newErrors.phone = language === 'sa' ? 'अमान्य दूरभाष सङ्ख्या' : 'Please enter a valid phone number';
      if (!email.trim()) newErrors.email = language === 'sa' ? 'ईमेल आवश्यकम्' : 'Email address is required';
      else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = language === 'sa' ? 'अमान्य ईमेल प्रारूपम्' : 'Invalid email format';
    } else if (currentStep === 2) {
      if (!street.trim()) newErrors.street = language === 'sa' ? 'मार्ग सङ्केतः आवश्यकम्' : 'Street address is required';
      if (!city.trim()) newErrors.city = language === 'sa' ? 'नगरं आवश्यकम्' : 'City is required';
      if (!state.trim()) newErrors.state = language === 'sa' ? 'राज्यं आवश्यकम्' : 'State is required';
      if (!postalCode.trim()) newErrors.postalCode = language === 'sa' ? 'पिन कोड आवश्यकम्' : 'Postal code is required';
    } else if (currentStep === 3) {
      if (!preferredDate) newErrors.preferredDate = language === 'sa' ? 'तिथि चयनं कुर्वन्तु' : 'Please select a preferred date';
      else {
        const selected = new Date(preferredDate);
        const today = new Date();
        today.setHours(0,0,0,0);
        if (selected < today) {
          newErrors.preferredDate = language === 'sa' ? 'तिथिः अतीता न भवेत्' : 'Date cannot be in the past';
        }
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleConfirmBooking = () => {
    const newErrors: Record<string, string> = {};
    if (!agreeTerms) {
      newErrors.terms = language === 'sa' ? 'कृपया नियमाः स्वीकुर्वन्तु' : 'You must agree to the guidelines';
      setErrors(newErrors);
      return;
    }

    const generatedId = `BK-${Math.floor(1000 + Math.random() * 9000)}`;
    setNewBookingId(generatedId);

    const newBooking: Booking = {
      id: generatedId,
      customerName: fullName,
      customerEmail: email,
      customerPhone: phone,
      serviceName: activeService.name,
      price: activeService.price,
      date: preferredDate,
      timeSlot,
      status: 'Pending',
      address: street,
      city,
      state,
      postalCode
    };

    onBookingCreated(newBooking);
    setBookingConfirmed(true);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 6000);
  };

  const handleAddToGoogleCalendar = () => {
    const scriptId = 'google-gsi-client-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = () => initTokenClient();
      document.body.appendChild(script);
    } else {
      initTokenClient();
    }
  };

  const initTokenClient = () => {
    try {
      // @ts-ignore
      const client = google.accounts.oauth2.initTokenClient({
        client_id: '397589425675-u30e1plceebpc8dj0nss4446sl7uuv9m.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/calendar.events',
        callback: async (response: any) => {
          if (response.error) {
            console.error('Google Auth error:', response);
            return;
          }
          const accessToken = response.access_token;
          await createGoogleEvent(accessToken);
        }
      });
      client.requestAccessToken();
    } catch (e) {
      console.error('Failed to init token client:', e);
    }
  };

  const createGoogleEvent = async (token: string) => {
    let startHour = '09:00';
    let endHour = '11:00';
    if (timeSlot.includes('4:00 AM')) {
      startHour = '04:00';
      endHour = '06:00';
    } else if (timeSlot.includes('6:00 AM')) {
      startHour = '08:00';
      endHour = '10:00';
    } else if (timeSlot.includes('12:00 PM')) {
      startHour = '12:00';
      endHour = '15:00';
    } else if (timeSlot.includes('5:00 PM')) {
      startHour = '17:00';
      endHour = '19:00';
    }

    const startDateTime = `${preferredDate}T${startHour}:00`;
    const endDateTime = `${preferredDate}T${endHour}:00`;

    const event = {
      summary: `Puja Ceremony: ${activeService.name}`,
      location: `${street}, ${city}, ${state} ${postalCode}`,
      description: `Spiritual puja blessing and ceremony conducted by Pandit Dhirendra Shastri Ji.\nDevotee: ${fullName}\nAmount: ₹${activeService.price.toLocaleString()}\nStatus: Pending Confirmation.`,
      start: {
        dateTime: startDateTime,
        timeZone: 'Asia/Kolkata'
      },
      end: {
        dateTime: endDateTime,
        timeZone: 'Asia/Kolkata'
      }
    };

    try {
      const res = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
      });
      if (res.ok) {
        alert('Event successfully added to your Google Calendar!');
      } else {
        const error = await res.json();
        console.error('Failed to create calendar event:', error);
        alert('Failed to add event to Google Calendar. Please verify authorization.');
      }
    } catch (e) {
      console.error(e);
      alert('Network error adding event to Google Calendar.');
    }
  };

  const resetForm = () => {
    setFullName('');
    setPhone('');
    setEmail('');
    setStreet('');
    setCity('');
    setState('');
    setPostalCode('');
    setPreferredDate('');
    setAgreeTerms(false);
    setBookingConfirmed(false);
    setStep(1);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 space-y-12">
      
      {/* Intro Header */}
      {!bookingConfirmed && (
        <section className="text-center space-y-4">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#a04100]">
            {t('book.title', language)}
          </h1>
          <p className="text-[#5a4136] text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            {t('book.subtitle', language)}
          </p>
        </section>
      )}

      {/* Stepper progress bar */}
      {!bookingConfirmed && (
        <div className="flex justify-between items-center relative py-4">
          <div className="absolute top-1/2 left-0 w-full h-[1.5px] bg-[#e2bfb0]/30 -z-10"></div>
          
          {[1, 2, 3, 4].map((num) => {
            const isActive = step === num;
            const isCompleted = step > num;
            return (
              <div 
                key={num}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shadow-md transition-all z-10 ${
                  isActive 
                    ? 'bg-[#a04100] text-white ring-4 ring-[#ffdbcc]' 
                    : isCompleted 
                      ? 'bg-green-600 text-white' 
                      : 'bg-[#f0eded] text-[#5a4136]/60'
                }`}
              >
                {isCompleted ? <Check className="w-4 h-4" /> : num}
              </div>
            );
          })}
        </div>
      )}

      {/* Primary Card */}
      <div className="bg-white rounded-3xl border border-[#e2bfb0]/20 p-8 md:p-12 shadow-xl shadow-[#a33b38]/5">
        
        {bookingConfirmed ? (
          /* Success Screen */
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8 space-y-8"
          >
            <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle className="w-12 h-12" />
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#a04100]">
                {t('book.success.title', language)}
              </h2>
              <p className="text-[#5a4136] text-sm max-w-md mx-auto leading-relaxed">
                {t('book.success.subtitle', language)} (ID: {newBookingId})
              </p>
            </div>

            {/* Quick overview of confirmation */}
            <div className="bg-[#f6f3f2] rounded-2xl p-6 text-left max-w-md mx-auto space-y-2 border border-[#e2bfb0]/10">
              <p className="text-xs text-[#5a4136]">
                <strong className="text-[#a04100]">{language === 'sa' ? 'भक्तः:' : 'Devotee:'}</strong> {fullName}
              </p>
              <p className="text-xs text-[#5a4136]">
                <strong className="text-[#a04100]">{language === 'sa' ? 'पूजा सेवा:' : 'Sacred Service:'}</strong> {activeService.name}
              </p>
              <p className="text-xs text-[#5a4136]">
                <strong className="text-[#a04100]">{language === 'sa' ? 'तिथि-समय:' : 'Scheduled:'}</strong> {preferredDate} • {timeSlot}
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
              <button
                onClick={resetForm}
                className="bg-[#a04100] hover:bg-[#a04100]/90 text-white font-bold text-xs px-8 py-3.5 rounded-full transition-all cursor-pointer"
              >
                {language === 'sa' ? 'अन्यां पूजां नियोजयतु' : 'Book Another Service'}
              </button>
              <button
                onClick={() => setReceiptModalOpen(true)}
                className="border border-[#e2bfb0] text-[#5a4136] hover:bg-[#ffdbcc]/10 font-bold text-xs px-8 py-3.5 rounded-full transition-all cursor-pointer"
              >
                {language === 'hi' ? 'बुकिंग रसीद देखें' : language === 'sa' ? 'पत्रं पश्यन्तु' : 'View Booking Receipt'}
              </button>
              <button
                onClick={handleAddToGoogleCalendar}
                className="bg-[#4285F4] hover:bg-[#357ae8] text-white font-bold text-xs px-8 py-3.5 rounded-full transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-[#4285F4]/20"
              >
                <Calendar className="w-4 h-4" />
                Add to Google Calendar
              </button>
            </div>
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">

            {/* Step 1: Personal Details */}
            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <h2 className="font-serif text-2xl font-bold text-[#1b1c1c]">
                    {language === 'sa' ? '१. वैयक्तिक विवरणम्' : 'Personal Details'}
                  </h2>
                  <p className="text-xs text-[#5a4136]/80 leading-relaxed">
                    {language === 'sa' ? 'पूजायाः सङ्कल्पार्थं स्वकीय विवरणं प्रविशन्तु।' : 'Enter your contact information to begin the sacred sankarpa allocation.'}
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-[#5a4136]">{t('book.form.name', language)}</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-3.5 w-4 h-4 text-[#a04100]/40" />
                        <input 
                          type="text" 
                          placeholder="e.g. Pandit Animesh Shastri"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full bg-transparent border-b border-[#e2bfb0]/60 py-3 pl-11 pr-4 text-xs text-[#1b1c1c] focus:outline-none focus:border-[#a04100] placeholder-[#5a4136]/30"
                        />
                      </div>
                      {errors.fullName && <span className="text-[10px] text-[#a33b38] font-semibold">{errors.fullName}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-[#5a4136]">{t('book.form.phone', language)}</label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-[#a04100]/40" />
                        <input 
                          type="tel" 
                          placeholder="e.g. +91 98765 43210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-transparent border-b border-[#e2bfb0]/60 py-3 pl-11 pr-4 text-xs text-[#1b1c1c] focus:outline-none focus:border-[#a04100] placeholder-[#5a4136]/30"
                        />
                      </div>
                      {errors.phone && <span className="text-[10px] text-[#a33b38] font-semibold">{errors.phone}</span>}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-[#5a4136]">{t('book.form.email', language)}</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-[#a04100]/40" />
                      <input 
                        type="email" 
                        placeholder="devotee@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent border-b border-[#e2bfb0]/60 py-3 pl-11 pr-4 text-xs text-[#1b1c1c] focus:outline-none focus:border-[#a04100] placeholder-[#5a4136]/30"
                      />
                    </div>
                    {errors.email && <span className="text-[10px] text-[#a33b38] font-semibold">{errors.email}</span>}
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    onClick={handleNext}
                    className="bg-[#a04100] hover:bg-[#a04100]/90 text-white font-bold text-xs px-8 py-3.5 rounded-full hover:scale-105 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    {language === 'sa' ? 'स्थान विवरणम्' : 'Next: Location'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Location */}
            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <h2 className="font-serif text-2xl font-bold text-[#1b1c1c]">
                    {language === 'sa' ? '२. पूजा स्थानम्' : 'Service Location'}
                  </h2>
                  <p className="text-xs text-[#5a4136]/80 leading-relaxed">
                    {language === 'sa' ? 'यत्र पूजा यज्ञः वा सम्पादनीयः तस्य विवरणम्।' : 'Specify where the designated Pandit Ji should perform the holy ceremony.'}
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-[#5a4136]">{t('book.form.address', language)}</label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-[#a04100]/40" />
                      <input 
                        type="text" 
                        placeholder="e.g. 123, Temple Lane, Sector 4"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        className="w-full bg-transparent border-b border-[#e2bfb0]/60 py-3 pl-11 pr-4 text-xs text-[#1b1c1c] focus:outline-none focus:border-[#a04100] placeholder-[#5a4136]/30"
                      />
                    </div>
                    {errors.street && <span className="text-[10px] text-[#a33b38] font-semibold">{errors.street}</span>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-[#5a4136]">{t('book.form.city', language)}</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Varanasi"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="bg-transparent border-b border-[#e2bfb0]/60 py-3 text-xs text-[#1b1c1c] focus:outline-none focus:border-[#a04100] placeholder-[#5a4136]/30"
                      />
                      {errors.city && <span className="text-[10px] text-[#a33b38] font-semibold">{errors.city}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-[#5a4136]">{t('book.form.state', language)}</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Uttar Pradesh"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="bg-transparent border-b border-[#e2bfb0]/60 py-3 text-xs text-[#1b1c1c] focus:outline-none focus:border-[#a04100] placeholder-[#5a4136]/30"
                      />
                      {errors.state && <span className="text-[10px] text-[#a33b38] font-semibold">{errors.state}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-[#5a4136]">{t('book.form.zip', language)}</label>
                      <input 
                        type="text" 
                        placeholder="e.g. 221001"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        className="bg-transparent border-b border-[#e2bfb0]/60 py-3 text-xs text-[#1b1c1c] focus:outline-none focus:border-[#a04100] placeholder-[#5a4136]/30"
                      />
                      {errors.postalCode && <span className="text-[10px] text-[#a33b38] font-semibold">{errors.postalCode}</span>}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    onClick={handleBack}
                    className="border border-[#e2bfb0] text-[#5a4136] font-semibold text-xs px-6 py-3 rounded-full hover:bg-[#ffdbcc]/10 transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    {language === 'sa' ? 'पृष्ठम्' : 'Back'}
                  </button>
                  <button
                    onClick={handleNext}
                    className="bg-[#a04100] hover:bg-[#a04100]/90 text-white font-bold text-xs px-8 py-3.5 rounded-full hover:scale-105 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    {language === 'sa' ? 'यज्ञकाल निर्णयः' : 'Next: Date & Time'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Puja & Timing */}
            {step === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <h2 className="font-serif text-2xl font-bold text-[#1b1c1c]">
                    {t('book.form.ceremony', language)}
                  </h2>
                  <p className="text-xs text-[#5a4136]/80 leading-relaxed">
                    {language === 'sa' ? 'स्वेष्टपूजा विधीं अनुकूल समयञ्च चिनुत।' : 'Select the spiritual service and your preferred auspicious slot.'}
                  </p>
                </div>

                <div className="space-y-6 text-left">
                  {/* Select Puja Radio Cards */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-[#5a4136] mb-2">{t('book.form.ceremony', language)}</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services.map((s) => {
                        const isSelected = selectedServiceId === s.id;
                        return (
                          <label 
                            key={s.id}
                            className={`relative flex items-center p-4 border rounded-2xl cursor-pointer transition-all hover:bg-[#ffdbcc]/5 ${
                              isSelected 
                                ? 'border-[#a04100] bg-[#ffdbcc]/10 ring-1 ring-[#a04100]' 
                                : 'border-[#e2bfb0]/30'
                            }`}
                          >
                            <input 
                              type="radio" 
                              name="pujaType"
                              checked={isSelected}
                              onChange={() => setSelectedServiceId(s.id)}
                              className="w-4 h-4 text-[#a04100] focus:ring-[#a04100] border-[#e2bfb0]"
                            />
                            <div className="ml-4 text-left">
                              <p className="font-serif font-bold text-xs text-[#1b1c1c] leading-tight">{t(s.name, language)}</p>
                              <p className="text-[10px] text-[#5a4136]/70 mt-0.5">₹{s.price.toLocaleString()} / {t(s.duration, language)}</p>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Vertical container showing Calendar & Time Slot below Select Puja */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    
                    {/* Visual Month-View Calendar Date Picker */}
                    <div className="flex flex-col gap-1.5 col-span-1 md:col-span-2">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-[#5a4136]">{t('book.form.date', language)}</label>
                      
                      <div className="bg-white border border-[#e2bfb0]/25 rounded-[32px] p-6 space-y-4 shadow-md max-w-[420px] mx-auto w-full">
                        <div className="flex justify-between items-center pb-3">
                          <button 
                            type="button"
                            onClick={handlePrevMonth}
                            title="Previous Month"
                            aria-label="Previous Month"
                            className="p-1 hover:bg-[#ffdbcc]/20 rounded-lg text-[#a04100] transition-colors cursor-pointer"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <span className="font-serif font-bold text-sm md:text-base text-[#a04100] uppercase tracking-widest">
                            {calendarMonths[currentCalMonth].toUpperCase()} {currentCalYear}
                          </span>
                          <button 
                            type="button"
                            onClick={handleNextMonth}
                            title="Next Month"
                            aria-label="Next Month"
                            className="p-1 hover:bg-[#ffdbcc]/20 rounded-lg text-[#a04100] transition-colors cursor-pointer"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>
                        
                        <div className="border-t border-[#e2bfb0]/20 pt-4">
                          <div className="grid grid-cols-7 gap-1 text-center">
                            {['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'].map((dayName) => (
                              <span key={dayName} className="text-[10px] font-bold text-[#5a4136]/50 uppercase tracking-widest py-1.5">
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
                              const isSelected = preferredDate === dateStr;
                              const fest = hasFestivalOnDay(dayVal);
                              
                              return (
                                <button
                                  key={`day-${dayVal}`}
                                  type="button"
                                  disabled={isPast}
                                  onClick={() => handleSelectDay(dayVal)}
                                  className={`py-2 text-[11px] transition-all font-semibold rounded-lg relative flex flex-col items-center justify-center ${
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

                        <div className="border-t border-[#e2bfb0]/20 pt-4 text-center">
                          <p className="text-[10px] text-[#5a4136]/50 italic">
                            * Auspicious days highlighted in orange. Hover for festival names.
                          </p>
                        </div>
                      </div>

                      {preferredDate && (
                        <p className="text-[10px] text-[#a04100] font-bold text-center mt-2">
                          Selected Date: {new Date(preferredDate).toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                      )}

                      {errors.preferredDate && <span className="text-[10px] text-[#a33b38] font-semibold block text-center">{errors.preferredDate}</span>}
                    </div>

                    {/* Time Slot Select */}
                    <div className="flex flex-col gap-1.5 col-span-1 md:col-span-2 pt-2">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-[#5a4136]">{t('book.form.slot', language)}</label>
                      <div className="relative">
                        <Clock className="absolute left-3.5 top-3.5 w-4 h-4 text-[#a04100]/40" />
                        <select 
                          value={timeSlot}
                          onChange={(e) => setTimeSlot(e.target.value)}
                          title="Time Slot"
                          aria-label="Time Slot"
                          className="w-full bg-transparent border-b border-[#e2bfb0]/60 py-3 pl-11 pr-4 text-xs text-[#1b1c1c] focus:outline-none focus:border-[#a04100]"
                        >
                          <option value="Brahma Muhurta (4:00 AM - 6:00 AM)">{t('Brahma Muhurta (4:00 AM - 6:00 AM)', language)}</option>
                          <option value="Morning (6:00 AM - 10:00 AM)">{t('Morning (6:00 AM - 10:00 AM)', language)}</option>
                          <option value="Afternoon (12:00 PM - 3:00 PM)">{t('Afternoon (12:00 PM - 3:00 PM)', language)}</option>
                          <option value="Sandhya (5:00 PM - 7:00 PM)">{t('Sandhya (5:00 PM - 7:00 PM)', language)}</option>
                        </select>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    onClick={handleBack}
                    className="border border-[#e2bfb0] text-[#5a4136] font-semibold text-xs px-6 py-3 rounded-full hover:bg-[#ffdbcc]/10 transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    {language === 'sa' ? 'पृष्ठम्' : 'Back: Location'}
                  </button>
                  <button
                    onClick={handleNext}
                    className="bg-[#a04100] hover:bg-[#a04100]/90 text-white font-bold text-xs px-8 py-3.5 rounded-full hover:scale-105 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    {language === 'sa' ? 'विवरण समीक्षा' : 'Review Summary'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Booking Summary */}
            {step === 4 && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <h2 className="font-serif text-2xl font-bold text-[#1b1c1c]">
                    {language === 'sa' ? '४. सङ्कल्प विवरण समीक्षा' : 'Booking Summary'}
                  </h2>
                  <p className="text-xs text-[#5a4136]/80 leading-relaxed">
                    {language === 'sa' ? 'सङ्कल्पादितं पूर्णविवरणं सम्यक् परिशोधयन्तु।' : 'Please review your spiritual details before final submission.'}
                  </p>
                </div>

                <div className="bg-[#f6f3f2] rounded-3xl border border-[#e2bfb0]/20 overflow-hidden">
                  <div className="p-6 border-b border-[#e2bfb0]/15 flex justify-between items-center bg-[#ffdbcc]/20">
                    <span className="font-serif font-bold text-xs text-[#a04100]">Chosen Ritual Service</span>
                    <strong className="text-xs text-[#1b1c1c] font-bold font-serif">{t(activeService.name, language)}</strong>
                  </div>

                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <User className="w-4 h-4 text-[#a04100] mt-0.5" />
                        <div>
                          <span className="text-[9px] uppercase tracking-wider font-bold text-[#5a4136]/60">Client</span>
                          <p className="text-xs font-semibold text-[#1b1c1c]">{fullName}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Phone className="w-4 h-4 text-[#a04100] mt-0.5" />
                        <div>
                          <span className="text-[9px] uppercase tracking-wider font-bold text-[#5a4136]/60">Phone</span>
                          <p className="text-xs font-semibold text-[#1b1c1c]">{phone}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Calendar className="w-4 h-4 text-[#a04100] mt-0.5" />
                        <div>
                          <span className="text-[9px] uppercase tracking-wider font-bold text-[#5a4136]/60">Scheduled For</span>
                          <p className="text-xs font-semibold text-[#1b1c1c]">{preferredDate} • {t(timeSlot, language)}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-[#a04100] mt-0.5" />
                        <div>
                          <span className="text-[9px] uppercase tracking-wider font-bold text-[#5a4136]/60">Location</span>
                          <p className="text-xs font-semibold text-[#1b1c1c]">{city}, {state}, {postalCode}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-[#ffdbcc]/40 border-t border-[#e2bfb0]/20 flex justify-between items-center">
                    <span className="text-xs font-bold text-[#5a4136]">Estimated Dakshina</span>
                    <strong className="text-lg md:text-xl text-[#a04100] font-bold font-serif">
                      ₹{activeService.price.toLocaleString()}
                    </strong>
                  </div>
                </div>

                {/* Terms agreement */}
                <div className="flex flex-col gap-2 pt-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="rounded text-[#a04100] focus:ring-[#a04100] border-[#e2bfb0]"
                    />
                    <span className="text-xs text-[#5a4136] leading-relaxed select-none">
                      {language === 'sa' 
                        ? 'अहं पूजासामग्रीणां नियमशर्त्तैः च सह सहमतः अस्मि।'
                        : 'I agree to the guidelines regarding Puja samagri items, cleanliness (Shuddhi) preparation, and timing requirements.'
                      }
                    </span>
                  </label>
                  {errors.terms && <span className="text-[10px] text-[#a33b38] font-semibold">{errors.terms}</span>}
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    onClick={handleBack}
                    className="border border-[#e2bfb0] text-[#5a4136] font-semibold text-xs px-6 py-3 rounded-full hover:bg-[#ffdbcc]/10 transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    {language === 'sa' ? 'दोषसंशोधनम्' : 'Edit Details'}
                  </button>
                  <button
                    onClick={handleConfirmBooking}
                    className="bg-[#a04100] hover:bg-[#a04100]/90 text-white font-bold text-xs px-10 py-3.5 rounded-full hover:scale-105 transition-all cursor-pointer flex items-center gap-1.5 shadow-md shadow-[#a04100]/20"
                  >
                    {language === 'sa' ? 'सङ्कल्पं दृढं कुरु' : 'Confirm & Book Puja'}
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        )}

      </div>

      {/* Footer Decorative Icons */}
      {!bookingConfirmed && (
        <div className="text-center space-y-4 opacity-30 select-none pointer-events-none">
          <p className="text-[11px] uppercase tracking-widest font-bold text-[#5a4136]">
            {language === 'sa' ? 'अथ प्राचीन परम्परायाः आधुनिक प्रबन्धकः' : 'Modern Booking Experience for Ancient Traditions'}
          </p>
          <div className="flex justify-center gap-8">
            <span className="text-2xl">🕉</span>
            <span className="text-2xl">🪷</span>
          </div>
        </div>
      )}

      {/* Success Notification Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: -50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -50, x: '-50%' }}
            className="fixed top-28 left-1/2 z-50 bg-[#eefaf4] border border-[#a2e0c1] px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 w-[90%] max-w-sm"
          >
            <div className="w-8 h-8 rounded-full bg-[#d0f5e3] text-[#1e7e4a] flex items-center justify-center font-bold shrink-0">
              ✓
            </div>
            <div>
              <p className="text-xs font-bold text-[#1e7e4a]">
                {language === 'hi' ? 'बुकिंग सफलतापूर्वक पूर्ण हो गई!' : language === 'sa' ? 'संकल्पः जातः!' : 'Booking Registered Successfully!'}
              </p>
              <p className="text-[10px] text-[#5a4136] mt-0.5">
                {language === 'hi' ? `आईडी: ${newBookingId} - आचार्य जी जल्द ही आपसे संपर्क करेंगे` : `ID: ${newBookingId} - Acharya Ji will contact you shortly`}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Receipt Modal */}
      <AnimatePresence>
        {receiptModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4" onClick={() => setReceiptModalOpen(false)}>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white p-6 md:p-8 rounded-3xl max-w-md w-full relative border border-[#e2bfb0]/30 shadow-2xl space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setReceiptModalOpen(false)}
                title="Close"
                aria-label="Close"
                className="absolute top-4 right-4 text-[#5a4136] hover:text-[#a04100] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Receipt Content to Print */}
              <div id="booking-receipt-print" className="space-y-6">
                <div className="text-center space-y-1">
                  <h3 className="font-serif font-bold text-xl text-[#a04100] tracking-wider">POOJA PANDIT</h3>
                  <p className="text-[10px] text-[#5a4136]/60 uppercase tracking-widest font-bold">Vedic Rituals Booking Receipt</p>
                  <div className="h-[1.5px] w-20 bg-[#a04100]/20 mx-auto mt-2"></div>
                </div>

                <div className="space-y-3 bg-[#fbf9f8] p-5 rounded-2xl border border-[#e2bfb0]/15">
                  <div className="flex justify-between border-b border-[#e2bfb0]/10 pb-2">
                    <span className="text-[10px] uppercase font-bold text-[#5a4136]/60">Booking ID</span>
                    <span className="text-xs font-bold text-[#1b1c1c]">{newBookingId}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#e2bfb0]/10 pb-2">
                    <span className="text-[10px] uppercase font-bold text-[#5a4136]/60">Devotee Name</span>
                    <span className="text-xs text-[#1b1c1c]">{fullName}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#e2bfb0]/10 pb-2">
                    <span className="text-[10px] uppercase font-bold text-[#5a4136]/60">Email</span>
                    <span className="text-xs text-[#1b1c1c]">{email}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#e2bfb0]/10 pb-2">
                    <span className="text-[10px] uppercase font-bold text-[#5a4136]/60">Phone</span>
                    <span className="text-xs text-[#1b1c1c]">{phone}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#e2bfb0]/10 pb-2">
                    <span className="text-[10px] uppercase font-bold text-[#5a4136]/60">Sacred Service</span>
                    <span className="text-xs text-[#1b1c1c]">{t(activeService.name, language)}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#e2bfb0]/10 pb-2">
                    <span className="text-[10px] uppercase font-bold text-[#5a4136]/60">Scheduled Date</span>
                    <span className="text-xs text-[#1b1c1c]">{preferredDate}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#e2bfb0]/10 pb-2">
                    <span className="text-[10px] uppercase font-bold text-[#5a4136]/60">Time Slot</span>
                    <span className="text-xs text-[#1b1c1c]">{t(timeSlot, language)}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#e2bfb0]/10 pb-2">
                    <span className="text-[10px] uppercase font-bold text-[#5a4136]/60">Address</span>
                    <span className="text-xs text-right text-[#1b1c1c] max-w-50 truncate">{street}, {city}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#e2bfb0]/10 pb-2">
                    <span className="text-[10px] uppercase font-bold text-[#5a4136]/60">Fee Amount</span>
                    <span className="text-xs font-bold text-[#a04100]">₹{activeService.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-[10px] uppercase font-bold text-[#5a4136]/60">Booking Status</span>
                    <span className="px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 text-[10px] rounded-full font-bold">
                      {language === 'hi' ? 'समीक्षाधीन' : 'Pending Confirmation'}
                    </span>
                  </div>
                </div>

                <div className="text-center text-[10px] text-[#5a4136]/60 leading-relaxed italic">
                  *Acharya Ji will review and confirm this booking via phone shortly. Om Namah Shivaya!
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <button 
                  onClick={() => setReceiptModalOpen(false)}
                  className="w-full py-2.5 border border-[#e2bfb0] text-[#5a4136] hover:bg-[#ffdbcc]/10 text-xs font-bold rounded-xl transition-all cursor-pointer"
                >
                  Close
                </button>
                <button 
                  onClick={() => window.print()}
                  className="w-full py-2.5 bg-[#a04100] text-white text-xs font-bold rounded-xl hover:opacity-90 transition-all cursor-pointer"
                >
                  Print Receipt
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
