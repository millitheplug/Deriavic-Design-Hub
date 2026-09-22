import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { useMemo, useState } from 'react';
import { Minus, Plus, Trash2, MessageCircle, Mail, ArrowLeft } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { formatNaira } from '@/lib/products';
import { buildWhatsAppLink, buildMailtoLink } from '@/lib/siteConfig';
import { buildInvoiceText, generateOrderRef, type CustomerDetails } from '@/lib/invoice';

export default function Checkout() {
  const { items, updateQuantity, removeItem, subtotal, clearCart } = useCart();
  const [customer, setCustomer] = useState<CustomerDetails>({
    name: '',
    phone: '',
    address: '',
    notes: '',
  });
  const [orderRef] = useState(() => generateOrderRef());
  const [sent, setSent] = useState(false);

  const canSubmit = items.length > 0 && customer.name.trim() && customer.phone.trim() && customer.address.trim();

  const invoiceText = useMemo(
    () => buildInvoiceText(items, subtotal, customer, orderRef),
    [items, subtotal, customer, orderRef],
  );

  const handleSendWhatsApp = () => {
    if (!canSubmit) return;
    window.open(buildWhatsAppLink(invoiceText), '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  const handleSendEmail = () => {
    if (!canSubmit) return;
    window.location.href = buildMailtoLink(`Deriavic Apparel Order — ${orderRef}`, invoiceText);
    setSent(true);
  };

  if (items.length === 0 && !sent) {
    return (
      <main className="min-h-screen pt-32 pb-24 flex items-center justify-center">
        <div className="text-center max-w-md px-6">
          <h1 className="text-3xl font-serif font-bold text-white mb-4">Your bag is empty</h1>
          <p className="text-muted-foreground mb-8">
            Add a few pieces from the shop before checking out.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-black font-bold hover:scale-105 transition-transform hoverable"
          >
            <ArrowLeft size={16} /> Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  if (sent) {
    return (
      <main className="min-h-screen pt-32 pb-24 flex items-center justify-center">
        <motion.div
          className="text-center max-w-lg px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-primary text-xs font-mono uppercase tracking-[0.3em]">
            Order {orderRef}
          </span>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mt-3 mb-4">
            Almost there
          </h1>
          <p className="text-muted-foreground mb-8">
            If a WhatsApp or email tab just opened, send that message to complete your order —
            our studio will confirm details and arrange payment with you directly in that chat.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              onClick={handleSendWhatsApp}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-bold hover:scale-105 transition-transform hoverable"
            >
              <MessageCircle size={16} /> Open WhatsApp again
            </button>
            <button
              type="button"
              onClick={handleSendEmail}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white font-bold hover:border-primary hover:text-primary transition-all hoverable"
            >
              <Mail size={16} /> Open email again
            </button>
          </div>
          <button
            type="button"
            onClick={() => {
              clearCart();
              setSent(false);
            }}
            className="mt-8 text-sm text-muted-foreground hover:text-white transition-colors hoverable"
          >
            Start a new order
          </button>
        </motion.div>
      </main>
    );
  }

  return (
    <motion.main
      className="min-h-screen pt-32 pb-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 hoverable"
        >
          <ArrowLeft size={16} /> Back to Shop
        </Link>

        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">Checkout</h1>
        <p className="text-muted-foreground mb-12">
          Review your order, then send it straight to our studio.
        </p>

        {/* Cart items */}
        <div className="flex flex-col gap-4 mb-12">
          {items.map((item) => (
            <div
              key={item.product.id}
              className="flex items-center gap-4 p-4 rounded-2xl bg-secondary border border-white/5"
            >
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-20 h-24 object-cover rounded-xl flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <span className="text-primary text-[10px] font-mono uppercase tracking-widest">
                  {item.product.category}
                </span>
                <h3 className="text-white font-serif font-bold leading-tight truncate">
                  {item.product.name}
                </h3>
                <span className="text-muted-foreground text-sm font-mono">
                  {formatNaira(item.product.price)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-white/15 hover:border-primary hover:text-primary transition-all hoverable"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-6 text-center text-white font-mono">{item.quantity}</span>
                <button
                  type="button"
                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-white/15 hover:border-primary hover:text-primary transition-all hoverable"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
              <button
                type="button"
                onClick={() => removeItem(item.product.id)}
                className="text-muted-foreground hover:text-destructive transition-colors p-2 hoverable"
                aria-label="Remove item"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-end mb-12">
          <div className="text-right">
            <span className="text-muted-foreground text-sm block">Subtotal</span>
            <span className="text-white text-2xl font-serif font-bold">{formatNaira(subtotal)}</span>
            <p className="text-muted-foreground text-xs mt-1 max-w-xs">
              Delivery/fitting fees, if any, will be confirmed in chat.
            </p>
          </div>
        </div>

        {/* Customer details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-mono text-primary uppercase tracking-widest">
              Full Name *
            </label>
            <input
              required
              type="text"
              value={customer.name}
              onChange={(e) => setCustomer((c) => ({ ...c, name: e.target.value }))}
              placeholder="Your name"
              className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors hoverable"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-mono text-primary uppercase tracking-widest">
              Phone / WhatsApp *
            </label>
            <input
              required
              type="tel"
              value={customer.phone}
              onChange={(e) => setCustomer((c) => ({ ...c, phone: e.target.value }))}
              placeholder="+234 800 000 0000"
              className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors hoverable"
            />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-xs font-mono text-primary uppercase tracking-widest">
              Delivery Address *
            </label>
            <input
              required
              type="text"
              value={customer.address}
              onChange={(e) => setCustomer((c) => ({ ...c, address: e.target.value }))}
              placeholder="Street, city, state"
              className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors hoverable"
            />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-xs font-mono text-primary uppercase tracking-widest">
              Notes (sizing, colour, occasion date — optional)
            </label>
            <textarea
              rows={3}
              value={customer.notes}
              onChange={(e) => setCustomer((c) => ({ ...c, notes: e.target.value }))}
              placeholder="Anything we should know..."
              className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors resize-none hoverable"
            />
          </div>
        </div>

        {!canSubmit && (
          <p className="text-destructive text-sm mb-6">
            Please fill in your name, phone, and delivery address to continue.
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            disabled={!canSubmit}
            onClick={handleSendWhatsApp}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#25D366] text-white font-bold hover:scale-[1.02] transition-transform disabled:opacity-40 disabled:pointer-events-none hoverable"
          >
            <MessageCircle size={18} /> Send Order via WhatsApp
          </button>
          <button
            type="button"
            disabled={!canSubmit}
            onClick={handleSendEmail}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/15 text-white font-bold hover:border-primary hover:text-primary transition-all disabled:opacity-40 disabled:pointer-events-none hoverable"
          >
            <Mail size={18} /> Email Order
          </button>
        </div>
        <p className="text-muted-foreground text-xs mt-4 text-center sm:text-left">
          This opens WhatsApp or your email app with your order pre-filled — just hit send.
          Payment is arranged directly with our studio in that chat.
        </p>
      </div>
    </motion.main>
  );
}
