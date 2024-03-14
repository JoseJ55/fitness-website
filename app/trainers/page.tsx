import HomeNavbar from "@/components/HomeNavbar";
import Hero from "@/components/Trainers/Hero";
import Info from "@/components/Trainers/Info";

export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-start overflow-hidden">
        <HomeNavbar />
        <Hero />
        <Info />
      </main>
    );
  }