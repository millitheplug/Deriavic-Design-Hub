import type { CartItem } from '@/contexts/CartContext';
import { formatNaira } from '@/lib/products';

export interface CustomerDetails {
  name: string;
  phone: string;
  address: string;
  notes?: string;
}

/** Simple, human-readable order reference — not a database ID, just a
 *  short code the customer and seller can both refer to in chat. */
export function generateOrderRef(): string {
  const now = new Date();
  const datePart = now.toISOString().slice(0, 10).replace(/-/g, '');
  const randPart = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `DRV-${datePart}-${randPart}`;
}

export function buildInvoiceText(
  items: CartItem[],
  subtotal: number,
  customer: CustomerDetails,
  orderRef: string,
): string {
  const lines: string[] = [];
  lines.push(`DERIAVIC APPAREL — ORDER ${orderRef}`);
  lines.push(new Date().toLocaleString('en-NG', { dateStyle: 'medium', timeStyle: 'short' }));
  lines.push('');
  lines.push('ITEMS');
  for (const item of items) {
    lines.push(
      `${item.quantity} x ${item.product.name} (${item.product.category}) — ${formatNaira(item.product.price)} each = ${formatNaira(item.product.price * item.quantity)}`,
    );
  }
  lines.push('');
  lines.push(`SUBTOTAL: ${formatNaira(subtotal)}`);
  lines.push('(Delivery/fitting fees, if any, to be confirmed in chat.)');
  lines.push('');
  lines.push('CUSTOMER DETAILS');
  lines.push(`Name: ${customer.name}`);
  lines.push(`Phone: ${customer.phone}`);
  lines.push(`Delivery address: ${customer.address}`);
  if (customer.notes?.trim()) {
    lines.push(`Notes: ${customer.notes.trim()}`);
  }
  lines.push('');
  lines.push('Payment to be arranged directly in this chat.');
  return lines.join('\n');
}
