import { Brain, Search, Zap, Shield } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Intelligence baked into <br /> <span className="text-slate-500">every pixel.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-fr gap-4 min-h-[900px] md:min-h-[600px]">
          
          {/* Neural Context Card */}
          <div className="md:col-span-1 rounded-3xl p-8 bg-gradient-to-br from-indigo-950/50 to-slate-900 border border-slate-800 hover:border-indigo-500/30 transition-all group relative overflow-hidden flex flex-col justify-end min-h-[250px]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-6 right-6 opacity-30">
               <Brain size={80} className="text-indigo-400" />
            </div>
            <p className="text-slate-400 text-xs uppercase tracking-wider mb-2 relative z-10">INTELLIGENT</p>
            <h3 className="text-2xl font-bold mb-2 relative z-10">Neural Context</h3>
            <p className="text-slate-400 text-sm relative z-10">Connects dots between projects automatically</p>
          </div>

          {/* Semantic Search Card */}
          <div className="md:col-span-2 rounded-3xl p-8 bg-gradient-to-br from-purple-950/30 to-slate-900 border border-slate-800 hover:border-purple-500/30 transition-all group relative overflow-hidden flex flex-col justify-end min-h-[250px]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-6 right-6 opacity-30">
               <Search size={80} className="text-purple-400" />
            </div>
            <p className="text-slate-400 text-xs uppercase tracking-wider mb-2 relative z-10">SEARCH</p>
            <h3 className="text-2xl font-bold mb-2 relative z-10">Semantic Search</h3>
            <p className="text-slate-400 text-sm relative z-10">Don't remember the keyword? Just describe what you're looking for.</p>
          </div>

          {/* Instant Sync Card */}
          <div className="md:col-span-1 rounded-3xl p-8 bg-gradient-to-br from-emerald-950/30 to-slate-900 border border-slate-800 hover:border-emerald-500/30 transition-all group relative overflow-hidden flex flex-col justify-end min-h-[250px]">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-6 right-6 opacity-30">
               <Zap size={60} className="text-emerald-400" />
            </div>
            <p className="text-slate-400 text-xs uppercase tracking-wider mb-2 relative z-10">PERFORMANCE</p>
            <h3 className="text-2xl font-bold relative z-10">Instant Sync</h3>
          </div>

          {/* Local-First Card */}
          <div className="md:col-span-2 rounded-3xl p-8 bg-gradient-to-br from-amber-950/20 to-slate-900 border border-slate-800 hover:border-amber-500/30 transition-all group relative overflow-hidden flex flex-col justify-end min-h-[250px]">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-6 right-6 opacity-30">
               <Shield size={80} className="text-amber-400" />
            </div>
            <p className="text-slate-400 text-xs uppercase tracking-wider mb-2 relative z-10">SECURITY</p>
            <h3 className="text-2xl font-bold mb-2 relative z-10">Local-First</h3>
            <p className="text-slate-400 text-sm relative z-10">Your data stays on your device, encrypted and private</p>
          </div>
        </div>
      </div>
    </section>
  );
}