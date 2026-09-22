// Single source of truth for business contact details.
// Used by the Contact page, Footer, and the shop checkout flow so every
// WhatsApp link, phone link, and email link stays in sync.

// E.164 digits only (no "+", no spaces) — required format for wa.me links.
export const WHATSAPP_NUMBER = '2348144869389';

// Human-readable version for display.
export const WHATSAPP_DISPLAY = '+234 814 486 9389';

// Same number, used for tel: links.
export const PHONE_TEL = '+2348144869389';

// Business order/contact email. Sourced from the existing Contact page
// (studio@deriavic.com) — update here if the real inbox differs.
export const CONTACT_EMAIL = 'studio@deriavic.com';

/**
 * Build a wa.me link that opens WhatsApp with a pre-filled message.
 * The recipient still has to tap "Send" — WhatsApp does not allow a website
 * to send a message on someone's behalf without their action.
 */
export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Build a mailto: link that opens the customer's email client with a
 * pre-filled subject and body, addressed to the business email.
 */
export function buildMailtoLink(subject: string, body: string): string {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
