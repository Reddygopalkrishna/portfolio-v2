import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  ArrowUpRight 
} from 'lucide-react';
import { LinkedInIcon } from './Icons';
import { personalInfo } from '../data/personal';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: 'AI Automation & n8n Workflows',
    message: ''
  });

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate mailto link
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.serviceType} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.serviceType}\n\nProject Overview:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.emails.primary}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-dark-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono-code font-semibold tracking-wider uppercase">
            <span>// 08. CONTACT &amp; COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Let's build something extraordinary together.
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Whether you have an upcoming MVP, want to automate manual operations with AI, or need full-stack consulting, let's connect.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Availability Callout Card */}
            <div className="glass-card p-6 rounded-2xl space-y-4 border-cyan-500/30">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono-code text-emerald-400 font-semibold uppercase tracking-wider">
                  Open for Opportunities
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Accepting freelance contracts, startup MVP architecture, and AI automation consulting engagements. 
                Remote globally or in-person in Bengaluru.
              </p>
            </div>

            {/* Direct Email Cards with One-Click Copy */}
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-code text-slate-400 uppercase">Primary Email</span>
                    <a
                      href={`mailto:${personalInfo.emails.primary}`}
                      className="text-xs sm:text-sm font-mono-code text-white block hover:text-cyan-400 transition-colors"
                    >
                      {personalInfo.emails.primary}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.emails.primary)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  title="Copy email address"
                >
                  {copiedEmail === personalInfo.emails.primary ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-cyan-400" />
                  )}
                </button>
              </div>

              {personalInfo.emails.secondary && (
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono-code text-slate-400 uppercase">Secondary Email</span>
                      <a
                        href={`mailto:${personalInfo.emails.secondary}`}
                        className="text-xs sm:text-sm font-mono-code text-white block hover:text-cyan-400 transition-colors"
                      >
                        {personalInfo.emails.secondary}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(personalInfo.emails.secondary!)}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                    title="Copy secondary email"
                  >
                    {copiedEmail === personalInfo.emails.secondary ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-cyan-400" />
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* LinkedIn & Location Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 transition-colors group flex flex-col justify-between space-y-2"
              >
                <div className="flex items-center justify-between">
                  <LinkedInIcon className="w-5 h-5 text-cyan-400" />
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-white block">LinkedIn Profile</span>
                  <span className="text-[11px] font-mono-code text-slate-400">8,000+ Followers</span>
                </div>
              </a>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between space-y-2">
                <MapPin className="w-5 h-5 text-indigo-400" />
                <div>
                  <span className="text-xs font-semibold text-white block">{personalInfo.location}</span>
                  <span className="text-[11px] font-mono-code text-slate-400">India (UTC+05:30)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10">
              
              <div className="space-y-1 mb-6">
                <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                  <span>Send a Direct Project Inquiry</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Fill out the details below and it will compose a pre-formatted email to Reddy Gopal Krishna.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-display font-semibold text-white">
                    Email Client Triggered!
                  </h4>
                  <p className="text-xs text-slate-300">
                    If your email client didn't open automatically, you can write directly to{' '}
                    <span className="text-cyan-400 font-mono-code">{personalInfo.emails.primary}</span>.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-cyan-400 underline mt-2 inline-block"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-mono-code text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Elon Musk / Founder"
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-950/70 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-mono-code text-slate-300">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-950/70 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-mono-code text-slate-300">Service / Inquiry Type</label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950/70 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="AI Automation & n8n Workflows">AI Automation &amp; n8n Workflows</option>
                      <option value="Model Context Protocol (MCP) & AI Agents">Model Context Protocol (MCP) &amp; AI Agents</option>
                      <option value="Custom Web App / Portfolio Development">Custom Web App / Portfolio Development</option>
                      <option value="Startup MVP & SaaS Engineering">Startup MVP &amp; SaaS Engineering</option>
                      <option value="Backend Microservices & Cloud APIs">Backend Microservices &amp; Cloud APIs</option>
                      <option value="Full-Time Engineering Opportunities">Full-Time Engineering Opportunities</option>
                      <option value="General Technical Consultation">General Technical Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-mono-code text-slate-300">Project Overview &amp; Timeline *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your goals, current stack, scope, and expected deliverables..."
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950/70 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 hover:from-cyan-400 hover:to-indigo-500 text-dark-950 font-bold text-xs tracking-wide uppercase shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Send Message to Reddy Gopal Krishna</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
