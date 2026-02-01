import { Check } from 'lucide-react';

export default function Pricing() {
  const tiers = [
    { name: "Starter", price: "$0", features: ["1,000 Notes", "Basic Search", "Web Access"] },
    { name: "Pro", price: "$12", features: ["Unlimited Notes", "AI Analysis", "Graph View", "Priority Support"], featured: true },
    { name: "Enterprise", price: "Custom", features: ["SSO", "Audit Logs", "Dedicated Manager"] },
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Simple Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative rounded-2xl p-8 glass-card flex flex-col transition-all hover:scale-105 ${tier.featured ? 'border-indigo-500/50 shadow-2xl shadow-indigo-500/20' : 'hover:border-slate-600'}`}>
              {tier.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white px-3 py-1 text-xs rounded-full">Most Popular</span>}
              <h3 className="text-lg font-medium text-slate-400">{tier.name}</h3>
              <div className="text-4xl font-bold mt-2 mb-6">{tier.price}</div>
              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                    <Check size={16} className="text-indigo-400" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-2 rounded-lg font-semibold transition-colors ${tier.featured ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}>
                Choose {tier.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}