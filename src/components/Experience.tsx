import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { experienceData } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono-code font-semibold tracking-wider uppercase">
            <span>// 03. EXPERIENCE &amp; CAREER TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Engineering track record &amp; industry experience.
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Hands-on software development across enterprise systems, AI research, distributed applications, and operational workflows.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="mt-16 relative">
          
          {/* Vertical Glowing Line */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-transparent opacity-30" />

          {/* Experience Cards */}
          <div className="space-y-10">
            {experienceData.map((exp, idx) => (
              <div
                key={exp.id}
                className="relative flex flex-col md:flex-row md:items-start gap-6 group"
              >
                {/* Timeline Dot on Desktop */}
                <div className="hidden md:flex w-16 h-16 rounded-2xl bg-dark-900 border border-white/10 items-center justify-center shrink-0 z-10 shadow-lg group-hover:border-cyan-500/50 group-hover:scale-110 transition-all">
                  <Briefcase className={`w-6 h-6 ${exp.current ? 'text-cyan-400' : 'text-slate-400'}`} />
                </div>

                {/* Experience Detail Card */}
                <div className="flex-1 glass-card p-6 sm:p-8 rounded-2xl space-y-5">
                  
                  {/* Card Header: Role, Company, Period, Location */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-xl font-display font-bold text-white tracking-tight">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono-code font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            CURRENT ROLE
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-3 text-sm text-cyan-300 font-medium">
                        <span>{exp.company}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400 text-xs font-mono-code">{exp.type}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1 text-xs font-mono-code text-slate-400">
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.location} ({exp.locationType})</span>
                      </div>
                    </div>
                  </div>

                  {/* Description if present */}
                  {exp.description && (
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      {exp.description}
                    </p>
                  )}

                  {/* Key Accomplishments Bullets */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono-code text-slate-500 uppercase tracking-wider block">
                      Core Contributions &amp; Impact:
                    </span>
                    <ul className="space-y-2">
                      {exp.accomplishments.map((item, accIdx) => (
                        <li key={accIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Applied Tag Pills */}
                  <div className="pt-3 border-t border-white/5 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono-code text-slate-500 mr-1">Skills:</span>
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-mono-code px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
