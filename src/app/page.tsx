import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import Stats from '@/components/home/Stats';
import ServicePillars from '@/components/home/ServicePillars';
import HowWeWork from '@/components/home/HowWeWork';
import WhySIG from '@/components/home/WhySIG';
import Testimonials from '@/components/home/Testimonials';
import WhoFit from '@/components/home/WhoFit';
import FAQ from '@/components/home/FAQ';
import CTABanner from '@/components/home/CTABanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Stats />
      <ServicePillars />
      <HowWeWork />
      <WhySIG />
      <Testimonials />
      <WhoFit />
      <FAQ />
      <CTABanner />
    </>
  );
}
