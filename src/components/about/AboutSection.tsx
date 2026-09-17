import React from 'react';
import { Compass, Database, Cpu, Layers, CheckCircle2, ArrowRight, BookOpen, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#F8FAFA] border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#005C5C]/10 text-[#005C5C] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            PROFESSIONAL BACKGROUND & IDENTITY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Designing Infrastructure Where Engineering Meets Data
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569] leading-relaxed">
            I am a Civil/Highway Engineer with a growing specialization in data science and digital infrastructure engineering.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative & Multidisciplinary Convergence */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-[#0F172A] tracking-tight">
                The Intersection of Physical Engineering & Computational Intelligence
              </h3>
              
              <p className="text-sm text-[#334155] leading-relaxed">
                Modern transportation infrastructure requires more than traditional manual drafting. Highway geometric design must account for spatial terrain geomorphology, drainage catchments, environmental constraints, and dynamic traffic demand.
              </p>
              
              <p className="text-sm text-[#334155] leading-relaxed">
                By synthesizing <strong>Civil 3D geometric modeling</strong>, <strong>GIS spatial analysis</strong>, <strong>Python/SQL data pipelines</strong>, and <strong>machine learning algorithms</strong>, I bridge the gap between physical road design standards and predictive computational methods.
              </p>

              <div className="p-4 rounded-xl bg-[#005C5C]/5 border border-[#005C5C]/20 text-xs text-[#005C5C] font-mono leading-relaxed">
                "Infrastructure is no longer just static concrete and asphalt; it is a dynamic, data-generating network that benefits from rigorous geometric physics and predictive spatial analytics."
              </div>
            </div>

            {/* The 5 Disciplines Matrix */}
            <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#078F91] mb-4">
                HOW MY CORE DISCIPLINES COMPLEMENT EACH OTHER
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-lg bg-[#F8FAFA] border border-[#E2E8F0]">
                  <div className="font-bold text-[#0F172A] flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#005C5C]"></span>
                    Engineering + GIS
                  </div>
                  <p className="text-[#64748B]">
                    Using DEMs and hydrological flow networks to optimize road alignments and precisely size hydraulic culvert crossings.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#F8FAFA] border border-[#E2E8F0]">
                  <div className="font-bold text-[#0F172A] flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#078F91]"></span>
                    Civil 3D + 3D Viz
                  </div>
                  <p className="text-[#64748B]">
                    Converting parametric corridor cross-sections into photorealistic 3D models for BIM coordination and stakeholder validation.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#F8FAFA] border border-[#E2E8F0]">
                  <div className="font-bold text-[#0F172A] flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#08B9BD]"></span>
                    CAD + Data Analytics
                  </div>
                  <p className="text-[#64748B]">
                    Automating volume extraction from Civil 3D section models into standardized 7-division Bill of Quantities (BOQ).
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#F8FAFA] border border-[#E2E8F0]">
                  <div className="font-bold text-[#0F172A] flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#005C5C]"></span>
                    Traffic Data + Machine Learning
                  </div>
                  <p className="text-[#64748B]">
                    Forecasting urban bottleneck formation and predicting pavement life-cycle deterioration for proactive maintenance.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Professional Development & Academic Focus */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Qualifications & Academic Focus Card */}
            <div className="bg-white p-7 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-[#0F172A] tracking-tight pb-3 border-b border-[#E2E8F0]">
                Professional Focus & Objectives
              </h3>

              <div className="space-y-3.5 text-xs text-[#334155]">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-[#005C5C]/10 text-[#005C5C] mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0F172A] block">Highway Engineering Excellence</span>
                    <span>Geometric design of trunk highways, roundabouts, and interchanges per AASHTO / ERA manuals.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-[#078F91]/10 text-[#078F91] mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0F172A] block">Digital Infrastructure & BIM</span>
                    <span>Corridor solids, surface grading, subassembly design, and 3D visual communication.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-[#08B9BD]/10 text-[#005C5C] mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0F172A] block">Applied Transportation AI</span>
                    <span>Spatial graph analytics, congestion time-series forecasting, and pavement analytics.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-[#005C5C]/10 text-[#005C5C] mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0F172A] block">MSc / PhD Academic Readiness</span>
                    <span>Preparation for graduate research in Intelligent Transportation Systems (ITS) and digital infrastructure.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex flex-col gap-2.5">
                <a
                  href="#contact"
                  className="w-full py-2.5 rounded-lg bg-[#005C5C] text-white text-xs font-semibold text-center hover:bg-[#078F91] transition-colors"
                >
                  Contact for Opportunities
                </a>
                <a
                  href="#research"
                  className="w-full py-2.5 rounded-lg bg-[#F8FAFA] text-[#005C5C] text-xs font-semibold text-center border border-[#CBD5E1] hover:bg-white transition-colors"
                >
                  View Research Interests
                </a>
              </div>
            </div>

            {/* Standards & Methodologies Badge Box */}
            <div className="bg-[#004242] text-white p-6 rounded-2xl border border-[#005C5C] shadow-sm">
              <div className="text-xs font-mono text-[#08B9BD] uppercase tracking-wider mb-2 font-semibold">
                DESIGN CODES & STANDARDS
              </div>
              <p className="text-xs text-gray-300 leading-relaxed mb-3">
                All engineering calculations, sight distances, superelevations, and drainage sizing follow established international codes:
              </p>
              <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-gray-200">
                <span className="px-2 py-0.5 rounded bg-white/10 border border-white/10">AASHTO Green Book</span>
                <span className="px-2 py-0.5 rounded bg-white/10 border border-white/10">ERA Manuals 2020</span>
                <span className="px-2 py-0.5 rounded bg-white/10 border border-white/10">TRB HCM 2022</span>
                <span className="px-2 py-0.5 rounded bg-white/10 border border-white/10">NCHRP Report 672</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
