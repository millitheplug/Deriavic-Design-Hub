import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

// Use the original fashion images already stored in the repository.
// Only image sources are being restored; collection IDs, links, routes and layout stay unchanged.
const fashionFiles: Record<string, string[]> = {
  bespoke: ['bespoke-01.png','bespoke-02.jpg','bespoke-03.jpg','bespoke-04.jpg','bespoke-05.jpg','bespoke-06.jpg','bespoke-07.jpg','bespoke-08.jpg','bespoke-09.jpg','bespoke-10.jpg'],
  bridal: ['bridal-01.png','bridal-02.jpg','bridal-03.webp','bridal-06.jpg','bridal-07.jpg','bridal-08.webp','bridal-09.webp','bridal-10.webp','bridal-11.png'],
  asooke: ['asooke-01.png','asooke-02.jpg','asooke-03.jpg','asooke-04.jpg','asooke-05.jpg','asooke-06.jpg','asooke-07.jpg','asooke-08.jpg','asooke-09.jpg'],
  asoebi: ['asoebi-01.png','asoebi-02.jpg','asoebi-03.jpg','asoebi-04.jpg','asoebi-05.jpg','asoebi-06.webp','asoebi-07.jpg','asoebi-08.jpg','asoebi-09.webp','asoebi-10.webp'],
  rtw: ['rtw-01.png','rtw-03.jpg','rtw-04.jpg','rtw-05.jpg','rtw-06.jpg','rtw-07.jpg','rtw-09.jpg','rtw-10.jpg'],
  ankara: ['ankara-01.png','ankara-03.jpg','ankara-04.png','ankara-05.png','ankara-06.jpg','ankara-07.jpg','ankara-08.jpg','ankara-09.png','ankara-10.png','ankara-11.jpg','ankara-12.jpg'],
  kids: ['kids-01.png','kids-02.jpg','kids-03.jpg','kids-04.jpg','kids-05.png','kids-06.jpg','kids-07.jpg','kids-08.jpg','kids-09.webp','kids-10.webp'],
  editorial: ['editorial-01.png','editorial-02.png','editorial-03.png','editorial-04.png','editorial-05.webp','editorial-06.webp','editorial-07.jpg','editorial-08.jpg','editorial-09.jpg','editorial-10.jpg'],
  fittings: ['fittings-01.png','fittings-02.jpg','fittings-03.png','fittings-04.png','fittings-05.jpg','fittings-06.jpg','fittings-07.jpg','fittings-08.jpg','fittings-09.jpg'],
  other: ['other-01.png','other-02.png','other-03.jpg','other-04.jpg','other-05.webp','other-06.webp','other-07.jpg','other-08.jpg','other-09.avif','other-10.avif'],
};

const fashionUrl = (file: string) => `${import.meta.env.BASE_URL}fashion/${file}`;
const images = (prefix: string) => (fashionFiles[prefix] || []).map(fashionUrl);
const FALLBACK = fashionUrl('bespoke-01.png');
export const FALLBACK_IMAGE = FALLBACK;

export const portfolioPieces = [
  { id:'bespoke-couture', title:'Bespoke Couture', year:'2024', category:'Tailored', description:'Completely custom garments made to measure. Every stitch intentional, every silhouette yours — from first consultation to final fitting.', tags:['Custom','Tailored','Luxury'], hero:fashionUrl('bespoke-01.png'), images:images('bespoke') },
  { id:'bridal', title:'Bridal', year:'2024', category:'Bridal Couture', description:'Bridal gowns and wedding looks crafted for the modern Nigerian bride. Structured silhouettes, raw silk, and intricate detailing.', tags:['Wedding','Gown','Ceremony'], hero:fashionUrl('bridal-01.png'), images:images('bridal') },
  { id:'aso-oke', title:'Aso-Oke', year:'2024', category:'Traditional', description:'Handwoven Yoruba Aso-Oke reinterpreted for the contemporary wardrobe — ceremonial, celebratory, and unmistakably rooted.', tags:['Yoruba','Handwoven','Heritage'], hero:fashionUrl('asooke-01.png'), images:images('asooke') },
  { id:'asoebi', title:'Asoebi', year:'2023', category:'Event Wear', description:'Coordinated collections designed for celebrations — owambes, weddings, and naming ceremonies. Matching is an art form here.', tags:['Owambe','Group','Celebration'], hero:fashionUrl('asoebi-01.png'), images:images('asoebi') },
  { id:'ready-to-wear', title:'Ready-to-Wear', year:'2024', category:'RTW', description:'Structured pieces ready for the real world. Everyday luxury — perfectly fitted off the rack, straight from our Ibadan studio.', tags:['Everyday','Collection','Wearable'], hero:fashionUrl('rtw-01.png'), images:images('rtw') },
  { id:'ankara', title:'Ankara', year:'2023', category:'Print', description:'Bold African wax-print designs shaped into modern silhouettes. Color is power — and every pattern tells a story.', tags:['African Print','Wax','Color'], hero:fashionUrl('ankara-01.png'), images:images('ankara') },
  { id:'kids', title:'Kids', year:'2024', category:"Children's Wear", description:'Miniature couture for little royals. Traditional and contemporary designs crafted for children — because fashion starts early.', tags:['Children','Mini','Playful'], hero:fashionUrl('kids-01.png'), images:images('kids') },
  { id:'editorial-shoot', title:'Editorial / Shoot', year:'2023', category:'Editorial', description:'High-concept fashion photography and campaign lookbooks. When a garment becomes a statement and the camera tells the whole story.', tags:['Campaign','Lookbook','Concept'], hero:fashionUrl('editorial-01.png'), images:images('editorial') },
  { id:'fittings', title:'Fittings', year:'2024', category:'Studio', description:'Inside our Ibadan studio — the behind-the-scenes of creation. Where fabric meets body and ideas become reality, stitch by stitch.', tags:['Studio','Process','BTS'], hero:fashionUrl('fittings-01.png'), images:images('fittings') },
  { id:'other', title:'Other Pieces', year:'2023', category:'Miscellaneous', description:"One-of-a-kind commissions, experimental pieces, and special collaborations that don't fit neatly into a category — because great work rarely does.", tags:['Capsule','Collab','Special'], hero:fashionUrl('other-01.png'), images:images('other') },
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
