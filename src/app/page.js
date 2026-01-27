import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';   
import InteractiveDemo from '@/app/components/InteractiveDemo';
import Features from '@/app/components/Features';
import Pricing from '@/app/components/Pricing';
import FAQ from '@/app/components/FAQ';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 overflow-x-hidden">
      <Navbar />
      <Hero />
      <InteractiveDemo />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}