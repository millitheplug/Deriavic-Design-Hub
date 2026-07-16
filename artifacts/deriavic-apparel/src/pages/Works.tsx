import { motion } from 'framer-motion';
import { portfolioPieces } from '@/components/home/PortfolioPreview';

export default function Works() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tighter text-white mb-6">
            Selected <span className="text-primary italic">Works</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A comprehensive archive of our collections, bespoke pieces, and editorial explorations.
          </p>
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {portfolioPieces.map((piece, i) => (
            <motion.div 
              key={piece.id}
              id={piece.id}
              className={`group cursor-pointer hoverable ${i % 2 !== 0 ? 'md:mt-24' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 80, delay: i * 0.1 }}
            >
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-secondary mb-6 relative">
                <motion.img 
                  src={piece.image} 
                  alt={piece.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = `https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800`;
                  }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Hover reveal overlay */}
                <div className="absolute inset-0 bg-primary/90 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-center items-center p-8 text-black text-center opacity-0 group-hover:opacity-100">
                  <span className="font-mono text-sm uppercase tracking-widest mb-4 font-bold border border-black/20 px-4 py-1 rounded-full">Explore Collection</span>
                  <p className="text-lg font-medium">Click to view the full lookbook and concept details.</p>
                </div>
              </div>
              
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">{piece.title}</h3>
                  <div className="text-sm text-muted-foreground font-mono uppercase tracking-wider">
                    {piece.category} · {piece.year}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
