import React, { useState } from 'react';
import { researchData } from '../../data/researchData';
import { BookOpen, HelpCircle, Cpu, ArrowRight, Layers, GraduationCap, CheckCircle2, Mail } from 'lucide-react';

interface ResearchSectionProps {
  onOpenContactForResearch?: (topicTitle: string) => void;
}

export const ResearchSection: React.FC<ResearchSectionProps> = ({ onOpenContactForResearch }) => {
  const [activeResearch, setActiveResearch] = useState(researchData[0]);

  return (
    <section id="research" className="py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#005C5C]/10 text-[#005C5C] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            ACADEMIC RESEARCH & SCHOLARSHIP PORTAL
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Research Interests & Academic Collaboration
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#64748B]">
            Prepared for MSc/PhD university supervisors, research scholarship selection committees, and academic partners investigating Intelligent Transportation Systems (ITS) and AI in infrastructure.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Research Topic Selection Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] font-bold mb-1">
              Select Research Focus Area:
            </div>
            
            {researchData.map((res) => {
              const isSelected = res.id === activeResearch.id;
              return (
                <div
                  key={res.id}
                  onClick={() => setActiveResearch(res)}
                  className={`p-4.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#004242] text-white border-[#08B9BD] shadow-md'
                      : 'bg-[#F8FAFA] text-[#1E293B] border-[#CBD5E1] hover:bg-white hover:border-[#078F91]'
                  }`}
                >
                  <span className={`text-[10px] font-mono uppercase font-bold tracking-wider block mb-1 ${
                    isSelected ? 'text-[#08B9BD]' : 'text-[#078F91]'
                  }`}>
                    {res.targetFocus}
                  </span>
                  <h3 className="text-xs font-bold leading-snug">
                    {res.title}
                  </h3>
                </div>
              );
            })}

            {/* Academic Readiness Callout */}
            <div className="p-5 rounded-xl bg-[#F0F7F7] border border-[#005C5C]/20 text-xs text-[#005C5C] space-y-2 mt-4">
              <strong className="block font-bold">Academic Readiness & Goals:</strong>
              <p className="leading-relaxed text-[#334155]">
                Seeking competitive MSc/PhD scholarship opportunities and funded research assistantships in Intelligent Transportation Systems, AI-driven road safety auditing, and digital highway engineering.
              </p>
            </div>
          </div>

          {/* Right Column: Deep-Dive Research Proposal Breakdown */}
          <div className="lg:col-span-7 bg-[#F8FAFA] p-6 sm:p-8 rounded-2xl border border-[#CBD5E1] shadow-sm space-y-6 animate-in fade-in-50 duration-200">
            
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#078F91]">
                {activeResearch.targetFocus}
              </span>
              <h3 className="text-xl font-bold text-[#0F172A] tracking-tight mt-1">
                {activeResearch.title}
              </h3>
            </div>

            {/* Primary Research Question */}
            <div className="p-4 rounded-xl bg-white border-l-4 border-[#005C5C] border-y border-r border-gray-200 space-y-1">
              <div className="text-[11px] font-mono font-bold uppercase text-[#005C5C] flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" /> Primary Research Question:
              </div>
              <p className="text-xs sm:text-sm font-medium text-[#0F172A] italic leading-relaxed">
                "{activeResearch.researchQuestion}"
              </p>
            </div>

            {/* Problem Statement */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A]">
                Problem Context & Significance
              </h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                {activeResearch.problemStatement}
              </p>
            </div>

            {/* Proposed Methodology Steps */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#005C5C]" /> Proposed Investigation Methodology:
              </h4>
              <div className="space-y-1.5">
                {activeResearch.methodology.map((step, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-white border border-[#E2E8F0] text-xs text-[#334155] flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#005C5C]/10 text-[#005C5C] font-mono font-bold flex items-center justify-center shrink-0 text-[10px]">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack & Contribution */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-white rounded-lg border border-[#E2E8F0] text-xs space-y-1">
                <strong className="text-[#005C5C] block font-mono text-[10px] uppercase">Technology & Tools:</strong>
                <span className="text-[#475569]">{activeResearch.technologyStack.join(', ')}</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-[#E2E8F0] text-xs space-y-1">
                <strong className="text-[#078F91] block font-mono text-[10px] uppercase">Expected Contribution:</strong>
                <span className="text-[#475569]">{activeResearch.expectedContribution}</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => {
                  if (onOpenContactForResearch) onOpenContactForResearch(activeResearch.title);
                }}
                className="w-full py-3 px-4 rounded-lg bg-[#005C5C] text-white text-xs font-semibold text-center block hover:bg-[#078F91] transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Discuss Research Collaboration or Scholarship Sponsorship</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
