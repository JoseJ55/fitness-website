import HomeNavbar from "@/components/HomeNavbar";
import Hero from "@/components/Shop/Hero";
import Shop from "@/components/Shop/Shop";

export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-start">
        <HomeNavbar />
        <Hero />
        <Shop />
      </main>
    );
  }