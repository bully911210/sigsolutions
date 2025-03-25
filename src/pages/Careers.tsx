
import { useState } from "react";
import { Search, MapPin, Briefcase } from "lucide-react";
import Transition from "../components/Transition";
import Hero from "../components/Hero";
import JobCard from "../components/JobCard";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Mock job data
const jobs = [
  {
    id: "call-center-agent",
    title: "Call Center Agent",
    location: "Pretoria",
    type: "Full-time",
    description: "Join our team as a Call Center Agent and be the voice of our clients. You'll handle customer inquiries, provide information, and resolve issues with professionalism and care.",
    requirements: [
      "Excellent communication skills",
      "Customer service orientation",
      "Problem-solving abilities",
      "Basic computer proficiency",
      "High school diploma or equivalent"
    ],
    benefits: [
      "Competitive salary",
      "Performance bonuses",
      "Medical aid contributions",
      "Professional development opportunities",
      "Modern and comfortable work environment"
    ]
  },
  {
    id: "team-leader",
    title: "Call Center Team Leader",
    location: "Pretoria",
    type: "Full-time",
    description: "Lead a team of call center agents to achieve performance targets while maintaining high quality standards. You'll coach, monitor, and motivate your team to excel.",
    requirements: [
      "2+ years of call center experience",
      "Leadership abilities",
      "Performance management skills",
      "Problem-solving capabilities",
      "Strong communication skills"
    ],
    benefits: [
      "Competitive salary",
      "Performance bonuses",
      "Medical aid contributions",
      "Leadership development program",
      "Career advancement opportunities"
    ]
  },
  {
    id: "quality-assurance",
    title: "Quality Assurance Specialist",
    location: "Pretoria",
    type: "Full-time",
    description: "Monitor call quality, provide feedback, and implement improvement strategies to maintain service excellence across our call center operations.",
    requirements: [
      "2+ years in call center QA",
      "Attention to detail",
      "Analytical skills",
      "Coaching abilities",
      "Knowledge of quality standards"
    ],
    benefits: [
      "Competitive salary",
      "Performance bonuses",
      "Medical aid contributions",
      "Professional certification support",
      "Flexible working arrangements"
    ]
  },
  {
    id: "sales-agent",
    title: "Outbound Sales Agent",
    location: "Pretoria",
    type: "Full-time",
    description: "Generate new business through outbound calls to prospects. You'll present products/services, overcome objections, and close sales to meet targets.",
    requirements: [
      "Previous sales experience preferred",
      "Goal-oriented mindset",
      "Resilience and persistence",
      "Excellent communication skills",
      "Basic computer proficiency"
    ],
    benefits: [
      "Base salary + commission structure",
      "Uncapped earning potential",
      "Sales incentives and contests",
      "Medical aid contributions",
      "Professional sales training"
    ]
  },
  {
    id: "operations-manager",
    title: "Call Center Operations Manager",
    location: "Pretoria",
    type: "Full-time",
    description: "Oversee daily operations of our call center, manage team leaders, implement strategies, and drive continuous improvement to meet business objectives.",
    requirements: [
      "5+ years of call center management experience",
      "Strong leadership abilities",
      "Strategic thinking",
      "Operational excellence focus",
      "Business acumen"
    ],
    benefits: [
      "Competitive executive salary package",
      "Performance bonuses",
      "Comprehensive medical aid",
      "Retirement contributions",
      "Executive development program"
    ]
  },
  {
    id: "trainer",
    title: "Call Center Trainer",
    location: "Pretoria",
    type: "Full-time",
    description: "Design and deliver training programs for new and existing call center staff. You'll develop curriculum, conduct sessions, and evaluate training effectiveness.",
    requirements: [
      "3+ years of call center experience",
      "Previous training experience",
      "Excellent presentation skills",
      "Curriculum development abilities",
      "Assessment and evaluation skills"
    ],
    benefits: [
      "Competitive salary",
      "Performance bonuses",
      "Medical aid contributions",
      "Train-the-trainer certifications",
      "Flexible working arrangements"
    ]
  }
];

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [introRef, introVisible] = useScrollAnimation<HTMLDivElement>();

  const handleSearch = () => {
    const results = jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           job.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation = locationFilter === "" || job.location === locationFilter;
      const matchesType = jobTypeFilter === "" || job.type === jobTypeFilter;
      
      return matchesSearch && matchesLocation && matchesType;
    });
    
    setFilteredJobs(results);
  };

  const handleReset = () => {
    setSearchTerm("");
    setLocationFilter("");
    setJobTypeFilter("");
    setFilteredJobs(jobs);
  };

  return (
    <Transition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <Hero 
          title="Join Our Team"
          subtitle="Explore career opportunities with SIG Solutions and be part of a dynamic team transforming the call center industry."
          backgroundClass="bg-gradient-to-br from-white via-blue-50 to-white"
        />
        
        <main id="content">
          {/* Introduction Section */}
          <section 
            ref={introRef}
            className={`section-padding bg-white transition-all duration-1000 ${
              introVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="container mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="mb-6">Why Work With Us?</h2>
                  <p className="text-lg text-sig-dark/70 mb-8">
                    At SIG Solutions, we believe our people are our greatest asset. We foster a culture of excellence, innovation, and continuous growth where every team member can thrive.
                  </p>
                  
                  <div className="space-y-6">
                    <BenefitItem 
                      title="Career Growth"
                      description="Clear advancement paths and professional development opportunities to help you reach your potential."
                    />
                    <BenefitItem 
                      title="Supportive Environment"
                      description="Collaborative culture with mentorship, regular feedback, and recognition of achievements."
                    />
                    <BenefitItem 
                      title="Competitive Compensation"
                      description="Attractive salary packages, performance bonuses, and comprehensive benefits."
                    />
                    <BenefitItem 
                      title="Work-Life Balance"
                      description="Flexible work arrangements and policies that respect your life outside of work."
                    />
                  </div>
                </div>
                
                <div className="glass p-1 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                    alt="Team collaboration" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* Job Search Section */}
          <section className="section-padding bg-gray-50">
            <div className="container mx-auto">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="mb-6">Find Your Perfect Role</h2>
                <p className="text-lg text-sig-dark/70">
                  Browse our current openings and take the next step in your career with SIG Solutions.
                </p>
              </div>
              
              <div className="glass p-6 rounded-xl mb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="search" className="block text-sm font-medium text-sig-dark">
                      Search
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-sig-blue focus:ring-2 focus:ring-sig-blue/20 outline-none transition"
                        placeholder="Job title or keyword"
                      />
                      <Search className="absolute top-3 left-3 text-gray-400" size={20} />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="location" className="block text-sm font-medium text-sig-dark">
                      Location
                    </label>
                    <div className="relative">
                      <select
                        id="location"
                        value={locationFilter}
                        onChange={(e) => setLocationFilter(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-sig-blue focus:ring-2 focus:ring-sig-blue/20 outline-none transition"
                      >
                        <option value="">All Locations</option>
                        <option value="Pretoria">Pretoria</option>
                        <option value="Johannesburg">Johannesburg</option>
                        <option value="Remote">Remote</option>
                      </select>
                      <MapPin className="absolute top-3 left-3 text-gray-400" size={20} />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="jobType" className="block text-sm font-medium text-sig-dark">
                      Job Type
                    </label>
                    <div className="relative">
                      <select
                        id="jobType"
                        value={jobTypeFilter}
                        onChange={(e) => setJobTypeFilter(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-sig-blue focus:ring-2 focus:ring-sig-blue/20 outline-none transition"
                      >
                        <option value="">All Types</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                      </select>
                      <Briefcase className="absolute top-3 left-3 text-gray-400" size={20} />
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-end">
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 rounded-lg border border-gray-200 text-sig-dark font-medium hover:bg-gray-50 transition-colors"
                  >
                    Reset
                  </button>
                  <button
                    onClick={handleSearch}
                    className="px-6 py-3 rounded-lg bg-sig-blue text-white font-medium hover:shadow-lg hover:shadow-sig-blue/20 transition-all"
                  >
                    Search Jobs
                  </button>
                </div>
              </div>
              
              <div className="space-y-6">
                {filteredJobs.length === 0 ? (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
                    <p className="text-sig-dark/70">
                      Try adjusting your search criteria or check back later for new opportunities.
                    </p>
                  </div>
                ) : (
                  filteredJobs.map((job, index) => (
                    <JobCard
                      key={job.id}
                      id={job.id}
                      title={job.title}
                      location={job.location}
                      type={job.type}
                      description={job.description}
                      delay={index * 100}
                    />
                  ))
                )}
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="section-padding bg-white">
            <div className="container mx-auto text-center">
              <div className="glass p-12 rounded-2xl max-w-4xl mx-auto">
                <h2 className="mb-6">Don't See the Right Fit?</h2>
                <p className="text-lg text-sig-dark/70 mb-8 max-w-3xl mx-auto">
                  We're always looking for talented individuals to join our team. Send us your resume, and we'll reach out when a suitable position becomes available.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-sig-blue text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl hover:shadow-sig-blue/20 transform transition-all duration-300 hover:scale-105"
                >
                  Submit Your Resume
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

const BenefitItem = ({ 
  title, 
  description 
}: { 
  title: string; 
  description: string;
}) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-4">
        <div className="w-6 h-6 rounded-full bg-sig-blue/10 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-sig-blue"></div>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sig-dark/70">{description}</p>
      </div>
    </div>
  );
};

export default Careers;
