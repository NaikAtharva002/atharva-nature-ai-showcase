import Header from "@/components/Header";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A0908" }}>
      <ScrollProgress />
      <Header />
      <About />
      <WorkExperience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
