import { useEffect } from "react";
import FeaturedProducts from "../features/home/FeaturedProducts";
import Hero from "../features/home/Hero";

function HomePage() {
  useEffect(function () {
    document.title = "Headset ON";
  }, []);
  return (
    <div>
      <Hero />
      <FeaturedProducts />
    </div>
  );
}

export default HomePage;
