import React, { useState, useEffect } from 'react';
import { ArrowDownRight, Compass, Gauge, Radio, Zap, Flag, ShieldCheck, Download } from 'lucide-react';

interface HeroProps {
  onOpenDownload?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload }) => {
  const [speed, setSpeed] = useState(368);
  const [gear, setGear] = useState(8);
  const [drsActive, setDrsActive] = useState(true);

  // Dynamic telemetry effect simulating high-speed straight
  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2;
        const nextSpeed = Math.min(372, Math.max(362, prev + delta));
        return nextSpeed;
      });
      setDrsActive(Math.random() > 0.2);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0B0E14] pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#262C38]">
      {/* Subtle red radial background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-600/15 via-[#0B0E14]/40 to-transparent pointer-events-none blur-2xl" />
      
      {/* Background circuit grid lines */}
      <div className="absolute inset-0 bg-f1-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and Call-to-Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#151921]/90 border border-[#262C38] text-xs font-mono tracking-widest uppercase">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E10600] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E10600]"></span>
              </span>
              <span className="text-white font-semibold">LIVE RACE ANALYTICS PLATFORM</span>
              <span className="text-[#94A3B8] text-[10px] pl-1 border-l border-[#262C38]">2010–2026 ARCHIVE</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-['Titillium_Web'] uppercase leading-[1.05]">
              FORMULA 1 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E10600] via-[#FF1801] to-red-400">RACE INTELLIGENCE</span> DASHBOARD
            </h1>

            {/* Subtitle Copy */}
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl font-normal">
              Deep-dive analytics into Formula 1 Championship data, from driver performance metrics and team strategy to circuit analysis and historical championship trends. Powered by Tableau visualization intelligence.
            </p>

            {/* Telemetry pill metadata */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300 pt-2">
              <div className="flex items-center gap-1.5 bg-[#151921] px-3 py-1.5 rounded border border-[#262C38]">
                <Radio className="w-3.5 h-3.5 text-[#E10600]" />
                <span>6,464 Race Outcome Logs</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#151921] px-3 py-1.5 rounded border border-[#262C38]">
                <Flag className="w-3.5 h-3.5 text-amber-400" />
                <span>29 Global Circuits</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#151921] px-3 py-1.5 rounded border border-[#262C38]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>10 Competing Constructors</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <a
                href="#dashboard"
                className="bg-[#E10600] hover:bg-[#FF1801] text-white font-bold text-sm uppercase tracking-wider px-7 py-3.5 rounded shadow-xl shadow-red-950/60 hover:shadow-red-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 cursor-pointer group"
              >
                <span>VIEW DASHBOARD</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#story"
                className="bg-transparent hover:bg-white/5 border border-white text-white font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded hover:border-[#FF1801] hover:text-[#FF1801] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>EXPLORE STORY</span>
                <Compass className="w-4 h-4" />
              </a>

              {onOpenDownload && (
                <button
                  onClick={onOpenDownload}
                  className="bg-[#151921] hover:bg-[#262C38] border border-[#262C38] hover:border-[#E10600] text-slate-200 hover:text-white font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <Download className="w-4 h-4 text-[#E10600]" />
                  <span>DOWNLOAD / EXPORT</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Telemetry Cockpit HUD Widget */}
          <div className="lg:col-span-5">
            <div className="bg-[#151921] border border-[#262C38] rounded-xl p-5 sm:p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E10600]/10 rounded-full blur-2xl pointer-events-none" />
              
              {/* Cockpit HUD Header */}
              <div className="flex items-center justify-between border-b border-[#262C38] pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-[#E10600]" />
                  <span className="font-['Titillium_Web'] font-bold uppercase tracking-wider text-sm text-white">
                    Live Telemetry Stream
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${drsActive ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-slate-700/50 text-slate-400'}`}>
                    DRS {drsActive ? 'OPEN' : 'CLOSED'}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-950/60 text-red-400 border border-red-800/40 font-bold">
                    REC
                  </span>
                </div>
              </div>

              {/* Speed & Gear Gauge */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="bg-[#0B0E14] border border-[#262C38] p-3 rounded-lg text-center">
                  <span className="block text-[11px] font-mono text-[#94A3B8] uppercase">Speed</span>
                  <div className="flex items-baseline justify-center gap-1 mt-1">
                    <span className="text-3xl font-black text-white font-mono">{speed}</span>
                    <span className="text-[10px] text-red-500 font-mono">km/h</span>
                  </div>
                </div>

                <div className="bg-[#0B0E14] border border-[#262C38] p-3 rounded-lg text-center">
                  <span className="block text-[11px] font-mono text-[#94A3B8] uppercase">Gear</span>
                  <div className="flex items-baseline justify-center gap-1 mt-1">
                    <span className="text-3xl font-black text-amber-400 font-mono">{gear}</span>
                    <span className="text-[10px] text-slate-400 font-mono">SEQ</span>
                  </div>
                </div>

                <div className="bg-[#0B0E14] border border-[#262C38] p-3 rounded-lg text-center">
                  <span className="block text-[11px] font-mono text-[#94A3B8] uppercase">Pace Delta</span>
                  <div className="flex items-baseline justify-center gap-1 mt-1">
                    <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">-0.021s</span>
                  </div>
                </div>
              </div>

              {/* Leaderboard Delta Benchmark */}
              <div className="space-y-2.5 bg-[#0B0E14] p-3.5 rounded-lg border border-[#262C38]">
                <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8] border-b border-[#262C38]/60 pb-1.5">
                  <span>P1 / P2 TELEMETRY DELTA</span>
                  <span className="text-emerald-400">GAP: 21 PTS</span>
                </div>

                {/* Hamilton Row */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#00D2BE] text-black font-bold flex items-center justify-center text-[10px]">
                      44
                    </span>
                    <span className="font-semibold text-white">L. Hamilton</span>
                    <span className="text-[10px] text-slate-400">FER/MER</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono">
                    <span className="text-white font-bold">31,147 pts</span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-800/40">LEADER</span>
                  </div>
                </div>

                {/* Verstappen Row */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#3671C6] text-white font-bold flex items-center justify-center text-[10px]">
                      1
                    </span>
                    <span className="font-semibold text-white">M. Verstappen</span>
                    <span className="text-[10px] text-slate-400">RBR</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono">
                    <span className="text-white font-bold">31,126 pts</span>
                    <span className="text-[10px] text-amber-400 bg-amber-950/40 px-1.5 py-0.5 rounded border border-amber-800/40">-21 pts</span>
                  </div>
                </div>
              </div>

              {/* Sector Bars */}
              <div className="mt-4 pt-3 border-t border-[#262C38] grid grid-cols-3 gap-2 text-center text-[11px] font-mono">
                <div className="bg-emerald-950/30 border border-emerald-800/40 py-1.5 px-2 rounded">
                  <span className="text-emerald-400 font-bold block">SEC 1</span>
                  <span className="text-white">28.142s</span>
                </div>
                <div className="bg-purple-950/30 border border-purple-800/40 py-1.5 px-2 rounded">
                  <span className="text-purple-400 font-bold block">SEC 2 (PURPLE)</span>
                  <span className="text-white">39.014s</span>
                </div>
                <div className="bg-emerald-950/30 border border-emerald-800/40 py-1.5 px-2 rounded">
                  <span className="text-emerald-400 font-bold block">SEC 3</span>
                  <span className="text-white">21.240s</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
