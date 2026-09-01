import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const ASSET_BASE = 'https://raw.githubusercontent.com/millitheplug/Deriavic-Design-Hub/main/attached_assets/generated_images';
const generated = ['about-designer.jpg','aso-oke.jpg','clay-carbon.jpg','expertise.jpg','iron-silk.jpg','midnight-lagos.jpg','oriki.jpg','street-scripture.jpg'];
const u = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=800`;
const f = (name: string) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  return `${ASSET_BASE}/${generated[hash % generated.length]}`;
};
const FALLBACK = `${ASSET_BASE}/expertise.jpg`;
const images = (prefix: string, count = 10) => Array.from({ length: count }, (_, i) => f(`${prefix}-${i + 1}`));

export const portfolioPieces = [
  { id:'bespoke-couture', title:'Bespoke Couture', year:'2024', category:'Tailored', description:'Completely custom garments made to measure. Every stitch intentional, every silhouette yours — from first consultation to final fitting.', tags:['Custom','Tailored','Luxury'], hero:f('bespoke-01'), images:images('bespoke') },
  { id:'bridal', title:'Bridal', year:'2024', category:'Bridal Couture', description:'Bridal gowns and wedding looks crafted for the modern Nigerian bride. Structured silhouettes, raw silk, and intricate detailing.', tags:['Wedding','Gown','Ceremony'], hero:f('bridal-01'), images:images('bridal',9).concat(u('1519741497674-4f3399c79aa0')) },
  { id:'aso-oke', title:'Aso-Oke', year:'2024', category:'Traditional', description:'Handwoven Yoruba Aso-Oke reinterpreted for the contemporary wardrobe — ceremonial, celebratory, and unmistakably rooted.', tags:['Yoruba','Handwoven','Heritage'], hero:f('asooke-01'), images:images('asooke',9).concat(u('1583391733956-6c78276477e2')) },
  { id:'asoebi', title:'Asoebi', year:'2023', category:'Event Wear', description:'Coordinated collections designed for celebrations — owambes, weddings, and naming ceremonies. Matching is an art form here.', tags:['Owambe','Group','Celebration'], hero:f('asoebi-01'), images:images('asoebi') },
  { id:'ready-to-wear', title:'Ready-to-Wear', year:'2024', category:'RTW', description:'Structured pieces ready for the real world. Everyday luxury — perfectly fitted off the rack, straight from our Ibadan studio.', tags:['Everyday','Collection','Wearable'], hero:f('rtw-01'), images:images('rtw',8).concat([u('1558618666-fcd25c85cd64'),u('1529139374236-5f756b3e4f5b')]) },
  { id:'ankara', title:'Ankara', year:'2023', category:'Print', description:'Bold African wax-print designs shaped into modern silhouettes. Color is power — and every pattern tells a story.', tags:['African Print','Wax','Color'], hero:f('ankara-01'), images:images('ankara') },
  { id:'kids', title:'Kids', year:'2024', category:"Children's Wear", description:'Miniature couture for little royals. Traditional and contemporary designs crafted for children — because fashion starts early.', tags:['Children','Mini','Playful'], hero:f('kids-01'), images:images('kids') },
  { id:'editorial-shoot', title:'Editorial / Shoot', year:'2023', category:'Editorial', description:'High-concept fashion photography and campaign lookbooks. When a garment becomes a statement and the camera tells the whole story.', tags:['Campaign','Lookbook','Concept'], hero:f('editorial-01'), images:images('editorial') },
  { id:'fittings', title:'Fittings', year:'2024', category:'Studio', description:'Inside our Ibadan studio — the behind-the-scenes of creation. Where fabric meets body and ideas become reality, stitch by stitch.', tags:['Studio','Process','BTS'], hero:f('fittings-01'), images:images('fittings',9).concat(u('1558769132-cb1aea458c5e')) },
  { id:'other', title:'Other Pieces', year:'2023', category:'Miscellaneous', description:"One-of-a-kind commissions, experimental pieces, and special collaborations that don't fit neatly into a category — because great work rarely does.", tags:['Capsule','Collab','Special'], hero:f('other-01'), images:images('other') },
];

export function PortfolioPreview() {
  return <section className="py-24 bg-background border-t border-white/5" id="works">
    <div className="container mx-auto px-6 md:px-12">
      <motion.div className="mb-16 md:mb-24" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
        <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-6">Selected Work</div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tighter text-white">Collections we're proud of.</h2>
      </motion.div>
      <div className="flex flex-col border-t border-white/10">
        {portfolioPieces.map((piece,index)=><motion.div key={piece.id} className="group border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500 cursor-pointer" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-100px'}} transition={{delay:index*.04}} onClick={()=>window.location.href=`${import.meta.env.BASE_URL}works#${piece.id}`}>
          <div className="flex flex-col md:flex-row md:items-center gap-4 pt-10 pb-6">
            <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono uppercase tracking-wider min-w-[200px]"><span>{String(index+1).padStart(2,'0')}</span><span className="w-1 h-1 rounded-full bg-primary"/><span>{piece.category}</span></div>
            <h3 className="flex-1 text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-white group-hover:text-primary transition-colors">{piece.title}</h3>
            <div className="text-primary font-medium">View collection <ArrowRight className="inline ml-2" size={16}/></div>
          </div>
          <div className="pb-10 overflow-x-auto" style={{scrollbarWidth:'none'}}><div className="flex gap-3" style={{width:'max-content'}}>{piece.images.map((img,i)=><div key={i} className="relative flex-shrink-0 overflow-hidden rounded-lg bg-secondary" style={{width:'clamp(140px,28vw,180px)',height:'clamp(200px,40vw,260px)'}}><img src={img} alt={`${piece.title} ${i+1}`} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" loading="lazy" onError={e=>{e.currentTarget.src=FALLBACK}}/></div>)}</div></div>
          <div className="flex flex-col md:flex-row md:items-end gap-4 pb-10"><p className="text-muted-foreground max-w-xl flex-1">{piece.description}</p><div className="flex flex-wrap gap-2">{piece.tags.map(tag=><span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-xs text-white/60">{tag}</span>)}</div></div>
        </motion.div>)}
      </div>
      <div className="mt-16 text-center"><Link href="/works" className="inline-flex items-center px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all">Browse all collections <ArrowRight className="ml-2" size={18}/></Link></div>
    </div>
  </section>;
}
