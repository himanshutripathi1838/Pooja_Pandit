import { Booking } from './types';
import { UPCOMING_FESTIVALS } from './data';

const API_BASE = '/api';

// Safe fetch wrapper that catches failures and triggers fallbacks
async function safeFetch<T>(url: string, options?: RequestInit, fallbackValue?: T): Promise<T> {
  try {
    const res = await fetch(url, options);
    if (res.ok) {
      return await res.json();
    }
  } catch (e) {
    console.warn(`API call failed for ${url}. Using local fallback.`, e);
  }
  if (fallbackValue !== undefined) {
    return fallbackValue;
  }
  throw new Error(`API call failed for ${url} and no fallback was provided.`);
}

// 1. Admin Login
export async function apiAdminLogin(email: string, password: string): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE}/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success) {
        localStorage.setItem('admin_token', data.token);
        return true;
      }
    }
  } catch (e) {
    console.warn('Backend login unavailable, falling back to local credentials.', e);
  }
  // Local fallback validation
  const cleanEmail = email.trim().toLowerCase();
  const cleanPass = password.trim();
  if ((cleanEmail === 'admin@poojapandit.com' || cleanEmail === 'dheerajtripathi632@gmail.com') && 
      (cleanPass === 'dheerajtripathi' || cleanPass === 'dheeraj@123' || cleanPass === 'shastri108')) {
    localStorage.setItem('admin_token', 'local-session-token');
    return true;
  }
  return false;
}

// 2. Bookings
export async function apiGetBookings(): Promise<Booking[]> {
  const localBookings = JSON.parse(localStorage.getItem('pooja_bookings') || '[]');
  return safeFetch<Booking[]>(`${API_BASE}/bookings`, undefined, localBookings);
}

export async function apiCreateBooking(booking: Partial<Booking>): Promise<Booking> {
  try {
    const res = await fetch(`${API_BASE}/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(booking)
    });
    if (res.ok) {
      const saved = await res.json();
      // Sync local storage copy
      const local = JSON.parse(localStorage.getItem('pooja_bookings') || '[]');
      local.push(saved);
      localStorage.setItem('pooja_bookings', JSON.stringify(local));
      return saved;
    }
  } catch (e) {
    console.warn('API booking create failed, saving locally.', e);
  }

  // Local fallback
  const newBooking: Booking = {
    id: booking.id || `BK-${Date.now()}`,
    status: booking.status || 'Pending',
    customerName: booking.customerName || '',
    customerEmail: booking.customerEmail || '',
    customerPhone: booking.customerPhone || '',
    serviceName: booking.serviceName || '',
    price: booking.price || 0,
    date: booking.date || '',
    timeSlot: booking.timeSlot || '',
    address: booking.address || '',
    city: booking.city || '',
    state: booking.state || '',
    postalCode: booking.postalCode || ''
  };
  const local = JSON.parse(localStorage.getItem('pooja_bookings') || '[]');
  local.push(newBooking);
  localStorage.setItem('pooja_bookings', JSON.stringify(local));
  return newBooking;
}

export async function apiUpdateBookingStatus(id: string, status: 'Confirmed' | 'Pending'): Promise<Booking | null> {
  try {
    const res = await fetch(`${API_BASE}/bookings/${id}/status`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    });
    if (res.ok) {
      const updated = await res.json();
      // Sync local
      let local: Booking[] = JSON.parse(localStorage.getItem('pooja_bookings') || '[]');
      local = local.map(b => b.id === id ? { ...b, status } : b);
      localStorage.setItem('pooja_bookings', JSON.stringify(local));
      return updated;
    }
  } catch (e) {
    console.warn('API booking status update failed, saving locally.', e);
  }

  // Local fallback
  let local: Booking[] = JSON.parse(localStorage.getItem('pooja_bookings') || '[]');
  let matched: Booking | null = null;
  local = local.map(b => {
    if (b.id === id) {
      matched = { ...b, status };
      return matched;
    }
    return b;
  });
  localStorage.setItem('pooja_bookings', JSON.stringify(local));
  return matched;
}

export async function apiDeleteBooking(id: string): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE}/bookings/${id}`, {
      method: 'DELETE'
    });
    if (res.ok) {
      // Sync local
      let local: Booking[] = JSON.parse(localStorage.getItem('pooja_bookings') || '[]');
      local = local.filter(b => b.id !== id);
      localStorage.setItem('pooja_bookings', JSON.stringify(local));
      return true;
    }
  } catch (e) {
    console.warn('API booking deletion failed, doing locally.', e);
  }

  // Local fallback
  let local: Booking[] = JSON.parse(localStorage.getItem('pooja_bookings') || '[]');
  local = local.filter(b => b.id !== id);
  localStorage.setItem('pooja_bookings', JSON.stringify(local));
  return true;
}

// 3. Gallery
export async function apiGetGalleryItems(): Promise<any[]> {
  const localItems = JSON.parse(localStorage.getItem('custom_gallery_items') || '[]');
  return safeFetch<any[]>(`${API_BASE}/gallery`, undefined, localItems);
}

