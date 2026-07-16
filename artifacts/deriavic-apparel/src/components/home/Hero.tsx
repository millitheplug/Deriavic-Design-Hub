import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function AnimatedGarmentCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    canvas.addEventListener('mousemove', onMouseMove);

    // Torus-knot approximation via parametric path
    const torusKnotPoints = (n: number) => {
      const pts: { x: number; y: number; z: number }[] = [];
      const p = 2, q = 3;
      for (let i = 0; i < n; i++) {
        const t = (i / n) * Math.PI * 2;
        const r = Math.cos(q * t) + 2;
        pts.push({
          x: r * Math.cos(p * t),
          y: r * Math.sin(p * t),
          z: -Math.sin(q * t),
        });
      }
      return pts;
    };

    const knotPts = torusKnotPoints(200);

    let angle = 0;
    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      angle += 0.006;

      const mx = (mouseRef.current.x - 0.5) * 0.4;
      const my = (mouseRef.current.y - 0.5) * 0.4;

      const scale = Math.min(w, h) * 0.1;
      const fov = 6;

      const project = (x: number, y: number, z: number) => {
        // Rotation Y
        const cosa = Math.cos(angle + mx);
        const sina = Math.sin(angle + mx);
        const x2 = x * cosa + z * sina;
        const z2 = -x * sina + z * cosa;
        // Rotation X (mouse tilt)
        const cosb = Math.cos(my * 0.5);
        const sinb = Math.sin(my * 0.5);
        const y2 = y * cosb - z2 * sinb;
        const z3 = y * sinb + z2 * cosb;
        const pz = z3 + fov;
        return {
          sx: (x2 / pz) * scale + w / 2,
          sy: (y2 / pz) * scale + h / 2,
          depth: pz,
        };
      };

      const projected = knotPts.map((p) => project(p.x, p.y, p.z));

      // Draw the knot as a glowing ribbon
      for (let i = 0; i < projected.length; i++) {
        const cur = projected[i];
        const next = projected[(i + 1) % projected.length];
        const t = i / projected.length;
        const alpha = 0.15 + 0.55 * ((cur.depth - 5.5) / 1.5);
        const lineW = 1 + 1.5 * ((cur.depth - 5.5) / 1.5);

        ctx.beginPath();
        ctx.strokeStyle = `rgba(245, 197, 24, ${Math.max(0.05, Math.min(0.75, alpha))})`;
        ctx.lineWidth = Math.max(0.5, lineW);
        ctx.moveTo(cur.sx, cur.sy);
        ctx.lineTo(next.sx, next.sy);
        ctx.stroke();
      }

      // Glow core
      const cx = w / 2, cy = h / 2;
      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(w, h) * 0.15);
      grd.addColorStop(0, 'rgba(245, 197, 24, 0.04)');
      grd.addColorStop(1, 'rgba(245, 197, 24, 0)');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: 'block', background: '#050505' }}
    />
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [videoError, setVideoError] = useState(false);

  const headlineLines = [
    { text: "we design", delay: 0.2 },
    { text: "the future,", delay: 0.3 },
  ];

  return (
    <div ref={containerRef} className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden pt-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div style={{ y: yParallax, opacity }} className="max-w-5xl">
          {headlineLines.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                className="font-display text-[12vw] md:text-[8vw] font-bold leading-[0.9] tracking-tighter text-white"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: line.delay, type: "spring", stiffness: 100, damping: 20 }}
              >
                {line.text}
              </motion.h1>
            </div>
          ))}

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mt-4 overflow-hidden">
            <motion.a
              href="/contact"
              className="hoverable inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-black font-bold text-xl hover:scale-105 transition-transform"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
            >
              Hire Us
            </motion.a>
            <div className="overflow-hidden">
              <motion.h1
                className="font-display text-[12vw] md:text-[8vw] font-bold leading-[0.9] tracking-tighter text-white"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 100, damping: 20 }}
              >
                of fashion.
              </motion.h1>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="w-full mt-12 md:mt-24 h-[40vh] md:h-[60vh] relative border-t border-b border-white/10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        {!videoError ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
            onError={() => setVideoError(true)}
          >
            <source src="/attached_assets/videos/hero-runway.mp4" type="video/mp4" />
          </video>
        ) : null}

        {/* Always show the canvas — the video error triggers showing canvas */}
        <div
          className="w-full h-full absolute inset-0"
          style={{ display: videoError ? 'block' : 'none' }}
        >
          <AnimatedGarmentCanvas />
        </div>

        {/* Trigger video error immediately if src doesn't exist — canvas is the real hero */}
        {videoError && (
          <div className="absolute inset-0">
            <AnimatedGarmentCanvas />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 pointer-events-none" />
      </motion.div>
    </div>
  );
}
