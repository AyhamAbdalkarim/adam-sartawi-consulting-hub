import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  BookOpen, 
  Building, 
  Clock,
  Users,
  TrendingUp
} from "lucide-react";

const About = () => {
  const stats = [
    { icon: Building, label: "Organizations Transformed", value: "150+" },
    { icon: Users, label: "Professionals Guided", value: "5,000+" },
    { icon: Clock, label: "Years of Experience", value: "12+" },
    { icon: TrendingUp, label: "Success Rate", value: "95%" }
  ];

  const certifications = [
    "SHRM-SCP (Senior Certified Professional)",
    "PHR (Professional in Human Resources)",
    "SPHR (Senior Professional in Human Resources)",
    "Certified Change Management Professional",
    "Six Sigma Green Belt"
  ];

  const expertise = [
    "Strategic HR Planning",
    "Organizational Development",
    "Change Management",
    "Talent Management",
    "HR Analytics & Metrics",
    "Employment Law",
    "Compensation & Benefits",
    "Employee Engagement"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                About Adam Sartawi
              </h2>
              <p className="text-xl text-muted-foreground">
                HR Professional & Strategic Business Partner
              </p>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                With over 12 years of experience in human resources and organizational development, 
                I specialize in transforming businesses through strategic HR initiatives and 
                people-centered solutions.
              </p>
              <p>
                My approach combines deep industry knowledge with practical experience to deliver 
                measurable results. I've helped organizations of all sizes navigate complex HR 
                challenges, from startup scaling to enterprise transformation.
              </p>
              <p>
                I believe that successful organizations are built on strong foundations of talent, 
                culture, and strategic alignment. My mission is to help businesses unlock their 
                full potential through effective HR strategies and practices.
              </p>
            </div>

            {/* Expertise Areas */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {expertise.map((area, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                    {area}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Stats and Credentials */}
          <div className="space-y-8 animate-slide-up">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 bg-card/80 backdrop-blur-sm border-border">
                  <CardContent className="space-y-3 p-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
                      <stat.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <Card className="bg-card/80 backdrop-blur-sm border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold text-card-foreground">Certifications</h3>
                </div>
                <ul className="space-y-2">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      {cert}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="bg-card/80 backdrop-blur-sm border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold text-card-foreground">Education</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="font-medium text-card-foreground">MBA in Human Resources</div>
                    <div className="text-sm text-muted-foreground">Wharton School, University of Pennsylvania</div>
                  </div>
                  <div>
                    <div className="font-medium text-card-foreground">BS in Business Administration</div>
                    <div className="text-sm text-muted-foreground">University of California, Berkeley</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;