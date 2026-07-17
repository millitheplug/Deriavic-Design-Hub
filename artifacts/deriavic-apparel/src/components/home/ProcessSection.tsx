import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const madeToOrderSteps = [
  {
    step: '01',
    time: 'SESSION: 1HR',
    title: 'Private Consultation',
    description:
      'Meet our creative directors virtually or physically in Ibadan. We discuss silhouettes, fabric palettes, and wedding milestones.',
    tagline: 'Bespoke Inception',
  },
  {
    step: '02',
    time: '1 – 2 WEEKS',
    title: 'Sketching & Fabric Curation',
    description:
      'We supply exclusive custom design illustrations and mail handpicked luxury textile swatches directly to your doorstep globally.',
    tagline: 'Artistic Blueprint',
  },
  {
    step: '03',
    time: '2 – 3 WEEKS',
    title: 'Structuring & Fittings',
    description:
      'Our master artisans construct the inner corset structure. Virtual measurement checks or physical fitting reviews in Ibadan.',
    tagline: 'The Masterful Snatch',
  },
  {
    step: '04',
    time: '3 – 4 WEEKS',
    title: 'Elite Hand-Beading & Crystal Application',
    description:
      'Beads, crystals, and gold threads are individually stitched by hand onto the silk/adire matrix. Over 150 hours of intensive couture work.',
    tagline: 'Opulent Craftsmanship',
  },
  {
    step: '05',
    time: 'EXPRESS DELIVERY',
    title: 'International Unboxing',
    description:
      'Your bespoke dress is sealed in our climate-proof structural trunk box, accompanied by a custom scent signature, and delivered via courier.',
    tagline: 'Cathedral Premium Arrival',
  },
];

const readyToWearSteps = [
  {
    step: '01',
    time: 'IMMEDIATE',
    title: 'Browse and Select',
    description:
      'Explore our limited seasonal collections. Selected pieces are stocked in restricted quantities to preserve brand rarity.',
    tagline: 'Curated Curations',
  },
  {
    step: '02',
    time: '1 – 2 DAYS',
    title: 'Choose Sizing',
    description:
      'Input your basic parameters using our digital measurement assistant. We will tailor adjust standard hemlines accordingly.',
    tagline: 'Standard Charted or Custom',
  },
  {
    step: '03',
    time: '3 – 5 DAYS DELIVERY',
    title: 'Secure Checkout & Ship',
    description:
      'Checkout seamlessly. Pre-tailored garments are premium packed with custom dress boards and dispatched directly from Ibadan.',
    tagline: 'Global DHL Express Dispatch',
  },
];

// ─── Step Card ────────────────────────────────────────────────────────────────

function StepCard({
  step,
  time,
  title,
  description,
  tagline,
  index,
}: {
  step: string;
  time: string;
  title: string;
  description: string;
  tagline: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, type: 'spring', stiffness: 100, damping: 20 }}
      className="flex flex-col justify-between rounded-2xl bg-white/[0.04] border border-white/10 p-6 flex-shrink-0 snap-start w-[80vw] sm:w-[60vw] md:w-auto md:flex-1"
      style={{ minHeight: 240 }}
    >
      {/* Top row */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <span className="text-xs font-mono text-white/40 tracking-widest uppercase">
            STEP {step}
          </span>
          <span className="text-xs font-mono text-primary tracking-wider uppercase bg-primary/10 border border-primary/20 rounded-full px-2.5 py-1 leading-none">
            {time}
          </span>
        </div>

        <h3 className="text-white font-bold text-lg leading-snug mb-3">{title}</h3>
        <p className="text-sm text-white/50 leading-relaxed">{description}</p>
      </div>

      {/* Bottom tagline */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/8">
        <span className="text-xs text-white/30 font-mono italic">{tagline}</span>
        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/15 border border-primary/30">
          <Check size={10} className="text-primary" strokeWidth={3} />
        </span>
      </div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export function ProcessSection() {
  const [tab, setTab] = useState<'mto' | 'rtw'>('mto');

  const steps = tab === 'mto' ? madeToOrderSteps : readyToWearSteps;

  return (
    <section className="py-28 bg-background border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <p className="text-primary text-xs font-mono uppercase tracking-[0.3em] mb-4">
            The Art of Orchestration
          </p>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tight leading-none mb-3">
            The Process
          </h2>
          {/* Gold underline */}
          <div className="mx-auto w-16 h-0.5 bg-primary mb-6" />
          <p className="text-white/50 max-w-lg mx-auto text-sm leading-relaxed">
            Deriavic provides two avenues of elegance: our fast-dispatch global collections, or our
            prestigious private-commission bridal couture and Owanbe statements.
          </p>
        </motion.div>

        {/* Tab toggle */}
        <div className="flex justify-center mb-12">
          <div className="relative flex items-center bg-white/5 border border-white/10 rounded-full p-1 gap-1">
            {(['mto', 'rtw'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 z-10 ${
                  tab === t ? 'text-black' : 'text-white/60 hover:text-white'
                }`}
              >
                {tab === t && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">
                  {t === 'mto' ? 'Made-to-Order' : 'Ready-to-Wear'}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Step cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-row md:flex-row gap-4 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory md:overflow-x-visible scrollbar-hide"
            style={{ scrollbarWidth: 'none' }}
          >
            {steps.map((s, i) => (
              <StepCard key={s.step} {...s} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
