import React from 'react';
import { Language, t } from '../translations';

interface LegalViewProps {
  language: Language;
  view: 'privacy' | 'terms';
}

export default function LegalView({ language, view }: LegalViewProps) {
  const isPrivacy = view === 'privacy';

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 py-8 space-y-8">
      <div className="space-y-4">
        <span className="inline-block px-4 py-1.5 bg-[#ffdbcc] dark:bg-[#ffdbcc]/10 text-[#a04100] dark:text-[#ff9d66] font-bold text-xs uppercase tracking-widest rounded-full">
          {isPrivacy ? 'Privacy' : 'Terms'}
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#1b1c1c] dark:text-[#fbf9f8]">
          {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
        </h1>
        <p className="text-[#5a4136]/60 dark:text-[#fbf9f8]/40 text-xs">
          Last Updated: July 09, 2026
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none text-[#5a4136] dark:text-[#fbf9f8]/80 text-sm md:text-base leading-relaxed space-y-6">
        {isPrivacy ? (
          <>
            <p>
              Namaste! At <strong>PujaPandit.tech</strong>, we value the trust you place in us when booking Vedic priests and ceremonies. This Privacy Policy details how we collect, store, and safeguard your personal information (including name, email, phone number, gotra, and location coordinates).
            </p>
            
            <h3 className="font-serif text-lg font-bold text-[#a04100] dark:text-[#ff9d66] mt-6">
              1. Information We Collect
            </h3>
            <p>
              We collect information necessary to facilitate your booking and assign a verified Pandit Ji to your ritual:
              <br />
              • Personal details (name, contact number, email address).
              <br />
              • Ritual details (custom puja requirements, gotra, family names).
              <br />
              • Location data (home/office address where the ceremony will take place).
            </p>

            <h3 className="font-serif text-lg font-bold text-[#a04100] dark:text-[#ff9d66] mt-6">
              2. How We Use Your Information
            </h3>
            <p>
              Your contact details are shared only with the assigned certified Pandit Ji for coordination. We do not sell or trade your personal information with external marketers.
            </p>

            <h3 className="font-serif text-lg font-bold text-[#a04100] dark:text-[#ff9d66] mt-6">
              3. Data Security
            </h3>
            <p>
              We implement industry-standard security protocols to store booking logs. Payments are processed through secure end-to-end encrypted gateways.
            </p>
          </>
        ) : (
          <>
            <p>
              Welcome to <strong>PujaPandit.tech</strong>. By accessing our platform and booking Vedic rituals, you agree to comply with and be bound by the following Terms & Conditions.
            </p>

            <h3 className="font-serif text-lg font-bold text-[#a04100] dark:text-[#ff9d66] mt-6">
              1. Ceremony Booking & Allocations
            </h3>
            <p>
              All bookings are subjected to Pandit Ji's schedule availability. Upon confirmation, a certified Vedic priest will be assigned and the required list of fresh fruits/flowers (to be arranged by you) will be provided.
            </p>

            <h3 className="font-serif text-lg font-bold text-[#a04100] dark:text-[#ff9d66] mt-6">
              2. Rescheduling & Cancellations
            </h3>
            <p>
              • Rescheduling is free of charge up to 12 hours prior to the puja.
              <br />
              • Cancellations made 24 hours in advance are eligible for a 100% refund.
              <br />
              • In rare events where the assigned Pandit Ji cannot attend due to unforeseen circumstances, we will allocate an alternate certified priest or initiate a full refund.
            </p>

            <h3 className="font-serif text-lg font-bold text-[#a04100] dark:text-[#ff9d66] mt-6">
              3. Scriptural Sanctity & Offerings
            </h3>
            <p>
              Our priests perform all rites according to scriptural texts (Shastras). Devotees are requested to maintain traditional decorum and follow instructions during the performance of the sacred rituals.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
