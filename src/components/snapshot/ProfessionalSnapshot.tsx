import React from 'react';
import { Compass, Map, Layers, BarChart3, Cpu, CheckCircle } from 'lucide-react';

export const ProfessionalSnapshot: React.FC = () => {
  const cards = [
    {
      title: 'Highway Engineering',
      icon: Compass,
      color: '#005C5C',
      description: 'Geometric design of horizontal/vertical alignments, superelevation transitions, intersections, roundabouts, and drainage hydraulics complying with AASHTO & ERA manuals.',
      tags: ['Civil 3D', 'AASHTO / ERA', 'Plan & Profile', 'BOQ Takeoff']
    },
    {
      title: 'GIS & Spatial Analysis',
      icon: Map,
      color: '#078F91',
      description: 'Digital elevation model (DEM) processing, multi-criteria route corridor suitability, watershed catchment delineation, and network connectivity modeling.',
      tags: ['ArcGIS Pro', 'QGIS', 'Terrain Modeling', 'PostGIS']
    },
    {
      title: '3D Visualization & BIM',
      icon: Layers,
      color: '#08B9BD',
      description: 'Multi-baseline corridor 3D modeling, parametric assemblies, photorealistic presentation renders, driver perspective simulations, and clash detection.',
      tags: ['Civil 3D Solids', 'InfraWorks', 'Twinmotion', 'Visual Impact']
    },
    {
      title: 'Data Analytics',
      icon: BarChart3,
      color: '#005C5C',
      description: 'Exploratory traffic analysis, Origin-Destination commuter flow matrices, automated quantity takeoff scripts, and relational SQL database modeling.',
      tags: ['Python (Pandas)', 'SQL', 'Excel VBA', 'KPI Dashboards']
    },
    {
      title: 'Machine Learning & AI',
      icon: Cpu,
      color: '#078F91',
      description: 'Supervised and unsupervised predictive models for urban traffic congestion forecasting, dynamic signal timing optimization, and pavement life-cycle deterioration.',
      tags: ['LSTM Networks', 'XGBoost', 'Scikit-Learn', 'PCI Classifiers']
    },
  ];

  return (
    <section id="snapshot" className="py-12 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#E2E8F0]">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#078F91]">
              MULTIDISCIPLINARY CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight mt-1">
              Quick Professional Snapshot
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-md mt-2 md:mt-0 font-mono">
            Bridging conventional physical civil engineering principles with advanced computational data science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group p-5 rounded-xl bg-[#F8FAFA] hover:bg-white border border-[#E2E8F0] hover:border-[#078F91] hover:shadow-md transition-all duration-200 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top Accent Line */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-200 group-hover:h-1.5"
                  style={{ backgroundColor: card.color }}
                ></div>

                <div>
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#CBD5E1] flex items-center justify-center mb-4 shadow-2xs group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 text-[#005C5C]" />
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] mb-2 tracking-tight group-hover:text-[#005C5C] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed mb-4">
                    {card.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-200/70 flex flex-wrap gap-1.5">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-white text-[#334155] border border-[#E2E8F0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
