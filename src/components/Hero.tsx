import { useLocation } from "react-router-dom";
import hero from "../assets/hero.jpg";
import { useEffect } from "react";



const Hero = () => {
   const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [location]);
  return (
    <div dir="rtl" className="relative" id="hero">
      <img
        src={hero}
        className="w-full h-[500px] md:h-[600px] object-cover mt-24"
      />
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl md:text-2xl lg:text-4xl font-bold text-center">
      תאילנד בסבבה בלי כאבי ראש מיותרים
      </h1>
      {/* <img
        src={logo}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[250px] lg:w-[500px] md:w-[400px] sm:w-[300px]"
      /> */}
    </div>
  );
};

export default Hero;
