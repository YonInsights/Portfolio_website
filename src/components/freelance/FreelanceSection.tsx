import React from 'react';
import { servicesData } from '../../data/servicesData';
import type { FreelanceService } from '../../types';
import { Compass, Map, Layers, BarChart3, Cpu, CheckCircle2, ArrowRight, ShieldCheck, Mail } from 'lucide-react';

interface FreelanceSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const FreelanceSection: React.FC<FreelanceSectionProps> = ({ onSelectService }) => {
  return (
    <section id="freelance" className="py-20 bg-[#F8FAFA] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#005C5C]/10 text-[#005C5C] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            REMOTE & INTERNATIONAL FREELANCE CONSULTING
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Need Engineering, GIS, or Data Science Support?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#64748B]">
            Available for remote freelance consulting, CAD geometric road design, GIS spatial analysis, 3D visualization, and automated BOQ quantity takeoff.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {servicesData.map((srv) => (
            <div
              key={srv.id}
              className="bg-white p-6 rounded-2xl border border-[#CBD5E1] hover:border-[#078F91] hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-[#F0F7F7] text-[#005C5C] border border-[#005C5C]/20">
                  {srv.category}
                </span>

                <h3 className="text-base font-bold text-[#0F172A] mt-2 tracking-tight">
                  {srv.title}
                </h3>

                <p className="text-xs text-[#475569] leading-relaxed mt-2">
                  {srv.description}
                </p>

                <div className="pt-3 border-t border-gray-100 space-y-1.5 mt-3">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#64748B] block">
                    Deliverables:
                  </span>
                  {srv.deliverables.slice(0, 3).map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-[#334155]">
                      <CheckCircle2 className="w-3 h-3 text-[#078F91] shrink-0 mt-0.5" />
                      <span className="leading-snug">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="p-2 rounded bg-gray-50 border border-gray-100 text-[10px] font-mono text-[#64748B] mb-3">
                  Tools: {srv.typicalTools.join(', ')}
                </div>

                <a
                  href="#contact"
                  onClick={() => {
                    if (onSelectService) onSelectService(srv.title);
                  }}
                  className="w-full py-2 px-3 rounded-lg bg-[#F8FAFA] hover:bg-[#005C5C] text-[#005C5C] hover:text-white border border-[#CBD5E1] hover:border-[#005C5C] text-xs font-semibold text-center block transition-colors"
                >
                  Request This Service &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Workflow Guarantee Banner */}
        <div className="bg-[#004242] text-white p-6 sm:p-8 rounded-2xl border border-[#005C5C] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Ready to Scope Your Next Engineering or Data Project?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Fast communication, strict adherence to international design codes, precision CAD drawings, and milestone-based project delivery.
            </p>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-[#08B9BD] text-[#003838] font-bold text-xs hover:bg-white transition-colors shrink-0 shadow-sm"
          >
            Start Project Inquiry
          </a>
        </div>

      </div>
    </section>
  );
};
