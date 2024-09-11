import HomeNavbar from "@/components/HomeNavbar";
import Hero from "@/components/Trainers/Hero";
import Info from "@/components/Trainers/Info";
import Trainers from "@/components/Trainers/Trainers";
import Schedule from "@/components/Trainers/Schedule";

export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-start">
        <HomeNavbar />
        <Hero />
        <Info />
        <Trainers />
        {/* <Schedule /> */}
      </main>
    );
  }