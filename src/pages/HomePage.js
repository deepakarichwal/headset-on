import { useEffect } from "react";
import FeaturedProducts from "../features/home/FeaturedProducts";
import Hero from "../features/home/Hero";
import useTitle from "../hooks/useTitle";

function HomePage() {
  useEffect(function () {
    document.title = "Headset ON";
  }, []);
  // useTitle("Headset ON");
  return (
    <div>
      <Hero />
      <FeaturedProducts />
    </div>
  );
}

export default HomePage;
