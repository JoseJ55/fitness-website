import HomeNavbar from "@/components/HomeNavbar";
import Hero from "@/components/Shop/Hero";
import Shop from "@/components/Shop/Shop";
import ProductDetails from "@/components/Shop/ProductDetails";

export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-start relative overflow-hidden">
        <HomeNavbar />
        {/* <Hero /> */}
        <Shop />
        <ProductDetails />
      </main>
    );
  }