import React from 'react';
import { educationData, certificationsData } from '../../data/educationData';
import { GraduationCap, Award, CheckCircle2, ShieldCheck, BookOpen } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#F8FAFA] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#005C5C]/10 text-[#005C5C] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            ACADEMIC DEGREES & TECHNICAL CREDENTIALS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Education & Professional Certifications
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#64748B]">
            Foundational civil engineering education complemented by rigorous ongoing continuous training in data science and computational modeling.
          </p>
        </div>

        {/* 2-Column Grid: Education vs Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Col: Formal Degrees */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-bold text-[#0F172A] tracking-tight flex items-center gap-2 pb-2 border-b border-[#E2E8F0]">
              <GraduationCap className="w-5 h-5 text-[#005C5C]" />
              <span>Academic Degrees</span>
            </h3>

            <div className="space-y-5">
              {educationData.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white p-6 rounded-2xl border border-[#CBD5E1] shadow-2xs space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-base font-bold text-[#0F172A]">
                        {edu.degree}
                      </h4>
                      <p className="text-xs font-mono text-[#005C5C] font-semibold mt-0.5">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded text-[11px] font-mono font-bold bg-[#F0F7F7] text-[#005C5C] border border-[#005C5C]/20 shrink-0">
                      {edu.status}
                    </span>
                  </div>

                  <p className="text-xs text-[#475569] leading-relaxed">
                    {edu.details.join(' ')}
                  </p>

                  {edu.coursework && (
                    <div className="pt-2 border-t border-gray-100">
                      <span className="text-[10px] font-mono font-bold uppercase text-[#64748B] block mb-1.5">
                        Core Relevant Coursework:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.coursework.map((course, cIdx) => (
                          <span
                            key={cIdx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#F8FAFA] text-[#334155] border border-[#E2E8F0]"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Col: Certifications & Technical Training */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-bold text-[#0F172A] tracking-tight flex items-center gap-2 pb-2 border-b border-[#E2E8F0]">
              <Award className="w-5 h-5 text-[#078F91]" />
              <span>Professional Technical Certifications</span>
            </h3>

            <div className="space-y-3.5">
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white p-4.5 rounded-xl border border-[#CBD5E1] shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-[#0F172A] leading-snug">
                      {cert.name}
                    </h4>
                    <p className="text-[11px] font-mono text-[#64748B]">
                      {cert.issuer} • {cert.date}
                    </p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-[#F0F7F7] text-[#005C5C]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#078F91] self-start sm:self-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#078F91]" />
                    <span>{cert.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
