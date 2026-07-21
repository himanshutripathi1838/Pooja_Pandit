import { Service, TimelineEvent, AcademicQualification, LanguageProficiency, FAQItem, Testimonial, UpcomingFestival } from './types';

import birthdayPujaImg from './assets/birthday_puja.png';
import diwaliLakshmiImg from './assets/diwali_lakshmi_puja.png';
import ganeshChaturthiImg from './assets/ganesh_chaturthi.png';
import marriageCeremonyImg from './assets/marriage_ceremony.png';
import officeOpeningImg from './assets/office_opening.png';

export const SERVICES: Service[] = [
  {
    "id": "satyanarayan",
    "name": "Satyanarayan Katha",
    "category": "Ceremony",
    "price": 2100,
    "priceUSD": 29,
    "duration": "2 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": diwaliLakshmiImg,
    "badge": "Popular",
    "description": "Traditional Sri Satyanarayan Swami Katha and Puja for health, wealth, family harmony, and auspicious milestone celebrations.",
    "details": [
      "Ganesh Puja and Navgrah invocation",
      "Recitation of 5 holy chapters of Satyanarayan Katha",
      "Preparation and offering of sacred Panchamrit and Panjiri Prasad",
      "Aarti and distribution of Mahaprasad"
    ]
  },
  {
    "id": "rudrabhishek",
    "name": "Rudrabhishek",
    "category": "Havan",
    "price": 5500,
    "priceUSD": 79,
    "duration": "3 Hours",
    "panditsCount": "2 Pandits",
    "imageUrl": "/assets/mahamrityunjay_jap.png",
    "badge": "High Energy",
    "description": "Sacred bathing ritual of Shivling with 11 holy ingredients alongside Shukla Yajurveda Rudrashtadhyayi mantra chanting.",
    "details": [
      "Abhishek using Milk, Curd, Honey, Ghee, Sugar, Gangajal, Sugarcane juice, and Fruit juices",
      "Chanting of 11 rounds of Rudra Prashna",
      "Special Shringar with Bilva leaves, Lotus, and Dhatura",
      "Maha Mrityunjaya Havan for health and removal of negative energies"
    ]
  },
  {
    "id": "grihapravesh",
    "name": "Grih Pravesh",
    "category": "Ceremony",
    "price": 7000,
    "priceUSD": 99,
    "duration": "4 Hours",
    "panditsCount": "2 Pandits",
    "imageUrl": officeOpeningImg,
    "badge": "Essential",
    "description": "Complete auspicious new house entrance ritual incorporating Vastu Shanti, Navgrah Havan, and Lakshmi-Ganesh invocation.",
    "details": [
      "Threshold (Dwar Puja) and Cow entry ritual",
      "Vastu Purush Pratishtha and Kalash Sthapana",
      "Navgrah Havan and Vastu Dosh Shanti",
      "Milk boiling ceremony in new kitchen for prosperity"
    ]
  },
  {
    "id": "ganpatihavan",
    "name": "Ganpati Havan",
    "category": "Havan",
    "price": 3500,
    "priceUSD": 49,
    "duration": "2.5 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": ganeshChaturthiImg,
    "badge": "Obstacle Removal",
    "description": "Specialized Ganpati Atharvashirsha Havan for removing obstacles, career growth, financial stability, and wisdom.",
    "details": [
      "Recitation of Ganpati Atharvashirsha 21 times",
      "Offering 1,008 Durva (Bermuda grass) shoots to Lord Ganesha",
      "Modak and Coconut Havan ahutis",
      "Blessings for new business or project launches"
    ]
  },
  {
    "id": "digitalpuja",
    "name": "Digital Puja",
    "category": "Online Puja",
    "price": 1100,
    "priceUSD": 15,
    "duration": "1.5 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": "/assets/gayatri_jap.png",
    "badge": "Live HD Stream",
    "description": "Live interactive video stream of authentic Vedic Pujas performed at holy ghats or temples in Varanasi for global devotees.",
    "details": [
      "Live HD Video Call via Zoom/WhatsApp",
      "Personalized Sankalpa with your Name, Gotra, and Location",
      "Physical Prasad (dry fruits, silver coin, sacred thread) mailed to your home",
      "Recording of full ceremony provided"
    ]
  },
  {
    "id": "naamkaran",
    "name": "Naamkaran",
    "category": "Ceremony",
    "price": 3100,
    "priceUSD": 45,
    "duration": "2 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": birthdayPujaImg,
    "badge": "Sanskar",
    "description": "Auspicious Naming Ceremony for newborn babies incorporating astrological Janma Nakshatra calculations and Ayushya Havan.",
    "details": [
      "Janma Nakshatra and Rashi calculation",
      "Whispering of sacred name in newborn right ear",
      "Ayushya Havan for baby health and long life",
      "Blessing ceremony by elders and Pandits"
    ]
  },
  {
    "id": "astrology",
    "name": "Astrology & Kundali Reading",
    "category": "Astrology",
    "price": 1100,
    "priceUSD": 15,
    "duration": "45 Mins",
    "panditsCount": "1 Acharya",
    "imageUrl": "/assets/navgrah_shanti.png",
    "badge": "1-on-1 Consultation",
    "description": "Detailed birth chart analysis, Dasha predictions, career, marriage compatibility, and authentic Vedic remedial measures.",
    "details": [
      "Deep analysis of Lagna, Rashi, and Navamsha charts",
      "Current Mahadasha and Antardasha prediction",
      "Gemstone recommendations and Mantra remedies",
      "Q&A session addressing career, health, and family"
    ]
  },
  {
    "id": "mahamrityunjaya",
    "name": "Maha Mrityunjaya Jaap",
    "category": "Ceremony",
    "price": 11000,
    "priceUSD": 149,
    "duration": "4 Hours",
    "panditsCount": "2 Pandits",
    "imageUrl": "/assets/mahamrityunjay_jap.png",
    "badge": "Protection",
    "description": "Chanting of 11,000 Maha Mrityunjaya Mantras for severe health recovery, longevity, accident prevention, and peace of mind.",
    "details": [
      "Shiva Abhishek with Panchamrit and Bilva patra",
      "Chanting of 11,000 Maha Mrityunjaya Mantras",
      "Rudraksha Mala Sanchar and Kavach path",
      "Purnahuti Havan with special Ayurvedic herbs"
    ]
  },
  {
    "id": "birthdaypuja",
    "name": "Birthday Puja (Janmadin)",
    "category": "Ceremony",
    "price": 2500,
    "priceUSD": 35,
    "duration": "2 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": birthdayPujaImg,
    "badge": "Personal Milestone",
    "description": "Auspicious Vedic Birthday ritual incorporating Markandeya Chiranjivi Puja, Ayushya Havan, and family well-being prayers.",
    "details": [
      "Markandeya & 7 Chiranjivis invocation",
      "Ayushya Havan for longevity and health",
      "Ganesh-Gauri Pujan and Kalash Sthapana",
      "Distribution of sacred Tilak and Prasad"
    ]
  },
  {
    "id": "diwalipuja",
    "name": "Diwali Lakshmi Puja",
    "category": "Ceremony",
    "price": 4500,
    "priceUSD": 65,
    "duration": "2.5 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": diwaliLakshmiImg,
    "badge": "Festive Special",
    "description": "Grand Deepavali Mahalakshmi, Kuber, and Saraswati Puja for financial abundance, business growth, and family prosperity.",
    "details": [
      "Mahalakshmi Ashtakam & Sri Suktam path",
      "Kuber Yantra Pratishtha & Account books blessing",
      "108 Lotus flower offering & Lakshmi Havan",
      "Special Deepdaan and Aarti ceremony"
    ]
  },
  {
    "id": "saraswatipuja",
    "name": "Saraswati Puja",
    "category": "Ceremony",
    "price": 2500,
    "priceUSD": 35,
    "duration": "2 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": "/assets/gayatri_jap.png",
    "badge": "Wisdom & Knowledge",
    "description": "Sacred worship of Goddess Saraswati for academic excellence, musical talent, concentration, and competitive exam success.",
    "details": [
      "Saraswati Stotram and Medha Suktam recitation",
      "Sanctification of books, pens, and musical instruments",
      "White Lotus flower & Sweet rice offering",
      "Vidya Prapti Havan and Student blessings"
    ]
  },
  {
    "id": "ganeshchaturthionline",
    "name": "Ganesh Chaturthi Online Puja",
    "category": "Online Puja",
    "price": 2100,
    "priceUSD": 29,
    "duration": "2 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": ganeshChaturthiImg,
    "badge": "Festival Special",
    "description": "Live online Ganesh Chaturthi Sthapana, Atharvashirsha Abhishekam, and Modak Bhog ritual performed from Varanasi.",
    "details": [
      "Prana Pratishtha of Eco-friendly Ganpati",
      "21 Modak offering and Durva Archana",
      "Ganpati Havan and live virtual Aarti",
      "Mailed Prasad box with sanctified Raksha Sutra"
    ]
  },
  {
    "id": "marriagepuja",
    "name": "Marriage Ceremony (Vivah Sanskar)",
    "category": "Ceremony",
    "price": 15000,
    "priceUSD": 210,
    "duration": "5 Hours",
    "panditsCount": "2 Pandits",
    "imageUrl": marriageCeremonyImg,
    "badge": "Holy Matrimony",
    "description": "Complete Vedic Hindu Marriage Ceremony with Saptapadi (7 Vows), Kanyadaan, Laja Homa, and Mangalsutra Dharan.",
    "details": [
      "Varmala, Kanyadaan, and Hastamelap",
      "Saptapadi (Seven Sacred Steps around Agni)",
      "Laja Homa and Mangalsutra Dharan",
      "Vedic Mantras for lifelong marital harmony"
    ]
  },
  {
    "id": "officeopening",
    "name": "Office / Shop Opening Puja",
    "category": "Ceremony",
    "price": 5100,
    "priceUSD": 79,
    "duration": "3 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": officeOpeningImg,
    "badge": "Business Vastu",
    "description": "Sacred Vastu Shanti and Lakshmi-Ganesh Puja for business prosperity, growth, and positive workspace energy.",
    "details": [
      "Ganesh Puja and doorway sanctification (Toran/Swastik)",
      "Vastu Purush and Lakshmi invocation path",
      "Saraswati worship for account books and registers",
      "Havan and holy water sprinkling across workplace"
    ]
  },
  {
    "id": "chandihavan",
    "name": "Chandi Havan",
    "category": "Havan",
    "price": 7000,
    "priceUSD": 99,
    "duration": "3 Hours",
    "panditsCount": "2 Pandits",
    "imageUrl": "/assets/chandi_havan.png",
    "badge": "Protection",
    "description": "Powerful Vedic Havan dedicated to Goddess Chandi for victory over negative forces, inner strength, and divine protection.",
    "details": [
      "Chandi Path and Durga Saptashati recitation",
      "Sacred Agni Sthapana & Ahuti with pure herbal Samagri",
      "Special Kavach recitation for house protection",
      "Kanya Pujan & Grand Aarti",
      "Sanctified Bhasma and Prasad distribution"
    ]
  },
  {
    "id": "mahamrityunjayjap",
    "name": "Mahamrityunjay Jap",
    "category": "Ceremony",
    "price": 11000,
    "priceUSD": 149,
    "duration": "4 Hours",
    "panditsCount": "2 Pandits",
    "imageUrl": "/assets/mahamrityunjay_jap.png",
    "badge": "Health",
    "description": "Sacred chanting of the Maha Mrityunjaya Mantra for health rejuvenation, longevity, and divine Shiva blessings.",
    "details": [
      "Shiva Abhishek with holy water, milk, & Panchamrit",
      "Recitation of 11,000 Maha Mrityunjaya Mantras",
      "Rudraksha Mala Sanchar and Kavach path",
      "Purnahuti Havan with special Ayurvedic herbs",
      "Sanctified holy water & Bhasma distribution"
    ]
  },
  {
    "id": "navgrahshanti",
    "name": "Navgrah Shanti Puja",
    "category": "Astrology",
    "price": 11000,
    "priceUSD": 149,
    "duration": "3.5 Hours",
    "panditsCount": "2 Pandits",
    "imageUrl": "/assets/navgrah_shanti.png",
    "badge": "Astrology",
    "description": "Planetary alignment ritual to pacify all nine planets (Navgrahas) and remove astrological malefic effects.",
    "details": [
      "Navgrah Mandala drawing with 9 colored grains",
      "Planetary mantra chanting for all 9 planets",
      "Navgrah Havan with planetary samidha woods",
      "Astrological gemstone and charity advice",
      "Peace and prosperity family blessings"
    ]
  },
  {
    "id": "kaalsarpdosh",
    "name": "Kaal Sarp Dosh Puja",
    "category": "Astrology",
    "price": 11000,
    "priceUSD": 149,
    "duration": "4 Hours",
    "panditsCount": "2 Pandits",
    "imageUrl": "/assets/kaalsarp_dosh.png",
    "badge": "Remedy",
    "description": "Specialized Vedic ritual to neutralize Rahu-Ketu Kaal Sarp Dosh in horoscope for career & marriage peace.",
    "details": [
      "Rahu-Ketu Japa and Nag Devta Abhishek",
      "Silver Snake Idol Pratishtha & Puja",
      "Kaal Sarp Shanti Havan with Rahu-Ketu Samagri",
      "River Water Visarjan rituals",
      "Personalized astrological remedies by Pandit Ji"
    ]
  },
  {
    "id": "pitradosh",
    "name": "Pitra Dosh Shanti Puja",
    "category": "Ceremony",
    "price": 11000,
    "priceUSD": 149,
    "duration": "3.5 Hours",
    "panditsCount": "2 Pandits",
    "imageUrl": "/assets/pitra_dosh.png",
    "badge": "Ancestral",
    "description": "Ancestral peace ritual to seek blessings of ancestors, remove lineage karma obstacles, and bring family progress.",
    "details": [
      "Pitra Gayatri Mantra chanting",
      "Til & Kusha Tarpan ceremony",
      "Pitra Dosh Nivaran Havan",
      "Brahmin Bhojan & Clothes Donation recommendations",
      "Family peace & lineage blessings"
    ]
  },
  {
    "id": "ramcharitmanas",
    "name": "Musical Ramcharitmanas Path",
    "category": "Ceremony",
    "price": 25000,
    "priceUSD": 349,
    "duration": "24 Hours",
    "panditsCount": "3 Pandits",
    "imageUrl": "/assets/ramcharitmanas.png",
    "badge": "Akhand Path",
    "description": "Complete 24-hour Akhand recitation of Sri Ramcharitmanas with devotional musical instruments and Chaupais.",
    "details": [
      "Grand Ram Durbar Sthapana & Kalash Puja",
      "Continuous 24-hour Akhand Chaupai Path",
      "Traditional Harmonium & Dholak accompaniment",
      "Maha Aarti and Hawan at completion",
      "Large Prasad distribution for family & guests"
    ]
  },
  {
    "id": "sundarkandpath",
    "name": "Sundarkand Path",
    "category": "Ceremony",
    "price": 11000,
    "priceUSD": 149,
    "duration": "3.5 Hours",
    "panditsCount": "2 Pandits",
    "imageUrl": "/assets/sundarkand_path.png",
    "badge": "Devotional",
    "description": "Melodious recitation of Lord Hanuman Sundarkand to bestow immense courage, eliminate fears, and solve crises.",
    "details": [
      "Hanuman Ji Sindoor & Chameli Oil Sringar",
      "Sundarkand Chaupai Path with musical rhythm",
      "Hanuman Chalisa & Bajrang Baan recitation",
      "Special Bhog offering (Laddoo & Boondi)",
      "Maruti Havan and Aarti"
    ]
  },
  {
    "id": "pinddaan",
    "name": "Pind Daan Puja",
    "category": "Ceremony",
    "price": 11000,
    "priceUSD": 149,
    "duration": "3 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": "/assets/pind_daan.png",
    "badge": "Moksha",
    "description": "Holy oblation ceremony performed as per Shastras for ancestral peace and liberation of departed souls.",
    "details": [
      "Preparation of sacred rice & sesame Pindas",
      "Vedic Mantra Tarpan at sacred water ghat",
      "Vishnu Pad Puja & ancestral invocation",
      "Liberation prayers (Moksha Daan)",
      "Food and charity offering"
    ]
  },
  {
    "id": "warsikshradh",
    "name": "Warsik Shradh",
    "category": "Ceremony",
    "price": 5100,
    "priceUSD": 69,
    "duration": "2.5 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": "/assets/warsik_shradh.png",
    "badge": "Annual",
    "description": "Annual ancestral remembrance ceremony performed with Tarpan, Brahmin Bhojan, and sacred Vedic mantras.",
    "details": [
      "Sankalp & Ancestral Remembrance",
      "Til Tarpan with holy Ganga water",
      "Rice Pinda Daan ceremony",
      "Brahmin Bhojan ritual",
      "Gau (Cow) and Bird food offering"
    ]
  },
  {
    "id": "baglamukhipuja",
    "name": "Baglamukhi Mata Puja",
    "category": "Online Puja",
    "price": 2100,
    "priceUSD": 29,
    "duration": "2 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": "/assets/baglamukhi_puja.png",
    "badge": "Victory",
    "description": "Divine Tantrik Mahavidya ritual to overcome enemies, win legal matters, and secure complete protection.",
    "details": [
      "Yellow Pitambari Sthapana & Turmeric Pujas",
      "Baglamukhi Stotra & Mantra Japa",
      "Haldi & Yellow Mustard Havan",
      "Protection Kavach initiation",
      "Victory prayers for court & legal cases"
    ]
  },
  {
    "id": "mahamrityunjaypuja",
    "name": "Mahamrityunjay Puja",
    "category": "Ceremony",
    "price": 10000,
    "priceUSD": 139,
    "duration": "3 Hours",
    "panditsCount": "2 Pandits",
    "imageUrl": "/assets/mahamrityunjay_jap.png",
    "badge": "Shiva",
    "description": "Comprehensive Shiva Puja and Rudrabhishek for chronic illness relief, peace, and longevity.",
    "details": [
      "Shivling Panchamrit Abhishek",
      "108 Name Archana & Bilva Patra offering",
      "Maha Mrityunjaya Japa",
      "Rudra Havan",
      "Divine Bhasma blessings"
    ]
  },
  {
    "id": "gayatrijap",
    "name": "Gayatri Mantra Jap",
    "category": "Ceremony",
    "price": 5100,
    "priceUSD": 69,
    "duration": "3 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": "/assets/gayatri_jap.png",
    "badge": "Wisdom",
    "description": "Sacred Gayatri Mantra recitation for spiritual awakening, intellect enhancement, and mental clarity.",
    "details": [
      "Gayatri Yantra Pratishtha",
      "24,000 Gayatri Mantra Japa",
      "Sandhya Vandanam & Arghya",
      "Gayatri Havan",
      "Mind & body purification"
    ]
  },
  {
    "id": "navratripuja",
    "name": "Navratri Puja & Havan",
    "category": "Ceremony",
    "price": 5100,
    "priceUSD": 69,
    "duration": "3.5 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": "/assets/navratri_puja.png",
    "badge": "Durga",
    "description": "Nine-day Durga Puja celebration, Kalash Sthapana, Durga Saptashati path, and Kanya Pujan.",
    "details": [
      "Ghat Sthapana & Kalash Puja",
      "Durga Saptashati Adhyay recitation",
      "Maha Navami Havan with Kamal Gatta",
      "Kanya Pujan (9 young girls)",
      "Divine Shakti Aarti"
    ]
  },
  {
    "id": "matadhumavati",
    "name": "Mata Dhumavati Puja",
    "category": "Ceremony",
    "price": 2100,
    "priceUSD": 29,
    "duration": "2 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": "/assets/mata_dhumavati.png",
    "badge": "Tantra",
    "description": "Sacred Mahavidya ritual to alleviate deep poverty, overcome grief, and remove acute life obstacles.",
    "details": [
      "Dhumavati Yantra & Incense Puja",
      "Rai & Black Til Havan",
      "Obstacle removal Stotra Path",
      "Protection Sankalp",
      "Peace & clarity blessings"
    ]
  },
  {
    "id": "shreemadbhagwat",
    "name": "Shreemad Bhagwat Path",
    "category": "Ceremony",
    "price": 21000,
    "priceUSD": 299,
    "duration": "7 Days",
    "panditsCount": "2 Pandits",
    "imageUrl": "/assets/ramcharitmanas.png",
    "badge": "Katha Saptah",
    "description": "Seven-day (Saptah) divine narration of Shreemad Bhagwat Purana for spiritual liberation and family prosperity.",
    "details": [
      "7-Day Srimad Bhagwat Mahapuran Katha",
      "Daily Krishna Leela & Raas Leela narration",
      "Vishnu Sahasranama Stotram",
      "Grand Purnahuti Havan on 7th day",
      "Maha Prasadam for family"
    ]
  },
  {
    "id": "vahanpuja",
    "name": "Vehicle (Vahan) & Shop Shanti Puja",
    "category": "Online Puja",
    "price": 2100,
    "priceUSD": 29,
    "duration": "1.5 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": officeOpeningImg,
    "badge": "Blessing",
    "description": "Auspicious blessing ritual for new cars, commercial vehicles, and shops for accident protection and business growth.",
    "details": [
      "Ganesh Puja & Swastik Drawing with Kumkum",
      "Lemon (Nimbu-Mirchi) protection ritual",
      "Coconut cracking ceremony",
      "Vahan Suraksha Mantra chanting",
      "Aarti & Prashad"
    ]
  },
  {
    "id": "mundansanskar",
    "name": "Mundan Sanskar Puja (Choolakarana)",
    "category": "Ceremony",
    "price": 5100,
    "priceUSD": 69,
    "duration": "2.5 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": birthdayPujaImg,
    "badge": "Sanskar",
    "description": "Traditional first haircut Sanskar for infants to cleanse past-life impurities and ensure health & longevity.",
    "details": [
      "Ganesh & Kula Devata Sthapana",
      "Child Ayushya Havan for long life",
      "Sacred hair shaving mantras",
      "Curd & Gangajal head purification",
      "Family blessings"
    ]
  },
  {
    "id": "santanagopal",
    "name": "Santana Gopal Puja & Havan",
    "category": "Astrology",
    "price": 7500,
    "priceUSD": 99,
    "duration": "3.5 Hours",
    "panditsCount": "2 Pandits",
    "imageUrl": birthdayPujaImg,
    "badge": "Progeny Blessing",
    "description": "Sacred ritual dedicated to Lord Bal Gopal for childless couples seeking healthy, intelligent progeny.",
    "details": [
      "Laddu Gopal Sringar & Butter Bhog",
      "Santana Gopal Stotra & 10,000 Mantra Japa",
      "Peshwai & Makhana Ahuti Havan",
      "Sanctified Kheer Prasad for couple",
      "Parental blessings"
    ]
  },
  {
    "id": "anniversaryhavan",
    "name": "Vivah Varshaganth (Anniversary) Havan",
    "category": "Havan",
    "price": 3500,
    "priceUSD": 49,
    "duration": "2 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": marriageCeremonyImg,
    "badge": "Couples",
    "description": "Marriage anniversary blessing Havan dedicated to Shiva-Parvati for lifelong love, harmony, and togetherness.",
    "details": [
      "Uma-Maheshwara & Gauri-Shankar Puja",
      "Garland exchange ritual for couples",
      "Dampatya Suktam chanting",
      "Agni Havan for marital harmony",
      "Long life & prosperity blessings"
    ]
  },
  {
    "id": "tulsivivah",
    "name": "Tulsi Vivah Puja",
    "category": "Ceremony",
    "price": 3500,
    "priceUSD": 49,
    "duration": "2.5 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": diwaliLakshmiImg,
    "badge": "Devotional",
    "description": "Ceremonial marriage of Holy Tulsi plant with Lord Shaligram (Vishnu) marking the start of Hindu wedding season.",
    "details": [
      "Tulsi Vrindavan Sringar & Sugarcane Mandap",
      "Shaligram Idol Abhishek & Vastra offering",
      "Vivah Kanyadaan & Mangalashtakam recitation",
      "Grand Aarti & Chappan Bhog",
      "Family wedding prosperity"
    ]
  },
  {
    "id": "govardhanpuja",
    "name": "Govardhan Puja & Annakut",
    "category": "Ceremony",
    "price": 5100,
    "priceUSD": 69,
    "duration": "3 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": diwaliLakshmiImg,
    "badge": "Post-Diwali",
    "description": "Post-Diwali Krishna Govardhan Giriraj worship with 56 Bhog Annakut offerings for agricultural & business wealth.",
    "details": [
      "Govardhan Hill Cowdung Sthapana",
      "Krishna Giriraj Shodashopachara Puja",
      "56 Bhog (Annakut) presentation",
      "Gau Seva Mantra recitation",
      "Annakut Prasadam"
    ]
  },
  {
    "id": "gauseva",
    "name": "Gau Seva & Gau Puja",
    "category": "Online Puja",
    "price": 2100,
    "priceUSD": 29,
    "duration": "1.5 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": officeOpeningImg,
    "badge": "Sacred Cow",
    "description": "Sacred worship and green fodder (Gras Daan) feeding to Kamadhenu Cow in gaushala for erasing all sin karma.",
    "details": [
      "Gau Mata Tilak & Marigold Garland Sringar",
      "33 Crore Devas Invocation in Gau Mata",
      "Green Fodder, Jaggery & Roti feeding",
      "Gau Pradakshina ceremony",
      "Universal blessing"
    ]
  },
  {
    "id": "dhanvantarihavan",
    "name": "Dhanvantari Healing Havan",
    "category": "Havan",
    "price": 5100,
    "priceUSD": 69,
    "duration": "3 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": "/assets/chandi_havan.png",
    "badge": "Healing",
    "description": "Specialized Vedic Havan dedicated to Lord Dhanvantari, divine physician of Devas, for relief from ailments and radiant health.",
    "details": [
      "Dhanvantari Mantra Japa & Stotra path",
      "Aushadhi Havan with 108 Ayurvedic medicinal herbs",
      "Holy Amruth Kalash Sthapana",
      "Health Kavach recitation",
      "Sanctified Bhasma & Prasad distribution"
    ]
  },
  {
    "id": "mahasudarshan",
    "name": "Maha Sudarshan Havan",
    "category": "Havan",
    "price": 7500,
    "priceUSD": 99,
    "duration": "3.5 Hours",
    "panditsCount": "2 Pandits",
    "imageUrl": "/assets/chandi_havan.png",
    "badge": "Sudarshan Chakra",
    "description": "Supreme Vishnu Sudarshan Chakra Havan to dispel negative energies, evil eye, black magic, and chronic fears.",
    "details": [
      "Maha Sudarshan Chakra Yantra Pratishtha",
      "Sudarshan Ashtakam & Mantra recitation",
      "Sacred Ahuti with lotus seeds & Ghee",
      "Protection Chakra installation for home & family",
      "Purnahuti & Aarti"
    ]
  },
  {
    "id": "vishnusahasranama",
    "name": "Vishnu Sahasranama Path & Havan",
    "category": "Ceremony",
    "price": 5100,
    "priceUSD": 69,
    "duration": "3 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": "/assets/ramcharitmanas.png",
    "badge": "1000 Names",
    "description": "Recitation of 1,000 divine names of Lord Vishnu followed by Tulsi Havan for peace, harmony, and liberation.",
    "details": [
      "Lord Vishnu Sahasranama Stotram recitation",
      "1,000 Tulsi Archana offering",
      "Vishnu Havan with pure cow ghee",
      "Family peace & prosperity prayers",
      "Prasad distribution"
    ]
  },
  {
    "id": "kanakdharapuija",
    "name": "Kanakdhara Stotra Puja & Havan",
    "category": "Ceremony",
    "price": 5100,
    "priceUSD": 69,
    "duration": "3 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": diwaliLakshmiImg,
    "badge": "Wealth Remedy",
    "description": "Adi Shankaracharya Kanakdhara Stotra ritual for unexpected wealth flow, debt relief, and Lakshmi blessings.",
    "details": [
      "Kanakdhara Yantra Sthapana",
      "108 Recitations of Kanakdhara Stotra",
      "Golden Amla & Lotus flower offerings",
      "Lakshmi Kuber Havan",
      "Wealth & debt relief prayers"
    ]
  },
  {
    "id": "ashtalakshmipuja",
    "name": "Ashta Lakshmi Puja & Havan",
    "category": "Ceremony",
    "price": 9500,
    "priceUSD": 129,
    "duration": "4 Hours",
    "panditsCount": "2 Pandits",
    "imageUrl": diwaliLakshmiImg,
    "badge": "8-Fold Prosperity",
    "description": "Grand worship of eight forms of Goddess Lakshmi for wealth, courage, grain, progeny, knowledge, and victory.",
    "details": [
      "Installation of 8 Lakshmi altars",
      "Sri Suktam & Ashta Lakshmi Stotram",
      "Lotus flower & Makhana Archana",
      "Ashta Lakshmi Mahayagna Havan",
      "Prosperity blessings for home & business"
    ]
  },
  {
    "id": "bhumipujan",
    "name": "Bhumi Pujan & Vastu Purush Shanti",
    "category": "Ceremony",
    "price": 7500,
    "priceUSD": 99,
    "duration": "3.5 Hours",
    "panditsCount": "2 Pandits",
    "imageUrl": officeOpeningImg,
    "badge": "Land Sanctification",
    "description": "Foundation stone laying ceremony for new plots, house construction, and commercial building Vastu Shanti.",
    "details": [
      "Northeast (Ishan) corner digging & Bhumi Devi Puja",
      "Vastu Purush & Nag Devta Silver Idol Pratishtha",
      "Panchiratna & Navratna burial ceremony",
      "Vastu Shanti Havan",
      "Construction safety & growth prayers"
    ]
  },
  {
    "id": "vidyarambha",
    "name": "Vidyarambha & Saraswati Vandana",
    "category": "Ceremony",
    "price": 3500,
    "priceUSD": 49,
    "duration": "2 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": "/assets/gayatri_jap.png",
    "badge": "Sanskar",
    "description": "Sacred first learning initiation for young children (Aksharabhyasam) seeking Goddess Saraswati wisdom.",
    "details": [
      "Goddess Saraswati & Hayagriva Puja",
      "Akshar Abhyas (writing Om on rice plate with golden ring)",
      "Pen, slate & book sanctification",
      "Medha Suktam recitation for memory",
      "Prasad distribution"
    ]
  },
  {
    "id": "janeusanskar",
    "name": "Janeu Sanskar (Yagnopavit)",
    "category": "Ceremony",
    "price": 7500,
    "priceUSD": 99,
    "duration": "4 Hours",
    "panditsCount": "2 Pandits",
    "imageUrl": "/assets/gayatri_jap.png",
    "badge": "Vedic Sanskar",
    "description": "Sacred thread (Yagnopavita) Upanayana ceremony for spiritual rebirth, Brahmacharya, and Gayatri Deeksha.",
    "details": [
      "Ganesh, Matrika & Nandi Shradh Puja",
      "Yagnopavita Dharana with Vedic Mantras",
      "Gayatri Mantra Deeksha by Guru/Pandit Ji",
      "Bhiksha Vandanam ceremony",
      "Brahmachari Havan & blessing"
    ]
  },
  {
    "id": "katyayanipuja",
    "name": "Katyayani Devi Puja (Vivah Dosh)",
    "category": "Astrology",
    "price": 7500,
    "priceUSD": 99,
    "duration": "3.5 Hours",
    "panditsCount": "2 Pandits",
    "imageUrl": "/assets/navratri_puja.png",
    "badge": "Marriage Remedy",
    "description": "Mata Katyayani ritual for removing delay in marriage, finding compatible life partner, and resolving relationship obstacles.",
    "details": [
      "Mata Katyayani Idol & Yantra Sthapana",
      "Katyayani Mantra Japa (10,000 chants)",
      "Red Chunri, Bangles & Shringar offering",
      "Vivah Dosh Nivaran Havan",
      "Blessed thread & Prasad"
    ]
  },
  {
    "id": "mangaldosh",
    "name": "Mangal Dosh Shanti (Bhat Puja)",
    "category": "Astrology",
    "price": 7500,
    "priceUSD": 99,
    "duration": "3.5 Hours",
    "panditsCount": "2 Pandits",
    "imageUrl": "/assets/kaalsarp_dosh.png",
    "badge": "Manglik Remedy",
    "description": "Specialized Bhat Puja and Mangal Grah Havan to pacify Mars (Mangal Dosh) in natal chart for peaceful marriage.",
    "details": [
      "Mangal Devta & Bhat (Rice) Abhishek",
      "Red Coral & Red Chandan Archana",
      "10,000 Mangal Mantra Japa",
      "Mangal Shanti Havan with Red Samidha",
      "Personalized marital remedies"
    ]
  },
  {
    "id": "gandmoolshanti",
    "name": "Gand Mool Nakshatra Shanti",
    "category": "Astrology",
    "price": 5500,
    "priceUSD": 79,
    "duration": "3 Hours",
    "panditsCount": "2 Pandits",
    "imageUrl": "/assets/navgrah_shanti.png",
    "badge": "Birth Nakshatra",
    "description": "Remedial ritual for babies born under 6 Gand Mool Nakshatras (Ashlesha, Magha, Jyeshtha, Moola, Revati, Ashwini).",
    "details": [
      "Abhishek with 27 well waters & 27 tree leaves",
      "Nakshatra Lord Japa & Yantra Puja",
      "Father-child shadow in Ghee bowl ritual",
      "Mool Shanti Havan",
      "Health & longevity blessings"
    ]
  },
  {
    "id": "shanishanti",
    "name": "Shani Sade Sati & Dhaiya Shanti",
    "category": "Astrology",
    "price": 5100,
    "priceUSD": 69,
    "duration": "3 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": "/assets/navgrah_shanti.png",
    "badge": "Saturn Remedy",
    "description": "Lord Shani Deva ritual to alleviate severe effects of Shani Sade Sati, Dhaiya, and Mahadasha.",
    "details": [
      "Shani Deva Mustard Oil & Black Til Abhishek",
      "Shani Chalisa & Shani Stotra path",
      "11,000 Shani Beej Mantra Japa",
      "Black Til & Iron Havan",
      "Iron Ring & Til Donation guidance"
    ]
  },
  {
    "id": "rahuketuhavan",
    "name": "Rahu Ketu Shanti Havan",
    "category": "Astrology",
    "price": 7500,
    "priceUSD": 99,
    "duration": "3.5 Hours",
    "panditsCount": "2 Pandits",
    "imageUrl": "/assets/kaalsarp_dosh.png",
    "badge": "Planetary",
    "description": "Pacification ritual for Rahu and Ketu shadow planets to stop sudden losses, anxiety, and confusion.",
    "details": [
      "Rahu & Ketu Yantra Sthapana",
      "Dual Beej Mantra Recitation",
      "Durva Grass & Kusha Havan",
      "Urad & Sesame Donation ritual",
      "Peace of mind & success prayers"
    ]
  },
  {
    "id": "hanumanchalisa108",
    "name": "Hanuman Chalisa 108 Path & Havan",
    "category": "Ceremony",
    "price": 3500,
    "priceUSD": 49,
    "duration": "3 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": "/assets/sundarkand_path.png",
    "badge": "108 Path",
    "description": "108 continuous recitations of Sri Hanuman Chalisa with Chola offering and Havan for victory and fearlessness.",
    "details": [
      "Hanuman Ji Chola & Chameli Oil Sringar",
      "108 Recitations of Hanuman Chalisa",
      "Sankat Mochan Stotra chanting",
      "Maruti Havan with Ghee & Boondi",
      "Raksha Sutra binding"
    ]
  },
  {
    "id": "adityahridaya",
    "name": "Aditya Hridaya Stotra & Surya Puja",
    "category": "Ceremony",
    "price": 3500,
    "priceUSD": 49,
    "duration": "2.5 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": "/assets/gayatri_jap.png",
    "badge": "Sun God",
    "description": "Veda Vyasa Agastya Aditya Hridaya Stotra ritual for high confidence, government job success, and eye health.",
    "details": [
      "Surya Dev Arghya with Copper Kalash & Red Flowers",
      "Aditya Hridaya Stotra 12 Path",
      "Surya Namaskar Mantras",
      "Surya Havan with Red Sandalwood",
      "Leadership & vitality blessings"
    ]
  },
  {
    "id": "lalitasahasranama",
    "name": "Lalita Sahasranama Stotra & Havan",
    "category": "Ceremony",
    "price": 7500,
    "priceUSD": 99,
    "duration": "3.5 Hours",
    "panditsCount": "2 Pandits",
    "imageUrl": "/assets/baglamukhi_puja.png",
    "badge": "Sri Vidya",
    "description": "Divine Srividya worship of Divine Mother Lalita Tripurasundari with 1,000 names Kumkum Archana.",
    "details": [
      "Sri Yantra Pratishtha & Shodashopachara Puja",
      "1,000 Names Kumkum Archana to Mother Lalita",
      "Lalita Trishati Path",
      "Sri Vidya Mahayagna Havan",
      "Divine grace & beauty blessings"
    ]
  },
  {
    "id": "shivasahasranama",
    "name": "Shiva Sahasranama Archana",
    "category": "Ceremony",
    "price": 5100,
    "priceUSD": 69,
    "duration": "3 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": "/assets/mahamrityunjay_jap.png",
    "badge": "Shiva",
    "description": "Chanting 1,000 holy names of Lord Shiva with lotus flowers and Bilva Patra for fulfillment of all wishes.",
    "details": [
      "Shivling Panchamrit Snan",
      "1,000 Bilva Patra & Lotus Archana",
      "Rudra Trishati recitation",
      "Shiva Havan",
      "Maha Prasadam"
    ]
  },
  {
    "id": "pradoshpuja",
    "name": "Pradosh Vrat Puja & Rudrabhishek",
    "category": "Ceremony",
    "price": 3500,
    "priceUSD": 49,
    "duration": "2.5 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": "/assets/mahamrityunjay_jap.png",
    "badge": "Bi-Monthly",
    "description": "Auspicious Twilight (Pradosh Kaal) Shiva Worship to dissolve accumulated sins and bring mental calm.",
    "details": [
      "Pradosh Kaal Shodashopachara Shiva Puja",
      "Gangajal & Milk Abhishek",
      "108 Names Shiva Stotra",
      "Dhoop-Deep Aarti",
      "Prasad distribution"
    ]
  },
  {
    "id": "narsimhajayanti",
    "name": "Narsimha Jayanti Puja & Havan",
    "category": "Havan",
    "price": 7500,
    "priceUSD": 99,
    "duration": "3.5 Hours",
    "panditsCount": "2 Pandits",
    "imageUrl": "/assets/chandi_havan.png",
    "badge": "Protection",
    "description": "Lord Narsimha (half-man half-lion Vishnu avatar) fierce protection Havan to destroy enemies and severe danger.",
    "details": [
      "Lord Narsimha Kavach & Stotra Japa",
      "Narsimha Beej Mantra Havan",
      "Panakam (Jaggery water) Bhog offering",
      "Protection Chakra invocation",
      "Victory & safety prayers"
    ]
  },
  {
    "id": "ekadashiudyapan",
    "name": "Ekadashi Vrat Udyapan",
    "category": "Ceremony",
    "price": 5100,
    "priceUSD": 69,
    "duration": "3 Hours",
    "panditsCount": "1 Pandit",
    "imageUrl": "/assets/ramcharitmanas.png",
    "badge": "Vrat Completion",
    "description": "Formal completion ceremony after observing 24 Ekadashi fasts for permanent Vishnu Lok liberation.",
    "details": [
      "Vishnu Mandap & 24 Kalash Sthapana",
      "Ekadashi Mahatmya Path",
      "Vishnu-Lakshmi Havan",
      "Brahmin Bhojan & Vessel donation",
      "Moksha blessings"
    ]
  },
  {
    "id": "rudrachandiyagna",
    "name": "Rudra Chandi Mahayagna",
    "category": "Havan",
    "price": 31000,
    "priceUSD": 449,
    "duration": "8 Hours",
    "panditsCount": "5 Pandits",
    "imageUrl": "/assets/chandi_havan.png",
    "badge": "Mahayagna",
    "description": "Grand joint Yagna combining Rudrabhishek Shiva energy and Chandi Havan Shakti for ultimate protection and prosperity.",
    "details": [
      "5 Acharyas performing dual Rudra & Chandi Mandap",
      "Rudra Prashna & Durga Saptashati Path",
      "1,008 Sacred Ahutis with Ghee & Herbs",
      "Grand Purnahuti & Dhwajarohan",
      "Maha Prasadam distribution"
    ]
  },
  {
    "id": "shatchandiyagna",
    "name": "Shat Chandi Mahayagna (100 Paths)",
    "category": "Havan",
    "price": 51000,
    "priceUSD": 699,
    "duration": "2 Days",
    "panditsCount": "7 Pandits",
    "imageUrl": "/assets/chandi_havan.png",
    "badge": "100-Path Yagna",
    "description": "Supreme 100 Durga Saptashati recitations Mahayagna by 7 learned Acharyas for royal status, empire growth, and triumph.",
    "details": [
      "7 Learned Varanasi Acharyas for 2 days",
      "100 Complete Recitations of Durga Saptashati",
      "10,000 Havan Ahutis with Kamal Gatta & Herbs",
      "Kanya Pujan of 9 Goddesses & Batuk Pujan",
      "Grand Purnahuti & World Peace Prayers"
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

export const FAQS: FAQItem[] = [
  {
    question: 'How do I book a Pandit Ji through Pooja Pandit?',
    answer: 'You can select your desired Puja from our Services catalog, click "Book Now", choose your preferred date, location, and time slot, and confirm your booking. Our team will contact you within 30 minutes to confirm all Samagri details.',
    category: 'Booking'
  },
  {
    question: 'Will Pandit Ji bring all the required Puja Samagri?',
    answer: 'Yes! We offer options where Pandit Ji brings complete authentic Puja Samagri (holy wood, ghee, camphor, flowers, sweets, fruits, and vessels) or you can provide the Samagri yourself based on our checklist.',
    category: 'Services'
  },
  {
    question: 'Can I perform online / digital Pujas if I live abroad?',
    answer: 'Absolutely. We conduct live interactive 4K video stream Pujas via Zoom/WhatsApp from holy shrines and ghats in Varanasi. Sankalpa is taken in your name and Gotra, and sanctified Prasad is dispatched to your international address.',
    category: 'Online Puja'
  },
  {
    question: 'What languages does Pandit Ji speak during the ceremony?',
    answer: 'Pandit Ji recites sacred mantras in authentic Sanskrit and provides explanations, kathas, and instructions in Hindi, English, Bhojpuri, Telugu, or your preferred language.',
    category: 'General'
  }
];

export const INITIAL_BOOKINGS = [];

export const REVIEWS: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Ananya Sharma',
    city: 'Hyderabad',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Pandit Ji performed our Grih Pravesh Puja with such divine clarity and scriptural purity. Every mantra was explained beautifully.',
    pujaName: 'Grih Pravesh Puja'
  },
  {
    id: 'rev-2',
    name: 'Rahul Verma',
    city: 'Secunderabad',
    rating: 5,
    date: '1 month ago',
    comment: 'Booked Chandi Havan for family health and peace. Extremely punctual, professional, and authentic Vedic Acharya.',
    pujaName: 'Chandi Havan'
  },
  {
    id: 'rev-3',
    name: 'Sneha Reddy',
    city: 'Gachibowli, Hyderabad',
    rating: 5,
    date: '3 weeks ago',
    comment: 'The Rudrabhishek ceremony was deeply spiritual and peaceful. Highly recommended for authentic Vedic pujas in Hyderabad!',
    pujaName: 'Rudrabhishek'
  }
];

export const TESTIMONIALS = REVIEWS;

export const UPCOMING_FESTIVALS: UpcomingFestival[] = [
  {
    id: 'default-makarsankranti',
    day: '14',
    monthYear: 'January 2026',
    title: 'Makar Sankranti',
    description: 'Sun enters Capricorn. Highly auspicious for Surya Puja, Ganga Snan, and Til Daan.',
    titleKey: 'fest.makarsankranti.title',
    icon: 'Sun',
    color: 'border-l-4 border-[#a04100]'
  },
  {
    id: 'default-vasantpanchami',
    day: '23',
    monthYear: 'January 2026',
    title: 'Vasant Panchami',
    description: 'Saraswati Jayanti. Auspicious day for Vidyarambha, Aksharabhyasam, and educational Pujas.',
    titleKey: 'fest.vasantpanchami.title',
    icon: 'BookOpen',
    color: 'border-l-4 border-amber-500'
  },
  {
    id: 'default-shivratri',
    day: '15',
    monthYear: 'February 2026',
    title: 'Maha Shivratri',
    description: 'Great night of Lord Shiva. Ideal for 4-Prahar Rudrabhishek, Shivaratri Vrat, and Shiva Sahasranama.',
    titleKey: 'fest.shivratri.title',
    icon: 'Flame',
    color: 'border-l-4 border-[#a04100]'
  },
  {
    id: 'default-holi',
    day: '03',
    monthYear: 'March 2026',
    title: 'Holika Dahan & Holi',
    description: 'Festival of colors and victory of good over evil. Holika Dahan Havan and Vishnu Puja.',
    titleKey: 'fest.holi.title',
    icon: 'Sparkles',
    color: 'border-l-4 border-rose-500'
  },
  {
    id: 'default-navratri',
    day: '19',
    monthYear: 'March 2026',
    title: 'Chaitra Navratri Starts',
    description: '9 days of Shakti worship. Ghatasthapana, Durga Saptashati Path, and Chandi Havan.',
    titleKey: 'fest.navratri.title',
    icon: 'Sparkles',
    color: 'border-l-4 border-amber-600'
  },
  {
    id: 'default-ramnavami',
    day: '27',
    monthYear: 'March 2026',
    title: 'Sri Ram Navami',
    description: 'Birth anniversary of Lord Sri Ram. Ramcharitmanas Path, Sundarkand, and Ram Durbar Puja.',
    titleKey: 'fest.ramnavami.title',
    icon: 'Sun',
    color: 'border-l-4 border-[#a04100]'
  },
  {
    id: 'default-hanumanjayanti',
    day: '02',
    monthYear: 'April 2026',
    title: 'Hanuman Jayanti',
    description: 'Birth of Lord Hanuman. 108 Hanuman Chalisa Path, Sundarkand, and Maruti Havan.',
    titleKey: 'fest.hanumanjayanti.title',
    icon: 'Flame',
    color: 'border-l-4 border-orange-600'
  },
  {
    id: 'default-akshayatritiya',
    day: '19',
    monthYear: 'April 2026',
    title: 'Akshaya Tritiya',
    description: 'Unending prosperity day. Kanakdhara Puja, Lakshmi Kuber Havan, and Gold/Property buying.',
    titleKey: 'fest.akshayatritiya.title',
    icon: 'Sparkles',
    color: 'border-l-4 border-yellow-500'
  },
  {
    id: 'default-buddhapurnima',
    day: '01',
    monthYear: 'May 2026',
    title: 'Buddha Purnima',
    description: 'Holy Purnima Snan and Satyanarayan Katha. Meditation and peace prayers.',
    titleKey: 'fest.buddhapurnima.title',
    icon: 'Sun',
    color: 'border-l-4 border-[#a04100]'
  },
  {
    id: 'default-gurupurnima',
    day: '29',
    monthYear: 'July 2026',
    title: 'Guru Purnima',
    description: 'Veda Vyasa Jayanti. Worship of Gurus, Acharyas, and spiritual preceptors.',
    titleKey: 'fest.gurupurnima.title',
    icon: 'BookOpen',
    color: 'border-l-4 border-amber-600'
  },
  {
    id: 'default-rakshabandhan',
    day: '28',
    monthYear: 'August 2026',
    title: 'Raksha Bandhan',
    description: 'Festival of brother-sister bond and Raksha Sutra binding. Upakarma and Shravani Vrat.',
    titleKey: 'fest.rakshabandhan.title',
    icon: 'Sparkles',
    color: 'border-l-4 border-pink-500'
  },
  {
    id: 'default-janmashtami',
    day: '04',
    monthYear: 'September 2026',
    title: 'Sri Krishna Janmashtami',
    description: 'Midnight birth celebration of Lord Krishna. Bal Gopal Abhishek, Santana Gopal Puja & Kirtan.',
    titleKey: 'fest.janmashtami.title',
    icon: 'Sparkles',
    color: 'border-l-4 border-blue-600'
  },
  {
    id: 'default-ganeshchaturthi',
    day: '14',
    monthYear: 'September 2026',
    title: 'Ganesh Chaturthi',
    description: '10-day Ganeshotsav starts. Ganpati Sthapana, Atharvashirsha Abhishekam & Havan.',
    titleKey: 'fest.ganeshchaturthi.title',
    icon: 'Sparkles',
    color: 'border-l-4 border-amber-500'
  },
  {
    id: 'default-shardiyanavratri',
    day: '11',
    monthYear: 'October 2026',
    title: 'Sharad Navratri Starts',
    description: 'Navratri Durga festival. Highly auspicious 9 days for Chandi Havan, Durga Puja, and Kanya Pujas.',
    titleKey: 'fest.shardiyanavratri.title',
    icon: 'Flame',
    color: 'border-l-4 border-red-600'
  },
  {
    id: 'default-dussehra',
    day: '20',
    monthYear: 'October 2026',
    title: 'Vijayadashami (Dussehra)',
    description: 'Victory of Sri Ram over Ravana. Shami Puja, Aparajita Puja, and Vehicle/Tool Shanti.',
    titleKey: 'fest.dussehra.title',
    icon: 'Sun',
    color: 'border-l-4 border-[#a04100]'
  },
  {
    id: 'default-karwachauth',
    day: '27',
    monthYear: 'October 2026',
    title: 'Karwa Chauth',
    description: 'Fast for husband longevity. Shiva-Parvati Puja and Moon Arghya ritual.',
    titleKey: 'fest.karwachauth.title',
    icon: 'Sparkles',
    color: 'border-l-4 border-rose-500'
  },
  {
    id: 'default-dhanteras',
    day: '06',
    monthYear: 'November 2026',
    title: 'Dhanteras & Dhanvantari Jayanti',
    description: 'Dhanvantari Healing Havan, Yamadeepdaan, and Lakshmi Kuber Gold/Utensils purchase.',
    titleKey: 'fest.dhanteras.title',
    icon: 'Sparkles',
    color: 'border-l-4 border-yellow-500'
  },
  {
    id: 'default-diwali',
    day: '08',
    monthYear: 'November 2026',
    title: 'Deepavali Mahalakshmi Puja',
    description: 'Grand Diwali night Mahalakshmi, Kuber, and Saraswati Puja with Lotus Havan.',
    titleKey: 'fest.diwali.title',
    icon: 'Flame',
    color: 'border-l-4 border-amber-500'
  },
  {
    id: 'default-bhaidooj',
    day: '10',
    monthYear: 'November 2026',
    title: 'Bhai Dooj / Yama Dwitiya',
    description: 'Yama Devta and Yamuna Puja for brother longevity and family protection.',
    titleKey: 'fest.bhaidooj.title',
    icon: 'Sparkles',
    color: 'border-l-4 border-[#a04100]'
  },
  {
    id: 'default-chhathpuja',
    day: '14',
    monthYear: 'November 2026',
    title: 'Chhath Puja Mahaparv',
    description: 'Surya Dev and Chhathi Maiyya Vrat. Evening and Morning Arghya at river ghats.',
    titleKey: 'fest.chhathpuja.title',
    icon: 'Sun',
    color: 'border-l-4 border-orange-500'
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
