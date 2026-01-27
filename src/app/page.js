import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import InteractiveDemo from '@/app/components/InteractiveDemo';
import Features from '@/app/components/Features';
import Testimonials from '@/app/components/Testimonials';
import Pricing from '@/app/components/Pricing';
import FAQ from '@/app/components/FAQ';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="relative z-10">
        <InteractiveDemo />
        <Features />
        <Testimonials /> {/* <--- Add this here */}
        <Pricing />
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}