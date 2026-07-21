import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { Language, t } from '../translations';

interface ContactViewProps {
  language: Language;
}

export default function ContactView({ language }: ContactViewProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gotra: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setIsSubmitted(true);
      // Simulate API submit
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', gotra: '', message: '' });
      }, 4000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="inline-block px-4 py-1.5 bg-[#ffdbcc] dark:bg-[#ffdbcc]/10 text-[#a04100] dark:text-[#ff9d66] font-bold text-xs uppercase tracking-widest rounded-full">
          {language === 'sa' ? 'सम्पर्कः' : language === 'te' ? 'సంప్రదించండి' : 'Contact Us'}
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#1b1c1c] dark:text-[#fbf9f8]">
          {language === 'sa' ? 'अस्माभिः सह सम्भाषतम्' : language === 'te' ? 'మమ్మల్ని సంప్రదించండి' : 'Connect with Pandit Ji'}
        </h1>
        <p className="text-[#5a4136] dark:text-[#fbf9f8]/70 text-sm md:text-base leading-relaxed">
          {language === 'sa' 
            ? 'विशिष्टमहायज्ञानाम्, जन्मपत्रिकापरामर्शस्य वा कृते अधोदत्तं पत्रं पूरयन्तु।'
            : 'For customized Vedic rituals, Mahayagnas, astrological balancing, or custom Gotra prayers, send your requests directly to Pandit Dhirendra Shastri Ji.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-6">
        {/* Contact details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white dark:bg-[#141211] border border-[#e2bfb0]/20 dark:border-[#e2bfb0]/10 p-8 rounded-3xl space-y-8 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-[#a04100] dark:text-[#ff9d66]">
              {language === 'sa' ? 'सम्पर्कविवरणम्' : 'Vedic Center Information'}
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#ffdbcc]/50 dark:bg-[#ffdbcc]/15 text-[#a04100] rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#5a4136]/50 dark:text-[#fbf9f8]/40">Call Directly / संपर्क सूत्र</p>
                  <a href="tel:+917067704371" className="text-sm font-bold text-[#1b1c1c] dark:text-[#fbf9f8] hover:text-[#a04100] transition-colors">+91 70677 04371</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#ffdbcc]/50 dark:bg-[#ffdbcc]/15 text-[#a04100] rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#5a4136]/50 dark:text-[#fbf9f8]/40">Email / ईमेल</p>
                  <a href="mailto:dheerajtripathi632@gmail.com" className="text-sm font-bold text-[#1b1c1c] dark:text-[#fbf9f8] hover:text-[#a04100] transition-colors">dheerajtripathi632@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#ffdbcc]/50 dark:bg-[#ffdbcc]/15 text-[#a04100] rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#5a4136]/50 dark:text-[#fbf9f8]/40">Varanasi Ashram / वाराणसी आश्रम</p>
                  <p className="text-sm font-bold text-[#1b1c1c] dark:text-[#fbf9f8]">D 28/4, Shivala Ghat, Varanasi, Uttar Pradesh - 221001</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#e2bfb0]/20 dark:border-[#e2bfb0]/10 text-center">
              <p className="text-xs text-[#5a4136]/60 dark:text-[#fbf9f8]/50 italic">
                "शास्त्रोक्तविधिना कृतं कर्म सदा फलप्रदं भवति"
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white dark:bg-[#141211] border border-[#e2bfb0]/20 dark:border-[#e2bfb0]/10 p-8 md:p-10 rounded-3xl shadow-sm">
          {isSubmitted ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-950/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto shadow-sm animate-bounce">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1b1c1c] dark:text-[#fbf9f8]">
                {language === 'sa' ? 'सम्पर्कः स्वीकृतः' : 'Message Sent Successfully!'}
              </h3>
              <p className="text-sm text-[#5a4136] dark:text-[#fbf9f8]/70 max-w-sm mx-auto">
                {language === 'sa' 
                  ? 'अद्यैव आचार्यः भवतः दूरभाषेण सम्पर्कं करिष्यति।' 
                  : 'Thank you for your ritual inquiry. Pandit Ji will verify your requirements and connect with you shortly.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-[#5a4136] dark:text-[#fbf9f8]/70 uppercase tracking-wider block">
                    Full Name / नाम <span className="text-[#a33b38]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#fbf9f8] dark:bg-[#0c0b0a] border border-[#e2bfb0]/30 dark:border-[#e2bfb0]/15 rounded-xl text-sm focus:outline-hidden focus:ring-1 focus:ring-[#a04100] text-[#1b1c1c] dark:text-[#fbf9f8] placeholder-[#5a4136]/30"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold text-[#5a4136] dark:text-[#fbf9f8]/70 uppercase tracking-wider block">
                    Phone Number / मोबाइल नंबर <span className="text-[#a33b38]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-[#fbf9f8] dark:bg-[#0c0b0a] border border-[#e2bfb0]/30 dark:border-[#e2bfb0]/15 rounded-xl text-sm focus:outline-hidden focus:ring-1 focus:ring-[#a04100] text-[#1b1c1c] dark:text-[#fbf9f8] placeholder-[#5a4136]/30"
                    placeholder="Ten-digit phone number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-[#5a4136] dark:text-[#fbf9f8]/70 uppercase tracking-wider block">
                    Email Address / ईमेल
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#fbf9f8] dark:bg-[#0c0b0a] border border-[#e2bfb0]/30 dark:border-[#e2bfb0]/15 rounded-xl text-sm focus:outline-hidden focus:ring-1 focus:ring-[#a04100] text-[#1b1c1c] dark:text-[#fbf9f8] placeholder-[#5a4136]/30"
                    placeholder="yourname@domain.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="gotra" className="text-xs font-bold text-[#5a4136] dark:text-[#fbf9f8]/70 uppercase tracking-wider block">
                    Gotra / गोत्र (Optional)
                  </label>
                  <input
                    type="text"
                    id="gotra"
                    value={formData.gotra}
                    onChange={(e) => setFormData({ ...formData, gotra: e.target.value })}
                    className="w-full px-4 py-3 bg-[#fbf9f8] dark:bg-[#0c0b0a] border border-[#e2bfb0]/30 dark:border-[#e2bfb0]/15 rounded-xl text-sm focus:outline-hidden focus:ring-1 focus:ring-[#a04100] text-[#1b1c1c] dark:text-[#fbf9f8] placeholder-[#5a4136]/30"
                    placeholder="e.g. Kashyap, Shandilya"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-[#5a4136] dark:text-[#fbf9f8]/70 uppercase tracking-wider block">
                  Ritual Requirements / पूजा का विवरण
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#fbf9f8] dark:bg-[#0c0b0a] border border-[#e2bfb0]/30 dark:border-[#e2bfb0]/15 rounded-xl text-sm focus:outline-hidden focus:ring-1 focus:ring-[#a04100] text-[#1b1c1c] dark:text-[#fbf9f8] placeholder-[#5a4136]/30"
                  placeholder="Describe your ritual requirements or specific astrological balancing questions"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#a04100] hover:bg-[#853500] text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md hover:shadow-[#a04100]/25"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Inquiry / संपर्क करें</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
