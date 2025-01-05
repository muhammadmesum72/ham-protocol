import About from "@/components/Pages/Main/About";
import Hero from "@/components/Pages/Main/Hero";
import Mint from "@/components/Pages/Main/Mint";
import EcoSystem from "@/components/Pages/Main/EcoSystem";
import RevenueSystem from "@/components/Pages/Main/RevenueSystem";
import TopStakers from "@/components/Pages/Main/TopStakers";
import Community from "@/components/Pages/Main/Community";
import Faqs from "@/components/Pages/Main/Faqs";
import Partners from "@/components/Pages/Main/Partners";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <section id="nfts">
        <Mint />
      </section>
      <section id="ecosystem">
        <EcoSystem />
      </section>
      <RevenueSystem />
      <section id="topstakers">
        <TopStakers />
      </section>
      <Community />
      <Faqs />
      <section id="partners">
        <Partners />
      </section>
    </div>
  );
}
