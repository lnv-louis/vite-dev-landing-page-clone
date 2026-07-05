import { SiteNav } from "@/components/site-nav";
import { HeroSection } from "@/components/hero-section";
import { TrustedBy } from "@/components/trusted-by";
import { FeatureSection } from "@/components/feature-section";
import { FrameworksSection } from "@/components/frameworks-section";
import { CommunitySection } from "@/components/community-section";
import { SponsorsSection } from "@/components/sponsors-section";
import { CtaSection } from "@/components/cta-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-text-1">
      <SiteNav />
      <main>
        <HeroSection />
        <TrustedBy />
        <FeatureSection />
        <FrameworksSection />
        <CommunitySection />
        <SponsorsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
