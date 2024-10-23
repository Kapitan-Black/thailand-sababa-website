type Props = {
  image: string;
  title: string;
  hoverText: string;
};

const CardTextHover = ({ image, title, hoverText }: Props) => {
  return (
    <div className="md:flex-1 relative md:h-[400px] h-[300px] rounded-xl overflow-hidden shadow-lg group">
      <div
        className="w-full h-full bg-cover bg-center flex flex-col justify-between group-hover:scale-11 0"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute top-20 w-full text-white md:text-2xl p-4 text-center ">
          {title}
        </div>
        <div className="absolute bottom-10 bg-black bg-opacity-40 w-full text-white md:text-lg p-4 text-center">
          {hoverText}
        </div>
      </div>
    </div>
  );
};
// transform translate-y-full transition-transform duration-500 group-hover:-translate-y-1/2 
export default CardTextHover;
