import React, { useState } from 'react';
import { CheckCircle2, Cpu, Activity, Radio, ShieldCheck, MapPin, Gauge, Download, FileText } from 'lucide-react';
import { STAKEHOLDER_PERSONAS } from '../data/f1Data';

interface ProjectOverviewProps {
  onOpenDownload?: () => void;
}

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({ onOpenDownload }) => {
  const [selectedPersona, setSelectedPersona] = useState(0);

  const tags = [
    'Data Analytics',
    'Tableau',
    'Race Strategy',
    'Visualization',
    'Championship',
    'F1 Dataset',
  ];

  const features = [
    {
      title: 'Global Race Overview',
      desc: 'Circuit-by-circuit telemetry across 24 Grand Prix host venues.',
    },
    {
      title: 'Driver Performance Metrics',
      desc: 'Lap times, qualifying pace, race pace, overtaking deltas.',
    },
    {
      title: 'Constructor Championship Battle',
      desc: 'Team points progression and reliability models.',
    },
    {
      title: 'Pit Stop Strategy Analysis',
      desc: 'Tire degradation models and optimal stint windows.',
    },
    {
      title: 'Championship Success Forecast',
      desc: 'Historical trends and statistical probability models.',
    },
  ];

  const getPersonaIcon = (role: string) => {
    if (role.includes('Strategist')) return Activity;
    if (role.includes('Broadcast')) return Radio;
    return ShieldCheck;
  };

  return (
    <section id="project" className="py-20 bg-[#0B0E14] border-b border-[#262C38] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#262C38] pb-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#151921] border border-[#262C38] text-xs font-mono text-[#E10600] uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Architecture & Data Foundation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Titillium_Web'] uppercase tracking-tight">
              Transforming F1 Data Into <span className="text-[#E10600]">Championship Intelligence</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="text-xs text-[#94A3B8] font-mono">
              AUTHOR: GOWTHAM REDDY THUMU<br />
              STATUS: <span className="text-emerald-400 font-bold">READY FOR EVALUATION</span>
            </div>
            {onOpenDownload && (
              <button
                onClick={onOpenDownload}
                className="bg-[#151921] hover:bg-[#262C38] border border-[#262C38] hover:border-[#E10600] text-white text-xs font-mono px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#E10600]" />
                <span>Download Dossier</span>
              </button>
            )}
          </div>
        </div>

        {/* Two-Column Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative Copy, Tech Stack Tags, Checklist */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              The Formula 1 Race Intelligence analytical suite synthesizes <strong className="text-white font-semibold">17 seasons of racing telemetry (2010–2026)</strong> comprising <strong className="text-white font-semibold">6,464 race outcome logs</strong> across <strong className="text-white font-semibold">29 circuits</strong> and 10 competing constructors. Designed to transform complex raw lap telemetry and historical race logs into actionable strategic insights for team strategists, broadcast analysts, and FIA technical compliance analysts.
            </p>

            {/* Tech Stack Tags */}
            <div>
              <div className="text-xs uppercase font-mono tracking-wider text-[#94A3B8] mb-3">
                Core Analytical Tech Stack & Domains
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-md bg-[#151921] border border-[#262C38] text-xs font-mono text-slate-200 hover:border-[#E10600] hover:text-[#FF1801] transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Feature Checklist */}
            <div className="space-y-3 pt-2">
              <div className="text-xs uppercase font-mono tracking-wider text-[#94A3B8] mb-2">
                Embedded Intelligence Modules
              </div>
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 bg-[#151921]/60 border border-[#262C38] p-3.5 rounded-lg hover:border-red-900/50 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#E10600] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white font-['Titillium_Web'] tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-[#94A3B8] mt-0.5 font-sans">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Stylized SVG Race Circuit Vector Illustration */}
          <div className="lg:col-span-5">
            <div className="bg-[#151921] border border-[#262C38] rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between border-b border-[#262C38] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#E10600]" />
                  <span className="font-['Titillium_Web'] font-bold text-white uppercase text-sm">
                    Monaco GP Circuit Telemetry Map
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                  DRS ZONE ACTIVE
                </span>
              </div>

              {/* Stylized SVG Circuit Illustration */}
              <div className="relative w-full aspect-[4/3] flex items-center justify-center bg-[#0B0E14] rounded-xl border border-[#262C38] p-4">
                <svg
                  viewBox="0 0 500 380"
                  className="w-full h-full drop-shadow-[0_0_15px_rgba(225,6,0,0.3)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Subtle Grid Lines in SVG */}
                  <defs>
                    <linearGradient id="trackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E10600" />
                      <stop offset="50%" stopColor="#FF1801" />
                      <stop offset="100%" stopColor="#94A3B8" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Circuit Track Path (Monaco-inspired Grand Prix layout) */}
                  <path
                    d="M 120 70 
                       L 340 70 
                       Q 430 75 430 130 
                       Q 430 160 380 180 
                       L 320 200 
                       Q 300 210 320 240 
                       L 360 270 
                       Q 380 290 350 330 
                       Q 320 350 250 340 
                       L 150 320 
                       Q 90 300 80 240 
                       L 75 160 
                       Q 75 80 120 70 Z"
                    stroke="#1F2430"
                    strokeWidth="20"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  
                  {/* Active Racing Line */}
                  <path
                    d="M 120 70 
                       L 340 70 
                       Q 430 75 430 130 
                       Q 430 160 380 180 
                       L 320 200 
                       Q 300 210 320 240 
                       L 360 270 
                       Q 380 290 350 330 
                       Q 320 350 250 340 
                       L 150 320 
                       Q 90 300 80 240 
                       L 75 160 
                       Q 75 80 120 70 Z"
                    stroke="url(#trackGrad)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#glow)"
                  />

                  {/* Sector Split Markers */}
                  {/* Sector 1 (Green) */}
                  <circle cx="120" cy="70" r="7" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
                  <text x="135" y="65" fill="#10B981" fontSize="11" fontFamily="sans-serif" fontWeight="bold">S1 Start / Finish</text>

                  {/* Sainte Devote Turn 1 */}
                  <circle cx="340" cy="70" r="5" fill="#EAB308" />
                  <text x="350" y="60" fill="#CBD5E1" fontSize="9" fontFamily="sans-serif">T1 Sainte Devote</text>

                  {/* Massenet / Casino Square */}
                  <circle cx="430" cy="130" r="5" fill="#EF4444" />
                  <text x="375" y="125" fill="#CBD5E1" fontSize="9" fontFamily="sans-serif">Casino Square</text>

                  {/* Mirabeau & Hairpin */}
                  <circle cx="320" cy="240" r="6" fill="#A855F7" />
                  <text x="235" y="235" fill="#A855F7" fontSize="10" fontFamily="sans-serif" fontWeight="bold">S2 Grand Hotel Hairpin</text>

                  {/* Tunnel High Speed Sector */}
                  <line x1="320" y1="200" x2="380" y2="180" stroke="#00D2BE" strokeWidth="4" strokeDasharray="3 3" />
                  <text x="360" y="215" fill="#00D2BE" fontSize="9" fontFamily="sans-serif">DRS Tunnel</text>

                  {/* Swimming Pool Chicane */}
                  <circle cx="250" cy="340" r="5" fill="#EAB308" />
                  <text x="210" y="365" fill="#CBD5E1" fontSize="9" fontFamily="sans-serif">Swimming Pool</text>

                  {/* Rascasse */}
                  <circle cx="80" cy="240" r="6" fill="#3B82F6" />
                  <text x="15" y="260" fill="#3B82F6" fontSize="10" fontFamily="sans-serif" fontWeight="bold">S3 La Rascasse</text>

                  {/* Telemetry Position Markers for Hamilton & Verstappen */}
                  <g>
                    {/* HAM car pin */}
                    <circle cx="280" cy="70" r="9" fill="#00D2BE" stroke="#FFFFFF" strokeWidth="2" />
                    <text x="274" y="74" fill="#000" fontSize="10" fontWeight="900" fontFamily="sans-serif">44</text>
                  </g>
                  <g>
                    {/* VER car pin */}
                    <circle cx="255" cy="70" r="9" fill="#3671C6" stroke="#FFFFFF" strokeWidth="2" />
                    <text x="252" y="74" fill="#FFF" fontSize="10" fontWeight="900" fontFamily="sans-serif">1</text>
                  </g>
                </svg>
              </div>

              {/* Graphic Legend */}
              <div className="grid grid-cols-2 gap-2 mt-4 text-[11px] font-mono text-[#94A3B8] border-t border-[#262C38] pt-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
                  <span>Sector 1 (Telemetry Delta -0.015s)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#A855F7]"></span>
                  <span>Sector 2 (Hairpin Technical)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00D2BE]"></span>
                  <span>Lewis Hamilton (#44)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3671C6]"></span>
                  <span>Max Verstappen (#1)</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stakeholder Personas Interactive Alignment Strip */}
        <div className="bg-[#151921] border border-[#262C38] rounded-xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#262C38] pb-5 mb-6">
            <div>
              <span className="text-xs font-mono text-[#E10600] uppercase tracking-wider block">
                Domain Utility
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-['Titillium_Web'] uppercase">
                Stakeholder Use-Case Alignment
              </h3>
            </div>
            {/* Persona Switcher Tabs */}
            <div className="flex flex-wrap gap-2">
              {STAKEHOLDER_PERSONAS.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPersona(idx)}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedPersona === idx
                      ? 'bg-[#E10600] text-white shadow-md shadow-red-900/40'
                      : 'bg-[#0B0E14] text-[#94A3B8] hover:text-white border border-[#262C38]'
                  }`}
                >
                  {p.role.split(' ')[0]} {p.role.split(' ')[1]}
                </button>
              ))}
            </div>
          </div>

          {/* Active Persona Details */}
          {(() => {
            const persona = STAKEHOLDER_PERSONAS[selectedPersona];
            const Icon = getPersonaIcon(persona.role);
            return (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#0B0E14] border border-[#262C38] rounded-lg text-[#E10600]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white font-['Titillium_Web']">
                        {persona.role}
                      </h4>
                      <span className="text-xs text-emerald-400 font-mono">
                        Target Objective: {persona.goal}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed italic bg-[#0B0E14] p-4 rounded-lg border border-[#262C38]/80">
                    "{persona.quote}"
                  </p>
                </div>

                <div className="md:col-span-4 bg-[#0B0E14] p-4 rounded-lg border border-[#262C38] space-y-2">
                  <div className="text-[11px] font-mono text-[#94A3B8] uppercase">
                    Primary Decision KPIs
                  </div>
                  {persona.kpis.map((kpi, kIdx) => (
                    <div
                      key={kIdx}
                      className="flex items-center justify-between text-xs font-mono bg-[#151921] px-3 py-2 rounded border border-[#262C38]/60"
                    >
                      <span className="text-white font-semibold">{kpi}</span>
                      <span className="text-[#E10600]">ACTIVE</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>

      </div>
    </section>
  );
};
