import React from 'react';
import { 
  ArrowRight, 
  Mail, 
  Sparkles, 
  CheckCircle2, 
  Workflow, 
  Cpu, 
  Copy, 
  Check 
} from 'lucide-react';
import { LinkedInIcon } from './Icons';
import { personalInfo } from '../data/personal';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.emails.primary);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/10 to-violet-600/15 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-cyan-500/10 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-500/10 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Live Availability Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-medium backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.availability.text}</span>
            </div>

            {/* Headline & Name */}
            <div className="space-y-3">
              <p className="font-mono-code text-sm text-cyan-400 font-medium tracking-wide">
                HELLO, WORLD! I AM
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
                {personalInfo.name}
              </h1>
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-violet-400 leading-snug">
                {personalInfo.headline}
              </h2>
            </div>

            {/* Bio Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Software Engineer at <span className="text-white font-medium">Tavant</span>, previously at <span className="text-white font-medium">Wipro</span>. 
              I design and engineer intelligent digital systems — bridging high-performance web platforms, 
              scalable backends, and autonomous AI automation pipelines with <span className="text-cyan-300">LLMs</span>, <span className="text-cyan-300">MCP</span>, and <span className="text-cyan-300">n8n</span>.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-dark-950 font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all hover:scale-105"
              >
                <span>Explore Featured Systems</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 border border-white/10 font-medium text-sm transition-all hover:border-cyan-500/40"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Freelancing & Services</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 border border-white/10 text-xs font-mono-code transition-all"
                title="Click to copy primary email"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{personalInfo.emails.primary}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links & Highlights */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={`mailto:${personalInfo.emails.primary}`}
                  className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4 text-indigo-400" />
                  <span>Direct Email</span>
                </a>
              </div>

              <div className="h-4 w-px bg-white/10 hidden sm:block" />

              <div className="flex items-center gap-2">
                <span className="text-slate-400">📍 Based in:</span>
                <span className="text-slate-200 font-medium">{personalInfo.location}</span>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Interactive Engineering Terminal Card (Inspired by ganeshbodakhe.netlify.app) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden glass-card border border-white/10 shadow-2xl shadow-cyan-950/30">
              
              {/* Terminal Window Bar */}
              <div className="bg-dark-900/90 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono-code text-slate-400 ml-2">rgk-system.ai ~ active</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono-code text-cyan-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>online</span>
                </div>
              </div>

              {/* Terminal Content Body */}
              <div className="p-5 font-mono-code text-xs space-y-4 bg-dark-950/90">
                <div>
                  <span className="text-slate-500">// Core Stack Runtime</span>
                  <p className="text-emerald-400 mt-0.5">$ node --version &amp;&amp; python --version</p>
                  <p className="text-slate-300">v24.2.0 · Python 3.12 (NumPy, PyTorch, LangChain)</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <div className="flex items-center justify-between text-slate-400 pb-1 border-b border-white/5">
                    <span className="flex items-center gap-1.5 text-cyan-300">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Active Architectures</span>
                    </span>
                    <span className="text-emerald-400 text-[10px]">100% HEALTH</span>
                  </div>

                  <div className="space-y-1.5 pt-1 text-[11px]">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">1. Anthropic MCP Servers</span>
                      <span className="text-cyan-400">Zero-leak JSON-RPC</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">2. RAG Evaluation Harness</span>
                      <span className="text-indigo-400">4-Stage Pipeline</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">3. Autonomous n8n Workflows</span>
                      <span className="text-violet-400">Webhook Driven</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">4. High-Performance Frontends</span>
                      <span className="text-emerald-400">React + Next.js</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <span className="text-slate-500">// Engineering Credentials</span>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 flex items-center gap-1.5 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">Claude 101 &amp; MCP</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 flex items-center gap-1.5 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span className="truncate">Microsoft AI Engineer</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 flex items-center gap-1.5 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                      <span className="truncate">GitHub Copilot GH-300</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 flex items-center gap-1.5 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">Oracle Persistence API</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Workflow className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Bengaluru, India</span>
                  </span>
                  <span className="text-cyan-400">Ready to Deploy ↗</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
