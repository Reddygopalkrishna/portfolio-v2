import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/personal';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-display font-bold text-dark-950 text-lg shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Terminal className="w-5 h-5 text-dark-950" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-slate-100 text-base tracking-tight group-hover:text-cyan-400 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono-code text-cyan-400/80 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                <span>{personalInfo.currentRole} @ {personalInfo.company}</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/[0.05] rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#services"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 border border-white/10 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Hire Me</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-dark-950 shadow-md shadow-cyan-500/25 transition-all hover:scale-105"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-dark-950/95 border-b border-white/10 backdrop-blur-xl px-6 py-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-xs font-medium rounded-lg bg-white/10 text-slate-200"
            >
              Freelance & Services
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-dark-950"
            >
              Contact Reddy Gopal Krishna
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
