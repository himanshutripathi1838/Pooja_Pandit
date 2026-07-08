import { 
  Service, 
  TimelineEvent, 
  Testimonial, 
  FAQ, 
  Booking, 
  AcademicQualification, 
  LanguageProficiency, 
  Achievement, 
  Certification 
} from './types';
import diwaliLakshmiImg from './assets/diwali_lakshmi_puja.png';
import marriageCeremonyImg from './assets/marriage_ceremony.png';
import birthdayPujaImg from './assets/birthday_puja.png';
import officeOpeningImg from './assets/office_opening.png';
import ganeshChaturthiImg from './assets/ganesh_chaturthi.png';

export const SERVICES: Service[] = [
  {
    id: 'satyanarayan',
    name: 'Satyanarayan Katha',
    category: 'Ceremony',
    price: 2100,
    priceUSD: 299,
    duration: '3 Hours',
    panditsCount: '1 Pandit',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjGEflm6WAoB3z3mtBZAuIuhDiv9geJ0a7QhjrUsYlWVZ9eLLbZXLMdogfy_33ue3UVppAJan2SEfkUZ20Ltz9CIJBvkZ8-goqZJQd7KL9ELcxv4IqDRsaLeSakVPStUeIY7bVoREZsG2WCv-l_XdvAaJipnxOrw2KLG-fIAVYTC4pDFdJJ8uUlB_MZYm1_r0z2ca32xoAy3lEDR2Bny_HP33FZMTs4WWhtA-ZT2QPwKj1cEI-YRv4aB4o9GjN1gXfdcnp_6F6Ujh5',
    badge: 'Most Popular',
    description: 'A sacred ritual dedicated to Lord Vishnu, seeking blessings for prosperity and peace in the family.',
    details: [
      'Ganesh Puja and Gauri Puja initiation',
      'Installation of the sacred Kalash and deity altars',
      'Five-chapter narration (Katha) of Lord Satyanarayan\'s divine grace',
      'Grand Aarti and distribution of custom-prepared Prasad (Sheera)',
      'Auspicious astrological timing selection by Pandit Dheeraj Tripathi'
    ]
  },
  {
    id: 'rudrabhishek',
    name: 'Rudrabhishek',
    category: 'Ceremony',
    price: 5500,
    priceUSD: 499,
    duration: '4 Hours',
    panditsCount: '2 Pandits',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXVp6nH85YURUHr5R27KRMSfhXPnAEMgBjG4cUs7f6LbIbVbIy3Ygh4yHXjlVbmKKrMz5eVgySE652yCwVV7DWo2Ba06dNezPDr6fN4Zp1KsPR4mHLd8MOSZILU3AUSBTCEmOoH9OxBJ526XzSJOd1prkUsEO0v9muepzfg4O9fNy72P1reZJjFu-IdEpk2uL4Bgaqrwu2uxwlBGAqzib5M2mY01LIFeXKTg81idVjG-PLoUYhFJn2Cnnc3TQkAHwvtztHkBY-Yh8h',
    badge: 'Ritual',
    description: 'Powerful Vedic ritual to invoke Lord Shiva\'s blessings for health and removal of obstacles.',
    details: [
      'Chanting of Sri Rudram from the Yajur Veda',
      'Ablution (Abhishek) of the Shivling with 11 sacred dravyas (milk, honey, ghee, cane juice, etc.)',
      'Sringar decoration with Bilva leaves, lotus flowers, and Vibhuti',
      'Maha Mrityunjaya Japa for longevity and physical rejuvenation',
      'Purifying Havan at the conclusion'
    ]
  },
  {
    id: 'grihapravesh',
    name: 'Grih Pravesh',
    category: 'Ceremony',
    price: 7000,
    priceUSD: 599,
    duration: '5 Hours',
    panditsCount: '2 Pandits',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrkAGlE-nAAur7-fDC-2qsxAmndc6HuDs-ajv4xQyIxOu_Ubt9DgCAt4W71TQhBxS383e-_ylX2uiVZ1r0EPzpQSHklhMdH6BpHWWicKIvzkGo_TyqBx0Xa5kSeYDL2X23uwhYgl8Yq54cqCd8KnTndZrgsZnVVVwd5PpxSuVKkLRp-C50cZR7bTGOeVTkXkAeAR5He09M_T0KJYCFY5oMpnhQnI0jPWsmAvb6BRbVvPBD7vNlObIgLTzaQcOYLRm9IV-oE6jrA7I5',
    badge: 'New Home',
    description: 'Auspicious ceremony for moving into a new home to ensure positive energy and divine protection.',
    details: [
      'Dwar Puja (doorway sanctification) with floral Rangolis and mango leaves',
      'Vastu Shanti Puja to balance home directions and element energies',
      'Boiling of pure milk ceremony symbolizing abundance',
      'Ganesh and Navagraha Havan for family well-being',
      'Sanctified water sprinkling across all corners of the home'
    ]
  },
  {
    id: 'ganpatihavan',
    name: 'Ganpati Havan',
    category: 'Havan',
    price: 3500,
    priceUSD: 349,
    duration: '2 Hours',
    panditsCount: '1 Pandit',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmt2hFgcaUieraHsDTvsIXJ9p2spDvKWmRMtynRRL01-WhEUlRPkfwvr8Tw0DAXna7skHJMHdusm5HWxLY5tb2Ndky32lbggB99U_QXQqMI8LC0T1ldp2A-h32YUe_QUKcyTGr5l3Nk59QPxaB3WbYHlSGeY9GjT7Le8KyCOJyVDQx4x6SEMFjyqk5JQukdz6Rxx7oSKLPw_iF3kmr0fAwoilvINley7i76HTa8EgDPGFUEa8ZveAcG_qZF8wJALg5nGxbSM4Cd0kf',
    badge: 'Havan',
    description: 'Special fire ritual dedicated to Lord Ganesha for successful beginnings and wisdom.',
    details: [
      'Ganpati Atharvashirsha recitation',
      'Sacred Agni-Pratishthapan in a traditional copper fire pit',
      'Offering of 108 sweet Modaks, herbs, and Ghee to the holy fire',
      'Prarthana for overcoming personal and business roadblocks',
      'Distribution of pure ashes (Bhasma) as divine protection'
    ]
  },
  {
    id: 'digitalpuja',
    name: 'Digital Puja',
    category: 'Online Puja',
    price: 1100,
    priceUSD: 149,
    duration: 'Live Session',
    panditsCount: 'Global',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRrnctgFrmSBbsWPx4p30GmvCmATz1NE7an_15yTjdPMSZPLKkazaYDWa7s-dkflMfMPGXGFg6RyHQrMIPXAtKz4EPCqFX5HbVFWdEoMDo3XBTf8wYNupUgkVldIb77Q5iWSDXr-m7d-uu1_cGtdF5Vfzgp4CgNQWBuEHLf3yFP5rUrj-FEulEiEJ2ujonthIgJIToWphfOobsWromC6hliTLRD8KS0kF4GAo4MsFhgRF7P-dtoGuxn11zN8wfL7KQIK9kgrkYLK2b',
    badge: 'Online',
    description: 'Experience divine connectivity from anywhere in the world through our live-streamed puja sessions.',
    details: [
      'Live one-on-one HD video feed of the ceremony',
      'Personalized Sankalpa with devotee\'s name and Gotra recited live',
      'Instructions for the devotee to perform simple interactive steps at home',
      'Digital receipt of sacred threads and prasadam shipped globally',
      'Sanskrit mantra translation explained clearly during the broadcast'
    ]
  },
  {
    id: 'naamkaran',
    name: 'Naamkaran',
    category: 'Ceremony',
    price: 2500,
    priceUSD: 249,
    duration: '2 Hours',
    panditsCount: '1 Pandit',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcF-8VDc7TwrpWESCyon6Nqjg4y3N4Mr17JB3FghEy7U2NkRH5oSnuQktwbs_I3N-3aYOxD9KpUG6w3znkkFi234W9fU7Fo_x_t0H2WUhlW_7XXMrtTrFDMljQrSh3vjpmTXn7rfGgSoiye1wnH3dQ2MX0C0GQUK2VokZy2fdQd5aWiCfUfJAj6WC8ZvVthFuMiozHSIhvzvNTGd-WGeTf2zGKZmBGTHB3aS-9j-6jlMi5aaUHvS8r3ApqgrB88cvDHwI3AHZRsJq9',
    badge: 'Sanskara',
    description: 'Traditional naming ceremony performed with Vedic chants to bless the newborn child.',
    details: [
      'Astrological constellation (Nakshatra) and name-letter calculation',
      'Whispering of the chosen name into the child\'s right ear',
      'Worship of the Sun god and Mother Earth with the child',
      'Blessing ceremony by the family elders and Pandit Ji',
      'Customized Horoscope (Kundali) outline presented on parchment'
    ]
  },
  {
    id: 'astrology',
    name: 'Astrology & Kundali Reading',
    category: 'Astrology',
    price: 1500,
    priceUSD: 99,
    duration: '1 Hour',
    panditsCount: '1-on-1 Consultation',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFc2RsUlpoIx93t_j_iaLQxFkqyGs-kcVG-pVa_DB47Zgky3baLBDIHDMF47fVLVPB3ZiUMeoKFHOhB67QB5r9EhUtZohGg9n0u_IKzJu0fyTEuOGgU6XOtN37cGw7r-PH6g65b1VVFn8ZLrFYVasxC21YW7pe6bpQqEmdtlvE8Uzi3bt8I8EgBSjBw1DcG2cITe-lSO3bursq7q9qBtR7z53jlf4XbppKy7nIIxYObCPBz4yhHasFaFzRE-LiFteWqc1B-7ZInBX-',
    badge: 'Astrology',
    description: 'Deep insights into your future, career, and marriage compatibility through professional Kundali analysis.',
    details: [
      'Detailed birth chart (Janam Kundali) plotting',
      'Dasha analysis (Vimshottari) and planetary transit calculations',
      'Career trajectory guidance and financial outlook assessments',
      'Remedial gemstone advice and custom Mantra recitations',
      'Gun Milan (marriage compatibility matches) if requested'
    ]
  },
  {
    id: 'mahamrityunjaya',
    name: 'Maha Mrityunjaya Jaap',
    category: 'Havan',
    price: 11000,
    priceUSD: 149,
    duration: '5 Hours',
    panditsCount: '3 Pandits',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXVp6nH85YURUHr5R27KRMSfhXPnAEMgBjG4cUs7f6LbIbVbIy3Ygh4yHXjlVbmKKrMz5eVgySE652yCwVV7DWo2Ba06dNezPDr6fN4Zp1KsPR4mHLd8MOSZILU3AUSBTCEmOoH9OxBJ526XzSJOd1prkUsEO0v9muepzfg4O9fNy72P1reZJjFu-IdEpk2uL4Bgaqrwu2uxwlBGAqzib5M2mY01LIFeXKTg81idVjG-PLoUYhFJn2Cnnc3TQkAHwvtztHkBY-Yh8h',
    badge: 'Maha Jaap',
    description: 'Vedic fire ritual and chanting of Maha Mrityunjaya Mantra to invoke healing, longevity, and conquer fear.',
    details: [
      'Sankalpa and Shiva invocation rites',
      'Chanting of 11,000 Maha Mrityunjaya Mantras',
      'Abhishek ritual with sacred herbs and liquids',
      'Purifying Havan and energy protection path'
    ]
  },
  {
    id: 'birthdaypuja',
    name: 'Birthday Puja (Janmadin)',
    category: 'Ceremony',
    price: 1500,
    priceUSD: 29,
    duration: '1.5 Hours',
    panditsCount: '1 Pandit',
    imageUrl: birthdayPujaImg,
    badge: 'Birthday Blessings',
    description: 'Sacred birthday ceremony with Ayushya Homam to invoke health, career growth, and longevity.',
    details: [
      'Ganesh Puja and Navagraha invocation',
      'Ayushya Homam (fire ritual for long life) performance',
      'Blessing with sacred threads and tilak',
      'Aarti and distribution of Prasad'
    ]
  },
  {
    id: 'diwalipuja',
    name: 'Diwali Lakshmi Puja',
    category: 'Ceremony',
    price: 3100,
    priceUSD: 49,
    duration: '2.5 Hours',
    panditsCount: '1 Pandit',
    imageUrl: diwaliLakshmiImg,
    badge: 'Festival Special',
    description: 'Traditional Deepavali Lakshmi-Kuber Puja for inviting wealth, business prosperity, and peace.',
    details: [
      'Sharda (Books) and Kuber (Treasury) sanctification',
      'Sankalpa and installation of Laxmi-Ganesh deities',
      'Chanting of Sri Suktam and Lakshmi Ashtothram',
      'Maha Aarti and lighting of traditional clay diyas'
    ]
  },
  {
    id: 'saraswatipuja',
    name: 'Saraswati Puja',
    category: 'Ceremony',
    price: 2100,
    priceUSD: 29,
    duration: '2 Hours',
    panditsCount: '1 Pandit',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjGEflm6WAoB3z3mtBZAuIuhDiv9geJ0a7QhjrUsYlWVZ9eLLbZXLMdogfy_33ue3UVppAJan2SEfkUZ20Ltz9CIJBvkZ8-goqZJQd7KL9ELcxv4IqDRsaLeSakVPStUeIY7bVoREZsG2WCv-l_XdvAaJipnxOrw2KLG-fIAVYTC4pDFdJJ8uUlB_MZYm1_r0z2ca32xoAy3lEDR2Bny_HP33FZMTs4WWhtA-ZT2QPwKj1cEI-YRv4aB4o9GjN1gXfdcnp_6F6Ujh5',
    badge: 'Education & Art',
    description: 'Ritual dedicated to Goddess Saraswati for knowledge, sharp memory, creative arts, and academic success.',
    details: [
      'Invocation of Goddess Saraswati (Vidhya Devi)',
      'Worship of books, musical instruments, and study materials',
      'Chanting of Saraswati Stotram and Medha Suktam',
      'Pushpanjali and distributing pure sweet yellow rice Prasad'
    ]
  },
  {
    id: 'ganeshchaturthionline',
    name: 'Ganesh Chaturthi Online Puja',
    category: 'Online Puja',
    price: 2500,
    priceUSD: 39,
    duration: '2 Hours',
    panditsCount: 'Global / Online',
    imageUrl: ganeshChaturthiImg,
    badge: 'Festive Online',
    description: 'Online live-streamed Ganpati Puja to invoke Lord Ganesha on Ganesh Chaturthi with real-time Sankalpa.',
    details: [
      'Ganesh Pratishthapana and invocation mantras',
      'Virtual live one-on-one HD video feed of the altar',
      'Gotra and name-based Sankalpa recited live',
      'Instructions for performing simple steps at home'
    ]
  },
  {
    id: 'marriagepuja',
    name: 'Marriage Ceremony (Vivah Sanskar)',
    category: 'Ceremony',
    price: 15000,
    priceUSD: 299,
    duration: '6 Hours',
    panditsCount: '3 Pandits',
    imageUrl: marriageCeremonyImg,
    badge: 'Vivah Sanskar',
    description: 'Sacred wedding ceremony performed in accordance with traditional Vedic wedding rites and mantras.',
    details: [
      'Kanyadaan, Panigrahana, and Lajahoma rituals',
      'Saptapadi (Seven Steps) and Mangalsutra Bandhan path',
      'Vedic chants for family longevity and companion harmony',
      'Sindoor ceremony and final couples blessings'
    ]
  },
  {
    id: 'officeopening',
    name: 'Office / Shop Opening Puja',
    category: 'Ceremony',
    price: 5100,
    priceUSD: 79,
    duration: '3 Hours',
    panditsCount: '1 Pandit',
    imageUrl: officeOpeningImg,
    badge: 'Business Vastu',
    description: 'Sacred Vastu Shanti and Lakshmi-Ganesh Puja for business prosperity, growth, and positive workspace energy.',
    details: [
      'Ganesh Puja and doorway sanctification (Toran/Swastik)',
      'Vastu Purush and Lakshmi invocation path',
      'Saraswati worship for account books and registers',
      'Havan and holy water sprinkling across the workplace'
    ]
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: '1998 — 2004',
    title: 'The Early Disciple',
    description: 'Rigorous training at the Sampurnanand Sanskrit Vishwavidyalaya in traditional Vedic rituals and Sanskrit grammar.'
  },
  {
    year: '2005 — 2012',
    title: 'Head Priest Appointment',
    description: 'Served as the lead Acharya for the Sri Kashi Vishwanath temple ceremonies, managing large-scale Mahayagnas.'
  },
  {
    year: '2013 — Present',
    title: 'Global Spiritual Consultant',
    description: 'Established "Pooja Pandit" to facilitate authentic religious services globally, integrating modern technology with tradition.'
  }
];

