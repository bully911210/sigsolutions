
import { PhoneCall, BarChart3, BookOpen, Target, Zap, TrendingUp, CheckCircle2 } from "lucide-react";
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
          title="Innovative Call Center Solutions"
          subtitle="High-conversion marketing platform for lead generation, sales acceleration, and professional training."
          backgroundClass="bg-gradient-to-br from-white via-blue-50 to-white"
        />
        
        <main id="content">
          {/* Lead Generation Section */}
          <section id="lead-generation" className="section-padding bg-white">
            <div className="container mx-auto">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="bg-sig-blue/10 text-sig-blue text-sm px-4 py-1 rounded-full mb-4 inline-block">
                  Lead Generation
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
                  Sales Solutions
                </span>
                <h2 className="mb-6">Accelerate Your Sales Process</h2>
                <p className="text-lg text-sig-dark/70">
                  Our comprehensive sales solutions help you convert more leads and close deals faster with proven methodologies.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                  
                  <div className="space-y-6">
                    <FeatureItem 
                      icon={<Zap className="text-sig-blue" size={24} />}
                      title="Sales Scripting & Optimization"
                      description="Data-tested scripts and approaches that maximize conversion at every touchpoint."
                    />
                    <FeatureItem 
                      icon={<TrendingUp className="text-sig-blue" size={24} />}
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
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                    alt="Sales team in action" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* Training Section */}
          <section id="training" className="section-padding bg-gray-50">
            <div className="container mx-auto">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="bg-sig-blue/10 text-sig-blue text-sm px-4 py-1 rounded-full mb-4 inline-block">
                  Professional Training
                </span>
                <h2 className="mb-6">Develop High-Performing Teams</h2>
                <p className="text-lg text-sig-dark/70">
                  Our comprehensive training programs equip your teams with the skills they need to excel in today's competitive marketplace.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ServiceCard 
                  icon={<BookOpen size={40} />}
                  title="Sales Methodology"
                  description="Proven frameworks and techniques to guide prospects through the buyer's journey with confidence."
                  delay={100}
                />
                <ServiceCard 
                  icon={<PhoneCall size={40} />}
                  title="Call Handling Excellence"
                  description="Master the art of effective communication, objection handling, and building rapport over the phone."
                  delay={200}
                />
                <ServiceCard 
                  icon={<BarChart3 size={40} />}
                  title="Leadership Development"
                  description="Empower your managers with the tools to coach, motivate, and drive team performance to new heights."
                  delay={300}
                />
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="section-padding bg-white">
            <div className="container mx-auto text-center">
              <div className="glass p-12 rounded-2xl max-w-4xl mx-auto">
                <h2 className="mb-6">Ready to Transform Your Call Center Performance?</h2>
                <p className="text-lg text-sig-dark/70 mb-8 max-w-3xl mx-auto">
                  Schedule a consultation with our team to learn how SIG Solutions can help you achieve your business goals.
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
