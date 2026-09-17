import React from 'react';
import { experienceData } from '../../data/experienceData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Award, ShieldCheck } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#005C5C]/10 text-[#005C5C] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            CAREER TIMELINE & CONSULTANCY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Professional Engineering & Analytics Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#64748B]">
            Structured professional progression across highway geometric design, digital engineering consultancy, and data science workflows.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-6 before:w-0.5 before:bg-[#E2E8F0]">
          {experienceData.map((exp, idx) => (
            <div key={exp.id} className="relative pl-10 md:pl-16 group">
              
              {/* Node Bullet */}
              <div className="absolute left-2 md:left-4 top-1 -translate-x-1/2 w-5 h-5 rounded-full bg-white border-4 border-[#005C5C] group-hover:scale-125 group-hover:border-[#08B9BD] transition-all shadow-sm"></div>

              {/* Position Card */}
              <div className="bg-[#F8FAFA] p-6 sm:p-7 rounded-2xl border border-[#CBD5E1] hover:border-[#078F91] hover:shadow-md transition-all duration-200 space-y-4">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#E2E8F0] gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A] tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-xs font-semibold text-[#005C5C] font-mono mt-0.5">
                      {exp.organization}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#64748B]">
                    <span className="flex items-center gap-1 bg-white px-2.5 py-1 rounded border border-[#E2E8F0]">
                      <Calendar className="w-3.5 h-3.5 text-[#078F91]" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center gap-1 bg-white px-2.5 py-1 rounded border border-[#E2E8F0]">
                      <MapPin className="w-3.5 h-3.5 text-[#08B9BD]" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569] mb-2">
                    Key Engineering Responsibilities:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#334155]">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#078F91] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Projects */}
                <div className="pt-2 border-t border-gray-200">
                  <span className="text-[11px] font-mono font-bold uppercase text-[#005C5C] block mb-1">
                    Major Project Involvement:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exp.keyProjectInvolvement.map((proj, pIdx) => (
                      <span
                        key={pIdx}
                        className="px-2.5 py-1 rounded-md text-xs bg-white text-[#1E293B] border border-[#CBD5E1]"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools Used */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.toolsUsed.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#F0F7F7] text-[#005C5C] border border-[#005C5C]/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
