import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight, CheckCircle2, MapPin, Calendar, MessageSquare, ChevronDown } from 'lucide-react';
import SEO from './SEO';
import { Language } from '../translations';
import { trackPhoneClick, trackWhatsAppClick } from '../utils/analytics';

interface SeoLandingViewProps {
  pageType: 'pandit-ji' | 'griha-pravesh' | 'satyanarayan' | 'havan' | 'wedding';
  language: Language;
  onNavigateToBook: (serviceId?: string) => void;
}

const SEO_LANDING_DATA = {
  'pandit-ji': {
    slug: '/pandit-ji-hyderabad/',
    metaTitle: 'Pandit Ji in Hyderabad | North Indian Hindu Priest',
    metaDesc: 'Looking for a North Indian Pandit Ji in Hyderabad? Book Pandit Dheeraj Shastri for Puja, Havan, Griha Pravesh, Satyanarayan Puja and Hindu ceremonies.',
    h1: 'North Indian Pandit Ji in Hyderabad',
    introText: 'Pandit Dheeraj Shastri provides traditional North Indian Hindu puja and religious ceremony services in Hyderabad and nearby areas. He specialises in North Indian puja rituals and can be booked for home pujas, Griha Pravesh, Satyanarayan Puja, Havan, wedding rituals and other ceremonies.',
    serviceId: 'satyanarayan',
    key: 'pandit_ji'
  },
  'griha-pravesh': {
    slug: '/griha-pravesh-puja-hyderabad/',
    metaTitle: 'Griha Pravesh Pandit in Hyderabad | Housewarming Puja',
    metaDesc: 'Book a North Indian Pandit for Griha Pravesh Puja in Hyderabad. Traditional housewarming rituals at home. Call to check availability and book.',
    h1: 'Griha Pravesh Puja Pandit in Hyderabad',
    introText: 'Book a North Indian Pandit Ji for traditional Griha Pravesh and housewarming rituals at home in Hyderabad. Incorporating Vastu Shanti, Navgrah Havan, Dwar Puja, and Lakshmi-Ganesh invocation for prosperity and peace in your new home.',
    serviceId: 'grihapravesh',
    key: 'griha_pravesh'
  },
  'satyanarayan': {
    slug: '/satyanarayan-puja-hyderabad/',
    metaTitle: 'Satyanarayan Puja Pandit in Hyderabad | Book Now',
    metaDesc: 'Book a North Indian Pandit for Satyanarayan Puja and Katha in Hyderabad. Home puja services available in selected areas. Call to check availability.',
    h1: 'Satyanarayan Puja Pandit in Hyderabad',
    introText: 'Book a North Indian Pandit Ji for Sri Satyanarayan Puja and Katha at home or your preferred venue in Hyderabad. Includes Panchamrit preparation, recitation of 5 holy chapters, Navgrah invocation, Aarti, and Mahaprasad distribution.',
    serviceId: 'satyanarayan',
    key: 'satyanarayan'
  },
  'havan': {
    slug: '/havan-pandit-hyderabad/',
    metaTitle: 'Havan Pandit in Hyderabad | Havan Puja at Home',
    metaDesc: 'Book a North Indian Pandit for Havan and Yagya in Hyderabad. Traditional Hindu Havan rituals at home or your preferred venue, subject to availability.',
    h1: 'Havan Pandit in Hyderabad',
    introText: 'Book a North Indian Pandit Ji for Havan and Yagya ceremonies according to traditional North Indian Vedic rituals in Hyderabad. Specializing in Ganpati Havan, Chandi Havan, Rudrabhishek Havan, and Navgrah Shanti Havan.',
    serviceId: 'ganpatihavan',
    key: 'havan'
  },
  'wedding': {
    slug: '/north-indian-wedding-pandit-hyderabad/',
    metaTitle: 'North Indian Wedding Pandit in Hyderabad | Hindu Wedding',
    metaDesc: 'Book a North Indian Wedding Pandit in Hyderabad for traditional Hindu wedding rituals and ceremonies. Contact Pandit Dheeraj Shastri for availability.',
    h1: 'North Indian Wedding Pandit in Hyderabad',
    introText: 'Book an experienced North Indian Pandit Ji for traditional Hindu wedding rituals and ceremonies in Hyderabad. Experienced in performing Varmala, Kanyadaan, Hastamelap, Saptapadi (7 Sacred Steps), Laja Homa, and Mangalsutra Dharan.',
    serviceId: 'marriagepuja',
    key: 'wedding'
  }
};

