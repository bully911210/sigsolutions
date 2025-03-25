
import { PhoneCall, BarChart3, Users, Award, ArrowRight, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Transition from "../components/Transition";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ClickToCollection from "../components/ClickToCollection";

const Index = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation<HTMLDivElement>();
  const [ctaRef, ctaVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <Transition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <Hero 
          title="Sustainable Income Generator for Your Business"
          subtitle="SIG Solutions transforms call centers into revenue engines with our Click to Collection approach - generating leads, closing sales, and ensuring lasting customer relationships."
          cta="Discover Our Solutions"
          ctaLink="/marketing"
          backgroundClass="bg-gradient-to-br from-white via-blue-50 to-white"
        />
        
        <main id="content">
          {/* Click to Collection Section */}
          <ClickToCollection />
          
          {/* Services Section */}
          <section className="section-padding bg-gray-50">
            <div 
              ref={sectionRef}
              className={`container mx-auto transition-all duration-1000 ${
                sectionVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="mb-6">Comprehensive Call Center Solutions</h2>
                <p className="text-lg text-sig-dark/70">
                  Our integrated approach combines cutting-edge technology with expert human resources to deliver exceptional results for your business.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ServiceCard 
                  icon={<PhoneCall size={40} />}
                  title="Lead Generation"
                  description="Transform prospects into qualified leads with our data-driven call center solutions tailored to your target market."
                  delay={100}
                />
                <ServiceCard 
                  icon={<TrendingUp size={40} />}
                  title="Sales Acceleration"
                  description="Boost conversion rates with our performance-focused sales strategies and real-time analytics dashboard."
                  delay={200}
                />
                <ServiceCard 
                  icon={<Shield size={40} />}
                  title="Premium Collection"
                  description="Secure your revenue stream with our effective premium collection and customer retention strategies."
                  delay={300}
                />
              </div>
            </div>
          </section>
          
          {/* Why Choose Us */}
          <section className="section-padding bg-white">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="mb-6">Why Choose SIG Solutions?</h2>
                  <p className="text-lg text-sig-dark/70 mb-8">
                    With decades of combined experience in call center operations and business development, our team provides unmatched expertise to drive growth for your business.
                  </p>
                  
                  <div className="space-y-6">
                    <FeatureItem 
                      icon={<Award className="text-sig-blue" size={24} />}
                      title="Industry Expertise"
                      description="Our directors bring decades of experience in call center management and operations."
                    />
                    <FeatureItem 
                      icon={<Award className="text-sig-blue" size={24} />}
                      title="Data-Driven Approach"
                      description="We leverage analytics to continuously improve performance and results."
                    />
                    <FeatureItem 
                      icon={<Award className="text-sig-blue" size={24} />}
                      title="Customized Solutions"
                      description="Every business is unique. We tailor our services to your specific goals and challenges."
                    />
                  </div>
                </div>
                
                <div className="glass p-1 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1566694271453-390536dd1f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                    alt="Modern call center operations" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* Leadership Section */}
          <section className="section-padding bg-gray-50">
            <div className="container mx-auto">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="mb-6">Our Leadership</h2>
                <p className="text-lg text-sig-dark/70">
                  Meet the experienced team guiding SIG Solutions to deliver outstanding results for our clients.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <LeaderCard 
                  name="Franz Badenhorst"
                  role="Managing Director"
                  delay={100}
                />
                <LeaderCard 
                  name="Johannes Stoker"
                  role="Operations Director"
                  delay={200}
                />
                <LeaderCard 
                  name="Charles Castle"
                  role="Technology Director"
                  delay={300}
                />
                <LeaderCard 
                  name="Ivan Taljard"
                  role="Business Development Director"
                  delay={400}
                />
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section 
            ref={ctaRef}
            className={`py-20 px-6 md:px-12 lg:px-24 bg-sig-blue transition-all duration-1000 ${
              ctaVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="container mx-auto text-center">
              <h2 className="text-white mb-6">Ready to Transform Your Call Center Operations?</h2>
              <p className="text-white/80 text-lg mb-10 max-w-3xl mx-auto">
                Whether you need to generate more leads, boost sales performance, or improve customer retention, SIG Solutions has the expertise to help your business thrive.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/marketing" 
                  className="bg-white text-sig-blue px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl hover:shadow-black/10 transform transition-all duration-300 hover:scale-105"
                >
                  Explore Solutions
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-transparent text-white border border-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transform transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </Transition>
  );
};

const FeatureItem = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-4">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sig-dark/70">{description}</p>
      </div>
    </div>
  );
};

const LeaderCard = ({ 
  name, 
  role,
  delay = 0 
}: { 
  name: string; 
  role: string;
  delay?: number;
}) => {
  const [cardRef, isVisible] = useScrollAnimation<HTMLDivElement>();
  
  return (
    <div 
      ref={cardRef}
      className={`glass rounded-xl p-6 text-center transform transition-all duration-700 ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-24 h-24 bg-sig-blue/10 rounded-full mx-auto mb-4 flex items-center justify-center">
        <Users className="text-sig-blue" size={32} />
      </div>
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-sig-dark/70 mb-4">{role}</p>
    </div>
  );
};

export default Index;
