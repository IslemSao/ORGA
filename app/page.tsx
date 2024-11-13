import Hero from '@/components/sections/Hero';
import Agenda from '@/components/sections/Agenda';
import Slider from '@/components/sections/Slider';
import Speakers from '@/components/sections/Speakers';
import Footer from '@/components/sections/Footer';
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
        <Speakers />
        <Agenda />
        <Slider />
        <FAQ />
      <Footer />
    </main>
  );
}