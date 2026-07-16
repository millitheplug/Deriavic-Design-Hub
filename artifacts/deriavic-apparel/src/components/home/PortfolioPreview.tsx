import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const unsplash = (id: string, w = 800, h = 1000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}&h=${h}`;

export const portfolioPieces = [
  {
    id: "aso-oke",
    title: "Aso-Oke Fusion",
    year: "2024",
    category: "Couture",
    description: "A deconstructed Aso-Oke ceremonial wear collection merging traditional Yoruba weave with contemporary tailoring.",
    tags: ["Tradition", "Deconstruction", "Handwoven"],
    hero: unsplash("1583391733956-6c78276477e2"),
    images: [
      unsplash("1583391733956-6c78276477e2"),
      unsplash("1537832816519-689bc4a38f7a"),
      unsplash("1516762889-c0e45e12e93a"),
      unsplash("1509631179647-0177331693ae"),
      unsplash("1558618666-fcd25c85cd64"),
      unsplash("1544441893-42e9d2cc0b97"),
      unsplash("1504675099197-d34f9de17e0f"),
      unsplash("1515886657613-9f3515b0c78f"),
      unsplash("1539109136881-3be0616acf4b"),
      unsplash("1534528741775-53994a69daeb"),
    ]
  },
  {
    id: "midnight-lagos",
    title: "Midnight Lagos",
    year: "2024",
    category: "Streetwear",
    description: "Monochromatic night-collection inspired by Lagos nightlife — structured hoodies, cargo silhouettes, embroidered insignias.",
    tags: ["Utility", "Nightlife", "Monochrome"],
    hero: unsplash("1529139374236-5f756b3e4f5b"),
    images: [
      unsplash("1529139374236-5f756b3e4f5b"),
      unsplash("1520975661595-6c807be2f9f5"),
      unsplash("1527181038709-98d4e08bff1d"),
      unsplash("1469334031218-e382a71b716b"),
      unsplash("1506629082049-509411f7d8b8"),
      unsplash("1581044777550-4cfa2232d13d"),
      unsplash("1496747986456-63879ff4f62d"),
      unsplash("1558769132-cb1aea458c5e"),
      unsplash("1524504388868-96c4c01da85a"),
      unsplash("1500917693408-a8de2b37e388"),
    ]
  },
  {
    id: "clay-carbon",
    title: "Clay & Carbon",
    year: "2023",
    category: "Avant-Garde",
    description: "Earth-toned pieces inspired by Ibadan's terracotta rooftops. Layered textures, raw hem finishes.",
    tags: ["Earth Tones", "Texture", "Raw Edges"],
    hero: unsplash("1490481651871-ab68de25d43d"),
    images: [
      unsplash("1490481651871-ab68de25d43d"),
      unsplash("1434389222527-23b96e0e4e41"),
      unsplash("1539109136881-3be0616acf4b"),
      unsplash("1516762889-c0e45e12e93a"),
      unsplash("1504675099197-d34f9de17e0f"),
      unsplash("1558618666-fcd25c85cd64"),
      unsplash("1534528741775-53994a69daeb"),
      unsplash("1509631179647-0177331693ae"),
      unsplash("1515886657613-9f3515b0c78f"),
      unsplash("1558769132-cb1aea458c5e"),
    ]
  },
  {
    id: "oriki",
    title: "Oríkì",
    year: "2023",
    category: "Editorial",
    description: "A praise-song in fabric. Embroidered praise names across draped linen pieces.",
    tags: ["Embroidery", "Linen", "Typography"],
    hero: unsplash("1524504388868-96c4c01da85a"),
    images: [
      unsplash("1524504388868-96c4c01da85a"),
      unsplash("1558769132-cb1aea458c5e"),
      unsplash("1583391733956-6c78276477e2"),
      unsplash("1537832816519-689bc4a38f7a"),
      unsplash("1506629082049-509411f7d8b8"),
      unsplash("1544441893-42e9d2cc0b97"),
      unsplash("1490481651871-ab68de25d43d"),
      unsplash("1558618666-fcd25c85cd64"),
      unsplash("1500917693408-a8de2b37e388"),
      unsplash("1515886657613-9f3515b0c78f"),
    ]
  },
  {
    id: "iron-silk",
    title: "Iron & Silk",
    year: "2022",
    category: "Bridal Couture",
    description: "Structured silhouettes in raw silk, reinforced with metallic thread detailing.",
    tags: ["Bridal", "Silk", "Metallic"],
    hero: unsplash("1519741497674-4f3399c79aa0"),
    images: [
      unsplash("1519741497674-4f3399c79aa0"),
      unsplash("1511285560929-80b5a4621ccf"),
      unsplash("1490481651871-ab68de25d43d"),
      unsplash("1558618666-fcd25c85cd64"),
      unsplash("1534528741775-53994a69daeb"),
      unsplash("1524504388868-96c4c01da85a"),
      unsplash("1509631179647-0177331693ae"),
      unsplash("1558769132-cb1aea458c5e"),
      unsplash("1515886657613-9f3515b0c78f"),
      unsplash("1506629082049-509411f7d8b8"),
    ]
  },
  {
    id: "street-scripture",
    title: "Street Scripture",
    year: "2022",
    category: "Capsule",
    description: "Graphic streetwear with Yoruba proverbs as visual motifs.",
    tags: ["Graphic", "Print", "Cultural"],
    hero: unsplash("1469334031218-e382a71b716b"),
    images: [
      unsplash("1469334031218-e382a71b716b"),
      unsplash("1529139374236-5f756b3e4f5b"),
      unsplash("1581044777550-4cfa2232d13d"),
      unsplash("1527181038709-98d4e08bff1d"),
      unsplash("1495385619627-9ffe3a42e6ed"),
      unsplash("1496747986456-63879ff4f62d"),
      unsplash("1506629082049-509411f7d8b8"),
      unsplash("1539109136881-3be0616acf4b"),
      unsplash("1537832816519-689bc4a38f7a"),
      unsplash("1516762889-c0e45e12e93a"),
    ]
  }
];

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
              transition={{ delay: index * 0.07, type: "spring", stiffness: 80, damping: 20 }}
              onClick={() => window.location.href = `/works#${piece.id}`}
            >
              {/* Top row: meta + title */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 pt-10 pb-6 px-0">
                <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono uppercase tracking-wider min-w-[200px]">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  <span>{piece.category}</span>
                </div>
                <h3 className="flex-1 text-3xl md:text-5xl font-serif font-bold text-white group-hover:text-primary transition-colors duration-300 leading-tight">
                  {piece.title}
                </h3>
                <div className="flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 min-w-[160px] justify-end">
                  <span className="mr-2 text-sm">View collection</span>
                  <ArrowRight size={16} />
                </div>
              </div>

              {/* Image strip — horizontal scroll of 10 images */}
              <div className="pb-10 overflow-hidden">
                <motion.div
                  className="flex gap-3 w-max"
                  initial={{ x: 0 }}
                  whileHover={{ x: -40 }}
                  transition={{ type: "spring", stiffness: 80, damping: 20 }}
                >
                  {piece.images.map((img, i) => (
                    <div
                      key={i}
                      className="relative flex-shrink-0 overflow-hidden rounded-lg bg-secondary"
                      style={{ width: 200, height: 280 }}
                    >
                      <img
                        src={img}
                        alt={`${piece.title} ${i + 1}`}
                        className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = `https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=400`;
                        }}
                      />
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Tags + description */}
              <div className="flex flex-col md:flex-row md:items-end gap-4 pb-10">
                <p className="text-muted-foreground max-w-xl flex-1">{piece.description}</p>
                <div className="flex flex-wrap gap-2">
                  {piece.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-xs text-white/60">
                      {tag}
                    </span>
                  ))}
                  <span className="px-3 py-1 rounded-full border border-white/10 text-xs text-white/60 font-mono">{piece.year}</span>
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
          <Link href="/works" className="inline-flex items-center px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all duration-300 hoverable">
            Browse all collections <ArrowRight className="ml-2" size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
