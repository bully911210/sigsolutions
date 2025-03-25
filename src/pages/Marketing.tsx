
import { PhoneCall, BarChart3, BookOpen, Target, TrendingUp, Shield, CheckCircle2 } from "lucide-react";
import Transition from "../components/Transition";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Marketing = () => {
  const [statsRef, statsVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <Transition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <Hero 
          title="Click to Collection Solutions"
          subtitle="Our end-to-end approach generates leads, drives sales, and secures premium collection while building lasting customer relationships."
          backgroundClass="bg-gradient-to-br from-white via-blue-50 to-white"
        />
        
        <main id="content">
          {/* Lead Generation Section */}
          <section id="lead-generation" className="section-padding bg-white">
            <div className="container mx-auto">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="bg-sig-blue/10 text-sig-blue text-sm px-4 py-1 rounded-full mb-4 inline-block">
                  Click - Lead Generation
                </span>
                <h2 className="mb-6">Transform Prospects Into Qualified Leads</h2>
                <p className="text-lg text-sig-dark/70">
                  Our data-driven approach to lead generation delivers high-quality prospects that match your ideal customer profile.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ServiceCard 
                  icon={<Target size={40} />}
                  title="Targeted Outreach"
                  description="Precision-targeted campaigns that connect with your ideal prospects at the right moment with the right message."
                  delay={100}
                />
                <ServiceCard 
                  icon={<PhoneCall size={40} />}
                  title="Inbound Lead Qualification"
                  description="Expert teams that efficiently qualify and prioritize inbound inquiries to maximize conversion potential."
                  delay={200}
                />
                <ServiceCard 
                  icon={<BarChart3 size={40} />}
                  title="Performance Analytics"
                  description="Real-time dashboards that track campaign performance and provide actionable insights for optimization."
                  delay={300}
                />
              </div>
            </div>
          </section>
          
          {/* Statistics Section */}
          <section 
            ref={statsRef}
            className={`py-20 px-6 md:px-12 lg:px-24 bg-sig-blue transition-all duration-1000 ${
              statsVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <StatCard 
                  number="40%"
                  label="Average Increase in Qualified Leads"
                  delay={100}
                />
                <StatCard 
                  number="65%"
                  label="Contact Rate Improvement"
                  delay={200}
                />
                <StatCard 
                  number="28%"
                  label="Reduction in Cost Per Lead"
                  delay={300}
                />
                <StatCard 
                  number="3.5x"
                  label="ROI on Marketing Spend"
                  delay={400}
                />
              </div>
            </div>
          </section>
          
          {/* Sales Solutions Section */}
          <section id="sales-solutions" className="section-padding bg-white">
            <div className="container mx-auto">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="bg-sig-blue/10 text-sig-blue text-sm px-4 py-1 rounded-full mb-4 inline-block">
                  Sell - Conversion Solutions
                </span>
                <h2 className="mb-6">We Sell YOUR Products to OUR Leads</h2>
                <p className="text-lg text-sig-dark/70">
                  Our expert sales teams are trained to represent your products effectively, converting our qualified leads into your loyal customers.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                  
                  <div className="space-y-6">
                    <FeatureItem 
                      icon={<TrendingUp className="text-sig-blue" size={24} />}
                      title="Sales Scripting & Optimization"
                      description="Data-tested scripts and approaches that maximize conversion at every touchpoint."
                    />
                    <FeatureItem 
                      icon={<BarChart3 className="text-sig-blue" size={24} />}
                      title="Performance Coaching"
                      description="Real-time feedback and personalized coaching to improve individual and team performance."
                    />
                    <FeatureItem 
                      icon={<CheckCircle2 className="text-sig-blue" size={24} />}
                      title="Quality Assurance"
                      description="Rigorous monitoring and evaluation processes that maintain consistent service excellence."
                    />
                  </div>
                </div>
                
                <div className="glass p-1 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                    alt="Call center team in action" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* Collection Section */}
          <section id="collection" className="section-padding bg-gray-50">
            <div className="container mx-auto">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="bg-sig-blue/10 text-sig-blue text-sm px-4 py-1 rounded-full mb-4 inline-block">
                  Collection - Customer Retention
                </span>
                <h2 className="mb-6">Secure Revenue and Build Lasting Relationships</h2>
                <p className="text-lg text-sig-dark/70">
                  We handle premium collection while implementing proactive customer care strategies that enhance loyalty and reduce attrition.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ServiceCard 
                  icon={<Shield size={40} />}
                  title="Secure Payment Processing"
                  description="Streamlined premium collection with multiple payment options and easy processing for maximum customer convenience."
                  delay={100}
                />
                <ServiceCard 
                  icon={<CheckCircle2 size={40} />}
                  title="Relationship Management"
                  description="Proactive client support that addresses concerns before they become issues, building trust and loyalty."
                  delay={200}
                />
                <ServiceCard 
                  icon={<BarChart3 size={40} />}
                  title="Customer Retention Analytics"
                  description="Advanced analytics that identify at-risk customers and provide actionable insights to improve retention rates."
                  delay={300}
                />
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="section-padding bg-white">
            <div className="container mx-auto text-center">
              <div className="glass p-12 rounded-2xl max-w-4xl mx-auto">
                <h2 className="mb-6">Ready to Implement Our Click to Collection Solution?</h2>
                <p className="text-lg text-sig-dark/70 mb-8 max-w-3xl mx-auto">
                  Schedule a consultation with our team to learn how SIG Solutions can help you generate leads, close sales, and secure lasting customer relationships.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-sig-blue text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl hover:shadow-sig-blue/20 transform transition-all duration-300 hover:scale-105"
                >
                  Contact Us Today
                </a>
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

const StatCard = ({ 
  number, 
  label,
  delay = 0 
}: { 
  number: string; 
  label: string;
  delay?: number;
}) => {
  return (
    <div 
      className="text-center transform transition-all duration-700"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-4xl font-bold text-white mb-2">{number}</h3>
      <p className="text-white/80">{label}</p>
    </div>
  );
};

export default Marketing;
