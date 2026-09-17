import React from 'react';
import { ArrowUp, Mail, MapPin, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#004242] text-white pt-16 pb-12 border-t-4 border-[#08B9BD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Identity Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#08B9BD] text-[#004242] font-mono font-bold flex items-center justify-center text-lg shadow">
                YA
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white">Yonatan Abrham</h3>
                <p className="text-xs font-mono text-[#08B9BD] uppercase tracking-wider font-semibold">
                  Civil/Highway Engineer + Data Scientist
                </p>
              </div>
            </div>
            
            <p className="text-sm text-gray-300 leading-relaxed max-w-md">
              Designing resilient infrastructure through geometric highway engineering, GIS spatial modeling, Civil 3D, and transportation machine learning.
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-300 font-mono">
              <MapPin className="w-4 h-4 text-[#08B9BD]" />
              <span>Addis Ababa, Ethiopia / Global Remote & International Mobility</span>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/yonatan-abrham1/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-[#08B9BD] hover:text-[#004242] transition-colors border border-white/10 text-gray-200"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://github.com/YonInsights"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-[#08B9BD] hover:text-[#004242] transition-colors border border-white/10 text-gray-200"
                aria-label="GitHub Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="mailto:email2yonatan@gmail.com"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-[#08B9BD] hover:text-[#004242] transition-colors border border-white/10 text-gray-200"
                aria-label="Email Yonatan Abrham"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#08B9BD]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#about" className="hover:text-white transition-colors">About Background</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors">Core Disciplines</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Project Portfolio</a></li>
              <li><a href="#featured-highway" className="hover:text-white transition-colors">Bishoftu Interchange</a></li>
              <li><a href="#data-ai" className="hover:text-white transition-colors">Data & AI Systems</a></li>
              <li><a href="/Yonatan_Abrham_CV.pdf" target="_blank" rel="noopener noreferrer" download="Yonatan_Abrham_CV.pdf" className="text-[#08B9BD] font-semibold hover:underline flex items-center gap-1.5">Download CV (PDF)</a></li>
            </ul>
          </div>

          {/* Professional Sectors */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#08B9BD]">
              Opportunities
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#contact" className="hover:text-white transition-colors">International Highway Jobs</a></li>
              <li><a href="#freelance" className="hover:text-white transition-colors">Remote Freelance Consulting</a></li>
              <li><a href="#research" className="hover:text-white transition-colors">MSc / PhD Research</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors">GIS & Spatial Analytics</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Civil 3D Modeling Support</a></li>
            </ul>
          </div>

          {/* Engineering Standards Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#08B9BD]">
              Engineering Standards
            </h4>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#08B9BD]" />
                <span>AASHTO Green Book Guidelines</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#08B9BD]" />
                <span>ERA Design Manuals (2013/2020)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#08B9BD]" />
                <span>TRB Highway Capacity Manual</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#08B9BD]" />
                <span>NCHRP 672 Roundabouts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#08B9BD]" />
                <span>ASTM Pavement Distress Standards</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Yonatan Abrham. All Rights Reserved.</span>
            <span className="hidden sm:inline text-gray-600">|</span>
            <span className="hidden sm:inline">Professional Portfolio</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono text-gray-400">
              Engineered with React, TypeScript & Tailwind CSS
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-md bg-white/10 hover:bg-[#08B9BD] hover:text-[#004242] transition-colors flex items-center gap-1.5 text-xs text-white"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
