import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="mb-20 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tighter text-white mb-6 leading-tight">
            Let's create <br/>
            <span className="text-primary italic">something iconic.</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Whether you need a bespoke couture piece, bridal styling, or want to collaborate on a collection, our studio is ready to listen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <motion.a 
            href="mailto:studio@deriavic.com"
            className="group block p-8 md:p-12 rounded-3xl bg-secondary border border-white/5 hover:border-primary/50 transition-all duration-300 hoverable"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, type: "spring" }}
          >
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
              <Mail size={28} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Email Us</h3>
            <p className="text-muted-foreground mb-12">For general inquiries and press.</p>
            <div className="flex items-center justify-between text-white group-hover:text-primary transition-colors">
              <span className="font-mono">studio@deriavic.com</span>
              <ArrowUpRight size={20} />
            </div>
          </motion.a>

          <motion.a 
            href="#"
            className="group block p-8 md:p-12 rounded-3xl bg-secondary border border-white/5 hover:border-[#25D366]/50 transition-all duration-300 hoverable"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-[#25D366] mb-8 group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-300">
              <MessageCircle size={28} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-2">WhatsApp</h3>
            <p className="text-muted-foreground mb-12">For quick replies and booking.</p>
            <div className="flex items-center justify-between text-white group-hover:text-[#25D366] transition-colors">
              <span className="font-mono">+234 800 000 0000</span>
              <ArrowUpRight size={20} />
            </div>
          </motion.a>

          <motion.div 
            className="group block p-8 md:p-12 rounded-3xl bg-secondary border border-white/5 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white mb-8">
              <MapPin size={28} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Studio</h3>
            <p className="text-muted-foreground mb-12">By appointment only.</p>
            <div className="flex items-center justify-between text-white">
              <span className="font-mono">Ibadan, Nigeria</span>
            </div>
          </motion.div>
        </div>

        {/* Contact Form Placeholder */}
        <motion.div 
          className="max-w-3xl border-t border-white/10 pt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-serif font-bold text-white mb-8">Send a message</h2>
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-transparent border-b border-white/20 pb-4 text-white focus:outline-none focus:border-primary transition-colors hoverable"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-transparent border-b border-white/20 pb-4 text-white focus:outline-none focus:border-primary transition-colors hoverable"
              />
            </div>
            <input 
              type="text" 
              placeholder="Subject / Service" 
              className="w-full bg-transparent border-b border-white/20 pb-4 text-white focus:outline-none focus:border-primary transition-colors hoverable mt-4"
            />
            <textarea 
              placeholder="Tell us about your project..." 
              rows={4}
              className="w-full bg-transparent border-b border-white/20 pb-4 text-white focus:outline-none focus:border-primary transition-colors hoverable resize-none mt-4"
            />
            <button className="self-start mt-8 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-primary transition-colors hoverable">
              Submit Inquiry
            </button>
          </form>
        </motion.div>

      </div>
    </main>
  );
}
