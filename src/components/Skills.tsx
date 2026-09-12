import React, { useState } from 'react';
import { 
  BrainCircuit, 
  Workflow, 
  Layout, 
  Server, 
  Code2, 
  Database, 
  Cloud, 
  ShieldCheck, 
  Check 
} from 'lucide-react';
import { skillsData } from '../data/skills';
import { SkillCategory } from '../types';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-cyan-400" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-indigo-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-violet-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-amber-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-cyan-300" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-blue-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-rose-400" />;
      default:
        return <Code2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredCategories = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono-code font-semibold tracking-wider uppercase">
            <span>// 05. CORE SKILLS &amp; TECHNOLOGIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Multi-disciplinary technical proficiencies.
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Curated stack across LLM architectures, workflow automation, modern reactive user interfaces, and robust backend engineering.
          </p>
        </div>

        {/* Category Quick Filter */}
        <div className="mt-10 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono-code font-medium transition-all ${
              selectedCategory === 'All'
                ? 'bg-emerald-500 text-dark-950 font-semibold shadow-md shadow-emerald-500/20'
                : 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
            }`}
          >
            All Disciplines ({skillsData.length})
          </button>
          {skillsData.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setSelectedCategory(cat.category)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono-code font-medium transition-all ${
                selectedCategory === cat.category
                  ? 'bg-emerald-500 text-dark-950 font-semibold shadow-md shadow-emerald-500/20'
                  : 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills Categories Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((cat: SkillCategory, idx: number) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Category Icon & Title */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="text-sm font-display font-bold text-white leading-snug">
                      {cat.category}
                    </h3>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills Pills */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`inline-flex items-center gap-1.5 text-xs font-mono-code px-2.5 py-1 rounded-lg border transition-all ${
                        skill.featured
                          ? 'bg-white/[0.06] border-cyan-500/30 text-slate-100 hover:border-cyan-400'
                          : 'bg-white/[0.02] border-white/[0.06] text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <span>{skill.name}</span>
                      {skill.tag && (
                        <span className="text-[9px] uppercase px-1 py-0.2 rounded bg-cyan-500/20 text-cyan-300 font-bold">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono-code text-slate-500">
                <span>{cat.skills.length} TECHNOLOGIES</span>
                <span className="text-emerald-400 font-semibold">VERIFIED</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
