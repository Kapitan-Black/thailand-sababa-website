import logo from "../assets/Logo.png"

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-b-4 border-b-gray-200 p-1 fixed top-0 left-0 w-full bg-white z-20 shadow-lg">
      <div className="container mx-auto flex justify-between">
        <Link
          to="/contact-form"
          className="hover:text-blue-500 flex flex-col justify-center"
        >
          <p className="md:text-2xl from-semibold font-serif text-center">
            השאירו פרטים
          </p>
          <p className="text-sm md:text-normal font-serif text-center">
            ונחזור אליכם עם ההצעה הטובה ביותר
          </p>
        </Link>
        <Link to="/">
          <img className="md:h-28 h-24" src={logo} alt="logo" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
