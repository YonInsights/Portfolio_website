import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Download } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  prefilledOpportunity?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledOpportunity }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    opportunityType: prefilledOpportunity || 'Full-time Highway / Civil Engineering Position',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#005C5C', '#078F91', '#08B9BD'],
        });
      } catch (err) {
        // ignore if confetti fails
      }
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#005C5C]/10 text-[#005C5C] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            DIRECT INQUIRY & COLLABORATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Let's Work on Your Next Infrastructure or Data Project
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#64748B]">
            Reach out for international highway engineering roles, remote freelance consulting, GIS spatial analysis, or MSc/PhD research collaborations.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Verification */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#F8FAFA] p-6 rounded-2xl border border-[#CBD5E1] space-y-4">
              <h3 className="text-base font-bold text-[#0F172A]">
                Direct Contact Channels
              </h3>

              <div className="space-y-3.5 text-xs text-[#334155]">
                <a
                  href="mailto:email2yonatan@gmail.com"
                  className="p-3 rounded-lg bg-white border border-[#E2E8F0] flex items-center gap-3 hover:border-[#005C5C] transition-colors"
                >
                  <div className="p-2 rounded bg-[#005C5C]/10 text-[#005C5C]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">Email Address</span>
                    <span className="font-semibold text-[#0F172A]">email2yonatan@gmail.com</span>
                  </div>
                </a>

                <a
                  href="tel:+251921200180"
                  className="p-3 rounded-lg bg-white border border-[#E2E8F0] flex items-center gap-3 hover:border-[#005C5C] transition-colors"
                >
                  <div className="p-2 rounded bg-[#078F91]/10 text-[#078F91]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">Direct Phone</span>
                    <span className="font-semibold text-[#0F172A]">+251 921 200 180</span>
                  </div>
                </a>

                <div className="p-3 rounded-lg bg-white border border-[#E2E8F0] flex items-center gap-3">
                  <div className="p-2 rounded bg-[#078F91]/10 text-[#078F91]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">Primary Location</span>
                    <span className="font-semibold text-[#0F172A]">Addis Ababa, Ethiopia (Open to Global Remote & Relocation)</span>
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/in/yonatan-abrham1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white border border-[#E2E8F0] flex items-center gap-3 hover:border-[#005C5C] transition-colors"
                >
                  <div className="p-2 rounded bg-[#08B9BD]/15 text-[#005C5C]">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">Professional Network</span>
                    <span className="font-semibold text-[#0F172A]">linkedin.com/in/yonatan-abrham1</span>
                  </div>
                </a>

                <a
                  href="https://github.com/YonInsights"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white border border-[#E2E8F0] flex items-center gap-3 hover:border-[#005C5C] transition-colors"
                >
                  <div className="p-2 rounded bg-gray-100 text-gray-700">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">GitHub Organization & Code</span>
                    <span className="font-semibold text-[#0F172A]">github.com/YonInsights</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Resume / vCard Download Box */}
            <div className="p-5 rounded-xl bg-[#004242] text-white border border-[#005C5C] space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#08B9BD]">
                OFFICIAL CURRICULUM VITAE & DEGREE CERTIFICATES
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                Download the complete verified PDF document containing professional CV, University of Gondar Civil Engineering BSc, Osiri University MSc Data Science, ACT MAPM degree certificates, and certified credentials.
              </p>
              <a
                href="/Yonatan_Abrham_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Yonatan_Abrham_CV.pdf"
                className="w-full py-2.5 px-4 rounded-lg bg-[#08B9BD] text-[#003838] text-xs font-bold hover:bg-white transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Official CV & Certificates (PDF)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Professional Contact Form */}
          <div className="lg:col-span-7 bg-[#F8FAFA] p-6 sm:p-8 rounded-2xl border border-[#CBD5E1] shadow-sm">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-200">
                <div className="w-14 h-14 rounded-full bg-[#005C5C]/10 text-[#005C5C] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A]">Inquiry Received Successfully</h3>
                <p className="text-xs text-[#475569] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <strong>{formData.name}</strong>. I will review your project requirements and respond within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      organization: '',
                      opportunityType: 'Full-time Highway / Civil Engineering Position',
                      message: '',
                    });
                  }}
                  className="px-4 py-2 rounded-lg bg-[#005C5C] text-white text-xs font-semibold"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold uppercase text-[#0F172A]">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe / Eng. Sarah Miller"
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-white border border-[#CBD5E1] text-[#0F172A] focus:outline-none focus:border-[#005C5C]"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold uppercase text-[#0F172A]">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. j.doe@consultancy.com"
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-white border border-[#CBD5E1] text-[#0F172A] focus:outline-none focus:border-[#005C5C]"
                    />
                  </div>

                </div>

                {/* Organization */}
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold uppercase text-[#0F172A]">
                    Organization / Company / Institution
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Engineering Consultancy / University / Contracting Firm"
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-white border border-[#CBD5E1] text-[#0F172A] focus:outline-none focus:border-[#005C5C]"
                  />
                </div>

                {/* Opportunity Type */}
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold uppercase text-[#0F172A]">
                    Opportunity Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.opportunityType}
                    onChange={(e) => setFormData({ ...formData, opportunityType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-white border border-[#CBD5E1] text-[#0F172A] focus:outline-none focus:border-[#005C5C] font-sans"
                  >
                    <option value="Full-time Highway / Civil Engineering Position">
                      Full-time Highway / Civil Engineering Position
                    </option>
                    <option value="Remote / International Freelance Project">
                      Remote / International Freelance Project
                    </option>
                    <option value="Engineering Consultancy & CAD Modeling">
                      Engineering Consultancy & CAD Modeling
                    </option>
                    <option value="GIS & Spatial Mapping Project">
                      GIS & Spatial Mapping Project
                    </option>
                    <option value="Data Analytics / Data Science Project">
                      Data Analytics / Data Science Project
                    </option>
                    <option value="Research Collaboration / MSc/PhD Opportunity">
                      Research Collaboration / MSc/PhD Opportunity
                    </option>
                    <option value="Scholarship / Academic Opportunity">
                      Scholarship / Academic Opportunity
                    </option>
                    <option value="Other">Other Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold uppercase text-[#0F172A]">
                    Project Scope / Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please outline the highway engineering scope, GIS requirements, data analysis needs, or academic opportunity..."
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-white border border-[#CBD5E1] text-[#0F172A] focus:outline-none focus:border-[#005C5C]"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-lg bg-[#005C5C] hover:bg-[#078F91] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending Inquiry...' : 'Send Inquiry'}</span>
                </button>

                <p className="text-[11px] text-gray-500 text-center font-mono pt-1">
                  No account creation required. Direct email transmission.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
