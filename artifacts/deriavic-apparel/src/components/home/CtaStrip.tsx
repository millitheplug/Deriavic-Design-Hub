import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export function CtaStrip() {
  return (
    <Link href="/contact" className="block group">
      <section className="py-16 md:py-24 bg-background border-t border-b border-white/5 transition-colors duration-500 group-hover:bg-primary group-hover:border-primary cursor-pointer hoverable">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.h2 
            className="text-4xl md:text-7xl font-serif font-bold tracking-tighter text-white group-hover:text-black transition-colors duration-500"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Start a project
          </motion.h2>
          
          <motion.div 
            className="flex items-center gap-4 text-2xl md:text-4xl font-serif font-medium text-white/50 group-hover:text-black transition-colors duration-500"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span>Let's talk</span>
            <ArrowRight className="w-8 h-8 md:w-12 md:h-12 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
          </motion.div>
        </div>
      </section>
    </Link>
  );
}
