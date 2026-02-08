// Google Analytics 4 event tracking utility
// Set NEXT_PUBLIC_GA_MEASUREMENT_ID in your .env.local file

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

// Track page views
export function pageview(url: string) {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return
  window.gtag?.('config', GA_MEASUREMENT_ID, { page_path: url })
}

// Track custom events
export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return
  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

// Pre-built event helpers for common interactions
export const analytics = {
  // CTA button clicks
  ctaClick: (buttonName: string, section: string) =>
    trackEvent('cta_click', 'engagement', `${buttonName} — ${section}`),

  // Section views (fired when section enters viewport)
  sectionView: (sectionName: string) =>
    trackEvent('section_view', 'scroll', sectionName),

  // Pricing tier clicks
  pricingTierClick: (tierName: string) =>
    trackEvent('pricing_click', 'conversion', tierName),

  // Form interactions
  formStart: () =>
    trackEvent('form_start', 'conversion', 'contact_form'),

  formSubmit: () =>
    trackEvent('form_submit', 'conversion', 'contact_form'),

  formError: (error: string) =>
    trackEvent('form_error', 'conversion', error),

  // FAQ interactions
  faqOpen: (question: string) =>
    trackEvent('faq_open', 'engagement', question),

  // External link clicks
  externalLink: (url: string) =>
    trackEvent('external_click', 'engagement', url),
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}
