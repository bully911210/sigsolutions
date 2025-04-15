import { useState, useEffect, useRef } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "SIG Solutions transformed our fundraising approach. Their team's dedication and strategic calling methods helped us reach our annual target in just 4 months.",
      author: "Sarah Johnson",
      position: "Director of Development",
      company: "Hope Foundation",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    },
    {
      id: 2,
      quote: "The quality of leads delivered by SIG Solutions exceeded our expectations. Their team's ability to understand our complex product offering and communicate it effectively to prospects was impressive.",
      author: "Michael Chen",
      position: "Sales Director",
      company: "TechGrowth Solutions",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    },
    {
      id: 3,
      quote: "SIG Solutions helped us identify at-risk members and reconnect with them before they cancelled. Their retention specialists truly understand how to communicate value and address concerns.",
      author: "Lisa Ndlovu",
      position: "Membership Director",
      company: "Lifestyle Fitness",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    },
    {
      id: 4,
      quote: "Working with SIG Solutions has been a game-changer for our business. Their lead generation campaigns consistently deliver high-quality prospects that convert at nearly twice the rate of our previous provider.",
      author: "David Mokoena",
      position: "CEO",
      company: "Innovate Insurance",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    },
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentSlide, isAnimating]);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our partners have to say about working with SIG Solutions.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="card p-8 md:p-10">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <FaQuoteLeft className="text-[#001F54] opacity-20 text-4xl mb-4" />
                        <blockquote className="text-lg md:text-xl italic mb-6">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="font-bold text-lg">{testimonial.author}</div>
                        <div className="text-gray-600">
                          {testimonial.position}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md focus:outline-none z-10"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-[#001F54]" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md focus:outline-none z-10"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-[#001F54]" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-[#001F54] w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
