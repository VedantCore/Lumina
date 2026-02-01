'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function InteractiveDemo() {
  const [status, setStatus] = useState('idle'); // idle, processing, done

  const handleAnalyze = () => {
    setStatus('processing');
    setTimeout(() => setStatus('done'), 2000);
  };

  return (
    <section id="demo" className="py-24 px-4 flex justify-center bg-slate-950">
      <div className="w-full max-w-4xl glass-panel rounded-2xl p-8 relative overflow-hidden">
        
        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50 blur-sm" />

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Input Side */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Raw Input</h3>
            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 text-slate-400 font-mono text-sm min-h-[150px]">
              <p>Meeting with Sarah at 2 PM to discuss the marketing launch for Q3. Need to prepare slide deck.</p>
            </div>
            <button 
              onClick={handleAnalyze}
              disabled={status === 'processing'}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-lg transition-all disabled:opacity-50"
            >
              <Sparkles size={16} />
              {status === 'processing' ? 'Analyzing...' : 'Process with Lumina'}
            </button>
          </div>

          {/* Output Side */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Structured Data</h3>
            <div className="relative bg-slate-950 p-4 rounded-lg border border-slate-800 min-h-[150px] flex flex-col gap-2">
              
              {status === 'idle' && (
                <span className="text-slate-600 italic">Waiting for input...</span>
              )}

              {status === 'processing' && (
                 <motion.div 
                   className="w-full h-1 bg-indigo-500/30 overflow-hidden rounded-full"
                 >
                    <motion.div 
                      className="h-full bg-indigo-500"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5 }}
                    />
                 </motion.div>
              )}

              {status === 'done' && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-2 text-emerald-400 text-sm">
                    <CheckCircle2 size={14} /> <span>Event created</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded border border-indigo-500/30">Person: Sarah</span>
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded border border-cyan-500/30">Time: 2:00 PM</span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded border border-purple-500/30">Tag: Marketing</span>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}