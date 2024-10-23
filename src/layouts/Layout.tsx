import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";



type Props = {
  children: React.ReactNode;
  showHero?: boolean;
};

const Layout = ({ children, showHero }: Props) => {

  return (
    <>
      <div
       
      >
        {showHero && <Hero />}
        {/* <Hero/> */}
        <div className="flex flex-col p-2 sm:container mx-auto flex-1 py-10">
          <Header showBackLink={false} />
        </div>
        <div
          className="flex flex-col justify-center md:px-8 lg:mx-20 2xl:mx-48"
          id="home"
        >
          {children}
        </div>

      </div>
        <Footer />
    </>
  );
};

export default Layout;
