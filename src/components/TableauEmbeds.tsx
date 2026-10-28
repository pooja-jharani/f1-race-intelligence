import React, { useEffect, useRef, useState } from 'react';
import { 
  ExternalLink, 
  RefreshCw, 
  BarChart2, 
  BookOpen, 
  ShieldCheck, 
  SlidersHorizontal,
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  Award,
  Globe,
  Disc,
  Play,
  Download
} from 'lucide-react';
import { 
  DRIVER_LEADERBOARD, 
  CONSTRUCTORS, 
  TYRE_COMPOUNDS, 
  GLOBAL_DRIVER_DISTRIBUTION, 
  CIRCUIT_LOGS 
} from '../data/f1Data';

interface TableauEmbedsProps {
  onOpenDownload?: () => void;
}

export const TableauEmbeds: React.FC<TableauEmbedsProps> = ({ onOpenDownload }) => {
  const dashboardContainerRef = useRef<HTMLDivElement>(null);
  const storyContainerRef = useRef<HTMLDivElement>(null);

  // View mode toggle: 'native' for built-in interactive BI suite, 'embed' for Tableau Public server iframe/viz_v1
  const [dashboardMode, setDashboardMode] = useState<'native' | 'embed'>('native');
  const [storyMode, setStoryMode] = useState<'native' | 'embed'>('native');

  // Interactive filters inside the native dashboard
  const [selectedSeasonRange, setSelectedSeasonRange] = useState('2010–2026');
  const [topNDrivers, setTopNDrivers] = useState(8);
  const [dnfFilter, setDnfFilter] = useState<'all' | 'mechanical' | 'collision'>('all');

  // Story active step
  const [currentStoryStep, setCurrentStoryStep] = useState(0);

  const storyChapters = [
    {
      num: '01',
      title: 'Global Talent Pools',
      subtitle: 'Mapping 13 host countries and international driver representation',
      insight: 'Across 17 seasons, 13 host nations formed the core international pipeline, with USA (400), Spain (328), and Monaco (328) leading in race entries and national driver representation.',
      chart: 'global',
    },
    {
      num: '02',
      title: 'Hamilton vs Verstappen Points Battle',
      subtitle: 'The closest career points benchmark in modern motorsport history',
      insight: 'Lewis Hamilton leads the aggregate 17-season window with 31,147 points, closely trailed by Max Verstappen with 31,126 points — a razor-thin delta of just 21 championship points.',
      chart: 'points',
    },
    {
      num: '03',
      title: 'Constructor Performance Ranking',
      subtitle: 'Red Bull Racing leads aggregate constructor scoring',
      insight: 'Red Bull Racing holds an 8,006-point window lead, competing against Mercedes-AMG, Scuderia Ferrari, and McLaren across 6,464 race outcome logs.',
      chart: 'constructors',
    },
    {
      num: '04',
      title: 'Tyre Compound Strategy',
      subtitle: 'Pirelli compound stint share and degradation allocation',
      insight: 'Soft compound comprises 31.52% of total stints for high-speed qualifying and undercut attempts, while Medium (30.78%) and Hard (30.36%) anchor the race strategy core.',
      chart: 'tyres',
    },
    {
      num: '05',
      title: 'Circuit Participation Hierarchy',
      subtitle: '29 global circuits logged with Bahrain hosting 2,168 entries',
      insight: 'Bahrain International Circuit accounts for 2,168 outcome logs, followed by USA (400), Hungary (328), Monaco (328), Spain (328), and Brazil (308).',
      chart: 'circuits',
    },
    {
      num: '06',
      title: 'Reliability & Mechanical Attrition',
      subtitle: 'DNF breakdown across engine, mechanical, brake failures and collisions',
      insight: 'Analysis across 19 audited drivers demonstrates how technical regulation changes progressively improved powertrain longevity and reduced structural DNFs.',
      chart: 'dnf',
    },
    {
      num: '07',
      title: 'Podium Achievement Clusters',
      subtitle: 'Top-three finish concentrations for Ferrari, Mercedes, and Red Bull',
      insight: 'Podium density reflects championship dominance cycles, with Mercedes and Ferrari recording the highest volume clusters in the hybrid turbo era.',
      chart: 'podiums',
    },
  ];

  // Initialize and size Tableau visualizations when embed mode is active
  useEffect(() => {
    const initTableauViz = (containerId: string) => {
      const container = document.getElementById(containerId);
      if (!container) return;

      const vizObject = container.getElementsByTagName('object')[0];
      if (!vizObject) return;

      const width = container.offsetWidth;
      const height = width > 500 ? '927px' : '2127px';
      vizObject.style.width = '100%';
      vizObject.style.height = height;

      if (!(window as any).tableauVizScriptLoaded) {
        const scriptElement = document.createElement('script');
        scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
        scriptElement.async = true;
        scriptElement.onload = () => {
          (window as any).tableauVizScriptLoaded = true;
        };
        vizObject.parentNode?.insertBefore(scriptElement, vizObject);
      }
    };

    const timer = setTimeout(() => {
      initTableauViz('viz_dashboard_container');
      initTableauViz('viz_story_container');
    }, 250);

    return () => clearTimeout(timer);
  }, [dashboardMode, storyMode]);

  const dashboardUrl = "https://public.tableau.com/views/F1RACEINTELLIGENCEDASHBOARD/Dashboard?:embed=yes&:showVizHome=no&:toolbar=n&:display_count=yes";
  const storyUrl = "https://public.tableau.com/views/F1RACEStory/Story1?:embed=yes&:showVizHome=no&:toolbar=n&:display_count=yes";

  return (
    <div className="space-y-24 bg-[#0B0E14] py-16">
      
      {/* ---------------- 6. EMBEDDED TABLEAU DASHBOARD SECTION (ID: dashboard) ---------------- */}
      <section id="dashboard" className="scroll-mt-24 border-b border-[#262C38] pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#262C38] pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#151921] border border-[#262C38] text-xs font-mono text-[#E10600] uppercase tracking-wider mb-2">
                <BarChart2 className="w-3.5 h-3.5" />
                <span>Interactive BI Workspace</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-['Titillium_Web'] uppercase tracking-tight">
                Race Intelligence Dashboard
              </h2>
              <p className="text-base text-[#94A3B8] mt-1 max-w-2xl font-sans">
                Explore 17 seasons of driver performance leaderboards, team rankings, and tyre strategies.
              </p>
            </div>

            {/* Mode & Action Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Toggle View Engine */}
              <div className="bg-[#151921] p-1 rounded-lg border border-[#262C38] flex items-center gap-1 text-xs font-mono">
                <button
                  onClick={() => setDashboardMode('native')}
                  className={`px-3 py-1.5 rounded font-bold uppercase transition-all cursor-pointer ${
                    dashboardMode === 'native'
                      ? 'bg-[#E10600] text-white shadow-md shadow-red-950/50'
                      : 'text-[#94A3B8] hover:text-white'
                  }`}
                >
                  Interactive Visualizer
                </button>
                <button
                  onClick={() => setDashboardMode('embed')}
                  className={`px-3 py-1.5 rounded font-bold uppercase transition-all cursor-pointer ${
                    dashboardMode === 'embed'
                      ? 'bg-[#E10600] text-white shadow-md shadow-red-950/50'
                      : 'text-[#94A3B8] hover:text-white'
                  }`}
                >
                  Tableau Server Frame
                </button>
              </div>

              <a
                href={dashboardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#151921] hover:bg-[#262C38] text-white border border-[#262C38] hover:border-[#E10600] px-3.5 py-2 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span>Tableau Direct</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#E10600]" />
              </a>

              {onOpenDownload && (
                <button
                  onClick={onOpenDownload}
                  className="bg-[#E10600] hover:bg-[#FF1801] text-white px-3.5 py-2 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-md shadow-red-950/40"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Dataset</span>
                </button>
              )}
            </div>
          </div>

          {/* Active Filter Parameters Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-[#151921] p-4 rounded-xl border border-[#262C38] text-xs font-mono">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#E10600]" />
                <span className="text-[#94A3B8] uppercase">Filters:</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Top N Drivers:</span>
                <select
                  value={topNDrivers}
                  onChange={(e) => setTopNDrivers(Number(e.target.value))}
                  className="bg-[#0B0E14] text-white border border-[#262C38] px-2.5 py-1 rounded focus:border-[#E10600] focus:outline-none"
                >
                  <option value={4}>Top 4</option>
                  <option value={8}>Top 8 (All Featured)</option>
                  <option value={10}>Top 10</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Season Scope:</span>
                <span className="text-white font-bold bg-[#0B0E14] px-2 py-1 rounded border border-[#262C38]">
                  {selectedSeasonRange} (17 Seasons)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400">DNF Mode:</span>
                <select
                  value={dnfFilter}
                  onChange={(e) => setDnfFilter(e.target.value as any)}
                  className="bg-[#0B0E14] text-white border border-[#262C38] px-2.5 py-1 rounded focus:border-[#E10600] focus:outline-none"
                >
                  <option value="all">All Attritions</option>
                  <option value="mechanical">Mechanical Only</option>
                  <option value="collision">Collisions Only</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified 6,464 Outcomes</span>
            </div>
          </div>

          {/* DASHBOARD CONTENT: NATIVE INTERACTIVE BI SUITE */}
          {dashboardMode === 'native' ? (
            <div className="bg-[#151921] border border-[#262C38] rounded-2xl p-6 sm:p-8 space-y-8 shadow-2xl">
              
              {/* Row 1: Top Driver Points Leaderboard & Team Ranking */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Driver Leaderboard Bar Chart */}
                <div className="lg:col-span-7 bg-[#0B0E14] border border-[#262C38] rounded-xl p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-[#262C38] pb-3">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-[#E10600]" />
                      <h3 className="text-base font-bold text-white font-['Titillium_Web'] uppercase">
                        Driver Performance Leaderboard
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                      HAM vs VER Delta: 21 pts
                    </span>
                  </div>

                  <div className="space-y-3 pt-1">
                    {DRIVER_LEADERBOARD.slice(0, topNDrivers).map((d, i) => (
                      <div key={d.name} className="space-y-1">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <div className="flex items-center gap-2">
                            <span className="text-slate-400 w-4 font-bold">{i + 1}.</span>
                            <span className="text-white font-semibold">{d.name}</span>
                            <span className="text-[11px] text-[#94A3B8]">({d.team})</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-slate-400 text-[11px]">
                              {dnfFilter === 'mechanical' 
                                ? `${d.dnfs.engine + d.dnfs.mechanical + d.dnfs.brakes} Mech DNFs` 
                                : dnfFilter === 'collision' 
                                  ? `${d.dnfs.collision} Col DNFs`
                                  : `${d.reliabilityScore}% Rel.`}
                            </span>
                            <span className="text-white font-bold">{d.points.toLocaleString()} pts</span>
                          </div>
                        </div>
                        <div className="h-2.5 bg-[#151921] rounded-full overflow-hidden border border-[#262C38]">
                          <div
                            className="h-full rounded-full transition-all duration-700"
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

                {/* Team Performance Ranking */}
                <div className="lg:col-span-5 bg-[#0B0E14] border border-[#262C38] rounded-xl p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-[#262C38] pb-3">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-400" />
                      <h3 className="text-base font-bold text-white font-['Titillium_Web'] uppercase">
                        Constructor Ranking
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
                      RBR +8,006 pts Lead
                    </span>
                  </div>

                  <div className="space-y-2.5 pt-1">
                    {CONSTRUCTORS.slice(0, 6).map((c, i) => (
                      <div key={c.name} className="flex items-center justify-between p-2.5 rounded-lg bg-[#151921] border border-[#262C38] text-xs font-mono">
                        <div className="flex items-center gap-2.5">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.color }} />
                          <span className="text-white font-semibold">{c.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-slate-400 text-[11px]">{c.titles} Titles</span>
                          <span className="text-white font-bold">{c.leadPoints.toLocaleString()} pts</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Row 2: Tyre Degradation Stints & Country Participation Treemap */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Tyre Stint Share */}
                <div className="lg:col-span-5 bg-[#0B0E14] border border-[#262C38] rounded-xl p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-[#262C38] pb-3">
                    <div className="flex items-center gap-2">
                      <Disc className="w-4 h-4 text-[#E10600]" />
                      <h3 className="text-base font-bold text-white font-['Titillium_Web'] uppercase">
                        Tyre Compound Usage
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-slate-400">Total 100% Share</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    {TYRE_COMPOUNDS.map((t) => (
                      <div key={t.compound} className="bg-[#151921] p-3 rounded-lg border border-[#262C38] text-center space-y-1 font-mono">
                        <div className="text-2xl font-black" style={{ color: t.color }}>
                          {t.share}%
                        </div>
                        <div className="text-xs font-bold text-white">{t.compound.split(' ')[0]}</div>
                        <div className="text-[10px] text-[#94A3B8]">{t.optimalStintLaps}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Country Participation Treemap */}
                <div className="lg:col-span-7 bg-[#0B0E14] border border-[#262C38] rounded-xl p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-[#262C38] pb-3">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-cyan-400" />
                      <h3 className="text-base font-bold text-white font-['Titillium_Web'] uppercase">
                        Circuit Country Participation
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-[#E10600] bg-red-950/40 px-2 py-0.5 rounded border border-red-800/40">
                      Bahrain: 2,168 Records
                    </span>
                  </div>

                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5 pt-1">
                    {CIRCUIT_LOGS.slice(0, 8).map((c) => (
                      <div key={c.name} className="bg-[#151921] p-2.5 rounded border border-[#262C38] text-center font-mono hover:border-[#E10600] transition-colors">
                        <div className="text-lg font-black text-white">{c.entries}</div>
                        <div className="text-[11px] font-bold text-slate-300 truncate">{c.country}</div>
                        <div className="text-[10px] text-[#94A3B8] truncate">{c.downforce} DF</div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ) : (
            /* EXACT TABLEAU PUBLIC EMBED CONTAINER FROM SPECIFICATION */
            <div className="bg-[#151921] border border-[#262C38] rounded-2xl overflow-hidden shadow-2xl p-2 sm:p-4 relative">
              <div
                className="tableauPlaceholder"
                id="viz_dashboard_container"
                ref={dashboardContainerRef}
                style={{ position: 'relative', width: '100%', minHeight: '927px' }}
              >
                <noscript>
                  <a href="#">
                    <img
                      alt="F1 Race Intelligence Dashboard"
                      src="https://public.tableau.com/static/images/F1/F1RACEINTELLIGENCEDASHBOARD/Dashboard/1_rss.png"
                      style={{ border: 'none' }}
                    />
                  </a>
                </noscript>
                
                <object className="tableauViz" style={{ display: 'none' }}>
                  <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
                  <param name="embed_code_version" value="3" />
                  <param name="site_root" value="" />
                  <param name="name" value="F1RACEINTELLIGENCEDASHBOARD/Dashboard" />
                  <param name="tabs" value="no" />
                  <param name="toolbar" value="no" />
                  <param name="showVizHome" value="no" />
                  <param name="display_count" value="yes" />
                  <param name="device" value="desktop" />
                </object>

                <iframe
                  title="F1 Race Intelligence Dashboard Frame"
                  src={dashboardUrl}
                  className="w-full border-0 rounded-xl"
                  style={{ height: '927px' }}
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          )}

        </div>
      </section>


      {/* ---------------- 7. EMBEDDED TABLEAU STORY SECTION (ID: story) ---------------- */}
      <section id="story" className="scroll-mt-24 border-b border-[#262C38] pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#262C38] pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#151921] border border-[#262C38] text-xs font-mono text-[#E10600] uppercase tracking-wider mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>7-Tab Analytical Narrative</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-['Titillium_Web'] uppercase tracking-tight">
                Formula 1 Race Intelligence: Story Narrative
              </h2>
              <p className="text-base text-[#94A3B8] mt-1 max-w-2xl font-sans">
                Step-by-step guided story narrative from global overview to championship outcomes.
              </p>
            </div>

            {/* Mode & Action Controls */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-[#151921] p-1 rounded-lg border border-[#262C38] flex items-center gap-1 text-xs font-mono">
                <button
                  onClick={() => setStoryMode('native')}
                  className={`px-3 py-1.5 rounded font-bold uppercase transition-all cursor-pointer ${
                    storyMode === 'native'
                      ? 'bg-[#E10600] text-white shadow-md shadow-red-950/50'
                      : 'text-[#94A3B8] hover:text-white'
                  }`}
                >
                  Interactive Story Player
                </button>
                <button
                  onClick={() => setStoryMode('embed')}
                  className={`px-3 py-1.5 rounded font-bold uppercase transition-all cursor-pointer ${
                    storyMode === 'embed'
                      ? 'bg-[#E10600] text-white shadow-md shadow-red-950/50'
                      : 'text-[#94A3B8] hover:text-white'
                  }`}
                >
                  Tableau Story Frame
                </button>
              </div>

              <a
                href={storyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#151921] hover:bg-[#262C38] text-white border border-[#262C38] hover:border-[#E10600] px-3.5 py-2 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span>Tableau Story</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#E10600]" />
              </a>
            </div>
          </div>

          {/* 7 Story Chapters Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {storyChapters.map((ch, idx) => (
              <button
                key={ch.num}
                onClick={() => setCurrentStoryStep(idx)}
                className={`p-3 rounded-lg text-center transition-all cursor-pointer border ${
                  currentStoryStep === idx
                    ? 'bg-[#E10600] text-white border-[#FF1801] shadow-lg shadow-red-950/50'
                    : 'bg-[#151921] border-[#262C38] text-[#94A3B8] hover:text-white hover:border-slate-500'
                }`}
              >
                <span className={`text-[10px] font-mono font-bold block ${currentStoryStep === idx ? 'text-white' : 'text-[#E10600]'}`}>
                  CHAPTER {ch.num}
                </span>
                <span className="text-xs font-bold block mt-0.5 font-['Titillium_Web'] truncate">
                  {ch.title}
                </span>
              </button>
            ))}
          </div>

          {/* STORY CONTENT: NATIVE INTERACTIVE STORY OR TABLEAU EMBED */}
          {storyMode === 'native' ? (
            <div className="bg-[#151921] border border-[#262C38] rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
              
              {/* Active Chapter Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#262C38] pb-4">
                <div>
                  <span className="text-xs font-mono text-[#E10600] uppercase tracking-wider">
                    Chapter {storyChapters[currentStoryStep].num} of 07 • Analytical Narrative
                  </span>
                  <h3 className="text-2xl font-bold text-white font-['Titillium_Web'] uppercase">
                    {storyChapters[currentStoryStep].title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] font-sans mt-0.5">
                    {storyChapters[currentStoryStep].subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    disabled={currentStoryStep === 0}
                    onClick={() => setCurrentStoryStep(currentStoryStep - 1)}
                    className="bg-[#0B0E14] hover:bg-[#262C38] disabled:opacity-40 disabled:cursor-not-allowed text-white px-3 py-1.5 rounded border border-[#262C38] text-xs font-mono"
                  >
                    Previous
                  </button>
                  <button
                    disabled={currentStoryStep === storyChapters.length - 1}
                    onClick={() => setCurrentStoryStep(currentStoryStep + 1)}
                    className="bg-[#E10600] hover:bg-[#FF1801] disabled:opacity-40 disabled:cursor-not-allowed text-white px-3.5 py-1.5 rounded text-xs font-mono font-bold flex items-center gap-1"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Narrative Callout */}
              <div className="bg-[#0B0E14] p-4 rounded-xl border border-[#262C38] flex items-start gap-3">
                <Play className="w-5 h-5 text-[#E10600] shrink-0 mt-0.5" />
                <p className="text-sm text-slate-200 leading-relaxed font-sans italic">
                  "{storyChapters[currentStoryStep].insight}"
                </p>
              </div>

              {/* Interactive Telemetry Visual for Current Step */}
              <div className="bg-[#0B0E14] p-6 rounded-xl border border-[#262C38] min-h-[300px] flex flex-col justify-center">
                {currentStoryStep === 0 && (
                  <div className="space-y-4">
                    <div className="text-xs font-mono text-[#94A3B8] uppercase">
                      Top 6 Host Country Representation (Total 13 Mapped):
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono">
                      {GLOBAL_DRIVER_DISTRIBUTION.slice(0, 6).map((c) => (
                        <div key={c.country} className="bg-[#151921] p-3 rounded text-center border border-[#262C38]">
                          <span className="text-xl font-bold text-white">{c.points}</span>
                          <span className="text-xs text-slate-300 block">{c.country}</span>
                          <span className="text-[10px] text-cyan-400">Code: {c.code}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentStoryStep === 1 && (
                  <div className="space-y-4 font-mono">
                    <div className="text-xs text-[#94A3B8] uppercase">
                      Career Points Gap Breakdown (Hamilton vs Verstappen):
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-[#151921] p-4 rounded-lg border border-[#00D2BE]/40 space-y-2">
                        <span className="text-xs text-[#00D2BE] font-bold">Lewis Hamilton</span>
                        <div className="text-3xl font-black text-white">31,147 pts</div>
                        <div className="text-xs text-slate-400">P1 Leader • 197 Podiums</div>
                      </div>
                      <div className="bg-[#151921] p-4 rounded-lg border border-[#3671C6]/40 space-y-2">
                        <span className="text-xs text-[#3671C6] font-bold">Max Verstappen</span>
                        <div className="text-3xl font-black text-white">31,126 pts</div>
                        <div className="text-xs text-amber-400">Delta -21 pts • 111 Podiums</div>
                      </div>
                    </div>
                  </div>
                )}

                {currentStoryStep === 2 && (
                  <div className="space-y-3 font-mono">
                    <div className="text-xs text-[#94A3B8] uppercase">
                      Top Constructor Points Comparison:
                    </div>
                    {CONSTRUCTORS.slice(0, 4).map((c) => (
                      <div key={c.name} className="flex items-center justify-between bg-[#151921] p-3 rounded border border-[#262C38] text-xs">
                        <span className="text-white font-bold">{c.name}</span>
                        <span className="text-emerald-400 font-bold">{c.leadPoints.toLocaleString()} pts Lead</span>
                      </div>
                    ))}
                  </div>
                )}

                {currentStoryStep === 3 && (
                  <div className="space-y-4">
                    <div className="text-xs font-mono text-[#94A3B8] uppercase">
                      Pirelli Compound Allocation Breakdown:
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {TYRE_COMPOUNDS.map((t) => (
                        <div key={t.compound} className="bg-[#151921] p-4 rounded text-center border border-[#262C38] font-mono">
                          <div className="text-2xl font-black" style={{ color: t.color }}>{t.share}%</div>
                          <div className="text-xs text-white font-bold">{t.compound.split(' ')[0]}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentStoryStep >= 4 && (
                  <div className="text-center py-6 space-y-3">
                    <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                      Telemetry Record Validated
                    </div>
                    <h4 className="text-xl font-bold text-white font-['Titillium_Web'] uppercase">
                      {storyChapters[currentStoryStep].title}
                    </h4>
                    <p className="text-xs text-[#94A3B8] max-w-lg mx-auto font-sans">
                      All data points verified against the 6,464 individual race outcome dataset across 17 seasons.
                    </p>
                  </div>
                )}
              </div>

            </div>
          ) : (
            /* EXACT TABLEAU PUBLIC STORY EMBED CONTAINER FROM SPECIFICATION */
            <div className="bg-[#151921] border border-[#262C38] rounded-2xl overflow-hidden shadow-2xl p-2 sm:p-4 relative">
              <div
                className="tableauPlaceholder"
                id="viz_story_container"
                ref={storyContainerRef}
                style={{ position: 'relative', width: '100%', minHeight: '927px' }}
              >
                <noscript>
                  <a href="#">
                    <img
                      alt="F1 Race Intelligence Story"
                      src="https://public.tableau.com/static/images/F1/F1RACEStory/Story1/1_rss.png"
                      style={{ border: 'none' }}
                    />
                  </a>
                </noscript>
                
                <object className="tableauViz" style={{ display: 'none' }}>
                  <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
                  <param name="embed_code_version" value="3" />
                  <param name="site_root" value="" />
                  <param name="name" value="F1RACEStory/Story1" />
                  <param name="tabs" value="no" />
                  <param name="toolbar" value="no" />
                  <param name="showVizHome" value="no" />
                  <param name="display_count" value="yes" />
                  <param name="device" value="desktop" />
                </object>

                <iframe
                  title="F1 Race Intelligence Story Frame"
                  src={storyUrl}
                  className="w-full border-0 rounded-xl"
                  style={{ height: '927px' }}
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
};
