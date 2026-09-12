import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono-code font-semibold tracking-wider uppercase">
            <span>// 07. EDUCATION &amp; CONTINUOUS LEARNING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Academic foundations &amp; specialized study.
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Rigorous core computer science education complemented by continuous professional research in AI and distributed systems.
          </p>
        </div>

        {/* Education Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                    {idx === 0 ? (
                      <GraduationCap className="w-6 h-6 text-cyan-400" />
                    ) : (
                      <BookOpen className="w-6 h-6 text-indigo-400" />
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono-code text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-cyan-300 font-medium mt-0.5">
                    {edu.field}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.institution} • {edu.location}</span>
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/5">
                  <ul className="space-y-2">
                    {edu.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono-code text-slate-500">
                <span>DEGREE TRACK</span>
                <span className="text-emerald-400">COMPLETED &amp; CERTIFIED</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
