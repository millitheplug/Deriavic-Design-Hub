import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          className="mb-24 md:mb-32 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tighter text-white leading-tight mb-8">
            Rooted in <span className="text-primary italic">Ibadan.</span> <br/>
            Built for the world.
          </h1>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start mb-32">
          <motion.div 
            className="aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80 }}
          >
            <img 
              src="/attached_assets/generated_images/about-designer.jpg" 
              alt="Designer working" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800";
              }}
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-color" />
          </motion.div>

          <motion.div 
            className="flex flex-col gap-8 text-xl text-white/80 leading-relaxed pt-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
          >
            <p>
              DERIAVIC APPAREL was born from a desire to translate the rhythmic chaos and deep cultural heritage of Ibadan into structural, wearable art. We do not just make clothes; we construct narratives.
            </p>
            <p>
              Every collection is a dialogue between traditional Nigerian craftsmanship and futuristic silhouettes. We take the raw textures of Aso-Oke, the earthiness of terracotta, and the vibrancy of our streets, fusing them with precision tailoring and avant-garde drapes.
            </p>
            <p className="font-serif text-3xl text-white border-l-4 border-primary pl-6 py-2 my-8 italic">
              "We believe fashion should demand attention without raising its voice."
            </p>
            <p>
              Our studio operates as a laboratory where fabrics are manipulated, deconstructed, and reborn. Whether it's a bespoke bridal gown or a conceptual streetwear capsule, our signature remains the same: bold, uncompromised, and meticulously crafted.
            </p>
          </motion.div>
        </div>

        {/* Stats / Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-16">
          {[
            { label: "Founded", value: "2020", desc: "In the heart of Ibadan" },
            { label: "Craft", value: "100%", desc: "In-house tailoring & embroidery" },
            { label: "Vision", value: "Global", desc: "Redefining African luxury" }
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              className="flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" }}
            >
              <div className="text-sm font-mono text-primary uppercase tracking-widest mb-4">{stat.label}</div>
              <div className="text-6xl font-serif font-bold text-white mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
