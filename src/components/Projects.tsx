import React, { useState } from 'react';
import {
  ExternalLink,
  Layers,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  GitBranch,
  Cpu
} from 'lucide-react';
import { GitHubIcon } from './Icons';
import { projectsData } from '../data/projects';
import { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'AI & LLMs',
    'Automation & MCP',
    'Developer Tools',
    'Full-Stack & Systems'
  ];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono-code font-semibold tracking-wider uppercase">
              <span>// 04. FEATURED SYSTEMS &amp; BUILDS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Projects
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Real-world systems engineered production ready products
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono-code font-medium transition-all ${activeCategory === cat
                  ? 'bg-cyan-500 text-dark-950 font-semibold shadow-md shadow-cyan-500/20'
                  : 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className={`glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${project.featured ? 'border-cyan-500/30' : ''
                }`}
            >
              <div className="space-y-5">

                {/* Header: Category + Metrics Badge */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-mono-code text-cyan-400 font-semibold px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20">
                    {project.category}
                  </span>
                  {project.metrics && (
                    <span className="text-[11px] font-mono-code text-emerald-400 font-medium px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      <span>{project.metrics}</span>
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-display font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono-code text-indigo-300/90 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Architecture Pipeline Visual (Inspired by ganeshbodakhe.netlify.app) */}
                {project.architecture && (
                  <div className="p-3.5 rounded-xl bg-dark-950/80 border border-white/10 space-y-1.5 overflow-x-auto">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono-code text-slate-500 uppercase">
                      <GitBranch className="w-3 h-3 text-cyan-400" />
                      <span>System Architecture Flow</span>
                    </div>
                    <div className="text-[11px] font-mono-code text-slate-300 whitespace-nowrap">
                      {project.architecture}
                    </div>
                  </div>
                )}

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Technical Highlights */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono-code text-slate-500 uppercase tracking-wider block">
                    Key Highlights:
                  </span>
                  <ul className="space-y-2">
                    {project.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Technologies & Links Footer */}
              <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-white/[0.04] border border-white/5 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10"
                      aria-label="View on GitHub"
                      title="View Code Repository"
                    >
                      <GitHubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-colors"
                    >
                      <span>Live Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
