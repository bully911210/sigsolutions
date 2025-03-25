
import { ArrowRight, PhoneCall, CheckCircle2, TrendingUp, Shield } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ClickToCollection = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation<HTMLDivElement>();
  
  return (
    <section 
      ref={sectionRef}
      className={`section-padding bg-white transition-all duration-1000 ${
        sectionVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="bg-sig-blue/10 text-sig-blue text-sm px-4 py-1 rounded-full mb-4 inline-block">
            Our Unique Approach
          </span>
          <h2 className="mb-6">Click to Collection Solution</h2>
          <p className="text-lg text-sig-dark/70">
            Our comprehensive end-to-end process ensures maximum conversion and customer retention for your subscription-based business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          <ProcessCard 
            icon={<CheckCircle2 size={40} />}
            title="Click"
            description="Generate high-quality leads through our advanced targeting and outreach process."
            details="We identify and engage potential clients through data-driven lead generation strategies tailored to your subscription-based product."
            delay={100}
            color="bg-blue-50"
            iconColor="text-blue-500"
            showArrow
          />
          
          <ProcessCard 
            icon={<PhoneCall size={40} />}
            title="Sell"
            description="We sell YOUR products to OUR qualified leads, maximizing conversion rates."
            details="Our expert sales teams are trained in your subscription-based products, ensuring persuasive and accurate representation to our qualified leads."
            delay={300}
            color="bg-purple-50"
            iconColor="text-purple-500"
          />
          
          <ProcessCard 
            icon={<Shield size={40} />}
            title="Collection"
            description="We manage subscription payments and build lasting customer loyalty."
            details="Our customer success teams maintain relationships with subscribers, handle payment processing, and implement strategies to reduce cancellation rates and increase lifetime value."
            delay={500}
            color="bg-green-50"
            iconColor="text-green-500"
          />
        </div>
      </div>
    </section>
  );
};

interface ProcessCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
  delay?: number;
  color: string;
  iconColor: string;
  showArrow?: boolean;
}

const ProcessCard = ({ 
  icon, 
  title, 
  description, 
  details,
  delay = 0,
  color,
  iconColor,
  showArrow = false
}: ProcessCardProps) => {
  const [cardRef, isVisible] = useScrollAnimation<HTMLDivElement>();
  
  return (
    <div className="relative">
      <div 
        ref={cardRef}
        className={`h-full ${color} rounded-2xl p-8 transform transition-all duration-1000 ${
          isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-20"
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className={`${iconColor} mb-5`}>{icon}</div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-sig-dark/90 font-medium mb-4">{description}</p>
        <p className="text-sig-dark/70 text-sm">{details}</p>
      </div>
      
      {showArrow && (
        <div className="hidden md:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-10">
          <ArrowRight size={30} className="text-sig-blue" />
        </div>
      )}
    </div>
  );
};

export default ClickToCollection;
