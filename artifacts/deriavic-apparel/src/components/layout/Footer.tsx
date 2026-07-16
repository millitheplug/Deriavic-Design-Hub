import { Link } from 'wouter';
import { ArrowRight, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-8 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16">
          <div>
            <motion.h2 
              className="font-serif text-5xl md:text-8xl font-bold text-primary tracking-tighter mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              DERIAVIC
            </motion.h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-md">
              A fashion design house that breathes life into fabric and transforms culture into extraordinary wearable art.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hoverable">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hoverable">
              <Twitter size={20} />
            </a>
            {/* TikTok Icon placeholder */}
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hoverable">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </a>
          </div>
        </div>
        
        <div className="h-px w-full bg-white/5 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <div className="flex gap-6 font-medium">
            <Link href="/works" className="hover:text-primary transition-colors hoverable">Works</Link>
            <Link href="/about" className="hover:text-primary transition-colors hoverable">About</Link>
            <Link href="/contact" className="hover:text-primary transition-colors hoverable">Contact</Link>
          </div>
          
          <div className="text-center md:text-left hidden md:block">
            Ibadan · Nigeria
          </div>
          
          <div className="flex items-center gap-2">
            <a href="mailto:studio@deriavic.com" className="hover:text-primary transition-colors hoverable">studio@deriavic.com</a>
            <span className="opacity-50">© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
}
