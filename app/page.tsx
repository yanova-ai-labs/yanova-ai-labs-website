import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { OneClickSection } from '@/components/sections/OneClickSection';
import { SolutionsSection } from '@/components/sections/SolutionsSection';
import { AIPlatformSection } from '@/components/sections/AIPlatformSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { CTASection } from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <OneClickSection />
      <SolutionsSection />
      <AIPlatformSection />
      <TechStackSection />
      <TrustSection />
      <CTASection />
    </>
  );
}
