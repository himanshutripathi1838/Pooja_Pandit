export type Language = 'en' | 'hi' | 'sa' | 'mr' | 'gu' | 'te' | 'ta';

export const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'sa', label: 'संस्कृतम्' },
  { code: 'mr', label: 'मराठी' },
  { code: 'gu', label: 'ગુજરાતી' },
  { code: 'te', label: 'తెలుగు' },
  { code: 'ta', label: 'தமிழ்' }
];

export const TRANSLATIONS: Record<string, Record<Language, any>> = {

  // --- SEO Metadata Translations ---
  'seo.title.home': {
    en: 'Online Pooja Booking & Vedic Rituals | Pandit Dheeraj Tripathi',
    hi: 'ऑनलाइन पूजा बुकिंग और वैदिक अनुष्ठान | पंडित धीरज त्रिपाठी',
    sa: 'ऑनलाइन पूजा बुकिंग एवं वैदिक कर्मकाण्ड | पण्डित धीरज त्रिपाठी',
    mr: 'ऑनलाइन पूजा बुकिंग आणि वैदिक विधी | पंडित धीरज त्रिपाठी',
    gu: 'ઓનલાઇન પૂજા બુકિંગ અને વૈદિક વિધિ | પંડિત ધીરજ ત્રિપાઠી',
    te: 'ఆన్‌లైన్ పూజా బుకింగ్ & వైదిక క్రతువులు | పండిట్ ధీరజ్ త్రిపాఠి',
    ta: 'ஆன்லைன் பூஜை முன்பதிவு & வேத சடங்குகள் | பண்டித தீரஜ் திரிபாதி'
  },
  'seo.desc.home': {
    en: 'Book authentic Vedic rituals, havans, and astrology consultations online. Performed with absolute scriptural purity by Pandit Dheeraj Tripathi in Varanasi and globally.',
    hi: 'प्रामाणिक वैदिक अनुष्ठान, हवन और ज्योतिष परामर्श ऑनलाइन बुक करें। वाराणसी और वैश्विक स्तर पर पंडित धीरज त्रिपाठी द्वारा पूर्ण शास्त्रीय शुद्धता के साथ संपन्न।',
    sa: 'प्रामाणिकवैदिकयज्ञ-पूजा-ज्योतिषपरामर्शाः। आचार्य धीरज त्रिपाठी इत्यनेन शास्त्रोक्तविधिना सम्पाद्यते।',
    mr: 'अधिकृत वैदिक विधी, हवन आणि ज्योतिष सल्ला ऑनलाइन बुक करा. पंडित धीरज त्रिपाठी यांच्याद्वारे पूर्ण शास्त्रीय शुद्धतेने संपन्न.',
    gu: 'વૈદિક વિધિઓ, હવન અને જ્યોતિષ સલાહ ઓનલાઇન બુક કરો. પંડિત ધીરજ ત્રિપાઠી દ્વારા પૂર્ણ શાસ્ત્રીય શુદ્ધતા સાથે સંપન્ન.',
    te: 'అధికారిక వైదిక క్రతువులు, హవనాలు మరియు జ్యోతిష్య సంప్రదింపులను ఆన్‌లైన్‌లో బుక్ చేయండి. పండిట్ ధీరజ్ త్రిపాఠి గారిచే నిర్వహించబడును.',
    ta: 'வேத சடங்குகள், யாகங்கள் மற்றும் ஜோதிட ஆலோசனைகளை ஆன்லைனில் பதிவு செய்யுங்கள். பண்டித தீரஜ் திரிபாதியால் நடத்தப்படுகிறது.'
  },
  'seo.title.services': {
    en: 'Vedic Pooja & Havan Services Catalog',
    hi: 'वैदिक पूजा और हवन सेवा सूची',
    sa: 'पूजा-यज्ञ-कर्मकाण्ड सेवा सूची',
    mr: 'वैदिक पूजा आणि हवन सेवांची यादी',
    gu: 'વૈદિક પૂજા અને હવન સેવા સૂચિ',
    te: 'వైదిక పూజ & హవన సేవల కేటలాగ్',
    ta: 'வேத பூஜை மற்றும் யாக சேவைகள் பட்டியல்'
  },
  'seo.desc.services': {
    en: 'Browse our complete catalog of traditional ceremonies: Griha Pravesh, Satyanarayan Puja, Rudrabhishek, Mahamrityunjaya Jaap, and customized Vedic rituals.',
    hi: 'गृह प्रवेश, सत्यनारायण पूजा, रुद्राभिषेक, महामृत्युंजय जाप और अनुकूलित वैदिक अनुष्ठानों सहित हमारी सभी पारंपरिक सेवाओं की सूची देखें।',
    sa: 'गृहप्रवेश-सत्यनारायणकथा-रुद्राभिषेक-महामृत्युञ्जयजपादीनां शास्त्रोक्तपूजाविधीनां सूची अत्र दृश्यताम्।',
    mr: 'पारंपारिक विधींची यादी पहा: गृह प्रवेश, सत्यनारायण पूजा, रुद्राभिषेक, महामृत्युंजय जाप आणि सानुकूलित वैदिक विधी.',
    gu: 'પરંપરાગત વિધિઓની સૂચિ જુઓ: ગૃહ પ્રવેશ, સત્યનારાયણ પૂજા, રુદ્રાભિષેક, મહામૃત્યુંજય જાપ અને કસ્ટમાઇઝ્ड વૈદિક વિધિ.',
    te: 'గృహ ప్రవేశం, సత్యనారాయణ పూజ, రుద్రాభిషేకం, మహామృత్యుంజయ జపం మరియు ఇతర వైదిక సేవల వివరాలు చూడండి.',
    ta: 'கிருஹ பிரவேசம், சத்தியநாராயண பூஜை, ருத்ராபிஷேகம் மற்றும் வேத சடங்குகளின் முழுமையான பட்டியலை உலாவுக.'
  },
  'seo.title.about': {
    en: 'About Pandit Dheeraj Tripathi | Vedic Priest',
    hi: 'पंडित धीरज त्रिपाठी का परिचय | वैदिक पुरोहित',
    sa: 'आचार्य धीरज त्रिपाठी परिचयः | वैदिक पुरोहितः',
    mr: 'पंडित धीरज त्रिपाठी यांच्याबद्दल | वैदिक पुरोहित',
    gu: 'પંડિત ધીરજ ત્રિપાઠી વિશે | વૈદિક પુરોહિત',
    te: 'పండిట్ ధీరజ్ త్రిపాఠి గారి గురించి | వైదిక పూజారి',
    ta: 'பண்டித தீரஜ் திரிபாதி பற்றி | வேத பூசாரி'
  },
  'seo.desc.about': {
    en: 'Learn about the 7-generation Sanskrit lineage, Vedic education in Varanasi, and ritual experiences of Pandit Dheeraj Tripathi.',
    hi: 'काशी में शिक्षित, सात पीढ़ियों की पुरोहित परंपरा और पंडित धीरज त्रिपाठी के वैदिक कर्मकांड अनुभवों के बारे में जानें।',
    sa: 'वाराणस्यां लब्धदीक्षः, सप्तवंशपरम्परागत पुरोहितः आचार्य धीरज त्रिपाठी महोदयस्य परिचयः।',
    mr: 'काशीमध्ये शिक्षित, सात पिढ्यांची पुरोहित परंपरा आणि पंडित धीरज त्रिपाठी यांच्या वैदिक कर्मकांडाच्या अनुभवांबद्दल जाणून घ्या.',
    gu: 'વારાણસીમાં શિક્ષિત, સાત પેઢીઓની પુરોહિત પરંપરા અને પંડિત ધીરજ ત્રિપાઠીના વૈદિક કર્મકાંડના અનુભવો વિશે જાણો.',
    te: 'వారణాసిలో వైదిక విద్య, ఏడు తరాల పూజారి వంశం మరియు పండిట్ ధీరజ్ త్రిపాఠి గారి సేవల గురించి తెలుసుకోండి.',
    ta: 'பண்டித தீரஜ் திரிபாதியின் வேத கல்வி மற்றும் சடங்கு அனுபவங்களைப் பற்றி அறியுங்கள்.'
  },
  'seo.title.gallery': {
    en: 'Sacred Rituals & Pujas Photo Gallery',
    hi: 'पवित्र अनुष्ठानों और पूजाओं की गैलरी',
    sa: 'पवित्रपूजा-यज्ञ-महोत्सवानां छायाचित्रदीर्घा',
    mr: 'पवित्र विधी आणि पूजांची फोटो गॅलरी',
    gu: 'પવિત્ર વિધિઓ અને પૂજાઓની ફોટો ગેલેરી',
    te: 'వైదిక పూజల ఫోటో గ్యాలరీ',
    ta: 'வேத சடங்குகள் மற்றும் பூஜைகள் புகைப்பட தொகுப்பு'
  },
  'seo.desc.gallery': {
    en: 'View visual highlights and photographs of marriages, office openings, birthday pujas, and temple service events conducted with Vedic liturgy.',
    hi: 'वैदिक रीति-रिवाजों के साथ संपन्न विवाह, कार्यालय उद्घाटन, जन्मदिन पूजा और मंदिर सेवा कार्यक्रमों के सुंदर चित्र देखें।',
    sa: 'शास्त्रोक्तविधिना सम्पादितानां विवाहानाम्, गृहप्रवेशानाम्, मन्दिरपूजानां च चित्राणि पश्यन्तु।',
    mr: 'वैदिक पद्धतीनुसार केलेले विवाह, कार्यालय उद्घाटन आणि पूजांचे छायाचित्रे पहा.',
    gu: 'વૈદિક પદ્ધતિથી થયેલા વિવાહ, ઓફિસ ઓપનિંગ અને પૂજાઓના ફોટા જુઓ.',
    te: 'వివాహాలు, గృహ ప్రవేశాలు, పుట్టినరోజు పూజలు మరియు దేవాలయ పూజల ఫోటోలను చూడండి.',
    ta: 'வேத சடங்குகளுடன் நடத்தப்பட்ட திருமணங்கள், அலுவலக திறப்பு விழாக்கள் மற்றும் பூஜை நிகழ்வுகளின் புகைப்படங்களை காண்க.'
  },
  'seo.title.book': {
    en: 'Book a Pandit Online | Devotee Rites Scheduler',
    hi: 'पंडित जी ऑनलाइन बुक करें | पूजा शेड्यूलर',
    sa: 'पूजासङ्कल्पः ऑनलाइन बुक कुरु',
    mr: 'पंडित ऑनलाइन बुक करा | पूजा शेड्यूलर',
    gu: 'પંડિત ઓનલાઇન બુક કરો | પૂજા શેડ્યૂલર',
    te: 'ఆన్‌లైన్‌లో పండిట్‌ను బుక్ చేయండి | పూజా షెడ్యూలర్',
    ta: 'ஆன்லைனில் பண்டிதரை முன்பதிவு செய்க | பூஜை கால அட்டவணை'
  },
  'seo.desc.book': {
    en: 'Select your preferred puja service, enter location details, choose auspicious dates on the calendar, and schedule a certified Vedic priest easily.',
    hi: 'अपनी पसंदीदा पूजा सेवा चुनें, स्थान दर्ज करें, कैलेंडर पर शुभ तिथि चुनें और आसानी से वैदिक पंडित बुक करें।',
    sa: 'स्वभिलषितां पूजां चित्वा, स्थानं विनिर्दिश्य, मङ्गलमयं कालञ्च निश्चित्य पूजासङ्कल्पं कुरु।',
    mr: 'आपली आवडती पूजा सेवा निवडा, स्थान टाका, कॅलेंडरवर शुभ तिथी निवडा आणि सहजपणे पंडित बुक करा.',
    gu: 'તમારી મનપસંદ પૂજા સેવા પસંદ કરો, સ્થાન દાખલ કરો, કેલેન્ડર પર શુભ તિથિ પસંદ કરો અને સરળતાથી પંડિત બુક કરો.',
    te: 'మీకు కావలసిన పూజా సేవను ఎంచుకోండి, స్థలాన్ని నమోదు చేయండి, క్యాలెండర్‌లో శుభ తేదీని ఎంచుకుని బుక్ చేసుకోండి.',
    ta: 'உங்களுக்கு விருப்பமான பூஜை சேவையைத் தேர்ந்தெடுத்து, இடத்தை உள்ளிட்டு, காலெண்டரில் சுப தேதியைத் தேர்ந்தெடுத்து முன்பதிவு செய்யுங்கள்.'
  },
  'seo.title.admin': {
    en: 'Admin Management Portal',
    hi: 'एडमिन प्रबंधन पोर्टल',
    sa: 'प्रबन्धक प्रवेशद्वारम्',
    mr: 'एडमिन पोर्टल',
    gu: 'એડમિન પોર્ટલ',
    te: 'అడ్మిన్ పోర్టల్',
    ta: 'நிர்வாகி போர்டல்'
  },
  'seo.desc.admin': {
    en: 'Secure login for managing scheduled bookings, confirming dates, and updating active Vedic rituals database.',
    hi: 'शेड्यूल की गई बुकिंग प्रबंधित करने, तिथियां सुनिश्चित करने और पूजा डेटाबेस अपडेट करने के लिए सुरक्षित पोर्टल।',
    sa: 'सम्पादितपूजानां प्रबन्धनार्थम्, विवरणस्य परिष्कारार्थञ्च प्रबन्धकप्रवेशः।',
    mr: 'बुकिंग व्यवस्थापित करण्यासाठी आणि डेटाबेस अद्यतनित करण्यासाठी सुरक्षित लॉगिन.',
    gu: 'બુકિંગ મેનેજ કરવા અને ડેટાબેઝ અપડેટ કરવા માટે સુરક્ષિત લોગિન.',
    te: 'బుకింగ్‌లను నిర్వహించడానికి మరియు డేటాను అప్‌డేట్ చేయడానికి అడ్మిన్ లాగిన్.',
    ta: 'முன்பதிவுகளை நிர்வகிக்க மற்றும் தரவுத்தளத்தை புதுப்பிக்க நிர்வாகி உள்நுழைவு.'
  },
  'seo.title.404': {
    en: 'Page Not Found | 404 Spiritual Detour',
    hi: 'पृष्ठ नहीं मिला | 404 त्रुटि',
    sa: 'मार्गभ्रष्टः | 404 त्रुटिः',
    mr: 'पेज सापडले नाही | 404 त्रुटी',
    gu: 'પેજ મળ્યું નથી | 404 ભૂલ',
    te: 'పేజీ కనుగొనబడలేదు | 404 లోపం',
    ta: 'பக்கம் கிடைக்கவில்லை | 404 பிழை'
  },
  'seo.desc.404': {
    en: 'The requested path does not exist. Please navigate back to the home page to access authentic Vedic services.',
    hi: 'अनुरोधित पृष्ठ अस्तित्व में नहीं है। प्रामाणिक वैदिक सेवाओं का उपयोग करने के लिए मुख्यपृष्ठ पर वापस जाएं।',
    sa: 'अनुरोधितः मार्गः न लब्धः। कृपया मुख्यपृष्ठं गत्वा पूजासङ्कल्पं कुरु।',
    mr: 'विचारलेले पेज अस्तित्वात नाही. कृपया मुख्यपृष्ठावर परत जा.',
    gu: 'વિચારેલું પેજ અસ્તિત્વમાં નથી. કૃપા કરીને હોમ પેજ પર પાછા જાઓ.',
    te: 'కోరిన పేజీ అందుబాటులో లేదు. దయచేసి హోమ్ పేజీకి తిరిగి వెళ్ళండి.',
    ta: 'கோரப்பட்ட பக்கம் இல்லை. ஆன்மீக சேவைகளைப் பெற முகப்பு பக்கத்திற்குச் செல்லவும்.'
  },

  'footer.brand': {
    en: 'Pooja Pandit',
    hi: 'पूजा पंडित',
    sa: 'पूजा पण्डित',
    mr: 'पूजा पंडित',
    gu: 'પૂજા પંડિત',
    te: 'పూజా పండిట్',
    ta: 'பூஜா பண்டிட்'
  },
  // Navigation
  'nav.home': {
    en: 'Home',
    hi: 'मुख्यपृष्ठ',
    sa: 'मुख्यपृष्ठम्',
    mr: 'मुख्यपृष्ठ',
    gu: 'હોમ',
    te: 'హోమ్',
    ta: 'முகப்பு'
  },
  'nav.services': {
    en: 'Services',
    hi: 'पूजा सेवाएं',
    sa: 'सेवाः',
    mr: 'सेवा',
    gu: 'સેવાઓ',
    te: 'సేవలు',
    ta: 'சேவைகள்'
  },
  'nav.about': {
    en: 'About Pandit Ji',
    hi: 'आचार्य परिचय',
    sa: 'आचार्य परिचयः',
    mr: 'आचार्य परिचय',
    gu: 'આચાર્ય પરિચય',
    te: 'ఆచార్య పరిచయం',
    ta: 'பற்றி'
  },
  'nav.book': {
    en: 'Book Now',
    hi: 'पूजा संकल्प',
    sa: 'पूजा सङ्कल्पः',
    mr: 'पूजा संकल्प',
    gu: 'પૂજા સંકલ્પ',
    te: 'బుకింగ్',
    ta: 'இப்போதே பதிவு செய்'
  },
  'nav.admin': {
    en: 'Admin Dashboard',
    hi: 'प्रबंधक पटल',
    sa: 'प्रबन्धक फलकम्',
    mr: 'प्रबंधक पटल',
    gu: 'પ્રબંધક પટલ',
    te: 'అడ్మిన్ డ్యాష్‌బోర్డ్',
    ta: 'அட்மின்'
  },
  'nav.gallery': {
    en: 'Gallery',
    hi: 'गैलरी',
    sa: 'चित्रशाला',
    mr: 'गॅलरी',
    gu: 'ગેલેરી',
    te: 'గ్యాలరీ',
    ta: 'புகைப்படங்கள் & வீடியோக்கள்'
  },
  'gallery.title': {
    en: 'Sacred Gallery',
    hi: 'पावन गैलरी',
    sa: 'पवित्रचित्रदीर्घा',
    mr: 'पावन गॅलरी',
    gu: 'પાવન ગેલેરી',
    te: 'పవిత్ర గ్యాలరీ',
    ta: 'கோவில் கேலரி'
  },
  'gallery.subtitle': {
    en: 'Glimpses of sacred rituals, daily Havans, and divine celebrations',
    hi: 'दिव्य अनुष्ठानों, दैनिक यज्ञों और पावन उत्सवों की झलकियां',
    sa: 'दिव्ययज्ञानां पूजनोत्सवानां च दर्शनम्',
    mr: 'दिव्य अनुष्ठान, दैनिक यज्ञ आणि पावन उत्सवांची क्षणचित्रे',
    gu: 'દિવ્ય અનુષ્ઠાન, દૈનિક યજ્ઞ અને પાવન ઉત્સવની ઝાંખી',
    te: 'వైదిక పూజలు మరియు ఉత్సవాల గ్యాలరీ',
    ta: 'வேத வழிபாடுகள் மற்றும் விழாக்கள்'
  },
  'gallery.photos': {
    en: 'Photos',
    hi: 'चित्र',
    sa: 'चित्राणि',
    mr: 'चित्रे',
    gu: 'ચિત્રો',
    te: 'ఫోటోలు',
    ta: 'புகைப்படங்கள்'
  },
  'gallery.videos': {
    en: 'Videos',
    hi: 'वीडियो',
    sa: 'चलचित्राणि',
    mr: 'व्हिडिओ',
    gu: 'વિડિઓઝ',
    te: 'వీడియోలు',
    ta: 'வீடியோக்கள்'
  },
  
  // Hero Section
  'hero.tagline': {
    en: '★ Trusted Vedic Rituals ★',
    hi: '★ प्रामाणिक वैदिक अनुष्ठान ★',
    sa: '★ प्रामाणिक वैदिक विधीः ★',
    mr: '★ प्रामाणिक वैदिक विधी ★',
    gu: '★ પ્રમાણિક વૈદિક વિધિઓ ★',
    te: '★ ప్రామాణిక వైదిక పూజా విధానాలు ★',
    ta: '★ வேத பாரம்பரியத்தின் பாதுகாவலர் ★'
  },
  'hero.title.1': {
    en: 'Experience the ',
    hi: 'प्रामाणिक पूजाओं से ',
    sa: 'अनुभवन्तु ',
    mr: 'प्रामाणिक पूजांमधून ',
    gu: 'પ્રમાણિક પૂજાઓથી ',
    te: 'అనుభవించండి ',
    ta: 'தெய்வீக'
  },
  'hero.title.italic': {
    en: 'Divine Grace',
    hi: 'दिव्य कृपा',
    sa: 'वैदिकपूजाभिः',
    mr: 'दिव्य कृपा',
    gu: 'દિવ્ય કૃપા',
    te: 'Divine Grace',
    ta: 'Divine Grace'
  },
  'hero.title.2': {
    en: ' of Authentic Pujas',
    hi: ' का अनुभव करें',
    sa: ' दिव्यकृपां च',
    mr: ' मिळवा',
    gu: ' નો અનુભવ કરો',
    te: 'దైవ అనుగ్రహం',
    ta: 'அருளை'
  },
  'hero.subtitle': {
    en: 'Book certified, experienced Pandits for every occasion. From Vedic ceremonies to personalized astrology consultations, we bring sacred traditions directly to your home.',
    hi: 'हर अवसर के लिए प्रमाणित और अनुभवी पंडित बुक करें। वैदिक अनुष्ठानों से लेकर व्यक्तिगत ज्योतिष परामर्श तक, हम पवित्र परंपराओं को सीधे आपके घर लाते हैं।',
    sa: 'अस्माकं निष्णाताः पण्डिताः शास्त्रोक्त विधिना मन्त्राणां शुद्धोच्चारणेन च भवतः गृहे कार्यालये वा पूजां कारयिष्यन्ति।',
    mr: 'प्रत्येक प्रसंगासाठी प्रमाणित आणि अनुभवी पंडित बुक करा. वैदिक विधींपासून ते वैयक्तिक ज्योतिष सल्लामसलत पर्यंत, आम्ही पवित्र परंपरा थेट तुमच्या घरी आणतो.',
    gu: 'દરેક પ્રસંગ માટે પ્રમાણિત અને અનુભવી પંડિત બુક કરો. વૈદિક ધાર્મિક વિધિઓથી લઈને વ્યક્તિગત જ્યોતિષ પરામર્શ સુધી, અમે પવિત્ર પરંપરાઓ સીધા તમારા ઘર સુધી પહોંચાડીએ છીએ.',
    te: 'శాస్త్రోక్తంగా మరియు సాంప్రదాయబద్ధంగా అనుభవజ్ఞులైన ఆచార్యులచే పూజలు మరియు వ్రతాలు జరిపించుకోండి.',
    ta: 'வேத முறைப்படி மற்றும் பாரம்பரியமான முறையில் அனுபவம் வாய்ந்த ஆச்சார்யர்களால் பூஜைகள் செய்து கொள்ளுங்கள்.'
  },
  'hero.book_btn': {
    en: 'Book Puja Now',
    hi: 'पूजा अभी बुक करें',
    sa: 'पूजां सङ्कल्पयतु',
    mr: 'पूजा आता बुक करा',
    gu: 'પૂજા અત્યારે બુક કરો',
    te: 'Book Puja Now',
    ta: 'Book Puja Now'
  },
  'hero.call_btn': {
    en: 'Call Expert',
    hi: 'पंडित जी से बात करें',
    sa: 'पण्डितेन सह भाषतु',
    mr: 'पंडितजींशी बोला',
    gu: 'પંડિતજી સાથે વાત કરો',
    te: 'Call Expert',
    ta: 'Call Expert'
  },

  // Stats Section
  'stats.pujas': {
    en: 'Successful Pujas',
    hi: 'सफल पूजा अनुष्ठान',
    sa: 'सफलाः पूजाः',
    mr: 'यशस्वी पूजा',
    gu: 'સફળ પૂજા અનુષ્ઠાન',
    te: 'Successful Pujas',
    ta: 'Successful Pujas'
  },
  'stats.cities': {
    en: 'Cities Covered',
    hi: 'कवर किए गए शहर',
    sa: 'व्याप्तानि नगराणि',
    mr: 'व्यापलेली शहरे',
    gu: 'આવરી લેવાયેલા શહેરો',
    te: 'Cities Covered',
    ta: 'Cities Covered'
  },
  'stats.rating': {
    en: 'Customer Rating',
    hi: 'ग्राहक रेटिंग',
    sa: 'उत्कृष्ट मूल्याङ्कनम्',
    mr: 'ग्राहक रेटिंग',
    gu: 'ગ્રાહક રેટિંગ',
    te: 'Customer Rating',
    ta: 'Customer Rating'
  },

  // Bento Grid on Home Page
  'bento.tagline': {
    en: 'Divine Offerings',
    hi: 'दिव्य प्रसाद एवं सेवाएं',
    sa: 'दिव्यप्रसादाः',
    mr: 'दिव्य सेवा',
    gu: 'દિવ્ય પ્રસાદ અને સેવાઓ',
    te: 'Divine Offerings',
    ta: 'Divine Offerings'
  },
  'bento.title': {
    en: 'Sacred Services for Every Life Milestone',
    hi: 'जीवन के हर महत्वपूर्ण पड़ाव के लिए पवित्र सेवाएं',
    sa: 'प्रत्येकस्मिन् शुभमुहूर्त्ते पूजाः',
    mr: 'आयुष्यातील प्रत्येक महत्वाच्या टप्प्यासाठी पवित्र विधी',
    gu: 'જીવનના દરેક મહત્વપૂર્ણ તબક્કા માટે પવિત્ર સેવાઓ',
    te: 'Sacred Services for Every Life Milestone',
    ta: 'Sacred Services for Every Life Milestone'
  },
  'bento.satyanarayan.title': {
    en: 'Satyanarayan Katha',
    hi: 'सत्यनारायण कथा',
    sa: 'सत्यनारायण कथा',
    mr: 'सत्यनारायण कथा',
    gu: 'સત્યનારાયણ કથા',
    te: 'Satyanarayan Katha',
    ta: 'Satyanarayan Katha'
  },
  'bento.satyanarayan.desc': {
    en: 'Seek the divine blessings of Lord Vishnu for family prosperity, happiness, and peace.',
    hi: 'पारिवारिक समृद्धि, सुख और शांति के लिए भगवान विष्णु का दिव्य आशीर्वाद प्राप्त करें।',
    sa: 'गृहकल्याणार्थं सत्यनारायणभगवतः कथामृतपानं पूजनं च।',
    mr: 'कौटुंबिक समृद्धी, आनंद आणि शांततेसाठी भगवान विष्णूंचे आशीर्वाद मिळवा.',
    gu: 'કૌટુંબિક સમૃદ્ધિ, સુખ અને શાંતિ માટે ભગવાન વિષ્ણુના દિવ્ય આશીર્વાદ મેળવો.',
    te: 'Seek the divine blessings of Lord Vishnu for family prosperity, happiness, and peace.',
    ta: 'Seek the divine blessings of Lord Vishnu for family prosperity, happiness, and peace.'
  },
  'bento.rudrabhishek.title': {
    en: 'Maha Rudrabhishek',
    hi: 'महा रुद्राभिषेक',
    sa: 'महा रुद्राभिषेकः',
    mr: 'महा रुद्राभिषेक',
    gu: 'મહા રુદ્રાભિષેક',
    te: 'Maha Rudrabhishek',
    ta: 'Maha Rudrabhishek'
  },
  'bento.rudrabhishek.desc': {
    en: 'Perform holy water and milk abhishek with Vedic chants to remove cosmic hurdles and invoke Shiva.',
    hi: 'शिव कृपा प्राप्त करने और विघ्नों को दूर करने के लिए वैदिक मंत्रोच्चार के साथ जलाभिषेक और दुग्धाभिषेक करें।',
    sa: 'शिवसान्निध्याय विघ्ननाशाय च महामन्त्रैः अभिषेकविधीः।',
    mr: 'शिवकृपा मिळवण्यासाठी आणि विघ्न दूर करण्यासाठी वैदिक मंत्रोच्चारांसह जलाभिषेक व दुग्धाभिषेक करा.',
    gu: 'શિવ કૃપા મેળવવા અને વિઘ્નો દૂર કરવા વૈદિક મંત્રોચ્ચાર સાથે જલાભિષેક અને દૂધ અભિષેક કરો.',
    te: 'Perform holy water and milk abhishek with Vedic chants to remove cosmic hurdles and invoke Shiva.',
    ta: 'Perform holy water and milk abhishek with Vedic chants to remove cosmic hurdles and invoke Shiva.'
  },
  'bento.griha.title': {
    en: 'Griha Pravesh',
    hi: 'गृह प्रवेश',
    sa: 'गृहप्रवेशः',
    mr: 'गृह प्रवेश',
    gu: 'ગૃહ પ્રવેશ',
    te: 'Griha Pravesh',
    ta: 'Griha Pravesh'
  },
  'bento.griha.desc': {
    en: 'Blessed beginning for your new sanctuary with meticulous Vastu purification.',
    hi: 'गहन वास्तु शुद्धि के साथ अपने नए घर में सकारात्मक ऊर्जा का संचार और गृहप्रवेश।',
    sa: 'नूतनगृहे सुखशान्तिसमृद्धीनां स्थापनार्थं वास्तुशान्तिः यज्ञश्च।',
    mr: 'वास्तू शुद्धीकरणासह तुमच्या नवीन घरात सकारात्मक ऊर्जा आणणारा गृहप्रवेश.',
    gu: 'વાસ્તુ શુદ્ધિ સાથે તમારા નવા ઘરમાં સકારાત્મક ઉર્જાનો સંચાર અને ગૃહ પ્રવેશ.',
    te: 'Blessed beginning for your new sanctuary with meticulous Vastu purification.',
    ta: 'Blessed beginning for your new sanctuary with meticulous Vastu purification.'
  },
  'bento.wedding.title': {
    en: 'Vivah Sanskar',
    hi: 'विवाह संस्कार',
    sa: 'विवाहसंस्कारः',
    mr: 'विवाह संस्कार',
    gu: 'લગ્ન સંસ્કાર',
    te: 'Vivah Sanskar',
    ta: 'Vivah Sanskar'
  },
  'bento.wedding.desc': {
    en: 'Sacred wedding ceremonies performed with divine traditional Vedic rites.',
    hi: 'वैदिक रीति-रिवाजों और पवित्र मंत्रोच्चार के साथ संपन्न होने वाला वैवाहिक गठबंधन।',
    sa: 'सप्तपदी-मङ्गलफेरा इति वैदिकपरम्परानुसारेण दाम्पत्यसूत्रबन्धनम्।',
    mr: 'वैदिक पद्धतीनुसार आणि पवित्र मंत्रोच्चारांसह संपन्न होणारा विवाह विधी.',
    gu: 'વૈદિક રીત-રિવાજો અને પવિત્ર મંત્રોચ્ચાર સાથે સંપન્ન થતો લગ્ન સંસ્કાર.',
    te: 'Sacred wedding ceremonies performed with divine traditional Vedic rites.',
    ta: 'Sacred wedding ceremonies performed with divine traditional Vedic rites.'
  },
  'bento.astrology.title': {
    en: 'Astrology',
    hi: 'ज्योतिष परामर्श',
    sa: 'फलित ज्योतिषम्',
    mr: 'ज्योतिष सल्ला',
    gu: 'જ્યોતિષ પરામર્શ',
    te: 'Astrology',
    ta: 'Astrology'
  },
  'bento.astrology.desc': {
    en: 'Deep cosmic insights into your future through professional Kundali reading.',
    hi: 'जन्मकुंडली और ग्रहों की चाल के गहन विश्लेषण से अपने भविष्य के मार्ग को जानें।',
    sa: 'जन्मकुण्डलीविश्लेषणं, नवग्रहदशाविचारः, भाग्यफलप्रदर्शनं च।',
    mr: 'कुंडली आणि ग्रहांच्या गतीचे सखोल विश्लेषण करून भविष्य जाणून घ्या.',
    gu: 'જન્મકુંડળી અને ગ્રહોની ચાલના ગહન વિશ્લેષણથી તમારા ભવિષ્યનો માર્ગ જાણો.',
    te: 'Deep cosmic insights into your future through professional Kundali reading.',
    ta: 'Deep cosmic insights into your future through professional Kundali reading.'
  },

  // Upcoming Festivals Calendar
  'calendar.tagline': {
    en: 'Sacred Calendar',
    hi: 'पवित्र तिथियां एवं उत्सव',
    sa: 'अथ आगामी उत्सवाः',
    mr: 'पवित्र दिनदर्शिका',
    gu: 'પવિત્ર તિથિઓ અને ઉત્સવો',
    te: 'Sacred Calendar',
    ta: 'Sacred Calendar'
  },
  'calendar.title': {
    en: 'Upcoming Sacred Festivals',
    hi: 'आगामी मुख्य पर्व एवं अनुष्ठान',
    sa: 'आगामी शुभपर्वाणि वैदिकयज्ञाश्च',
    mr: 'पुढील महत्त्वाचे सण आणि विधी',
    gu: 'આગામી મુખ્ય તહેવારો અને અનુષ્ઠાનો',
    te: 'Upcoming Sacred Festivals',
    ta: 'Upcoming Sacred Festivals'
  },
  'calendar.desc': {
    en: 'Prepare for the upcoming auspicious dates and book your personalized rituals in advance to ensure slot availability.',
    hi: 'आगामी शुभ मुहूर्त की तिथियों की जानकारी रखें और समय पर अपनी पूजा पहले से बुक करना सुनिश्चित करें।',
    sa: 'आगामिषु मुख्यतिथिषु स्वकल्याणाय इष्टसिद्ध्यै च पूर्वमेव पूजां सङ्कल्पयन्तु।',
    mr: 'येणाऱ्या शुभ मुहूर्तांची माहिती ठेवा आणि वेळेत तुमची पूजा पूर्व-आरक्षित करा.',
    gu: 'આગામી શુભ મુહૂર્તની તિથિઓ જાણીને સમયસર તમારી પૂજા અગાઉથી બુક કરવાનું સુનિશ્ચિત કરો.',
    te: 'Prepare for the upcoming auspicious dates and book your personalized rituals in advance to ensure slot availability.',
    ta: 'Prepare for the upcoming auspicious dates and book your personalized rituals in advance to ensure slot availability.'
  },
  'calendar.prebook': {
    en: 'Pre-book Ritual',
    hi: 'पूजा पूर्व-बुक करें',
    sa: 'पूर्व-सङ्कल्पः',
    mr: 'पूर्व-आरक्षित करा',
    gu: 'પૂજા અગાઉથી બુક કરો',
    te: 'Pre-book Ritual',
    ta: 'Pre-book Ritual'
  },

  // Festivals dynamic texts
  'fest.holi.title': {
    en: 'Holi - Purnima Puja',
    hi: 'होली - पूर्णिमा पूजा',
    sa: 'होलिकात्सवः - पूर्णिमा पूजा',
    mr: 'होळी - पौर्णिमा पूजा',
    gu: 'હોળી - પૂર્ણિમા પૂજા',
    te: 'Holi - Purnima Puja',
    ta: 'Holi - Purnima Puja'
  },
  'fest.holi.desc': {
    en: 'A ritual for protection and abundance. Celebrate the triumph of good over evil with special Vedic hymns.',
    hi: 'बुराई पर अच्छाई की जीत का उत्सव मनाएं। घर में समृद्धि और सुरक्षा के लिए विशेष पूर्णिमा हवन।',
    sa: 'अशुभविनाशाय समृद्धिप्राप्तये च विशेषवैदिकमन्त्रैः पूर्णिमाहवनम्।',
    mr: 'वायट शक्तींवर चांगल्याचा विजय साजरा करा. समृद्धी आणि संरक्षणासाठी पौर्णिमा हवन.',
    gu: 'બુરાઈ પર અચ્છાઈના વિજયનો ઉત્સવ ઉજવો. ઘરમાં સમૃદ્ધિ અને સુરક્ષા માટે વિશેષ પૂર્ણિમા હવન.',
    te: 'A ritual for protection and abundance. Celebrate the triumph of good over evil with special Vedic hymns.',
    ta: 'A ritual for protection and abundance. Celebrate the triumph of good over evil with special Vedic hymns.'
  },
  'fest.navratri.title': {
    en: 'Chaitra Navratri',
    hi: 'चैत्र नवरात्रि',
    sa: 'चैत्र नवरात्रिः',
    mr: 'चैत्र नवरात्र',
    gu: 'ચૈત્ર નવરાત્રી',
    te: 'Chaitra Navratri',
    ta: 'Chaitra Navratri'
  },
  'fest.navratri.desc': {
    en: '9 days of dedicated worship to Goddess Durga. Book Kalash Sthapana and Kanya Pujan early to secure timings.',
    hi: 'मां दुर्गा की 9 दिनों की साधना। शुभ मुहूर्त पर कलश स्थापना और कन्या पूजन के लिए स्लॉट पहले ही बुक करें।',
    sa: 'भगवत्याः दुर्गायाः नवदिनात्मिका साधना। कलशस्थापन-कन्यापूजनयोः पूर्वसङ्कल्पः।',
    mr: 'दुर्गा देवीची ९ दिवसांची आराधना. घटस्थापना आणि कन्यापूजनासाठी त्वरित स्लॉट बुक करा.',
    gu: 'મા દુર્ગાની ૯ દિવસની સાધના. શુભ મુહૂર્ત પર કળશ સ્થાપના અને કન્યા પૂજન માટે સ્લોટ અગાઉથી બુક કરો.',
    te: '9 days of dedicated worship to Goddess Durga. Book Kalash Sthapana and Kanya Pujan early to secure timings.',
    ta: '9 days of dedicated worship to Goddess Durga. Book Kalash Sthapana and Kanya Pujan early to secure timings.'
  },
  'fest.ramnavami.title': {
    en: 'Ram Navami',
    hi: 'राम नवमी',
    sa: 'श्रीरामनवमी',
    mr: 'राम नवमी',
    gu: 'રામ નવમી',
    te: 'Ram Navami',
    ta: 'Ram Navami'
  },
  'fest.ramnavami.desc': {
    en: 'Commemorate the birth of Lord Rama with Akhand Ramayan Path and specialized Havan rituals.',
    hi: 'मर्यादा पुरुषोत्तम भगवान श्री राम का जन्मोत्सव। अखंड रामायण पाठ और विशेष हवन अनुष्ठान बुक करें।',
    sa: 'मर्यादापुरुषोत्तमस्य रामचन्द्रस्य जन्मोत्सवः। अखण्डरामायणपाठः विशेषहवनं च।',
    mr: 'मर्यादा पुरुषोत्तम प्रभू श्री रामांचा जन्मोत्सव. अखंड रामायण पठण आणि विशेष हवन विधी.',
    gu: 'મર્યાદા પુરુષોત્તમ ભગવાન શ્રી રામનો જન્મોત્સવ. અખંડ રામાયણ પાઠ અને વિશેષ હવન અનુષ્ઠાન બુક કરો.',
    te: 'Commemorate the birth of Lord Rama with Akhand Ramayan Path and specialized Havan rituals.',
    ta: 'Commemorate the birth of Lord Rama with Akhand Ramayan Path and specialized Havan rituals.'
  },

  // Testimonials
  'testimonials.tagline': {
    en: 'Devotee Reviews',
    hi: 'श्रद्धालुओं के अनुभव',
    sa: 'श्रद्धालु मक्तानां अनुभवाः',
    mr: 'भक्तांचे अनुभव',
    gu: 'શ્રદ્ધાળુઓના અનુભવો',
    te: 'Devotee Reviews',
    ta: 'Devotee Reviews'
  },
  'testimonials.title': {
    en: 'Divine Experiences Shared',
    hi: 'भक्तों द्वारा साझा किए गए दिव्य अनुभव',
    sa: 'दिव्यानुभवाः',
    mr: 'भक्तांनी व्यक्त केलेले दिव्य अनुभव',
    gu: 'ભક્તો દ્વારા શેર કરાયેલા દિવ્ય અનુભવો',
    te: 'Divine Experiences Shared',
    ta: 'Divine Experiences Shared'
  },

  // FAQ
  'faq.tagline': {
    en: 'FAQ',
    hi: 'सामान्य प्रश्न',
    sa: 'जिज्ञासा समाधानम्',
    mr: 'वारंवार विचारले जाणारे प्रश्न',
    gu: 'સામાન્ય પ્રશ્નો',
    te: 'FAQ',
    ta: 'FAQ'
  },
  'faq.title': {
    en: 'Frequently Asked Questions',
    hi: 'अक्सर पूछे जाने वाले प्रश्न',
    sa: 'प्रायः पृच्छमान प्रश्नाः',
    mr: 'वारंवार विचारले जाणारे प्रश्न',
    gu: 'વારંવાર પૂછાતા પ્રશ્નો',
    te: 'Frequently Asked Questions',
    ta: 'Frequently Asked Questions'
  },
  'faq.desc': {
    en: 'Find answers to common questions about our Vedic services and booking process.',
    hi: 'हमारी वैदिक सेवाओं, पूजन सामग्री और बुकिंग प्रक्रिया के बारे में सामान्य प्रश्नों के उत्तर पाएं।',
    sa: 'अस्माकं पूजापद्धति, पूजनसामग्री, सङ्कल्पप्रक्रिया च विषये प्रश्नानां उत्तराणि।',
    mr: 'आमच्या वैदिक सेवा, पूजा साहित्य आणि बुकिंग प्रक्रियेबद्दलच्या प्रश्नांची उत्तरे मिळवा.',
    gu: 'અમારી વૈદિક સેવાઓ, પૂજા સામગ્રી અને બુકિંગ પ્રક્રિયા વિશે સામાન્ય પ્રશ્નોના જવાબો મેળવો.',
    te: 'Find answers to common questions about our Vedic services and booking process.',
    ta: 'Find answers to common questions about our Vedic services and booking process.'
  },

  // Footer
  'footer.desc': {
    en: 'Connecting you with certified Vedic Pandits for all your spiritual ceremonies and rituals. Precision-engineered spiritual services for the modern world.',
    hi: 'आपके सभी आध्यात्मिक समारोहों और अनुष्ठानों के लिए आपको प्रमाणित वैदिक पंडितों से जोड़ना। आधुनिक विश्व के लिए प्रामाणिक आध्यात्मिक सेवाएं।',
    sa: 'ऋग-यजुः-सामाथर्वाणां मन्त्राणां पावनध्वनिभिः गृहसंस्कारं वैदिकीं च परम्परां प्रापयति।',
    mr: 'तुमच्या सर्व आध्यात्मिक समारंभांसाठी आणि विधींसाठी तुम्हाला प्रमाणित वैदिक पंडितांशी जोडणे. आधुनिक जगासाठी प्रामाणिक आध्यात्मिक सेवा.',
    gu: 'તમારા તમામ આધ્યાત્મિક સમારોહ અને અનુષ્ઠાનો માટે તમને પ્રમાણિત વૈદિક પંડિતો સાથે જોડવા. આધુનિક વિશ્વ માટે પ્રમાણિક આધ્યાત્મિક સેવાઓ.',
    te: 'Connecting you with certified Vedic Pandits for all your spiritual ceremonies and rituals. Precision-engineered spiritual services for the modern world.',
    ta: 'Connecting you with certified Vedic Pandits for all your spiritual ceremonies and rituals. Precision-engineered spiritual services for the modern world.'
  },
  'footer.rights': {
    en: 'Pooja Pandit. All rights reserved.',
    hi: 'पूजा पंडित। सर्वाधिकार सुरक्षित।',
    sa: 'पूजा पण्डित सर्वाधिकारः सुरक्षिताः',
    mr: 'पूजा पंडित. सर्व हक्क राखीव.',
    gu: 'પૂજા પંડિત. સર્વાધિકાર સુરક્ષિત.',
    te: 'Pooja Pandit. All rights reserved.',
    ta: 'Pooja Pandit. All rights reserved.'
  },
  'footer.quick_links': {
    en: 'Quick Links',
    hi: 'त्वरित संपर्क',
    sa: 'शीघ्र सम्पर्कः',
    mr: 'महत्वाच्या लिंक्स',
    gu: 'ઝડપી લિંક્સ',
    te: 'Quick Links',
    ta: 'Quick Links'
  },
  'footer.link.services': {
    en: 'Spiritual Services',
    hi: 'यज्ञ-पूजा सेवाएं',
    sa: 'यज्ञ-पूजा सेवाः',
    mr: 'आध्यात्मिक सेवा',
    gu: 'યજ્ઞ-પૂજા સેવાઓ',
    te: 'Spiritual Services',
    ta: 'Spiritual Services'
  },
  'footer.link.about': {
    en: 'About Pandit Ji',
    hi: 'आचार्य परिचय',
    sa: 'आचार्य परिचयः',
    mr: 'आचार्य परिचय',
    gu: 'આચાર્ય પરિચય',
    te: 'About Pandit Ji',
    ta: 'About Pandit Ji'
  },
  'footer.link.book': {
    en: 'Book Pooja',
    hi: 'पूजा संकल्प करें',
    sa: 'पूजा सङ्कल्पः',
    mr: 'पूजा संकल्प करा',
    gu: 'પૂજા સંકલ્પ કરો',
    te: 'Book Pooja',
    ta: 'Book Pooja'
  },
  'footer.link.register': {
    en: 'Pandit Registration',
    hi: 'पंडित पंजीकरण',
    sa: 'पण्डित पञ्जीकरणम्',
    mr: 'पंडित नोंदणी',
    gu: 'પંડિત રજીસ્ટ્રેશન',
    te: 'Pandit Registration',
    ta: 'Pandit Registration'
  },
  'footer.legal': {
    en: 'Legal & Trust',
    hi: 'नियम व सुरक्षा',
    sa: 'नियम व सुरक्षा',
    mr: 'नियम आणि सुरक्षा',
    gu: 'નિયમો અને સુરક્ષા',
    te: 'Legal & Trust',
    ta: 'Legal & Trust'
  },
  'footer.link.privacy': {
    en: 'Privacy Policy',
    hi: 'गोपनीयता नीति',
    sa: 'गोपनीयता नीतिः',
    mr: 'गोपनीयता धोरण',
    gu: 'ગોપનીયતા નીતિ',
    te: 'Privacy Policy',
    ta: 'Privacy Policy'
  },
  'footer.link.terms': {
    en: 'Terms of Service',
    hi: 'सेवा की शर्तें',
    sa: 'सेवा शर्त्ताः',
    mr: 'सेवा अटी',
    gu: 'સેવાની શરતો',
    te: 'Terms of Service',
    ta: 'Terms of Service'
  },
  'footer.link.refund': {
    en: 'Refund Policy',
    hi: 'धनवापसी नीति',
    sa: 'प्रतिदान नीतिः',
    mr: 'परतावा धोरण',
    gu: 'રીફંડ નીતિ',
    te: 'Refund Policy',
    ta: 'Refund Policy'
  },
  'footer.newsletter': {
    en: 'Newsletter',
    hi: 'पत्रिका समाचार',
    sa: 'पत्रिका समाचार्',
    mr: 'माहितीपत्रक',
    gu: 'સમાચાર પત્રિકા',
    te: 'Newsletter',
    ta: 'Newsletter'
  },
  'footer.newsletter.desc': {
    en: 'Stay updated on upcoming auspicious dates, astrological advice, and major festivals.',
    hi: 'आगामी शुभ मुहूर्त की तिथियों, ज्योतिषीय सलाह और प्रमुख त्योहारों की जानकारी प्राप्त करें।',
    sa: 'आगामी शुभमुहूर्त्तानां पर्वाणां च विवरणं ग्रहीतुं पञ्जीकरणं कुर्वन्तु।',
    mr: 'येणारे शुभ मुहूर्त, ज्योतिषीय सल्ला आणि सणांची माहिती मिळवण्यासाठी नोंदणी करा.',
    gu: 'આગામી શુભ મુહૂર્તની તિથિઓ, જ્યોતિષીય સલાહ અને મુખ્ય તહેવારોની માહિતી મેળવો.',
    te: 'Stay updated on upcoming auspicious dates, astrological advice, and major festivals.',
    ta: 'Stay updated on upcoming auspicious dates, astrological advice, and major festivals.'
  },
  'footer.placeholder.email': {
    en: 'Email Address',
    hi: 'ईमेल पता',
    sa: 'ईमेल पता',
    mr: 'ईमेल पत्ता',
    gu: 'ઇમેઇલ સરનામું',
    te: 'Email Address',
    ta: 'Email Address'
  },
  'footer.subscribed': {
    en: 'Successfully subscribed!',
    hi: 'सफलतापूर्वक सब्सक्राइब किया गया!',
    sa: 'सफलतापूर्वकं सदस्यीभूतः!',
    mr: 'यशस्वीरित्या सदस्य नोंदणी झाली!',
    gu: 'સફળતાપૂર્વક સબ્સ્ક્રાઇબ કર્યું!',
    te: 'Successfully subscribed!',
    ta: 'Successfully subscribed!'
  },
  'footer.admin_login': {
    en: 'Acharya Login',
    hi: 'प्रबंधक प्रवेश',
    sa: 'प्रबन्धक प्रवेशः',
    mr: 'आचार्य लॉगिन',
    gu: 'પ્રબંધક પ્રવેશ',
    te: 'Acharya Login',
    ta: 'Acharya Login'
  },

  // Services Page
  'services.placeholder.search': {
    en: 'Search for specific ritual...',
    hi: 'विशिष्ट अनुष्ठान खोजें...',
    sa: 'विशिष्टपूजा अन्वेषणम्...',
    mr: 'विशिष्ट विधी शोधा...',
    gu: 'વિશિષ્ટ અનુષ્ઠાન શોધો...',
    te: 'Search for specific ritual...',
    ta: 'Search for specific ritual...'
  },
  'services.filter.all': {
    en: 'All Pujas',
    hi: 'सभी पूजाएं',
    sa: 'सर्वाः पूजा सेवाः',
    mr: 'सर्व पूजा',
    gu: 'બધી પૂજાઓ',
    te: 'All Pujas',
    ta: 'All Pujas'
  },
  'services.filter.ceremony': {
    en: 'Ceremonies',
    hi: 'संस्कार एवं उत्सव',
    sa: 'शुभसंस्काराः',
    mr: 'धार्मिक विधी',
    gu: 'સંસ્કાર અને ઉત્સવો',
    te: 'Ceremonies',
    ta: 'Ceremonies'
  },
  'services.filter.havan': {
    en: 'Havans',
    hi: 'हवन / यज्ञ',
    sa: 'वैदिकयज्ञाः',
    mr: 'हवन / यज्ञ',
    gu: 'હવન / યજ્ઞ',
    te: 'Havans',
    ta: 'Havans'
  },
  'services.filter.online': {
    en: 'Online Puja',
    hi: 'डिजिटल पूजा',
    sa: 'यन्त्रसंकेतपूजा',
    mr: 'ऑनलाइन पूजा',
    gu: 'ઓનલાઇન પૂજા',
    te: 'Online Puja',
    ta: 'Online Puja'
  },
  'services.filter.astrology': {
    en: 'Astrology',
    hi: 'ज्योतिष',
    sa: 'ज्योतिषशास्त्रम्',
    mr: 'ज्योतिष',
    gu: 'જ્યોતિષ',
    te: 'Astrology',
    ta: 'Astrology'
  },
  'services.card.duration': {
    en: 'Duration',
    hi: 'अवधि',
    sa: 'समयः',
    mr: 'कालावधी',
    gu: 'સમયગાળો',
    te: 'Duration',
    ta: 'Duration'
  },
  'services.card.pandits': {
    en: 'Pandits',
    hi: 'पंडित संख्या',
    sa: 'ब्राह्मणाः',
    mr: 'पंडित संख्या',
    gu: 'પંડિત સંખ્યા',
    te: 'Pandits',
    ta: 'Pandits'
  },
  'services.card.dakshina': {
    en: 'Dakshina',
    hi: 'दक्षिणा',
    sa: 'दक्षिणा',
    mr: 'दक्षिणा',
    gu: 'દક્ષિણા',
    te: 'Dakshina',
    ta: 'Dakshina'
  },
  'services.card.book': {
    en: 'Book Ritual',
    hi: 'अनुष्ठान बुक करें',
    sa: 'सङ्कल्पं कुरु',
    mr: 'पूजा बुक करा',
    gu: 'અનુષ્ઠાન બુક કરો',
    te: 'Book Ritual',
    ta: 'Book Ritual'
  },

  // About View
  'about.title': {
    en: 'Dheeraj Tripathi',
    hi: 'धीरज त्रिपाठी',
    sa: 'धीरज त्रिपाठी',
    mr: 'धीरज त्रिपाठी',
    gu: 'ધીરજ ત્રિપાઠી',
    te: 'ధీరజ్ త్రిపాఠి',
    ta: 'Dheeraj Tripathi'
  },
  'about.subtitle': {
    en: 'Vedic Scholar & Chief Priest',
    hi: 'वैदिक विद्वान एवं मुख्य पुरोहित',
    sa: 'ऋग्वेदाचार्यः एवं मुख्यपुरोहितः',
    mr: 'वैदिक विद्वान आणि मुख्य पुरोहित',
    gu: 'વૈદિક વિદ્વાન અને મુખ્ય પુરોહિત',
    te: 'Vedic Scholar & Chief Priest',
    ta: 'Vedic Scholar & Chief Priest'
  },
  'about.credentials': {
    en: 'Credentials & Lineage',
    hi: 'योग्यता और परंपरा',
    sa: 'योग्यता परम्परा च',
    mr: 'योग्यता आणि परंपरा',
    gu: 'લાયકાત અને પરંપરા',
    te: 'Credentials & Lineage',
    ta: 'Credentials & Lineage'
  },
  'about.academic': {
    en: 'Academic Profile',
    hi: 'शैक्षणिक योग्यता',
    sa: 'शैक्षणिकविवरणम्',
    mr: 'शैक्षणिक पात्रता',
    gu: 'શૈક્ષણિક લાયકાત',
    te: 'Academic Profile',
    ta: 'Academic Profile'
  },
  'about.achievements': {
    en: 'Achievements',
    hi: 'उपलब्धियां एवं सम्मान',
    sa: 'पुरस्काराः सम्मानाः च',
    mr: 'यश आणि पुरस्कार',
    gu: 'સિદ્ધિઓ અને સન્માન',
    te: 'Achievements',
    ta: 'Achievements'
  },
  'about.languages': {
    en: 'Language Proficiency',
    hi: 'भाषा ज्ञान',
    sa: 'भाषा वैदुष्यम्',
    mr: 'भाषा ज्ञान',
    gu: 'ભાષા જ્ઞાન',
    te: 'భాషలు',
    ta: 'மொழிகள்'
  },
  'about.timeline': {
    en: 'Vedic Journey Timeline',
    hi: 'वैदिक यात्रा का कालक्रम',
    sa: 'वैदिकयात्रा कालक्रमः',
    mr: 'वैदिक प्रवासाचा कालक्रम',
    gu: 'વૈદિક યાત્રાનો સમયરેખા',
    te: 'Vedic Journey Timeline',
    ta: 'Vedic Journey Timeline'
  },

  // Book Now View
  'book.title': {
    en: 'Sacred Puja Sankalpa',
    hi: 'पवित्र पूजा संकल्प अनुष्ठान',
    sa: 'वैदिक पूजा सङ्कल्पः',
    mr: 'पवित्र पूजा संकल्प विधी',
    gu: 'પવિત્ર પૂજા સંકલ્પ અનુષ્ઠાન',
    te: 'Sacred Puja Sankalpa',
    ta: 'Sacred Puja Sankalpa'
  },
  'book.subtitle': {
    en: 'Formally invoke the divine energies. Fill in details to schedule your authentic Vedic ritual.',
    hi: 'दिव्य ऊर्जाओं का आह्वान करें। अपने प्रामाणिक वैदिक अनुष्ठान को निर्धारित करने के लिए विवरण भरें।',
    sa: 'देवताकृपाप्राप्तये सङ्कल्पविधिः। शुभाशंसा प्राप्य पूजार्थं विवरणं लिखन्तु।',
    mr: 'दिव्य ऊर्जांचे आवाहन करा. तुमच्या प्रामाणिक वैदिक विधीसाठी खालील माहिती भरा.',
    gu: 'દિવ્ય ઉર્જાઓનું આહ્વાન કરો. તમારા પ્રમાણિક વૈદિક અનુષ્ઠાનને નિર્ધારિત કરવા માટે વિગતો ભરો.',
    te: 'Formally invoke the divine energies. Fill in details to schedule your authentic Vedic ritual.',
    ta: 'Formally invoke the divine energies. Fill in details to schedule your authentic Vedic ritual.'
  },
  'book.form.name': {
    en: 'Full Name',
    hi: 'पूरा नाम',
    sa: 'पूर्ण नाम',
    mr: 'पूर्ण नाव',
    gu: 'પૂરું નામ',
    te: 'Full Name',
    ta: 'Full Name'
  },
  'book.form.email': {
    en: 'Email Address',
    hi: 'ईमेल पता',
    sa: 'सम्पर्क ईमेल पता',
    mr: 'ईमेल पत्ता',
    gu: 'ઇમેઇલ સરનામું',
    te: 'Email Address',
    ta: 'Email Address'
  },
  'book.form.phone': {
    en: 'Phone Number',
    hi: 'मोबाइल नंबर',
    sa: 'दूरभाष सङ्ख्या',
    mr: 'मोबाईल नंबर',
    gu: 'મોબાઇલ નંબર',
    te: 'Phone Number',
    ta: 'Phone Number'
  },
  'book.form.ceremony': {
    en: 'Select Ceremony',
    hi: 'पूजा अनुष्ठान का चयन करें',
    sa: 'पूजा सेवा चयनम्',
    mr: 'पूजा विधी निवडा',
    gu: 'પૂજા અનુષ્ઠાન પસંદ કરો',
    te: 'Select Ceremony',
    ta: 'Select Ceremony'
  },
  'book.form.date': {
    en: 'Ritual Date',
    hi: 'अनुष्ठान की तिथि',
    sa: 'पूजा तिथिः',
    mr: 'विधीची तारीख',
    gu: 'અનુષ્ઠાનની તારીખ',
    te: 'Ritual Date',
    ta: 'Ritual Date'
  },
  'book.form.slot': {
    en: 'Preferred Time Slot',
    hi: 'समय का स्लॉट',
    sa: 'पूजा समय विभागः',
    mr: 'वेळेचा स्लॉट',
    gu: 'સમયનો સ્લોટ',
    te: 'Preferred Time Slot',
    ta: 'Preferred Time Slot'
  },
  'book.form.address': {
    en: 'Preferred Venue Address',
    hi: 'आयोजन स्थल का पता',
    sa: 'पूजा स्थल सङ्केतशब्दः',
    mr: 'विधीचे ठिकाण / पत्ता',
    gu: 'આયોજન સ્થળનું સરનામું',
    te: 'Preferred Venue Address',
    ta: 'Preferred Venue Address'
  },
  'book.form.city': {
    en: 'City',
    hi: 'शहर',
    sa: 'नगरम्',
    mr: 'शहर',
    gu: 'શહેર',
    te: 'City',
    ta: 'City'
  },
  'book.form.state': {
    en: 'State',
    hi: 'राज्य',
    sa: 'राज्यम्',
    mr: 'राज्य',
    gu: 'રાજ્ય',
    te: 'State',
    ta: 'State'
  },
  'book.form.zip': {
    en: 'Postal / ZIP Code',
    hi: 'पिन कोड',
    sa: 'पिन कोड',
    mr: 'पिन कोड',
    gu: 'પિન કોડ',
    te: 'Postal / ZIP Code',
    ta: 'Postal / ZIP Code'
  },
  'book.form.submit': {
    en: 'Confirm Sankalpa & Book',
    hi: 'संकल्प की पुष्टि करें और बुक करें',
    sa: 'सङ्कल्पं दृढीकुरुत',
    mr: 'संकल्प निश्चित करा आणि बुक करा',
    gu: 'સંકલ્પની પુષ્ટિ કરો અને બુક કરો',
    te: 'Confirm Sankalpa & Book',
    ta: 'Confirm Sankalpa & Book'
  },
  'book.success.title': {
    en: 'Booking Confirmed!',
    hi: 'बुकिंग सफलतापूर्वक संपन्न!',
    sa: 'सङ्कल्पः स्वीकृतः!',
    mr: 'बुकिंग यशस्वी झाले!',
    gu: 'બુકિંગ સફળતાપૂર્વક થઈ ગયું!',
    te: 'Booking Confirmed!',
    ta: 'Booking Confirmed!'
  },
  'book.success.subtitle': {
    en: 'May the blessings of the deities be with you. Your sacred ritual has been successfully scheduled.',
    hi: 'देवता का आशीर्वाद आपके साथ बना रहे। आपका पवित्र अनुष्ठान सफलतापूर्वक निर्धारित हो गया है।',
    sa: 'देवतानां शुभाशिषः भवतः सदा रक्षन्तु। भवतः यज्ञ संकल्पः पूर्ण जातः।',
    mr: 'देवतांचे आशीर्वाद तुमच्या पाठीशी राहोत. तुमची पूजा यशस्वीरित्या आरक्षित झाली आहे.',
    gu: 'દેવતાઓના આશીર્વાદ તમારી સાથે બનેલા રહે. તમારું પવિત્ર અનુષ્ઠાન સફળતાપૂર્વક નિર્ધારિત થઈ ગયું છે.',
    te: 'May the blessings of the deities be with you. Your sacred ritual has been successfully scheduled.',
    ta: 'May the blessings of the deities be with you. Your sacred ritual has been successfully scheduled.'
  },
  'book.success.view_btn': {
    en: 'View in Admin Panel',
    hi: 'प्रबंधक पटल में देखें',
    sa: 'प्रबन्धक फलके पश्यन्तु',
    mr: 'प्रशासक फलकात पहा',
    gu: 'પ્રબંધક પટલ પર જુઓ',
    te: 'View in Admin Panel',
    ta: 'View in Admin Panel'
  },

  // Admin Login View
  'login.back': {
    en: 'Home',
    hi: 'मुख्यपृष्ठ',
    sa: 'मुख्यपृष्ठम्',
    mr: 'मुख्यपृष्ठ',
    gu: 'હોમ',
    te: 'Home',
    ta: 'Home'
  },
  'login.title': {
    en: 'Acharya Login',
    hi: 'प्रबंधक प्रवेश',
    sa: 'प्रबन्धक प्रवेशः',
    mr: 'आचार्य लॉगिन',
    gu: 'પ્રબંધક પ્રવેશ',
    te: 'Acharya Login',
    ta: 'Acharya Login'
  },
  'login.subtitle': {
    en: 'Authorized access only. Enter your credentials to manage rituals.',
    hi: 'केवल अधिकृत प्रवेश। पूजा प्रबंधन के लिए अपने लॉगिन विवरण दर्ज करें।',
    sa: 'पूज्य आचार्य, प्रबन्धक नियन्त्रणाय कृपया लॉगिन कुर्वन्तु।',
    mr: 'फक्त अधिकृत प्रवेश. विधी व्यवस्थापनासाठी तुमचे लॉगिन तपशील प्रविष्ट करा.',
    gu: 'ફક્ત અધિકૃત પ્રવેશ. પૂજા વ્યવસ્થાપન માટે તમારી લૉગિન વિગતો દાખલ કરો.',
    te: 'Authorized access only. Enter your credentials to manage rituals.',
    ta: 'Authorized access only. Enter your credentials to manage rituals.'
  },
  'login.email': {
    en: 'Email Address',
    hi: 'ईमेल पता',
    sa: 'सम्पर्क ईमेल',
    mr: 'ईमेल पत्ता',
    gu: 'ઇમેઇલ સરનામું',
    te: 'Email Address',
    ta: 'Email Address'
  },
  'login.password': {
    en: 'Password',
    hi: 'सङ्केतशब्द (पासवर्ड)',
    sa: 'सङ्केतशब्दः',
    mr: 'पासवर्ड',
    gu: 'પાસવર્ડ',
    te: 'Password',
    ta: 'Password'
  },
  'login.submit': {
    en: 'Secure Login',
    hi: 'सुरक्षित प्रवेश',
    sa: 'प्रविशतु',
    mr: 'सुरक्षित लॉगिन',
    gu: 'સુરક્ષિત પ્રવેશ',
    te: 'Secure Login',
    ta: 'Secure Login'
  },
  'login.loading': {
    en: 'Signing In...',
    hi: 'प्रवेश हो रहा है...',
    sa: 'प्रविशति...',
    mr: 'लॉगिन होत आहे...',
    gu: 'પ્રવેશ થઈ રહ્યો છે...',
    te: 'Signing In...',
    ta: 'Signing In...'
  },
  'login.error': {
    en: 'Invalid email or password. Please try again.',
    hi: 'अमान्य ईमेल या पासवर्ड। कृपया पुनः प्रयास करें।',
    sa: 'अमान्यं ईमेल अथवा सङ्केतशब्दः। पुनः प्रयतस्व।',
    mr: 'अवैध ईमेल किंवा पासवर्ड. कृपया पुन्हा प्रयत्न करा.',
    gu: 'અમાન્ય ઇમેઇલ અથવા પાસવર્ડ. કૃપા કરીને ફરી પ્રયાસ કરો.',
    te: 'Invalid email or password. Please try again.',
    ta: 'Invalid email or password. Please try again.'
  },

  // Admin Dashboard
  'admin.title': {
    en: 'Admin Overview',
    hi: 'प्रबंधक अवलोकन',
    sa: 'आचार्य प्रबन्धक फलकम्',
    mr: 'प्रशासक आढावा',
    gu: 'પ્રબંધક અવલોકન',
    te: 'Admin Overview',
    ta: 'Admin Overview'
  },
  'admin.subtitle': {
    en: 'Secure, real-time control over ritual schedules, allocations, dakshina income, and visitor trends.',
    hi: 'पूजा कार्यक्रम, आवंटन, दक्षिणा आय और आगंतुकों के रुझानों पर सुरक्षित और वास्तविक समय नियंत्रण।',
    sa: 'पूजामानचित्राणां, शुल्कानां, भक्तानां च सुदृढ प्रबन्धनम्।',
    mr: 'पूजा वेळापत्रक, वाटप, दक्षिणा आणि भक्तांच्या आकडेवारीवर सुरक्षित नियंत्रण.',
    gu: 'પૂજા કાર્યક્રમ, ફાળવણી, દક્ષિણા આવક અને મુલાકાતીઓના પ્રવાહો પર સુરક્ષિત નિયંત્રણ.',
    te: 'Secure, real-time control over ritual schedules, allocations, dakshina income, and visitor trends.',
    ta: 'Secure, real-time control over ritual schedules, allocations, dakshina income, and visitor trends.'
  },
  'admin.logout': {
    en: 'Logout',
    hi: 'लॉगआउट',
    sa: 'प्रस्थानम्',
    mr: 'लॉगआउट',
    gu: 'લૉગઆઉટ',
    te: 'Logout',
    ta: 'Logout'
  },
  // FAQ & Testimonial lookups
  'Do you provide Puja Samagri (items)?': {
    en: 'Do you provide Puja Samagri (items)?',
    hi: 'क्या आप पूजा सामग्री प्रदान करते हैं?',
    sa: 'किं भवन्तः पूजासामग्रीं आनयन्ति?',
    mr: 'तुम्ही पूजा साहित्य पुरवता का?',
    gu: 'શું તમે પૂજા સામગ્રી પ્રદાન કરો છો?',
    te: 'Do you provide Puja Samagri (items)?',
    ta: 'Do you provide Puja Samagri (items)?'
  },
  'Yes, we offer an "All-Inclusive" package where the Pandit Ji brings all necessary sacred items and Samagri. You only need to provide fresh flowers and fruits.': {
    en: 'Yes, we offer an "All-Inclusive" package where the Pandit Ji brings all necessary sacred items and Samagri. You only need to provide fresh flowers and fruits.',
    hi: 'हाँ, हम "सर्व-समावेशी" पैकेज प्रदान करते हैं जहाँ पंडित जी सभी आवश्यक वस्तुएं और सामग्री लाते हैं। आपको केवल ताजे फूल और फल प्रदान करने होंगे।',
    sa: 'आम्, पण्डित जी आवश्यकपूजनसामग्रीं आनयिष्यन्ति। केवलं भवान् नूतनपुष्पाणि फलानि च सज्जीकरोतु।',
    mr: 'होय, आम्ही "सर्व-समावेशक" पॅकेज ऑफर करतो जिथे पंडितजी सर्व आवश्यक पवित्र वस्तू आणि साहित्य आणतात. तुम्हाला फक्त ताजी फुले आणि फळे द्यावी लागतील.',
    gu: 'હા, અમે "ઓલ-ઇનક્લુઝિવ" પેકેજ ઓફર કરીએ છીએ જ્યાં પંડિતજી તમામ જરૂરી પવિત્ર વસ્તુઓ અને સામગ્રી લાવે છે. તમારે માત્ર તાજા ફૂલો અને ફળો પ્રદાન કરવાના રહેશે.',
    te: 'Yes, we offer an "All-Inclusive" package where the Pandit Ji brings all necessary sacred items and Samagri. You only need to provide fresh flowers and fruits.',
    ta: 'Yes, we offer an "All-Inclusive" package where the Pandit Ji brings all necessary sacred items and Samagri. You only need to provide fresh flowers and fruits.'
  },
  'Conversational': {
    en: 'Conversational',
    hi: 'बोलचाल योग्य',
    sa: 'व्यवहारयोग्या',
    mr: 'संभाषणात्मक',
    gu: 'વાતચીત योग्य',
    te: 'Conversational',
    ta: 'Conversational'
  },

  // Hindu parvas (festivals) titles
  'fest.makarsankranti.title': {
    en: 'Makar Sankranti',
    hi: 'मकर संक्रांति',
    sa: 'मकरसंक्रान्तिः',
    mr: 'मकर संक्रांत',
    gu: 'મકરસંક્રાંતિ',
    te: 'మకర సంక్రాంతి',
    ta: 'மகர சங்கராந்தி'
  },
  'fest.vasantpanchami.title': {
    en: 'Vasant Panchami',
    hi: 'वसंत पंचमी',
    sa: 'वसन्तपञ्चमी',
    mr: 'वसंत पंचमी',
    gu: 'વસંત પંચમી',
    te: 'వసंत పంచమి',
    ta: 'வசந்த பஞ்சமி'
  },
  'fest.shivratri.title': {
    en: 'Maha Shivratri',
    hi: 'महाशिवरात्रि',
    sa: 'महाशिवरात्रिः',
    mr: 'महाशिवरात्री',
    gu: 'મહા શિવરાત્રી',
    te: 'మహాశివరాత్రి',
    ta: 'மகா சிவராத்திரி'
  },
  'fest.hanumanjayanti.title': {
    en: 'Hanuman Jayanti',
    hi: 'हनुमान जन्मोत्सव',
    sa: 'हनुमज्जयन्ती',
    mr: 'हनुमान जयंती',
    gu: 'હનુમાન જયંતિ',
    te: 'హనుమాన్ జయంతి',
    ta: 'ஹனுமான் ஜெயந்தி'
  },
  'fest.akshayatritiya.title': {
    en: 'Akshaya Tritiya',
    hi: 'अक्षय तृतीया',
    sa: 'अक्षयतृतीया',
    mr: 'अक्षय तृतीया',
    gu: 'અક્ષય તૃતીયા',
    te: 'అక్షయ తృతీయ',
    ta: 'அக்ஷய திருதியை'
  },
  'fest.buddhapurnima.title': {
    en: 'Buddha Purnima',
    hi: 'बुद्ध पूर्णिमा',
    sa: 'बुद्धपूर्णिमा',
    mr: 'बुद्ध पौर्णिमा',
    gu: 'બુદ્ધ પૂર્ણિમા',
    te: 'బుద్ధ పూర్ణిమ',
    ta: 'புத்த பூர்ணிமா'
  },
  'fest.gurupurnima.title': {
    en: 'Guru Purnima',
    hi: 'गुरु पूर्णिमा',
    sa: 'गुरुपूर्णिमा',
    mr: 'गुरु पौर्णिमा',
    gu: 'ગુરૂ પૂર્ણિમા',
    te: 'గురు పూర్ణిమ',
    ta: 'குரு பூர்ணிமா'
  },
  'fest.rakshabandhan.title': {
    en: 'Raksha Bandhan',
    hi: 'रक्षाबंधन',
    sa: 'रक्षाबन्धनम्',
    mr: 'रक्षाबंधन',
    gu: 'રક્ષાબંધન',
    te: 'రక్షాబంధన్',
    ta: 'ரக்ஷா பந்தன்'
  },
  'fest.janmashtami.title': {
    en: 'Krishna Janmashtami',
    hi: 'कृष्ण जन्माष्टमी',
    sa: 'श्रीकृष्णजन्माष्टमी',
    mr: 'कृष्ण जन्माष्टमी',
    gu: 'કૃષ્ણ જન્માષ્ટમી',
    te: 'కృష్ణ జన్మాష్టమి',
    ta: 'கிருஷ்ண ஜெயந்தி'
  },
  'fest.ganeshchaturthi.title': {
    en: 'Ganesh Chaturthi',
    hi: 'गणेश चतुर्थी',
    sa: 'गणेशचतुर्थी',
    mr: 'गणेश चतुर्थी',
    gu: 'ગણેશ ચતુર્થી',
    te: 'వినాయక చవితి',
    ta: 'விநாயகர் சதுர்த்தி'
  },
  'fest.shardiyanavratri.title': {
    en: 'Shardiya Navratri',
    hi: 'शारदीय नवरात्रि',
    sa: 'शारदीय नवरात्रम्',
    mr: 'शारदीय नवरात्री',
    gu: 'શારદીય નવરાત્રી',
    te: 'శరన్నవరాత్రులు',
    ta: 'சாரதா நவராத்திரி'
  },
  'fest.dussehra.title': {
    en: 'Dussehra / Vijayadashami',
    hi: 'दशहरा / विजयादशमी',
    sa: 'विजयादशमी',
    mr: 'दसरे',
    gu: 'દશેરા',
    te: 'దసరా',
    ta: 'விஜயதசமி'
  },
  'fest.karwachauth.title': {
    en: 'Karwa Chauth',
    hi: 'करवा चौथ',
    sa: 'करकचतुर्थी',
    mr: 'करवा चौथ',
    gu: 'કરવા ચોથ',
    te: 'కర్వా చౌత్',
    ta: 'கர்வா சௌத்'
  },
  'fest.dhanteras.title': {
    en: 'Dhanteras',
    hi: 'धनतेरस',
    sa: 'धनत्रयोदशी',
    mr: 'धनत्रयोदशी',
    gu: 'ધનતેરસ',
    te: 'ధన త్రయోదశి',
    ta: 'தன்தேராஸ்'
  },
  'fest.diwali.title': {
    en: 'Diwali / Lakshmi Puja',
    hi: 'दीपावली / लक्ष्मी पूजा',
    sa: 'दीपावली',
    mr: 'दिवाळी / लक्ष्मी पूजन',
    gu: 'દિવાળી / લક્ષ્મી પૂજા',
    te: 'దీపావళి',
    ta: 'தீபஒளி'
  },
  'fest.bhaidooj.title': {
    en: 'Bhai Dooj',
    hi: 'भाई दूज',
    sa: 'यमद्वितीया',
    mr: 'भाऊबीज',
    gu: 'ભાઈ બીજ',
    te: 'భగినీ హస్త భోజనం',
    ta: 'பாய் தூஜ்'
  },
  'fest.chhathpuja.title': {
    en: 'Chhath Puja',
    hi: 'छठ पूजा',
    sa: 'छठपूजा',
    mr: 'छठ पूजा',
    gu: 'છઠ પૂજા',
    te: 'ఛత్ పూజ',
    ta: 'சாத் பூஜை'
  },
  'fest.kartikpurnima.title': {
    en: 'Kartik Purnima',
    hi: 'कार्तिक पूर्णिमा',
    sa: 'कार्तिकपूर्णिमा',
    mr: 'कार्तिकी पौर्णिमा',
    gu: 'કાર્તિક પૂર્ણિમા',
    te: 'కార్తీక పౌర్ణమి',
    ta: 'கார்த்திகை பௌர்ணமி'
  },

  // --- Service Names ---
  'Satyanarayan Katha': {
    en: 'Satyanarayan Katha',
    hi: 'सत्यनारायण कथा',
    sa: 'सत्यनारायण कथा',
    mr: 'सत्यनारायण कथा',
    gu: 'સત્યનારાયણ કથા',
    te: 'సత్యనారాయణ వ్రతం',
    ta: 'சத்தியநாராயண பூஜை'
  },
  'Rudrabhishek': {
    en: 'Maha Rudrabhishek',
    hi: 'महा रुद्राभिषेक',
    sa: 'महारुद्राभिषेकः',
    mr: 'महा रुद्राभिषेक',
    gu: 'મહા રુદ્રાભિષેક',
    te: 'మహా రుద్రాభిషేకం',
    ta: 'மகா ருத்ராபிஷேகம்'
  },
  'Grih Pravesh': {
    en: 'Griha Pravesh Puja',
    hi: 'गृह प्रवेश पूजा',
    sa: 'गृहप्रवेश पूजनम्',
    mr: 'गृह प्रवेश पूजा',
    gu: 'ગૃહ પ્રવેશ પૂજા',
    te: 'గృహప్రవేశం',
    ta: 'கிரகப்பிரவேசம்'
  },
  'Ganpati Havan': {
    en: 'Ganpati Havan',
    hi: 'गणपति हवन',
    sa: 'गणपति हवनम्',
    mr: 'गणपती हवन',
    gu: 'ગણપતિ હવન',
    te: 'గణపతి హవనం',
    ta: 'கணபதி ஹோமம்'
  },
  'Digital Puja': {
    en: 'Digital / E-Puja',
    hi: 'डिजिटल / ई-पूजा',
    sa: 'दूरसंकेत पूजा',
    mr: 'डिजिटल पूजा',
    gu: 'ડિજિટલ પૂજા',
    te: 'ఈ-పూజ',
    ta: 'இ-பூஜை'
  },
  'Naamkaran': {
    en: 'Naamkaran Sanskar',
    hi: 'नामकरण संस्कार',
    sa: 'नामकरण संस्कारः',
    mr: 'नामकरण संस्कार',
    gu: 'નામકરણ સંસ્કાર',
    te: 'నామకరణం',
    ta: 'நாமகரணம்'
  },
  'Astrology & Kundali Reading': {
    en: 'Astrology & Kundali Reading',
    hi: 'ज्योतिष एवं कुंडली विश्लेषण',
    sa: 'ज्योतिषं कुण्डलीविश्लेषणञ्च',
    mr: 'ज्योतिष आणि कुंडली विश्लेषण',
    gu: 'જ્યોતિષ અને કુંડળી વિશ્લેષણ',
    te: 'జ్యోతిష్యం & జాతక పరిశీలన',
    ta: 'ஜோதிடம் & ஜாதகம் கணித்தல்'
  },
  'Maha Mrityunjaya Jaap': {
    en: 'Maha Mrityunjaya Jaap',
    hi: 'महामृत्युंजय जाप',
    sa: 'महामृत्युञ्जयजपः',
    mr: 'महामृत्युंजय जाप',
    gu: 'મહામૃત્યુંજય જાપ',
    te: 'మహా మృత్యుంజయ జపం',
    ta: 'மகா மிருத்யுஞ்சய ஜெபம்'
  },
  'Birthday Puja (Janmadin)': {
    en: 'Birthday Puja (Janmadin)',
    hi: 'जन्मदिन पूजा',
    sa: 'जन्मोत्सव पूजनम्',
    mr: 'वाढदिवस पूजा',
    gu: 'જન્મદિવસ પૂજા',
    te: 'జన్మదిన పూజ',
    ta: 'பிறந்தநாள் பூஜை'
  },
  'Diwali Lakshmi Puja': {
    en: 'Diwali Lakshmi Puja',
    hi: 'दीपावली लक्ष्मी पूजा',
    sa: 'दीपावली लक्ष्मीपूजनम्',
    mr: 'दिवाळी लक्ष्मी पूजन',
    gu: 'દિવાળી લક્ષ્મી પૂજા',
    te: 'దీపావళి లక్ష్మీ పూజ',
    ta: 'தீபாவளி லட்சுமி பூஜை'
  },
  'Saraswati Puja': {
    en: 'Saraswati Puja',
    hi: 'सरस्वती पूजा',
    sa: 'सरस्वती पूजनम्',
    mr: 'सरस्वती पूजा',
    gu: 'સરસ્વતી પૂજા',
    te: 'సరస్వతీ పూజ',
    ta: 'சரஸ்வதி பூஜை'
  },
  'Ganesh Chaturthi Online Puja': {
    en: 'Ganesh Chaturthi Online Puja',
    hi: 'गणेश चतुर्थी ऑनलाइन पूजा',
    sa: 'गणेशचतुर्थी ऑनलाइन पूजनम्',
    mr: 'गणेश चतुर्थी ऑनलाईन पूजा',
    gu: 'ગણેશ ચતુર્થી ઓનલાઇન પૂજા',
    te: 'వినాయక చవితి ఆన్‌లైన్ పూజ',
    ta: 'விநாயகர் சதுர்த்தி ஆன்லைன் பூஜை'
  },
  'Marriage Ceremony (Vivah Sanskar)': {
    en: 'Marriage Ceremony (Vivah Sanskar)',
    hi: 'विवाह संस्कार',
    sa: 'विवाह संस्कारः',
    mr: 'विवाह संस्कार',
    gu: 'વિવાહ સંસ્કાર',
    te: 'వివాహ మహోత్సవం',
    ta: 'திருமண சடங்கு'
  },
  'Office / Shop Opening Puja': {
    en: 'Office / Shop Opening Puja',
    hi: 'कार्यालय / दुकान उद्घाटन पूजा',
    sa: 'कार्यालय/दुकान उद्घाटन पूजनम्',
    mr: 'कार्यालय / दुकान उद्घाटन पूजा',
    gu: 'ઓફિસ / દુકાન ઉદ્ઘાટન પૂજા',
    te: 'ఆఫీస్ / షాప్ ప్రారంభోత్సవ పూజ',
    ta: 'அலுவலகம் / கடை திறப்பு பூஜை'
  },

  // --- Time Slots ---
  'Brahma Muhurta (4:00 AM - 6:00 AM)': {
    en: 'Brahma Muhurta (4:00 AM - 6:00 AM)',
    hi: 'ब्रह्म मुहूर्त (प्रातः 4:00 - 6:00)',
    sa: 'ब्रह्ममुहूर्तः (प्रातः ४:०० - ६:००)',
    mr: 'ब्रह्म मुहूर्त (पहाटे ४:०० - ६:००)',
    gu: 'બ્રહ્મ મુહૂર્ત (સવારે ૪:૦૦ - ૬:૦૦)',
    te: 'బ్రహ్మ ముహూర్తం (ఉదయం 4:00 - 6:00)',
    ta: 'பிரம்ம முகூர்த்தம் (காலை 4:00 - 6:00)'
  },
  'Morning (6:00 AM - 10:00 AM)': {
    en: 'Morning (6:00 AM - 10:00 AM)',
    hi: 'प्रातः काल (प्रातः 6:00 - 10:00)',
    sa: 'प्रातःकालः (प्रातः ६:०० - १०:००)',
    mr: 'सकाळ (सकाळी ६:०० - १०:००)',
    gu: 'સવાર (સવારે ૬:૦૦ - ૧૦:૦૦)',
    te: 'ఉదయం (ఉదయం 6:00 - 10:00)',
    ta: 'காலை (காலை 6:00 - 10:00)'
  },
  'Afternoon (12:00 PM - 3:00 PM)': {
    en: 'Afternoon (12:00 PM - 3:00 PM)',
    hi: 'मध्याह्न काल (दोपहर 12:00 - 3:00)',
    sa: 'मध्याह्नकालः (मध्याह्ने १२:०० - ३:००)',
    mr: 'दुपार (दुपारी १२:०० - ३:००)',
    gu: 'બપોર (બપોરે ૧૨:૦૦ - ૩:૦००)',
    te: 'మధ్యాహ్నం (మధ్యాహ్నం 12:00 - 3:00)',
    ta: 'மதியம் (மதியம் 12:00 - 3:00)'
  },
  'Sandhya (5:00 PM - 7:00 PM)': {
    en: 'Sandhya (5:00 PM - 7:00 PM)',
    hi: 'सन्ध्या काल (सायं 5:00 - 7:00)',
    sa: 'सन्ध्याकालः (सायं ५:०० - ७:००)',
    mr: 'संध्याकाळ (सायंकाळी ५:०० - ७:००)',
    gu: 'સંધ્યા કાળ (સાંજે ૫:૦૦ - ૭:૦૦)',
    te: 'సాయంత్రం (సాయంత్రం 5:00 - 7:00)',
    ta: 'மாலை (மாலை 5:00 - 7:00)'
  },

  // --- Durations & PanditsCounts ---
  '3 Hours': { en: '3 Hours', hi: '३ घंटे', sa: 'होरात्रयम्', mr: '३ तास', gu: '૩ કલાક', te: '3 గంటలు', ta: '3 மணிநேரம்' },
  '4 Hours': { en: '4 Hours', hi: '४ घंटे', sa: 'होराचतुष्टयम्', mr: '४ तास', gu: '૪ કલાક', te: '4 గంటలు', ta: '4 மணிநேரம்' },
  '5 Hours': { en: '5 Hours', hi: '५ घंटे', sa: 'होरापञ्चकम्', mr: '५ तास', gu: '૫ કલાક', te: '5 గంటలు', ta: '5 மணிநேரம்' },
  '2 Hours': { en: '2 Hours', hi: '२ घंटे', sa: 'होराद्वयम्', mr: '२ तास', gu: '૨ કલાક', te: '2 గంటలు', ta: '2 மணிநேரம்' },
  '6 Hours': { en: '6 Hours', hi: '६ घंटे', sa: 'होराषट्कम्', mr: '६ तास', gu: '૬ કલાક', te: '6 గంటలు', ta: '6 மணிநேரம்' },
  '1.5 Hours': { en: '1.5 Hours', hi: '१.५ घंटे', sa: 'सार्धैकहोरा', mr: '१.५ तास', gu: '૧.૫ કલાક', te: '1.5 గంటలు', ta: '1.5 மணிநேரம்' },
  '1 Hour': { en: '1 Hour', hi: '१ घंटा', sa: 'एकहोरा', mr: '१ तास', gu: '૧ કલાક', te: '1 గంట', ta: '1 மணிநேரம்' },
  'Live Session': { en: 'Live Session', hi: 'लाइव सत्र', sa: 'प्रत्यक्षसत्रम्', mr: 'थेट सत्र', gu: 'લાઈવ સત્ર', te: 'ప్రత్యక్ష ప్రసారం', ta: 'நேரலை அமர்வு' },
  '1 Pandit': { en: '1 Pandit', hi: '१ पंडित', sa: 'एकः पण्डितः', mr: '१ पंडित', gu: '૧ પંડિત', te: '1 పండితుడు', ta: '1 பண்டிதர்' },
  '2 Pandits': { en: '2 Pandits', hi: '२ पंडित', sa: 'द्वौ पण्डितौ', mr: '२ पंडित', gu: '૨ પંડિત', te: '2 పండితులు', ta: '2 பண்டிதர்கள்' },
  '3 Pandits': { en: '3 Pandits', hi: '३ पंडित', sa: 'त्रयः पण्डिताः', mr: '३ पंडित', gu: '૩ પંડિત', te: '3 పండితులు', ta: '3 பண்டிதர்கள்' },
  'Global': { en: 'Global', hi: 'वैश्विक', sa: 'वैश्विकम्', mr: 'जागतिक', gu: 'વૈશ્વિક', te: 'ప్రపంచవ్యాప్తం', ta: 'உலகளாவிய' },
  '1-on-1 Consultation': { en: '1-on-1 Consultation', hi: '१-से-१ परामर्श', sa: 'व्यक्तिगतपरामर्शः', mr: 'वैयक्तिक चर्चा', gu: 'વૈયક્તિક ચર્ચા', te: 'వ్యక్తిగత సంప్రదింపులు', ta: 'தனிநபர் ஆலோசனை' },
  'Global / Online': { en: 'Global / Online', hi: 'वैश्विक / ऑनलाइन', sa: 'वैश्विक/ऑनलाइन', mr: 'जागतिक / ऑनलाईन', gu: 'વૈશ્વિક / ઓનલાઇન', te: 'ప్రపంచవ్యాప్తం / ఆన్‌లైన్', ta: 'உலகளாவிய / ஆன்லைன்' },
  'Ceremony': { en: 'Ceremony', hi: 'पूजा अनुष्ठान', sa: 'पूजाविधानम्', mr: 'पूजा विधी', gu: 'પૂજા વિધિ', te: 'పూజా విధానం', ta: 'வழிபாடு' },
  'Havan': { en: 'Havan', hi: 'हवन यज्ञ', sa: 'हवनयज्ञः', mr: 'हवन', gu: 'હવન', te: 'హవనం', ta: 'ஹோமம்' },
  'Online Puja': { en: 'Online Puja', hi: 'ऑनलाइन पूजा', sa: 'दूरसंकेतपूजा', mr: 'ऑनलाईन पूजा', gu: 'ઓનલાઇન પૂજા', te: 'ఆన్‌లైన్ పూజ', ta: 'ஆன்லைன் பூஜை' },
  'Astrology': { en: 'Astrology', hi: 'ज्योतिष', sa: 'ज्योतिषशास्त्रम्', mr: 'ज्योतिष', gu: 'જ્યોતિષ', te: 'జ్యోతిష్యం', ta: 'ஜோதிடம்' },

  // --- Landing and Banner Sections ---
  'about.hero.badge': {
    en: 'Master of Vedic Rites',
    hi: 'वैदिक कर्मकाण्ड विशेषज्ञ',
    sa: 'वैदिक कर्मकाण्ड निष्णातः',
    mr: 'वैदिक कर्मकाण्ड तज्ञ',
    gu: 'વૈદિક કર્મકાંડ નિષ્ણાત',
    te: 'వేద పండితులు',
    ta: 'வேத சடங்கு நிபுணர்'
  },
  'about.hero.title': {
    en: 'Meet Pandit Dheeraj Tripathi',
    hi: 'आचार्य धीरज त्रिपाठी से मिलें',
    sa: 'पण्डित धीरज त्रिपाठी',
    mr: 'पंडित धीरज त्रिपाठी यांना भेटा',
    gu: 'પંડિત ધીરજ ત્રિપાઠી ને મળો',
    te: 'పండిట్ ధీరజ్ త్రిపాఠి గారి పరిచయం',
    ta: 'பண்டித தீரஜ் திரிபாதி அறிமுகம்'
  },
  'about.hero.desc': {
    en: 'A lifetime dedicated to the preservation of ancient Sanskrit traditions, Vedic liturgy, and the performance of sacred rituals.',
    hi: 'प्राचीन संस्कृत परंपराओं, वैदिक मन्त्रों की शुद्धता और दिव्य कल्याणकारी यज्ञों के संपादन के लिए समर्पित जीवन।',
    sa: 'वाराणस्याः पावने तीरे लब्धवैदिकदीक्षः, सप्तवंशपरम्परागत पुरोहितः, मन्त्राणां विज्ञाने गभीरसंशोधकश्च।',
    mr: 'प्राचीन संस्कृत परंपरा, वैदिक मंत्र आणि पवित्र विधींच्या संवर्धनासाठी समर्पित जीवन.',
    gu: 'પ્રાચીન સંસ્કૃત પરંપરાઓ, વૈદિક મંત્રો અને પવિત્ર વિધિઓ માટે સમર્પિત જીવન.',
    te: 'కాశీ పుణ్యక్షేత్రంలో వైదిక విద్యనభ్యసించి, ఏడు తరాలుగా వైదిక సేవలందిస్తున్న పండిత కుటుంబానికి చెందినవారు.',
    ta: 'புராதன சமஸ்கிருத பாரம்பரியம் மற்றும் வேத சடங்குகளின் பாதுகாப்பிற்கு அர்ப்பணிக்கப்பட்ட வாழ்க்கை.'
  },
  'about.stats.experience': {
    en: 'Years Exp',
    hi: 'वर्षों का अनुभव',
    sa: 'अनुभव वर्षाणि',
    mr: 'अनुभव वर्षे',
    gu: 'વર્ષોનો अनुभव',
    te: 'సంవత్సరాల అనుభవం',
    ta: 'ஆண்டுகள் அனுபவம்'
  },
  'about.stats.pujas': {
    en: 'Pujas Led',
    hi: 'संपन्न पूजाएं',
    sa: 'सम्पादिताः पूजाः',
    mr: 'केलेल्या पूजा',
    gu: 'સંપન્ન પૂજાઓ',
    te: 'పూజలు నిర్వహించారు',
    ta: 'நடத்தப்பட்ட பூஜைகள்'
  },
  'about.stats.temples': {
    en: 'Temples Served',
    hi: 'मंदिरों में सेवाएं',
    sa: 'मुख्यमन्दिराणि',
    mr: 'मंदिरांमध्ये सेवा',
    gu: 'મંદિરોમાં સેવાઓ',
    te: 'దేవాలయాల సేవలు',
    ta: 'கோயில்கள் சேவை'
  },
  'home.cta.title': {
    en: 'Experience the Divine Grace',
    hi: 'दिव्य कृपा का अनुभव करें',
    sa: 'प्राप्नुवन्तु मङ्गलमयम् कल्याणम्',
    mr: 'दिव्य कृपेचा अनुभव घ्या',
    gu: 'દિવ્ય કૃપા નો अनुभव કરો',
    te: 'దైవిక కృపను అనుభవించండి',
    ta: 'தெய்வீக அருளை அனுபவியுங்கள்'
  },
  'home.cta.subtitle': {
    en: 'Seek high-fidelity astrological consultation or book a fully personalized sacred ritual directly with Pandit Dheeraj Tripathi.',
    hi: 'आचार्य धीरज त्रिपाठी से ज्योतिषीय परामर्श लें या अपने घर पर पूर्णतः अनुकूलित वैदिक अनुष्ठान संपन्न करवाएं।',
    sa: 'आचार्य धीरज त्रिपाठी इत्यस्य मार्गदर्शनेन स्वगृहमुहूर्त्तम् वैयक्तिकपूजां वा सम्पादयन्तु।',
    mr: 'पंडित धीरज त्रिपाठी यांच्याकडून ज्योतिष सल्ला घ्या किंवा आपल्या घरी पूजा विधी संपन्न करा.',
    gu: 'પંડિત ધીરજ ત્રિપાઠી પાસેથી જ્યોતિષ સલાહ મેળવો અથવા તમારા ઘરે પૂજા વિધિ કરાવો.',
    te: 'పండిట్ ధీరజ్ త్రిపాఠి గారిని సంప్రదించి, జాతక పరిశీలన లేదా మీ ఇంట్లో వైదిక పూజలు చేయించుకోండి.',
    ta: 'பண்டித தீரஜ் திரிபாதியிடம் ஜோதிட ஆலோசனை பெறலாம் அல்லது வேத சடங்குகள் செய்யலாம்.'
  },
  'home.cta.book': {
    en: 'Book a Consultation',
    hi: 'परामर्श बुक करें',
    sa: 'सङ्कल्पं कुरु',
    mr: 'चर्चा बुक करा',
    gu: 'સંપર્ક બુક કરો',
    te: 'సంప్రదింపులు బుక్ చేయండి',
    ta: 'ஆலோசனை முன்பதிவு செய்க'
  },
  'home.cta.view': {
    en: 'View Services',
    hi: 'सेवाएं देखें',
    sa: 'पूजा विधीः',
    mr: 'सेवा पहा',
    gu: 'સેવાઓ જુઓ',
    te: 'సేవలు చూడండి',
    ta: 'சேவைகளை காண்க'
  },
  'services.custom.title': {
    en: "Can't find what you need?",
    hi: 'क्या आपको आपकी पसंद की पूजा नहीं मिली?',
    sa: 'किं भवदभिलषितं न लब्धम्?',
    mr: 'आपल्याला हवी असलेली पूजा मिळाली नाही का?',
    gu: 'શું તમને તમારી પસંદગીની પૂજા ન મળી?',
    te: 'మీకు కావలసిన పూజ లభించలేదా?',
    ta: 'உங்களுக்கு தேவையான பூஜை கிடைக்கவில்லையா?'
  },
  'services.custom.desc': {
    en: 'We offer fully customized Vedic rituals and Mahayagnas tailored to your specific requirements, familial tradition (Gotra), and astrological balancing.',
    hi: 'हम आपकी विशिष्ट आवश्यकताओं, पारिवारिक परंपरा (गोत्र), और ज्योतिषीय अनुकूलता के अनुसार पूर्णतः अनुकूलित वैदिक अनुष्ठान और महायज्ञ आयोजित करते हैं।',
    sa: 'वयं भवतां नक्षत्र-कुण्डली-वास्तुदोषानुकूलं विशिष्टपूजायज्ञादीन् आयोजयामः। अद्यैव आचार्येण सह भाषताम्।',
    mr: 'आम्ही आपल्या गरजेनुसार, कौटुंबिक परंपरा (गोत्र) आणि ग्रहानुसार सानुकूलित पूजा आणि महायज्ञ आयोजित करतो.',
    gu: 'અમે તમારી જરૂરિયાત, ગોત્ર અને જ્યોતિષીય ગ્રહો અનુસાર કસ્ટમાઇઝ્ડ પૂજા અને મહાયજ્ઞ કરીએ છીએ.',
    te: 'మీ గోత్రం, నక్షత్రం మరియు అవసరాలకు అనుగుణంగా పూజలు మరియు మహాయజ్ఞాలు నిర్వహించబడతాయి.',
    ta: 'உங்கள் தேவைகள், குடும்ப பாரம்பரியம் (கோத்திரம்) ஆகியவற்றிற்கு ஏற்ப வேத சடங்குகள் மற்றும் யாகங்கள் நடத்தப்படும்.'
  },
  'services.custom.button': {
    en: 'Request Custom Puja',
    hi: 'कस्टम पूजा का अनुरोध करें',
    sa: 'विशिष्ट पूजा प्रार्थना',
    mr: 'विशेष पूजा विनंती',
    gu: 'ખાસ પૂજા વિનંती',
    te: 'కస్టమ్ పూజను అభ్యర్థించండి',
    ta: 'தனிப்பயன் பூஜை அభ్యర్థனை'
  }
,

  // --- Service Descriptions & Details ---
  'A sacred ritual dedicated to Lord Vishnu, seeking blessings for prosperity and peace in the family.': {
    en: 'A sacred ritual dedicated to Lord Vishnu, seeking blessings for prosperity and peace in the family.',
    hi: 'पारिवारिक समृद्धि और शांति के लिए भगवान विष्णु को समर्पित एक पवित्र अनुष्ठान।',
    sa: 'कल्याणाय श्रीविष्णवे समर्पितः पावनः विधिः।',
    te: 'కుటుంబ శ్రేయస్సు మరియు శాంతి కోసం శ్రీమన్నారాయణుని వ్రతం.',
    ta: 'குடும்ப நன்மைக்காக மகாவிஷ்ணுவை வழிபடும் சடங்கு.',
    mr: 'कौटुंबिक सुख आणि शांततेसाठी विष्णू पूजा.',
    gu: 'કુટુંબ સુખ-શાંતિ માટે શ્રી વિષ્ણુ પૂજા.'
  },
  'Powerful Vedic ritual to invoke Lord Shiva\'s blessings for health and removal of obstacles.': {
    en: 'Powerful Vedic ritual to invoke Lord Shiva\'s blessings for health and removal of obstacles.',
    hi: 'स्वास्थ्य और बाधाओं के निवारण के लिए भगवान शिव का आशीर्वाद प्राप्त करने का शक्तिशाली वैदिक अनुष्ठान।',
    sa: 'आरोग्याय विघ्नविनाशाय च शिवाराधनविधिः।',
    te: 'ఆరోగ్యం మరియు సకల విఘ్నాల నివారణ కొరకు మహా రుద్రాభిషేకం.',
    ta: 'ஆரோக்கியம் மற்றும் தடைகள் நீங்க சிவபெருமானை வழிபடும் சடங்கு.',
    mr: 'आरोग्य आणि अडथळे दूर करण्यासाठी भगवान शिवाची उपासना.',
    gu: 'આરોગ્ય અને વિઘ્ન નિવારણ માટે શિવ ઉપાસના.'
  },
  'Auspicious ceremony for moving into a new home to ensure positive energy and divine protection.': {
    en: 'Auspicious ceremony for moving into a new home to ensure positive energy and divine protection.',
    hi: 'सकारात्मक ऊर्जा और दैवीय सुरक्षा सुनिश्चित करने के लिए नए घर में प्रवेश का शुभ अनुष्ठान।',
    sa: 'नूतनगृहप्रवेशाय मङ्गलमयः विधिः।',
    te: 'కొత్త ఇంట్లోకి ప్రవేశించేటప్పుడు జరిపే శుభప్రదమైన గృహప్రవేశం.',
    ta: 'புதுமனை புகுவிழா பூஜை.',
    mr: 'नवीन घरात सुख-समृद्धीसाठी गृह प्रवेश विधी.',
    gu: 'નવા ઘરમાં સુખ-શાંતિ માટે ગૃહ પ્રવેશ વિધિ.'
  },
  'Special fire ritual dedicated to Lord Ganesha for successful beginnings and wisdom.': {
    en: 'Special fire ritual dedicated to Lord Ganesha for successful beginnings and wisdom.',
    hi: 'सफल शुरुआत और बुद्धि के लिए भगवान गणेश को समर्पित विशेष अग्नि अनुष्ठान।',
    sa: 'सद्बुद्धये निर्विघ्नकार्याय च गणपतिहवनम्।',
    te: 'విజయం మరియు సద్బుద్ధి కొరకు శ్రీ గణేశ హవనం.',
    ta: 'காரிய சித்தி மற்றும் ஞானம் பெற கணபதி ஹோமம்.',
    mr: 'यशस्वी सुरुवातीसाठी आणि बुद्धीसाठी गणपती हवन.',
    gu: 'સફળ શરૂઆત અને બુદ્ધિ માટે ગણપતિ હવન.'
  },
  'Experience divine connectivity from anywhere in the world through our live-streamed puja sessions.': {
    en: 'Experience divine connectivity from anywhere in the world through our live-streamed puja sessions.',
    hi: 'हमारे लाइव-स्ट्रीम किए गए पूजा सत्रों के माध्यम से दुनिया में कहीं से भी दिव्य जुड़ाव का अनुभव करें।',
    sa: 'दूरस्थानां कृते प्रत्यक्षप्रसारणपूजनविधिः।',
    te: 'ప్రపంచంలో ఎక్కడి నుండైనా ఆన్‌లైన్ ద్వారా పూజలో పాల్గొనండి.',
    ta: 'உலகில் எங்கிருந்தும் ஆன்லைன் மூலமாக பூஜையில் பங்கேற்கலாம்.',
    mr: 'ऑनलाईन थेट प्रक्षेपण पूजा विधी.',
    gu: 'ઓનલાઇન પૂજા વિધિ.'
  },
  'Traditional naming ceremony performed with Vedic chants to bless the newborn child.': {
    en: 'Traditional naming ceremony performed with Vedic chants to bless the newborn child.',
    hi: 'नवजात शिशु को आशीर्वाद देने के लिए वैदिक मंत्रोच्चार के साथ किया जाने वाला पारंपरिक नामकरण समारोह।',
    sa: 'शिशोः कल्याणाय मङ्गलमयः नामकरणसंस्कारः।',
    te: 'శిశువుకు శుభం కలగాలని వేద మంత్రాలతో జరిపే సాంప్రదాయ నామకరణం.',
    ta: 'குழந்தைக்கு பெயர் சூட்டும் நாமகரணம் சடங்கு.',
    mr: 'बाळाच्या नामकरण सोहळा विधी.',
    gu: 'બાળકના નામકરણ સંસ્કાર વિધિ.'
  },
  'Deep insights into your future, career, and marriage compatibility through professional Kundali analysis.': {
    en: 'Deep insights into your future, career, and marriage compatibility through professional Kundali analysis.',
    hi: 'पेशेवर कुंडली विश्लेषण के माध्यम से आपके भविष्य, करियर और विवाह अनुकूलता की गहरी जानकारी।',
    sa: 'ज्योतिषशास्त्रानुसारं कुण्डलीविश्लेषणम्।',
    te: 'జ్యోతిష్యం మరియు జాతక చక్ర పరిశీలన ద్వారా భవిష్యత్తు మరియు వివాహ పొంతన తెలుసుకోండి.',
    ta: 'ஜாதகம் கணித்தல் மற்றும் திருமண பொருத்தம் பார்த்தல்.',
    mr: 'कुंडली विश्लेषण आणि भविष्य मार्गदर्शन.',
    gu: 'કુંડળી વિશ્લેષણ અને ભવિષ્ય માર્ગદર્શન.'
  },
  'Vedic fire ritual and chanting of Maha Mrityunjaya Mantra to invoke healing, longevity, and conquer fear.': {
    en: 'Vedic fire ritual and chanting of Maha Mrityunjaya Mantra to invoke healing, longevity, and conquer fear.',
    hi: 'आरोग्य, दीर्घायुष्य और भय पर विजय प्राप्त करने के लिए वैदिक अग्नि अनुष्ठान और महामृत्युंजय मंत्र का जाप।',
    sa: 'दीर्घायुष्याय महारोगनिवारणाय च महामृत्युञ्जयजपः।',
    te: 'ఆరోగ్యం మరియు దీర్ఘాయువు కొరకు మహా మృత్యుంజయ జపం & హవనం.',
    ta: 'நோய் நொடிகள் நீங்கி நீண்ட ஆயுள் பெற மகா மிருத்யுஞ்சய ஹோமம்.',
    mr: 'आरोग्य आणि दीर्घायुष्यासाठी महामृत्युंजय जप.',
    gu: 'આરોગ્ય અને દીર્ઘાયુષ્ય માટે મહામૃત્યુંજય જાપ.'
  },
  'Sacred birthday ceremony with Ayushya Homam to invoke health, career growth, and longevity.': {
    en: 'Sacred birthday ceremony with Ayushya Homam to invoke health, career growth, and longevity.',
    hi: 'स्वास्थ्य, करियर के विकास और दीर्घायु की कामना के लिए आयुष होम के साथ पवित्र जन्मदिन समारोह।',
    sa: 'आयुष्यवृद्धये जन्मोत्सव आयुष्यहोमविधिः।',
    te: 'ఆరోగ్యం మరియు దీర్ఘాయువు కొరకు జరిపే జన్మదిన ఆయుష్య హోమం.',
    ta: 'ஆயுள் விருத்தி தரும் பிறந்தநாள் ஆயில்ய ஹோமம்.',
    mr: 'वाढदिवसानिमित्त आयुष्य होम विधी.',
    gu: 'જન્મદિવસ નિમિત્તે આયુષ્ય હોમ વિધિ.'
  },
  'Traditional Deepavali Lakshmi-Kuber Puja for inviting wealth, business prosperity, and peace.': {
    en: 'Traditional Deepavali Lakshmi-Kuber Puja for inviting wealth, business prosperity, and peace.',
    hi: 'धन, व्यावसायिक समृद्धि और शांति को आमंत्रित करने के लिए पारंपरिक दीपावली लक्ष्मी-कुबेर पूजा।',
    sa: 'ऐश्वर्याय धनधान्यवृद्धये च लक्ष्मीकुबेरपूजनम्।',
    te: 'సంపద మరియు వ్యాపారాభివృద్ధి కొరకు దీపావళి లక్ష్మీ-కుబేర పూజ.',
    ta: 'செல்வ வளம் பெற தீபாவளி லட்சுமி குபேர பூஜை.',
    mr: 'दिवाळी लक्ष्मी-कुबेर पूजन विधी.',
    gu: 'દિવાળી લક્ષ્મી-કુબેર પૂજન વિધિ.'
  },
  'Ritual dedicated to Goddess Saraswati for knowledge, sharp memory, creative arts, and academic success.': {
    en: 'Ritual dedicated to Goddess Saraswati for knowledge, sharp memory, creative arts, and academic success.',
    hi: 'ज्ञान, तेज याददाश्त, रचनात्मक कला और शैक्षणिक सफलता के लिए देवी सरस्वती को समर्पित अनुष्ठान।',
    sa: 'विद्याबुद्धिवृद्धये कलासिद्ध्यै च सरस्वतीपूजनम्।',
    te: 'జ్ఞానం మరియు విద్యావిజయం కొరకు సరస్వతీ దేవి పూజ.',
    ta: 'கல்வி மற்றும் கலைகளில் சிறந்து விளங்க சரஸ்வதி பூஜை.',
    mr: 'ज्ञान आणि विद्या प्राप्तीसाठी सरस्वती पूजन.',
    gu: 'જ્ઞાન અને વિદ્યા પ્રાપ્તિ માટે સરસ્વતી પૂજન.'
  },
  'Online live-streamed Ganpati Puja to invoke Lord Ganesha on Ganesh Chaturthi with real-time Sankalpa.': {
    en: 'Online live-streamed Ganpati Puja to invoke Lord Ganesha on Ganesh Chaturthi with real-time Sankalpa.',
    hi: 'वास्तविक समय संकल्प के साथ गणेश चतुर्थी पर भगवान गणेश का आह्वान करने के लिए ऑनलाइन लाइव-स्ट्रीम की गई गणपति पूजा।',
    sa: 'गणेशचतुर्थ्यां प्रत्यक्षप्रसारणयुक्ता गणपतिपूजा।',
    te: 'వినాయక చవితి రోజున ఆన్‌లైన్ ద్వారా జరిపే ప్రత్యేక గణేశ పూజ.',
    ta: 'விநாயகர் சதுர்த்தி ஆன்லைன் பூஜை வழிபாடுகள்.',
    mr: 'गणेश चतुर्थी ऑनलाईन थेट पूजा विधी.',
    gu: 'ગણેશ ચતુર્થી ઓનલાઇન લાઈવ પૂજા વિધિ.'
  },
  'Sacred wedding ceremony performed in accordance with traditional Vedic wedding rites and mantras.': {
    en: 'Sacred wedding ceremony performed in accordance with traditional Vedic wedding rites and mantras.',
    hi: 'पारंपरिक वैदिक विवाह संस्कारों और मंत्रों के अनुसार आयोजित पवित्र विवाह समारोह।',
    sa: 'पारम्परिक वैदिकविधीनिसारः पावनः विवाहसंस्कारः।',
    te: 'వేద మంత్రాలతో సాంప్రదాయబద్ధంగా జరిపే వివాహ మహోత్సవం.',
    ta: 'வேத மந்திரங்களுடன் பாரம்பரியமாக நடக்கும் திருமண சடங்கு.',
    mr: 'पारंपारिक वैदिक विवाह सोहळा विधी.',
    gu: 'પરંપરાગત વૈદિક લગ્ન વિધિ.'
  },
  'Sacred Vastu Shanti and Lakshmi-Ganesh Puja for business prosperity, growth, and positive workspace energy.': {
    en: 'Sacred Vastu Shanti and Lakshmi-Ganesh Puja for business prosperity, growth, and positive workspace energy.',
    hi: 'व्यावसायिक समृद्धि, विकास और कार्यक्षेत्र में सकारात्मक ऊर्जा के लिए पवित्र वास्तु शांति और लक्ष्मी-गणेश पूजा।',
    sa: 'व्यापारवृद्धये गृहकल्याणाय च वास्तुशान्ति लक्ष्मीगणेशपूजनम्।',
    te: 'వ్యాపారాభివృద్ధి మరియు సానుకూల శక్తి కొరకు వాస్తు శాంతి & లక్ష్మీ గణేశ పూజ.',
    ta: 'தொழில் சிறக்கவும் நேர்மறை ஆற்றல் பெருகவும் வாஸ்து சாந்தி பூஜை.',
    mr: 'कार्यालय समृद्धीसाठी वास्तू शांतता व लक्ष्मी-गणेश पूजन.',
    gu: 'ઓફિસ સમૃદ્ધિ માટે વાસ્તુ શાંતિ અને લક્ષ્મી-ગણેશ પૂજન.'
  },

  // --- Common Details and Lists ---
  'Ganesh Puja and Gauri Puja initiation': { en: 'Ganesh Puja and Gauri Puja initiation', hi: 'गणेश पूजा और गौरी पूजा प्रारंभ', sa: 'गणेशगौरीपूजनम्', te: 'గణేశ మరియు గౌరీ పూజారంభం', ta: 'கணபதி மற்றும் கௌரி பூஜை', mr: 'गणेश आणि गौरी पूजा', gu: 'ગણેશ અને ગૌરી પૂજા' },
  'Installation of the sacred Kalash and deity altars': { en: 'Installation of the sacred Kalash and deity altars', hi: 'पवित्र कलश और वेदी की स्थापना', sa: 'कलशस्थापनं वेदिपूजनञ्च', te: 'కలశ స్థాపన', ta: 'கலச பூஜை', mr: 'कलश स्थापना', gu: 'કળશ સ્થાપના' },
  'Five-chapter narration (Katha) of Lord Satyanarayan\\\'s divine grace': { en: 'Five-chapter narration (Katha) of Lord Satyanarayan\\\'s divine grace', hi: 'श्री सत्यनारायण भगवान की पांच अध्यायों की कथा', sa: 'सत्यनारायणकथा श्रवणम्', te: 'శ్రీ సత్యనారాయణ వ్రత మహత్మ్య కథా శ్రవణం', ta: 'சத்தியநாராயண விரத கதை', mr: 'श्री सत्यनारायण पाच अध्याय कथा', gu: 'શ્રી સત્યનારાયણ પાંચ અધ્યાય કથા' },
  'Grand Aarti and distribution of custom-prepared Prasad (Sheera)': { en: 'Grand Aarti and distribution of custom-prepared Prasad (Sheera)', hi: 'महाआरती और विशेष प्रसाद (शीरा) वितरण', sa: 'महाआरती प्रसादावितरणञ्च', te: 'మహా హారతి మరియు ప్రసాద వితరణ', ta: 'மகா ஆரத்தி மற்றும் பிரசாதம் வழங்குதல்', mr: 'महाआरती आणि प्रसाद वाटप', gu: 'મહાઆરતી અને પ્રસાદ વિતરણ' },
  'Auspicious astrological timing selection by Pandit Dheeraj Tripathi': { en: 'Auspicious astrological timing selection by Pandit Dheeraj Tripathi', hi: 'पंडित धीरज त्रिपाठी द्वारा शुभ मुहूर्त का चयन', sa: 'शुभमुहूर्त्तनिर्धारणम्', te: 'పండిట్ ధీరజ్ త్రిపాఠి గారి చేత ముహూర్త निर्णयం', ta: 'சுப முகூர்த்த நேரம் தேர்வு செய்தல்', mr: 'पंडित धीरज त्रिपाठी यांचेकडून मुहूर्त निवड', gu: 'પંડિત ધીરજ ત્રિપાઠી દ્વારા મુહૂર્ત પસંદગી' },
  'Chanting of Sri Rudram from the Yajur Veda': { en: 'Chanting of Sri Rudram from the Yajur Veda', hi: 'यजुर्वेद से श्री रुद्रम का पाठ', sa: 'यजुर्वेदीय श्रीरुद्राष्टाध्यायी पाठः', te: 'యజుర్వేద శ్రీ రుద్ర పారాయణం', ta: 'யஜுர் வேத ஸ்ரீ ருத்ர பாராயணம்', mr: 'श्री रुद्रम पठण', gu: 'શ્રી રુદ્રમ પઠન' },
  'Ablution (Abhishek) of the Shivling with 11 sacred dravyas (milk, honey, ghee, cane juice, etc.)': { en: 'Ablution (Abhishek) of the Shivling with 11 sacred dravyas (milk, honey, ghee, cane juice, etc.)', hi: '११ पवित्र द्रव्यों (दूध, शहद, घी, गन्ने का रस आदि) से शिवलिंग का अभिषेक', sa: 'एकादशद्रव्यैः शिवलिङ्गाभिषेकः', te: '11 పవిత్ర ద్రవ్యాలతో శివలింగ అభిషేకం', ta: '11 அபிஷேகப் பொருட்களால் சிவலிங்க அபிஷேகம்', mr: 'शिवलिंगाला ११ पवित्र द्रव्यांचा अभिषेक', gu: 'શિવલિંગને ૧૧ પવિત્ર દ્રવ્યોનો અભિષેક' },
  'Sringar decoration with Bilva leaves, lotus flowers, and Vibhuti': { en: 'Sringar decoration with Bilva leaves, lotus flowers, and Vibhuti', hi: 'बिल्वपत्र, कमल के फूल और विभूति से दिव्य श्रृंगार', sa: 'बिल्वपत्रैः पुष्पैः विभूत्या च शिवशृङ्गारः', te: 'బిల్వ పత్రాలు, పద్మాలు, విభూతితో శివాలంకరణ', ta: 'வில்வ இலைகள் மற்றும் விபூதியால் சிவனுக்கு அலங்காரம்', mr: 'बिल्वपत्र व विभूतीने शिवलिंग शृंगार', gu: 'બિલિપત્ર અને વિભૂતિથી શિવલિંગ શણગાર' },
  'Maha Mrityunjaya Japa for longevity and physical rejuvenation': { en: 'Maha Mrityunjaya Japa for longevity and physical rejuvenation', hi: 'दीर्घायु और आरोग्य के लिए महामृत्युंजय जप', sa: 'दीर्घायुष्याय महामृत्युञ्जयजपः', te: 'ఆరోగ్యం కొరకు మహా మృత్యుంజయ జపం', ta: 'நீண்ட ஆயுள் பெற மகா மிருத்யுஞ்சய ஜெபம்', mr: 'दीर्घायुष्यासाठी महामृत्युंजय जप', gu: 'દીર્ઘાયુષ્ય માટે મહામૃત્યુંજય જાપ' },
  'Purifying Havan at the conclusion': { en: 'Purifying Havan at the conclusion', hi: 'पूर्णाहुति पर पवित्र हवन यज्ञ', sa: 'हवनयज्ञः पूर्णाहुतिश्च', te: 'హవనం మరియు పూర్ణాహుతి', ta: 'ஹோமம் மற்றும் பூர்ணாஹுதி', mr: 'पवित्र हवन आणि पूर्णाहुती', gu: 'પવિત્ર હવન અને પૂર્ણાહુતિ' },
  'Dwar Puja (doorway sanctification) with floral Rangolis and mango leaves': { en: 'Dwar Puja (doorway sanctification) with floral Rangolis and mango leaves', hi: 'फूलों की रंगोली और आम के पत्तों से द्वार पूजा', sa: 'द्वारपूजनम् तोरणस्थापनञ्च', te: 'సింహద్వార పూజ మరియు తోరణాలు కట్టడం', ta: 'நிலைவாசல் பூஜை மற்றும் தோரணம்', mr: 'दारपूजा व तोरण लावणे', gu: 'દ્વાર પૂજા અને તોરણ સ્થાપના' },
  'Vastu Shanti Puja to balance home directions and element energies': { en: 'Vastu Shanti Puja to balance home directions and element energies', hi: 'घर की दिशाओं और पंचतत्वों को संतुलित करने के लिए वास्तु शांति पूजा', sa: 'गृहवास्तुदोषनिवारणाय वास्तुशान्तिपूजा', te: 'దిశల దోష నివారణ కొరకు వాస్తు శాంతి పూజ', ta: 'வாஸ்து சாந்தி பூஜை', mr: 'वास्तु शांतता विधी', gu: 'વાસ્તુ શાંતિ વિધિ' },
  'Boiling of pure milk ceremony symbolizing abundance': { en: 'Boiling of pure milk ceremony symbolizing abundance', hi: 'समृद्धि का प्रतीक दूध उबालने की रस्म', sa: 'दुग्धसेचनसंस्कारः', te: 'పాలు పొంగించే సాంప్రదాయ శుభకార్యం', ta: 'பால் காய்ச்சி வழிபடலும் சடங்கு', mr: 'दूध उतू जाण्याचा सोहळा', gu: 'દૂધ ઉકાળવાનો વિધિ' },
  'Ganesh and Navagraha Havan for family well-being': { en: 'Ganesh and Navagraha Havan for family well-being', hi: 'पारिवारिक सुख के लिए गणेश और नवग्रह हवन', sa: 'गणेशनवग्रहहवनम्', te: 'కుటుంబ క్షేమం కొరకు గణేశ నవగ్రహ హవనం', ta: 'கணபதி மற்றும் நவகிரக ஹோமம்', mr: 'गणेश आणि नवग्रह हवन', gu: 'ગણેશ અને નવગ્રહ હવન' },
  'Sanctified water sprinkling across all corners of the home': { en: 'Sanctified water sprinkling across all corners of the home', hi: 'घर के सभी कोनों में पवित्र जल (छिड़काव) प्रोक्षण', sa: 'शान्तिजलप्रोक्षणम्', te: 'ఇల్లంతా పుణ్యాహవాచనం తీర్థం చల్లడం', ta: 'புண்ணியாவாசனம் தெளித்தல்', mr: 'घरभर पवित्र पाण्याचे प्रोक्षण', gu: 'ઘરભર પવિત્ર જળ છાંટવું' },
  'Ganpati Atharvashirsha recitation': { en: 'Ganpati Atharvashirsha recitation', hi: 'गणपति अथर्वशीर्ष का सस्वर पाठ', sa: 'गणपतिअथर्वशीर्षपाठः', te: 'గణపతి అథర్వశీర్ష పారాయణం', ta: 'கணபதி அதர்வசீர்ஷம் பாராயணம்', mr: 'गणपती अथर्वशीर्ष पठण', gu: 'ગણપતિ અથર્વશીર્ષ પઠન' },
  'Sacred Agni-Pratishthapan in a traditional copper fire pit': { en: 'Sacred Agni-Pratishthapan in a traditional copper fire pit', hi: 'पारंपरिक तांबे के हवन कुंड में पवित्र अग्नि प्रतिष्ठा', sa: 'अग्निप्रतिष्ठापनम्', te: 'తామ్ర హవనకుండంలో అగ్ని ప్రతిష్టాపన', ta: 'ஹோம குண்டத்தில் అగ్ని வளர்த்தல்', mr: 'तांब्याच्या हवन कुंडात अग्नी स्थापना', gu: 'તાંબાના હવન કુંડમાં અગ્નિ સ્થાપના' },
  'Offering of 108 sweet Modaks, herbs, and Ghee to the holy fire': { en: 'Offering of 108 sweet Modaks, herbs, and Ghee to the holy fire', hi: 'पवित्र अग्नि में १०८ मीठे मोदक, जड़ी-बूटियों और घी की आहुति', sa: '१०८ मोदकद्रव्याणां हवनम्', te: '108 మోదకాలు, హవిస్సులతో హోమం', ta: '108 கொழுக்கட்டைகள் மற்றும் நெய் ஆஹுதி', mr: '१०८ मोदक व औषधी वनस्पतींचे हवन', gu: '૧૦૮ મોદક અને ઔષધિઓનું હવન' },
  'Prarthana for overcoming personal and business roadblocks': { en: 'Prarthana for overcoming personal and business roadblocks', hi: 'व्यक्तिगत और व्यावसायिक बाधाओं को दूर करने की प्रार्थना', sa: 'बाधानिवारणप्रार्थना', te: 'వ్యక్తిగత మరియు వ్యాపార విఘ్నాలు తొలగాలని ప్రార్థన', ta: 'தடைகள் நீங்க சிறப்பு பிரார்த்தனை', mr: 'अडथळे दूर करण्यासाठी प्रार्थना', gu: 'અડચણો દૂર કરવા માટે પ્રાર્થના' },
  'Distribution of pure ashes (Bhasma) as divine protection': { en: 'Distribution of pure ashes (Bhasma) as divine protection', hi: 'दिव्य सुरक्षा के रूप में पवित्र भस्म (रक्षा) वितरण', sa: 'भस्मवितरणम् रक्षाबन्धनञ्च', te: 'పవిత్ర రక్ష మరియు భస్మ ప్రసాద వితరణ', ta: 'ஹோம பஸ்மம் மற்றும் பிரசாதம் வழங்குதல்', mr: 'विभूती व प्रसाद वाटप', gu: 'ભસ્મ પ્રસાદ વિતરણ' },
  'Live one-on-one HD video feed of the ceremony': { en: 'Live one-on-one HD video feed of the ceremony', hi: 'पूजन अनुष्ठान का सीधा एक-से-एक एचडी वीडियो लाइव प्रसारण', sa: 'प्रत्यक्षपूजादर्शनम्', te: 'పూజా వేదిక ప్రత్యక్ష ప్రసారం', ta: 'வழிபாட்டு பீடத்தின் நேரலை ஒளிபரப்பு', mr: 'थेट पूजा विधी दर्शन', gu: 'લાઈવ પૂજા દર્શન' },
  'Personalized Sankalpa with devotee\'s name and Gotra recited live': { en: 'Personalized Sankalpa with devotee\'s name and Gotra recited live', hi: 'भक्त के नाम और गोत्र के साथ लाइव संकल्प पाठ', sa: 'नामगोत्रसहितः वैयक्तिकसङ्कल्पः', te: 'భక్తుని పేరు, గోత్రాలతో ప్రత్యక్ష సంకల్పం', ta: 'பெயர், கோத்திரம் அர்ச்சனை நேரலை', mr: 'गोत्र व नाव संकल्प', gu: 'ગોત્ર અને નામ સંકલ્પ' },
  'Instructions for the devotee to perform simple interactive steps at home': { en: 'Instructions for the devotee to perform simple interactive steps at home', hi: 'घर पर सरल पूजा विधि संपन्न करने के निर्देश', sa: 'गृहपूजननिर्देशाः', te: 'ఇంట్లో పూజ చేసేందుకు సులభమైన సూచనలు', ta: 'வீட்டில் இருந்தபடி பூஜை செய்ய வழிகாட்டுதல்', mr: 'घरी साधी पूजा विधी सूचना', gu: 'ઘરે સરળ પૂજા વિધિ સૂચના' },
  'Digital receipt of sacred threads and prasadam shipped globally': { en: 'Digital receipt of sacred threads and prasadam shipped globally', hi: 'दुनिया भर में भेजे जाने वाले रक्षा सूत्र और प्रसाद की डिजिटल रसीद', sa: 'प्रसादाप्रेषणम्', te: 'రక్షా సూత్రం, ప్రసాదం కొరియర్ ద్వారా పంపడం', ta: 'பிரசாதம் தபாலில் அனுப்பி வைத்தல்', mr: 'रक्षा सूत्र आणि प्रसाद घरपोच सेवा', gu: 'રક્ષા સૂત્ર અને પ્રસાદ ઘરબેઠા સેવા' },
  'Sanskrit mantra translation explained clearly during the broadcast': { en: 'Sanskrit mantra translation explained clearly during the broadcast', hi: 'सीधे प्रसारण के दौरान संस्कृत मंत्रों का अर्थ स्पष्ट रूप से समझाना', sa: 'मन्त्रार्थस्पष्टीकरणम्', te: 'పూజా సమయంలో సంస్కృత మంత్రాల అర్థం వివరించడం', ta: 'மந்திரங்களின் பொருள் விளக்கம் தருதல்', mr: 'संस्कृत मंत्रांचा अर्थ सांगणे', gu: 'સંસ્કૃત મંત્રોનો અર્થ સમજાવવો' },
  'Astrological constellation (Nakshatra) and name-letter calculation': { en: 'Astrological constellation (Nakshatra) and name-letter calculation', hi: 'ज्योतिषीय नक्षत्र और नाम-अक्षर की गणना', sa: 'नक्षत्रनामकरणगणनम्', te: 'నక్షత్రం మరియు నామాక్షర గణన', ta: 'நட்சத்திரம் மற்றும் பெயரின் முதல் எழுத்து கணித்தல்', mr: 'नक्षत्र व नावाचे अक्षर काढणे', gu: 'નક્ષત્ર અને નામનું અક્ષર ગણવું' },
  'Whispering of the chosen name into the child\'s right ear': { en: 'Whispering of the chosen name into the child\'s right ear', hi: 'शिशु के दाहिने कान में चयनित नाम का उच्चारण (फूंकना)', sa: 'कर्णमूलनाममन्त्रोच्चारणम्', te: 'శిశువు కుడి చెవిలో పేరు పలకడం', ta: 'குழந்தையின் காதில் பெயர் ஓதுதல்', mr: 'बाळाच्या उजव्या कानात नाव सांगणे', gu: 'બાળકના જમણા કાનમાં નામ કહેવું' },
  'Worship of the Sun god and Mother Earth with the child': { en: 'Worship of the Sun god and Mother Earth with the child', hi: 'शिशु के साथ सूर्य देव और धरती माता का पूजन', sa: 'सूर्यार्चनं भूमिपूजनञ्च', te: 'సూర్య భగవానుని మరియు భూమాత పూజ', ta: 'சூரியன் மற்றும் பூமி தேவி வழிபாடு', mr: 'सूर्यदेव व धरणीमाता पूजन', gu: 'સૂર્યદેવ અને ધરતીમાતા પૂજન' },
  'Blessing ceremony by the family elders and Pandit Ji': { en: 'Blessing ceremony by the family elders and Pandit Ji', hi: 'परिवार के बुजुर्गों और पंडित जी द्वारा आशीर्वाद समारोह', sa: 'आशीर्वचनम्', te: 'పెద్దలు మరియు పండితుల ఆశీర్వచనం', ta: 'பெரியோர்கள் மற்றும் பண்டிதர்கள் ஆசி பெறுதல்', mr: 'मोठ्यांचे व पंडितजींचे आशीर्वाद सोहळा', gu: 'વડીલો અને પંડિતજીના આશીર્વાદ સમારોહ' },
  'Customized Horoscope (Kundali) outline presented on parchment': { en: 'Customized Horoscope (Kundali) outline presented on parchment', hi: 'कागज पर प्रस्तुत हस्तलिखित संक्षिप्त जन्म कुंडली', sa: 'हस्तलिखित जन्मपत्रिका', te: 'హస్తలిఖిత జాతక పత్రం అందజేయడం', ta: 'ஜாதகக் குறிப்பு வழங்குதல்', mr: 'हस्तलिखित जन्मपत्रिका देणे', gu: 'હસ્તલિખિત જન્મપત્રિકા આપવી' },
  'Detailed birth chart (Janam Kundali) plotting': { en: 'Detailed birth chart (Janam Kundali) plotting', hi: 'विस्तृत जन्म कुंडली का निर्माण', sa: 'जन्मपत्रिकालेखनम्', te: 'వివరణాత్మక జాతక చక్ర విశ్లేషణ', ta: 'ஜாதகக் கட்டம் கணித்தல்', mr: 'सविस्तर कुंडली तयार करणे', gu: 'વિગતવાર કુંડળી તૈયાર કરવી' },
  'Dasha analysis (Vimshottari) and planetary transit calculations': { en: 'Dasha analysis (Vimshottari) and planetary transit calculations', hi: 'विंशोत्तरी दशा विश्लेषण और गोचर ग्रहों की गणना', sa: 'दशागोचरफलविचारः', te: 'దశా విశ్లేషణ మరియు గ్రహ సంచార గణన', ta: 'திசா புக்தி மற்றும் கோள் சார பலன்கள்', mr: 'दशा व गोचर ग्रहांचे विश्लेषण', gu: 'દશા અને ગોચર ગ્રહોનું વિશ્લેષણ' },
  'Career trajectory guidance and financial outlook assessments': { en: 'Career trajectory guidance and financial outlook assessments', hi: 'करियर मार्गदर्शन और वित्तीय स्थिति का आकलन', sa: 'आजीविकाधनयोगविचारः', te: 'ఉద్యోగ వ్యాపార భవిష్యత్తు మరియు ఆర్థిక యోగాల విశ్లేషణ', ta: 'வேலைவாய்ப்பு மற்றும் நிதி நிலை வழிகாட்டுதல்', mr: 'करिअर व आर्थिक स्थिती मार्गदर्शन', gu: 'કરિયર અને આર્થિક સ્થિતિ માર્ગદર્શન' },
  'Remedial gemstone advice and custom Mantra recitations': { en: 'Remedial gemstone advice and custom Mantra recitations', hi: 'निवारक रत्न सलाह और अनुकूल मंत्रों का सुझाव', sa: 'रत्नधारणमन्त्रजपपरामर्शः', te: 'గ్రహ దోష నివారణ రత్నాలు మరియు మంత్ర పారాయణాల సూచన', ta: 'தோஷ பரிகார ரத்தினங்கள் மற்றும் மந்திர உபதேசம்', mr: 'रत्न व मंत्र जप सल्ला', gu: 'રત્ન અને મંત્ર જાપ સલાહ' },
  'Gun Milan (marriage compatibility matches) if requested': { en: 'Gun Milan (marriage compatibility matches) if requested', hi: 'अनुरोध पर गुण मिलान (वर-वधू मेलापक)', sa: 'वरवधुगुणमेलनम्', te: 'వివాహ పొంతన కొరకు గుణ మేళనం', ta: 'திருமண பொருத்தம் பார்த்தல்', mr: 'पत्रिका गुण मिलन विधी', gu: 'પત્રિકા ગુણ મિલન વિધિ' },
  'Sankalpa and Shiva invocation rites': { en: 'Sankalpa and Shiva invocation rites', hi: 'सकल्प और भगवान शिव का आह्वान अनुष्ठान', sa: 'शिवपूजासङ्कल्पः', te: 'సంకల్పం మరియు శివ పూజ', ta: 'சங்கல்பம் மற்றும் சிவ பூஜை', mr: 'शिव पूजन व संकल्प', gu: 'શિવ પૂજન અને સંકલ્પ' },
  'Chanting of 11,000 Maha Mrityunjaya Mantras': { en: 'Chanting of 11,000 Maha Mrityunjaya Mantras', hi: '११,००० महामृत्युंजय मंत्रों का जाप', sa: 'अयुतसंख्यकमहामृत्युञ्जयमन्त्रजपः', te: '11,000 మహా మృత్యుంజయ మంత్ర జపం', ta: '11,000 மகா மிருத்யுஞ்சய மந்திர ஜெபம்', mr: '११,००० महामृत्युंजय मंत्र पठण', gu: '૧૧,૦૦૦ મહામૃત્યુંજય મંત્ર પઠન' },
  'Abhishek ritual with sacred herbs and liquids': { en: 'Abhishek ritual with sacred herbs and liquids', hi: 'पवित्र जड़ी-बूटियों और रसों से अभिषेक अनुष्ठान', sa: 'दिव्यजलाभिषेकः', te: 'పవిత్ర మూలికలతో అభిషేకం', ta: 'புனித மூலிகை திரவியங்களால் அபிஷேகம்', mr: 'औषधी द्रव्यांचा शिव अभिषेक', gu: 'ઔષધિઓથી શિવ અભિષેક' },
  'Purifying Havan and energy protection path': { en: 'Purifying Havan and energy protection path', hi: 'पवित्र हवन यज्ञ और रक्षा कवच पाठ', sa: 'हवनयज्ञः रक्षाकवचपाठश्च', te: 'హవన పూజ మరియు రక్షా కవచ పారాయణం', ta: 'ஹோமம் மற்றும் காப்பு பூஜை', mr: 'हवन आणि रक्षा सूत्र पाठ', gu: 'હવન અને રક્ષા કવચ પાઠ' },
  'Ganesh Puja and Navagraha invocation': { en: 'Ganesh Puja and Navagraha invocation', hi: 'गणेश पूजा और नवग्रहों का आह्वान', sa: 'गणेशनवग्रहपूजनम्', te: 'గణేశ పూజ మరియు నవగ్రహ ఆరాధన', ta: 'விநாயகர் மற்றும் நவகிரக வழிபாடு', mr: 'गणेश व नवग्रह आवाहन', gu: 'ગણેश અને નવગ્રહ આવાહન' },
  'Ayushya Homam (fire ritual for long life) performance': { en: 'Ayushya Homam (fire ritual for long life) performance', hi: 'दीर्घायु के लिए आयुष्य होम का आयोजन', sa: 'आयुष्यहोमविधिः', te: 'ఆయుష్య హోమ నిర్వహణ', ta: 'ஆயுள் விருத்தி தரும் ஆயுஷ்ய ஹோமம்', mr: 'आयुष्य होम विधी', gu: 'આયુષ્ય હોમ વિધિ' },
  'Blessing with sacred threads and tilak': { en: 'Blessing with sacred threads and tilak', hi: 'रक्षा सूत्र बंधन और तिलक आशीर्वाद', sa: 'रक्षाबन्धनम् तिलकधारणञ्च', te: 'రక్షా బంధనం మరియు తిలక ధారణ', ta: 'காப்பு கட்டுதல் மற்றும் திலகம் இடுதல்', mr: 'रक्षा सूत्र आणि टिळा आशीर्वाद', gu: 'રક્ષા સૂત્ર અને તિલક આશીર્વાદ' },
  'Aarti and distribution of Prasad': { en: 'Aarti and distribution of Prasad', hi: 'आरती और मंगल प्रसाद वितरण', sa: 'आरतीप्रसादवितरणञ्च', te: 'హారతి మరియు ప్రసాద వితరణ', ta: 'ஆரத்தி மற்றும் பிரசாதம் வழங்குதல்', mr: 'आरती आणि प्रसाद वाटप', gu: 'આરતી અને પ્રસાદ વિતરણ' },
  'Sharda (Books) and Kuber (Treasury) sanctification': { en: 'Sharda (Books) and Kuber (Treasury) sanctification', hi: 'बही-खाता (पुस्तकों) और तिजोरी (कुबेर) का पूजन', sa: 'लेखनीकुबेरपूजनम्', te: 'శరదా పుస్తక పూజ మరియు కుబేర పూజ', ta: 'புத்தகங்கள் மற்றும் கல்லாப்பெட்டி பூஜை', mr: 'वह्या व तिजोरी पूजन', gu: 'ચોપડા અને તિજોરી પૂજન' },
  'Sankalpa and installation of Laxmi-Ganesh deities': { en: 'Sankalpa and installation of Laxmi-Ganesh deities', hi: 'संकल्प और महालक्ष्मी-गणेश की मूर्ति स्थापना', sa: 'महालक्ष्मीगणेशस्थापना', te: 'మహాలక్ష్మీ గణపతి విగ్రహాల స్థాపన', ta: 'லட்சுமி கணபதி விக்ரக பிரதிஷ்டை', mr: 'लक्ष्मी-गणेश मूर्ती स्थापना', gu: 'લક્ષ્મી-ગણેશ મૂર્તિ સ્થાપના' },
  'Chanting of Sri Suktam and Lakshmi Ashtothram': { en: 'Chanting of Sri Suktam and Lakshmi Ashtothram', hi: 'श्रीसूक्त पाठ और लक्ष्मी अष्टोत्तर शतनामवली जाप', sa: 'श्रीसूक्तपाठः लक्ष्म्यष्टोत्तरजपः', te: 'శ్రీ సూక్త పారాయణం మరియు లక్ష్మీ అష్టోత్తర శతనామ జపం', ta: 'ஸ்ரீ சூக்தம் மற்றும் லட்சுமி அஷ்டோத்திரம்', mr: 'श्री सुक्त व लक्ष्मी पठण', gu: 'શ્રી સૂક્ત અને લક્ષ્મી પાઠ' },
  'Maha Aarti and lighting of traditional clay diyas': { en: 'Maha Aarti and lighting of traditional clay diyas', hi: 'महाआरती और पारंपरिक मिट्टी के दीयों का प्रज्वलन', sa: 'महादीपप्रज्वलनम्', te: 'మంగళ హారతి మరియు మట్టి ప్రమిదల దీపారాధన', ta: 'மகா ஆரத்தி மற்றும் தீபங்கள் ஏற்றுதல்', mr: 'महाआरती व पणत्या लावणे', gu: 'મહાઆરતી અને દીવા પ્રગટાવવા' },
  'Invocation of Goddess Saraswati (Vidhya Devi)': { en: 'Invocation of Goddess Saraswati (Vidhya Devi)', hi: 'विद्या की देवी माँ सरस्वती का आह्वान', sa: 'भगवतीसरस्वतीआवाहनम्', te: 'శ్రీ శారదా దేవి ఆవాహన', ta: 'சரஸ்வதி தேவி ஆவாஹனம்', mr: 'सरस्वती देवी आवाहन', gu: 'સરસ્વતી દેવી આવાહન' },
  'Worship of books, musical instruments, and study materials': { en: 'Worship of books, musical instruments, and study materials', hi: 'पुस्तकों, संगीत वाद्यों और अध्ययन सामग्री का पूजन', sa: 'पुस्तकानां वादित्राणाञ्च पूजनम्', te: 'పుస్తకాలు, సంగీత వాయిద్యాల పూజ', ta: 'புத்தகங்கள் மற்றும் இசைக்கருவிகள் பூஜை', mr: 'वह्या व वाद्यांचे पूजन', gu: 'ચોપડા અને વાજિંત્રો પૂજન' },
  'Chanting of Saraswati Stotram and Medha Suktam': { en: 'Chanting of Saraswati Stotram and Medha Suktam', hi: 'सरस्वती स्तोत्र और मेधा सूक्त का पाठ', sa: 'सरस्वतीस्तोत्र मेधासूक्तपाठः', te: 'సరస్వతీ స్తోత్రం మరియు మేధా సూక్త పారాయణం', ta: 'சரஸ்வதி ஸ்தோத்திரம் மற்றும் மேதா சூக்தம்', mr: 'सरस्वती स्तोत्र पठण', gu: 'સરસ્વતી સ્તોત્ર પઠન' },
  'Pushpanjali and distributing pure sweet yellow rice Prasad': { en: 'Pushpanjali and distributing pure sweet yellow rice Prasad', hi: 'पुष्पांजलि और मीठे पीले चावल का प्रसाद वितरण', sa: 'पुष्पाञ्जलिः हरिद्रान्नप्रसादवितरणञ्च', te: 'pushపాంజలి మరియు పసుపు రంగు తీపి అన్నం ప్రసాదం', ta: 'புஷ்பாஞ்சலி மற்றும் சர்க்கரை பொங்கல் பிரசாதம்', mr: 'पुष्पांजली व गोड भात प्रसाद', gu: 'પુષ્પાંજલિ અને પીળા ભાતનો પ્રસાદ' },
  'Ganesh Pratishthapana and invocation mantras': { en: 'Ganesh Pratishthapana and invocation mantras', hi: 'गणपति स्थापना और प्राण प्रतिष्ठा मंत्र पाठ', sa: 'श्रीगणेशप्राणप्रतिष्ठा', te: 'శ్రీ వినాయక ప్రతిష్టాపన', ta: 'விநாயகர் பிரதிஷ்டை மற்றும் மந்திரங்கள்', mr: 'गणेश प्राणप्रतिष्ठा मंत्र', gu: 'ગણેશ પ્રાણપ્રતિષ્ઠા મંત્ર' },
  'Virtual live one-on-one HD video feed of the altar': { en: 'Virtual live one-on-one HD video feed of the altar', hi: 'पूजा वेदी का लाइव ऑनलाइन एचडी वीडियो प्रसारण', sa: 'प्रत्यक्षपूजादर्शनम्', te: 'పూజా వేదిక ప్రత్యక్ష ప్రసారం', ta: 'வழிபாட்டு பீடத்தின் நேரலை ஒளிபரப்பு', mr: 'थेट पूजा विधी दर्शन', gu: 'લાઈવ પૂજા દર્શન' },
  'Gotra and name-based Sankalpa recited live': { en: 'Gotra and name-based Sankalpa recited live', hi: 'गोत्र और नाम पर आधारित लाइव संकल्प पाठ', sa: 'गोत्रनामसहितसङ्कल्पः', te: 'పేరు, గోత్రాలతో ప్రత్యక్ష సంకల్పం', ta: 'பெயர் மற்றும் கோத்திர அர்ச்சனை நேரலை', mr: 'गोत्र व नाव संकल्प', gu: 'ગોત્ર અને નામ સંકલ્પ' },
  'Instructions for performing simple steps at home': { en: 'Instructions for performing simple steps at home', hi: 'घर पर सरल पूजा विधि संपन्न करने के निर्देश', sa: 'गृहपूजननिर्देशाः', te: 'ఇంట్లో పూజ చేసేందుకు సులభమైన సూచనలు', ta: 'வீட்டில் இருந்தபடி பூஜை செய்ய வழிகாட்டுதல்', mr: 'घरी साधी पूजा विधी सूचना', gu: 'ઘરે સરળ પૂજા વિધિ સૂચના' },
  'Kanyadaan, Panigrahana, and Lajahoma rituals': { en: 'Kanyadaan, Panigrahana, and Lajahoma rituals', hi: 'कन्यादान, पाणिग्रहण और लाजाहोम अनुष्ठान', sa: 'कन्यादान-पाणिग्रहण-लाजाहोमविधी', te: 'కన్యాదానం, పాణిగ్రహణం, లాజా హోమం', ta: 'கன்னிகாதானம், பாணிக்கிரகணம், லாஜாஹோமம்', mr: 'कन्यादान व विवाह विधी', gu: 'કન્યાદાન અને લગ્ન વિધિ' },
  'Saptapadi (Seven Steps) and Mangalsutra Bandhan path': { en: 'Saptapadi (Seven Steps) and Mangalsutra Bandhan path', hi: 'सप्तपदी (सात फेरे) और मंगलसूत्र बंधन विधि', sa: 'सप्तपदी मङ्गलसूत्रबन्धनञ्च', te: 'సప్తపది (ఏడు అడుగులు) మరియు మంగళసూత్ర ధారణ', ta: 'சப்தபதி (ஏழு அடிகள்) மற்றும் தாலி கட்டுதல்', mr: 'सप्तपदी व मंगळसूत्र बंधन', gu: 'સપ્તપદી અને મંગળસૂત્ર બંધન' },
  'Vedic chants for family longevity and companion harmony': { en: 'Vedic chants for family longevity and companion harmony', hi: 'दांपत्य मधुरता और सुखद दांपत्य जीवन के लिए वैदिक मंत्रोच्चार', sa: 'दाम्पत्यसुखाय वैदिकमन्त्रोच्चारः', te: 'దాంపత్య అనుకూలత మరియు దీర్ఘాయువు కొరకు వేద మంత్రాలు', ta: 'வேத மந்திரங்கள் மற்றும் தம்பதியர் ஆசி', mr: 'दाम्पत्य सुखासाठी मंत्र पठण', gu: 'દામ્પત્ય સુખ માટે મંત્ર પઠન' },
  'Sindoor ceremony and final couples blessings': { en: 'Sindoor ceremony and final couples blessings', hi: 'सिंदूर दान रस्म और नवदंपति का अंतिम आशीर्वाद समारोह', sa: 'सिन्दूरदानं वरवधूआशीर्वादश्च', te: 'సింధూర ధారణ మరియు దంపతులకు ఆశీర్వచనం', ta: 'குங்குமம் இடுதல் மற்றும் தம்பதியர் ஆசி', mr: 'सिंदूरदान व जोडप्याला आशीर्वाद', gu: 'સિંદૂરદાન અને દંપતીને આશીર્વાદ' },
  'Ganesh Puja and doorway sanctification (Toran/Swastik)': { en: 'Ganesh Puja and doorway sanctification (Toran/Swastik)', hi: 'गणेश पूजन और द्वार पवित्रीकरण (तोरण/स्वास्तिक)', sa: 'द्वारतोरणगणेशपूजनम्', te: 'ద్వార పూజ, తోరణాలు మరియు స్వస్తిక స్థాపన', ta: 'விநாயகர் பூஜை மற்றும் தோரணம் கட்டுதல்', mr: 'गणेश व मुख्य प्रवेशद्वार पूजन', gu: 'ગણેશ અને મુખ્ય પ્રવેશદ્વાર પૂજન' },
  'Vastu Purush and Lakshmi invocation path': { en: 'Vastu Purush and Lakshmi invocation path', hi: 'वास्तु पुरुष और महालक्ष्मी का आह्वान पाठ', sa: 'वास्तुपुरुषमहालक्ष्मीपूजनम्', te: 'వాస్తు పురుష మరియు మహాలక్ష్మీ ఆవాహన', ta: 'வாస్తు புருஷன் மற்றும் லட்சுமி பூஜை', mr: 'वास्तु आणि लक्ष्मी पूजन', gu: 'વાસ્તુ અને લક્ષ્મી પૂજન' },
  'Saraswati worship for account books and registers': { en: 'Saraswati worship for account books and registers', hi: 'लेखा बहियों और पंजिकाओं का सरस्वती पूजन', sa: 'लेखनीपूजनम्', te: 'ఖాతా పుస్తకాలు మరియు రిజిస్టర్ల పూజ', ta: 'கணக்குப் புத்தகங்கள் சரஸ்வதி பூஜை', mr: 'खाते वह्यांचे पूजन', gu: 'ચોપડા પૂજન' },
  'Havan and holy water sprinkling across the workplace': { en: 'Havan and holy water sprinkling across the workplace', hi: 'हवन यज्ञ और कार्यक्षेत्र में गंगाजल छिड़काव (प्रोक्षण)', sa: ' कार्यस्थलप्रोक्षणम्', te: 'కార్యాలయంలో హవనం మరియు పుణ్యాహవాచనం', ta: 'ஹோமம் மற்றும் புனித நீர் தெளித்தல்', mr: 'हवन व पवित्र पाणी शिंपडणे', gu: 'હવન અને પવિત્ર જળ છાંટવું' }
,
  'How do I verify the Pandit\'s credentials?': {
    en: 'How do I verify the Pandit\'s credentials?',
    hi: 'मैं पंडित जी की योग्यता कैसे सत्यापित करूँ?',
    sa: 'अहं पण्डितस्य योग्यतां कथं सत्यापयेयम्?',
    mr: 'मी पंडितजींची क्रेडेन्शियल कशी पडताळू?',
    gu: 'હું પંડિતજીની લાયકાત કેવી રીતે ચકાસી શકું?',
    te: 'How do I verify the Pandit\'s credentials?',
    ta: 'How do I verify the Pandit\'s credentials?'
  },
  'All our Pandits are certified from reputed Vedic institutions (such as Sampurnanand Sanskrit Vishwavidyalaya) and undergo a rigorous background check. You can view their profiles and credentials in the About section.': {
    en: 'All our Pandits are certified from reputed Vedic institutions (such as Sampurnanand Sanskrit Vishwavidyalaya) and undergo a rigorous background check. You can view their profiles and credentials in the About section.',
    hi: 'हमारे सभी पंडित प्रतिष्ठित वैदिक संस्थानों (जैसे संपूर्णानंद संस्कृत विश्वविद्यालय) से प्रमाणित हैं और एक कड़े बैकग्राउंड चेक से गुजरते हैं। आप अबाउट सेक्शन में उनके प्रोफाइल और क्रेडेंशियल्स देख सकते हैं।',
    sa: 'अस्माकं सर्वे पण्डिताः ख्यातेभ्यः वैदिकसंस्थानेभ्यः (यथा संपूर्णानन्दसंस्कृतविश्वविद्यालयात्) प्रमाणपत्राणि प्राप्तवन्तः। भवान् आचार्य परिचय विभागे पश्यतु।',
    mr: 'आमचे सर्व पंडित नामांकित वैदिक संस्थांमधून प्रमाणित आहेत आणि त्यांची पार्श्वभूमी तपासली जाते. तुम्ही त्यांच्या प्रोफाईल परिचय विभागात पाहू शकता.',
    gu: 'અમારા તમામ પંડિતો પ્રતિષ્ઠિત વૈદિક સંસ્થાઓ (જેમ કે સંપૂર્ણાનંદ સંસ્કૃત વિશ્વવિદ્યાલય) માંથી પ્રમાણિત છે અને બેકગ્રાઉન્ડ ચેકમાંથી પંસાર થાય છે. તમે પરિચય વિભાગમાં તેમની પ્રોફાઇલ અને ઓળખપત્રો જોઈ શકો છો.',
    te: 'All our Pandits are certified from reputed Vedic institutions (such as Sampurnanand Sanskrit Vishwavidyalaya) and undergo a rigorous background check. You can view their profiles and credentials in the About section.',
    ta: 'All our Pandits are certified from reputed Vedic institutions (such as Sampurnanand Sanskrit Vishwavidyalaya) and undergo a rigorous background check. You can view their profiles and credentials in the About section.'
  },
  'Can I book an online/e-Puja?': {
    en: 'Can I book an online/e-Puja?',
    hi: 'क्या मैं ऑनलाइन/ई-पूजा बुक कर सकता हूँ?',
    sa: 'किं अहं यन्त्रसंकेतपूजां (ऑनलाइनपूजां) सङ्कल्पयेयम्?',
    mr: 'मी ऑनलाइन/ई-पूजा बुक करू शकतो का?',
    gu: 'શું હું ઓનલાઇન/ઈ-પૂજા બુક કરાવી શકું?',
    te: 'Can I book an online/e-Puja?',
    ta: 'Can I book an online/e-Puja?'
  },
  'Yes, we provide high-quality video consultations and e-Pujas for clients living abroad or those who prefer remote rituals.': {
    en: 'Yes, we provide high-quality video consultations and e-Pujas for clients living abroad or those who prefer remote rituals.',
    hi: 'हाँ, हम विदेशों में रहने वाले या रिमोट अनुष्ठानों को पसंद करने वाले ग्राहकों के लिए उच्च गुणवत्ता वाले वीडियो परामर्श और ई-पूजा प्रदान करते हैं।',
    sa: 'आम्, विदेशस्थानां भक्तानां कृते वयं उच्चगुणवत्तायुक्तां यन्त्रसंकेतपूजां (ऑनलाइन-पूजां) कारयामः।',
    mr: 'होय, आम्ही परदेशात राहणाऱ्या किंवा दूरस्थ विधींना प्राधान्य देणाऱ्या भक्तांसाठी उच्च दर्जाचे व्हिडिओ सल्लामसलत आणि ई-पूजा प्रदान करतो.',
    gu: 'હા, અમે વિદેશમાં રહેતા અથવા રિમોટ પૂજા પસંદ કરતા ગ્રાહકો માટે ઉચ્ચ ગુણવત્તાવાળી વિડિયો પરામર્શ અને ઈ-પૂજા પ્રદાન કરીએ છીએ.',
    te: 'Yes, we provide high-quality video consultations and e-Pujas for clients living abroad or those who prefer remote rituals.',
    ta: 'Yes, we provide high-quality video consultations and e-Pujas for clients living abroad or those who prefer remote rituals.'
  },
  'What happens in case of cancellation?': {
    en: 'What happens in case of cancellation?',
    hi: 'बुकिंग रद्द करने की स्थिति में क्या होता है?',
    sa: 'यदि अहं सङ्कल्पं निरस्येयं तर्हि किं भविष्यति?',
    mr: 'बुकिंग रद्द केल्यास काय होते?',
    gu: 'બુકિંગ કેન્સલ કરવાના કિસ્સામાં શું થાય છે?',
    te: 'What happens in case of cancellation?',
    ta: 'What happens in case of cancellation?'
  },
  'Cancellations made up to 24 hours prior to the scheduled timing receive a full refund. You can easily reschedule via the Bookings portal.': {
    en: 'Cancellations made up to 24 hours prior to the scheduled timing receive a full refund. You can easily reschedule via the Bookings portal.',
    hi: 'निर्धारित समय से 24 घंटे पहले तक बुकिंग रद्द करने पर पूरा रिफंड मिलता है। आप बुकिंग पोर्टल के माध्यम से आसानी से समय बदल सकते हैं।',
    sa: 'पूजासमयात् २४ होरापूर्वं निरसने पूर्णधनप्रत्यार्पणं लभ्यते। भवान् प्रबन्धन पटले सुगमतया समयपरिवर्तनं कर्तुं शक्नोति।',
    mr: 'वेळापत्रकाच्या २४ तास आधी रद्द केल्यास पूर्ण परतावा मिळतो. तुम्ही बुकिंग पोर्टलद्वारे सहजपणे वेळ बदलू शकता.',
    gu: 'નિર્ધારિત સમયના ૨૪ કલાક પહેલાં કેન્સલ કરવાથી પૂરેપૂરું રિફંડ મળે છે. તમે બુકિંગ પોર્ટલ દ્વારા સરળતાથી સમય બદલી શકો છો.',
    te: 'Cancellations made up to 24 hours prior to the scheduled timing receive a full refund. You can easily reschedule via the Bookings portal.',
    ta: 'Cancellations made up to 24 hours prior to the scheduled timing receive a full refund. You can easily reschedule via the Bookings portal.'
  },
  'The Pandit ji was very knowledgeable and explained the meaning of every mantra during our Griha Pravesh. It felt truly divine.': {
    en: 'The Pandit ji was very knowledgeable and explained the meaning of every mantra during our Griha Pravesh. It felt truly divine.',
    hi: 'पंडित जी बहुत ज्ञानी थे और उन्होंने हमारे गृह प्रवेश के दौरान हर मंत्र का अर्थ समझाया। यह वास्तव में दिव्य महसूस हुआ।',
    sa: 'पण्डित जी बहुज्ञाः आसन् गृहप्रवेशपूजायां मन्त्राणां अर्थं च स्पष्टीकृतवन्तः। दिव्यः अनुभवः जातः।',
    mr: 'पंडितजी खूप ज्ञानी होते आणि त्यांनी आमच्या गृहप्रवेशादरम्यान प्रत्येक मंत्राचा अर्थ स्पष्ट केला. खरोखर दिव्य वाटले.',
    gu: 'પંડિતજી ખૂબ જ જ્ઞાની હતા અને તેમણે અમારા ગૃહ પ્રવેશ દરમિયાન દરેક મંત્રનો અર્થ સમજાવ્યો. ખરેખર દિવ્ય અનુભવ થયો.',
    te: 'The Pandit ji was very knowledgeable and explained the meaning of every mantra during our Griha Pravesh. It felt truly divine.',
    ta: 'The Pandit ji was very knowledgeable and explained the meaning of every mantra during our Griha Pravesh. It felt truly divine.'
  },
  'Seamless booking experience. The team handled everything from Samagri to scheduling. Highly recommended for busy families.': {
    en: 'Seamless booking experience. The team handled everything from Samagri to scheduling. Highly recommended for busy families.',
    hi: 'निर्बाध बुकिंग अनुभव। टीम ने पूजन सामग्री से लेकर शेड्यूलिंग तक सब कुछ संभाला। व्यस्त परिवारों के लिए अत्यधिक अनुशंसित।',
    sa: 'सुगम-सङ्कल्पानुभवः। सामग्रीयोजनातः समयनिर्धारणपर्यन्तं सर्वं तैः सुचारुरूपेण कृतम्। कार्यव्यस्तकुटुम्बानां कृते उत्तमम्।',
    mr: 'सुलभ बुकिंग अनुभव. टीमने साहित्यापासून शेड्यूलिंगपर्यंत सर्व काही हाताळले. व्यस्त कुटुंबांसाठी अत्यंत शिफारसीय.',
    gu: 'સીમલેસ બુકિંગ અનુભવ. ટીમે પૂજા સામગ્રીથી લઈને શેડ્યુલિંગ સુધીનું બધું જ સંભાળ્યું. વ્યસ્ત પરિવારો માટે ખૂબ જ ભલામણ કરેલ.',
    te: 'Seamless booking experience. The team handled everything from Samagri to scheduling. Highly recommended for busy families.',
    ta: 'Seamless booking experience. The team handled everything from Samagri to scheduling. Highly recommended for busy families.'
  },
  'Professionalism at its best. The astrology consultation was insightful and provided great clarity for my business decisions.': {
    en: 'Professionalism at its best. The astrology consultation was insightful and provided great clarity for my business decisions.',
    hi: 'सर्वोत्तम व्यावसायिकता। ज्योतिष परामर्श बहुत ज्ञानवर्धक था और इसने मेरे व्यावसायिक निर्णयों के लिए बहुत स्पष्टता प्रदान की।',
    sa: 'उत्तमं कार्यकौशलम्। ज्योतिषपरामर्शः मम व्यावसायिकनिर्णयेषु महतीं स्पष्टताम् अयच्छत्।',
    mr: 'उत्कृष्ट व्यावसायिकता. ज्योतिष सल्ला खूप मार्गदर्शक होता आणि माझ्या व्यावसायिक निर्णयांसाठी स्पष्टता मिळाली.',
    gu: 'શ્રેષ્ઠ વ્યવસાયીકરણ. જ્યોતિષ પરામર્શ ખૂબ જ સમજદાર હતો અને મારા વ્યવસાયિક નિર્ણયો માટે ઘણી સ્પષ્ટતા આપી.',
    te: 'Professionalism at its best. The astrology consultation was insightful and provided great clarity for my business decisions.',
    ta: 'Professionalism at its best. The astrology consultation was insightful and provided great clarity for my business decisions.'
  },
  // Timeline translations
  'The Early Disciple': {
    en: 'The Early Disciple',
    hi: 'प्रारंभिक शिष्य',
    sa: 'प्रारम्भिकः शिष्यः',
    mr: 'सुरुवातीचा काळ',
    gu: 'પ્રારંભિક શિષ્ય',
    te: 'The Early Disciple',
    ta: 'The Early Disciple'
  },
  'Rigorous training at the Sampurnanand Sanskrit Vishwavidyalaya in traditional Vedic rituals and Sanskrit grammar.': {
    en: 'Rigorous training at the Sampurnanand Sanskrit Vishwavidyalaya in traditional Vedic rituals and Sanskrit grammar.',
    hi: 'संपूर्णानंद संस्कृत विश्वविद्यालय में पारंपरिक वैदिक अनुष्ठानों और संस्कृत व्याकरण का कठोर प्रशिक्षण।',
    sa: 'सम्पूर्णानन्दसंस्कृतविश्वविद्यालये पारम्परिक वैदिकअनुष्ठानानां संस्कृतव्याकरणस्य च गहनम् अध्ययनम्।',
    mr: 'संपूर्णानंद संस्कृत विद्यापीठात पारंपारिक वैदिक विधी आणि संस्कृत व्याकरणाचे कठोर प्रशिक्षण.',
    gu: 'સંપૂર્ણાનંદ સંસ્કૃત વિશ્વવિદ્યાલયમાં પરંપરાગત વૈદિક અનુષ્ઠાનો અને સંસ્કૃત વ્યાકરણની કઠોર તાલીમ.',
    te: 'Rigorous training at the Sampurnanand Sanskrit Vishwavidyalaya in traditional Vedic rituals and Sanskrit grammar.',
    ta: 'Rigorous training at the Sampurnanand Sanskrit Vishwavidyalaya in traditional Vedic rituals and Sanskrit grammar.'
  },
  'Head Priest Appointment': {
    en: 'Head Priest Appointment',
    hi: 'मुख्य पुरोहित नियुक्ति',
    sa: 'मुख्यपुरोहित पदग्रहणम्',
    mr: 'मुख्य पुरोहित म्हणून नियुक्ती',
    gu: 'મુખ્ય પુરોહિત નિયુક્તિ',
    te: 'Head Priest Appointment',
    ta: 'Head Priest Appointment'
  },
  'Served as the lead Acharya for the Sri Kashi Vishwanath temple ceremonies, managing large-scale Mahayagnas.': {
    en: 'Served as the lead Acharya for the Sri Kashi Vishwanath temple ceremonies, managing large-scale Mahayagnas.',
    hi: 'श्री काशी विश्वनाथ मंदिर के अनुष्ठानों के लिए मुख्य आचार्य के रूप में सेवा की, बड़े पैमाने पर महायज्ञों का प्रबंधन किया।',
    sa: 'श्री काशीविश्वनाथमन्दिरे मुख्य आचार्यत्वेन सेवाकृता, महायज्ञानां प्रबन्धनं च कृतम्।',
    mr: 'श्री काशी विश्वनाथ मंदिर विधीसाठी मुख्य आचार्य म्हणून सेवा केली, मोठ्या प्रमाणावर महायज्ञ व्यवस्थापित केले.',
    gu: 'શ્રી કાશી વિશ્વનાથ મંદિરના અનુષ્ઠાનો માટે મુખ્ય આચાર્ય તરીકે સેવા આપી, મોટા પાયે મહાયજ્ઞોનું સંચાલન કર્યું.',
    te: 'Served as the lead Acharya for the Sri Kashi Vishwanath temple ceremonies, managing large-scale Mahayagnas.',
    ta: 'Served as the lead Acharya for the Sri Kashi Vishwanath temple ceremonies, managing large-scale Mahayagnas.'
  },
  'Global Spiritual Consultant': {
    en: 'Global Spiritual Consultant',
    hi: 'वैश्विक आध्यात्मिक सलाहकार',
    sa: 'वैश्विक आध्यात्मिक परामर्शदाता',
    mr: 'जागतिक आध्यात्मिक सल्लागार',
    gu: 'વૈશ્વિક આધ્યાત્મિક સલાહકાર',
    te: 'Global Spiritual Consultant',
    ta: 'Global Spiritual Consultant'
  },
  'Established "Pooja Pandit" to facilitate authentic religious services globally, integrating modern technology with tradition.': {
    en: 'Established "Pooja Pandit" to facilitate authentic religious services globally, integrating modern technology with tradition.',
    hi: 'परंपरा के साथ आधुनिक तकनीक को एकीकृत करते हुए वैश्विक स्तर पर प्रामाणिक धार्मिक सेवाएं प्रदान करने के लिए "पूजा पंडित" की स्थापना की।',
    sa: 'परम्परया सह आधुनिकयन्त्रज्ञानं संयोज्य विश्वस्तरे प्रामाणिक धार्मिकसेवा प्रदानाय "पूजा पण्डित" इत्यस्य स्थापना कृता।',
    mr: 'परंपरेसह आधुनिक तंत्रज्ञान एकत्रित करून जागतिक स्तरावर प्रामाणिक धार्मिक सेवा सुलभ करण्यासाठी "पूजा पंडित" ची स्थापना केली.',
    gu: 'પરંપરા સાથે આધુનિક ટેકનોલોજીને સંકલિત કરીને વૈશ્વિક સ્તરે પ્રમાણિક ધાર્મિક સેવાઓ પ્રદાન કરવા માટે "પૂજા પંડિત" ની સ્થાપના કરી.',
    te: 'Established "Pooja Pandit" to facilitate authentic religious services globally, integrating modern technology with tradition.',
    ta: 'Established "Pooja Pandit" to facilitate authentic religious services globally, integrating modern technology with tradition.'
  },
  // Qualifications translations
  'Acharya in Shukla Yajur Veda': {
    en: 'Acharya in Shukla Yajur Veda',
    hi: 'शुक्ल यजुर्वेद में आचार्य',
    sa: 'शुक्लयजुर्वेदे आचार्यः',
    mr: 'शुक्ल यजुर्वेदामध्ये आचार्य',
    gu: 'શુક્લ યજુર્વેદમાં આચાર્ય',
    te: 'Acharya in Shukla Yajur Veda',
    ta: 'Acharya in Shukla Yajur Veda'
  },
  'Post-graduate specialization in ritualistic procedures and hymns.': {
    en: 'Post-graduate specialization in ritualistic procedures and hymns.',
    hi: 'कर्मकांडीय प्रक्रियाओं और भजनों में स्नातकोत्तर विशेषज्ञता।',
    sa: 'वैदिककर्मकाण्डविधीनां मन्त्राणां च स्नातकोत्तरविशेषज्ञता।',
    mr: 'धार्मिक पद्धती आणि स्तोत्रांमध्ये पदव्युत्तर विशेषीकरण.',
    gu: 'ધાર્મિક વિધિઓ અને ભજનોમાં અનુસ્નાતક વિશેષતા.',
    te: 'Post-graduate specialization in ritualistic procedures and hymns.',
    ta: 'Post-graduate specialization in ritualistic procedures and hymns.'
  },
  'Advanced mastery of scriptural rites, mantras, and traditional sacrificial ceremonies.': {
    en: 'Advanced mastery of scriptural rites, mantras, and traditional sacrificial ceremonies.',
    hi: 'शास्त्रोक्त अनुष्ठानों, मंत्रों और पारंपरिक यज्ञ समारोहों पर उन्नत महारत।',
    sa: 'शास्त्रोक्तसंस्काराणां, मन्त्राणा, यज्ञादीनां च प्रगतं ज्ञानम्।',
    mr: 'शास्त्रोक्त विधी, मंत्र आणि पारंपारिक यज्ञ समारंभांवर प्रगत प्रभुत्व.',
    gu: 'શાસ્ત્રોક્ત વિધિઓ, મંત્રો અને પરંપરાગત યજ્ઞ સમારોહ પર અદ્યતન નિપુણતા.',
    te: 'Advanced mastery of scriptural rites, mantras, and traditional sacrificial ceremonies.',
    ta: 'Advanced mastery of scriptural rites, mantras, and traditional sacrificial ceremonies.'
  },
  'Ph.D. in Vedic Studies': {
    en: 'Ph.D. in Vedic Studies',
    hi: 'वैदिक अध्ययन में पी.एच.डी.',
    sa: 'वैदिकअध्ययने विद्यावारिधिः (Ph.D.)',
    mr: 'वैदिक अभ्यासामध्ये पी.एच.डी.',
    gu: 'વૈદિક અભ્યાસમાં પી.એચ.ડી.',
    te: 'Ph.D. in Vedic Studies',
    ta: 'Ph.D. in Vedic Studies'
  },
  'Research on the psychological impact of Mantras on mental well-being.': {
    en: 'Research on the psychological impact of Mantras on mental well-being.',
    hi: 'मानसिक कल्याण पर मंत्रों के मनोवैज्ञानिक प्रभाव पर शोध।',
    sa: 'मानसिकस्वास्थ्याय मन्त्राणां प्रभावस्य उपरि शोधकार्यम्।',
    mr: 'मानसिक आरोग्यावर मंत्रांच्या मानसशास्त्रीय प्रभावावर संशोधन.',
    gu: 'માનસિક સુખાકારી પર મંત્રોની મનોવૈજ્ઞાનિક અસર પર સંશોધન.',
    te: 'Research on the psychological impact of Mantras on mental well-being.',
    ta: 'Research on the psychological impact of Mantras on mental well-being.'
  },
  'Groundbreaking exploration linking classical Vedic sounds to neurological balance and focus.': {
    en: 'Groundbreaking exploration linking classical Vedic sounds to neurological balance and focus.',
    hi: 'शास्त्रीय वैदिक ध्वनियों को न्यूरोलॉजिकल संतुलन और फोकस से जोड़ने वाला अभूतपूर्व अन्वेषण।',
    sa: 'वैदिकध्वनीनां मानसिकसंतुलनेन सह सम्बन्धनिर्धारकं महत्त्वपूर्णं शोधकार्यम्।',
    mr: 'शास्त्रीय वैदिक ध्वनींचा न्यूरोलॉजिकल संतुलन आणि लक्ष केंद्रित करण्याशी संबंध जोडणारे संशोधन.',
    gu: 'શાસ્ત્રીય વૈદિક ધ્વનિઓને ન્યુરોલોજીકલ સંતુલન અને ફોકસ સાથે જોડતી ગ્રાઉન્ડબ્રેકિંગ શોધ.',
    te: 'Groundbreaking exploration linking classical Vedic sounds to neurological balance and focus.',
    ta: 'Groundbreaking exploration linking classical Vedic sounds to neurological balance and focus.'
  },
  'Diploma in Vedic Astrology': {
    en: 'Diploma in Vedic Astrology',
    hi: 'वैदिक ज्योतिष में डिप्लोमा',
    sa: 'वैदिकज्योतिषशास्त्रे डिप्लोमा',
    mr: 'वैदिक ज्योतिषशास्त्रामध्ये पदविका',
    gu: 'વૈદિક જ્યોતિષમાં ડિપ્લોમા',
    te: 'Diploma in Vedic Astrology',
    ta: 'Diploma in Vedic Astrology'
  },
  'Advanced Jyotish calculations and remedial measures.': {
    en: 'Advanced Jyotish calculations and remedial measures.',
    hi: 'उन्नत ज्योतिष गणना और उपचारात्मक उपाय।',
    sa: 'प्रगत ज्योतिर्गणना उपचारात्मक उपायाः च।',
    mr: 'प्रगत ज्योतिष गणना आणि उपचारात्मक उपाय.',
    gu: 'અદ્યતન જ્યોતિષ ગણતરી અને ઉપચારાત્મક પગલાં.',
    te: 'Advanced Jyotish calculations and remedial measures.',
    ta: 'Advanced Jyotish calculations and remedial measures.'
  },
  'Expert calculations of planetary alignments, natal charts, and cosmic balancing.': {
    en: 'Expert calculations of planetary alignments, natal charts, and cosmic balancing.',
    hi: 'ग्रहों के संरेखण, जन्म कुंडली और ब्रह्मांडीय संतुलन की विशेषज्ञ गणना।',
    sa: 'ग्रहदशानां, जन्मकुण्डलीनां च सूक्ष्मगणना वैदुष्यम्।',
    mr: 'ग्रहांची स्थिती, जन्मकुंडली आणि वैश्विक समतोल राखण्याविषयी तज्ज्ञ गणना.',
    gu: 'ગ્રહોની ગોઠવણી, જન્મકુંડળી અને બ્રહ્માંડ સંતુલનની નિષ્ણાત ગણતરી.',
    te: 'Expert calculations of planetary alignments, natal charts, and cosmic balancing.',
    ta: 'Expert calculations of planetary alignments, natal charts, and cosmic balancing.'
  },
  // Achievements translations
  'Sri Kashi Vishwanath': {
    en: 'Sri Kashi Vishwanath',
    hi: 'श्री काशी विश्वनाथ',
    sa: 'श्रीकाशीविश्वनाथः',
    mr: 'श्री काशी विश्वनाथ',
    gu: 'શ્રી કાશી વિશ્વનાથ',
    te: 'Sri Kashi Vishwanath',
    ta: 'Sri Kashi Vishwanath'
  },
  'Lifetime Honorary Member': {
    en: 'Lifetime Honorary Member',
    hi: 'आजीवन मानद सदस्य',
    sa: 'आजीवनं मानदसदस्यः',
    mr: 'आजीवन मानद सदस्य',
    gu: 'આજીવન માનદ સભ્ય',
    te: 'Lifetime Honorary Member',
    ta: 'Lifetime Honorary Member'
  },
  'Member of the Archaka Council for ceremonial consultations at India\'s most holy Shiva temple.': {
    en: 'Member of the Archaka Council for ceremonial consultations at India\'s most holy Shiva temple.',
    hi: 'भारत के सबसे पवित्र शिव मंदिर में अनुष्ठान परामर्श के लिए अर्चक परिषद के सदस्य।',
    sa: 'भारतस्य परमपवित्र शिवधाम्नि अर्चकपरिषदः सदस्यः।',
    mr: 'भारतातील सर्वात पवित्र शिव मंदिरामध्ये विधी सल्लामसलत करण्यासाठी अर्चक परिषदेचे सदस्य.',
    gu: 'ભારતના સૌથી પવિત્ર શિવ મંદિરમાં ધાર્મિક પરામર્શ માટે અર્ચક પરિષદના સભ્ય.',
    te: 'Member of the Archaka Council for ceremonial consultations at India\'s most holy Shiva temple.',
    ta: 'Member of the Archaka Council for ceremonial consultations at India\'s most holy Shiva temple.'
  },
  'Vedic Samman 2021': {
    en: 'Vedic Samman 2021',
    hi: 'वैदिक सम्मान २०२१',
    sa: 'वैदिकसम्मानः २०२१',
    mr: 'वैदिक सन्मान २०२१',
    gu: 'વૈદિક સન્માન ૨૦૨૧',
    te: 'Vedic Samman 2021',
    ta: 'Vedic Samman 2021'
  },
  'Ministry of Culture': {
    en: 'Ministry of Culture',
    hi: 'संस्कृति मंत्रालय',
    sa: 'संस्कृति मन्त्रालयः',
    mr: 'सांस्कृतिक मंत्रालय',
    gu: 'સાંસ્કૃતિક મંત્રાલય',
    te: 'Ministry of Culture',
    ta: 'Ministry of Culture'
  },
  'Awarded for exceptional contribution to Vedic education and the preservation of Sanskrit literature.': {
    en: 'Awarded for exceptional contribution to Vedic education and the preservation of Sanskrit literature.',
    hi: 'वैदिक शिक्षा और संस्कृत साहित्य के संरक्षण में असाधारण योगदान के लिए सम्मानित।',
    sa: 'वैदिकशिक्षायाः संस्कृतसाहित्यस्य च संरक्षणे विशिष्टयोगदानाय पुरस्कृतः।',
    mr: 'वैदिक शिक्षण आणि संस्कृत साहित्याच्या जतनासाठी दिलेल्या असाधारण योगदानाबद्दल सन्मानित.',
    gu: 'વૈદિક શિક્ષણ અને સંસ્કૃત સાહિત્યના સંરક્ષણમાં અસાધારણ યોગદાન બદલ એનાયત.',
    te: 'Awarded for exceptional contribution to Vedic education and the preservation of Sanskrit literature.',
    ta: 'Awarded for exceptional contribution to Vedic education and the preservation of Sanskrit literature.'
  },
  'Tirumala Associate': {
    en: 'Tirumala Associate',
    hi: 'तिरुमला सहयोगी',
    sa: 'तिरुमला सहयोगी',
    mr: 'तिरुमला सहयोगी',
    gu: 'તિરુમલા સહયોગી',
    te: 'Tirumala Associate',
    ta: 'Tirumala Associate'
  },
  'Visiting Scholar': {
    en: 'Visiting Scholar',
    hi: 'अतिथि विद्वान',
    sa: 'आमन्त्रित विद्वान्',
    mr: 'भेट देणारे विद्वान',
    gu: 'મુલાકાતી વિદ્વાન',
    te: 'Visiting Scholar',
    ta: 'Visiting Scholar'
  },
  'Visiting scholar for Srivari Seva and spiritual workshops in Andhra Pradesh.': {
    en: 'Visiting scholar for Srivari Seva and spiritual workshops in Andhra Pradesh.',
    hi: 'आंध्र प्रदेश में श्रीवारी सेवा और आध्यात्मिक कार्यशालाओं के लिए अतिथि विद्वान।',
    sa: 'आन्ध्रप्रदेशे श्रीवारीसेवायां आध्यात्मिकगोष्ठीषु च आमन्त्रितविद्वान्।',
    mr: 'आंध्रे प्रदेशात श्रीवारी सेवा आणि आध्यात्मिक कार्यशाळेसाठी आमंत्रित विद्वान.',
    gu: 'આંધ્રપ્રદેશમાં શ્રીવારી સેવા અને આધ્યાત્મિક વર્કશોપ માટે મુલાકાતી વિદ્વાન.',
    te: 'Visiting scholar for Srivari Seva and spiritual workshops in Andhra Pradesh.',
    ta: 'Visiting scholar for Srivari Seva and spiritual workshops in Andhra Pradesh.'
  },
  'Authored 3 Texts': {
    en: 'Authored 3 Texts',
    hi: '३ पुस्तकों के लेखक',
    sa: 'त्रयाणां ग्रन्थानां रचयिता',
    mr: '३ ग्रंथांचे लेखक',
    gu: '૩ પુસ્તકોના લેખક',
    te: 'Authored 3 Texts',
    ta: 'Authored 3 Texts'
  },
  'Published Guides': {
    en: 'Published Guides',
    hi: 'प्रकाशित मार्गदर्शिकाएँ',
    sa: 'प्रकाशित मार्गदर्शिकाः',
    mr: 'प्रकाशित मार्गदर्शक पुस्तके',
    gu: 'પ્રકાશિત માર્ગદર્શિકાઓ',
    te: 'Published Guides',
    ta: 'Published Guides'
  },
  'Published comprehensive guides on "The Science of Yagna" and "Daily Vedic Shlokas".': {
    en: 'Published comprehensive guides on "The Science of Yagna" and "Daily Vedic Shlokas".',
    hi: '"यज्ञ का विज्ञान" और "दैनिक वैदिक श्लोक" पर व्यापक मार्गदर्शिकाएँ प्रकाशित।',
    sa: '"यज्ञ विज्ञान" एवं "दैनिक वैदिक श्लोक" पुस्तकानां प्रकाशनम् कृतम्।',
    mr: '"यज्ञाचे विज्ञान" आणि "दैनिक वैदिक श्लोक" या विषयांवर व्यापक मार्गदर्शक पुस्तके प्रकाशित.',
    gu: '"યજ્ઞનું વિજ્ઞાન" અને "દૈનિક વૈદિક શ્લોક" પર વ્યાપક માર્ગદર્શિકાઓ પ્રકાશિત.',
    te: 'Published comprehensive guides on "The Science of Yagna" and "Daily Vedic Shlokas".',
    ta: 'Published comprehensive guides on "The Science of Yagna" and "Daily Vedic Shlokas".'
  },
  // Languages levels
  'Native/Sacred': {
    en: 'Native/Sacred',
    hi: 'मातृभाषा/पवित्र',
    sa: 'मातृभाषा/पवित्रा',
    mr: 'मातृभाषा/पवित्र',
    gu: 'માતૃભાષા/પવિત્ર',
    te: 'Native/Sacred',
    ta: 'Native/Sacred'
  },
  'Native': {
    en: 'Native',
    hi: 'मातृभाषा',
    sa: 'मातृभाषा',
    mr: 'मातृभाषा',
    gu: 'માતૃભાષા',
    te: 'Native',
    ta: 'Native'
  },
  'Fluent': {
    en: 'Fluent',
    hi: 'धाराप्रवाह',
    sa: 'धाराप्रवाही',
    mr: 'अस्खलित',
    gu: 'અસ્ખલિત',
    te: 'Fluent',
    ta: 'Fluent'
  },


};

export function t(key: string, lang: Language): string {
  if (!key) return '';
  
  const normalize = (s: string) => s.replace(/\\/g, '').replace(/[\u2018\u2019']/g, "'").trim();
  const normalizedKey = normalize(key);
  
  // Try exact lookup first for performance
  if (TRANSLATIONS[key] && TRANSLATIONS[key][lang]) {
    return TRANSLATIONS[key][lang];
  }
  
  // Search normalized keys
  for (const k in TRANSLATIONS) {
    if (normalize(k) === normalizedKey) {
      if (TRANSLATIONS[k][lang]) {
        return TRANSLATIONS[k][lang];
      }
      if (TRANSLATIONS[k]['en']) {
        return TRANSLATIONS[k]['en'];
      }
    }
  }
  
  if (TRANSLATIONS[key] && TRANSLATIONS[key]['en']) {
    return TRANSLATIONS[key]['en'];
  }

  return key;
}
