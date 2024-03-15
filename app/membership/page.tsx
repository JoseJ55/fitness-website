import HomeNavbar from "@/components/HomeNavbar";
import Hero from "@/components/Membership/Hero";
import Memberships from "@/components/Membership/Memberships";

export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-start">
        <HomeNavbar />
        <Hero />
        <Memberships />
      </main>
    );
  }