import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  ClipboardCheck, 
  TrendingUp, 
  Shield, 
  GraduationCap, 
  Settings,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Talent Acquisition & Recruitment",
      description: "Strategic recruitment planning, candidate sourcing, and selection processes to find the right talent for your organization.",
      features: ["Executive search", "Bulk hiring strategies", "Employer branding", "Interview optimization"]
    },
    {
      icon: ClipboardCheck,
      title: "HR Policy & Compliance",
      description: "Comprehensive policy development and compliance management to ensure your organization meets all regulatory requirements.",
      features: ["Policy documentation", "Compliance audits", "Legal risk assessment", "Regulatory updates"]
    },
    {
      icon: TrendingUp,
      title: "Performance Management",
      description: "Design and implement performance management systems that drive employee engagement and organizational success.",
      features: ["KPI development", "360-degree feedback", "Performance reviews", "Goal setting frameworks"]
    },
    {
      icon: GraduationCap,
      title: "Training & Development",
      description: "Custom learning and development programs to enhance employee skills and organizational capabilities.",
      features: ["Leadership development", "Skills assessments", "Training programs", "Career planning"]
    },
    {
      icon: Settings,
      title: "HR Systems & Analytics",
      description: "Implement and optimize HR technology solutions with data-driven insights for strategic decision making.",
      features: ["HRIS implementation", "People analytics", "Process automation", "Digital transformation"]
    },
    {
      icon: Shield,
      title: "Employee Relations",
      description: "Expert guidance on workplace issues, conflict resolution, and maintaining positive employee relationships.",
      features: ["Conflict mediation", "Workplace investigations", "Union relations", "Employee advocacy"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive HR Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From strategic planning to day-to-day operations, I provide end-to-end HR solutions 
            tailored to your organization's unique needs and challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 border-border bg-card/50 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mt-2">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full justify-between group-hover:bg-accent transition-colors">
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;