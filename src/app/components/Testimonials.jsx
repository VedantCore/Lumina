'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Product Manager at Linear",
    text: "Lumina completely changed how I organize my sprint planning. It's like having a second brain.",
    avatar: "/avatars/1.png" // We'll handle images gracefully if missing
  },
  {
    name: "David Chen",
    role: "DevRel at Vercel",
    text: "The local-first approach is a game changer. Finally, an AI tool that respects my privacy.",
    avatar: "/avatars/2.png"
  },
  {
    name: "Elena Rodriguez",
    role: "Designer at Figma",
    text: "The UI is stunning. I catch myself just staring at the animations. Oh, and it's useful too!",
    avatar: "/avatars/3.png"
  },
  {
    name: "James Wilson",
    role: "Founder at Stripe",
    text: "Knowledge management was broken until Lumina. It just works.",
    avatar: "/avatars/4.png"
  }
];

const companies = [
  "Acme Corp", "Linear", "Vercel", "Stripe", "Raycast", "Notion"
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-950 overflow-hidden">
      
      {/* 1. Social Proof / Logos */}
      <div className="max-w-6xl mx-auto px-4 mb-20 text-center">
        <p className="text-sm text-slate-500 mb-8 font-medium">TRUSTED BY TEAMS AT</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Simple Text Logos for now - replace with SVGs for pro look */}
          {companies.map((brand, i) => (
            <span key={i} className="text-xl md:text-2xl font-bold text-slate-400 font-mono tracking-tighter">
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* 2. Testimonials Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Loved by <span className="text-indigo-400">builders.</span>
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto">
          Join 10,000+ users who have upgraded their workflow.
        </p>
      </div>

      {/* 3. Infinite Marquee Cards */}
      <div className="relative flex overflow-hidden group">
        
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-slate-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-slate-950 to-transparent z-10" />

        {/* The Scrolling Track */}
        <motion.div 
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 20 // Adjust speed here
          }}
        >
          {/* Repeat list twice to create seamless loop */}
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <div 
              key={i} 
              className="w-[350px] md:w-[450px] glass-card rounded-2xl p-8 flex-shrink-0 hover:border-indigo-500/30 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white leading-tight">{t.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">{t.role}</p>
                </div>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed whitespace-normal">
                "{t.text}"
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}