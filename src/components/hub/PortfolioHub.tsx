import React, { useState } from 'react';
import { Sparkles, FolderGit2, Calculator, GraduationCap, Briefcase, ChevronDown, Eye, Code2, Building2 } from 'lucide-react';

import { BishoftuCaseStudy } from '../featured/BishoftuCaseStudy';
import { DataAndAIShowcase } from '../featured/DataAndAIShowcase';
import { RepositoriesSection } from '../repositories/RepositoriesSection';
import { ProjectsSection } from '../projects/ProjectsSection';
import { HighwayCalculatorWidget } from '../tools/HighwayCalculatorWidget';
import { EducationSection } from '../education/EducationSection';
import { ResearchSection } from '../research/ResearchSection';
import { FreelanceSection } from '../freelance/FreelanceSection';
import { ExperienceSection } from '../experience/ExperienceSection';
import { ExpertiseSection } from '../expertise/ExpertiseSection';
import { AboutSection } from '../about/AboutSection';

interface PortfolioHubProps {
  onOpenContactWithService: (serviceName: string) => void;
}

type HubTab = 'featured' | 'repositories' | 'projects' | 'calculator' | 'experience' | 'education' | 'services' | 'all';

export const PortfolioHub: React.FC<PortfolioHubProps> = ({ onOpenContactWithService }) => {
  const [activeTab, setActiveTab] = useState<HubTab>('featured');

  const tabs: { id: HubTab; label: string; icon: React.ElementType; badge?: string }[] = [
    { id: 'featured', label: 'Featured Showcases', icon: Sparkles, badge: 'Flagship' },
    { id: 'repositories', label: 'Codebases & Repos (8)', icon: Code2, badge: 'Open Source' },
    { id: 'projects', label: 'All Projects (15+)', icon: FolderGit2 },
    { id: 'calculator', label: 'Geometric Calculator', icon: Calculator, badge: 'Tool' },
    { id: 'experience', label: 'Work Experience', icon: Building2, badge: 'EEC / Infradigital' },
    { id: 'education', label: 'Degrees & Research', icon: GraduationCap },
    { id: 'services', label: 'Consulting & Freelance', icon: Briefcase },
    { id: 'all', label: 'Full Detailed View', icon: Eye }
  ];

  return (
    <div id="hub" className="scroll-mt-20">
      
      {/* Top Sticky Navigation Hub Controls */}
      <div className="bg-white border-b border-[#E2E8F0] shadow-xs py-4 px-4 sm:px-6 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          {/* Section Indicator */}
          <div className="flex items-center gap-2.5">
            <div className="w-3 h-3 rounded-full bg-[#08B9BD] animate-pulse"></div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A]">
              PORTFOLIO EXPLORER HUB
            </span>
            <span className="text-xs text-[#64748B] hidden sm:inline">
              — Switch views below to simplify browsing
            </span>
          </div>

          {/* Desktop Tab Selector */}
          <div className="hidden xl:flex items-center gap-1.5 bg-[#F1F5F9] p-1.5 rounded-xl border border-[#CBD5E1]">
            {tabs.map((tab) => {
              const IconComp = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#005C5C] text-white shadow-xs'
                      : 'text-[#475569] hover:text-[#005C5C] hover:bg-white/80'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span className={`px-1.5 py-0.2 rounded text-[9px] font-mono uppercase ${
                      isActive ? 'bg-[#08B9BD] text-[#003838]' : 'bg-gray-200 text-gray-700'
                    }`}>
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile & Tablet Dropdown Selector */}
          <div className="xl:hidden relative">
            <label htmlFor="hub-dropdown" className="sr-only">Select Portfolio Section</label>
            <div className="relative">
              <select
                id="hub-dropdown"
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value as HubTab)}
                className="w-full appearance-none px-4 py-2.5 pr-10 rounded-xl bg-[#F8FAFA] border-2 border-[#005C5C] text-xs font-bold text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#005C5C]/20 shadow-xs"
              >
                <option value="featured">⭐ Featured Showcases (Infradigital CAD, Bishoftu, AI Traffic)</option>
                <option value="repositories">💻 Codebases & Repositories (8 Open-Source Tools)</option>
                <option value="projects">📁 All Projects & Case Studies (15+)</option>
                <option value="calculator">📐 AASHTO / ERA Highway Geometric Calculator</option>
                <option value="experience">🏢 Work Experience (Ethiopian Engineering Corp, Infradigital CAD, Omega)</option>
                <option value="education">🎓 Academic Degrees, Certifications & Research Proposals</option>
                <option value="services">💼 Freelance Services & Consulting Packages</option>
                <option value="all">🌐 Full View (All Sections Expanded)</option>
              </select>
              <ChevronDown className="w-4 h-4 text-[#005C5C] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>

      {/* Dynamic Tab Content Modules */}
      <div className="transition-opacity duration-300">
        
        {/* Tab 1: Featured Flagship Showcases */}
        {(activeTab === 'featured' || activeTab === 'all') && (
          <div>
            <BishoftuCaseStudy />
            <DataAndAIShowcase />
          </div>
        )}

        {/* Tab 2: Codebases & Repositories */}
        {(activeTab === 'repositories' || activeTab === 'all') && (
          <RepositoriesSection />
        )}

        {/* Tab 3: All Projects & Case Studies */}
        {(activeTab === 'projects' || activeTab === 'all') && (
          <ProjectsSection />
        )}

        {/* Tab 4: Interactive Calculator Tool */}
        {(activeTab === 'calculator' || activeTab === 'all') && (
          <HighwayCalculatorWidget />
        )}

        {/* Tab 5: Work Experience */}
        {(activeTab === 'experience' || activeTab === 'all') && (
          <ExperienceSection />
        )}

        {/* Tab 6: Education, Certifications & Research */}
        {(activeTab === 'education' || activeTab === 'all') && (
          <div>
            <EducationSection />
            <ResearchSection onOpenContactForResearch={onOpenContactWithService} />
          </div>
        )}

        {/* Tab 7: Freelance & Consulting Services */}
        {(activeTab === 'services' || activeTab === 'all') && (
          <div>
            <ExpertiseSection />
            <FreelanceSection onSelectService={onOpenContactWithService} />
          </div>
        )}

        {/* Full View Extras (About Narrative) */}
        {activeTab === 'all' && (
          <AboutSection />
        )}

      </div>

    </div>
  );
};

