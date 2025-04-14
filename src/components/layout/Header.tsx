import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold">
            <span className="text-[#001F54]">SIG</span>Solutions
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-800 hover:text-[#001F54] font-medium transition-colors">Services</a>
          <a href="#case-studies" className="text-gray-800 hover:text-[#001F54] font-medium transition-colors">Case Studies</a>
          <a href="#why-sig" className="text-gray-800 hover:text-[#001F54] font-medium transition-colors">Why SIG</a>
          <a href="#about" className="text-gray-800 hover:text-[#001F54] font-medium transition-colors">About</a>
          <a href="#contact" className="btn btn-primary">Contact Us</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4 animate-fade-in">
          <div className="container flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-gray-800 hover:text-[#001F54] font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#case-studies" 
              className="text-gray-800 hover:text-[#001F54] font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </a>
            <a 
              href="#why-sig" 
              className="text-gray-800 hover:text-[#001F54] font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Why SIG
            </a>
            <a 
              href="#about" 
              className="text-gray-800 hover:text-[#001F54] font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="btn btn-primary w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
