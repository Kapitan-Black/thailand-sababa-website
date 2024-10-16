import footer from "../assets/footer.png";

const Footer = () => {
  return (
    <div dir="rtl" className="relative">
      <img
        src={footer}
        className="w-full h-[400px] md:h-[300px] object-cover mt-24 opacity-40"
      />

      {/* Overlay for the footer content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row md:gap-2 text-lg font-semibold">
          <p className="text-center">טלפון חירום בתאילנד</p>
          <p className="text-center">6654147845+</p>
        </div>
        <div className="flex flex-col md:flex-row md:gap-2 text-lg font-semibold">
          <p className="text-center">וואטסאפ לקוחות בתאילנד</p>
          <p className="text-center">6651324874+</p>
        </div>

        <div className="text-lg font-semibold">
          <p className="text-center">כתובתנו</p>
          <p dir="ltr" className="text-center">
            1000 1st FL. 40 Thong Lo Khlong Tan Nuea, Watthana, Bangkok 10110
          </p>
        </div>
        <a
          href="mailto:contact@example.com"
          className="mt-4 text-xl font-bold underline hover:text-blue-600"
        >
          השארת פרטים
        </a>
      </div>

      {/* Copyright text at the bottom */}
      <div className="absolute bottom-0 w-full text-center text-white bg-black bg-opacity-50 py-2">
        <p>&copy; Thailand-Sababa</p>
      </div>
    </div>
  );
};

export default Footer;
