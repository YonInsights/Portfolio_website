import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Layers, Compass, BarChart3, Mail, FileText, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenContactWithService?: (serviceName: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactWithService }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        'home', 'snapshot', 'about', 'expertise', 'projects', 
        'featured-highway', 'data-ai', 'visualization', 'experience', 
        'research', 'freelance', 'contact'
      ];
      
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Projects', href: '#projects' },
    { label: 'Featured Highway', href: '#featured-highway' },
    { label: 'Data & AI', href: '#data-ai' },
    { label: '3D Viz', href: '#visualization' },
    { label: 'Experience', href: '#experience' },
    { label: 'Research', href: '#research' },
    { label: 'Freelance', href: '#freelance' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E2E8F0] py-3' 
          : 'bg-[#F8FAFA]/80 backdrop-blur-sm border-b border-[#E2E8F0]/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Professional Title */}
          <a href="#home" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#005C5C] text-white flex items-center justify-center font-mono font-bold text-lg shadow-sm group-hover:bg-[#078F91] transition-colors border border-[#08B9BD]/30">
              YA
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg text-[#0F172A] tracking-tight group-hover:text-[#005C5C] transition-colors">
                Yonatan Abrham
              </span>
              <span className="text-[11px] font-mono tracking-wider text-[#078F91] font-semibold uppercase">
                Civil/Highway Engineer + Data Scientist
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    isActive
                      ? 'text-[#005C5C] bg-[#005C5C]/8 font-semibold'
                      : 'text-[#475569] hover:text-[#005C5C] hover:bg-[#E2E8F0]/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="/Yonatan_Abrham_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Yonatan_Abrham_CV.pdf"
              className="px-3.5 py-2 text-xs font-semibold rounded-md text-[#005C5C] hover:bg-[#005C5C]/10 border border-[#005C5C]/30 transition-all duration-200 flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-[#078F91]" />
              <span>Download CV</span>
            </a>
            <a
              href="#freelance"
              className="px-4 py-2 text-xs font-semibold rounded-md bg-[#005C5C] text-white hover:bg-[#078F91] shadow-sm hover:shadow transition-all duration-200 flex items-center gap-1.5 border border-[#08B9BD]/30"
            >
              <span>Request Work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-md text-[#0F172A] hover:bg-[#E2E8F0] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#005C5C]" /> : <Menu className="w-6 h-6 text-[#005C5C]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#E2E8F0] shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-1">
            <div className="px-3 py-2 text-[11px] font-mono uppercase tracking-wider text-[#64748B] border-b border-gray-100 mb-2">
              Navigation Menu
            </div>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium text-[#1E293B] hover:text-[#005C5C] hover:bg-[#005C5C]/5"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-[#AAAAAA]" />
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
              <a
                href="/Yonatan_Abrham_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Yonatan_Abrham_CV.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-4 py-2.5 rounded-md text-xs font-semibold text-[#005C5C] border border-[#005C5C] hover:bg-[#005C5C]/5 flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#078F91]" />
                <span>Download CV (PDF)</span>
              </a>
              <a
                href="#freelance"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-4 py-2.5 rounded-md text-xs font-semibold bg-[#005C5C] text-white hover:bg-[#078F91] shadow-sm"
              >
                Request Freelance Work
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
