import React, { useState } from 'react';
import { projectsData } from '../../data/projectsData';
import type { Project, ProjectCategory } from '../../types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Search, Filter, Compass, Map, Layers, BarChart3, Cpu, Sparkles } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'highway', label: 'Highway Engineering' },
    { id: 'gis', label: 'GIS & Spatial' },
    { id: 'visualization', label: '3D Visualization' },
    { id: 'data', label: 'Data Analytics' },
    { id: 'machine-learning', label: 'Machine Learning' },
    { id: 'transportation', label: 'Transportation' },
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      project.category === selectedCategory ||
      (selectedCategory === 'transportation' &&
        (project.category === 'highway' ||
          project.category === 'machine-learning' ||
          project.subcategory.toLowerCase().includes('traffic') ||
          project.title.toLowerCase().includes('traffic')));

    const matchesSearch =
      searchQuery.trim() === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.subcategory.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#E2E8F0] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#005C5C]/10 text-[#005C5C] text-xs font-mono font-bold uppercase tracking-wider mb-2">
              PORTFOLIO OF ENGINEERING & DATA WORK
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Selected Engineering Projects & Case Studies
            </h2>
            <p className="text-sm text-[#64748B] mt-1 font-sans">
              Filter through verified highway geometric designs, GIS analyses, 3D models, and transportation ML pipelines.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#005C5C] bg-[#F0F7F7] px-3 py-1.5 rounded-lg border border-[#005C5C]/20 self-start md:self-end">
            <span className="font-bold">{filteredProjects.length}</span>
            <span>of {projectsData.length} Projects Shown</span>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full lg:w-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#005C5C] text-white shadow-sm border border-[#08B9BD]/40'
                      : 'bg-[#F8FAFA] text-[#475569] hover:bg-[#E2E8F0] hover:text-[#0F172A] border border-[#CBD5E1]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools, terms, geometry..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-lg bg-[#F8FAFA] border border-[#CBD5E1] text-[#0F172A] placeholder-gray-400 focus:outline-none focus:border-[#005C5C] focus:bg-white transition-colors"
            />
          </div>

        </div>

        {/* Projects Card Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#F8FAFA] rounded-2xl border border-dashed border-[#CBD5E1]">
            <Compass className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <h3 className="text-base font-bold text-[#0F172A]">No projects match your filter</h3>
            <p className="text-xs text-gray-500 mt-1">Try selecting "All Disciplines" or clearing your search term.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-[#005C5C] text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
