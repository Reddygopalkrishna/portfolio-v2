import React, { useState } from 'react';
import { Award, CheckCircle, ExternalLink, Copy, Check, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/certifications';
import { CertificationItem } from '../types';

export const Certifications: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getIssuerBadgeColor = (issuer: string) => {
    if (issuer.includes('Anthropic')) return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
    if (issuer.includes('Microsoft')) return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
    if (issuer.includes('Oracle')) return 'text-red-400 bg-red-500/10 border-red-500/20';
    if (issuer.includes('HackerRank')) return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
    return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20';
  };

  return (
    <section id="certifications" className="py-24 relative bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono-code font-semibold tracking-wider uppercase">
            <span>// 06. LICENSES &amp; CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Verified technical credentials.
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            10 professional certifications across Anthropic Claude architectures, Microsoft AI engineering, Oracle enterprise persistence, and full-stack development.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert: CertificationItem) => (
            <div
              key={cert.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-amber-500/30 transition-all"
            >
              <div className="space-y-3">
                {/* Header: Issuer badge + Date */}
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-xs font-mono-code font-semibold px-2.5 py-1 rounded-md border ${getIssuerBadgeColor(cert.issuer)}`}>
                    {cert.issuer}
                  </span>
                  <span className="text-[11px] font-mono-code text-slate-400">
                    {cert.issueDate}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-display font-bold text-white leading-snug">
                  {cert.title}
                </h3>

                {/* Skills tags */}
                {cert.skills && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-white/[0.04] text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Credential ID & Actions */}
              <div className="pt-4 border-t border-white/5 space-y-2">
                {cert.credentialId ? (
                  <div className="flex items-center justify-between text-xs font-mono-code bg-white/[0.02] p-2 rounded-lg border border-white/5">
                    <span className="text-slate-400 truncate mr-2">
                      ID: <span className="text-slate-200">{cert.credentialId}</span>
                    </span>
                    <button
                      onClick={() => handleCopy(cert.id, cert.credentialId!)}
                      className="p-1 hover:text-white text-slate-400 transition-colors shrink-0"
                      title="Copy Credential ID"
                    >
                      {copiedId === cert.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-cyan-400" />
                      )}
                    </button>
                  </div>
                ) : (
                  <div className="text-[11px] font-mono-code text-slate-500">
                    Verified Competency Assessment
                  </div>
                )}

                <div className="flex items-center justify-between pt-1 text-xs">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono-code text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 font-mono-code transition-colors"
                    >
                      <span>LinkedIn Certs</span>
                      <ExternalLink className="w-3 h-3" />
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
