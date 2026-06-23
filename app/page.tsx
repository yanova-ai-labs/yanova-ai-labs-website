import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { AIPlatformSection } from '@/components/sections/AIPlatformSection';
import { OneClickSection } from '@/components/sections/OneClickSection';
import { SolutionsSection } from '@/components/sections/SolutionsSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { CTASection } from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <AIPlatformSection />
      <OneClickSection />
      <SolutionsSection />
      <TechStackSection />
      <CTASection />
    </>
  );
}
