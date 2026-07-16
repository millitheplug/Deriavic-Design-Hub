import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function AboutStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          <div className="w-full md:w-1/2 flex flex-col items-start z-10">
            <motion.div 
              className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              The Brand
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.2] text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
            >
              DERIAVIC APPAREL is a fashion design house <span className="text-primary italic font-bold">that breathes life into fabric</span> and transforms culture into extraordinary wearable art.
            </motion.h2>
          </div>

          <div className="w-full md:w-1/2 relative h-[500px] md:h-[600px] flex items-center justify-center">
            <motion.div 
              className="relative w-[80%] h-[80%] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              style={{ rotate, y }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            >
              <img 
                src="/attached_assets/generated_images/about-designer.jpg" 
                alt="Deriavic Designer in Studio" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
            </motion.div>
            
            {/* Background glowing orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full z-[-1]" />
          </div>

        </div>
      </div>
    </section>
  );
}
