import logo from "../assets/Logo.png"
import { Link } from "react-router-dom";

type HeaderProps = {
  showBackLink?: boolean; // Accept the prop
  showContactLink?: boolean;
};

const Header = ({ showBackLink, showContactLink = true }: HeaderProps) => {
  console.log(showContactLink)
  return (
    <div className="py-2 fixed top-0 left-0 w-full bg-white z-20 shadow-lg">
      <div
        className={`mx-4 lg:mx-56 flex ${
          showContactLink ? "justify-between" : "justify-end"
        }`}
      >
        {showContactLink && (
          <Link
            to="/#form"
            className="flex flex-col justify-center text-sm md:text-lg text-gray-700  hover:text-black px-4 -my-2 rounded-lg hover:scale-105"
          >
            <div>
              <p className="text-center">לחצו כאן</p>
              <p className="text-center">להשארת פרטים</p>
            </div>
          </Link>
        )}

        {showBackLink && (
          <Link to="/#hero" className="mt-10 text-xl">
            חזרה לעמוד הבית
          </Link>
        )}

        <Link to="/#hero">
          <img className="w-36 md:w-64" src={logo} alt="logo" />
        </Link>
      </div>
      {/* <div
        className="absolute bottom-0 left-0 w-full h-1"
        style={{
          background:
            "linear-gradient(to right, red 12.5%, yellow 12.5%, yellow 25%, green 25%, green 37.5%, orange 37.5%, orange 50%, blue 50%, blue 62.5%, yellow 62.5%, yellow 75%, green 75%, green 87.5%, orange 87.5%)",
        }}
      ></div> */}
    </div>
  );
};

export default Header;
