import Accord_Parent from "@/components/accordion";
import Feature from "@/components/feature";
import Feature_01 from "@/components/feature01";
import Feature_02 from "@/components/feature02";
import Feature_03 from "@/components/featurs03";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Overview from "@/components/overview";
import Pricing from "@/components/price";

export default function Home() {
  return (
    <main className="h-full scroll-smooth bg-zinc-950 text-white">
      <Header />

      <Hero />
      <Overview />
      <Feature />
      <Feature_01 />
      <Feature_02 />
      <Accord_Parent />
      <Pricing />
      <Footer />
    </main>
  );
}
