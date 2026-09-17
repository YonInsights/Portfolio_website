import React, { useState } from 'react';
import { Layers, Activity, Compass, Eye, Maximize2, RefreshCw } from 'lucide-react';

export const EngineeringViewport: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<'all' | 'alignment' | 'gis' | 'civil3d' | 'ml'>('all');
  const [cursorPos, setCursorPos] = useState({ x: 280, y: 160 });
  const [hoverStation, setHoverStation] = useState('STA 1+450.00');

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    setCursorPos({ x, y });
    const stationKm = (x / 100).toFixed(2);
    setHoverStation(`STA ${stationKm}+00.00`);
  };

  return (
    <div className="relative rounded-2xl bg-[#004242] text-white p-5 border border-[#005C5C] shadow-2xl overflow-hidden group">
      {/* Top Technical Header Bar */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#08B9BD] animate-pulse"></span>
          <span className="text-[#08B9BD] font-semibold tracking-wider">CIVIL 3D & GIS DIGITAL VIEWPORT</span>
        </div>
        <div className="flex items-center gap-3 text-gray-300 text-[11px]">
          <span>CRS: UTM 37N</span>
          <span className="hidden sm:inline">V_d: 80 km/h</span>
          <span className="text-[#08B9BD]">e_max: 6.0%</span>
        </div>
      </div>

      {/* Layer Toggles */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {[
          { id: 'all', label: 'All Overlays' },
          { id: 'alignment', label: 'Alignment (STA)' },
          { id: 'gis', label: 'GIS Catchments' },
          { id: 'civil3d', label: 'Civil 3D Corridor' },
          { id: 'ml', label: 'AI Congestion ML' },
        ].map((layer) => (
          <button
            key={layer.id}
            type="button"
            onClick={() => setActiveLayer(layer.id as any)}
            className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
              activeLayer === layer.id
                ? 'bg-[#08B9BD] text-[#004242] font-bold shadow-sm'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            {layer.label}
          </button>
        ))}
      </div>

      {/* CAD/GIS Vector Canvas */}
      <div className="relative w-full aspect-[16/10] bg-[#002B2B] rounded-xl border border-white/10 overflow-hidden">
        {/* Subtle CAD Background Grid */}
        <div className="absolute inset-0 bg-cad-grid-dark opacity-70 pointer-events-none"></div>

        <svg
          className="w-full h-full cursor-crosshair"
          viewBox="0 0 600 360"
          onMouseMove={handleMouseMove}
        >
          {/* Topographic Contour Lines (GIS Terrain) */}
          {(activeLayer === 'all' || activeLayer === 'gis' || activeLayer === 'civil3d') && (
            <g className="stroke-[#078F91]/30 fill-none stroke-[1] stroke-dasharray-[4,4]">
              <path d="M 0 60 Q 150 40, 300 90 T 600 70" />
              <path d="M 0 120 Q 200 140, 380 110 T 600 150" />
              <path d="M 0 200 Q 180 240, 350 190 T 600 230" />
              <path d="M 0 290 Q 220 270, 420 310 T 600 280" />
              <text x="20" y="55" className="fill-[#08B9BD]/50 text-[9px] font-mono">EL 1925.00m</text>
              <text x="20" y="195" className="fill-[#08B9BD]/50 text-[9px] font-mono">EL 1915.00m</text>
            </g>
          )}

          {/* GIS Watershed Catchment Shading */}
          {(activeLayer === 'all' || activeLayer === 'gis') && (
            <path
              d="M 120 40 Q 240 70, 310 140 T 460 180 L 480 320 L 160 300 Z"
              fill="rgba(8, 185, 189, 0.08)"
              stroke="rgba(8, 185, 189, 0.25)"
              strokeWidth="1.5"
              strokeDasharray="2,2"
            />
          )}

          {/* Machine Learning Congestion Heat Nodes */}
          {(activeLayer === 'all' || activeLayer === 'ml') && (
            <g>
              <circle cx="340" cy="180" r="28" fill="rgba(239, 68, 68, 0.18)" className="animate-ping" style={{ animationDuration: '3s' }} />
              <circle cx="340" cy="180" r="14" fill="rgba(239, 68, 68, 0.4)" stroke="#EF4444" strokeWidth="1.5" />
              <text x="360" y="184" className="fill-red-300 text-[10px] font-mono font-bold">ML Hotspot: High Queueing (LOS E)</text>

              <circle cx="160" cy="130" r="10" fill="rgba(34, 197, 94, 0.3)" stroke="#22C55E" strokeWidth="1.2" />
              <text x="175" y="134" className="fill-green-300 text-[9px] font-mono">Free Flow (LOS A)</text>
            </g>
          )}

          {/* Highway Corridor Daylight Boundaries (Civil 3D) */}
          {(activeLayer === 'all' || activeLayer === 'civil3d') && (
            <g className="stroke-[#08B9BD]/40 fill-none stroke-[1.5]">
              {/* Left Cut/Fill Daylight Line */}
              <path d="M 40 280 C 140 210, 220 190, 320 160 S 480 120, 560 80" strokeDasharray="3,3" />
              {/* Right Cut/Fill Daylight Line */}
              <path d="M 80 330 C 180 260, 260 240, 360 210 S 520 170, 600 130" strokeDasharray="3,3" />
              {/* Cross-section Hachures */}
              <line x1="160" y1="230" x2="200" y2="280" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <line x1="280" y1="180" x2="320" y2="230" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <line x1="420" y1="130" x2="460" y2="180" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            </g>
          )}

          {/* Primary Highway Centerline Alignment (Horizontal Curve + Spirals) */}
          {(activeLayer === 'all' || activeLayer === 'alignment' || activeLayer === 'civil3d') && (
            <g>
              {/* Main Corridor Pavement Surface */}
              <path
                d="M 60 305 C 160 235, 240 215, 340 185 S 500 145, 580 105"
                fill="none"
                stroke="rgba(0, 92, 92, 0.6)"
                strokeWidth="24"
                strokeLinecap="round"
              />
              <path
                d="M 60 305 C 160 235, 240 215, 340 185 S 500 145, 580 105"
                fill="none"
                stroke="#08B9BD"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              {/* Centerline Dash Pattern */}
              <path
                d="M 60 305 C 160 235, 240 215, 340 185 S 500 145, 580 105"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeDasharray="8,6"
              />

              {/* Geometric Design Key Control Points */}
              <g className="fill-white text-[10px] font-mono">
                {/* Station 0+000 */}
                <circle cx="60" cy="305" r="4" fill="#08B9BD" stroke="#FFFFFF" strokeWidth="1.5" />
                <text x="45" y="325" fill="#EEEEEE">STA 0+000 (POB)</text>

                {/* Point of Curvature (PC) */}
                <circle cx="190" cy="225" r="4" fill="#078F91" stroke="#FFFFFF" strokeWidth="1.5" />
                <text x="140" y="215" fill="#08B9BD" className="font-bold">PC (STA 1+240.00)</text>

                {/* Point of Tangency (PT) */}
                <circle cx="430" cy="155" r="4" fill="#078F91" stroke="#FFFFFF" strokeWidth="1.5" />
                <text x="435" y="145" fill="#08B9BD" className="font-bold">PT (STA 3+120.00)</text>

                {/* Station 4+850 */}
                <circle cx="580" cy="105" r="4" fill="#08B9BD" stroke="#FFFFFF" strokeWidth="1.5" />
                <text x="500" y="95" fill="#EEEEEE">STA 4+850 (POE)</text>
              </g>

              {/* Ramp Gore Diverge Curve (Bishoftu Interchange simulation) */}
              <path
                d="M 340 185 Q 440 220, 560 270"
                fill="none"
                stroke="#078F91"
                strokeWidth="2.5"
                strokeDasharray="4,3"
              />
              <text x="450" y="260" fill="#08B9BD" className="text-[9px] font-mono font-bold">Ramp Alignment A (R=120m)</text>
            </g>
          )}

          {/* Interactive Mouse Crosshair */}
          <g className="pointer-events-none opacity-80">
            <line x1={cursorPos.x} y1="0" x2={cursorPos.x} y2="360" stroke="#08B9BD" strokeWidth="0.8" strokeDasharray="2,2" />
            <line x1="0" y1={cursorPos.y} x2="600" y2={cursorPos.y} stroke="#08B9BD" strokeWidth="0.8" strokeDasharray="2,2" />
            <circle cx={cursorPos.x} cy={cursorPos.y} r="6" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
          </g>
        </svg>

        {/* Live Coordinate Overlay HUD */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex flex-wrap items-center justify-between bg-[#001E1E]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono text-gray-200">
          <div className="flex items-center gap-3">
            <span className="text-[#08B9BD] font-semibold">{hoverStation}</span>
            <span className="text-gray-400">X: {(472800 + cursorPos.x * 1.5).toFixed(2)}m E</span>
            <span className="text-gray-400">Y: {(981400 + cursorPos.y * 1.5).toFixed(2)}m N</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-[#08B9BD]">
            <span>Radius R=350m</span>
            <span>•</span>
            <span>Grade g=+1.8%</span>
          </div>
        </div>
      </div>

      {/* Bottom Technical Indicators */}
      <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-white/10 text-center font-mono text-xs">
        <div className="p-2 rounded bg-white/5 border border-white/5">
          <div className="text-gray-400 text-[10px]">ALIGNMENT</div>
          <div className="font-bold text-[#08B9BD]">Civil 3D 2024</div>
        </div>
        <div className="p-2 rounded bg-white/5 border border-white/5">
          <div className="text-gray-400 text-[10px]">GEOM CRITERIA</div>
          <div className="font-bold text-white">AASHTO / ERA</div>
        </div>
        <div className="p-2 rounded bg-white/5 border border-white/5">
          <div className="text-gray-400 text-[10px]">SPATIAL GIS</div>
          <div className="font-bold text-[#08B9BD]">ArcGIS / QGIS</div>
        </div>
        <div className="p-2 rounded bg-white/5 border border-white/5">
          <div className="text-gray-400 text-[10px]">AI / ML STACK</div>
          <div className="font-bold text-white">Python / PyTorch</div>
        </div>
      </div>
    </div>
  );
};