export const ACADEMIC_QUALIFICATIONS: AcademicQualification[] = [
  {
    title: 'Acharya in Shukla Yajur Veda',
    institution: 'Post-graduate specialization in ritualistic procedures and hymns.',
    description: 'Advanced mastery of scriptural rites, mantras, and traditional sacrificial ceremonies.',
    iconName: 'GraduationCap'
  },
  {
    title: 'Ph.D. in Vedic Studies',
    institution: 'Research on the psychological impact of Mantras on mental well-being.',
    description: 'Groundbreaking exploration linking classical Vedic sounds to neurological balance and focus.',
    iconName: 'Award'
  },
  {
    title: 'Diploma in Vedic Astrology',
    institution: 'Advanced Jyotish calculations and remedial measures.',
    description: 'Expert calculations of planetary alignments, natal charts, and cosmic balancing.',
    iconName: 'BookOpen'
  }
];

export const LANGUAGE_PROFICIENCIES: LanguageProficiency[] = [
  { name: 'Sanskrit', level: 'Native/Sacred', rating: 3 },
  { name: 'Hindi', level: 'Native', rating: 3 },
  { name: 'English', level: 'Fluent', rating: 2 },
  { name: 'Bhojpuri', level: 'Native', rating: 3 }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Sri Kashi Vishwanath',
    organization: 'Lifetime Honorary Member',
    description: 'Member of the Archaka Council for ceremonial consultations at India\'s most holy Shiva temple.',
    iconName: 'Home'
  },
  {
    title: 'Vedic Samman 2021',
    organization: 'Ministry of Culture',
    description: 'Awarded for exceptional contribution to Vedic education and the preservation of Sanskrit literature.',
    iconName: 'Award'
  },
  {
    title: 'Tirumala Associate',
    organization: 'Visiting Scholar',
    description: 'Visiting scholar for Srivari Seva and spiritual workshops in Andhra Pradesh.',
    iconName: 'Sparkles'
  },
  {
    title: 'Authored 3 Texts',
    organization: 'Published Guides',
    description: 'Published comprehensive guides on "The Science of Yagna" and "Daily Vedic Shlokas".',
    iconName: 'BookOpen'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Veda-Vidya Certification',
    organization: 'Bharat Dharma Mahamandal',
    year: '2010',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUA0ndXW4-fk872ACntUVvxrMqAgi3Td-SPmNKyeI69h7jDV_CEh2UUIRrdSqh_F9dhbqTuIrFHPvrML7p5e4LXwIC3j61gXznPKp22oX8h7AnWgqgQn8Fft4GmETiOVCkaIJ9Ytzs81sEHn8rwWwn_6f7T8X9Tjv5JH1tOMVTiZlONZzYa2zh5TqpzaiOLpNJnEdih36jjU_hDeLh3T_tYvbgOp4AllZNlR4NbCA5ss8i4qpwMJ0UK904zADiWdAFr-XLvV2oqtdI'
  },
  {
    title: 'National Sanskrit Merit',
    organization: 'UGC Certified Merit Award',
    year: '2015',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWpCe0ZEi7yAh1JLtloVOfuyntzKa9A1CLcu7tJkmbVA4kIWsugiIG1ePMRIVQU7PhJY7N6xjYuwbOu_SXzTB81rnDOFv50HAVjxw35DhaKpB9voDUWFQG32JKGbGKMxO62QgI0PhCFEvVjX8iog8Qf9O1ClwO5Br4enUL-MFywQRL-CUJGQHtpQihnWLALG341YtjT2NqcuG5-cjWlt6V4b-wB343g3jEtp0mOk5DRpt6yzYIEgPLWFcuK0Zk3pFEpnZ5y80bsMr3'
  },
  {
    title: 'Master Ritualist Accreditation',
    organization: 'Global Hindu Federation',
    year: '2018',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxracr-kUJX_ckDJfwaG30kyQQm-Cr8mOdQvx0nbYGMvXVrojha75z3cYPYriizm5fBsPouJhXaXwo4pHZD64h24sGUFO4Q1yr3BdhRGGlBDzjPG5YqKTvpDX3igw6ssLanZnqGlZUGsPRQe5yhMnH_KVVedJ5ddJXO1z_RofApGu24RPMb9LSpeNbZZ6d9F3MhRkGveHGOMH_UpzweWsU4CH2HNElHT05eXbZ9H91f2cSxYrAf3fhMfALaGFSzLdov2wEmG5TXQ7y'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ananya Sharma',
    role: 'Kondapur, Hyderabad',
    rating: 5,
    comment: 'The Pandit ji was very knowledgeable and explained the meaning of every mantra during our Griha Pravesh. It felt truly divine.',
    avatarColor: 'bg-primary-fixed text-primary'
  },
  {
    id: '2',
    name: 'Rahul Verma',
    role: 'Begum Bazar, Hyderabad',
    rating: 5,
    comment: 'Seamless booking experience. The team handled everything from Samagri to scheduling. Highly recommended for busy families.',
    avatarColor: 'bg-secondary-fixed text-secondary'
  },
  {
    id: '3',
    name: 'Sneha Reddy',
    role: 'Gachibowli, Hyderabad',
    rating: 5,
    comment: 'Professionalism at its best. The astrology consultation was insightful and provided great clarity for my business decisions.',
    avatarColor: 'bg-tertiary-fixed text-tertiary'
  }
];

