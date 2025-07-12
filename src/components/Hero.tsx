import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";
import heroImage from "@/assets/hero-consultation.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional consultation environment" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Adam Sartawi
                <span className="block text-primary mt-2">HR Consultant</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
                Transforming organizations through strategic HR solutions and expert consultation
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => scrollToSection('services')}
                  className="text-lg px-8 py-6"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="professional" 
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="text-lg px-8 py-6"
                >
                  Get in Touch
                </Button>
              </div>
              
              {/* Quick Contact */}
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>adam@hrconsulting.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative animate-slide-up">
            <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-elegant border border-border">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-card-foreground">
                  Why Choose Professional HR Consultation?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Strategic workforce planning and optimization</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Compliance and risk management expertise</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Employee engagement and retention strategies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;