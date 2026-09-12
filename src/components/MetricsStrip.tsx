import React from 'react';
import { Users, Award, Briefcase, Terminal } from 'lucide-react';
import { metricsData } from '../data/metrics';

export const MetricsStrip: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-5 h-5 text-cyan-400" />;
      case 'Award':
        return <Award className="w-5 h-5 text-indigo-400" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-violet-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      default:
        return <Award className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section className="py-8 relative z-20 -mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-dark-900/80 border border-white/10 backdrop-blur-xl shadow-xl shadow-black/40">
          {metricsData.map((metric, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.03] transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0">
                {getIcon(metric.iconName)}
              </div>
              <div className="space-y-0.5">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                    {metric.value}
                  </span>
                  {metric.suffix && (
                    <span className="text-xs font-mono-code text-cyan-400 font-semibold uppercase">
                      {metric.suffix}
                    </span>
                  )}
                </div>
                <p className="text-xs font-medium text-slate-300 truncate">
                  {metric.label}
                </p>
                <p className="text-[11px] text-slate-400 truncate">
                  {metric.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
