import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

// ─── Body Diagram SVG ─────────────────────────────────────────────────────────

function BodyDiagram() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full min-h-[340px] py-6">
      {/* Label */}
      <p className="text-[10px] font-mono text-primary tracking-[0.25em] uppercase mb-5 self-start">
        How to Apply the Tape
      </p>

      {/* SVG silhouette */}
      <svg
        viewBox="0 0 200 340"
        className="w-48 mx-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Body outline */}
        <ellipse cx="100" cy="60" rx="32" ry="38" stroke="white" strokeOpacity="0.25" strokeWidth="1.2" />
        {/* Torso */}
        <path
          d="M68 94 C52 110 44 130 46 160 C48 188 50 210 54 240 L146 240 C150 210 152 188 154 160 C156 130 148 110 132 94"
          stroke="white"
          strokeOpacity="0.25"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        {/* Legs */}
        <path d="M54 240 L44 330" stroke="white" strokeOpacity="0.15" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M146 240 L156 330" stroke="white" strokeOpacity="0.15" strokeWidth="1.2" strokeLinecap="round" />
        {/* Inner legs */}
        <path d="M88 240 L82 330" stroke="white" strokeOpacity="0.15" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M112 240 L118 330" stroke="white" strokeOpacity="0.15" strokeWidth="1.2" strokeLinecap="round" />

        {/* Bust line */}
        <line x1="46" y1="118" x2="154" y2="118" stroke="#F5C518" strokeOpacity="0.7" strokeWidth="0.8" strokeDasharray="3 2" />
        <text x="34" y="121" fontSize="7" fill="#F5C518" fillOpacity="0.85" fontFamily="monospace">Bust</text>

        {/* Waist line */}
        <line x1="50" y1="155" x2="150" y2="155" stroke="#F5C518" strokeOpacity="0.9" strokeWidth="0.8" strokeDasharray="3 2" />
        <text x="22" y="158" fontSize="7" fill="#F5C518" fillOpacity="1" fontFamily="monospace">Waist line</text>

        {/* Hip curve */}
        <line x1="47" y1="195" x2="153" y2="195" stroke="#F5C518" strokeOpacity="0.6" strokeWidth="0.8" strokeDasharray="3 2" />
        <text x="32" y="198" fontSize="7" fill="#F5C518" fillOpacity="0.75" fontFamily="monospace">Hip curve</text>

        {/* Length arrow */}
        <line x1="168" y1="94" x2="168" y2="330" stroke="white" strokeOpacity="0.2" strokeWidth="0.8" />
        <text x="172" y="215" fontSize="7" fill="white" fillOpacity="0.4" fontFamily="monospace">Length</text>
      </svg>

      {/* Tip */}
      <p className="text-[10px] text-white/35 text-center max-w-[200px] mt-5 leading-relaxed">
        Keep the measuring tape flat against your body, parallel to the ground. For custom wedding gowns, we recommend booking a live WhatsApp session helper.
      </p>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

const defaultValues = {
  bust: '',
  waist: '',
  hips: '',
  shoulder: '',
  gele: '',
  notes: '',
};

