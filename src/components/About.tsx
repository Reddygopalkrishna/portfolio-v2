import React from 'react';
import { 
  Sparkles, 
  Code2, 
  Bot, 
  Workflow, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink 
} from 'lucide-react';
import { personalInfo } from '../data/personal';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Bot className="w-6 h-6 text-cyan-400" />,
      title: "AI & LLM Engineering",
      description: "Architecting custom Model Context Protocol (MCP) servers, transparent RAG pipelines, and multi-agent coordination systems that integrate LLMs safely into production."
    },
    {
      icon: <Workflow className="w-6 h-6 text-indigo-400" />,
      title: "AI Workflow Automation",
      description: "Eliminating manual business overhead by engineering autonomous pipelines with n8n, Zapier, and custom webhooks connecting databases, CRMs, and messaging APIs."
    },
    {
      icon: <Layers className="w-6 h-6 text-violet-400" />,
      title: "Scalable Full-Stack Web",
      description: "Developing responsive, accessible single-page applications and SSR platforms using React, Next.js, TypeScript, and modern component architectures with sub-second page loads."
    },
    {
      icon: <Code2 className="w-6 h-6 text-emerald-400" />,
      title: "Resilient Microservices",
      description: "Designing secure, high-throughput REST and WebSocket backends with Node.js, Express, Python, and PostgreSQL, focusing on clean modularity and strict unit test coverage."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-3 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono-code font-semibold tracking-wider uppercase">
            <span>// 01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Engineering intuitive, high-velocity digital products.
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            From enterprise platforms to agile MVPs, I build software that blends speed, architectural clarity, and AI-driven automation.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-4">
              <h3 className="text-lg font-display font-semibold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Background & Philosophy</span>
              </h3>
              
              {personalInfo.summary.narrative.map((paragraph, idx) => (
                <p key={idx} className="text-slate-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-2 border-t border-white/5 flex flex-wrap items-center gap-4 text-xs font-mono-code text-cyan-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Clean, typed codebases
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Measurable business impact
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Continuous R&amp;D
                </span>
              </div>
            </div>

            {/* Quote / Mission Banner */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/30 to-transparent border-l-4 border-cyan-400 border-y border-r border-white/5">
              <p className="text-xs sm:text-sm text-slate-200 italic font-mono-code">
                "{personalInfo.summary.mission}"
              </p>
            </div>

            {/* Quick Links to Connect */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-cyan-400 border border-white/10 transition-colors"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/20 transition-colors"
              >
                <span>View Freelance Offerings</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Pillars Column */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                  {pillar.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-display font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
