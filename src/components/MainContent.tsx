import { HeroSection } from "./sections/HeroSection";
import { QuickLinksSection } from "./sections/QuickLinksSection";
import { AboutSection } from "./sections/AboutSection";
import { NewsSection } from "./sections/NewsSection";
import { GallerySection } from "./sections/GallerySection";
import { ContactSection } from "./sections/ContactSection";
import { FooterSection } from "./sections/FooterSection";

export function MainContent() {
  return (
    <main className="flex-1">
      <HeroSection />
      <QuickLinksSection />
      <AboutSection />
      <NewsSection />
      <GallerySection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
