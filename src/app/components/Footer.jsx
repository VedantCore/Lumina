'use client';

// NOTE: To make this work, install @supabase/supabase-js
// import { createClient } from '@supabase/supabase-js';

export default function Footer() {
  
  const handleNewsletter = (e) => {
    e.preventDefault();
    // Add Supabase logic here:
    // const { error } = await supabase.from('emails').insert({ email: formEmail });
    alert("Thanks for joining! (Supabase integration pending)");
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950 pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-2">
          <h2 className="text-2xl font-bold mb-4">Lumina</h2>
          <p className="text-slate-400 mb-6 max-w-sm">
            The second brain that actually thinks. Built for developers, designers, and visionaries.
          </p>
          <form onSubmit={handleNewsletter} className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-white outline-none focus:border-indigo-500 w-full"
            />
            <button type="submit" className="bg-white text-slate-950 px-4 py-2 rounded-lg font-bold hover:bg-slate-200">
              Join
            </button>
          </form>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Product</h4>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Changelog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-slate-600 text-sm">
        © 2026 Lumina Inc. All rights reserved.
      </div>
    </footer>
  );
}