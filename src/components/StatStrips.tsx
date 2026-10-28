import React from 'react';
import { Calendar, Flag, Users, Shield, TrendingUp, Trophy, Zap, BarChart3 } from 'lucide-react';

export const StatStrips: React.FC = () => {
  const primaryStats = [
    {
      value: '75+',
      label: 'Seasons Analyzed',
      sublabel: 'Comprehensive F1 Era Scope (1950–Present)',
      icon: Calendar,
      accent: 'text-[#E10600]',
    },
    {
      value: '1K+',
      label: 'Races Covered',
      sublabel: '6,464 Verified Outcome Logs Synthesized',
      icon: Flag,
      accent: 'text-amber-400',
    },
    {
      value: '20',
      label: 'Active Drivers',
      sublabel: 'Full Grid Telemetry & Reliability Profiles',
      icon: Users,
      accent: 'text-emerald-400',
    },
    {
      value: '10',
      label: 'Constructors',
      sublabel: 'Red Bull, Mercedes, Ferrari & Grid Tracked',
      icon: Shield,
      accent: 'text-cyan-400',
    },
  ];

  const operationalStats = [
    {
      value: '897+',
      unit: 'Entries',
      label: 'Total Race Entries',
      detail: 'Monitored across 29 host circuit environments',
      icon: TrendingUp,
    },
    {
      value: '33',
      unit: 'Titles',
      label: 'Championship Titles',
      detail: 'Historic drivers and constructors crowns',
      icon: Trophy,
    },
    {
      value: '372',
      unit: 'km/h',
      label: 'Top Speed',
      detail: 'Peak velocity telemetry logged at Monza',
      icon: Zap,
    },
    {
      value: '15+',
      unit: 'Metrics',
      label: 'KPIs Visualized',
      detail: 'DNF rate, tyre degradation, stint deltas',
      icon: BarChart3,
    },
  ];

  return (
    <div className="bg-[#0B0E14] py-8 border-b border-[#262C38] space-y-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Primary Stat Strip: 4-Card Grid */}
        <div>
          <div className="text-xs uppercase font-mono tracking-widest text-[#94A3B8] mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E10600]"></span>
            <span>Primary Strategic Scope</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {primaryStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="bg-[#151921] border border-[#262C38] rounded-xl p-5 f1-card-hover relative overflow-hidden group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-3xl sm:text-4xl font-black text-white font-['Titillium_Web'] tracking-tight group-hover:text-[#FF1801] transition-colors">
                        {stat.value}
                      </div>
                      <div className="text-sm font-bold text-white uppercase tracking-wider mt-1 font-['Titillium_Web']">
                        {stat.label}
                      </div>
                    </div>
                    <div className={`p-2.5 rounded-lg bg-[#0B0E14] border border-[#262C38] ${stat.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="text-xs text-[#94A3B8] mt-3 pt-3 border-t border-[#262C38]/60 font-sans">
                    {stat.sublabel}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Operational Stat Strip: 4-Card Dark Accent Grid */}
        <div>
          <div className="text-xs uppercase font-mono tracking-widest text-[#94A3B8] mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>Operational Telemetry Strip</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {operationalStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="bg-[#10141B] border border-[#262C38]/90 rounded-xl p-5 hover:border-cyan-500/50 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                        {stat.value}
                      </span>
                      <span className="text-xs font-mono text-cyan-400 uppercase font-semibold">
                        {stat.unit}
                      </span>
                    </div>
                    <Icon className="w-4 h-4 text-[#94A3B8] group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <div className="text-xs font-bold text-slate-200 uppercase tracking-wider mt-2">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-[#94A3B8] mt-1 font-sans">
                    {stat.detail}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
