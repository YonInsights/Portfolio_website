import React from 'react';
import type { Project } from '../../types';
import { ArrowRight, Compass, Map, Layers, BarChart3, Cpu, FileText, CheckCircle2, ChevronRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const getBadgeColor = (cat: string) => {
    switch (cat) {
      case 'highway': return 'bg-[#005C5C]/10 text-[#005C5C] border-[#005C5C]/20';
      case 'gis': return 'bg-[#078F91]/10 text-[#078F91] border-[#078F91]/20';
      case 'visualization': return 'bg-[#08B9BD]/10 text-[#005C5C] border-[#08B9BD]/20';
      case 'data': return 'bg-[#005C5C]/10 text-[#005C5C] border-[#005C5C]/20';
      case 'machine-learning': return 'bg-[#078F91]/10 text-[#078F91] border-[#078F91]/20';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'highway': return <Compass className="w-3.5 h-3.5" />;
      case 'gis': return <Map className="w-3.5 h-3.5" />;
      case 'visualization': return <Layers className="w-3.5 h-3.5" />;
      case 'data': return <BarChart3 className="w-3.5 h-3.5" />;
      case 'machine-learning': return <Cpu className="w-3.5 h-3.5" />;
      default: return <Compass className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="group bg-white rounded-xl border border-[#CBD5E1] hover:border-[#078F91] hover:shadow-lg transition-all duration-200 flex flex-col justify-between overflow-hidden">
      
      {/* Visual Header / Banner Thumbnail */}
      <div className="relative aspect-[16/9] bg-gradient-to-br from-[#003B3B] via-[#004D4D] to-[#08B9BD]/40 p-4 flex flex-col justify-between overflow-hidden border-b border-[#E2E8F0]">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-cad-grid-dark opacity-40 pointer-events-none"></div>

        {/* Category & Status Badges */}
        <div className="relative z-10 flex items-center justify-between">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-white/90 backdrop-blur-xs text-[#005C5C] border border-[#08B9BD]/30 shadow-2xs`}>
            {getCategoryIcon(project.category)}
            <span>{project.category.replace('-', ' ')}</span>
          </span>

          {project.featured && (
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-[#08B9BD] text-[#004242] shadow-2xs">
              Featured Case Study
            </span>
          )}
        </div>

        {/* Vector CAD / Graphic Preview Motif */}
        <div className="relative z-10 my-auto py-2">
          <div className="text-white/90 text-xs font-mono font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#08B9BD] animate-pulse"></span>
            <span className="truncate">{project.subcategory}</span>
          </div>
          <div className="text-[10px] font-mono text-gray-300">
            {project.tools.slice(0, 3).join(' • ')}
          </div>
        </div>

        {/* Bottom Bar in Card Image */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-gray-300">
          <span>ROLE: {project.role.split('(')[0]}</span>
          <span className="text-[#08B9BD] font-bold">INSPECT &rarr;</span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <h3 className="text-base font-bold text-[#0F172A] tracking-tight group-hover:text-[#005C5C] transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>
        </div>

        {/* Key Deliverable Highlight */}
        <div className="p-2.5 rounded-lg bg-[#F8FAFA] border border-[#E2E8F0] text-[11px] text-[#334155]">
          <span className="font-bold text-[#005C5C] block text-[10px] uppercase font-mono">
            Key Deliverable:
          </span>
          <span className="line-clamp-2 leading-tight mt-0.5">
            {project.keyDeliverable}
          </span>
        </div>

        {/* Tools Pill List */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tools.slice(0, 4).map((tool) => (
            <span
              key={tool}
              className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#F0F7F7] text-[#005C5C] border border-[#005C5C]/15"
            >
              {tool}
            </span>
          ))}
          {project.tools.length > 4 && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-gray-100 text-gray-600">
              +{project.tools.length - 4}
            </span>
          )}
        </div>

        {/* Card Trigger Button */}
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="w-full mt-2 py-2.5 px-4 rounded-lg bg-[#F8FAFA] hover:bg-[#005C5C] text-[#005C5C] hover:text-white border border-[#CBD5E1] hover:border-[#005C5C] text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 shadow-2xs group-hover:shadow"
        >
          <span>View Detailed Case Study</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
