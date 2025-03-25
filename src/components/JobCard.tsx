
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface JobCardProps {
  title: string;
  location: string;
  type: string;
  description: string;
  id: string;
  delay?: number;
}

const JobCard = ({ 
  title, 
  location, 
  type, 
  description, 
  id, 
  delay = 0 
}: JobCardProps) => {
  const [cardRef, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={cardRef}
      className={`glass p-6 rounded-xl transform transition-all duration-700 hover:shadow-lg ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex space-x-3 mt-2 md:mt-0">
          <span className="bg-sig-blue/10 text-sig-blue text-sm px-3 py-1 rounded-full">
            {location}
          </span>
          <span className="bg-sig-blue/10 text-sig-blue text-sm px-3 py-1 rounded-full">
            {type}
          </span>
        </div>
      </div>
      <p className="text-sig-dark/70 mb-4 line-clamp-2">{description}</p>
      <Link 
        to={`/careers/${id}`} 
        className="inline-flex items-center text-sig-blue font-medium hover:underline"
      >
        Apply Now <ArrowRight size={16} className="ml-1" />
      </Link>
    </div>
  );
};

export default JobCard;
