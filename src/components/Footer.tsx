import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="mb-4 inline-block">
              <div className="text-2xl mb-2">
                <span className="font-bold">SIG</span>
                <span className="font-light">solutions</span>
              </div>
              <p className="text-sm text-sig-dark/70">SUSTAINABLE INCOME GENERATOR</p>
            </Link>
            <p className="text-sig-dark/70 mb-6">
              Transforming businesses with our innovative Click to Collection solution for subscription-based products.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Facebook size={18} />} href="#" />
              <SocialLink icon={<Twitter size={18} />} href="#" />
              <SocialLink icon={<Linkedin size={18} />} href="#" />
              <SocialLink icon={<Instagram size={18} />} href="#" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/marketing" label="Solutions" />
              <FooterLink href="/careers" label="Careers" />
              <FooterLink href="/contact" label="Contact" />
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              <FooterLink href="/marketing#lead-generation" label="Click - Lead Generation" />
              <FooterLink href="/marketing#sales-solutions" label="Sell - Conversion Solutions" />
              <FooterLink href="/marketing#collection" label="Collection - Customer Retention" />
              <FooterLink href="/careers" label="Join Our Team" />
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-sig-blue mt-1 mr-3 flex-shrink-0" />
                <span className="text-sig-dark/70">Soutpansberg Road, Riviera, Pretoria, 0186</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-sig-blue mr-3 flex-shrink-0" />
                <a href="tel:+27621779799" className="text-sig-dark/70 hover:text-sig-blue transition-colors">
                  +27 62 177 9799
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-sig-blue mr-3 flex-shrink-0" />
                <a href="mailto:sales@sigsolutions.co.za" className="text-sig-dark/70 hover:text-sig-blue transition-colors">
                  sales@sigsolutions.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sig-dark/60 text-sm mb-4 md:mb-0">
              © {currentYear} SIG Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-sm text-sig-dark/60 hover:text-sig-blue transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-sig-dark/60 hover:text-sig-blue transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <li>
      <Link 
        to={href} 
        className="text-sig-dark/70 hover:text-sig-blue transition-colors"
      >
        {label}
      </Link>
    </li>
  );
};

const SocialLink = ({ icon, href }: { icon: React.ReactNode; href: string }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-8 h-8 flex items-center justify-center rounded-full bg-sig-blue/10 text-sig-blue hover:bg-sig-blue hover:text-white transition-colors"
    >
      {icon}
    </a>
  );
};

export default Footer;
