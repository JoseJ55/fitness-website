import HomeNavbar from "@/components/HomeNavbar";
import Hero from "@/components/Trainers/Hero";

export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-start">
        <HomeNavbar />
        <Hero />
      </main>
    );
  }