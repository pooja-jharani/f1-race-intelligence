import React, { useState } from 'react';
import { 
  Globe, 
  AlertTriangle, 
  Trophy, 
  Shield, 
  BarChart3, 
  Disc, 
  Grid, 
  Medal,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { 
  DRIVER_LEADERBOARD, 
  CONSTRUCTORS, 
  TYRE_COMPOUNDS, 
  GLOBAL_DRIVER_DISTRIBUTION, 
  CIRCUIT_LOGS 
} from '../data/f1Data';

export const VisualizationGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'drivers' | 'teams' | 'tyres' | 'circuits'>('all');
  const [selectedModule, setSelectedModule] = useState<number>(0);

  const modules = [
    {
      id: 'driver-dist',
      category: 'drivers',
      title: 'Global Driver Distribution',
      chartType: 'Geographic Map',
      icon: Globe,
      keyValues: 'USA (400), Spain (328), Monaco (328), Canada (308), Brazil (308), Singapore (288), Mexico (160), Japan (140), Netherlands (140), Saudi Arabia (140), Azerbaijan (140), Australia (140), China (40)',
      functionDesc: 'Maps driver talent pools and national representation across international Grand Prix host countries.',
      badge: '13 Countries Mapped',
    },
    {
      id: 'driver-reliability',
      category: 'drivers',
      title: 'Driver Reliability Analysis',
      chartType: 'Stacked Bar Chart',
      icon: AlertTriangle,
      keyValues: 'Categorized Did Not Finish (DNF) counts (engine, mechanical, brake failures, collisions) across 19 drivers including Lewis Hamilton, Max Verstappen, Charles Leclerc, Lando Norris, Fernando Alonso, and Carlos Sainz',
      functionDesc: 'Evaluates driver reliability trends and mechanical attrition rates over multi-season regulation shifts.',
      badge: '19 Drivers Audited',
    },
    {
      id: 'driver-leaderboard',
      category: 'drivers',
      title: 'Driver Performance Leaderboard',
      chartType: 'Vertical Bar Chart',
      icon: Trophy,
      keyValues: 'Lewis Hamilton (31,147), Max Verstappen (31,126), Charles Leclerc (27,673), Lando Norris (26,408), Yuki Tsunoda (14,438), Esteban Ocon (14,205), Carlos Sainz (11,004), Fernando Alonso (1,353)',
      functionDesc: 'Tracks cumulative career points and benchmarks driver scoring trajectories.',
      badge: 'Hamilton leads by 21 pts',
    },
    {
      id: 'team-ranking',
      category: 'teams',
      title: 'Team Performance Ranking',
      chartType: 'Horizontal Bar Chart',
      icon: Shield,
      keyValues: 'Red Bull Racing (8,006 pts lead), Mercedes, Ferrari, McLaren, Alpine, Aston Martin, Williams, RB (AlphaTauri), Haas, Kick Sauber',
      functionDesc: 'Ranks constructors based on aggregate points accumulated over the 17-season window.',
      badge: 'Red Bull Racing Lead',
    },
    {
      id: 'championship-analysis',
      category: 'teams',
      title: 'Team Championship Analysis',
      chartType: 'Vertical Bar Chart',
      icon: BarChart3,
      keyValues: 'Comparative points distribution across all 10 active constructor entities',
      functionDesc: 'Compares season-over-season championship scoring across top-tier and mid-grid constructor teams.',
      badge: '10 Constructor Entities',
    },
    {
      id: 'tyre-usage',
      category: 'tyres',
      title: 'Tyre Compound Usage',
      chartType: 'Pie / Donut Chart',
      icon: Disc,
      keyValues: 'Soft (31.52%), Medium (30.78%), Hard (30.36%), Intermediate (7.34%)',
      functionDesc: 'Details stint compound allocation strategies across diverse track temperatures and circuit profiles.',
      badge: '31.52% Soft Stint Share',
    },
    {
      id: 'country-participation',
      category: 'circuits',
      title: 'Country-Wise Participation',
      chartType: 'Treemap',
      icon: Grid,
      keyValues: 'Bahrain (2,168), USA (400), Hungary (328), Monaco (328), Spain (328), Brazil (308), Canada (308), UAE (308), Singapore (288), plus Italy, Austria, Qatar, UK',
      functionDesc: 'Visualizes total race entry logs grouped by host country venues.',
      badge: 'Bahrain 2,168 Records',
    },
    {
      id: 'podium-achievements',
      category: 'teams',
      title: 'Podium Achievements',
      chartType: 'Packed Bubble Chart',
      icon: Medal,
      keyValues: 'Podium density and distribution by driver and team (highlighting volume clusters for Ferrari and Mercedes)',
      functionDesc: 'Displays top-three finish concentrations per driver and team combination.',
      badge: 'Ferrari & Mercedes Clusters',
    },
  ];

  const filteredModules = activeTab === 'all' 
    ? modules 
    : modules.filter((m) => m.category === activeTab);

  const activeMod = modules[selectedModule];

  return (
    <section id="gallery" className="py-20 bg-[#0B0E14] border-b border-[#262C38] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#262C38] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#151921] border border-[#262C38] text-xs font-mono text-[#E10600] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Catalog & Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-['Titillium_Web'] uppercase tracking-tight">
              Dashboard Visualization Catalog
            </h2>
            <p className="text-sm text-[#94A3B8] mt-1 font-sans">
              8 visual modules synthesizing 17 seasons of racing data into interactive BI components.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All 8 Modules' },
              { id: 'drivers', label: 'Drivers' },
              { id: 'teams', label: 'Constructors' },
              { id: 'tyres', label: 'Tyre Strategy' },
              { id: 'circuits', label: 'Circuits' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#E10600] text-white shadow-md shadow-red-950/50'
                    : 'bg-[#151921] text-[#94A3B8] hover:text-white border border-[#262C38]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredModules.map((item, idx) => {
            const Icon = item.icon;
            const originalIndex = modules.findIndex((m) => m.id === item.id);
            const isSelected = selectedModule === originalIndex;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedModule(originalIndex)}
                className={`bg-[#151921] border rounded-xl p-5 cursor-pointer transition-all relative overflow-hidden group ${
                  isSelected
                    ? 'border-[#E10600] ring-1 ring-[#E10600] shadow-lg shadow-red-950/40'
                    : 'border-[#262C38] hover:border-slate-500'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-lg bg-[#0B0E14] border ${isSelected ? 'border-[#E10600] text-[#E10600]' : 'border-[#262C38] text-[#94A3B8]'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
                    {item.chartType}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white font-['Titillium_Web'] uppercase group-hover:text-[#FF1801] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#94A3B8] mt-2 line-clamp-2 font-sans">
                  {item.functionDesc}
                </p>

                <div className="mt-4 pt-3 border-t border-[#262C38] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-white font-semibold">{item.badge}</span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-[#E10600] translate-x-1' : 'text-[#94A3B8]'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Module Interactive Telemetry Showcase */}
        {activeMod && (
          <div className="bg-[#151921] border border-[#262C38] rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#262C38] pb-4">
              <div>
                <span className="text-xs font-mono text-[#E10600] uppercase tracking-wider">
                  Interactive Module Spotlight • {activeMod.chartType}
                </span>
                <h3 className="text-2xl font-black text-white font-['Titillium_Web'] uppercase">
                  {activeMod.title}
                </h3>
              </div>
              <div className="text-xs font-mono text-[#94A3B8] bg-[#0B0E14] px-3 py-1.5 rounded border border-[#262C38]">
                Function: {activeMod.functionDesc}
              </div>
            </div>

            {/* Custom Interactive Telemetry Graphics for the Selected Module */}
            {activeMod.id === 'driver-leaderboard' && (
              <div className="space-y-4">
                <div className="text-xs font-mono text-[#94A3B8] uppercase">
                  Driver Career Points Benchmarks:
                </div>
                <div className="space-y-2.5">
                  {DRIVER_LEADERBOARD.map((d, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white w-6">{i + 1}.</span>
                          <span className="text-white font-semibold">{d.name}</span>
                          <span className="text-[#94A3B8] text-[11px]">({d.team})</span>
                        </div>
                        <span className="text-white font-bold">{d.points.toLocaleString()} pts</span>
                      </div>
                      <div className="h-2 bg-[#0B0E14] rounded-full overflow-hidden border border-[#262C38]">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${(d.points / 31147) * 100}%`,
                            backgroundColor: d.avatarColor,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeMod.id === 'driver-reliability' && (
              <div className="space-y-4">
                <div className="text-xs font-mono text-[#94A3B8] uppercase">
                  Stacked DNF Breakdown (Engine, Mechanical, Brakes, Collision):
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {DRIVER_LEADERBOARD.slice(0, 6).map((d, i) => {
                    const enginePct = (d.dnfs.engine / d.totalDnfs) * 100;
                    const mechPct = (d.dnfs.mechanical / d.totalDnfs) * 100;
                    const brakePct = (d.dnfs.brakes / d.totalDnfs) * 100;
                    const colPct = (d.dnfs.collision / d.totalDnfs) * 100;
                    return (
                      <div key={i} className="bg-[#0B0E14] p-4 rounded-xl border border-[#262C38] space-y-2 font-mono text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-bold">{d.name}</span>
                          <span className="text-red-400 font-bold">{d.totalDnfs} Total DNFs</span>
                        </div>
                        {/* Stacked bar */}
                        <div className="h-3 flex rounded-full overflow-hidden border border-[#262C38]">
                          <div style={{ width: `${enginePct}%` }} className="bg-red-500" title={`Engine: ${d.dnfs.engine}`} />
                          <div style={{ width: `${mechPct}%` }} className="bg-amber-500" title={`Mechanical: ${d.dnfs.mechanical}`} />
                          <div style={{ width: `${brakePct}%` }} className="bg-cyan-500" title={`Brakes: ${d.dnfs.brakes}`} />
                          <div style={{ width: `${colPct}%` }} className="bg-purple-500" title={`Collision: ${d.dnfs.collision}`} />
                        </div>
                        <div className="flex justify-between text-[10px] text-[#94A3B8]">
                          <span>Eng: {d.dnfs.engine}</span>
                          <span>Mech: {d.dnfs.mechanical}</span>
                          <span>Brk: {d.dnfs.brakes}</span>
                          <span>Col: {d.dnfs.collision}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeMod.id === 'tyre-usage' && (
              <div className="space-y-4">
                <div className="text-xs font-mono text-[#94A3B8] uppercase">
                  Tyre Stint Distribution & Compound Allocation:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {TYRE_COMPOUNDS.map((t, i) => (
                    <div key={i} className="bg-[#0B0E14] p-5 rounded-xl border border-[#262C38] text-center space-y-2">
                      <div className="w-16 h-16 mx-auto rounded-full border-4 flex items-center justify-center font-mono font-black text-lg text-white"
                        style={{ borderColor: t.color }}>
                        {t.share}%
                      </div>
                      <div className="text-sm font-bold text-white font-['Titillium_Web'] uppercase">
                        {t.compound}
                      </div>
                      <div className="text-xs text-[#94A3B8] font-mono">
                        Optimal: {t.optimalStintLaps}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeMod.id === 'country-participation' && (
              <div className="space-y-4">
                <div className="text-xs font-mono text-[#94A3B8] uppercase">
                  Country-Wise Participation Treemap Hierarchy:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono">
                  {CIRCUIT_LOGS.map((c, i) => (
                    <div key={i} className="bg-[#0B0E14] p-3 rounded-lg border border-[#262C38] text-center hover:border-[#E10600] transition-colors">
                      <span className="text-xl font-black text-[#E10600] block">{c.entries}</span>
                      <span className="text-xs font-bold text-white block mt-1 truncate">{c.country}</span>
                      <span className="text-[10px] text-[#94A3B8] block truncate">{c.name.split(' ')[0]}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {['driver-dist', 'team-ranking', 'championship-analysis', 'podium-achievements'].includes(activeMod.id) && (
              <div className="bg-[#0B0E14] p-5 rounded-xl border border-[#262C38] space-y-3 font-mono text-xs">
                <div className="text-white font-bold uppercase tracking-wider text-sm">
                  Source Dataset Metrics:
                </div>
                <p className="text-slate-300 leading-relaxed font-sans text-sm">
                  {activeMod.keyValues}
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <a
                    href="#dashboard"
                    className="bg-[#E10600] hover:bg-[#FF1801] text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>View in Tableau Dashboard</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
};
