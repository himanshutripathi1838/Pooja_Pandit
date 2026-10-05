export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined') {
    if ((window as any).gtag) {
      (window as any).gtag('event', eventName, params);
    }
    if ((window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: eventName,
        ...params
      });
    }
  }
}

export function trackPhoneClick(locationLabel?: string) {
  trackEvent('phone_click', {
    category: 'engagement',
    label: locationLabel || 'phone_call'
  });
}

export function trackWhatsAppClick(locationLabel?: string) {
  trackEvent('whatsapp_click', {
    category: 'engagement',
    label: locationLabel || 'whatsapp_chat'
  });
}

export function trackGenerateLead(formName?: string) {
  trackEvent('generate_lead', {
    category: 'conversion',
    label: formName || 'booking_form'
  });
}
