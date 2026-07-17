import { Link } from 'wouter';
import { Instagram, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const couture = [
  { label: 'Bespoke Couture', href: '/works' },
  { label: 'Bridal', href: '/works' },
  { label: 'Aso-Oke', href: '/works' },
  { label: 'Asoebi', href: '/works' },
  { label: 'Ready-to-Wear', href: '/works' },
  { label: 'Ankara', href: '/works' },
  { label: 'Kids', href: '/works' },
  { label: 'Editorial / Shoot', href: '/works' },
  { label: 'Fittings', href: '/works' },
  { label: 'Other Pieces', href: '/works' },
];

const locations = ['Ibadan', 'USA', 'London', 'Canada', 'UK'];

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 relative overflow-hidden">
      {/* Main grid */}
      <div className="container mx-auto px-6 md:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Col 1 — Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80 }}
          >
            <h3 className="text-white font-serif font-bold text-lg tracking-wide mb-3">
              DERIAVIC Apparel
            </h3>
            <p className="text-white/40 text-xs leading-relaxed mb-6 max-w-[220px]">
              High luxury Nigerian bespoke couture, catering to sophisticated brides, dignitaries, and collectors worldwide.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary transition-all duration-200"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Location"
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary transition-all duration-200"
              >
                <MapPin size={14} />
              </a>
              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary transition-all duration-200"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Col 2 — The Ibadan Atelier */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, delay: 0.07 }}
          >
            <h4 className="text-white/80 text-xs font-mono tracking-[0.2em] uppercase mb-5">
              The Ibadan Atelier
            </h4>
            <address className="not-italic text-white/40 text-xs leading-7">
              Agbowo, UI,<br />
              Ibadan, Oyo State, Nigeria.
            </address>
            <p className="text-primary text-xs mt-2 mb-4 cursor-default">
              Physical viewings by invite only
            </p>
            <a
              href="tel:+2348031112222"
              className="text-white/40 text-xs hover:text-white/70 transition-colors"
            >
              ✆ &nbsp;+234 (0) 803 111 2222
            </a>
          </motion.div>

          {/* Col 3 — Couture Segments */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, delay: 0.14 }}
          >
            <h4 className="text-white/80 text-xs font-mono tracking-[0.2em] uppercase mb-5">
              Couture Segments
            </h4>
            <ul className="space-y-2.5">
              {couture.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/40 text-xs hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4 — Global Shipping */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, delay: 0.21 }}
          >
            <h4 className="text-white/80 text-xs font-mono tracking-[0.2em] uppercase mb-5">
              Global Shipping
            </h4>
            <p className="text-white/40 text-xs leading-relaxed">
              Direct secure checkout with tracking credentials. Complimentary international premium trunk boxes for bridal clients. Handled via secure logistics directly from Ibadan, Oyo State.
            </p>
            <div className="mt-6 pt-5 border-t border-white/5">
              <p className="text-white/25 text-[10px] uppercase tracking-widest font-mono mb-2">Navigation</p>
              <div className="flex flex-col gap-2">
                {[
                  ['Works', '/works'],
                  ['About', '/about'],
                  ['Services', '/contact'],
                  ['Make an Enquiry', '/contact'],
                ].map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-white/40 text-xs hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-[10px] font-mono">
            © {new Date().getFullYear()} Deriavic Apparel Limited. All Rights Reserved.&nbsp;
            <span className="text-white/15">Crafted with high prestige.</span>
          </p>
          <div className="flex items-center gap-4">
            {locations.map((loc, i) => (
              <span key={loc} className="flex items-center gap-4">
                <span className="text-primary text-[10px] font-mono tracking-widest uppercase hover:text-primary/70 transition-colors cursor-default">
                  {loc}
                </span>
                {i < locations.length - 1 && (
                  <span className="w-px h-3 bg-white/10" />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
    </footer>
  );
}
