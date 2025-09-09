import Header from "@/components/Header";
import About from "@/components/About";
import InteractiveSkills from "@/components/InteractiveSkills";
import BentoGrid from "@/components/BentoGrid";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <About />
      <InteractiveSkills />
      <BentoGrid />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
