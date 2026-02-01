'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Parallax Background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/30 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] animate-float-delayed" />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="relative z-10 max-w-5xl mx-auto px-4 pt-32 pb-20 text-center space-y-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Your second brain,<br />powered by AI
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-8">
            Lumina transforms how you capture, organize, and rediscover knowledge. Let AI connect your ideas while you focus on thinking.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/auth" className="px-8 py-4 bg-white text-slate-950 rounded-lg font-semibold hover:bg-slate-200 transition-all shadow-lg shadow-white/20">
              Start Free Trial
            </Link>
            <Link href="#demo" className="px-8 py-4 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition-all border border-slate-700">
              Watch Demo
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}