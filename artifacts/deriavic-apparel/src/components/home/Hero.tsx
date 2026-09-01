import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({target:containerRef,offset:['start start','end start']});
  const yParallax = useTransform(scrollYProgress,[0,1],[0,200]);
  const opacity = useTransform(scrollYProgress,[0,.8],[1,0]);
  const headlineLines=[{text:'we design',delay:.2},{text:'the future,',delay:.3}];
  return <div ref={containerRef} className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden pt-24 bg-background">
    <div className="container mx-auto px-6 md:px-12 relative z-10"><motion.div style={{y:yParallax,opacity}} className="max-w-5xl">
      {headlineLines.map(line=><div key={line.text} className="overflow-hidden"><motion.h1 className="font-display text-[12vw] md:text-[8vw] font-bold leading-[0.9] tracking-tighter text-white" initial={{y:'100%'}} animate={{y:0}} transition={{delay:line.delay,type:'spring',stiffness:100,damping:20}}>{line.text}</motion.h1></div>)}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mt-4 overflow-hidden"><div className="overflow-hidden order-1 md:order-2"><motion.h1 className="font-display text-[12vw] md:text-[8vw] font-bold leading-[0.9] tracking-tighter text-white" initial={{y:'100%'}} animate={{y:0}} transition={{delay:.4,type:'spring',stiffness:100,damping:20}}>of fashion.</motion.h1></div><motion.a href={`${import.meta.env.BASE_URL}contact`} className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-black font-bold text-xl hover:scale-105 transition-transform order-2 md:order-1">Hire Us</motion.a></div>
    </motion.div></div>
    <motion.div className="w-full mt-8 md:mt-16 h-[38vh] md:h-[58vh] relative overflow-hidden" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.8,duration:1.2}}><video src={`${import.meta.env.BASE_URL}hero-intro.mp4`} autoPlay muted loop playsInline className="w-full h-full object-cover"/><div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none"/><div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"/></motion.div>
  </div>;
}
