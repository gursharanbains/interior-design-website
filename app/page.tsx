import Brands from "@/components/Brands";
import Connect from "@/components/Connect";
import GetEstimate from "@/components/GetEstimate";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <div className="xl:bg-grid xl:bg-center xl:bg-repeat-y fixed top-0 bottom-0 left-0 right-0 -z-20"></div>
      <Hero />
      <Services />
      <GetEstimate />
      <Testimonials />
      <Brands />
      <Projects />
      <Stats />
      <Connect />
    </main>
  );
}
