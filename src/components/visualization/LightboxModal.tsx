import React, { useEffect, useState } from 'react';
import type { VisualizationGalleryItem } from '../../types';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Layers, CheckCircle2, Terminal } from 'lucide-react';

interface LightboxModalProps {
  items: VisualizationGalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % items.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl bg-[#002222] text-white rounded-2xl border border-[#005C5C] shadow-2xl overflow-hidden flex flex-col max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-4 bg-[#001A1A] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#08B9BD] text-[#002222] font-mono text-xs font-bold uppercase">
              {currentItem.category}
            </span>
            <h3 className="text-sm sm:text-base font-bold text-white tracking-tight truncate max-w-md">
              {currentItem.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center bg-white/10 rounded-lg p-1">
              <button
                onClick={handleZoomOut}
                className="p-1 text-gray-300 hover:text-white"
                aria-label="Zoom out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="px-2 text-[11px] font-mono">{Math.round(zoomLevel * 100)}%</span>
              <button
                onClick={handleZoomIn}
                className="p-1 text-gray-300 hover:text-white"
                aria-label="Zoom in"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Viewport Canvas Container */}
        <div className="relative flex-1 min-h-[360px] max-h-[550px] bg-[#001515] flex items-center justify-center p-6 overflow-hidden">
          
          {/* Subtle Grid Lines */}
          <div className="absolute inset-0 bg-cad-grid-dark opacity-40 pointer-events-none"></div>

          {/* Dynamic 3D Simulated Render Graphic */}
          <div
            className="w-full h-full flex items-center justify-center transition-transform duration-200"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <div className="w-full max-w-3xl aspect-[16/9] bg-[#002B2B] rounded-xl border border-[#08B9BD]/30 shadow-2xl p-6 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#003838] via-[#004A4A] to-[#08B9BD]/20 opacity-80"></div>

              {/* 3D Wireframe / Spatial Mesh Simulation */}
              <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#08B9BD]">
                <span>3D SOLID RENDER VIEWPORT</span>
                <span>MESH RESOLUTION: 4K HIGH DENSITY</span>
              </div>

              <div className="relative z-10 text-center my-auto space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-[#08B9BD]/10 border border-[#08B9BD] flex items-center justify-center mx-auto text-[#08B9BD] shadow-lg">
                  <Layers className="w-8 h-8" />
                </div>
                <div className="text-lg font-bold text-white font-mono">{currentItem.title}</div>
                <p className="text-xs text-gray-300 max-w-md mx-auto font-sans leading-relaxed">
                  {currentItem.description}
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-gray-300">
                <span>TOOLS: {currentItem.softwareUsed.join(' • ')}</span>
                <span className="text-[#08B9BD]">STATUS: CLIENT PRESENTATION READY</span>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-[#08B9BD] hover:text-[#002222] text-white transition-colors border border-white/20"
            aria-label="Previous item"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => onNavigate((currentIndex + 1) % items.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-[#08B9BD] hover:text-[#002222] text-white transition-colors border border-white/20"
            aria-label="Next item"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>

        {/* Footer Details */}
        <div className="p-4 bg-[#001A1A] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-gray-400">Key Features:</span>
            {currentItem.keyFeatures.map((feat, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded bg-white/10 text-gray-200 text-[11px]">
                {feat}
              </span>
            ))}
          </div>

          <div className="text-gray-400">
            Image {currentIndex + 1} of {items.length}
          </div>
        </div>

      </div>
    </div>
  );
};
