import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ASSET_BASE = 'https://raw.githubusercontent.com/millitheplug/Deriavic-Design-Hub/main/attached_assets/generated_images';
const expertiseImage = `${ASSET_BASE}/expertise.jpg`;
const fallbackImage = `${ASSET_BASE}/about-designer.jpg`;

const services = [
  { id: '01', title: 'Bespoke Couture Design' },
  { id: '02', title: 'Ready-to-Wear Collections' },
  { id: '03', title: 'Bridal & Event Styling' },
  { id: '04', title: 'Fashion Illustration & Concept' },
  { id: '05', title: 'Brand Identity & Lookbook' },
  { id: '06', title: 'Custom Embroidery & Embellishment' },
  { id: '07', title: 'Fashion Consulting' },
];

export function ServicesAccordion() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background relative" id="services">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div className="mb-16 md:mb-24" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tighter">Expertise</h2>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-12 relative">
          <div className="w-full md:w-3/5 border-t border-white/10">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="group border-b border-white/10 py-6 md:py-8 cursor-pointer flex items-baseline hoverable"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <span className="text-muted-foreground font-mono text-sm mr-8 group-hover:text-primary transition-colors">{service.id}</span>
                <h3 className="text-2xl md:text-4xl font-serif font-medium text-white/80 group-hover:text-white group-hover:translate-x-4 transition-all duration-300">{service.title}</h3>
              </motion.div>
            ))}
          </div>
          <div className="hidden md:block w-2/5 relative h-[600px] flex items-center justify-center pointer-events-none sticky top-32">
            <AnimatePresence>
              {hoveredIndex !== null && (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  className="absolute w-full aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border border-white/10"
                >
                  <img
                    src={expertiseImage}
                    alt="Deriavic Apparel craftsmanship and expertise"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.src = fallbackImage; }}
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
