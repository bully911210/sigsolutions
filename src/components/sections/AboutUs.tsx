import { useInView } from 'react-intersection-observer';
import { FaPhoneAlt, FaUsers, FaChartLine, FaGlobe } from 'react-icons/fa';

const AboutUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const metrics = [
    {
      icon: <FaUsers className="text-2xl" />,
      value: '30+',
      label: 'Clients Across South Africa',
    },
    {
      icon: <FaPhoneAlt className="text-2xl" />,
      value: '1M+',
      label: 'Calls Annually',
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      value: '25%',
      label: 'Avg. Conversion Improvement',
    },
    {
      icon: <FaGlobe className="text-2xl" />,
      value: '5+',
      label: 'Industries Served',
    },
  ];

  const timelineEvents = [
    {
      year: '2018',
      title: 'Founded',
      description: 'SIG Solutions was established with a focus on quality lead generation.',
    },
    {
      year: '2019',
      title: 'First Major Client',
      description: 'Secured partnership with a leading insurance provider.',
    },
    {
      year: '2020',
      title: 'Expanded Services',
      description: 'Added non-profit fundraising to our service offerings.',
    },
    {
      year: '2022',
      title: 'Technology Integration',
      description: 'Enhanced our technology stack with advanced CRM integrations.',
    },
    {
      year: '2023',
      title: 'Team Growth',
      description: 'Expanded to 50+ specialized agents across multiple campaigns.',
    },
    {
      year: '2025',
      title: 'Today',
      description: 'Serving 30+ clients with industry-leading results.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">
            SIG Solutions is a mission-driven, data-centric call center focused on delivering measurable results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div
            className="order-2 lg:order-1"
            ref={ref}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'all 0.6s ease-out'
            }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              At SIG Solutions, we combine experience, passion, and strategy to help organizations expand their reach and revenue through expert call center solutions. Our team is committed to delivering measurable results that drive growth and success for our clients.
            </p>
            <p className="text-gray-700 mb-6">
              We believe in transparency, continuous improvement, and building long-term partnerships with our clients. Our approach is data-driven, allowing us to optimize campaigns in real-time and deliver the highest possible return on investment.
            </p>
            <blockquote className="border-l-4 border-[#001F54] pl-4 italic text-gray-700 mb-6">
              "Empower businesses and non-profits with sales expertise, trust, and results to fuel long-term growth."
            </blockquote>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="text-center"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.6s ease-out',
                    transitionDelay: `${index * 150}ms`
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#001F54] text-white flex items-center justify-center mx-auto mb-2">
                    {metric.icon}
                  </div>
                  <div className="text-2xl font-bold text-[#001F54]">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="order-1 lg:order-2"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(20px)',
              transition: 'all 0.6s ease-out'
            }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Journey</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

              {/* Timeline events */}
              <div className="space-y-8">
                {timelineEvents.map((event, index) => (
                  <div
                    key={index}
                    className="relative pl-12"
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'all 0.6s ease-out',
                      transitionDelay: `${index * 150}ms`
                    }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-[#001F54] text-white flex items-center justify-center">
                      <span className="text-xs font-bold">{event.year}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">{event.title}</h4>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="#contact" className="btn btn-primary">
            Work With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
