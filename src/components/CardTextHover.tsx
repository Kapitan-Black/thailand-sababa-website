// type Props = {
//   image: string;
//   title: string;
//   hoverText: string;
// };

// const CardTextHover = ({ image, title, hoverText }: Props) => {
//   return (
//     <div className="md:flex-1 relative md:h-[400px] h-[300px] rounded-xl overflow-hidden shadow-lg group">
//       {/* Outer wrapper for scaling */}
//       <div className="w-full h-full transform transition-transform duration-300 group-hover:scale-105">
//         {/* Background image */}
//         <div
//           className="w-full h-full bg-cover bg-center flex flex-col justify-between"
//           style={{ backgroundImage: `url(${image})` }}
//         >
//           <div className="absolute top-20 w-full text-white md:text-2xl font-semibold p-4 text-center transform transition-transform duration-300 group-hover:scale-110">
//             {title}
//           </div>

//           <div className="absolute bottom-10 bg-black bg-opacity-40 w-full text-white md:text-lg p-8 text-center transform transition-transform duration-300  group-hover:scale-110 ">
//             {hoverText}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardTextHover;


type Props = {
  image: string;
  title: string;
  hoverText: string;
};

const CardTextHover = ({ image, title, hoverText }: Props) => {
  return (
    <div className="md:flex-1 relative md:h-[400px] h-[300px] rounded-xl overflow-hidden shadow-lg group">
      {/* Outer wrapper for scaling */}
      <div className="w-full h-full transform transition-transform duration-300 group-hover:scale-105">
        {/* Background image */}
        <div
          className="w-full h-full bg-cover bg-center flex flex-col justify-between"
          style={{ backgroundImage: `url(${image})` }}
        >
          {/* Title */}
          <div className="absolute top-20 w-full text-white md:text-2xl font-semibold p-4 text-center transform transition-transform duration-300 group-hover:scale-110">
            {title}
          </div>

          {/* Hover text sliding up from the bottom */}
          <div className="absolute bottom-0 bg-black bg-opacity-40 w-full text-white md:text-lg p-8 text-center transform translate-y-full transition-transform duration-700 group-hover:-translate-y-10">
            {hoverText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTextHover;
