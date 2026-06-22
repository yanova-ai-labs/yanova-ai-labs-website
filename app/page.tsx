import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { CTASection } from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <CTASection />
    </>
  );
}
