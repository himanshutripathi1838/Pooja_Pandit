export interface Service {
  id: string;
  name: string;
  category: 'Ceremony' | 'Havan' | 'Online Puja' | 'Astrology';
  price: number;
  priceUSD: number;
  duration: string;
  panditsCount: string;
  description: string;
  imageUrl: string;
  badge?: string;
  details: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatarColor: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Booking {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  serviceName: string;
  price: number;
  date: string;
  timeSlot: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
  address?: string;
  city?: string;
  state?: string;
  postalCode?: string;
}

export interface AcademicQualification {
  title: string;
  institution: string;
  description: string;
  iconName: string;
}

export interface LanguageProficiency {
  name: string;
  level: 'Native/Sacred' | 'Native' | 'Fluent' | 'Conversational';
  rating: number; // 1 to 3
}

export interface Achievement {
  title: string;
  organization: string;
  description: string;
  iconName: string;
}

export interface Certification {
  title: string;
  organization: string;
  year: string;
  imageUrl: string;
}
