import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Wifi, FileSpreadsheet, HardDrive, Bot } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Internet of Things (IoT)",
      provider: "MKCL",
      icon: <Wifi className="h-8 w-8 text-primary" />,
      description: "Comprehensive IoT development and implementation"
    },
    {
      title: "Advanced Excel",
      provider: "MKCL", 
      icon: <FileSpreadsheet className="h-8 w-8 text-primary" />,
      description: "Advanced data analysis and spreadsheet management"
    },
    {
      title: "Hardware and Networking",
      provider: "MKCL",
      icon: <HardDrive className="h-8 w-8 text-primary" />,
      description: "Computer hardware troubleshooting and network configuration"
    },
    {
      title: "Amazon Q in Code & Play Event",
      provider: "Amazon",
      icon: <Bot className="h-8 w-8 text-primary" />,
      description: "AI-powered coding assistant and development tools"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-gradient-nature">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground">Professional certifications and achievements</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="p-8 shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-105 bg-gradient-card group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{cert.title}</h3>
                  <Badge variant="secondary" className="mb-3">
                    <Award className="h-3 w-3 mr-1" />
                    {cert.provider}
                  </Badge>
                  <p className="text-muted-foreground">{cert.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;