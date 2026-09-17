import React from 'react';
import { ArrowRight, Download, Mail, ExternalLink, Zap, ChevronRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden bg-[#FAF9F6] border-b border-[#E2E8F0]">
      {/* Background Engineering Blueprint Overlay */}
      <div className="absolute inset-0 bg-cad-grid opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Introduction & Core Value Proposition */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#005C5C]/10 border border-[#005C5C]/20 text-[#005C5C] text-xs font-mono font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#08B9BD] animate-pulse"></span>
              <span>HIGHWAY DESIGN + DATA SCIENCE + PROJECT MANAGEMENT</span>
            </div>

            {/* Main Greeting Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1]">
                Hey There,<br />
                <span className="text-[#005C5C]">I'm Yonatan</span>
              </h1>
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs sm:text-sm">
                <a 
                  href="mailto:email2yonatan@gmail.com" 
                  className="inline-flex items-center gap-1.5 font-semibold text-[#078F91] hover:text-[#005C5C] hover:underline"
                >
                  <Mail className="w-4 h-4" />
                  <span>email2yonatan@gmail.com</span>
                </a>
                <span className="text-gray-300">|</span>
                <a 
                  href="https://www.linkedin.com/in/yonatan-abrham1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#005C5C] hover:underline"
                >
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Unique Business Value Statement */}
            <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
              I help engineering consultancies, contractors, and agencies <strong>accelerate highway design by 80%</strong>, automate earthwork quantity audits, and deliver zero-rework infrastructure by bridging <strong>Civil 3D geometric design</strong> with <strong>custom AI automation</strong> and <strong>rigorous project management</strong>.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4 pt-1">
              <div className="p-3.5 rounded-2xl bg-white border border-[#CBD5E1] shadow-xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#005C5C] font-mono">80%</div>
                <div className="text-[11px] text-[#64748B] font-medium mt-0.5">Faster CAD & Alignment Formatting</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-[#CBD5E1] shadow-xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#078F91] font-mono">97.2+<span className="text-xs font-sans text-gray-500">km</span></div>
                <div className="text-[11px] text-[#64748B] font-medium mt-0.5">Trunk Highway Corridor Delivered</div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="/Yonatan_Abrham_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Yonatan_Abrham_CV.pdf"
                className="px-4 py-2.5 rounded-xl bg-[#005C5C] text-white font-semibold text-xs sm:text-sm hover:bg-[#078F91] shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 border border-[#08B9BD]/30"
              >
                <Download className="w-4 h-4 text-[#08B9BD]" />
                <span>Download CV</span>
              </a>
              <a
                href="https://infradigitalcad.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-[#08B9BD]/15 text-[#003838] font-bold text-xs sm:text-sm hover:bg-[#08B9BD]/25 border border-[#08B9BD]/40 transition-all duration-200 flex items-center gap-1.5"
              >
                <Zap className="w-4 h-4 text-[#005C5C]" />
                <span>Infradigital CAD Tool</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Center Column: Portrait with Teal Brush Aura & Value Badge */}
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

              {/* Unique Business Value Badge (Replacing Generic Stamp) */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 z-20 bg-white p-3 rounded-2xl shadow-xl border border-[#CBD5E1] flex items-center gap-2.5 max-w-[200px]">
                <div className="w-10 h-10 rounded-xl bg-[#005C5C] text-[#08B9BD] flex items-center justify-center shrink-0 shadow-xs">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="leading-tight">
                  <div className="text-[10px] font-mono font-bold text-[#0F172A] uppercase tracking-tight">INFRADIGITAL CAD</div>
                  <div className="text-[10px] text-[#078F91] font-bold">Highway Design + AI + Project Governance</div>
                  <div className="text-[8px] text-gray-500 font-mono">80% Faster Design Cycles</div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Value Pillars & Work Experience Timeline */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* 3 Core Value Pillars */}
            <div className="p-4 rounded-2xl bg-white border border-[#CBD5E1] shadow-xs space-y-2.5">
              <div className="text-xs font-mono font-bold text-[#078F91] uppercase tracking-wider">
                HOW I HELP YOUR BUSINESS
              </div>
              
              <div className="space-y-2 text-xs text-[#334155]">
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#005C5C] mt-1.5 shrink-0"></span>
                  <span><strong>Design Automation:</strong> Infradigital CAD tools structure alignments and classify terrain instantly.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#078F91] mt-1.5 shrink-0"></span>
                  <span><strong>Cost & Risk Reduction:</strong> Machine learning mass-haul and pavement models prevent budget blowouts.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#08B9BD] mt-1.5 shrink-0"></span>
                  <span><strong>End-to-End Delivery:</strong> MA in Project Management ensuring contractor alignment and zero rework.</span>
                </div>
              </div>
            </div>

            {/* Mini Experience Timeline */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-mono font-bold text-[#0F172A] uppercase tracking-wider">
                  Career Highlights
                </span>
                <a href="#hub" className="text-[11px] font-semibold text-[#005C5C] hover:underline flex items-center">
                  <span>View Details</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>

              {/* Ethiopian Engineering Corporation (Current) */}
              <div className="p-3 rounded-xl bg-white border border-[#08B9BD]/50 hover:border-[#005C5C] transition-colors shadow-2xs flex items-start justify-between gap-2">
                <div>
                  <div className="text-xs font-bold text-[#0F172A]">Highway Engineer</div>
                  <div className="text-[11px] text-[#005C5C] font-semibold">Ethiopian Engineering Corporation</div>
                  <div className="text-[10px] text-gray-500 font-mono">Governmental Trunk & Link Corridors</div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#005C5C] text-white shrink-0">
                  Current
                </span>
              </div>

              {/* Infradigital CAD */}
              <div className="p-3 rounded-xl bg-white border border-[#CBD5E1] hover:border-[#005C5C] transition-colors shadow-2xs flex items-start justify-between gap-2">
                <div>
                  <div className="text-xs font-bold text-[#0F172A]">Founder & Lead Technologist</div>
                  <div className="text-[11px] text-[#078F91] font-medium">Infradigital CAD (infradigitalcad.com)</div>
                  <div className="text-[10px] text-gray-500 font-mono">Highway Automation & BIM Platform</div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#08B9BD]/20 text-[#003838] shrink-0">
                  Live SaaS
                </span>
              </div>

              {/* Omega Consulting Engineers */}
              <div className="p-3 rounded-xl bg-white border border-[#CBD5E1] hover:border-[#005C5C] transition-colors shadow-2xs flex items-start justify-between gap-2">
                <div>
                  <div className="text-xs font-bold text-[#0F172A]">Highway Engineer</div>
                  <div className="text-[11px] text-[#078F91] font-medium">Omega Consulting Engineers Plc.</div>
                  <div className="text-[10px] text-gray-500 font-mono">Jimma Airport to Bosona Corridor</div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono text-gray-500 bg-gray-100 shrink-0">
                  2025
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
