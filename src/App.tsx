import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/hero/HeroSection';
import { ProfessionalSnapshot } from './components/snapshot/ProfessionalSnapshot';
import { AboutSection } from './components/about/AboutSection';
import { ExpertiseSection } from './components/expertise/ExpertiseSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { BishoftuCaseStudy } from './components/featured/BishoftuCaseStudy';
import { DataAndAIShowcase } from './components/featured/DataAndAIShowcase';
import { HighwayCalculatorWidget } from './components/tools/HighwayCalculatorWidget';
import { VisualizationSection } from './components/visualization/VisualizationSection';
import { ExperienceSection } from './components/experience/ExperienceSection';
import { EducationSection } from './components/education/EducationSection';
import { ResearchSection } from './components/research/ResearchSection';
import { FreelanceSection } from './components/freelance/FreelanceSection';
import { ContactSection } from './components/contact/ContactSection';

export function App() {
  const [contactPrefill, setContactPrefill] = useState<string>('');

  const handleOpenContactWithService = (serviceName: string) => {
    setContactPrefill(serviceName);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFA] text-[#0F172A] flex flex-col font-sans selection:bg-[#08B9BD]/20 selection:text-[#005C5C]">
      {/* 1. Sticky Navigation Bar */}
      <Navbar onOpenContactWithService={handleOpenContactWithService} />

      <main className="flex-1">
        {/* 2. Hero Section with Interactive CAD/GIS Viewport */}
        <HeroSection />

        {/* 3. Quick Professional Snapshot (5 Pillar Cards) */}
        <ProfessionalSnapshot />

        {/* 4. Selected Projects Portfolio with Category Filter & Case Study Modals */}
        <ProjectsSection />

        {/* 5. About Section ("Engineering Meets Data") */}
        <AboutSection />

        {/* 6. Interactive Expertise Section (5 Disciplines) */}
        <ExpertiseSection />

        {/* 7. Flagship Case Study: Bishoftu Interchange and Access Road */}
        <BishoftuCaseStudy />

        {/* 8. Interactive Highway Geometric Calculator Tool */}
        <div className="py-12 bg-[#F8FAFA] border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <HighwayCalculatorWidget />
          </div>
        </div>

        {/* 9. Data & AI Section: Addis Ababa AI Traffic Management */}
        <DataAndAIShowcase />

        {/* 10. 3D Infrastructure Visualization Gallery with Lightbox */}
        <VisualizationSection />

        {/* 11. Professional Career Experience */}
        <ExperienceSection />

        {/* 12. Education & Professional Certifications */}
        <EducationSection />

        {/* 13. Research Interests & MSc/PhD Collaboration Portal */}
        <ResearchSection onOpenContactForResearch={handleOpenContactWithService} />

        {/* 14. Freelance Engineering Services & Scoping */}
        <FreelanceSection onSelectService={handleOpenContactWithService} />

        {/* 15. Final Contact Section & Opportunity Intake */}
        <ContactSection prefilledOpportunity={contactPrefill} />
      </main>

      {/* 16. Complete Professional Footer */}
      <Footer />
    </div>
  );
}

export default App;