export function InteractiveChart() {
  const [values, setValues] = useState(defaultValues);
  const [bound, setBound] = useState(false);
  const [locked, setLocked] = useState(false);

  const isReady =
    values.bust.trim() &&
    values.waist.trim() &&
    values.hips.trim() &&
    values.shoulder.trim();

  function handleBind() {
    if (!isReady) return;
    setLocked(true);
    setTimeout(() => setBound(true), 600);
  }

  function handleChange(key: keyof typeof defaultValues, val: string) {
    if (locked) return;
    setValues((p) => ({ ...p, [key]: val }));
    if (bound) setBound(false);
  }

  return (
    <section className="py-28 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tight leading-none mb-3">
            Interactive Chart
          </h2>
          <div className="mx-auto w-12 h-0.5 bg-primary mb-5" />
          <p className="text-white/45 max-w-xl mx-auto text-sm leading-relaxed">
            We leverage your physical proportions to construct snatching undergarment states or premium tailored adjustments. Log your coordinates below to attach them to your digital cart or bespoke enquiries.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_2fr] max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, delay: 0.1 }}
        >
          {/* Left — diagram */}
          <div className="bg-white/[0.03] border-b md:border-b-0 md:border-r border-white/8 px-6 py-8 hidden md:block">
            <BodyDiagram />
          </div>

          {/* Right — form */}
          <div className="p-8 md:p-10">
            <h3 className="text-white font-bold text-xl mb-1">Log Your Parameters</h3>
            <p className="text-white/40 text-xs mb-8">
              Dimensions can be inputted in inches (recommended for Nigerian tailoring standards).
            </p>

            {/* Fields grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-4 mb-5">
              {/* Bust */}
              <div>
                <label className="block text-xs text-white/55 mb-1.5">
                  Bust Fullness <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  value={values.bust}
                  placeholder="34"
                  onChange={(e) => handleChange('bust', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors min-h-[44px]"
                />
              </div>
              {/* Waist */}
              <div>
                <label className="block text-xs text-white/55 mb-1.5">
                  Waist (Snatched) <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  value={values.waist}
                  placeholder="26"
                  onChange={(e) => handleChange('waist', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors min-h-[44px]"
                />
              </div>
              {/* Hips */}
              <div>
                <label className="block text-xs text-white/55 mb-1.5">
                  Hips Curving <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  value={values.hips}
                  placeholder="38"
                  onChange={(e) => handleChange('hips', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors min-h-[44px]"
                />
              </div>
              {/* Shoulder to floor */}
              <div>
                <label className="block text-xs text-white/55 mb-1.5">
                  Shoulder To Floor <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  value={values.shoulder}
                  placeholder="58"
                  onChange={(e) => handleChange('shoulder', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors min-h-[44px]"
                />
              </div>
              {/* Gele */}
              <div>
                <label className="block text-xs text-white/55 mb-1.5">Gele Crown Radius</label>
                <input
                  type="text"
                  value={values.gele}
                  placeholder="12"
                  onChange={(e) => handleChange('gele', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors min-h-[44px]"
                />
              </div>
              {/* System lock */}
              <div>
                <label className="block text-xs text-white/55 mb-1.5">System Lock</label>
                <button
                  onClick={() => {
                    if (locked) { setLocked(false); setBound(false); }
                    else if (isReady) handleBind();
                  }}
                  className={`w-full flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-xs font-semibold border transition-all duration-300 ${
                    bound
                      ? 'bg-primary/20 border-primary text-primary'
                      : 'bg-primary/10 border-primary/30 text-primary/80 hover:bg-primary/20'
                  }`}
                >
                  {bound ? <CheckCircle2 size={13} /> : <span className="w-3 h-3 rounded-full border border-primary/60 inline-block" />}
                  {bound ? 'LOCKED IN' : 'READY TO BIND'}
                </button>
              </div>
            </div>

            {/* Notes */}
            <div className="mb-7">
              <label className="block text-xs text-white/55 mb-1.5">
                Sizing Adjust Notes / Fit Concerns
              </label>
              <textarea
                rows={3}
                value={values.notes}
                placeholder="Provide details about height, bra size, or muscle circumference…"
                onChange={(e) => handleChange('notes', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
            </div>

            {/* Footer row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs text-white/30 italic">
                Sizing details will be attached automatically to custom orders.
              </p>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={handleBind}
                disabled={!isReady}
                className={`shrink-0 px-6 py-2.5 text-xs font-bold tracking-widest uppercase rounded-full border transition-all duration-300 ${
                  bound
                    ? 'bg-primary text-black border-primary'
                    : isReady
                    ? 'bg-white text-black border-white hover:bg-primary hover:border-primary'
                    : 'bg-white/10 text-white/30 border-white/10 cursor-not-allowed'
                }`}
              >
                {bound ? '✓ Dimensions Bound' : 'Bind Dimensions'}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
