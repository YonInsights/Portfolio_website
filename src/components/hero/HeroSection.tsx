import React from 'react';
import { ArrowRight, Layers, Compass, Download, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { EngineeringViewport } from './EngineeringViewport';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#F0F7F7] via-[#F8FAFA] to-white border-b border-[#E2E8F0]">
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 bg-cad-grid opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Top Identity Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#005C5C]/10 border border-[#005C5C]/20 text-[#005C5C] text-xs font-mono font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#08B9BD]"></span>
              <span>CIVIL / HIGHWAY ENGINEER + DATA SCIENTIST</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
              Engineering Infrastructure Through{' '}
              <span className="text-[#005C5C] relative">
                Design, Data
                <span className="absolute bottom-1 left-0 w-full h-1 bg-[#08B9BD]/40 rounded-full"></span>
              </span>{' '}
              & Digital Technology
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
              I combine highway engineering, GIS, 3D visualization, data analytics, and machine learning to solve complex infrastructure and transportation problems.
            </p>

            {/* Multidisciplinary Pillar Pills */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs text-[#0F172A]">
              <span className="px-2.5 py-1 rounded-md bg-white border border-[#CBD5E1] shadow-2xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#005C5C]"></span> Highway Geometric Design
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-[#CBD5E1] shadow-2xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#078F91]"></span> Civil 3D & 3D Modeling
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-[#CBD5E1] shadow-2xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#08B9BD]"></span> GIS Spatial Analytics
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-[#CBD5E1] shadow-2xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#005C5C]"></span> Transportation AI / ML
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="px-5 py-3 rounded-lg bg-[#005C5C] text-white font-semibold text-sm hover:bg-[#078F91] shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 border border-[#08B9BD]/30"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/Yonatan_Abrham_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Yonatan_Abrham_CV.pdf"
                className="px-5 py-3 rounded-lg bg-white text-[#005C5C] font-semibold text-sm hover:bg-[#005C5C]/5 border-2 border-[#005C5C] shadow-2xs transition-all duration-200 flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-[#078F91]" />
                <span>Download CV</span>
              </a>
              <a
                href="#freelance"
                className="px-5 py-3 rounded-lg bg-[#F1F5F9] text-[#334155] font-semibold text-sm hover:bg-[#E2E8F0] border border-[#CBD5E1] transition-all duration-200 flex items-center gap-2"
              >
                <span>Request Work</span>
              </a>
            </div>

            {/* Credibility & Openness Badges */}
            <div className="pt-4 border-t border-[#E2E8F0] grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#475569]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#078F91] shrink-0" />
                <span>International Highway Jobs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#078F91] shrink-0" />
                <span>Remote Freelance Consulting</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#078F91] shrink-0" />
                <span>MSc/PhD Collaboration</span>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Interactive Engineering Viewport */}
          <div className="lg:col-span-6">
            <EngineeringViewport />
          </div>

        </div>
      </div>
    </section>
  );
};
