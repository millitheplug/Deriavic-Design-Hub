import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function WireframeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

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

    // 3D icosahedron vertices
    const phi = (1 + Math.sqrt(5)) / 2;
    const rawVerts: [number, number, number][] = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1],
    ];
    const edges: [number, number][] = [
      [0,1],[0,5],[0,7],[0,10],[0,11],
      [1,5],[1,7],[1,8],[1,9],
      [2,3],[2,4],[2,10],[2,11],
      [3,4],[3,6],[3,8],[3,9],
      [4,5],[4,9],[4,11],
      [5,9],[5,11],
      [6,7],[6,8],[6,10],
      [7,8],[7,10],
      [8,9],[10,11],
    ];

    const norm = Math.sqrt(1 + phi * phi);
    const verts = rawVerts.map(([x, y, z]) => [x / norm, y / norm, z / norm] as [number, number, number]);

    let t = 0;

    const project = (x: number, y: number, z: number, w: number, h: number): [number, number, number] => {
      const scale = Math.min(w, h) * 0.38;
      const fov = 3;
      const pz = z + fov;
      const px = (x / pz) * scale + w / 2;
      const py = (y / pz) * scale + h / 2;
      return [px, py, pz];
    };

    const rotateY = (x: number, y: number, z: number, a: number): [number, number, number] => [
      x * Math.cos(a) + z * Math.sin(a), y, -x * Math.sin(a) + z * Math.cos(a),
    ];
    const rotateX = (x: number, y: number, z: number, a: number): [number, number, number] => [
      x, y * Math.cos(a) - z * Math.sin(a), y * Math.sin(a) + z * Math.cos(a),
    ];

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      t += 0.006;

      const rotated = verts.map(([x, y, z]) => {
        let v = rotateY(x, y, z, t);
        v = rotateX(v[0], v[1], v[2], Math.sin(t * 0.4) * 0.3);
        return v;
      });

      const projected = rotated.map(([x, y, z]) => project(x, y, z, w, h));

      // Draw edges with depth-based opacity
      edges.forEach(([a, b]) => {
        const [ax, ay, az] = projected[a];
        const [bx, by, bz] = projected[b];
        const depth = (az + bz) / 2 - 2.5;
        const alpha = Math.max(0.04, Math.min(0.7, depth * 0.5));
        ctx.beginPath();
        ctx.strokeStyle = `rgba(245, 197, 24, ${alpha})`;
        ctx.lineWidth = 1.2;
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx, by);
        ctx.stroke();
      });

      // Draw glow dots at vertices
      projected.forEach(([px, py, pz]) => {
        const depth = pz - 2.5;
        const alpha = Math.max(0.05, Math.min(0.9, depth * 0.6));
        const size = Math.max(1, depth * 1.5);
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 197, 24, ${alpha})`;
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: 'block' }}
    />
  );
}

export function ThreeShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={containerRef} className="py-24 bg-background relative overflow-hidden flex flex-col md:flex-row items-center border-t border-white/5">
      <div className="w-full md:w-1/2 px-6 md:px-12 md:pr-0 z-10 py-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            Digital Craft
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Structure meets <br /><span className="italic text-primary">fluidity.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-lg mb-8">
            Every garment begins as geometry. We explore the space between rigid structure and soft draping, pushing the boundaries of what fabric can do before a single thread is cut.
          </p>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh] relative">
        <motion.div style={{ y }} className="w-full h-full">
          <WireframeCanvas />
        </motion.div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none hidden md:block" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none md:hidden" />
      </div>
    </section>
  );
}
