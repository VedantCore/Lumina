'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
    return (
        <section className="relative py-32 px-4 overflow-hidden">

            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950/50 to-slate-950" />

            {/* Glow Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] animate-pulse-slow" />

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">

                {/* Icon */}
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl mb-4"
                >
                    <Sparkles className="w-8 h-8 text-indigo-400" />
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-400 bg-clip-text text-transparent"
                >
                    Ready to upgrade your thinking?
                </motion.h2>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-slate-400 max-w-2xl mx-auto"
                >
                    Join 10,000+ professionals who've already transformed how they capture, organize, and rediscover knowledge.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                >
                    <Link href="/auth" className="group px-8 py-4 bg-white text-slate-950 rounded-lg font-semibold hover:bg-slate-200 transition-all shadow-lg shadow-white/20 flex items-center gap-2">
                        Start Free Trial
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <button className="px-8 py-4 bg-transparent border border-slate-700 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all">
                        Talk to Sales
                    </button>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-500 pt-8"
                >
                    <div className="flex items-center gap-2">
                        ✓ No credit card required
                    </div>
                    <div className="flex items-center gap-2">
                        ✓ 14-day free trial
                    </div>
                    <div className="flex items-center gap-2">
                        ✓ Cancel anytime
                    </div>
                </motion.div>
            </div>
        </section>
    );
}