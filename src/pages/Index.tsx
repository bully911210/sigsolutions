
import React, { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    document.title = "SIG Solutions";
  }, []);

  return (
    <div className="app-container">
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src="/lovable-uploads/sig-solutions-logo.png" alt="SIG Solutions Logo" />
          </div>
          <nav className="desktop-nav">
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#solutions">Solutions</a></li>
              <li><a href="#leadership">Leadership</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="mobile-nav-trigger">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </header>

      <div className="mobile-menu">
        <div className="mobile-menu-close">
          <i className="fa-solid fa-times"></i>
        </div>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#solutions">Solutions</a></li>
          <li><a href="#leadership">Leadership</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="animate-fade-in">Supercharge Your Business with Digital Innovation</h1>
              <p className="animate-fade-in delay-200">We deliver strategic solutions that drive growth and maximize efficiency in your organization.</p>
              <div className="hero-cta animate-fade-in delay-400">
                <a href="#contact" className="btn btn-primary">Get Started</a>
                <a href="#solutions" className="btn btn-outline">Explore Solutions</a>
              </div>
            </div>
          </div>
        </section>

        <div className="client-carousel">
          <div className="container">
            <h3 className="carousel-title">Trusted By Industry Leaders</h3>
            <div className="carousel-track" id="carousel-track">
              <div className="carousel-slide">
                <img src="client1.png" alt="Client 1" />
              </div>
              <div className="carousel-slide">
                <img src="client2.png" alt="Client 2" />
              </div>
              <div className="carousel-slide">
                <img src="client3.png" alt="Client 3" />
              </div>
              <div className="carousel-slide">
                <img src="client4.png" alt="Client 4" />
              </div>
              <div className="carousel-slide">
                <img src="client5.png" alt="Client 5" />
              </div>
              <div className="carousel-slide">
                <img src="client6.png" alt="Client 6" />
              </div>
            </div>
          </div>
        </div>

        <section id="about" className="about-section">
          <div className="container">
            <div className="section-heading">
              <h2>About SIG Solutions</h2>
              <p>Innovative Solutions for Modern Businesses</p>
            </div>
            <div className="about-content">
              <div className="about-text">
                <p>SIG Solutions is a leading provider of innovative digital solutions designed to streamline operations, enhance customer experiences, and drive business growth. With our expertise in technology and strategic planning, we help businesses navigate the complexities of the digital landscape and achieve their objectives.</p>
                <p>Our team of experts brings together years of industry experience and technical know-how to deliver tailored solutions that address your specific needs and challenges. We are committed to excellence, innovation, and client satisfaction in everything we do.</p>
              </div>
              <div className="about-stats">
                <div className="stat-item">
                  <h3>10+</h3>
                  <p>Years of Experience</p>
                </div>
                <div className="stat-item">
                  <h3>200+</h3>
                  <p>Satisfied Clients</p>
                </div>
                <div className="stat-item">
                  <h3>95%</h3>
                  <p>Client Retention</p>
                </div>
                <div className="stat-item">
                  <h3>24/7</h3>
                  <p>Expert Support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="solutions-section">
          <div className="container">
            <div className="section-heading">
              <h2>Our Click-Close-Collect Solution</h2>
              <p>Comprehensive Digital Transformation Services</p>
            </div>
            
            <div className="process-flow">
              <div className="process-item">
                <div className="process-icon blue">
                  <i className="fa-solid fa-mouse-pointer"></i>
                </div>
                <h3>Click</h3>
                <p style={{ fontWeight: 500, marginBottom: '1rem' }}>We generate qualified leads to fuel your sales pipeline.</p>
                <p style={{ color: 'rgba(15, 23, 42, 0.7)', fontSize: '0.875rem' }}>Our advanced lead generation strategies target high-value prospects tailored to your subscription-based products and services.</p>
              </div>
              
              <div className="process-connector">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
              
              <div className="process-item">
                <div className="process-icon purple">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <h3>Close</h3>
                <p style={{ fontWeight: 500, marginBottom: '1rem' }}>We close YOUR products to OUR qualified leads, maximizing conversion rates.</p>
                <p style={{ color: 'rgba(15, 23, 42, 0.7)', fontSize: '0.875rem' }}>Our expert sales teams are trained in your subscription-based products, ensuring persuasive and accurate representation to our qualified leads.</p>
              </div>
              
              <div className="process-connector">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
              
              <div className="process-item">
                <div className="process-icon green">
                  <i className="fa-solid fa-money-bill-wave"></i>
                </div>
                <h3>Collect</h3>
                <p style={{ fontWeight: 500, marginBottom: '1rem' }}>We manage recurring billing, minimizing churn and maximizing cash flow.</p>
                <p style={{ color: 'rgba(15, 23, 42, 0.7)', fontSize: '0.875rem' }}>Our specialized recovery strategies and customer retention techniques ensure consistent revenue stream maintenance for your subscription services.</p>
              </div>
            </div>
            
            <div className="solutions-grid">
              <div className="solution-card">
                <div className="solution-icon">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <h3>Strategic Growth</h3>
                <p>Data-driven approaches to scale your business effectively and sustainably.</p>
              </div>
              <div className="solution-card">
                <div className="solution-icon">
                  <i className="fa-solid fa-users"></i>
                </div>
                <h3>Customer Acquisition</h3>
                <p>Targeted strategies to attract and convert high-value customers.</p>
              </div>
              <div className="solution-card">
                <div className="solution-icon">
                  <i className="fa-solid fa-robot"></i>
                </div>
                <h3>Process Automation</h3>
                <p>Streamline operations with intelligent automation solutions.</p>
              </div>
              <div className="solution-card">
                <div className="solution-icon">
                  <i className="fa-solid fa-headset"></i>
                </div>
                <h3>Customer Success</h3>
                <p>Proactive approaches to maximize customer satisfaction and retention.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="leadership" className="leadership-section">
          <div className="container">
            <div className="section-heading">
              <h2>Our Leadership</h2>
              <p>Meet the Team Behind Our Success</p>
            </div>
            
            <div className="leadership-grid">
              <div className="leadership-card">
                <div className="leadership-icon">
                  <i className="fa-solid fa-bullseye"></i>
                </div>
                <h3>Strategic Vision</h3>
                <p>Our leadership team brings clarity and foresight to navigate complex business landscapes.</p>
              </div>
              <div className="leadership-card">
                <div className="leadership-icon">
                  <i className="fa-solid fa-lightbulb"></i>
                </div>
                <h3>Innovation Focus</h3>
                <p>We drive continuous improvement and embrace cutting-edge solutions.</p>
              </div>
              <div className="leadership-card">
                <div className="leadership-icon">
                  <i className="fa-solid fa-handshake"></i>
                </div>
                <h3>Client Partnership</h3>
                <p>We build lasting relationships based on trust, transparency, and mutual success.</p>
              </div>
              <div className="leadership-card">
                <div className="leadership-icon">
                  <i className="fa-solid fa-bolt"></i>
                </div>
                <h3>Execution Excellence</h3>
                <p>Our systems ensure every lead is engaged promptly, driving efficient growth.</p>
              </div>
            </div>
            
            {/* Directors Section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center glass p-6 rounded-xl">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <i className="fa-solid fa-user text-blue-500 text-xl"></i>
                </div>
                <h4 className="text-lg font-semibold mb-1">Franz Badenhorst</h4>
                <p className="text-gray-600 mb-0">Shareholder</p>
              </div>
              
              <div className="text-center glass p-6 rounded-xl">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <i className="fa-solid fa-user text-blue-500 text-xl"></i>
                </div>
                <h4 className="text-lg font-semibold mb-1">Johannes Stoker</h4>
                <p className="text-gray-600 mb-0">Shareholder</p>
              </div>
              
              <div className="text-center glass p-6 rounded-xl">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <i className="fa-solid fa-user text-blue-500 text-xl"></i>
                </div>
                <h4 className="text-lg font-semibold mb-1">Charles Castle</h4>
                <p className="text-gray-600 mb-0">Shareholder</p>
              </div>
              
              <div className="text-center glass p-6 rounded-xl">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <i className="fa-solid fa-user text-blue-500 text-xl"></i>
                </div>
                <h4 className="text-lg font-semibold mb-1">Ivan Taljard</h4>
                <p className="text-gray-600 mb-0">Shareholder</p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="contact" className="contact-section">
          <div className="container">
            <div className="section-heading">
              <h2>Contact Us</h2>
              <p>Get in Touch to Discuss Your Business Needs</p>
            </div>
            
            <div className="contact-container">
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa-solid fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p>123 Business Avenue, Suite 500<br />Cape Town, South Africa</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>info@sigsolutions.co.za</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <p>+27 21 123 4567</p>
                  </div>
                </div>
              </div>
              
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <img src="/lovable-uploads/sig-solutions-logo.png" alt="SIG Solutions Logo" className="footer-logo" />
              <p>SIG Solutions helps businesses thrive in the digital era with innovative strategies and technologies.</p>
              <div className="social-links">
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
            
            <div className="footer-links-group">
              <h4>Services</h4>
              <ul className="footer-links">
                <li><a href="#solutions">Click - Lead Generation</a></li>
                <li><a href="#solutions">Close - Conversion Solutions</a></li>
                <li><a href="#solutions">Collection - Customer Retention</a></li>
              </ul>
            </div>
            
            <div className="footer-links-group">
              <h4>Company</h4>
              <ul className="footer-links">
                <li><a href="#about">About Us</a></li>
                <li><a href="#leadership">Our Team</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            
            <div className="footer-links-group">
              <h4>Support</h4>
              <ul className="footer-links">
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 SIG Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