export const FAQS: FAQ[] = [
  {
    question: 'Do you provide Puja Samagri (items)?',
    answer: 'Yes, we offer an "All-Inclusive" package where the Pandit Ji brings all necessary sacred items and Samagri. You only need to provide fresh flowers and fruits.'
  },
  {
    question: 'How do I verify the Pandit\'s credentials?',
    answer: 'All our Pandits are certified from reputed Vedic institutions (such as Sampurnanand Sanskrit Vishwavidyalaya) and undergo a rigorous background check. You can view their profiles and credentials in the About section.'
  },
  {
    question: 'Can I book an online/e-Puja?',
    answer: 'Yes, we provide high-quality video consultations and e-Pujas for clients living abroad or those who prefer remote rituals.'
  },
  {
    question: 'What happens in case of cancellation?',
    answer: 'Cancellations made up to 24 hours prior to the scheduled timing receive a full refund. You can easily reschedule via the Bookings portal.'
  }
];

export const INITIAL_BOOKINGS: Booking[] = [];

export const UPCOMING_FESTIVALS = [
  {
    id: 'default-makarsankranti',
    day: '14',
    monthYear: 'January 2026',
    title: 'Makar Sankranti',
    description: 'Harvest festival dedicated to the Sun God Surya. Auspicious for Vastu Pujas and charity offerings.',
    titleKey: 'fest.makarsankranti.title',
    icon: 'Sun',
    color: 'border-l-4 border-[#a04100]'
  },
  {
    id: 'default-vasantpanchami',
    day: '22',
    monthYear: 'January 2026',
    title: 'Vasant Panchami',
    description: 'Saraswati Puja celebrating knowledge, arts, and wisdom. Highly auspicious for children Aksharabhyasam.',
    titleKey: 'fest.vasantpanchami.title',
    icon: 'BookOpen',
    color: 'border-l-4 border-[#735c00]'
  },
  {
    id: 'default-shivratri',
    day: '15',
    monthYear: 'February 2026',
    title: 'Maha Shivratri',
    description: 'The great night of Lord Shiva. Ideal for Maha Rudrabhishek Puja and continuous Shiva chants.',
    titleKey: 'fest.shivratri.title',
    icon: 'Moon',
    color: 'border-l-4 border-[#a33b38]'
  },
  {
    id: 'default-holi',
    day: '03',
    monthYear: 'March 2026',
    title: 'Holi - Purnima Puja',
    description: 'A ritual for protection and abundance. Celebrate the triumph of good over evil with special Vedic hymns.',
    titleKey: 'fest.holi.title',
    icon: 'Sun',
    color: 'border-l-4 border-[#a04100]'
  },
  {
    id: 'default-navratri',
    day: '19',
    monthYear: 'March 2026',
    title: 'Chaitra Navratri',
    description: '9 days of dedicated worship to Goddess Durga. Book Kalash Sthapana and Durga Saptashati paths.',
    titleKey: 'fest.navratri.title',
    icon: 'Sparkles',
    color: 'border-l-4 border-[#a33b38]'
  },
  {
    id: 'default-ramnavami',
    day: '27',
    monthYear: 'March 2026',
    title: 'Ram Navami',
    description: 'Commemorate the birth of Lord Rama with Akhand Ramayan Path and specialized Havan rituals.',
    titleKey: 'fest.ramnavami.title',
    icon: 'Award',
    color: 'border-l-4 border-[#735c00]'
  },
  {
    id: 'default-hanumanjayanti',
    day: '02',
    monthYear: 'April 2026',
    title: 'Hanuman Jayanti',
    description: 'Celebration of Lord Hanuman\'s birth. Auspicious for Sundarkand Path and Bajrang Baan recitations.',
    titleKey: 'fest.hanumanjayanti.title',
    icon: 'Shield',
    color: 'border-l-4 border-[#a04100]'
  },
  {
    id: 'default-akshayatritiya',
    day: '20',
    monthYear: 'April 2026',
    title: 'Akshaya Tritiya',
    description: 'A day of eternal prosperity. Highly auspicious for weddings, buying gold, and starting new businesses.',
    titleKey: 'fest.akshayatritiya.title',
    icon: 'Coins',
    color: 'border-l-4 border-[#735c00]'
  },
  {
    id: 'default-buddhapurnima',
    day: '01',
    monthYear: 'May 2026',
    title: 'Buddha Purnima',
    description: 'Gautam Buddha birth celebration. Perfect day for peace prayers and Satyanarayan Purnima Katha.',
    titleKey: 'fest.buddhapurnima.title',
    icon: 'Heart',
    color: 'border-l-4 border-[#a04100]'
  },
  {
    id: 'default-gurupurnima',
    day: '27',
    monthYear: 'July 2026',
    title: 'Guru Purnima',
    description: 'Day to honor spiritual teachers and Veda Vyasa. Auspicious for Guru Puja rituals and seeking guru blessings.',
    titleKey: 'fest.gurupurnima.title',
    icon: 'Award',
    color: 'border-l-4 border-[#735c00]'
  },
  {
    id: 'default-rakshabandhan',
    day: '27',
    monthYear: 'August 2026',
    title: 'Raksha Bandhan',
    description: 'Festival celebrating sibling love and protection. Special offerings for family well-being.',
    titleKey: 'fest.rakshabandhan.title',
    icon: 'Heart',
    color: 'border-l-4 border-[#a04100]'
  },
  {
    id: 'default-janmashtami',
    day: '04',
    monthYear: 'September 2026',
    title: 'Krishna Janmashtami',
    description: 'Lord Krishna\'s birth celebrations. Book mid-night Janmashtami rituals and Krishna abhishek.',
    titleKey: 'fest.janmashtami.title',
    icon: 'Crown',
    color: 'border-l-4 border-[#a33b38]'
  },
  {
    id: 'default-ganeshchaturthi',
    day: '14',
    monthYear: 'September 2026',
    title: 'Ganesh Chaturthi',
    description: 'Welcome Lord Ganesha. 10 days of Ganesh Sthapana, daily Modak offerings, and Atharvashirsha chants.',
    titleKey: 'fest.ganeshchaturthi.title',
    icon: 'Sparkles',
    color: 'border-l-4 border-[#a04100]'
  },
  {
    id: 'default-shardiyanavratri',
    day: '11',
    monthYear: 'October 2026',
    title: 'Shardiya Navratri',
    description: 'Navratri Durga festival. Highly auspicious 9 days for Chandi Havan, Durga Puja, and Kanya Pujas.',
    titleKey: 'fest.shardiyanavratri.title',
    icon: 'Flame',
    color: 'border-l-4 border-[#a33b38]'
  },
  {
    id: 'default-dussehra',
    day: '20',
    monthYear: 'October 2026',
    title: 'Dussehra / Vijayadashami',
    description: 'Vijayadashami celebrating triumph of Rama over Ravana. Extremely auspicious for vehicle and business Vastu pujas.',
    titleKey: 'fest.dussehra.title',
    icon: 'Award',
    color: 'border-l-4 border-[#735c00]'
  },
  {
    id: 'default-karwachauth',
    day: '29',
    monthYear: 'October 2026',
    title: 'Karwa Chauth',
    description: 'Suhagan fasting and prayers for husband\'s longevity. Auspicious for Gauri Puja and Karwa Chauth Vrat Katha.',
    titleKey: 'fest.karwachauth.title',
    icon: 'Moon',
    color: 'border-l-4 border-[#a33b38]'
  },
  {
    id: 'default-dhanteras',
    day: '06',
    monthYear: 'November 2026',
    title: 'Dhanteras',
    description: 'Lord Dhanvantari birthday and worship of Kubera. Highly auspicious for gold purchases and Lakshmi-Ganesh Puja.',
    titleKey: 'fest.dhanteras.title',
    icon: 'Coins',
    color: 'border-l-4 border-[#735c00]'
  },
  {
    id: 'default-diwali',
    day: '08',
    monthYear: 'November 2026',
    title: 'Diwali / Lakshmi Puja',
    description: 'Festival of lights. Highly auspicious night for Lakshmi-Ganesh Sharda Puja seeking wealth and success.',
    titleKey: 'fest.diwali.title',
    icon: 'Sun',
    color: 'border-l-4 border-[#a04100]'
  },
  {
    id: 'default-bhaidooj',
    day: '10',
    monthYear: 'November 2026',
    title: 'Bhai Dooj',
    description: 'Yama Dwitiya celebrating sibling ties. Sister-brother puja and special prayers.',
    titleKey: 'fest.bhaidooj.title',
    icon: 'Heart',
    color: 'border-l-4 border-[#a04100]'
  },
  {
    id: 'default-chhathpuja',
    day: '15',
    monthYear: 'November 2026',
    title: 'Chhath Puja',
    description: 'Sacred solar worship of Chhathi Maiya and Surya Dev. Ideal for Vedic sun invocations.',
    titleKey: 'fest.chhathpuja.title',
    icon: 'Sun',
    color: 'border-l-4 border-[#735c00]'
  },
  {
    id: 'default-kartikpurnima',
    day: '24',
    monthYear: 'November 2026',
    title: 'Kartik Purnima',
    description: 'Dev Deepawali in Varanasi. Highly auspicious day for Satyanarayan Puja and holy river dips.',
    titleKey: 'fest.kartikpurnima.title',
    icon: 'Sparkles',
    color: 'border-l-4 border-[#a04100]'
  }
];
