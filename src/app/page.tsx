import HeroSection from '../components/HeroSection';
import FoundersSection from '../components/FoundersSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import ProcessSection from '../components/ProcessSection';
import TechStackSection from '../components/TechStackSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AchievementsSection from '../components/AchievementsSection';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FoundersSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <TechStackSection />
      <AchievementsSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </div>
  );
}
