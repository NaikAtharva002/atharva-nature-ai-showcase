import Header from "@/components/Header";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <About />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
