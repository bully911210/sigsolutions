
import { ReactNode } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon, title, description, delay = 0 }: ServiceCardProps) => {
  const [cardRef, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={cardRef}
      className={`glass p-8 rounded-2xl transform transition-all duration-1000 ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-20"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-sig-blue mb-5">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-sig-dark/70">{description}</p>
    </div>
  );
};

export default ServiceCard;
