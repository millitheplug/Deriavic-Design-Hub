import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { useState } from 'react';
import { ShoppingBag, Check } from 'lucide-react';
import { products, formatNaira } from '@/lib/products';
import { useCart } from '@/contexts/CartContext';

const CATEGORIES = ['All', ...Array.from(new Set(products.map((p) => p.category)))];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [justAdded, setJustAdded] = useState<string | null>(null);
  const { addItem, itemCount } = useCart();

  const visible =
    activeCategory === 'All' ? products : products.filter((p) => p.category === activeCategory);

  const handleAdd = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;
    addItem(product);
    setJustAdded(productId);
    window.setTimeout(() => setJustAdded((cur) => (cur === productId ? null : cur)), 1200);
  };

  return (
    <motion.main
      className="min-h-screen pt-32 pb-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="max-w-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 80 }}
        >
          <span className="text-primary text-xs font-mono uppercase tracking-[0.3em]">Shop</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-3 mb-4">
            Ready to Order
          </h1>
          <p className="text-lg text-muted-foreground">
            Browse the collection, add pieces to your bag, and check out — your order goes
            straight to our studio on WhatsApp and email, with payment arranged in chat.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={[
                'px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 hoverable',
                activeCategory === cat
                  ? 'bg-primary text-black border-primary'
                  : 'border-white/15 text-white/70 hover:border-primary/50 hover:text-white',
              ].join(' ')}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visible.map((product, i) => (
            <motion.div
              key={product.id}
              className="group rounded-2xl overflow-hidden bg-secondary border border-white/5 hover:border-primary/30 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.06, type: 'spring', stiffness: 90 }}
            >
              <div className="overflow-hidden bg-black/20" style={{ aspectRatio: '3/4' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <span className="text-primary text-[10px] font-mono uppercase tracking-widest">
                  {product.category}
                </span>
                <h3 className="text-white font-serif font-bold text-lg mt-1 mb-1 leading-tight">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-white font-mono text-sm">{formatNaira(product.price)}</span>
                  <button
                    type="button"
                    onClick={() => handleAdd(product.id)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:border-primary hover:text-primary transition-all hoverable"
                  >
                    {justAdded === product.id ? (
                      <>
                        <Check size={14} /> Added
                      </>
                    ) : (
                      <>
                        <ShoppingBag size={14} /> Add
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sticky checkout bar */}
        {itemCount > 0 && (
          <motion.div
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-3rem)] max-w-md"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <Link
              href="/checkout"
              className="flex items-center justify-between gap-4 px-6 py-4 rounded-full bg-primary text-black font-bold shadow-xl hover:scale-[1.02] transition-transform hoverable"
            >
              <span className="flex items-center gap-2">
                <ShoppingBag size={18} />
                {itemCount} item{itemCount !== 1 ? 's' : ''} in bag
              </span>
              <span>Checkout →</span>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.main>
  );
}
