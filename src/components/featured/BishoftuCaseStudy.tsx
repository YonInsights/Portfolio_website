import React, { useState } from 'react';
import { Compass, Layers, CheckCircle2, FileText, ArrowRight, Table, Eye, Ruler, Activity } from 'lucide-react';

export const BishoftuCaseStudy: React.FC = () => {
  const [activeVisualTab, setActiveVisualTab] = useState<'plan' | 'cross-section' | 'profile' | 'boq'>('plan');

  return (
    <section id="featured-highway" className="py-20 bg-[#F0F7F7] border-b border-[#E2E8F0] relative overflow-hidden">
      {/* CAD Grid Background */}
      <div className="absolute inset-0 bg-cad-grid opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#005C5C] text-white text-xs font-mono font-bold uppercase tracking-wider mb-3">
            FLAGSHIP HIGHWAY CASE STUDY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Design of Bishoftu Interchange & Arterial Access Road
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569] leading-relaxed">
            A comprehensive geometric highway design combining horizontal/vertical alignment optimization, multi-baseline Civil 3D corridor assemblies, hydraulic culvert sizing, and automated quantity takeoff.
          </p>
        </div>

        {/* 2-Column Main Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Technical Visualizer */}
          <div className="lg:col-span-7 bg-[#003838] text-white rounded-2xl border-2 border-[#005C5C] shadow-xl overflow-hidden flex flex-col">
            
            {/* View Selector Header */}
            <div className="p-4 bg-[#002B2B] border-b border-white/10 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 font-mono text-xs text-[#08B9BD] font-bold">
                <Compass className="w-4 h-4" />
                <span>TECHNICAL DRAWING VIEWPORT</span>
              </div>

              <div className="flex items-center gap-1 font-mono text-[11px]">
                {[
                  { id: 'plan', label: 'Alignment Plan' },
                  { id: 'cross-section', label: 'Cross Section' },
                  { id: 'profile', label: 'Vertical Profile' },
                  { id: 'boq', label: 'BOQ Quantities' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveVisualTab(tab.id as any)}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeVisualTab === tab.id
                        ? 'bg-[#08B9BD] text-[#003838] font-bold shadow-xs'
                        : 'bg-white/10 text-gray-300 hover:bg-white/15'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Visual Canvas Content */}
            <div className="p-6 aspect-[16/10] bg-[#002222] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-cad-grid-dark opacity-60 pointer-events-none"></div>

              {/* 1. HORIZONTAL ALIGNMENT PLAN */}
              {activeVisualTab === 'plan' && (
                <svg className="w-full h-full" viewBox="0 0 540 320">
                  {/* Outer Topography Contours */}
                  <path d="M 10 50 Q 140 20, 280 80 T 530 60" fill="none" stroke="rgba(8, 185, 189, 0.2)" strokeDasharray="3,3" />
                  <path d="M 10 130 Q 180 160, 360 120 T 530 170" fill="none" stroke="rgba(8, 185, 189, 0.2)" strokeDasharray="3,3" />
                  <path d="M 10 240 Q 200 200, 380 270 T 530 230" fill="none" stroke="rgba(8, 185, 189, 0.2)" strokeDasharray="3,3" />
                  
                  {/* Main Arterial Road Centerline */}
                  <path d="M 40 280 C 140 200, 220 180, 320 150 S 460 110, 500 70" fill="none" stroke="rgba(0, 92, 92, 0.7)" strokeWidth="22" />
                  <path d="M 40 280 C 140 200, 220 180, 320 150 S 460 110, 500 70" fill="none" stroke="#08B9BD" strokeWidth="3" />
                  <path d="M 40 280 C 140 200, 220 180, 320 150 S 460 110, 500 70" fill="none" stroke="#FFFFFF" strokeWidth="1.2" strokeDasharray="6,4" />

                  {/* Interchange Ramp A Loop */}
                  <path d="M 230 177 C 270 240, 370 250, 410 180 S 370 90, 320 150" fill="none" stroke="#078F91" strokeWidth="2.5" strokeDasharray="4,2" />
                  <text x="310" y="220" fill="#08B9BD" className="text-[10px] font-mono font-bold">Ramp Loop A (R=75m)</text>

                  {/* Overpass Bridge Deck */}
                  <rect x="295" y="130" width="40" height="40" fill="none" stroke="#F59E0B" strokeWidth="2" />
                  <text x="275" y="120" fill="#F59E0B" className="text-[10px] font-mono font-bold">Bridge Overpass (L=36m)</text>

                  {/* Stationing Annotations */}
                  <g className="fill-white text-[10px] font-mono">
                    <circle cx="40" cy="280" r="3.5" fill="#08B9BD" />
                    <text x="15" y="300">STA 0+000</text>

                    <circle cx="180" cy="190" r="3.5" fill="#078F91" />
                    <text x="130" y="180" fill="#08B9BD">PC 1+240 (R=350m)</text>

                    <circle cx="420" cy="120" r="3.5" fill="#078F91" />
                    <text x="430" y="110" fill="#08B9BD">PT 3+150</text>

                    <circle cx="500" cy="70" r="3.5" fill="#08B9BD" />
                    <text x="430" y="60">STA 4+850</text>
                  </g>
                </svg>
              )}

              {/* 2. DUAL-CARRIAGEWAY CROSS SECTION */}
              {activeVisualTab === 'cross-section' && (
                <svg className="w-full h-full" viewBox="0 0 540 300">
                  {/* Ground Profile Baseline */}
                  <line x1="20" y1="210" x2="520" y2="210" stroke="rgba(255,255,255,0.2)" strokeDasharray="4,4" />
                  <text x="30" y="230" fill="gray" className="text-[10px] font-mono">Existing Ground Surface (OGL)</text>

                  {/* Left Side Ditch & Slope */}
                  <path d="M 40 180 L 80 230 L 110 230 L 140 180" fill="none" stroke="#08B9BD" strokeWidth="2" />
                  <text x="55" y="250" fill="#08B9BD" className="text-[9px] font-mono">Side Ditch (0.6x0.6m)</text>

                  {/* Pavement Structural Layers */}
                  {/* Subgrade */}
                  <polygon points="140,180 400,180 390,210 150,210" fill="#334155" stroke="#475569" />
                  {/* Subbase (200mm) */}
                  <polygon points="145,170 395,170 390,180 150,180" fill="#475569" stroke="#64748B" />
                  {/* Crushed Base (150mm) */}
                  <polygon points="150,160 390,160 385,170 155,170" fill="#64748B" stroke="#94A3B8" />
                  {/* Asphalt Layer (110mm) */}
                  <polygon points="155,148 260,150 260,160 150,160" fill="#0F172A" stroke="#08B9BD" strokeWidth="1.5" />
                  <polygon points="280,150 385,148 390,160 280,160" fill="#0F172A" stroke="#08B9BD" strokeWidth="1.5" />

                  {/* Median Barrier */}
                  <rect x="265" y="135" width="10" height="20" fill="#E2E8F0" />
                  <text x="245" y="125" fill="#FFFFFF" className="text-[10px] font-mono font-bold">Raised Median</text>

                  {/* Dimension Annotations */}
                  <line x1="155" y1="130" x2="260" y2="130" stroke="#08B9BD" strokeWidth="1" />
                  <text x="175" y="120" fill="#08B9BD" className="text-[10px] font-mono">2x 3.65m Lanes (-2.5% Cross-fall)</text>

                  <line x1="280" y1="130" x2="385" y2="130" stroke="#08B9BD" strokeWidth="1" />
                  <text x="295" y="120" fill="#08B9BD" className="text-[10px] font-mono">2x 3.65m Lanes (-2.5% Cross-fall)</text>

                  {/* Right Side Daylight Slope */}
                  <path d="M 400 180 L 430 230 L 460 230 L 500 180" fill="none" stroke="#08B9BD" strokeWidth="2" />
                </svg>
              )}

              {/* 3. VERTICAL PROFILE */}
              {activeVisualTab === 'profile' && (
                <svg className="w-full h-full" viewBox="0 0 540 300">
                  {/* Grid Lines */}
                  <line x1="40" y1="50" x2="500" y2="50" stroke="rgba(255,255,255,0.1)" />
                  <line x1="40" y1="110" x2="500" y2="110" stroke="rgba(255,255,255,0.1)" />
                  <line x1="40" y1="170" x2="500" y2="170" stroke="rgba(255,255,255,0.1)" />
                  <line x1="40" y1="230" x2="500" y2="230" stroke="rgba(255,255,255,0.1)" />

                  <text x="10" y="55" fill="gray" className="text-[9px] font-mono">1940m</text>
                  <text x="10" y="115" fill="gray" className="text-[9px] font-mono">1930m</text>
                  <text x="10" y="175" fill="gray" className="text-[9px] font-mono">1920m</text>
                  <text x="10" y="235" fill="gray" className="text-[9px] font-mono">1910m</text>

                  {/* Existing Ground Line */}
                  <path d="M 40 210 Q 120 180, 200 140 T 360 90 T 500 60" fill="none" stroke="gray" strokeWidth="1.5" strokeDasharray="4,4" />

                  {/* Finished Grade Profile Curve (Design) */}
                  <path d="M 40 220 L 160 160 Q 240 120, 320 100 L 500 70" fill="none" stroke="#08B9BD" strokeWidth="3" />

                  {/* Crest Vertical Curve Annotation */}
                  <circle cx="240" cy="120" r="4" fill="#F59E0B" />
                  <text x="210" y="95" fill="#F59E0B" className="text-[10px] font-mono font-bold">PVI (STA 2+100.00)</text>
                  <text x="210" y="110" fill="#FFFFFF" className="text-[9px] font-mono">Lvc = 280m | K = 32 (Crest)</text>

                  {/* Grades */}
                  <text x="90" y="200" fill="#08B9BD" className="text-[10px] font-mono font-bold">g1 = +3.2%</text>
                  <text x="400" y="95" fill="#08B9BD" className="text-[10px] font-mono font-bold">g2 = +1.4%</text>
                </svg>
              )}

              {/* 4. BOQ QUANTITIES BREAKDOWN */}
              {activeVisualTab === 'boq' && (
                <div className="w-full text-xs font-mono text-gray-200 overflow-x-auto space-y-3">
                  <div className="text-[11px] text-[#08B9BD] font-bold uppercase pb-1 border-b border-white/10">
                    Bishoftu Interchange — Bill of Quantities (BOQ Summary)
                  </div>
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/20 text-gray-400 text-[10px]">
                        <th className="py-1.5">Item No.</th>
                        <th className="py-1.5">Description</th>
                        <th className="py-1.5">Unit</th>
                        <th className="py-1.5 text-right">Estimated Qty</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-[11px]">
                      <tr>
                        <td className="py-1.5 text-[#08B9BD]">21.01</td>
                        <td className="py-1.5">Clearing & Grubbing</td>
                        <td className="py-1.5">m²</td>
                        <td className="py-1.5 text-right font-bold">78,500</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 text-[#08B9BD]">22.02</td>
                        <td className="py-1.5">Common Excavation (Cut)</td>
                        <td className="py-1.5">m³</td>
                        <td className="py-1.5 text-right font-bold">142,400</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 text-[#08B9BD]">22.05</td>
                        <td className="py-1.5">Embankment Construction (Fill)</td>
                        <td className="py-1.5">m³</td>
                        <td className="py-1.5 text-right font-bold">118,600</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 text-[#08B9BD]">31.01</td>
                        <td className="py-1.5">Crushed Aggregate Base Course</td>
                        <td className="py-1.5">m³</td>
                        <td className="py-1.5 text-right font-bold">24,300</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 text-[#08B9BD]">42.01</td>
                        <td className="py-1.5">Asphalt Concrete Wearing Course</td>
                        <td className="py-1.5">m³</td>
                        <td className="py-1.5 text-right font-bold">8,950</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 text-[#08B9BD]">51.03</td>
                        <td className="py-1.5">RC Box Culverts (Class C25/30)</td>
                        <td className="py-1.5">m³</td>
                        <td className="py-1.5 text-right font-bold">1,820</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="text-[10px] text-gray-400 italic">
                    *Quantities derived dynamically from Civil 3D corridor sample line volumes.
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Parameters Strip */}
            <div className="p-3 bg-[#002B2B] border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] font-mono text-gray-300">
              <span>Design Speed: <strong>80 km/h</strong></span>
              <span>Min Curve Radius: <strong>250m</strong></span>
              <span>Max Superelevation: <strong>6.0%</strong></span>
              <span>Standards: <strong>ERA / AASHTO</strong></span>
            </div>
          </div>

          {/* Right Column: Case Study Narrative & Deliverables */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="bg-white p-6 rounded-2xl border border-[#CBD5E1] shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-[#0F172A] tracking-tight flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#005C5C]" />
                <span>Engineering Challenge & Scope</span>
              </h3>
              
              <p className="text-xs text-[#334155] leading-relaxed">
                The Bishoftu Interchange and Access Road corridor provides vital freight and passenger connectivity. The design required balancing severe elevation drops across rolling volcanic terrain with strict stopping sight distance criteria and minimal agricultural land acquisition.
              </p>

              <div className="space-y-2.5 text-xs text-[#334155]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#078F91] shrink-0 mt-0.5" />
                  <span><strong>Horizontal Alignment:</strong> Smooth transition spiral curves (clothoids) preventing sudden centrifugal jerk on high-speed entry ramps.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#078F91] shrink-0 mt-0.5" />
                  <span><strong>Vertical Coordination:</strong> Balanced cut and fill volumes through mass-haul optimization, minimizing costly off-site borrow pit hauling.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#078F91] shrink-0 mt-0.5" />
                  <span><strong>Hydraulics & Drainage:</strong> Catchment delineation in GIS and sizing of 12 cross-drainage pipe and reinforced concrete box culverts.</span>
                </div>
              </div>
            </div>

            {/* Deliverables List Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#CBD5E1] shadow-sm space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#005C5C]">
                FINAL ENGINEERING DELIVERABLES PRODUCED
              </h4>

              <ul className="space-y-2 text-xs text-[#334155]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#08B9BD]"></span>
                  <span>1:1000 Plan & 1:100 Profile Drawing Sheets (A0 Format)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#08B9BD]"></span>
                  <span>Full Cross-Section Album at 20-meter station intervals</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#08B9BD]"></span>
                  <span>Superelevation Runoff Diagrams & Staking Coordinate Tables</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#08B9BD]"></span>
                  <span>Itemized 7-Division Bill of Quantities (BOQ) with Material Schedules</span>
                </li>
              </ul>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full py-2.5 px-4 rounded-lg bg-[#005C5C] text-white text-xs font-semibold text-center block hover:bg-[#078F91] transition-colors shadow-2xs"
                >
                  Inquire About Highway Design Services
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
