import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";



type Props = {
    children: React.ReactNode;
}

const Layout = ({children}: Props) => {
    return (
      <div className="flex flex-col min-h-screen p-2 sm:container  mx-auto flex-1 py-10">
        <Header />
        <Hero />
        <div className="">{children}</div>
        {/* <ContactForm/> */}
        <Footer />
      </div>
    );
     
}

export default Layout;