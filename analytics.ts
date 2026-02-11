
/**
 * Click & Earn Analytics Utility
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export const Analytics = {
  pageView: (url: string) => {
    if (window.gtag) {
      window.gtag('config', 'G-XXXXXXXXXX', { page_path: url });
    }
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  },

  trackLead: () => {
    if (window.gtag) {
      window.gtag('event', 'generate_lead', { method: 'Formulário de Captura' });
    }
    if (window.fbq) {
      window.fbq('track', 'Lead');
    }
  },

  trackInitiateCheckout: (value: number = 297.00) => {
    if (window.gtag) {
      window.gtag('event', 'begin_checkout', { value, currency: 'BRL' });
    }
    if (window.fbq) {
      window.fbq('track', 'InitiateCheckout', { value, currency: 'BRL' });
    }
  },

  trackPurchase: (transactionId: string, value: number = 297.00) => {
    if (window.gtag) {
      window.gtag('event', 'purchase', {
        transaction_id: transactionId,
        value: value,
        currency: 'BRL'
      });
    }
    if (window.fbq) {
      window.fbq('track', 'Purchase', { value, currency: 'BRL' });
    }
  },

  // NOVO: Rastreia cliques em botões específicos
  trackButtonClick: (buttonName: string) => {
    if (window.gtag) {
      window.gtag('event', 'click', { event_category: 'button', event_label: buttonName });
    }
  },

  // Fix: Adding the missing trackContact method to resolve the error in ContactPage.tsx
  trackContact: () => {
    if (window.gtag) {
      window.gtag('event', 'contact', { method: 'Formulário de Contato' });
    }
    if (window.fbq) {
      window.fbq('track', 'Contact');
    }
  },

  getUTMs: () => {
    const params = new URLSearchParams(window.location.search);
    return {
      source: params.get('utm_source'),
      medium: params.get('utm_medium'),
      campaign: params.get('utm_campaign')
    };
  }
};
