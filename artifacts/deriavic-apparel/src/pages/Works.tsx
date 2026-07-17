import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { portfolioPieces } from '@/components/home/PortfolioPreview';
import { X, ArrowRight } from 'lucide-react';

export default function Works() {
  const [activeCollection, setActiveCollection] = useState<string | null>(null);
  const active = portfolioPieces.find(p => p.id === activeCollection);

  return (
    <main className="min-h-screen bg-background pb-24">
      {/* Hero */}
      <div className="pt-32 pb-16 container mx-auto px-6 md:px-12">
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif font-bold tracking-tighter text-white mb-6">
            Selected <span className="text-primary italic">Works</span>
          </h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl">
            A comprehensive archive of our collections, bespoke pieces, and editorial explorations from our Ibadan studio.
          </p>
        </motion.div>
      </div>

      {/* Collections — full width */}
      <div className="w-full">
        {portfolioPieces.map((piece, index) => (
          <motion.div
            key={piece.id}
            id={piece.id}
            className="w-full border-t border-white/10 cursor-pointer group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 80, delay: index * 0.05 }}
            onClick={() => setActiveCollection(piece.id)}
          >
            {/* Collection header — full width */}
            <div className="container mx-auto px-6 md:px-12">
              <div className="flex flex-col md:flex-row md:items-center gap-4 py-8">
                <span className="text-primary/40 font-mono text-sm font-bold min-w-[3rem]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="flex-1 text-2xl sm:text-4xl md:text-6xl font-serif font-bold text-white group-hover:text-primary transition-colors duration-300">
                  {piece.title}
                </h2>
                <div className="flex items-center gap-6 text-sm text-muted-foreground font-mono uppercase tracking-widest">
                  <span>{piece.category}</span>
                  <span>{piece.year}</span>
                </div>
                <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <span className="text-sm font-medium">Open</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>

            {/* Full-width image strip — spans edge to edge */}
            <div className="w-full overflow-x-auto scrollbar-hide pb-6" style={{ scrollbarWidth: 'none' }}>
              <div className="flex gap-3 px-6 md:px-12" style={{ width: 'max-content' }}>
                {piece.images.map((img, i) => (
                  <motion.div
                    key={i}
                    className="relative flex-shrink-0 overflow-hidden rounded-xl bg-secondary"
                    style={{ width: 'clamp(160px, 30vw, 240px)', height: 'clamp(220px, 42vw, 340px)' }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <img
                      src={img}
                      alt={`${piece.title} — look ${i + 1}`}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=500`;
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                      <span className="text-white/60 font-mono text-xs">Look {String(i + 1).padStart(2, '0')}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Description + tags */}
            <div className="container mx-auto px-6 md:px-12 pb-10">
              <div className="flex flex-col md:flex-row md:items-end gap-6">
                <p className="text-white/60 max-w-2xl flex-1 leading-relaxed">{piece.description}</p>
                <div className="flex flex-wrap gap-2">
                  {piece.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 rounded-full border border-white/10 text-xs text-white/50 font-mono uppercase tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox / Expanded Collection Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 bg-background/98 backdrop-blur-xl overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button */}
            <button
              className="fixed top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-primary hover:text-black flex items-center justify-center text-white transition-colors hoverable"
              onClick={() => setActiveCollection(null)}
            >
              <X size={20} />
            </button>

            <div className="container mx-auto px-6 md:px-12 pt-20 pb-24">
              {/* Title */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <div className="text-primary font-mono text-sm uppercase tracking-widest mb-3">{active.category} · {active.year}</div>
                <h2 className="text-5xl md:text-8xl font-serif font-bold text-white tracking-tighter leading-tight mb-6">
                  {active.title}
                </h2>
                <p className="text-xl text-white/70 max-w-2xl">{active.description}</p>
              </motion.div>

              {/* Masonry grid of all 10 images */}
              <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {active.images.map((img, i) => (
                  <motion.div
                    key={i}
                    className="break-inside-avoid overflow-hidden rounded-xl bg-secondary"
                    style={{ aspectRatio: i % 3 === 0 ? '2/3' : i % 3 === 1 ? '3/4' : '1/1' }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04, type: "spring", stiffness: 100 }}
                  >
                    <img
                      src={img}
                      alt={`${active.title} look ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600`;
                      }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-12">
                {active.tags.map(tag => (
                  <span key={tag} className="px-5 py-2 rounded-full border border-white/10 text-sm text-white/60">
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-16 pt-12 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div>
                  <div className="text-sm text-primary font-mono uppercase tracking-widest mb-2">Interested in this collection?</div>
                  <h3 className="text-3xl font-serif font-bold text-white">Let's create something together.</h3>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-black font-bold hover:scale-105 transition-transform hoverable"
                >
                  Make an Enquiry <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
