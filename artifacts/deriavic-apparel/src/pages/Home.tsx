import { Hero } from '@/components/home/Hero';
import { AboutStrip } from '@/components/home/AboutStrip';
import { ThreeShowcase } from '@/components/home/ThreeShowcase';
import { PortfolioPreview } from '@/components/home/PortfolioPreview';
import { ProcessSection } from '@/components/home/ProcessSection';
import { InteractiveChart } from '@/components/home/InteractiveChart';
import { ServicesAccordion } from '@/components/home/ServicesAccordion';
import { Testimonials } from '@/components/home/Testimonials';
import { CtaStrip } from '@/components/home/CtaStrip';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <AboutStrip />
      <ThreeShowcase />
      <PortfolioPreview />
      <ProcessSection />
      <InteractiveChart />
      <ServicesAccordion />
      <Testimonials />
      <CtaStrip />
    </main>
  );
}
