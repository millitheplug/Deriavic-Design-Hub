import { Link, useLocation } from 'wouter';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Works', href: '/works' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/#services' },
  ];

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-background/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="text-primary font-serif font-bold text-2xl tracking-tighter hoverable z-50">
            DERIAVIC
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8 text-sm font-medium tracking-wide">
              {navLinks.map((link, i) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'hover:text-primary transition-colors hoverable',
                    location === link.href ? 'text-primary' : 'text-muted-foreground'
                  )}
                >
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i, type: 'spring' }}
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: 'spring' }}
            >
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-full border border-white/10 text-sm font-medium hover:border-primary hover:text-primary transition-all duration-300 hoverable inline-block"
              >
                Start a Project
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground z-50 hoverable"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        className={cn(
          'fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden',
          mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {navLinks.map((link, i) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: 20 }}
            animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1 * i, type: 'spring' }}
          >
            <Link
              href={link.href}
              className="text-4xl font-serif font-bold text-foreground hover:text-primary transition-colors hoverable"
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, type: 'spring' }}
          className="mt-8"
        >
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hoverable inline-block"
          >
            Start a Project
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
}
