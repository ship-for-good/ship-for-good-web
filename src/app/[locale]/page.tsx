import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { InfoBar } from "@/components/info-bar";
import { Navbar } from "@/components/navbar";
import { Schedule } from "@/components/schedule";
import { Sponsors } from "@/components/sponsors";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <InfoBar />
        <HowItWorks />
        <Schedule />
        <FAQ />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}
