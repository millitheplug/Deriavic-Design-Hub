import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

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

        {/* Face of the Brand — Aderinsola */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mb-32 border-t border-white/10 pt-16">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80 }}
          >
            <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
                alt="Aderinsola — Creative Director, Deriavic Apparel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-xs font-mono text-primary uppercase tracking-widest mb-2">Creative Director & Founder</div>
                <div className="text-3xl font-serif font-bold text-white">Aderinsola</div>
              </div>
            </div>
            {/* Gold accent frame */}
            <div className="absolute -bottom-4 -right-4 w-48 h-48 border border-primary/30 rounded-2xl -z-10" />
          </motion.div>

          <motion.div 
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest">
              The Face Behind the Brand
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              Dressed in vision, <span className="italic text-primary">stitched in purpose.</span>
            </h2>
            <div className="flex flex-col gap-6 text-lg text-white/80 leading-relaxed">
              <p>
                Aderinsola is the creative force and founder of DERIAVIC APPAREL — a designer who grew up watching Ibadan's vibrant markets, mastering the interplay between the city's deep cultural soul and the restless energy of contemporary Africa.
              </p>
              <p>
                Her training spans traditional Yoruba textile arts to international couture techniques. Every silhouette she designs carries the unmistakable DNA of her roots — bold, intentional, and deeply human.
              </p>
              <p className="font-serif text-2xl text-white border-l-4 border-primary pl-6 py-2 italic">
                "I don't just dress people. I give them armour."
              </p>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-3 text-primary font-medium hover:gap-5 transition-all duration-300 hoverable">
              Book a consultation <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* Brand Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start mb-32">
          <motion.div 
            className="flex flex-col gap-8 text-xl text-white/80 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80 }}
          >
            <p>
              DERIAVIC APPAREL was born from a desire to translate the rhythmic chaos and deep cultural heritage of Ibadan into structural, wearable art. We do not just make clothes; we construct narratives.
            </p>
            <p>
              Every collection is a dialogue between traditional Nigerian craftsmanship and futuristic silhouettes. We take the raw textures of Aso-Oke, the earthiness of terracotta, and the vibrancy of our streets, fusing them with precision tailoring and avant-garde drapes.
            </p>
            <p>
              Our studio operates as a laboratory where fabrics are manipulated, deconstructed, and reborn. Whether it's a bespoke bridal gown or a conceptual streetwear capsule, our signature remains the same: bold, uncompromised, and meticulously crafted.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {[
              "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=500",
              "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80&w=500",
              "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=500",
              "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=500",
            ].map((src, i) => (
              <motion.div
                key={i}
                className={`overflow-hidden rounded-xl bg-secondary ${i === 1 ? 'mt-8' : ''}`}
                style={{ aspectRatio: '3/4' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 80 }}
              >
                <img src={src} alt="Studio" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* The Process */}
        <motion.div
          className="mb-32 border-t border-white/10 pt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-8">
            The Process
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-16 leading-tight max-w-3xl">
            How we bring your vision to life.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-10">
              {[
                {
                  step: "01",
                  title: "The Consultation",
                  body: "The bespoke process begins with a consultation with Aderinsola to discuss style ideas, inspiration, budget, and the client's vision. This can be held physically at our Ibadan studio or virtually for clients abroad."
                },
                {
                  step: "02",
                  title: "Measurements & Sketch",
                  body: "The client is measured and receives a detailed sketch that directs the production. International clients receive a comprehensive measurement guide to take their measurements accurately at home."
                },
              ].map(({ step, title, body }) => (
                <div key={step} className="flex gap-6">
                  <div className="text-3xl font-mono font-bold text-primary/40 leading-none pt-1 min-w-[3rem]">{step}</div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white mb-3">{title}</h3>
                    <p className="text-white/70 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-10">
              {[
                {
                  step: "03",
                  title: "Creation & Fittings",
                  body: "Aderinsola and the team bring the sketch to life. Clients within Ibadan are scheduled for physical fittings. It is important to note that ninety percent of our clients receive the same quality experience virtually — regardless of location."
                },
                {
                  step: "04",
                  title: "Delivery",
                  body: "Your finished piece is carefully packaged and dispatched. We offer studio pickup in Ibadan, local delivery within Ibadan, and global DHL shipping for international clients. The ideal order-processing timeframe for bespoke pieces is four to six months from consultation."
                },
              ].map(({ step, title, body }) => (
                <div key={step} className="flex gap-6">
                  <div className="text-3xl font-mono font-bold text-primary/40 leading-none pt-1 min-w-[3rem]">{step}</div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white mb-3">{title}</h3>
                    <p className="text-white/70 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-primary/5 border border-primary/20">
            <p className="text-white/80 leading-relaxed">
              You may make a request for an express order through the <strong className="text-primary">Make an Enquiry</strong> form and we will get in touch with you about the possibilities. You are also welcome to bring up to three loved ones to your physical consultation at our Ibadan studio.
            </p>
          </div>
        </motion.div>

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
