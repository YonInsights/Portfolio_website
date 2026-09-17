import React, { useState } from 'react';
import { Cpu, Activity, BarChart3, Database, ArrowRight, CheckCircle2, Sliders, Play, RotateCcw } from 'lucide-react';

export const DataAndAIShowcase: React.FC = () => {
  const [trafficDensity, setTrafficDensity] = useState(75); // Slider from 20 to 100%

  // Dynamic simulation calculations
  const baselineDelay = Math.round(trafficDensity * 1.35 + 15);
  const aiOptimizedDelay = Math.round(trafficDensity * 0.95 + 8);
  const delayReduction = Math.round(((baselineDelay - aiOptimizedDelay) / baselineDelay) * 100);
  const queueLengthMeters = Math.round(trafficDensity * 4.2);

  return (
    <section id="data-ai" className="py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#078F91]/10 text-[#078F91] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            ENGINEERING MEETS DATA & MACHINE LEARNING
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            AI-Driven Intelligent Traffic Management for Urban Congestion
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#64748B]">
            Applied machine learning, time-series forecasting, and spatial network analytics deployed to mitigate urban gridlock in Addis Ababa.
          </p>
        </div>

        {/* 2-Column AI Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Traffic Flow Simulator */}
          <div className="lg:col-span-7 bg-[#004242] text-white p-6 sm:p-8 rounded-2xl border border-[#005C5C] shadow-xl space-y-6">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#08B9BD]" />
                <h3 className="text-base font-bold text-white tracking-tight">
                  Dynamic Signal Timing Optimization Simulator
                </h3>
              </div>
              <span className="text-[11px] font-mono text-[#08B9BD] bg-white/10 px-2.5 py-1 rounded">
                Interactive Model
              </span>
            </div>

            {/* Slider Control */}
            <div className="space-y-2 bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-gray-300">Simulated Corridor Traffic Density:</span>
                <span className="font-bold text-[#08B9BD]">{trafficDensity}% Capacity</span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                value={trafficDensity}
                onChange={(e) => setTrafficDensity(Number(e.target.value))}
                className="w-full accent-[#08B9BD] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                <span>Free Flow (20%)</span>
                <span>Moderate Peak (60%)</span>
                <span>Gridlock Surge (100%)</span>
              </div>
            </div>

            {/* Live Comparative Simulation Graphs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono">
              
              {/* Baseline Fixed Cycle */}
              <div className="p-4 rounded-xl bg-white/5 border border-red-500/30 space-y-2">
                <div className="text-[11px] text-red-300 uppercase font-bold flex items-center justify-between">
                  <span>Static Fixed Timing</span>
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                </div>
                <div className="text-2xl font-extrabold text-white">
                  {baselineDelay} <span className="text-xs font-normal text-gray-300">sec / veh</span>
                </div>
                <div className="text-[11px] text-gray-300">
                  Estimated Queue: <strong className="text-white">{queueLengthMeters} meters</strong>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-red-400 h-full rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(trafficDensity * 1.1, 100)}%` }}
                  ></div>
                </div>
              </div>

              {/* AI Dynamic Split */}
              <div className="p-4 rounded-xl bg-white/10 border border-[#08B9BD]/50 space-y-2">
                <div className="text-[11px] text-[#08B9BD] uppercase font-bold flex items-center justify-between">
                  <span>AI Dynamic Adaptive</span>
                  <span className="w-2 h-2 rounded-full bg-[#08B9BD] animate-pulse"></span>
                </div>
                <div className="text-2xl font-extrabold text-[#08B9BD]">
                  {aiOptimizedDelay} <span className="text-xs font-normal text-gray-300">sec / veh</span>
                </div>
                <div className="text-[11px] text-gray-300">
                  Efficiency Gain: <strong className="text-[#08B9BD]">-{delayReduction}% Delay</strong>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#08B9BD] h-full rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(trafficDensity * 0.75, 100)}%` }}
                  ></div>
                </div>
              </div>

            </div>

            {/* Model Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-white/10 text-center font-mono text-xs">
              <div className="p-2 rounded bg-white/5">
                <div className="text-gray-400 text-[10px]">PREDICTION ACC</div>
                <div className="font-bold text-[#08B9BD]">88.4%</div>
              </div>
              <div className="p-2 rounded bg-white/5">
                <div className="text-gray-400 text-[10px]">R² SCORE</div>
                <div className="font-bold text-white">0.89</div>
              </div>
              <div className="p-2 rounded bg-white/5">
                <div className="text-gray-400 text-[10px]">MAE (SPEED)</div>
                <div className="font-bold text-[#08B9BD]">3.4 km/h</div>
              </div>
              <div className="p-2 rounded bg-white/5">
                <div className="text-gray-400 text-[10px]">ALGORITHM</div>
                <div className="font-bold text-white">LSTM + XGB</div>
              </div>
            </div>

          </div>

          {/* Right Column: Engineering Methodology & Impact */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="bg-[#F8FAFA] p-6 rounded-2xl border border-[#CBD5E1] space-y-4">
              <h3 className="text-lg font-bold text-[#0F172A] tracking-tight flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#005C5C]" />
                <span>The End-to-End ML Pipeline</span>
              </h3>

              <div className="space-y-3 text-xs text-[#334155]">
                <div className="p-3 rounded-lg bg-white border border-[#E2E8F0]">
                  <strong className="text-[#005C5C] block mb-0.5">1. Spatial-Temporal Data Aggregation</strong>
                  <span>Historical count sensors, weather anomalies, and road geometry link capacities processed in PostgreSQL.</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-[#E2E8F0]">
                  <strong className="text-[#078F91] block mb-0.5">2. Deep Sequential Modeling</strong>
                  <span>PyTorch LSTM recurrent networks capture 15-to-60 minute bottleneck formation trajectories.</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-[#E2E8F0]">
                  <strong className="text-[#08B9BD] block mb-0.5">3. Adaptive Signal Split Optimization</strong>
                  <span>Real-time green-split algorithm dynamically redistributes phase time to highest queue branches.</span>
                </div>
              </div>
            </div>

            {/* Status Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#CBD5E1] shadow-2xs space-y-3">
              <div className="text-xs font-mono font-bold uppercase text-[#078F91]">
                RESEARCH & DEPLOYMENT STATUS
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                Completed as an advanced applied research framework. Available for academic review, MSc/PhD collaboration, and pilot smart-city simulation deployments.
              </p>
              <a
                href="#research"
                className="text-xs font-semibold text-[#005C5C] hover:text-[#078F91] flex items-center gap-1.5 pt-1"
              >
                <span>Read Full Research Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