const HYDERABAD_AREAS = [
  'Secunderabad', 'Gachibowli', 'Kondapur', 'Madhapur', 
  'Kukatpally', 'Banjara Hills', 'Jubilee Hills', 'Manikonda', 
  'Miyapur', 'Uppal', 'LB Nagar', 'Shamshabad'
];

export default function SeoLandingView({ pageType, language, onNavigateToBook }: SeoLandingViewProps) {
  const data = SEO_LANDING_DATA[pageType];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const localFaqs = [
    {
      q: `Do you provide ${data.h1} services?`,
      a: `Yes, Pandit Dheeraj Shastri provides traditional North Indian Hindu puja and religious ceremony services in Hyderabad and nearby areas within approximately 50 km.`
    },
    {
      q: 'Can I book a Pandit Ji for puja at home in Hyderabad?',
      a: 'Yes, home visits can be arranged where available. Share your preferred date, location, and puja type to check availability.'
    },
    {
      q: 'Which areas near Hyderabad do you serve?',
      a: `We serve Hyderabad and selected nearby areas including ${HYDERABAD_AREAS.join(', ')}. Contact us with your exact location to confirm availability.`
    },
    {
      q: 'How do I book Pandit Dheeraj Shastri?',
      a: 'Call or WhatsApp using the contact buttons on this page and share your puja type, date, and location to verify availability.'
    }
  ];

  return (
    <div className="space-y-16">
      <SEO 
        title={data.metaTitle}
        description={data.metaDesc}
        canonicalPath={data.slug}
        language={language}
        pageNameForBreadcrumb={data.h1}
      />

      {/* Hero Banner Section */}
      <section className="relative bg-[#fbf9f8] dark:bg-[#0c0b0a] py-16 px-6 md:px-12 border-b border-[#e2bfb0]/20">
        <div className="max-w-5xl mx-auto space-y-6">
          <span className="inline-block px-4 py-1.5 bg-[#ffdbcc]/70 dark:bg-[#ffdbcc]/10 text-[#a04100] dark:text-[#ff9d66] font-semibold text-xs uppercase tracking-widest rounded-full">
            Hyderabad Service • Pandit Dheeraj Shastri
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#1b1c1c] dark:text-[#fbf9f8] leading-tight">
            {data.h1}
          </h1>
          <p className="text-base md:text-lg text-[#5a4136] dark:text-[#fbf9f8]/80 leading-relaxed max-w-3xl">
            {data.introText}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="tel:+917067704371"
              onClick={() => trackPhoneClick(`landing_${pageType}`)}
              className="bg-[#a04100] hover:bg-[#a04100]/90 text-white font-bold text-[14px] px-8 py-3.5 rounded-full shadow-lg shadow-[#a04100]/20 hover:scale-105 transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              CALL NOW TO BOOK
            </a>
            <a 
              href="https://wa.me/917067704371?text=Namaste,%20I%20want%20to%20inquire%20about%20Pooja%20services%20in%20Hyderabad."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick(`landing_${pageType}`)}
              className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold text-[14px] px-8 py-3.5 rounded-full shadow-lg hover:scale-105 transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              WHATSAPP US
            </a>
            <button
              onClick={() => onNavigateToBook(data.serviceId)}
              className="border border-[#a04100] text-[#a04100] dark:text-[#ff9d66] hover:bg-[#ffdbcc]/20 font-bold text-[14px] px-8 py-3.5 rounded-full transition-all flex items-center gap-2 cursor-pointer"
            >
              Book Online Schedule
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Puja at Home Section */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-white dark:bg-[#141211] p-8 md:p-12 rounded-3xl border border-[#e2bfb0]/30 shadow-md space-y-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1b1c1c] dark:text-[#fbf9f8]">
            Book a Pandit Ji for Puja at Home in Hyderabad
          </h2>
          <p className="text-base text-[#5a4136] dark:text-[#fbf9f8]/80 leading-relaxed">
            Looking for a Pandit Ji for a puja at home? Book Pandit Dheeraj Shastri for North Indian Hindu puja rituals in Hyderabad and selected nearby areas. Share your puja type, preferred date and location to check availability.
          </p>
          <div>
            <a 
              href="tel:+917067704371"
              onClick={() => trackPhoneClick(`puja_at_home_${pageType}`)}
              className="inline-flex items-center gap-2 bg-[#a04100] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full hover:bg-[#a04100]/90 transition-colors shadow-md"
            >
              <Phone className="w-4 h-4" />
              CALL NOW TO CHECK AVAILABILITY
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-5xl mx-auto px-6">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1b1c1c] dark:text-[#fbf9f8] mb-8">
          Why Choose Pandit Dheeraj Shastri in Hyderabad?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white dark:bg-[#141211] border border-[#e2bfb0]/20 rounded-2xl space-y-2">
            <div className="flex items-center gap-2.5 text-[#a04100] font-bold text-base">
              <CheckCircle2 className="w-5 h-5" />
              North Indian Ritual Expertise
            </div>
            <p className="text-xs text-[#5a4136] dark:text-[#fbf9f8]/70 leading-relaxed pl-7">
              Specialised in traditional North Indian Hindu puja rituals, Vedic mantras, and scriptural accuracy.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-[#141211] border border-[#e2bfb0]/20 rounded-2xl space-y-2">
            <div className="flex items-center gap-2.5 text-[#a04100] font-bold text-base">
              <CheckCircle2 className="w-5 h-5" />
              Hyderabad Service & Home Visits
            </div>
            <p className="text-xs text-[#5a4136] dark:text-[#fbf9f8]/70 leading-relaxed pl-7">
              Serving Hyderabad and selected nearby areas within approximately 50 km for authentic home pujas.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-[#141211] border border-[#e2bfb0]/20 rounded-2xl space-y-2">
            <div className="flex items-center gap-2.5 text-[#a04100] font-bold text-base">
              <CheckCircle2 className="w-5 h-5" />
              Multiple Ceremony Options
            </div>
            <p className="text-xs text-[#5a4136] dark:text-[#fbf9f8]/70 leading-relaxed pl-7">
              Griha Pravesh, Satyanarayan Puja, Havan, wedding rituals, Rudrabhishek, Ganesh Puja, Vastu Puja, and family rites.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-[#141211] border border-[#e2bfb0]/20 rounded-2xl space-y-2">
            <div className="flex items-center gap-2.5 text-[#a04100] font-bold text-base">
              <CheckCircle2 className="w-5 h-5" />
              Easy & Transparent Booking
            </div>
            <p className="text-xs text-[#5a4136] dark:text-[#fbf9f8]/70 leading-relaxed pl-7">
              Direct Call or WhatsApp to discuss the ceremony, date, Samagri requirements, and exact location.
            </p>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-[#ffdbcc]/20 dark:bg-[#ffdbcc]/5 border border-[#e2bfb0]/30 rounded-3xl p-8 space-y-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1b1c1c] dark:text-[#fbf9f8] flex items-center gap-2.5">
            <MapPin className="w-6 h-6 text-[#a04100]" />
            North Indian Pandit Ji Services in Hyderabad & Nearby Areas
          </h2>
          <p className="text-sm text-[#5a4136] dark:text-[#fbf9f8]/80 leading-relaxed">
            We provide North Indian Pandit Ji services in Hyderabad and selected nearby areas within approximately 50 km, depending on date, location and availability.
          </p>
          <div className="flex flex-wrap gap-2.5 pt-2">
            {HYDERABAD_AREAS.map((area, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 bg-white dark:bg-[#141211] border border-[#e2bfb0]/30 text-[#1b1c1c] dark:text-[#fbf9f8] font-medium text-xs rounded-full shadow-xs"
              >
                📍 {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Local FAQs */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1b1c1c] dark:text-[#fbf9f8] mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {localFaqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div 
                key={index} 
                className="bg-white dark:bg-[#141211] border border-[#e2bfb0]/25 rounded-2xl overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full px-6 py-4 text-left font-serif text-base font-bold text-[#1b1c1c] dark:text-[#fbf9f8] flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#a04100] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs text-[#5a4136] dark:text-[#fbf9f8]/75 leading-relaxed border-t border-[#e2bfb0]/15">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
