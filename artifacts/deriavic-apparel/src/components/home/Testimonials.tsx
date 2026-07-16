import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Working with Deriavic completely shifted how I view tailoring. Every seam is intentional, every cut is architecture. It's not just clothing, it's presence.",
    name: "Adebayo O.",
    role: "Creative Director, Lagos"
  },
  {
    id: 2,
    quote: "The bridal collection piece they created for my wedding was beyond couture. They took traditional Aso-Oke and turned it into an avant-garde masterpiece.",
    name: "Teniola M.",
    role: "Client, Ibadan"
  },
  {
    id: 3,
    quote: "Bold, uncompromised, and deeply rooted in our culture yet completely futuristic. Deriavic is the voice of new Nigerian luxury.",
    name: "Kolawole S.",
    role: "Fashion Editor"
  },
  {
    id: 4,
    quote: "The attention to detail in their custom embroidery is staggering. I own pieces that I know will be passed down to the next generation.",
    name: "Oluwaseun F.",
    role: "Art Collector"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Testimonials
        </motion.div>

        <div className="relative min-h-[300px] md:min-h-[400px] flex flex-col justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: 50 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 * direction }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="max-w-4xl"
            >
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium text-white leading-tight italic mb-12">
                "{testimonials[currentIndex].quote}"
              </h3>
              
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white uppercase tracking-wider">{testimonials[currentIndex].name}</span>
                <span className="text-primary font-mono text-sm mt-1">{testimonials[currentIndex].role}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between mt-16 border-t border-white/10 pt-8">
          <div className="flex gap-4">
            <button 
              onClick={handlePrev}
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all hoverable"
            >
              <ArrowLeft size={24} />
            </button>
            <button 
              onClick={handleNext}
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all hoverable"
            >
              <ArrowRight size={24} />
            </button>
          </div>
          <div className="text-white/50 font-mono text-lg">
            <span className="text-white">{currentIndex + 1}</span> / {testimonials.length}
          </div>
        </div>

      </div>
    </section>
  );
}
