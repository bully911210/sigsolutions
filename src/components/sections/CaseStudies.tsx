import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaTimes } from 'react-icons/fa';

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  category: string;
  summary: string;
  image: string;
  results: {
    leads: string;
    conversion: string;
    roi: string;
  };
  testimonial: {
    quote: string;
    author: string;
    position: string;
  };
  fullReport: string;
}

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: 'National Fundraising Campaign',
      client: 'Hope Foundation',
      category: 'Non-Profit',
      summary: 'Increased monthly donors by 215% through targeted calling campaign.',
      image: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      results: {
        leads: '5,000+',
        conversion: '18.5%',
        roi: '310%',
      },
      testimonial: {
        quote: "SIG Solutions transformed our fundraising approach. Their team's dedication and strategic calling methods helped us reach our annual target in just 4 months.",
        author: 'Sarah Johnson',
        position: 'Director of Development, Hope Foundation',
      },
      fullReport: 'Our comprehensive campaign for Hope Foundation focused on reconnecting with lapsed donors and finding new supporters. Using a data-driven approach, we segmented the audience based on previous giving patterns and interest areas. Our specialized fundraising team conducted over 15,000 calls, resulting in 5,000+ qualified leads and an 18.5% conversion rate to monthly donors. The campaign achieved a 310% ROI within the first year, with an average donation value increase of 28% compared to previous campaigns.',
    },
    {
      id: 2,
      title: 'B2B Sales Acceleration',
      client: 'TechGrowth Solutions',
      category: 'Technology',
      summary: 'Generated 120+ qualified sales appointments for enterprise software.',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      results: {
        leads: '350+',
        conversion: '34.2%',
        roi: '275%',
      },
      testimonial: {
        quote: "The quality of leads delivered by SIG Solutions exceeded our expectations. Their team's ability to understand our complex product offering and communicate it effectively to prospects was impressive.",
        author: 'Michael Chen',
        position: 'Sales Director, TechGrowth Solutions',
      },
      fullReport: 'For TechGrowth Solutions, we developed a targeted B2B outreach campaign focused on mid to large enterprises in the financial and healthcare sectors. Our team conducted extensive research to identify decision-makers and created customized scripts addressing specific pain points in their operations. Through 1,200+ calls, we generated 350+ qualified leads and secured 120 sales appointments. The campaign achieved a 34.2% conversion rate from lead to appointment, resulting in 28 new client acquisitions and a 275% ROI within 6 months.',
    },
    {
      id: 3,
      title: 'Customer Retention Program',
      client: 'Lifestyle Fitness',
      category: 'Health & Fitness',
      summary: 'Reduced membership cancellations by 45% through proactive outreach.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      results: {
        leads: '2,800+',
        conversion: '62.5%',
        roi: '420%',
      },
      testimonial: {
        quote: "SIG Solutions helped us identify at-risk members and reconnect with them before they cancelled. Their retention specialists truly understand how to communicate value and address concerns.",
        author: 'Lisa Ndlovu',
        position: 'Membership Director, Lifestyle Fitness',
      },
      fullReport: 'Lifestyle Fitness was experiencing a high rate of membership cancellations, particularly after the first three months. We implemented a proactive retention program that identified at-risk members through usage patterns and engagement metrics. Our retention specialists conducted personalized outreach to 2,800+ members, addressing specific concerns and highlighting underutilized benefits. The campaign resulted in a 45% reduction in cancellations, with 62.5% of contacted members renewing their memberships. Additionally, we generated 420+ upsells to premium membership tiers, delivering a 420% ROI on the campaign investment.',
    },
  ];

  const openModal = (caseStudy: CaseStudy) => {
    setSelectedCase(caseStudy);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCase(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Proven Results</h2>
          <p className="section-subtitle">
            Real campaigns, real outcomes. See how we've helped organizations like yours achieve measurable growth.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((caseStudy, index) => (
            <div
              key={caseStudy.id}
              className="card overflow-hidden transition-all duration-500"
              style={{
                transitionDelay: `${index * 150}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${caseStudy.image})` }}
              />
              <div className="p-6">
                <div className="text-sm font-medium text-[#001F54] mb-2">{caseStudy.category}</div>
                <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
                <p className="text-gray-600 mb-4">{caseStudy.summary}</p>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm">
                    <span className="font-medium">Client:</span> {caseStudy.client}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">ROI:</span> {caseStudy.results.roi}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => openModal(caseStudy)}
                  className="btn btn-secondary w-full"
                >
                  Read Full Report
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center">
              <h3 className="text-2xl font-bold">{selectedCase.title}</h3>
              <button
                type="button"
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label="Close modal"
              >
                <FaTimes size={24} />
              </button>
            </div>
            <div className="p-6">
              <div
                className="h-64 bg-cover bg-center rounded-lg mb-6"
                style={{ backgroundImage: `url(${selectedCase.image})` }}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="card p-4 text-center">
                  <div className="text-sm text-gray-600">Leads Generated</div>
                  <div className="text-2xl font-bold text-[#001F54]">{selectedCase.results.leads}</div>
                </div>
                <div className="card p-4 text-center">
                  <div className="text-sm text-gray-600">Conversion Rate</div>
                  <div className="text-2xl font-bold text-[#001F54]">{selectedCase.results.conversion}</div>
                </div>
                <div className="card p-4 text-center">
                  <div className="text-sm text-gray-600">Return on Investment</div>
                  <div className="text-2xl font-bold text-[#001F54]">{selectedCase.results.roi}</div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold mb-3">Client</h4>
                <p className="text-gray-700 mb-4">{selectedCase.client} - {selectedCase.category}</p>

                <h4 className="text-xl font-bold mb-3">Campaign Details</h4>
                <p className="text-gray-700 mb-4">{selectedCase.fullReport}</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <blockquote className="italic text-gray-700 mb-4">"{selectedCase.testimonial.quote}"</blockquote>
                <div className="font-medium">{selectedCase.testimonial.author}</div>
                <div className="text-sm text-gray-600">{selectedCase.testimonial.position}</div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="btn btn-primary"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CaseStudies;
