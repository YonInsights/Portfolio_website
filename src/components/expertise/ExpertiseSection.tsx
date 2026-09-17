import React, { useState } from 'react';
import { Compass, Map, Layers, BarChart3, Cpu, CheckCircle2, Terminal, ShieldCheck, FileCheck } from 'lucide-react';
import { expertiseData } from '../../data/expertiseData';

export const ExpertiseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(expertiseData[0].id);

  const activeItem = expertiseData.find((item) => item.id === activeTab) || expertiseData[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Map': return <Map className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      default: return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <section id="expertise" className="py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#005C5C]/10 text-[#005C5C] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            TECHNICAL DISCIPLINES & DOMAIN EXPERTISE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Comprehensive Engineering & Analytics Disciplines
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#64748B]">
            Separating core engineering capabilities from specific software toolsets to demonstrate deep domain competence.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 pb-4 border-b border-[#E2E8F0]">
          {expertiseData.map((item) => {
            const isSelected = item.id === activeTab;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#005C5C] text-white shadow-md border border-[#08B9BD]/40'
                    : 'bg-[#F8FAFA] text-[#475569] hover:bg-[#E2E8F0] hover:text-[#0F172A] border border-[#CBD5E1]'
                }`}
              >
                {getIcon(item.iconName)}
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Discipline Detailed Pane */}
        <div className="bg-[#F8FAFA] rounded-2xl border border-[#CBD5E1] p-6 sm:p-8 lg:p-10 shadow-sm animate-in fade-in-50 duration-200">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: Discipline Overview & Capabilities */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#078F91] font-bold">
                  {activeItem.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight mt-1">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-[#475569] mt-2 leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

              {/* Core Engineering Capabilities List */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#005C5C]" />
                  <span>Verified Professional Capabilities</span>
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeItem.capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-white border border-[#E2E8F0] flex items-start gap-2.5 text-xs text-[#1E293B] shadow-2xs hover:border-[#078F91] transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#078F91] shrink-0 mt-0.5" />
                      <span className="leading-snug">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Col: Tools & Standards Card */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Software & Tools Stack */}
              <div className="bg-white p-6 rounded-xl border border-[#CBD5E1] shadow-2xs space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-2 pb-2 border-b border-[#E2E8F0]">
                  <Terminal className="w-4 h-4 text-[#005C5C]" />
                  <span>Software, Libraries & Toolsets</span>
                </h4>

                <div className="flex flex-wrap gap-2">
                  {activeItem.toolsAndTech.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-md bg-[#F0F7F7] text-[#005C5C] font-mono text-xs font-semibold border border-[#005C5C]/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Engineering Standards Compliance (if applicable) */}
              {activeItem.engineeringStandards && (
                <div className="bg-[#004242] text-white p-6 rounded-xl border border-[#005C5C] space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#08B9BD] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Applied Design Standards</span>
                  </h4>

                  <ul className="space-y-1.5 text-xs text-gray-200">
                    {activeItem.engineeringStandards.map((std, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#08B9BD]"></span>
                        <span>{std}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quick Action */}
              <div className="pt-2">
                <a
                  href="#projects"
                  className="w-full py-2.5 px-4 rounded-lg bg-[#005C5C] text-white text-xs font-semibold text-center block hover:bg-[#078F91] transition-colors"
                >
                  View Related Projects in {activeItem.title.split('&')[0]}
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
