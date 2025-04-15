import { useInView } from 'react-intersection-observer';
import {
  FaUserTie,
  FaFileAlt,
  FaLaptopCode,
  FaUsers
} from 'react-icons/fa';

const WhySigWorks = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const reasons = [
    {
      icon: <FaUserTie className="text-3xl" />,
      title: 'Veteran-Run Operations',
      description: 'Our leadership team brings decades of call center and sales experience to every campaign.',
    },
    {
      icon: <FaFileAlt className="text-3xl" />,
      title: 'Data-Backed Scripts',
      description: 'We continuously refine our conversation scripts based on performance analytics.',
    },
    {
      icon: <FaLaptopCode className="text-3xl" />,
      title: 'Custom CRM Integrations',
      description: 'Seamlessly connect with your existing systems for real-time data flow and reporting.',
    },

    {
      icon: <FaUsers className="text-3xl" />,
      title: 'Dedicated Agent Management',
      description: 'Specialized team leaders provide ongoing coaching and performance optimization.',
    },
  ];

  return (
    <section id="why-sig" className="py-20 bg-[#001F54] text-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why SIG Works</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Our approach combines industry expertise, cutting-edge technology, and a relentless focus on results.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transition-all duration-500"
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 text-white">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold">{reason.title}</h3>
              </div>
              <p className="text-gray-300">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <blockquote className="text-2xl md:text-3xl font-bold italic mb-6">
            "Other call centers burn leads. We close them."
          </blockquote>
          <a href="#contact" className="btn btn-primary bg-white text-[#001F54] hover:bg-gray-100">
            Start Your Campaign
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhySigWorks;
