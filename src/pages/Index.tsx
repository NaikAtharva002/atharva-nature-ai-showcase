import Header from "@/components/Header";
import About from "@/components/About";
import InteractiveSkills from "@/components/InteractiveSkills";
import WorkExperience from "@/components/WorkExperience";
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
      <WorkExperience />
      <BentoGrid />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
