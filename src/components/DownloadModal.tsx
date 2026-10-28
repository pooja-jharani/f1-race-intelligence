import React, { useState } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  Table, 
  Database, 
  FileCode, 
  CheckCircle, 
  ExternalLink, 
  Printer, 
  ShieldCheck, 
  Layers,
  Sparkles,
  Terminal,
  Copy,
  Check
} from 'lucide-react';
import { 
  downloadOfficialPdf, 
  viewOfficialPdf, 
  downloadDriversCsv, 
  downloadConstructorsCsv, 
  downloadCircuitsCsv, 
  downloadTyreStrategyCsv, 
  downloadFullDatasetJson,
  printExecutiveReport
} from '../utils/exporter';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'datasets' | 'dossier' | 'code'>('dossier');
  const [lastDownloaded, setLastDownloaded] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (name: string, downloadFn: () => void) => {
    downloadFn();
    setLastDownloaded(name);
    setTimeout(() => {
      setLastDownloaded(null);
    }, 4000);
  };

  const copyCloneCommands = () => {
    const text = `# Run Formula 1 Race Intelligence Dashboard locally\nnpm install\nnpm run dev`;
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#151921] border border-[#262C38] rounded-2xl shadow-2xl overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#262C38] bg-[#0B0E14]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#E10600] text-white shadow-md shadow-red-950/40">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white font-['Titillium_Web'] uppercase tracking-wider">
                  Download & Export Hub
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-950/60 text-red-400 border border-red-800/40 font-bold uppercase">
                  17 Seasons Data
                </span>
              </div>
              <p className="text-xs text-[#94A3B8] font-sans">
                Export project dossiers, telemetry datasets (CSV/JSON), and printable race summaries.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#94A3B8] hover:text-white hover:bg-[#262C38] rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#262C38] bg-[#151921] px-6 text-xs font-mono">
          <button
            onClick={() => setActiveTab('dossier')}
            className={`py-3.5 px-4 font-bold uppercase tracking-wider border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'dossier'
                ? 'border-[#E10600] text-white bg-[#0B0E14]/40'
                : 'border-transparent text-[#94A3B8] hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4 text-[#E10600]" />
            <span>PDF Dossier & Executive Report</span>
          </button>

          <button
            onClick={() => setActiveTab('datasets')}
            className={`py-3.5 px-4 font-bold uppercase tracking-wider border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'datasets'
                ? 'border-[#E10600] text-white bg-[#0B0E14]/40'
                : 'border-transparent text-[#94A3B8] hover:text-white'
            }`}
          >
            <Table className="w-4 h-4 text-[#E10600]" />
            <span>Datasets (CSV & JSON)</span>
          </button>

          <button
            onClick={() => setActiveTab('code')}
            className={`py-3.5 px-4 font-bold uppercase tracking-wider border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'code'
                ? 'border-[#E10600] text-white bg-[#0B0E14]/40'
                : 'border-transparent text-[#94A3B8] hover:text-white'
            }`}
          >
            <Terminal className="w-4 h-4 text-[#E10600]" />
            <span>Project Code & Run Local</span>
          </button>
        </div>

        {/* Success toast if recently downloaded */}
        {lastDownloaded && (
          <div className="bg-emerald-950/80 border-b border-emerald-800/60 px-6 py-2 flex items-center justify-between text-xs font-mono text-emerald-300 animate-in fade-in duration-200">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Successfully triggered download: <strong>{lastDownloaded}</strong></span>
            </div>
            <span className="text-[10px] text-emerald-400/80">Saved to your downloads folder</span>
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* TAB 1: PDF Dossier & Executive Report */}
          {activeTab === 'dossier' && (
            <div className="space-y-6">
              
              {/* Highlight Card: Official Master PDF Dossier */}
              <div className="bg-[#0B0E14] border border-[#262C38] rounded-xl p-5 sm:p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#E10600]/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-800/40 text-[#E10600] shrink-0">
                      <FileText className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-2 text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Official Project Document</span>
                      </div>
                      <h4 className="text-lg font-bold text-white font-['Titillium_Web'] uppercase">
                        Formula 1 Race Intelligence Master Specification Dossier
                      </h4>
                      <p className="text-xs text-[#94A3B8] font-sans leading-relaxed max-w-xl">
                        Comprehensive master prompt specification, telemetry architectures, stakeholder user personas, Tableau visual catalog, and 17-season dataset schema definition.
                      </p>
                      <div className="flex flex-wrap items-center gap-3 pt-2 text-[11px] font-mono text-slate-300">
                        <span className="bg-[#151921] px-2.5 py-1 rounded border border-[#262C38]">PDF Document</span>
                        <span className="bg-[#151921] px-2.5 py-1 rounded border border-[#262C38]">Author: Gowtham reddy Thumu</span>
                        <span className="bg-[#151921] px-2.5 py-1 rounded border border-[#262C38]">11 Pages</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 shrink-0 sm:w-48">
                    <button
                      onClick={() => handleDownload('Formula_1_Race_Intelligence_Master_Dossier.pdf', downloadOfficialPdf)}
                      className="w-full bg-[#E10600] hover:bg-[#FF1801] text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-lg shadow-lg shadow-red-900/40 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </button>
                    <button
                      onClick={viewOfficialPdf}
                      className="w-full bg-[#151921] hover:bg-[#262C38] text-slate-200 border border-[#262C38] text-xs font-mono py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#E10600]" />
                      <span>View in Browser</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Second Card: Printable Executive Summary (Print / Save as PDF) */}
              <div className="bg-[#0B0E14] border border-[#262C38] rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#151921] border border-[#262C38] text-amber-400 shrink-0">
                    <Printer className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-['Titillium_Web'] uppercase">
                      Executive Race Intelligence Dashboard Summary
                    </h4>
                    <p className="text-xs text-[#94A3B8] font-sans mt-0.5">
                      Generate an instant, high-resolution printable report formatted for PDF saving via your browser's print dialog.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleDownload('Executive Race Summary (Print to PDF)', printExecutiveReport)}
                  className="bg-[#151921] hover:bg-[#262C38] text-white border border-[#262C38] hover:border-[#E10600] font-mono text-xs font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 cursor-pointer shrink-0 transition-colors"
                >
                  <Printer className="w-4 h-4 text-amber-400" />
                  <span>Print / Save as PDF</span>
                </button>
              </div>

            </div>
          )}

          {/* TAB 2: Datasets (CSV & JSON) */}
          {activeTab === 'datasets' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                <span>Choose a dataset to export instantly (processed client-side in seconds):</span>
                <span className="text-emerald-400">Comma-Separated Values (RFC 4180)</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* 1. Drivers Telemetry CSV */}
                <div className="bg-[#0B0E14] border border-[#262C38] rounded-xl p-4 flex flex-col justify-between hover:border-slate-500 transition-colors">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#E10600] font-bold">CSV DATASET</span>
                      <span className="text-[10px] font-mono text-slate-400">19 Drivers</span>
                    </div>
                    <h5 className="text-sm font-bold text-white font-['Titillium_Web'] uppercase">
                      Driver Telemetry & Attrition Matrix
                    </h5>
                    <p className="text-xs text-[#94A3B8] font-sans">
                      Includes Hamilton (31,147 pts), Verstappen (31,126 pts), Norris, Leclerc with engine, brake, and mechanical DNF splits.
                    </p>
                  </div>
                  <button
                    onClick={() => handleDownload('f1_drivers_telemetry_2010_2026.csv', downloadDriversCsv)}
                    className="mt-4 w-full bg-[#151921] hover:bg-[#E10600] text-white border border-[#262C38] hover:border-[#E10600] font-mono text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Drivers CSV</span>
                  </button>
                </div>

                {/* 2. Constructors Standings CSV */}
                <div className="bg-[#0B0E14] border border-[#262C38] rounded-xl p-4 flex flex-col justify-between hover:border-slate-500 transition-colors">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-cyan-400 font-bold">CSV DATASET</span>
                      <span className="text-[10px] font-mono text-slate-400">10 Teams</span>
                    </div>
                    <h5 className="text-sm font-bold text-white font-['Titillium_Web'] uppercase">
                      Constructors Championship Standings
                    </h5>
                    <p className="text-xs text-[#94A3B8] font-sans">
                      Red Bull Racing (8,006 pts lead), Mercedes-AMG, Ferrari, McLaren, Alpine, Aston Martin, Williams, and Haas.
                    </p>
                  </div>
                  <button
                    onClick={() => handleDownload('f1_constructors_championship_standings.csv', downloadConstructorsCsv)}
                    className="mt-4 w-full bg-[#151921] hover:bg-[#E10600] text-white border border-[#262C38] hover:border-[#E10600] font-mono text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Constructors CSV</span>
                  </button>
                </div>

                {/* 3. Circuits & Track Telemetry CSV */}
                <div className="bg-[#0B0E14] border border-[#262C38] rounded-xl p-4 flex flex-col justify-between hover:border-slate-500 transition-colors">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-amber-400 font-bold">CSV DATASET</span>
                      <span className="text-[10px] font-mono text-slate-400">29 Circuits</span>
                    </div>
                    <h5 className="text-sm font-bold text-white font-['Titillium_Web'] uppercase">
                      Global Circuits & Track Telemetry
                    </h5>
                    <p className="text-xs text-[#94A3B8] font-sans">
                      Bahrain (2,168 entries), Monaco, Silverstone, Monza, COTA, Interlagos downforce ratings and lap records.
                    </p>
                  </div>
                  <button
                    onClick={() => handleDownload('f1_circuits_telemetry_database.csv', downloadCircuitsCsv)}
                    className="mt-4 w-full bg-[#151921] hover:bg-[#E10600] text-white border border-[#262C38] hover:border-[#E10600] font-mono text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Circuits CSV</span>
                  </button>
                </div>

                {/* 4. Tyre Strategy Matrix CSV */}
                <div className="bg-[#0B0E14] border border-[#262C38] rounded-xl p-4 flex flex-col justify-between hover:border-slate-500 transition-colors">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-emerald-400 font-bold">CSV DATASET</span>
                      <span className="text-[10px] font-mono text-slate-400">Pirelli C0-C5</span>
                    </div>
                    <h5 className="text-sm font-bold text-white font-['Titillium_Web'] uppercase">
                      Tyre Compound Degradation Matrix
                    </h5>
                    <p className="text-xs text-[#94A3B8] font-sans">
                      Soft (31.52%), Medium (30.78%), Hard (30.36%), Intermediate degradation ratings and stint windows.
                    </p>
                  </div>
                  <button
                    onClick={() => handleDownload('f1_tyre_degradation_matrix.csv', downloadTyreStrategyCsv)}
                    className="mt-4 w-full bg-[#151921] hover:bg-[#E10600] text-white border border-[#262C38] hover:border-[#E10600] font-mono text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Tyre Strategy CSV</span>
                  </button>
                </div>

              </div>

              {/* Complete JSON Export Card */}
              <div className="bg-[#0B0E14] border border-[#262C38] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#151921] border border-[#262C38] text-purple-400">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white font-['Titillium_Web'] uppercase">
                      Complete Multi-Dimension Analytical Archive (JSON)
                    </h5>
                    <p className="text-xs text-[#94A3B8] font-sans">
                      Complete unified JSON schema containing all 6,464 log aggregates, driver data, constructors, circuits, and telemetry parameters.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleDownload('f1_race_intelligence_complete_dataset.json', downloadFullDatasetJson)}
                  className="bg-[#151921] hover:bg-purple-600 hover:text-white text-purple-300 border border-purple-800/40 font-mono text-xs py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer shrink-0"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Full JSON</span>
                </button>
              </div>

            </div>
          )}

          {/* TAB 3: Project Code & Run Local */}
          {activeTab === 'code' && (
            <div className="space-y-5">
              <div className="bg-[#0B0E14] border border-[#262C38] rounded-xl p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#E10600]" />
                    <span className="text-xs font-mono uppercase text-white font-bold">
                      Run This Application Locally
                    </span>
                  </div>
                  <button
                    onClick={copyCloneCommands}
                    className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white bg-[#151921] px-2.5 py-1 rounded border border-[#262C38] transition-colors cursor-pointer"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? 'Copied!' : 'Copy Shell'}</span>
                  </button>
                </div>

                <div className="bg-[#151921] p-4 rounded-lg font-mono text-xs text-emerald-400 border border-[#262C38] overflow-x-auto space-y-1">
                  <div className="text-slate-500"># 1. Install dependencies</div>
                  <div>npm install</div>
                  <div className="text-slate-500 pt-2"># 2. Launch Vite development server</div>
                  <div>npm run dev</div>
                  <div className="text-slate-500 pt-2"># 3. Create production bundle</div>
                  <div>npm run build</div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
                  <div className="bg-[#151921] p-3 rounded border border-[#262C38]">
                    <span className="text-[#94A3B8] block text-[10px]">FRAMEWORK</span>
                    <span className="text-white font-bold">React 19 + TypeScript</span>
                  </div>
                  <div className="bg-[#151921] p-3 rounded border border-[#262C38]">
                    <span className="text-[#94A3B8] block text-[10px]">STYLING</span>
                    <span className="text-white font-bold">Tailwind CSS v4</span>
                  </div>
                  <div className="bg-[#151921] p-3 rounded border border-[#262C38]">
                    <span className="text-[#94A3B8] block text-[10px]">EMBEDS</span>
                    <span className="text-white font-bold">Tableau Public viz_v1</span>
                  </div>
                </div>
              </div>

              {/* Tableau Public Hosted Sources */}
              <div className="bg-[#0B0E14] border border-[#262C38] rounded-xl p-5 space-y-3">
                <span className="text-xs font-mono uppercase text-[#94A3B8] block">
                  Tableau Public Direct Workbooks
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <a
                    href="https://public.tableau.com/views/F1RACEINTELLIGENCEDASHBOARD/Dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-[#151921] border border-[#262C38] hover:border-[#E10600] flex items-center justify-between text-white transition-colors"
                  >
                    <span>F1 Race Dashboard (Tableau Public)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#E10600]" />
                  </a>
                  <a
                    href="https://public.tableau.com/views/F1RACEStory/Story1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-[#151921] border border-[#262C38] hover:border-[#E10600] flex items-center justify-between text-white transition-colors"
                  >
                    <span>F1 Story Narrative (Tableau Public)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#E10600]" />
                  </a>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#262C38] bg-[#0B0E14] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#94A3B8]">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>All downloads verified against 6,464 race logs (2010–2026)</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleDownload('Formula_1_Race_Intelligence_Master_Dossier.pdf', downloadOfficialPdf)}
              className="bg-[#E10600] hover:bg-[#FF1801] text-white px-4 py-2 rounded-lg font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-md shadow-red-950/40"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Direct PDF Download</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[#151921] hover:bg-[#262C38] text-slate-300 border border-[#262C38] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
