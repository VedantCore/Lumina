'use client';

export default function FAQ() {
  const faqs = [
    { q: "Is my data private?", a: "Yes. Lumina is local-first. Your notes live on your device and are encrypted when synced." },
    { q: "Does it work offline?", a: "Absolutely. You can read and write notes without an internet connection." },
    { q: "Can I import from Notion?", a: "Yes, we support one-click CSV and Markdown imports." },
    { q: "Is there a student discount?", a: "Yes! Students get 50% off the Pro plan with a valid .edu email." },
  ];

  return (
    <section className="py-24 max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details key={i} className="group border border-slate-800 rounded-lg bg-slate-900/30 open:bg-slate-900 transition-colors">
            <summary className="flex justify-between items-center p-6 cursor-pointer font-medium list-none select-none">
              {faq.q}
              <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
            </summary>
            <div className="px-6 pb-6 text-slate-400 leading-relaxed">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}