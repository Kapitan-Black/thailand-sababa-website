import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";


type Props = {
  children: React.ReactNode;
  // showHero?: boolean;
};

const Layout = ({ children }: Props) => {
  return (
    <>

      {/* {showHero && <Hero/>} */}
      <Hero/>
      <div className="flex flex-col p-2 sm:container mx-auto flex-1 py-10">
        <Header />
      </div>
      <div className="flex flex-col justify-center md:px-8 md:mx-48">{children}</div>

      <Footer />
    </>
  );
};

export default Layout;
