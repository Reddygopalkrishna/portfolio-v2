import React from 'react';
import { ArrowUp, Terminal, Mail } from 'lucide-react';
import { LinkedInIcon } from './Icons';
import { personalInfo } from '../data/personal';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 bg-dark-950 text-slate-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center font-display font-bold text-dark-950 text-sm">
              <Terminal className="w-4 h-4 text-dark-950" />
            </div>
            <div className="text-left">
              <span className="font-display font-bold text-white text-sm block">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono-code text-cyan-400">
                {personalInfo.currentRole} @ {personalInfo.company}
              </span>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono-code">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.emails.primary}`}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 transition-all hover:-translate-y-0.5"
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-slate-400">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-slate-400">
            <span>Built with</span>
            <span className="text-cyan-400 font-semibold">React 19</span>
            <span>+</span>
            <span className="text-indigo-400 font-semibold">Vite</span>
            <span>+</span>
            <span className="text-violet-400 font-semibold">Tailwind</span>
            <span className="text-slate-500 ml-2">(Deployable to Vercel)</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
