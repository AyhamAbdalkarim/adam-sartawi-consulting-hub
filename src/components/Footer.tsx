import { Card } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  LinkedinIcon,
  ExternalLink
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Adam Sartawi</h3>
            <p className="text-muted-foreground">
              Professional HR Consultant specializing in organizational transformation 
              and strategic human resources solutions.
            </p>
            <div className="flex items-center gap-2">
              <LinkedinIcon className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">linkedin.com/in/adamsartawi</span>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Talent Acquisition</li>
              <li>HR Policy & Compliance</li>
              <li>Performance Management</li>
              <li>Training & Development</li>
              <li>HR Systems & Analytics</li>
              <li>Employee Relations</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  About Adam
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <span className="hover:text-primary transition-colors cursor-pointer">Case Studies</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>adam@hrconsulting.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>New York, NY, USA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Adam Sartawi HR Consulting. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-primary transition-colors cursor-pointer">Terms of Service</span>
              <span className="hover:text-primary transition-colors cursor-pointer">Cookie Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;