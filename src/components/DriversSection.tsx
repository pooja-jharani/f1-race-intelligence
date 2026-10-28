import React, { useState } from 'react';
import { Users2, Award, Zap, ShieldAlert, ArrowRightLeft, Flag, Download } from 'lucide-react';
import { DRIVER_LEADERBOARD, DriverStat } from '../data/f1Data';
import { calculateDriverPointsDelta, formatTelemetrySpeed } from '../utils/telemetry';

interface DriversSectionProps {
  onOpenDownload?: () => void;
}

export const DriversSection: React.FC<DriversSectionProps> = ({ onOpenDownload }) => {
  const [driverAIndex, setDriverAIndex] = useState(0); // Lewis Hamilton
  const [driverBIndex, setDriverBIndex] = useState(1); // Max Verstappen

  const driverA = DRIVER_LEADERBOARD[driverAIndex];
  const driverB = DRIVER_LEADERBOARD[driverBIndex];

  const pointsDelta = calculateDriverPointsDelta(driverA, driverB);

  return (
    <section id="drivers" className="py-20 bg-[#0B0E14] border-b border-[#262C38] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#262C38] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#151921] border border-[#262C38] text-xs font-mono text-[#E10600] uppercase tracking-wider mb-2">
              <Users2 className="w-3.5 h-3.5" />
              <span>Driver Performance & Telemetry</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-['Titillium_Web'] uppercase tracking-tight">
              Driver Head-to-Head & Leaderboard
            </h2>
            <p className="text-sm text-[#94A3B8] mt-1 font-sans">
              Evaluate career trajectories, reliability indices, top speed deltas, and DNF rates across 17 seasons.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="text-xs font-mono text-slate-400 bg-[#151921] px-4 py-2 rounded-lg border border-[#262C38]">
              HAM & VER GAP: <span className="text-emerald-400 font-bold">21 POINTS</span>
            </div>
            {onOpenDownload && (
              <button
                onClick={onOpenDownload}
                className="bg-[#151921] hover:bg-[#262C38] border border-[#262C38] hover:border-[#E10600] text-white text-xs font-mono px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#E10600]" />
                <span>Export Drivers CSV</span>
              </button>
            )}
          </div>
        </div>

        {/* Head-to-Head Comparison Arena */}
        <div className="bg-[#151921] border border-[#262C38] rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#262C38] pb-4">
            <div className="flex items-center gap-2">
              <ArrowRightLeft className="w-5 h-5 text-[#E10600]" />
              <h3 className="text-lg font-bold text-white font-['Titillium_Web'] uppercase tracking-wider">
                Telemetry Delta Comparison Tool
              </h3>
            </div>
            <div className="text-xs font-mono text-[#94A3B8]">
              Select two drivers to calculate real-time gap
            </div>
          </div>

          {/* Selectors and Face-off Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Driver A Selector & Card */}
            <div className="lg:col-span-5 bg-[#0B0E14] border border-[#262C38] rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#94A3B8] uppercase">Driver 1</span>
                <select
                  value={driverAIndex}
                  onChange={(e) => setDriverAIndex(Number(e.target.value))}
                  className="bg-[#151921] text-white border border-[#262C38] rounded px-3 py-1 text-xs font-mono focus:border-[#E10600] focus:outline-none"
                >
                  {DRIVER_LEADERBOARD.map((d, i) => (
                    <option key={d.name} value={i} disabled={i === driverBIndex}>
                      {d.name} ({d.shortName})
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-black text-black shadow-lg"
                  style={{ backgroundColor: driverA.avatarColor }}
                >
                  {driverA.shortName}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white font-['Titillium_Web'] uppercase">
                    {driverA.name}
                  </h4>
                  <p className="text-xs text-[#94A3B8] font-mono">{driverA.team} • {driverA.country}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2 border-t border-[#262C38]">
                <div className="bg-[#151921] p-2.5 rounded">
                  <span className="text-[#94A3B8] block text-[10px]">POINTS</span>
                  <span className="text-white font-bold text-base">{driverA.points.toLocaleString()}</span>
                </div>
                <div className="bg-[#151921] p-2.5 rounded">
                  <span className="text-[#94A3B8] block text-[10px]">RELIABILITY</span>
                  <span className="text-emerald-400 font-bold text-base">{driverA.reliabilityScore}%</span>
                </div>
                <div className="bg-[#151921] p-2.5 rounded">
                  <span className="text-[#94A3B8] block text-[10px]">TOP SPEED</span>
                  <span className="text-white font-bold text-base">{driverA.topSpeed} km/h</span>
                </div>
                <div className="bg-[#151921] p-2.5 rounded">
                  <span className="text-[#94A3B8] block text-[10px]">TOTAL DNFS</span>
                  <span className="text-amber-400 font-bold text-base">{driverA.totalDnfs}</span>
                </div>
              </div>
            </div>

            {/* Center Delta Badge */}
            <div className="lg:col-span-2 text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#151921] border border-[#E10600] flex items-center justify-center text-[#E10600] font-black font-mono shadow-md shadow-red-950/50">
                VS
              </div>
              <div className="bg-[#0B0E14] border border-[#262C38] p-3 rounded-lg">
                <span className="text-[10px] font-mono text-[#94A3B8] uppercase block">Points Gap</span>
                <span className="text-lg font-black text-emerald-400 font-mono">
                  {pointsDelta.gap === 0 ? 'TIED' : `+${pointsDelta.gap.toLocaleString()}`}
                </span>
                <span className="text-[10px] text-[#94A3B8] block truncate">
                  Advantage: {pointsDelta.leader.split(' ')[1]}
                </span>
              </div>
            </div>

            {/* Driver B Selector & Card */}
            <div className="lg:col-span-5 bg-[#0B0E14] border border-[#262C38] rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#94A3B8] uppercase">Driver 2</span>
                <select
                  value={driverBIndex}
                  onChange={(e) => setDriverBIndex(Number(e.target.value))}
                  className="bg-[#151921] text-white border border-[#262C38] rounded px-3 py-1 text-xs font-mono focus:border-[#E10600] focus:outline-none"
                >
                  {DRIVER_LEADERBOARD.map((d, i) => (
                    <option key={d.name} value={i} disabled={i === driverAIndex}>
                      {d.name} ({d.shortName})
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-black text-black shadow-lg"
                  style={{ backgroundColor: driverB.avatarColor }}
                >
                  {driverB.shortName}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white font-['Titillium_Web'] uppercase">
                    {driverB.name}
                  </h4>
                  <p className="text-xs text-[#94A3B8] font-mono">{driverB.team} • {driverB.country}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2 border-t border-[#262C38]">
                <div className="bg-[#151921] p-2.5 rounded">
                  <span className="text-[#94A3B8] block text-[10px]">POINTS</span>
                  <span className="text-white font-bold text-base">{driverB.points.toLocaleString()}</span>
                </div>
                <div className="bg-[#151921] p-2.5 rounded">
                  <span className="text-[#94A3B8] block text-[10px]">RELIABILITY</span>
                  <span className="text-emerald-400 font-bold text-base">{driverB.reliabilityScore}%</span>
                </div>
                <div className="bg-[#151921] p-2.5 rounded">
                  <span className="text-[#94A3B8] block text-[10px]">TOP SPEED</span>
                  <span className="text-white font-bold text-base">{driverB.topSpeed} km/h</span>
                </div>
                <div className="bg-[#151921] p-2.5 rounded">
                  <span className="text-[#94A3B8] block text-[10px]">TOTAL DNFS</span>
                  <span className="text-amber-400 font-bold text-base">{driverB.totalDnfs}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* All Drivers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DRIVER_LEADERBOARD.map((d, idx) => (
            <div
              key={d.name}
              className="bg-[#151921] border border-[#262C38] rounded-xl p-5 hover:border-[#E10600] transition-colors relative group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[#94A3B8]">RANK #{idx + 1}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B0E14] text-white border border-[#262C38]">
                  {d.shortName}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-black text-sm shrink-0"
                  style={{ backgroundColor: d.avatarColor }}
                >
                  {d.shortName}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-['Titillium_Web'] uppercase group-hover:text-[#FF1801] transition-colors">
                    {d.name}
                  </h4>
                  <span className="text-xs text-[#94A3B8] font-mono">{d.team}</span>
                </div>
              </div>

              <div className="space-y-1.5 pt-3 border-t border-[#262C38] text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-[#94A3B8]">Points:</span>
                  <span className="text-white font-bold">{d.points.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#94A3B8]">Reliability Index:</span>
                  <span className="text-emerald-400">{d.reliabilityScore}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#94A3B8]">DNFs (Eng/Mech/Brk/Col):</span>
                  <span className="text-slate-300">
                    {d.dnfs.engine}/{d.dnfs.mechanical}/{d.dnfs.brakes}/{d.dnfs.collision}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
