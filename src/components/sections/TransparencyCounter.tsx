import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaChartLine, FaUsers, FaMoneyBillWave } from 'react-icons/fa';

const TransparencyCounter = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  const counterData = [
    {
      icon: <FaMoneyBillWave className="text-4xl text-[#001F54]" />,
      title: 'Invested in Growth',
      value: 1250000,
      prefix: 'R',
      suffix: '',
      description: 'Spent on Ads',
    },
    {
      icon: <FaChartLine className="text-4xl text-[#001F54]" />,
      title: 'Leads Received',
      value: 25000,
      prefix: '',
      suffix: '+',
      description: 'And Growing',
    },
    {
      icon: <FaUsers className="text-4xl text-[#001F54]" />,
      title: 'Members Joined',
      value: 8500,
      prefix: '',
      suffix: '+',
      description: 'Through Our Campaigns',
    },
  ];

  return (
    <section id="transparency" className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Growth in Real-Time</h2>
          <p className="section-subtitle">
            Transparency is at the core of our business. Here's a snapshot of our performance metrics.
          </p>
        </div>

        <div 
          ref={ref} 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {counterData.map((counter, index) => (
            <div 
              key={index} 
              className="card p-8 text-center transform transition-all duration-500"
              style={{ 
                transitionDelay: `${index * 150}ms`,
                opacity: hasAnimated ? 1 : 0,
                transform: hasAnimated ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <div className="flex justify-center mb-4">
                {counter.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{counter.title}</h3>
              <div className="text-3xl md:text-4xl font-bold text-[#001F54] mb-2">
                {hasAnimated ? (
                  <CountUp
                    start={0}
                    end={counter.value}
                    duration={2.5}
                    separator=","
                    prefix={counter.prefix}
                    suffix={counter.suffix}
                    useEasing={true}
                  />
                ) : (
                  `${counter.prefix}0${counter.suffix}`
                )}
              </div>
              <p className="text-gray-600">{counter.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransparencyCounter;
