
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  cta?: string;
  ctaLink?: string;
  backgroundClass?: string;
}

const Hero = ({
  title,
  subtitle,
  cta,
  ctaLink = "#",
  backgroundClass = "bg-gradient-to-br from-white to-blue-50",
}: HeroProps) => {
  const [titleRef, titleVisible] = useScrollAnimation<HTMLHeadingElement>();
  const [subtitleRef, subtitleVisible] = useScrollAnimation<HTMLParagraphElement>();
  const [ctaRef, ctaVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section className={`min-h-screen flex flex-col justify-center ${backgroundClass}`}>
      <div className="container mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            ref={titleRef}
            className={`mb-6 transition-all duration-1000 delay-100 ${
              titleVisible ? "opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            {title}
          </h1>
          <p
            ref={subtitleRef}
            className={`text-xl md:text-2xl text-sig-dark/80 mb-10 transition-all duration-1000 delay-300 ${
              subtitleVisible ? "opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            {subtitle}
          </p>
          {cta && (
            <div
              ref={ctaRef}
              className={`transition-all duration-1000 delay-500 ${
                ctaVisible ? "opacity-100" : "opacity-0 translate-y-10"
              }`}
            >
              <a
                href={ctaLink}
                className="inline-block bg-sig-blue text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl hover:shadow-sig-blue/20 transform transition-all duration-300 hover:scale-105"
              >
                {cta}
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center pb-10">
        <a
          href="#content"
          className="animate-bounce text-sig-blue p-2 rounded-full border border-sig-blue/20"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
