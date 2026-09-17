import React, { useState } from 'react';
import { Compass, Map, Layers, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

interface DisciplineService {
  id: string;
  title: string;
  projectCount: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  summary: string;
  capabilities: string[];
}

const servicesList: DisciplineService[] = [
  {
    id: 'highway',
    title: 'Highway & Geometric Design',
    projectCount: '5+ Projects',
    icon: Compass,
    iconBg: 'bg-[#005C5C]/10',
    iconColor: 'text-[#005C5C]',
    summary: 'Full horizontal & vertical alignment geometry, superelevation transitions, cross-sections, drainage culverts, and earthwork quantity takeoff.',
    capabilities: [
      'AASHTO & ERA Standards Compliance',
      'Corridor Assemblies & Daylight Grading',
      'Roundabouts & Interchange Geometry',
      'Drainage Hydraulics & Catchment Sizing'
    ]
  },
  {
    id: 'gis',
    title: 'GIS & Spatial Infrastructure Analytics',
    projectCount: '3+ Projects',
    icon: Map,
    iconBg: 'bg-[#078F91]/10',
    iconColor: 'text-[#078F91]',
    summary: 'Terrain DTM modeling, watershed catchment delineation, multi-criteria route corridor evaluation, and network vulnerability analysis.',
    capabilities: [
      'ArcGIS Pro & QGIS Spatial Analyst',
      'Terrain DEM Slope & Hazard Mapping',
      'Network Routing & Accessibility Isochrones',
      'PostGIS Spatial Database Workflows'
    ]
  },
  {
    id: 'software-bim',
    title: 'Civil Software & BIM Automation',
    projectCount: '4+ Tools & Repos',
    icon: Layers,
    iconBg: 'bg-[#08B9BD]/15',
    iconColor: 'text-[#005C5C]',
    summary: 'Custom Python scripts, LandXML parsers, and web-based civil tools (Infradigital CAD) automating survey data cleaning and corridor compliance.',
    capabilities: [
      'Infradigitalcad.com SaaS Engine',
      'Automated Alignment & Survey Formatters',
      'ERA Ground Slope Terrain Classifier',
      'Mass-Haul Earthwork & BOQ Automation'
    ]
  },
  {
    id: 'data-ml',
    title: 'Data Analytics & Transportation AI',
    projectCount: '4+ Projects',
    icon: Cpu,
    iconBg: 'bg-[#005C5C]/10',
    iconColor: 'text-[#078F91]',
    summary: 'Machine learning for traffic congestion forecasting, automated BOQ quantity takeoff scripting, and spatial origin-destination mobility analytics.',
    capabilities: [
      'LSTM & XGBoost Congestion Models',
      'Python & SQL Data Pipelines',
      'Automated BOQ Extraction Scripts',
      'Pavement Condition Index (PCI) ML'
    ]
  }
];

export const ProfessionalSnapshot: React.FC = () => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<DisciplineService>(servicesList[0]);

  return (
    <section id="snapshot" className="py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Category Cards (Inspired by Reference Layout) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono font-bold text-[#64748B] uppercase tracking-wider mb-2 px-1">
              SELECT CORE DISCIPLINE
            </div>

            {servicesList.map((service) => {
              const isSelected = selectedDiscipline.id === service.id;
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedDiscipline(service)}
                  className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-between border ${
                    isSelected
                      ? 'bg-white shadow-lg border-[#005C5C] ring-2 ring-[#005C5C]/20 -translate-x-1'
                      : 'bg-[#F8FAFA] hover:bg-white shadow-2xs border-[#CBD5E1] hover:border-[#078F91]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${service.iconBg} ${service.iconColor}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#0F172A]">
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#64748B] font-mono mt-0.5">
                        {service.projectCount}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#005C5C] translate-x-1' : 'text-gray-400'}`} />
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Overview & Metric Grid (Inspired by Reference Layout) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Header Narrative */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#005C5C]/10 text-[#005C5C] text-xs font-mono font-bold uppercase tracking-wider">
                WHAT DO I DELIVER?
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                What do I help?
              </h2>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-xl">
                I will help you with finding constructible engineering solutions and solving transportation problems. Combining engineering physics with data intelligence to deliver resilient projects.
              </p>
            </div>

            {/* Active Selected Discipline Feature Card */}
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#CBD5E1] space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-[#005C5C]">
                  {selectedDiscipline.title} Capabilities
                </h4>
                <span className="text-xs font-mono text-[#078F91] font-semibold">
                  {selectedDiscipline.projectCount}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                {selectedDiscipline.summary}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {selectedDiscipline.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#1E293B]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#078F91] shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metric Counters (Inspired by Reference Layout: 285+ Project Completed, 190+ Happy Clients) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 border-t border-[#E2E8F0]">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-mono">97.2+<span className="text-xs font-sans text-gray-500">km</span></div>
                <div className="text-xs text-[#64748B] font-medium mt-0.5">Trunk Corridor Designed</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#005C5C] font-mono">15+</div>
                <div className="text-xs text-[#64748B] font-medium mt-0.5">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#078F91] font-mono">3</div>
                <div className="text-xs text-[#64748B] font-medium mt-0.5">Academic Degrees</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#08B9BD] font-mono">88.4%</div>
                <div className="text-xs text-[#64748B] font-medium mt-0.5">AI Prediction Accuracy</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
