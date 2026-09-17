import React, { useState } from 'react';
import { visualizationData } from '../../data/visualizationData';
import type { VisualizationGalleryItem } from '../../types';
import { LightboxModal } from './LightboxModal';
import { Layers, Maximize2, Eye, Compass, ArrowRight } from 'lucide-react';

export const VisualizationSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = [
    'All',
    'Civil 3D',
    'Infrastructure Modeling',
    'Highway Visualization',
    'Urban Visualization',
    'Landscape Visualization',
    '3D Presentation',
  ];

  const filteredItems = visualizationData.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  const handleOpenLightbox = (item: VisualizationGalleryItem) => {
    const idx = visualizationData.findIndex((i) => i.id === item.id);
    setLightboxIndex(idx >= 0 ? idx : 0);
    setLightboxOpen(true);
  };

  return (
    <section id="visualization" className="py-20 bg-[#F8FAFA] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#08B9BD]/15 text-[#005C5C] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            DIGITAL INFRASTRUCTURE & 3D RENDERING
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            3D Infrastructure & Highway Visualization Gallery
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#64748B]">
            Parametric Civil 3D corridor assemblies, InfraWorks digital twins, urban junction renders, and driver perspective flythrough presentations.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#E2E8F0]">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#005C5C] text-white shadow-sm border border-[#08B9BD]/40'
                  : 'bg-white text-[#475569] hover:bg-[#E2E8F0] hover:text-[#0F172A] border border-[#CBD5E1]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="group bg-white rounded-xl border border-[#CBD5E1] hover:border-[#08B9BD] shadow-2xs hover:shadow-lg transition-all duration-200 overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              {/* Image Preview Box */}
              <div className="relative aspect-[16/10] bg-[#002D2D] p-5 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#003838] via-[#004A4A] to-[#08B9BD]/30 opacity-70 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute inset-0 bg-cad-grid-dark opacity-40 pointer-events-none"></div>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-white/90 text-[#005C5C] shadow-2xs">
                    {item.category}
                  </span>
                  <div className="p-1.5 rounded-lg bg-black/40 text-white group-hover:bg-[#08B9BD] group-hover:text-[#002D2D] transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="relative z-10 my-auto text-center py-2">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto text-[#08B9BD] mb-2 group-hover:scale-110 transition-transform">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-bold text-white font-mono">{item.title}</h4>
                </div>

                <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-gray-300">
                  <span>{item.softwareUsed[0]}</span>
                  <span className="text-[#08B9BD] font-bold">CLICK TO INSPECT &rarr;</span>
                </div>
              </div>

              {/* Card Bottom Meta */}
              <div className="p-4 space-y-2">
                <p className="text-xs text-[#475569] line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.softwareUsed.map((sw) => (
                    <span
                      key={sw}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#F0F7F7] text-[#005C5C] border border-[#005C5C]/15"
                    >
                      {sw}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        items={visualizationData}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </section>
  );
};
