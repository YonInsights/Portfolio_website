import React from 'react';
import { ArrowRight, Download, Mail, Award, ChevronRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden bg-[#FAF9F6] border-b border-[#E2E8F0]">
      {/* Background Engineering Blueprint Overlay */}
      <div className="absolute inset-0 bg-cad-grid opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Introduction & Primary Numbers */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#005C5C]/10 border border-[#005C5C]/20 text-[#005C5C] text-xs font-mono font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#08B9BD] animate-pulse"></span>
              <span>CIVIL / HIGHWAY ENGINEER + DATA SCIENTIST</span>
            </div>

            {/* Main Greeting Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1]">
                Hey There,<br />
                <span className="text-[#005C5C]">I'm Yonatan</span>
              </h1>
              <a 
                href="mailto:email2yonatan@gmail.com" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#078F91] hover:text-[#005C5C] hover:underline pt-1"
              >
                <Mail className="w-4 h-4" />
                <span>email2yonatan@gmail.com</span>
              </a>
            </div>

            {/* Quick Metrics (Inspired by the Reference Layout) */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#CBD5E1] shadow-xs">
                <div className="text-3xl font-extrabold text-[#005C5C] font-mono">5+</div>
                <div className="text-xs text-[#64748B] font-medium mt-0.5">Years Combined Engineering & Data Practice</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#CBD5E1] shadow-xs">
                <div className="text-3xl font-extrabold text-[#078F91] font-mono">15+</div>
                <div className="text-xs text-[#64748B] font-medium mt-0.5">Infrastructure & ML Projects Completed</div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="/Yonatan_Abrham_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Yonatan_Abrham_CV.pdf"
                className="px-5 py-3 rounded-xl bg-[#005C5C] text-white font-semibold text-xs sm:text-sm hover:bg-[#078F91] shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 border border-[#08B9BD]/30"
              >
                <Download className="w-4 h-4 text-[#08B9BD]" />
                <span>Download CV (PDF)</span>
              </a>
              <a
                href="#hub"
                className="px-5 py-3 rounded-xl bg-white text-[#005C5C] font-semibold text-xs sm:text-sm hover:bg-[#005C5C]/5 border-2 border-[#005C5C] shadow-2xs transition-all duration-200 flex items-center gap-2"
              >
                <span>Explore Works</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Center Column: Portrait with Teal Brush Aura & Official Stamp */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative py-4">
            
            {/* Artistic Splash Backdrop */}
            <div className="relative w-64 h-72 sm:w-72 sm:h-80 flex items-center justify-center">
              {/* Teal Organic Brush Splash */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#005C5C] via-[#078F91] to-[#08B9BD] rounded-[42%_58%_70%_30%/45%_45%_55%_55%] opacity-90 blur-[1px] transform -rotate-6 scale-105 shadow-xl"></div>
              <div className="absolute -inset-2 bg-gradient-to-bl from-[#004242] to-[#005C5C] rounded-[58%_42%_30%_70%/55%_55%_45%_45%] opacity-75 transform rotate-12"></div>
              
              {/* Subtle CAD Contour Circles */}
              <div className="absolute inset-0 border-2 border-white/30 rounded-full scale-110 pointer-events-none"></div>
              <div className="absolute inset-0 border border-white/20 rounded-full scale-125 pointer-events-none"></div>

              {/* Yonatan's High-Res Photo Cutout */}
              <div className="relative w-56 h-64 sm:w-64 sm:h-72 rounded-[38%_62%_63%_37%/41%_44%_56%_59%] overflow-hidden border-4 border-white shadow-2xl bg-white z-10">
                <img
                  src="/assets/yonatan_abrham.jpg"
                  alt="Yonatan Abrham - Civil & Highway Engineer + Data Scientist"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Official Seal / Certification Badge (Inspired by Reference Layout) */}
              <div className="absolute -bottom-3 -right-2 sm:-right-4 z-20 bg-white p-2.5 sm:p-3 rounded-2xl shadow-xl border border-[#CBD5E1] flex items-center gap-2 max-w-[170px]">
                <div className="w-9 h-9 rounded-xl bg-[#005C5C] text-[#08B9BD] flex items-center justify-center shrink-0 shadow-xs">
                  <Award className="w-5 h-5" />
                </div>
                <div className="leading-tight">
                  <div className="text-[10px] font-mono font-bold text-[#0F172A] uppercase tracking-tighter">ERA & AASHTO</div>
                  <div className="text-[9px] text-[#078F91] font-semibold">Certified Highway Engineer & Data Scientist</div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Narrative & Work Experience Timeline Snapshot */}
          <div className="lg:col-span-4 space-y-5">
            
            {/* Supporting Bio Card */}
            <div className="p-5 rounded-2xl bg-white border border-[#CBD5E1] shadow-xs space-y-2">
              <div className="text-xs font-mono font-bold text-[#078F91] uppercase tracking-wider">
                DESIGN PHILOSOPHY
              </div>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                I engineer resilient highway corridors and develop predictive data science systems, connecting geometric road design with machine learning.
              </p>
            </div>

            {/* Mini Experience Timeline (Inspired by the Reference Layout) */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-mono font-bold text-[#0F172A] uppercase tracking-wider">
                  Work Experience
                </span>
                <a href="#hub" className="text-[11px] font-semibold text-[#005C5C] hover:underline flex items-center">
                  <span>View All</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>

              {/* Experience Item 1 */}
              <div className="p-3.5 rounded-xl bg-white border border-[#CBD5E1] hover:border-[#005C5C] transition-colors shadow-2xs flex items-start justify-between gap-2">
                <div>
                  <div className="text-xs font-bold text-[#0F172A]">Highway Design Engineer</div>
                  <div className="text-[11px] text-[#078F91] font-medium">Omega Consulting Engineers Plc</div>
                  <div className="text-[10px] text-gray-500 font-mono">Jimma Airport to Bosona Corridor</div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#005C5C]/10 text-[#005C5C] shrink-0">
                  Present
                </span>
              </div>

              {/* Experience Item 2 */}
              <div className="p-3.5 rounded-xl bg-white border border-[#CBD5E1] hover:border-[#005C5C] transition-colors shadow-2xs flex items-start justify-between gap-2">
                <div>
                  <div className="text-xs font-bold text-[#0F172A]">Highway Design Engineer</div>
                  <div className="text-[11px] text-[#078F91] font-medium">Meteoric Engineering Consultant PLC</div>
                  <div className="text-[10px] text-gray-500 font-mono">Highway Corridor Studies & ESIA</div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono text-gray-500 bg-gray-100 shrink-0">
                  2025
                </span>
              </div>

              {/* Experience Item 3 */}
              <div className="p-3.5 rounded-xl bg-white border border-[#CBD5E1] hover:border-[#005C5C] transition-colors shadow-2xs flex items-start justify-between gap-2">
                <div>
                  <div className="text-xs font-bold text-[#0F172A]">Jr. Highway Design Engineer</div>
                  <div className="text-[11px] text-[#078F91] font-medium">Best Consulting Engineers PLC</div>
                  <div className="text-[10px] text-gray-500 font-mono">Harar-Kombolcha Road (97.22 km)</div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono text-gray-500 bg-gray-100 shrink-0">
                  2023–25
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
