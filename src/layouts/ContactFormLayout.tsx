import Footer from "@/components/Footer";
import Header from "@/components/Header";
import img from "../assets/hero.jpg";


type Props = {
  children: React.ReactNode;
  showContactLink?: boolean;
};


const ContactFormLayout = ({ children }: Props) => {
  return (
    <>
      <div
        // className="min-h-screen bg-cover bg-center bg-no-repeat p-10"
        // style={{ backgroundImage: `url(${img})` }}
      >
        <div className="flex flex-col p-2 sm:container mx-auto flex-1 py-10">
          <Header showContactLink={false} />
        </div>
        <div
          className="flex flex-col justify-center md:px-8 md:mx-48"
          id="home"
        >
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};



export default ContactFormLayout;
