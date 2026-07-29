import ScrollProgress from "@/components/ScrollProgress";
import Header from "@/components/Header";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import SkillsSection from "@/components/SkillsSection";
import LinkedInSection from "@/components/LinkedInSection";
import GitHubActivity from "@/components/GitHubActivity";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <ScrollProgress />
      <Header />
      <About />
      <Timeline />
      <Projects />
      <SkillsSection />
      <LinkedInSection />
      <GitHubActivity />
      <CurrentlyBuilding />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
