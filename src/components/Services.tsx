import React, { useState } from 'react';
import {
  Cpu,
  Bot,
  Globe,
  Rocket,
  Server,
  Sparkles,
  Check,
  ArrowRight,
  Mail,
  X,
  ExternalLink
} from 'lucide-react';
import { servicesData } from '../data/services';
import { personalInfo } from '../data/personal';
import { ServiceItem } from '../types';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-indigo-400" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-emerald-400" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-amber-400" />;
      case 'Server':
        return <Server className="w-6 h-6 text-violet-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-cyan-300" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono-code font-semibold tracking-wider uppercase">
              <span>// 02. SERVICES &amp; FREELANCE OFFERINGS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Services &amp; Freelance Offerings
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Available for freelance engagements, custom MVPs, AI agent workflows, and architecture consulting.
              Delivering clean, robust solutions tailored to your operational goals.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personalInfo.emails.primary}?subject=Freelance%20Project%20Inquiry`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-dark-950 font-semibold text-xs transition-all shadow-md shadow-cyan-500/20"
            >
              <Mail className="w-4 h-4" />
              <span>Reach out to email for services!</span>
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${service.featured ? 'border-cyan-500/30 shadow-lg shadow-cyan-500/5' : ''
                }`}
            >
              {service.featured && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-l from-cyan-500/20 to-transparent text-cyan-300 text-[10px] font-mono-code font-bold px-3 py-1 rounded-bl-xl border-b border-l border-cyan-500/30">
                    FEATURED SERVICE
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-mono-code px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-slate-300">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-lg font-display font-semibold text-white tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="pt-2 space-y-2 border-t border-white/5">
                  <span className="text-[11px] font-mono-code text-slate-500 uppercase tracking-wider block">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies & Inquire Trigger */}
              <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {service.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-white/[0.04] text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.technologies.length > 3 && (
                    <span className="text-[10px] font-mono-code text-slate-500 self-center">
                      +{service.technologies.length - 3}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors shrink-0"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Inquire Modal / Drawer */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-dark-900 border border-white/15 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5 relative">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <span className="text-xs font-mono-code text-cyan-400 uppercase tracking-wider">
                  Service Inquiry
                </span>
                <h3 className="text-xl font-display font-bold text-white">
                  {selectedService.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedService.description}
              </p>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <span className="text-xs font-mono-code text-slate-400">Included Scope:</span>
                <ul className="space-y-2 text-xs text-slate-200">
                  {selectedService.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-1.5">
                <span className="text-xs font-mono-code text-slate-400">Tech Stack:</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedService.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono-code px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <a
                  href={`mailto:${personalInfo.emails.primary}?subject=Inquiry:%20${encodeURIComponent(
                    selectedService.title
                  )}&body=Hi%20Reddy%20Gopal%20Krishna,%0A%0AI'm%20interested%20in%20collaborating%20on%20${encodeURIComponent(
                    selectedService.title
                  )}.%20Here%20are%20some%20details%20about%20my%20project:%0A%0A`}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-dark-950 shadow-md shadow-cyan-500/25 hover:scale-105 transition-all"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Inquiry Email</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
