import HomeNavbar from "@/components/HomeNavbar";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <HomeNavbar />
      <About />
    </main>
  );
}
