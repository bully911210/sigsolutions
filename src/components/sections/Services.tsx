import { useInView } from 'react-intersection-observer';
import { 
  FaHeadset, 
  FaChartLine, 
  FaHandHoldingHeart, 
  FaUsers, 
  FaClipboardCheck, 
  FaRobot 
} from 'react-icons/fa';

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      icon: <FaHeadset className="text-4xl" />,
      title: 'Lead Generation',
      description: 'Connecting you to your next customer through targeted outreach and qualification.',
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: 'Sales Support',
      description: 'Boost your revenue with expert assistance and professional closing techniques.',
    },
    {
      icon: <FaHandHoldingHeart className="text-4xl" />,
      title: 'Non-Profit Fundraising',
      description: 'Expand your impact with our specialized fundraising campaigns for NGOs.',
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: 'Customer Retention',
      description: 'Strengthen loyalty and keep your clients engaged with professional outreach.',
    },
    {
      icon: <FaClipboardCheck className="text-4xl" />,
      title: 'Compliance Auditing',
      description: 'Ensure your campaigns meet regulatory standards with our thorough auditing.',
    },
    {
      icon: <FaRobot className="text-4xl" />,
      title: 'Campaign Automation',
      description: 'Leverage technology to scale your outreach with intelligent automation.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">What We Do Best</h2>
          <p className="section-subtitle">
            Helping organizations grow their revenue and impact through expert call campaigns
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <div 
              key={index}
              className="card p-8 flex flex-col items-center text-center transition-all duration-500"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <div className="w-16 h-16 rounded-full bg-[#001F54] text-white flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
