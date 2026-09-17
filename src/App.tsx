import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/hero/HeroSection';
import { ProfessionalSnapshot } from './components/snapshot/ProfessionalSnapshot';
import { PortfolioHub } from './components/hub/PortfolioHub';
import { TestimonialsSection } from './components/testimonials/TestimonialsSection';
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
    <div className="min-h-screen bg-[#FAF9F6] text-[#0F172A] flex flex-col font-sans selection:bg-[#08B9BD]/20 selection:text-[#005C5C]">
      {/* 1. Sticky Navigation Bar with CV Download */}
      <Navbar onOpenContactWithService={handleOpenContactWithService} />

      <main className="flex-1">
        {/* 2. Inspiration-Styled Hero (Photo + Brush Aura + Official Seal + Metrics + Mini Experience) */}
        <HeroSection />

        {/* 3. 'What Do I Help?' Interactive Discipline Showcase */}
        <ProfessionalSnapshot />

        {/* 4. Streamlined Interactive Portfolio Hub (Tabs & Dropdown to eliminate long-page fatigue) */}
        <PortfolioHub onOpenContactWithService={handleOpenContactWithService} />

        {/* 5. 'People Talk About Us' (Client & Project Endorsements) */}
        <TestimonialsSection />

        {/* 6. Contact & Collaboration Intake Form */}
        <ContactSection prefilledOpportunity={contactPrefill} />
      </main>

      {/* 7. Corporate Engineering Footer */}
      <Footer />
    </div>
  );
}

export default App;
