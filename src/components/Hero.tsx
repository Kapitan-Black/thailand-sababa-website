import hero from "../assets/hero.jpg";



const Hero = () => {
  return (
    <div dir="rtl" className="relative">
      <img
        src={hero}
        className="w-full h-[500px] md:h-[700px] object-cover mt-24"
      />
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-5xl lg:text-6xl text-center">
      תאילנד מחכה לכם, החופשה המושלמת מתחילה כאן!
      </h1>
      {/* <img
        src={logo}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[250px] lg:w-[500px] md:w-[400px] sm:w-[300px]"
      /> */}
    </div>
  );
};

export default Hero;
