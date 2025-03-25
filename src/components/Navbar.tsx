
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 glass"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/"
          className="flex items-center"
        >
          <img 
            src="/lovable-uploads/sig-solutions-logo.png" 
            alt="SIG Solutions Logo" 
            className="h-12"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" label="Home" />
          <NavLink to="/marketing" label="Solutions" />
          <NavLink to="/careers" label="Careers" />
          <Link 
            to="/contact" 
            className="bg-sig-blue text-white px-5 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-sig-blue/20 transition-all duration-300"
          >
            Contact Us
          </Link>
        </nav>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-sig-dark" />
          ) : (
            <Menu className="h-6 w-6 text-sig-dark" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass mt-3 py-4 px-6 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <MobileNavLink to="/" label="Home" />
            <MobileNavLink to="/marketing" label="Solutions" />
            <MobileNavLink to="/careers" label="Careers" />
            <Link 
              to="/contact" 
              className="bg-sig-blue text-white px-5 py-2.5 rounded-full font-medium text-center hover:shadow-lg hover:shadow-sig-blue/20 transition-all duration-300"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, label }: { to: string; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`font-medium transition-colors duration-300 ${
        isActive 
          ? "text-sig-blue" 
          : "text-sig-dark hover:text-sig-blue link-hover"
      }`}
    >
      {label}
    </Link>
  );
};

const MobileNavLink = ({ to, label }: { to: string; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`font-medium py-2 transition-colors duration-300 ${
        isActive 
          ? "text-sig-blue" 
          : "text-sig-dark hover:text-sig-blue"
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;
