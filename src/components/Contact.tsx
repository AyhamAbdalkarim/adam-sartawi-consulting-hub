import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  LinkedinIcon,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Transform Your Organization
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to take your HR strategy to the next level? Let's discuss how we can 
            work together to achieve your organizational goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card/80 backdrop-blur-sm border-border animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Get in Touch</CardTitle>
              <p className="text-muted-foreground">
                Send me a message and I'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">First Name</label>
                  <Input placeholder="John" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">Last Name</label>
                  <Input placeholder="Doe" className="bg-background/50" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground">Email</label>
                <Input type="email" placeholder="john@company.com" className="bg-background/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground">Company</label>
                <Input placeholder="Your Company Name" className="bg-background/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground">Message</label>
                <Textarea 
                  placeholder="Tell me about your HR challenges and how I can help..."
                  className="min-h-32 bg-background/50"
                />
              </div>
              <Button variant="hero" size="lg" className="w-full text-lg py-6">
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Contact Details */}
            <Card className="bg-card/80 backdrop-blur-sm border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-card-foreground">Email</div>
                      <div className="text-muted-foreground">adam@hrconsulting.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-card-foreground">Phone</div>
                      <div className="text-muted-foreground">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-card-foreground">Location</div>
                      <div className="text-muted-foreground">New York, NY, USA</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <LinkedinIcon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-card-foreground">LinkedIn</div>
                      <div className="text-muted-foreground">linkedin.com/in/adamsartawi</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-card/80 backdrop-blur-sm border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold text-card-foreground">Availability</h3>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Response Time</span>
                    <span>Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Consultation Type</span>
                    <span>In-person & Virtual</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-primary text-primary-foreground border-0">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-semibold mb-2">Schedule a Free Consultation</h3>
                <p className="mb-4 opacity-90">
                  Let's discuss your HR challenges and explore solutions tailored to your needs.
                </p>
                <Button variant="secondary" size="lg" className="w-full">
                  Book 30-Minute Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;