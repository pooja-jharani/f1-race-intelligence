import React, { useState } from 'react';
import { 
  Zap, 
  Map, 
  Timer, 
  Disc, 
  Users2, 
  LineChart, 
  CloudRain, 
  ArrowUpRight, 
  X,
  Gauge,
  CheckCircle,
  Clock
} from 'lucide-react';
import { INTELLIGENCE_DIMENSIONS, DRIVER_LEADERBOARD, TYRE_COMPOUNDS, CIRCUIT_LOGS } from '../data/f1Data';

export const IntelligenceDimensions: React.FC = () => {
  const [activeModalId, setActiveModalId] = useState<string | null>(null);

  const tickerItems = [
    '⚡ Monaco GP: Fastest Lap 1:12.492',
    '⚡ Ferrari leads avg pit stop speed in 2024 (2.12s)',
    '⚡ Red Bull Racing leads Constructor Championship (+8,006 pts)',
    '⚡ Lewis Hamilton: 31,147 Career Points Logged',
    '⚡ Soft Compound Usage: 31.52% Stint Share',
    '⚡ Max Verstappen: 31,126 Career Points Logged',
    '⚡ Bahrain International Circuit: 2,168 Entry Logs',
    '⚡ Top Speed Benchmark: 372 km/h at Monza Autodromo',
    '⚡ Medium Compound: 30.78% Stint Share (C2-C3 Optimal)',
    '⚡ 17 Seasons Synthesized: 6,464 Race Logs Complete',
  ];

  const getDimensionIcon = (id: string) => {
    switch (id) {
      case 'circuits':
        return Map;
      case 'laps':
        return Timer;
      case 'tyres':
        return Disc;
      case 'h2h':
        return Users2;
      case 'points':
        return LineChart;
      case 'weather':
        return CloudRain;
      default:
        return Zap;
    }
  };

  const activeDimension = INTELLIGENCE_DIMENSIONS.find((d) => d.id === activeModalId);

  return (
    <section id="insights" className="bg-[#0B0E14] border-b border-[#262C38] relative">
      
      {/* Infinite Horizontally Scrolling Telemetry Ticker with Top/Bottom Red Borders */}
      <div className="bg-[#0B0E14] border-y border-[#E10600] py-3.5 overflow-hidden select-none">
        <div className="animate-ticker flex items-center whitespace-nowrap">
          {/* First set of ticker items */}
          <div className="flex items-center gap-12 pr-12">
            {tickerItems.map((item, idx) => (
              <span
                key={`a-${idx}`}
                className="text-xs sm:text-sm font-mono font-bold tracking-wider text-slate-100 uppercase hover:text-[#FF1801] transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
          {/* Second repeated set for seamless infinite loop */}
          <div className="flex items-center gap-12 pr-12">
            {tickerItems.map((item, idx) => (
              <span
                key={`b-${idx}`}
                className="text-xs sm:text-sm font-mono font-bold tracking-wider text-slate-100 uppercase hover:text-[#FF1801] transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 6-Card Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#262C38] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#151921] border border-[#262C38] text-xs font-mono text-[#E10600] uppercase tracking-wider mb-2">
              <Zap className="w-3.5 h-3.5" />
              <span>Multi-Dimensional Telemetry</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-['Titillium_Web'] uppercase tracking-tight">
              Analytical Intelligence Dimensions
            </h2>
          </div>
          <p className="text-sm text-[#94A3B8] max-w-md font-sans">
            Engineered analytical models synthesizing race deltas, compound degradation kinetics, and safety car interventions.
          </p>
        </div>

        {/* 6-Card Grid: Card background #151921, border #262C38, hover transition up with red accent glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTELLIGENCE_DIMENSIONS.map((item) => {
            const Icon = getDimensionIcon(item.id);
            return (
              <div
                key={item.id}
                onClick={() => setActiveModalId(item.id)}
                className="bg-[#151921] border border-[#262C38] rounded-xl p-6 f1-card-hover cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded bg-[#0B0E14] border border-[#262C38] text-[#94A3B8] group-hover:text-white group-hover:border-[#E10600] transition-colors">
                      {item.tag}
                    </span>
                    <div className="p-2 rounded-lg bg-[#0B0E14] border border-[#262C38] text-[#E10600] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white font-['Titillium_Web'] uppercase group-hover:text-[#FF1801] transition-colors flex items-center gap-1.5">
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#E10600]" />
                  </h3>
                  <p className="text-sm text-[#94A3B8] mt-2.5 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                {/* Card Metric Footer */}
                <div className="mt-6 pt-4 border-t border-[#262C38] flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-mono font-bold text-white">
                      {item.metric}
                    </span>
                    <span className="text-[11px] text-[#94A3B8] font-mono">
                      {item.submetric}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                    {item.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Deep-Dive Modal for Intelligence Dimensions */}
      {activeDimension && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#151921] border border-[#E10600] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#262C38] pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#0B0E14] text-[#E10600] border border-[#262C38]">
                  {React.createElement(getDimensionIcon(activeDimension.id), { className: 'w-6 h-6' })}
                </div>
                <div>
                  <span className="text-xs font-mono text-[#E10600] uppercase tracking-wider">
                    {activeDimension.tag} • Deep Dive
                  </span>
                  <h3 className="text-2xl font-bold text-white font-['Titillium_Web'] uppercase">
                    {activeDimension.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setActiveModalId(null)}
                className="p-2 rounded-lg bg-[#0B0E14] text-[#94A3B8] hover:text-white hover:bg-[#262C38] transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Custom dimension telemetry analysis */}
            <div className="space-y-6">
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeDimension.desc} This module links directly into the Tableau Public Race Intelligence analytical suite, driving sub-millisecond telemetry correlation across 17 seasons.
              </p>

              {/* Dynamic Telemetry View based on Active Dimension */}
              {activeDimension.id === 'circuits' && (
                <div className="space-y-3">
                  <div className="text-xs font-mono text-[#94A3B8] uppercase">
                    Sample Grand Prix Circuit Downforce Configurations:
                  </div>
                  <div className="space-y-2">
                    {CIRCUIT_LOGS.slice(0, 4).map((c, i) => (
                      <div key={i} className="flex items-center justify-between bg-[#0B0E14] p-3 rounded border border-[#262C38] text-xs font-mono">
                        <div>
                          <span className="text-white font-bold">{c.name}</span>
                          <span className="text-[#94A3B8] ml-2">({c.country})</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-amber-400">{c.downforce} Downforce</span>
                          <span className="text-emerald-400">{c.entries} Entries</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeDimension.id === 'tyres' && (
                <div className="space-y-3">
                  <div className="text-xs font-mono text-[#94A3B8] uppercase">
                    Compound Stint Allocations & Degradation Windows:
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {TYRE_COMPOUNDS.map((t, i) => (
                      <div key={i} className="bg-[#0B0E14] p-3 rounded border border-[#262C38] text-xs font-mono space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white">{t.compound}</span>
                          <span className="font-bold" style={{ color: t.color }}>{t.share}%</span>
                        </div>
                        <div className="text-[11px] text-[#94A3B8]">Optimal: {t.optimalStintLaps}</div>
                        <div className="text-[10px] text-amber-400">Degradation: {t.degradationRate}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeDimension.id === 'points' && (
                <div className="space-y-3">
                  <div className="text-xs font-mono text-[#94A3B8] uppercase">
                    Career Points Benchmark (Top 4 Drivers):
                  </div>
                  <div className="space-y-2">
                    {DRIVER_LEADERBOARD.slice(0, 4).map((d, i) => (
                      <div key={i} className="bg-[#0B0E14] p-3 rounded border border-[#262C38] flex items-center justify-between text-xs font-mono">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full flex items-center justify-center font-bold text-black" style={{ backgroundColor: d.avatarColor }}>
                            {i + 1}
                          </span>
                          <span className="text-white font-bold">{d.name}</span>
                          <span className="text-[#94A3B8]">({d.team})</span>
                        </div>
                        <div className="text-emerald-400 font-bold">{d.points.toLocaleString()} pts</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {['laps', 'h2h', 'weather'].includes(activeDimension.id) && (
                <div className="bg-[#0B0E14] p-4 rounded-xl border border-[#262C38] space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#94A3B8]">Telemetry Resolution</span>
                    <span className="text-emerald-400">0.001s (1ms Precision)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#94A3B8]">Interactive BI Link</span>
                    <span className="text-white">Tableau Public Engine</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#94A3B8]">Target Persona</span>
                    <span className="text-cyan-400">Performance Strategist & FIA Analyst</span>
                  </div>
                </div>
              )}

              {/* Action Button */}
              <div className="pt-4 border-t border-[#262C38] flex items-center justify-between">
                <a
                  href="#dashboard"
                  onClick={() => setActiveModalId(null)}
                  className="bg-[#E10600] hover:bg-[#FF1801] text-white px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  <span>Launch in Tableau Dashboard</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setActiveModalId(null)}
                  className="text-xs font-mono text-[#94A3B8] hover:text-white transition-colors"
                >
                  Close Panel
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
