type Props = {
  image: string;
  title: string;
  hoverText: string;
};

const CardTextHover = ({ image, title, hoverText }: Props) => {
  return (
    <div className="md:flex-1 relative md:h-[400px] h-[300px] rounded-xl overflow-hidden shadow-lg group">
      <div
        className="w-full h-full bg-cover bg-center flex flex-col justify-between"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute top-0 w-full text-white text-4xl md:text-5xl p-4 text-center">
          {title}
        </div>
        <div className="absolute bottom-0 bg-black bg-opacity-40 w-full text-white text-lg md:text-xl p-4 text-center transform translate-y-full transition-transform duration-500 group-hover:-translate-y-1/2">
          {hoverText}
        </div>
      </div>
    </div>
  );
};

export default CardTextHover;
