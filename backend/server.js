const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR);
}

const BOOKINGS_FILE = path.join(DATA_DIR, 'bookings.json');
const GALLERY_FILE = path.join(DATA_DIR, 'gallery.json');
const FESTIVALS_FILE = path.join(DATA_DIR, 'festivals.json');

// Helper to read JSON
function readJSON(file, defaults) {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, JSON.stringify(defaults, null, 2));
    return defaults;
  }
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    return defaults;
  }
}

// Helper to write JSON
function writeJSON(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

// Initialize Datasets
const defaultFestivals = [
  {
    id: 'default-holi',
    day: '03',
    monthYear: 'March 2026',
    title: 'Holi - Purnima Puja',
    description: 'A ritual for protection and abundance. Celebrate the triumph of good over evil with special Vedic hymns.',
    titleKey: 'fest.holi.title',
    descKey: 'fest.holi.desc',
    icon: 'Sun',
    color: 'border-l-4 border-[#a04100]'
  },
  {
    id: 'default-navratri',
    day: '19',
    monthYear: 'March 2026',
    title: 'Chaitra Navratri',
    description: '9 days of dedicated worship to Goddess Durga. Book Kalash Sthapana and Kanya Pujan early to secure timings.',
    titleKey: 'fest.navratri.title',
    descKey: 'fest.navratri.desc',
    icon: 'Moon',
    color: 'border-l-4 border-[#a33b38]'
  },
  {
    id: 'default-ramnavami',
    day: '27',
    monthYear: 'March 2026',
    title: 'Ram Navami',
    description: 'Commemorate the birth of Lord Rama with Akhand Ramayan Path and specialized Havan rituals.',
    titleKey: 'fest.ramnavami.title',
    descKey: 'fest.ramnavami.desc',
    icon: 'Award',
    color: 'border-l-4 border-[#735c00]'
  }
];

// Admin Credentials
const ADMIN_CREDENTIALS = {
  email: 'admin@poojapandit.com',
  password: 'dheerajtripathi'
};

// -- ROUTES --

// Admin Login
app.post('/api/admin/login', (req, res) => {
  const { email, password } = req.body;
  if ((email === ADMIN_CREDENTIALS.email || email === 'dheerajtripathi632@gmail.com') && 
      (password === ADMIN_CREDENTIALS.password || password === 'dheeraj@123' || password === 'shastri108')) {
    return res.json({ success: true, token: 'admin-session-token-998877' });
  }
  return res.status(401).json({ success: false, message: 'Invalid credentials' });
});

// Bookings Endpoints
app.get('/api/bookings', (req, res) => {
  const bookings = readJSON(BOOKINGS_FILE, []);
  res.json(bookings);
});

app.post('/api/bookings', (req, res) => {
  const bookings = readJSON(BOOKINGS_FILE, []);
  const newBooking = {
    id: `BK-${Date.now()}`,
    status: 'Pending',
    ...req.body
  };
  bookings.push(newBooking);
  writeJSON(BOOKINGS_FILE, bookings);
  res.status(201).json(newBooking);
});

app.put('/api/bookings/:id/status', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const bookings = readJSON(BOOKINGS_FILE, []);
  const idx = bookings.findIndex(b => b.id === id);
  if (idx !== -1) {
    bookings[idx].status = status;
    writeJSON(BOOKINGS_FILE, bookings);
    return res.json(bookings[idx]);
  }
  res.status(404).json({ error: 'Booking not found' });
});

app.delete('/api/bookings/:id', (req, res) => {
  const { id } = req.params;
  let bookings = readJSON(BOOKINGS_FILE, []);
  bookings = bookings.filter(b => b.id !== id);
  writeJSON(BOOKINGS_FILE, bookings);
  res.json({ success: true });
});

// Gallery Endpoints
app.get('/api/gallery', (req, res) => {
  const gallery = readJSON(GALLERY_FILE, []);
  res.json(gallery);
});

app.post('/api/gallery', (req, res) => {
  const gallery = readJSON(GALLERY_FILE, []);
  const newItem = {
    id: `custom-media-${Date.now()}`,
    ...req.body
  };
  gallery.unshift(newItem);
  writeJSON(GALLERY_FILE, gallery);
  res.status(201).json(newItem);
});

app.delete('/api/gallery/:id', (req, res) => {
  const { id } = req.params;
  let gallery = readJSON(GALLERY_FILE, []);
  gallery = gallery.filter(item => item.id !== id);
  writeJSON(GALLERY_FILE, gallery);
  res.json({ success: true });
});

// Festivals Endpoints
app.get('/api/festivals', (req, res) => {
  const festivals = readJSON(FESTIVALS_FILE, defaultFestivals);
  res.json(festivals);
});

app.post('/api/festivals', (req, res) => {
  const festivals = readJSON(FESTIVALS_FILE, defaultFestivals);
  const newFest = {
    id: `custom-fest-${Date.now()}`,
    ...req.body
  };
  festivals.push(newFest);
  writeJSON(FESTIVALS_FILE, festivals);
  res.status(201).json(newFest);
});

app.put('/api/festivals/:id', (req, res) => {
  const { id } = req.params;
  const festivals = readJSON(FESTIVALS_FILE, defaultFestivals);
  const idx = festivals.findIndex(f => f.id === id);
  if (idx !== -1) {
    festivals[idx] = { ...festivals[idx], ...req.body };
    writeJSON(FESTIVALS_FILE, festivals);
    return res.json(festivals[idx]);
  }
  res.status(404).json({ error: 'Festival not found' });
});

app.delete('/api/festivals/:id', (req, res) => {
  const { id } = req.params;
  let festivals = readJSON(FESTIVALS_FILE, defaultFestivals);
  festivals = festivals.filter(f => f.id !== id);
  writeJSON(FESTIVALS_FILE, festivals);
  res.json({ success: true });
});

app.post('/api/festivals/sync', async (req, res) => {
  const { calendarId, apiKey } = req.body;
  if (!calendarId || !apiKey) {
    return res.status(400).json({ error: 'Calendar ID and API Key required' });
  }
  try {
    const timeMin = new Date().toISOString();
    const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?key=${apiKey}&timeMin=${timeMin}&orderBy=startTime&singleEvents=true`;
    
    // Using dynamic import of node-fetch or native fetch if node v18+ is used
    const fetchResponse = await fetch(url);
    if (!fetchResponse.ok) {
      throw new Error(`Google Calendar API error: ${fetchResponse.statusText}`);
    }
    const data = await fetchResponse.json();
    const events = data.items || [];
    
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const syncedFestivals = events.slice(0, 10).map((event) => {
      const start = event.start.dateTime || event.start.date;
      const d = new Date(start);
      return {
        id: `cal-sync-${event.id}`,
        day: d.getDate().toString().padStart(2, '0'),
        monthYear: `${months[d.getMonth()]} ${d.getFullYear()}`,
        title: event.summary || 'Auspicious Puja Day',
        description: event.description || 'Devotional activities, prayers, and special alignment guidelines.',
        icon: 'Calendar',
        color: 'border-l-4 border-[#a04100]'
      };
    });
    
    const festivals = readJSON(FESTIVALS_FILE, defaultFestivals);
    // Keep custom ones or merge
    const merged = [...syncedFestivals, ...festivals.filter(f => !f.id.startsWith('cal-sync-'))];
    writeJSON(FESTIVALS_FILE, merged);
    res.json(merged);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend Admin Server is running on port ${PORT}`);
});
