import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

// Helper — returns Unsplash URL with a given photo ID
const u = (id: string, w = 600, h = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}&h=${h}`;

// Helper — local fashion image stored in /public/fashion/
const f = (name: string) => `/fashion/${name}`;

// ─── Fallback shown when an individual image fails to load ────────────────────
const FALLBACK = u('1558618666-fcd25c85cd64');

// ─── Collection definitions ───────────────────────────────────────────────────
export const portfolioPieces = [
  {
    id: "bespoke-couture",
    title: "Bespoke Couture",
    year: "2024",
    category: "Tailored",
    description: "Completely custom garments made to measure. Every stitch intentional, every silhouette yours — from first consultation to final fitting.",
    tags: ["Custom", "Tailored", "Luxury"],
    hero: f("bespoke-01.png"),
    images: [
      f("bespoke-01.png"),
      f("bespoke-02.jpg"),
      f("bespoke-03.jpg"),
      f("bespoke-04.jpg"),
      f("bespoke-05.jpg"),
      f("bespoke-06.jpg"),
      f("bespoke-07.jpg"),
      f("bespoke-08.jpg"),
      f("bespoke-09.jpg"),
      f("bespoke-10.jpg"),
    ],
  },
  {
    id: "bridal",
    title: "Bridal",
    year: "2024",
    category: "Bridal Couture",
    description: "Bridal gowns and wedding looks crafted for the modern Nigerian bride. Structured silhouettes, raw silk, and intricate detailing.",
    tags: ["Wedding", "Gown", "Ceremony"],
    hero: f("bridal-01.png"),
    images: [
      f("bridal-01.png"),
      f("bridal-02.jpg"),
      f("bridal-03.webp"),
      f("bridal-06.jpg"),
      f("bridal-07.jpg"),
      f("bridal-08.webp"),
      f("bridal-09.webp"),
      f("bridal-10.webp"),
      f("bridal-11.png"),
      u("1519741497674-4f3399c79aa0"),
    ],
  },
  {
    id: "aso-oke",
    title: "Aso-Oke",
    year: "2024",
    category: "Traditional",
    description: "Handwoven Yoruba Aso-Oke reinterpreted for the contemporary wardrobe — ceremonial, celebratory, and unmistakably rooted.",
    tags: ["Yoruba", "Handwoven", "Heritage"],
    hero: f("asooke-01.png"),
    images: [
      f("asooke-01.png"),
      f("asooke-02.jpg"),
      f("asooke-03.jpg"),
      f("asooke-04.jpg"),
      f("asooke-05.jpg"),
      f("asooke-06.jpg"),
      f("asooke-07.jpg"),
      f("asooke-08.jpg"),
      f("asooke-09.jpg"),
      u("1583391733956-6c78276477e2"),
    ],
  },
  {
    id: "asoebi",
    title: "Asoebi",
    year: "2023",
    category: "Event Wear",
    description: "Coordinated collections designed for celebrations — owambes, weddings, and naming ceremonies. Matching is an art form here.",
    tags: ["Owambe", "Group", "Celebration"],
    hero: f("asoebi-01.png"),
    images: [
      f("asoebi-01.png"),
      f("asoebi-02.jpg"),
      f("asoebi-03.jpg"),
      f("asoebi-04.jpg"),
      f("asoebi-05.jpg"),
      f("asoebi-06.webp"),
      f("asoebi-07.jpg"),
      f("asoebi-08.jpg"),
      f("asoebi-09.webp"),
      f("asoebi-10.webp"),
    ],
  },
  {
    id: "ready-to-wear",
    title: "Ready-to-Wear",
    year: "2024",
    category: "RTW",
    description: "Structured pieces ready for the real world. Everyday luxury — perfectly fitted off the rack, straight from our Ibadan studio.",
    tags: ["Everyday", "Collection", "Wearable"],
    hero: f("rtw-01.png"),
    images: [
      f("rtw-01.png"),
      f("rtw-03.jpg"),
      f("rtw-04.jpg"),
      f("rtw-05.jpg"),
      f("rtw-06.jpg"),
      f("rtw-07.jpg"),
      f("rtw-09.jpg"),
      f("rtw-10.jpg"),
      u("1558618666-fcd25c85cd64"),
      u("1529139374236-5f756b3e4f5b"),
    ],
  },
  {
    id: "ankara",
    title: "Ankara",
    year: "2023",
    category: "Print",
    description: "Bold African wax-print designs shaped into modern silhouettes. Color is power — and every pattern tells a story.",
    tags: ["African Print", "Wax", "Color"],
    hero: f("ankara-01.png"),
    images: [
      f("ankara-01.png"),
      f("ankara-03.jpg"),
      f("ankara-04.png"),
      f("ankara-05.png"),
      f("ankara-06.jpg"),
      f("ankara-07.jpg"),
      f("ankara-08.jpg"),
      f("ankara-09.png"),
      f("ankara-10.png"),
      f("ankara-11.jpg"),
    ],
  },
  {
    id: "kids",
    title: "Kids",
    year: "2024",
    category: "Children's Wear",
    description: "Miniature couture for little royals. Traditional and contemporary designs crafted for children — because fashion starts early.",
    tags: ["Children", "Mini", "Playful"],
    hero: f("kids-01.png"),
    images: [
      f("kids-01.png"),
      f("kids-02.jpg"),
      f("kids-03.jpg"),
      f("kids-04.jpg"),
      f("kids-05.png"),
      f("kids-06.jpg"),
      f("kids-07.jpg"),
      f("kids-08.jpg"),
      f("kids-09.webp"),
      f("kids-10.webp"),
    ],
  },
  {
    id: "editorial-shoot",
    title: "Editorial / Shoot",
    year: "2023",
    category: "Editorial",
    description: "High-concept fashion photography and campaign lookbooks. When a garment becomes a statement and the camera tells the whole story.",
    tags: ["Campaign", "Lookbook", "Concept"],
    hero: f("editorial-01.png"),
    images: [
      f("editorial-01.png"),
      f("editorial-02.png"),
      f("editorial-03.png"),
      f("editorial-04.png"),
      f("editorial-05.webp"),
      f("editorial-06.webp"),
      f("editorial-07.jpg"),
      f("editorial-08.jpg"),
      f("editorial-09.jpg"),
      f("editorial-10.jpg"),
    ],
  },
  {
    id: "fittings",
    title: "Fittings",
    year: "2024",
    category: "Studio",
    description: "Inside our Ibadan studio — the behind-the-scenes of creation. Where fabric meets body and ideas become reality, stitch by stitch.",
    tags: ["Studio", "Process", "BTS"],
    hero: f("fittings-01.png"),
    images: [
      f("fittings-01.png"),
      f("fittings-02.jpg"),
      f("fittings-03.png"),
      f("fittings-04.png"),
      f("fittings-05.jpg"),
      f("fittings-06.jpg"),
      f("fittings-07.jpg"),
      f("fittings-08.jpg"),
      f("fittings-09.jpg"),
      u("1558769132-cb1aea458c5e"),
    ],
  },
  {
    id: "other",
    title: "Other Pieces",
    year: "2023",
    category: "Miscellaneous",
    description: "One-of-a-kind commissions, experimental pieces, and special collaborations that don't fit neatly into a category — because great work rarely does.",
    tags: ["Capsule", "Collab", "Special"],
    hero: f("other-01.png"),
    images: [
      f("other-01.png"),
      f("other-02.png"),
      f("other-03.jpg"),
      f("other-04.jpg"),
      f("other-05.webp"),
      f("other-06.webp"),
      f("other-07.jpg"),
      f("other-08.jpg"),
      f("other-09.avif"),
      f("other-10.avif"),
    ],
  },
];

// ─── Home preview component ───────────────────────────────────────────────────
export function PortfolioPreview() {
  return (
    <section className="py-24 bg-background border-t border-white/5" id="works">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            Selected Work
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tighter text-white">
            Collections we're proud of.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-0 border-t border-white/10">
          {portfolioPieces.map((piece, index) => (
            <motion.div
              key={piece.id}
              className="group border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500 hoverable cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.06, type: "spring", stiffness: 80, damping: 20 }}
              onClick={() => (window.location.href = `/works#${piece.id}`)}
            >
              {/* Row header */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 pt-10 pb-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono uppercase tracking-wider min-w-[200px]">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  <span>{piece.category}</span>
                </div>
                <h3 className="flex-1 text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-white group-hover:text-primary transition-colors duration-300 leading-tight">
                  {piece.title}
                </h3>
                <div className="flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 min-w-[160px] justify-end">
                  <span className="mr-2 text-sm">View collection</span>
                  <ArrowRight size={16} />
                </div>
              </div>

              {/* Scrollable image strip */}
              <div className="pb-10 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
                <div className="flex gap-3" style={{ width: "max-content" }}>
                  {piece.images.map((img, i) => (
                    <div
                      key={i}
                      className="relative flex-shrink-0 overflow-hidden rounded-lg bg-secondary"
                      style={{ width: 'clamp(140px, 28vw, 180px)', height: 'clamp(200px, 40vw, 260px)' }}
                    >
                      <img
                        src={img}
                        alt={`${piece.title} ${i + 1}`}
                        className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                        loading="lazy"
                        onError={(e) => {
                          if (e.currentTarget.src !== FALLBACK) {
                            e.currentTarget.src = FALLBACK;
                          }
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Description + tags */}
              <div className="flex flex-col md:flex-row md:items-end gap-4 pb-10">
                <p className="text-muted-foreground max-w-xl flex-1">{piece.description}</p>
                <div className="flex flex-wrap gap-2">
                  {piece.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full border border-white/10 text-xs text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="px-3 py-1 rounded-full border border-white/10 text-xs text-white/60 font-mono">
                    {piece.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/works"
            className="inline-flex items-center px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all duration-300 hoverable"
          >
            Browse all collections <ArrowRight className="ml-2" size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
