import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageCircle, MapPin, ArrowUpRight, ChevronLeft, ChevronRight, Calendar, X } from 'lucide-react';
import { useState, useRef } from 'react';

// ─── iOS-style Calendar ──────────────────────────────────────────────────────

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function CalendarPicker({
  value,
  onChange,
  onClose,
}: {
  value: Date | null;
  onChange: (d: Date) => void;
  onClose: () => void;
}) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const cells = Array.from({ length: firstDay + daysInMonth }, (_, i) =>
    i < firstDay ? null : i - firstDay + 1
  );

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const isSelected = (d: number) =>
    value &&
    value.getDate() === d &&
    value.getMonth() === viewMonth &&
    value.getFullYear() === viewYear;

  const isToday = (d: number) =>
    today.getDate() === d &&
    today.getMonth() === viewMonth &&
    today.getFullYear() === viewYear;

  const isPast = (d: number) => {
    const date = new Date(viewYear, viewMonth, d);
    return date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="w-full max-w-sm bg-[#1c1c1e] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
        initial={{ y: 60, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 60, opacity: 0, scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <button onClick={prevMonth} className="w-9 h-9 rounded-full hover:bg-white/10 flex items-center justify-center text-white transition-colors">
            <ChevronLeft size={18} />
          </button>
          <div className="text-white font-semibold text-base">
            {MONTHS[viewMonth]} {viewYear}
          </div>
          <button onClick={nextMonth} className="w-9 h-9 rounded-full hover:bg-white/10 flex items-center justify-center text-white transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Day labels */}
        <div className="grid grid-cols-7 px-4 pb-1">
          {DAYS.map(d => (
            <div key={d} className="text-center text-[10px] font-bold text-white/30 uppercase tracking-widest py-1">
              {d}
            </div>
          ))}
        </div>

        {/* Day grid */}
        <div className="grid grid-cols-7 gap-y-1 px-4 pb-4">
          {cells.map((day, i) => (
            <div key={i} className="flex items-center justify-center py-0.5">
              {day ? (
                <button
                  disabled={isPast(day)}
                  onClick={() => { onChange(new Date(viewYear, viewMonth, day)); onClose(); }}
                  className={[
                    'w-9 h-9 rounded-full text-sm font-medium transition-all duration-150',
                    isPast(day) ? 'text-white/20 cursor-not-allowed' :
                    isSelected(day) ? 'bg-[#F5C518] text-black font-bold scale-110 shadow-lg shadow-[#F5C518]/30' :
                    isToday(day) ? 'border border-[#F5C518] text-[#F5C518]' :
                    'text-white hover:bg-white/10',
                  ].join(' ')}
                >
                  {day}
                </button>
              ) : null}
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex border-t border-white/10">
          <button onClick={onClose} className="flex-1 py-4 text-center text-[#F5C518] font-semibold text-sm hover:bg-white/5 transition-colors">
            Done
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Enquiry Form ─────────────────────────────────────────────────────────────

const SERVICES = [
  'Bespoke Couture',
  'Bridal',
  'Aso-Oke',
  'Asoebi',
  'Ready-to-Wear',
  'Ankara',
  'Kids',
  'Editorial / Shoot',
  'Fittings & Alterations',
  'Other',
];

const DELIVERY_OPTIONS = [
  { value: 'pickup', label: 'Pick up in Ibadan', sub: 'Collect from our Ibadan studio (by appointment)' },
  { value: 'local', label: 'Local Delivery — Ibadan', sub: 'We deliver within Ibadan' },
  { value: 'dhl', label: 'Global Shipping — DHL', sub: 'International dispatch, tracked & insured' },
];

function EnquiryForm() {
  const [calOpen, setCalOpen] = useState(false);
  const [neededFor, setNeededFor] = useState<Date | null>(null);
  const [service, setService] = useState('');
  const [delivery, setDelivery] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center py-24 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary flex items-center justify-center mb-8">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F5C518" strokeWidth="2.5">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-3xl font-serif font-bold text-white mb-4">Enquiry received.</h3>
        <p className="text-white/60 max-w-md">
          We'll review your submission and reach out within 48 hours. We can't wait to create something with you.
        </p>
      </motion.div>
    );
  }

  return (
    <>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        {/* Name + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-mono text-primary uppercase tracking-widest">Full Name *</label>
            <input
              required
              type="text"
              placeholder="e.g. Adeola Adeyemi"
              className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors hoverable"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-mono text-primary uppercase tracking-widest">Phone / WhatsApp *</label>
            <input
              required
              type="tel"
              placeholder="+234 800 000 0000"
              className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors hoverable"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono text-primary uppercase tracking-widest">Email Address *</label>
          <input
            required
            type="email"
            placeholder="your@email.com"
            className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors hoverable"
          />
        </div>

        {/* Needed for — iOS calendar */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono text-primary uppercase tracking-widest">Needed for (Date) *</label>
          <button
            type="button"
            onClick={() => setCalOpen(true)}
            className="w-full flex items-center justify-between border-b border-white/20 pb-3 text-white focus:outline-none hover:border-primary transition-colors hoverable text-left group"
          >
            <span className={neededFor ? 'text-white' : 'text-white/30'}>
              {neededFor
                ? neededFor.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
                : 'Select a date'}
            </span>
            <Calendar size={16} className="text-white/30 group-hover:text-primary transition-colors" />
          </button>
        </div>

        {/* Service segment */}
        <div className="flex flex-col gap-3">
          <label className="text-xs font-mono text-primary uppercase tracking-widest">Which Service? *</label>
          <div className="flex flex-wrap gap-2">
            {SERVICES.map(s => (
              <button
                key={s}
                type="button"
                onClick={() => setService(s)}
                className={[
                  'px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 hoverable',
                  service === s
                    ? 'bg-primary text-black border-primary'
                    : 'border-white/15 text-white/70 hover:border-primary/50 hover:text-white',
                ].join(' ')}
              >
                {s}
              </button>
            ))}
          </div>
          {service === 'Other' && (
            <input
              type="text"
              placeholder="Describe the service..."
              className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors mt-2"
            />
          )}
        </div>

        {/* Delivery / Dispatch */}
        <div className="flex flex-col gap-3">
          <label className="text-xs font-mono text-primary uppercase tracking-widest">Collection / Delivery Method *</label>
          <div className="flex flex-col gap-3">
            {DELIVERY_OPTIONS.map(opt => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setDelivery(opt.value)}
                className={[
                  'flex items-start gap-4 p-4 rounded-2xl border text-left transition-all duration-200 hoverable',
                  delivery === opt.value
                    ? 'border-primary bg-primary/5'
                    : 'border-white/10 hover:border-white/20',
                ].join(' ')}
              >
                <div className={[
                  'mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors',
                  delivery === opt.value ? 'border-primary' : 'border-white/30',
                ].join(' ')}>
                  {delivery === opt.value && (
                    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                  )}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{opt.label}</div>
                  <div className="text-white/40 text-xs mt-0.5">{opt.sub}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Delivery address */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono text-primary uppercase tracking-widest">Full Delivery Address *</label>
          <textarea
            required
            rows={3}
            placeholder={delivery === 'pickup' ? "Just type 'Ibadan' — we'll confirm the studio address by WhatsApp" : "Street, City, State, Country, Postal Code"}
            className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors hoverable resize-none"
          />
          {delivery === 'pickup' && (
            <p className="text-xs text-primary/60 mt-1">Just type "Ibadan" — we'll send the studio address over WhatsApp after confirmation.</p>
          )}
        </div>

        {/* Fabric / Pattern discussion */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono text-primary uppercase tracking-widest">Fabric, Pattern & Design Details</label>
          <textarea
            rows={4}
            placeholder="Describe your fabric preferences, patterns, coral bead detailing, color coordinates, Aso-Oke stripe preferences, embroidery, lace type, etc."
            className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors hoverable resize-none"
          />
        </div>

        {/* Requires global shipping toggle */}
        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10">
          <div className="text-primary/80 mt-0.5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </div>
          <div>
            <div className="text-white text-sm font-medium">Requires Global Shipping?</div>
            <div className="text-white/40 text-xs mt-0.5">
              Select "Global Shipping — DHL" above. We dispatch internationally via DHL with full tracking and insurance. Please include your complete international postal address above.
            </div>
          </div>
        </div>

        {/* Any other information */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono text-primary uppercase tracking-widest">Anything else you'd like us to know?</label>
          <textarea
            rows={3}
            placeholder="Inspirations, mood boards, special requests, event context, budget range..."
            className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors hoverable resize-none"
          />
        </div>

        <button
          type="submit"
          className="self-start mt-4 px-10 py-4 rounded-full bg-primary text-black font-bold text-base hover:scale-105 transition-transform hoverable"
        >
          Submit Enquiry
        </button>
      </form>

      <AnimatePresence>
        {calOpen && (
          <CalendarPicker
            value={neededFor}
            onChange={setNeededFor}
            onClose={() => setCalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Contact() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="mb-20 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tighter text-white mb-6 leading-tight">
            Let's create <br/>
            <span className="text-primary italic">something iconic.</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Whether you need a bespoke couture piece, bridal styling, or want to collaborate on a collection — our Ibadan studio is ready to listen.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <motion.a 
            href="mailto:studio@deriavic.com"
            className="group block p-8 md:p-10 rounded-3xl bg-secondary border border-white/5 hover:border-primary/50 transition-all duration-300 hoverable"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, type: "spring" }}
          >
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
              <Mail size={24} />
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-2">Email Us</h3>
            <p className="text-muted-foreground mb-10 text-sm">For general inquiries and press.</p>
            <div className="flex items-center justify-between text-white group-hover:text-primary transition-colors">
              <span className="font-mono text-sm">studio@deriavic.com</span>
              <ArrowUpRight size={18} />
            </div>
          </motion.a>

          <motion.a 
            href="https://wa.me/2348000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-8 md:p-10 rounded-3xl bg-secondary border border-white/5 hover:border-[#25D366]/50 transition-all duration-300 hoverable"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-[#25D366] mb-8 group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-300">
              <MessageCircle size={24} />
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-2">WhatsApp</h3>
            <p className="text-muted-foreground mb-10 text-sm">For quick replies and booking.</p>
            <div className="flex items-center justify-between text-white group-hover:text-[#25D366] transition-colors">
              <span className="font-mono text-sm">+234 800 000 0000</span>
              <ArrowUpRight size={18} />
            </div>
          </motion.a>

          <motion.div 
            className="block p-8 md:p-10 rounded-3xl bg-secondary border border-white/5 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white mb-8">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-2">Studio</h3>
            <p className="text-muted-foreground mb-10 text-sm">By appointment only — Ibadan, Nigeria.</p>
            <div className="text-sm text-white/70 font-mono leading-relaxed">
              Ibadan, Oyo State<br />Nigeria
            </div>
          </motion.div>
        </div>

        {/* Main Enquiry Form */}
        <motion.div 
          className="max-w-3xl border-t border-white/10 pt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              Make an Enquiry / Book a Consultation
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">
              Tell us about your vision.
            </h2>
            <p className="text-white/50">
              Fill out the form below and we'll reach out within 48 hours. The more detail you share, the better we can prepare for our first conversation.
            </p>
          </div>
          <EnquiryForm />
        </motion.div>
      </div>
    </main>
  );
}
