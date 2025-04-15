import { useEffect } from 'react'

// Layout Components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// Section Components
import Hero from './components/sections/Hero'
import TransparencyCounter from './components/sections/TransparencyCounter'
import Services from './components/sections/Services'
import CaseStudies from './components/sections/CaseStudies'
import WhySigWorks from './components/sections/WhySigWorks'
import Testimonials from './components/sections/Testimonials'
import AboutUs from './components/sections/AboutUs'
import Contact from './components/sections/Contact'

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerHeight = 80; // Approximate header height
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // Back to top button
    const handleScroll = () => {
      const backToTopButton = document.getElementById('back-to-top');
      if (backToTopButton) {
        if (window.scrollY > 300) {
          backToTopButton.classList.remove('hidden');
        } else {
          backToTopButton.classList.add('hidden');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Hero />
        <TransparencyCounter />
        <Services />
        <CaseStudies />
        <WhySigWorks />
        <Testimonials />
        <AboutUs />
        <Contact />
      </main>

      <Footer />

      {/* Back to Top Button */}
      <button
        id="back-to-top"
        type="button"
        onClick={scrollToTop}
        className="hidden fixed bottom-8 right-8 bg-[#001F54] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:bg-[#001845] focus:outline-none z-50"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  )
}

export default App
