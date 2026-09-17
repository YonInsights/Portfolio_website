import React, { useState } from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { testimonialsData } from '../../data/testimonialsData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="testimonials" className="py-20 bg-[#FAF9F6] border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="absolute inset-0 bg-cad-grid opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#005C5C]/10 text-[#005C5C] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#078F91]" />
            <span>ENDORSEMENTS & FEEDBACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            People Talk About Us
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#64748B]">
            Verified feedback from consulting directors, client representatives, and technology collaborators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between border ${
                  isActive 
                    ? 'bg-white shadow-xl border-[#005C5C] ring-2 ring-[#005C5C]/20 -translate-y-1' 
                    : 'bg-white/80 hover:bg-white shadow-sm border-[#CBD5E1] hover:border-[#078F91] hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-[#005C5C]/20" />
                  </div>

                  <p className="text-xs text-[#334155] leading-relaxed italic mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#005C5C] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                    {item.avatarText}
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-xs font-bold text-[#0F172A] truncate">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-[#078F91] font-medium truncate">
                      {item.organization}
                    </p>
                    <p className="text-[10px] text-gray-500 font-mono truncate">
                      {item.project}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === i ? 'w-8 bg-[#005C5C]' : 'w-2.5 bg-[#CBD5E1] hover:bg-[#078F91]'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
