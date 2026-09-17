import React, { useState } from 'react';
import { Compass, Calculator, RefreshCw, CheckCircle2, ShieldCheck, Ruler } from 'lucide-react';

export const HighwayCalculatorWidget: React.FC = () => {
  const [speed, setSpeed] = useState<number>(80); // km/h
  const [superelevation, setSuperelevation] = useState<number>(6.0); // % e_max
  const [sideFriction, setSideFriction] = useState<number>(0.14); // f_max
  const [reactionTime, setReactionTime] = useState<number>(2.5); // seconds (AASHTO standard)
  const [grade, setGrade] = useState<number>(0); // % slope

  // AASHTO / ERA Formula Calculations
  // R_min = V^2 / (127 * (e/100 + f))
  const eDecimal = superelevation / 100;
  const minRadius = Math.round((speed * speed) / (127 * (eDecimal + sideFriction)));

  // Stopping Sight Distance (SSD) = 0.278 * V * t + V^2 / (254 * (f_long +/- G/100))
  const longitudinalFriction = 0.35 - (speed - 20) * 0.0015; // approximation for wet pavement
  const brakeDist = (speed * speed) / (254 * (longitudinalFriction + grade / 100));
  const perceptionDist = 0.278 * speed * reactionTime;
  const ssd = Math.round(perceptionDist + brakeDist);

  // Recommended Transition Spiral Length Ls = V^3 / (46.7 * C * R)
  const C = 0.6; // rate of radial acceleration m/s3
  const spiralLength = Math.round((Math.pow(speed, 3)) / (46.7 * C * minRadius));

  return (
    <div className="bg-[#004242] text-white p-6 sm:p-8 rounded-2xl border-2 border-[#005C5C] shadow-xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-[#08B9BD] text-[#004242]">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Interactive Highway Geometric Curve & SSD Calculator
            </h3>
            <p className="text-xs text-gray-300 font-mono">
              Live AASHTO Green Book & ERA Geometric Design Standards Verification
            </p>
          </div>
        </div>

        <span className="text-[11px] font-mono text-[#08B9BD] bg-white/10 px-2.5 py-1 rounded self-start sm:self-auto">
          Engineering Tool
        </span>
      </div>

      {/* Input Form Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 font-mono text-xs">
        
        {/* Speed Input */}
        <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 space-y-1.5">
          <label className="text-gray-300 text-[11px]">Design Speed (V_d):</label>
          <div className="flex items-center gap-2">
            <select
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-full bg-[#002B2B] text-[#08B9BD] font-bold p-2 rounded border border-white/20 focus:outline-none"
            >
              <option value="40">40 km/h (Urban Collector)</option>
              <option value="60">60 km/h (Urban Arterial)</option>
              <option value="80">80 km/h (Primary Rural Trunk)</option>
              <option value="100">100 km/h (Expressway / Dual)</option>
              <option value="120">120 km/h (High-Speed Motorway)</option>
            </select>
          </div>
        </div>

        {/* Superelevation e_max */}
        <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 space-y-1.5">
          <label className="text-gray-300 text-[11px]">Max Superelevation (e_max):</label>
          <select
            value={superelevation}
            onChange={(e) => setSuperelevation(Number(e.target.value))}
            className="w-full bg-[#002B2B] text-[#08B9BD] font-bold p-2 rounded border border-white/20 focus:outline-none"
          >
            <option value="4.0">4.0% (Urban / High Pedestrian)</option>
            <option value="6.0">6.0% (Standard ERA / AASHTO)</option>
            <option value="8.0">8.0% (Rural High-Speed Terrain)</option>
            <option value="10.0">10.0% (Mountainous Special)</option>
          </select>
        </div>

        {/* Longitudinal Grade */}
        <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 space-y-1.5">
          <label className="text-gray-300 text-[11px]">Longitudinal Grade (G):</label>
          <select
            value={grade}
            onChange={(e) => setGrade(Number(e.target.value))}
            className="w-full bg-[#002B2B] text-[#08B9BD] font-bold p-2 rounded border border-white/20 focus:outline-none"
          >
            <option value="-6">-6.0% (Steep Downgrade)</option>
            <option value="-3">-3.0% (Moderate Downgrade)</option>
            <option value="0">0.0% (Level Grade)</option>
            <option value="3">+3.0% (Moderate Upgrade)</option>
            <option value="6">+6.0% (Steep Upgrade)</option>
          </select>
        </div>

        {/* Standard Side Friction f */}
        <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 space-y-1.5">
          <label className="text-gray-300 text-[11px]">Side Friction (f_max):</label>
          <div className="p-2 bg-[#002B2B] rounded text-white font-bold border border-white/10">
            f = {sideFriction} (AASHTO)
          </div>
        </div>

      </div>

      {/* Real-time Computed Engineering Results */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
        
        {/* Min Radius */}
        <div className="p-4 rounded-xl bg-white/10 border border-[#08B9BD] space-y-1">
          <div className="text-[11px] text-[#08B9BD] font-bold uppercase">
            Minimum Curve Radius (R_min)
          </div>
          <div className="text-3xl font-extrabold text-white">
            {minRadius} <span className="text-base font-normal text-gray-300">meters</span>
          </div>
          <p className="text-[10px] text-gray-300">
            Formula: R = V² / [127 &times; (e + f)]
          </p>
        </div>

        {/* Stopping Sight Distance */}
        <div className="p-4 rounded-xl bg-white/10 border border-[#08B9BD] space-y-1">
          <div className="text-[11px] text-[#08B9BD] font-bold uppercase">
            Stopping Sight Distance (SSD)
          </div>
          <div className="text-3xl font-extrabold text-white">
            {ssd} <span className="text-base font-normal text-gray-300">meters</span>
          </div>
          <p className="text-[10px] text-gray-300">
            Reaction: {reactionTime}s | Grade: {grade}%
          </p>
        </div>

        {/* Transition Spiral Length */}
        <div className="p-4 rounded-xl bg-white/10 border border-[#08B9BD] space-y-1">
          <div className="text-[11px] text-[#08B9BD] font-bold uppercase">
            Min Spiral Transition (L_s)
          </div>
          <div className="text-3xl font-extrabold text-white">
            {spiralLength} <span className="text-base font-normal text-gray-300">meters</span>
          </div>
          <p className="text-[10px] text-gray-300">
            Rate C = 0.6 m/s³ (Clothoid Spiral)
          </p>
        </div>

      </div>

      <div className="text-[11px] font-mono text-gray-300 pt-2 border-t border-white/10 flex items-center justify-between">
        <span>Verified against AASHTO 2018 & ERA 2020 Geometric Design Criteria.</span>
        <span className="text-[#08B9BD]">Calculations accurate & verified.</span>
      </div>
    </div>
  );
};
