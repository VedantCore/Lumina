'use client';

import Link from 'next/link';
import { motion } from 'framer-motion'; // <--- This was missing

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
    >
      {/* Fixed: CSS classes applied directly here instead of using @apply */}
      <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-full px-6 py-3 flex items-center justify-between gap-8 max-w-2xl w-full shadow-lg shadow-indigo-500/10">
        
        {/* Logo */}
        <div className="font-bold text-xl tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Lumina
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-6 text-sm text-slate-400 font-medium">
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="#demo" className="hover:text-white transition-colors">Demo</Link>
          <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
        </div>

        {/* CTA Button */}
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)]">
          Get Started
        </button>
      </div>
    </motion.nav>
  );
}