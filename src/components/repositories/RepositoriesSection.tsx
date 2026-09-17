import React, { useState } from 'react';
import { repositoriesData, type RepositoryItem } from '../../data/repositoriesData';
import { ExternalLink, Code2, Sparkles, CheckCircle2, ArrowUpRight, Terminal, Layers, Cpu, Compass } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export const RepositoriesSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterOptions = [
    'All',
    'Software Tool',
    'Highway Engineering',
    'Machine Learning',
    'GIS & Spatial',
    'Web Application'
  ];

  const filteredRepos = repositoriesData.filter((repo) => {
    if (selectedFilter === 'All') return true;
    return repo.category === selectedFilter;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Software Tool':
        return <Terminal className="w-4 h-4 text-[#08B9BD]" />;
      case 'Highway Engineering':
        return <Compass className="w-4 h-4 text-[#005C5C]" />;
      case 'Machine Learning':
        return <Cpu className="w-4 h-4 text-purple-600" />;
      case 'GIS & Spatial':
        return <Layers className="w-4 h-4 text-emerald-600" />;
      default:
        return <Code2 className="w-4 h-4 text-[#005C5C]" />;
    }
  };

  return (
    <section id="repositories" className="py-16 bg-[#F8FAFA] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#005C5C]/10 text-[#005C5C] text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Code2 className="w-3.5 h-3.5" />
              CODEBASE & SOFTWARE AUTOMATION
            </div>
            <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Engineering Repositories & Tools
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#475569]">
              Open-source algorithms, computational geometry tools, predictive ML pipelines, and production civil engineering web applications.
            </p>
          </div>

          {/* GitHub Profile Action */}
          <a
            href="https://github.com/YonInsights"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-bold transition-colors shadow-sm self-start md:self-auto"
          >
            <GithubIcon className="w-4 h-4 text-[#08B9BD]" />
            <span>Explore GitHub Profile (@YonInsights)</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-[#E2E8F0]">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 ${
                selectedFilter === filter
                  ? 'bg-[#005C5C] text-white shadow-xs'
                  : 'bg-white text-[#475569] hover:bg-[#E2E8F0] hover:text-[#0F172A] border border-[#CBD5E1]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredRepos.map((repo) => (
            <div
              key={repo.id}
              className={`bg-white rounded-2xl border p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-md ${
                repo.featured
                  ? 'border-[#08B9BD]/60 shadow-xs ring-1 ring-[#08B9BD]/20'
                  : 'border-[#CBD5E1]'
              }`}
            >
              <div>
                {/* Card Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-[#F1F5F9] border border-[#E2E8F0]">
                      {getCategoryIcon(repo.category)}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase text-[#64748B] block">
                        {repo.category}
                      </span>
                      <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                        {repo.title}
                      </h3>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-[#005C5C]/10 text-[#005C5C] shrink-0">
                    {repo.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-[#475569] leading-relaxed mb-4">
                  {repo.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-1.5 mb-5 bg-[#F8FAFA] p-3.5 rounded-xl border border-[#E2E8F0]">
                  <div className="text-[10px] font-mono font-bold uppercase text-[#005C5C] mb-1">
                    Key Deliverables & What Was Done:
                  </div>
                  {repo.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-[#334155]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#08B9BD] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {repo.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#F1F5F9] text-[#334155] border border-[#E2E8F0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#F1F5F9]">
                  {repo.liveUrl && (
                    <a
                      href={repo.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#005C5C] hover:bg-[#004A4A] text-white text-xs font-bold transition-colors shadow-xs"
                    >
                      <Sparkles className="w-3 h-3 text-[#08B9BD]" />
                      <span>Launch Live Platform</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}

                  <a
                    href={repo.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#F8FAFA] hover:bg-[#E2E8F0] text-[#0F172A] border border-[#CBD5E1] text-xs font-semibold transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-[#475569]" />
                    <span>View Repository</span>
                    <ExternalLink className="w-3 h-3 text-[#64748B]" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