export async function apiAddGalleryItem(item: any): Promise<any> {
  try {
    const res = await fetch(`${API_BASE}/gallery`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    });
    if (res.ok) {
      const saved = await res.json();
      const local = JSON.parse(localStorage.getItem('custom_gallery_items') || '[]');
      local.unshift(saved);
      localStorage.setItem('custom_gallery_items', JSON.stringify(local));
      return saved;
    }
  } catch (e) {
    console.warn('API gallery add failed, saving locally.', e);
  }

  // Local fallback
  const newItem = {
    id: `custom-media-${Date.now()}`,
    ...item
  };
  const local = JSON.parse(localStorage.getItem('custom_gallery_items') || '[]');
  local.unshift(newItem);
  localStorage.setItem('custom_gallery_items', JSON.stringify(local));
  return newItem;
}

export async function apiDeleteGalleryItem(id: string): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE}/gallery/${id}`, {
      method: 'DELETE'
    });
    if (res.ok) {
      const local = JSON.parse(localStorage.getItem('custom_gallery_items') || '[]');
      const filtered = local.filter((item: any) => item.id !== id);
      localStorage.setItem('custom_gallery_items', JSON.stringify(filtered));
      return true;
    }
  } catch (e) {
    console.warn('API gallery delete failed, doing locally.', e);
  }

  // Local fallback
  const local = JSON.parse(localStorage.getItem('custom_gallery_items') || '[]');
  const filtered = local.filter((item: any) => item.id !== id);
  localStorage.setItem('custom_gallery_items', JSON.stringify(filtered));
  return true;
}

// 4. Festivals
export async function apiGetFestivals(): Promise<any[]> {
  const localFestivals = JSON.parse(localStorage.getItem('custom_festivals') || JSON.stringify(UPCOMING_FESTIVALS));
  return safeFetch<any[]>(`${API_BASE}/festivals`, undefined, localFestivals);
}

export async function apiSaveFestival(fest: any): Promise<any> {
  try {
    const isEdit = !!fest.id;
    const url = isEdit ? `${API_BASE}/festivals/${fest.id}` : `${API_BASE}/festivals`;
    const res = await fetch(url, {
      method: isEdit ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fest)
    });
    if (res.ok) {
      const saved = await res.json();
      let local = JSON.parse(localStorage.getItem('custom_festivals') || '[]');
      if (isEdit) {
        local = local.map((f: any) => f.id === fest.id ? saved : f);
      } else {
        local.push(saved);
      }
      localStorage.setItem('custom_festivals', JSON.stringify(local));
      return saved;
    }
  } catch (e) {
    console.warn('API festival save failed, saving locally.', e);
  }

  // Local fallback
  let local = JSON.parse(localStorage.getItem('custom_festivals') || '[]');
  let savedFest = { ...fest };
  if (fest.id) {
    local = local.map((f: any) => f.id === fest.id ? savedFest : f);
  } else {
    savedFest.id = `custom-fest-${Date.now()}`;
    local.push(savedFest);
  }
  localStorage.setItem('custom_festivals', JSON.stringify(local));
  return savedFest;
}

export async function apiDeleteFestival(id: string): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE}/festivals/${id}`, {
      method: 'DELETE'
    });
    if (res.ok) {
      let local = JSON.parse(localStorage.getItem('custom_festivals') || '[]');
      local = local.filter((f: any) => f.id !== id);
      localStorage.setItem('custom_festivals', JSON.stringify(local));
      return true;
    }
  } catch (e) {
    console.warn('API festival delete failed, doing locally.', e);
  }

  // Local fallback
  let local = JSON.parse(localStorage.getItem('custom_festivals') || '[]');
  local = local.filter((f: any) => f.id !== id);
  localStorage.setItem('custom_festivals', JSON.stringify(local));
  return true;
}

export async function apiSyncGoogleCalendar(calendarId: string, apiKey: string): Promise<any[]> {
  try {
    const res = await fetch(`${API_BASE}/festivals/sync`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ calendarId, apiKey })
    });
    if (res.ok) {
      const data = await res.json();
      localStorage.setItem('custom_festivals', JSON.stringify(data));
      return data;
    }
  } catch (e) {
    console.warn('API calendar sync failed, doing local calendar query.', e);
  }

  // Local fallback fetch direct to Google Calendar API
  const timeMin = new Date().toISOString();
  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?key=${apiKey}&timeMin=${timeMin}&orderBy=startTime&singleEvents=true`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Google Calendar Direct Sync Failed');
  }
  const data = await res.json();
  const events = data.items || [];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const synced = events.slice(0, 10).map((event: any) => {
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
  
  // Merge with custom local ones
  const local = JSON.parse(localStorage.getItem('custom_festivals') || '[]');
  const merged = [...synced, ...local.filter((f: any) => !f.id.startsWith('cal-sync-'))];
  localStorage.setItem('custom_festivals', JSON.stringify(merged));
  return merged;
}
