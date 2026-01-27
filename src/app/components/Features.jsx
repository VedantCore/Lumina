import { Brain, Search, Zap, Shield } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Intelligence baked into <br /> <span className="text-slate-500">every pixel.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-[800px] md:h-[600px]">
          
          {/* Large Card */}
          <div className="md:col-span-2 md:row-span-2 rounded-2xl p-8 bg-slate-900 border border-slate-800 hover:border-indigo-500/30 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity">
               <Brain size={120} className="text-indigo-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Neural Context</h3>
            <p className="text-slate-400">Lumina understands your notes like a human would. It connects dots between projects, dates, and people automatically.</p>
          </div>

          {/* Tall Card */}
          <div className="rounded-2xl p-8 bg-slate-900 border border-slate-800 flex flex-col justify-end relative overflow-hidden">
             <div className="absolute top-4 right-4 bg-indigo-500/20 p-2 rounded-lg">
               <Search className="text-indigo-400" />
             </div>
             <h3 className="text-xl font-bold mb-2">Semantic Search</h3>
             <p className="text-slate-400 text-sm">Don't remember the keyword? Just describe what you're looking for.</p>
          </div>

          {/* Small Card 1 */}
          <div className="rounded-2xl p-8 bg-slate-900 border border-slate-800">
            <Zap className="mb-4 text-yellow-400" />
            <h3 className="text-xl font-bold">Instant Sync</h3>
          </div>

          {/* Small Card 2 */}
          <div className="rounded-2xl p-8 bg-slate-900 border border-slate-800">
             <Shield className="mb-4 text-emerald-400" />
             <h3 className="text-xl font-bold">Local-First</h3>
          </div>
        </div>
      </div>
    </section>
  );
}