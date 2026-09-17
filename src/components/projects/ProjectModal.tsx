import React, { useEffect, useState } from 'react';
import type { Project } from '../../types';
import { X, CheckCircle2, Compass, Layers, Terminal, FileText, ArrowRight, ExternalLink, HelpCircle, BookOpen, AlertCircle } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onRequestWork?: (title: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onRequestWork }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'methodology' | 'outputs' | 'learnings'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-[#CBD5E1] overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#004242] text-white p-6 border-b border-[#005C5C] relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#08B9BD] uppercase font-bold">
                <span>{project.category.toUpperCase()} CASE STUDY</span>
                <span>•</span>
                <span>{project.subcategory}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                {project.title}
              </h2>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-gray-200 font-mono">
                <span className="bg-white/10 px-2.5 py-1 rounded">Role: {project.role}</span>
                <span className="bg-white/10 px-2.5 py-1 rounded">Discipline: {project.category}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tab Navigation in Modal */}
          <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-white/10 font-mono text-xs">
            {[
              { id: 'overview', label: '1. Overview & Context' },
              { id: 'methodology', label: '2. Methodology & Stack' },
              { id: 'outputs', label: '3. Process & Deliverables' },
              { id: 'learnings', label: '4. Results & Lessons' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#08B9BD] text-[#004242] font-bold shadow-xs'
                    : 'bg-white/10 text-gray-200 hover:bg-white/15'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#334155] leading-relaxed">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              
              <div className="p-4 rounded-xl bg-[#F0F7F7] border border-[#005C5C]/20 text-[#005C5C] text-xs font-mono">
                <span className="font-bold uppercase block mb-1">Key Deliverable Summary:</span>
                <span className="text-sm font-sans font-medium text-[#0F172A]">{project.keyDeliverable}</span>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase font-mono tracking-wider text-[#005C5C] mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Project Overview
                </h3>
                <p className="text-sm text-[#334155] leading-relaxed">
                  {caseStudy.overview}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase font-mono tracking-wider text-[#0F172A] mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600" /> Engineering Problem & Context
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {caseStudy.problemContext}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase font-mono tracking-wider text-[#005C5C] mb-2 flex items-center gap-2">
                  <Compass className="w-4 h-4" /> My Specific Engineering Role
                </h3>
                <p className="text-sm text-[#334155] leading-relaxed">
                  {caseStudy.myRole}
                </p>
              </div>

            </div>
          )}

          {/* TAB 2: METHODOLOGY & TOOLS */}
          {activeTab === 'methodology' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              
              <div>
                <h3 className="text-sm font-bold uppercase font-mono tracking-wider text-[#005C5C] mb-3 flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> Software Tools & Libraries Used
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {caseStudy.softwareTools.map((tool, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-[#F8FAFA] border border-[#CBD5E1] text-xs font-mono font-medium text-[#0F172A] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#08B9BD]"></span>
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase font-mono tracking-wider text-[#005C5C] mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4" /> Technical Methodology
                </h3>
                <div className="space-y-2.5">
                  {caseStudy.methodology.map((step, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-white border border-[#E2E8F0] shadow-2xs flex items-start gap-3 text-xs">
                      <span className="w-5 h-5 rounded-full bg-[#005C5C]/10 text-[#005C5C] font-mono font-bold flex items-center justify-center shrink-0 text-[11px]">
                        {idx + 1}
                      </span>
                      <span className="text-[#334155] leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: PROCESS & OUTPUTS */}
          {activeTab === 'outputs' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              
              <div>
                <h3 className="text-sm font-bold uppercase font-mono tracking-wider text-[#005C5C] mb-3 flex items-center gap-2">
                  <Compass className="w-4 h-4" /> Engineering Workflow & Execution Phases
                </h3>
                <div className="space-y-2">
                  {caseStudy.engineeringProcess.map((proc, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-[#F8FAFA] border border-[#E2E8F0] text-xs text-[#334155] flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#078F91] shrink-0 mt-0.5" />
                      <span>{proc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase font-mono tracking-wider text-[#0F172A] mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#005C5C]" /> Key Deliverables Produced
                </h3>
                <div className="space-y-2">
                  {caseStudy.keyOutputs.map((out, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-white border-2 border-[#005C5C]/20 shadow-2xs text-xs font-semibold text-[#0F172A] flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#005C5C]"></span>
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Drawing Previews if available */}
              {caseStudy.technicalDrawings && (
                <div className="pt-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#078F91] mb-3">
                    Technical Drawing Schematics & Diagrams
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {caseStudy.technicalDrawings.map((dwg, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-[#003333] text-white border border-[#08B9BD]/30 space-y-1.5">
                        <div className="text-xs font-mono font-bold text-[#08B9BD]">{dwg.title}</div>
                        <div className="text-[11px] text-gray-300">{dwg.caption}</div>
                        <div className="text-[10px] font-mono text-[#08B9BD] uppercase">Type: {dwg.type}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}

          {/* TAB 4: RESULTS & LEARNINGS */}
          {activeTab === 'learnings' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              
              <div className="p-5 rounded-xl bg-white border border-[#005C5C] shadow-sm space-y-2">
                <h3 className="text-sm font-bold uppercase font-mono tracking-wider text-[#005C5C] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#005C5C]" /> Verified Engineering Results & Impact
                </h3>
                <p className="text-sm text-[#0F172A] leading-relaxed">
                  {caseStudy.results}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#F8FAFA] border border-[#CBD5E1] space-y-2">
                <h3 className="text-sm font-bold uppercase font-mono tracking-wider text-[#475569] flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#078F91]" /> Engineering Lessons Learned
                </h3>
                <p className="text-sm text-[#334155] leading-relaxed italic">
                  "{caseStudy.lessonsLearned}"
                </p>
              </div>

              {/* No Fabrication Guarantee Footer */}
              <div className="p-3 rounded-lg bg-gray-50 border border-gray-200 text-[11px] font-mono text-gray-500">
                Notice: All metrics, calculations, and deliverables described reflect real engineering principles and verified methods applied during project design.
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        <div className="bg-[#F8FAFA] p-4 sm:p-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#64748B] font-mono">
            Category: <strong className="text-[#005C5C] uppercase">{project.category}</strong>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 text-xs font-semibold rounded-lg bg-white border border-[#CBD5E1] text-[#334155] hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={() => {
                onClose();
                if (onRequestWork) onRequestWork(project.title);
              }}
              className="w-full sm:w-auto px-5 py-2 text-xs font-semibold rounded-lg bg-[#005C5C] text-white hover:bg-[#078F91] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Discuss Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
