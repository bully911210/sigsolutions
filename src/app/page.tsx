import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import WhySIG from '@/components/home/WhySIG';
import Stats from '@/components/home/Stats';
import ServicePillars from '@/components/home/ServicePillars';
import Testimonials from '@/components/home/Testimonials';
import MidFunnelCTA from '@/components/home/MidFunnelCTA';
import HowWeWork from '@/components/home/HowWeWork';
import WhoFit from '@/components/home/WhoFit';
import FAQ from '@/components/home/FAQ';
import CTABanner from '@/components/home/CTABanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhySIG />
      <Stats />
      <ServicePillars />
      <Testimonials />
      <MidFunnelCTA />
      <HowWeWork />
      <WhoFit />
      <FAQ />
      <CTABanner />
    </>
  );
}
