import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export const portfolioPieces = [
  {
    id: "aso-oke",
    title: "Aso-Oke Fusion",
    year: "2024",
    category: "Couture",
    description: "A deconstructed Aso-Oke ceremonial wear collection merging traditional Yoruba weave with contemporary tailoring.",
    tags: ["Tradition", "Deconstruction", "Handwoven"],
    image: "/attached_assets/generated_images/aso-oke.jpg"
  },
  {
    id: "midnight-lagos",
    title: "Midnight Lagos",
    year: "2024",
    category: "Streetwear",
    description: "Monochromatic night-collection inspired by Lagos nightlife — structured hoodies, cargo silhouettes, embroidered insignias.",
    tags: ["Utility", "Nightlife", "Monochrome"],
    image: "/attached_assets/generated_images/midnight-lagos.jpg"
  },
  {
    id: "clay-carbon",
    title: "Clay & Carbon",
    year: "2023",
    category: "Avant-Garde",
    description: "Earth-toned pieces inspired by Ibadan's terracotta rooftops. Layered textures, raw hem finishes.",
    tags: ["Earth Tones", "Texture", "Raw Edges"],
    image: "/attached_assets/generated_images/clay-carbon.jpg"
  },
  {
    id: "oriki",
    title: "Oríkì",
    year: "2023",
    category: "Editorial",
    description: "A praise-song in fabric. Embroidered praise names across draped linen pieces.",
    tags: ["Embroidery", "Linen", "Typography"],
    image: "/attached_assets/generated_images/oriki.jpg"
  },
  {
    id: "iron-silk",
    title: "Iron & Silk",
    year: "2022",
    category: "Bridal Couture",
    description: "Structured silhouettes in raw silk, reinforced with metallic thread detailing.",
    tags: ["Bridal", "Silk", "Metallic"],
    image: "/attached_assets/generated_images/iron-silk.jpg"
  },
  {
    id: "street-scripture",
    title: "Street Scripture",
    year: "2022",
    category: "Capsule",
    description: "Graphic streetwear with Yoruba proverbs as visual motifs.",
    tags: ["Graphic", "Print", "Cultural"],
    image: "/attached_assets/generated_images/street-scripture.jpg"
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

        <div className="flex flex-col border-t border-white/10">
          {portfolioPieces.map((piece, index) => (
            <motion.div
              key={piece.id}
              className="group flex flex-col md:flex-row py-12 md:py-16 border-b border-white/10 gap-8 md:gap-16 hover:bg-white/[0.02] transition-colors duration-500 hoverable cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 80, damping: 20 }}
              onClick={() => window.location.href = `/works#${piece.id}`}
            >
              {/* Image */}
              <div className="w-full md:w-[45%] h-[400px] md:h-[500px] overflow-hidden rounded-xl bg-secondary relative">
                <motion.img 
                  src={piece.image} 
                  alt={piece.title} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = `https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800`;
                  }}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none" />
              </div>

              {/* Content */}
              <div className="w-full md:w-[55%] flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono uppercase tracking-wider mb-4">
                  <span>{piece.category}</span>
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  <span>Ibadan {piece.year}</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 group-hover:text-primary transition-colors duration-300">
                  {piece.title}
                </h3>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                  {piece.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {piece.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 rounded-full border border-white/10 text-xs text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <span className="mr-2">View collection</span>
                  <ArrowRight size={18} />
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
