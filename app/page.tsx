import HomeNavbar from "@/components/HomeNavbar";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Values from "@/components/Home/Values";
import Offer from "@/components/Home/Offer";
import Links from "@/components/Home/Links";
import Contact from "@/components/Home/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <HomeNavbar />
      <About />
      <Values />
      <Offer />
      {/* <Links /> */}
      <Contact />
    </main>
  );
}
