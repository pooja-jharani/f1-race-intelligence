import React from 'react';
import { ExternalLink, Github, BarChart, BookOpen, ShieldCheck, Heart, Download } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
  onOpenDownload?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onOpenDownload }) => {
  const navLinks = [
    { label: 'HOME', href: '#' },
    { label: 'PROJECT', href: '#project' },
    { label: 'DASHBOARD', href: '#dashboard' },
    { label: 'STORY', href: '#story' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'INSIGHTS', href: '#insights' },
    { label: 'DRIVERS', href: '#drivers' },
  ];

  return (
    <footer className="bg-[#151921] border-t border-[#262C38] pt-16 pb-12 text-[#94A3B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#E10600] text-white font-extrabold italic px-2.5 py-1 rounded text-lg tracking-wider shadow-md shadow-red-950/40 transform -skew-x-12">
                F1
              </div>
              <span className="text-white font-bold tracking-widest text-lg font-['Titillium_Web'] uppercase">
                RACE INTELLIGENCE
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-sm font-sans">
              An enterprise motorsport Business Intelligence platform synthesizing 17 seasons of telemetry (2010–2026), 6,464 individual race outcome logs, and 29 global circuits into strategic analytics for racing teams and broadcast analysts.
            </p>

            {/* Evaluation Submission Badge (Required by PDF page 9 & 11) */}
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#0B0E14] border border-[#262C38] text-xs font-mono text-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="text-emerald-400 font-bold block">Project Status: Ready for Evaluation</span>
                <span className="text-[11px] text-[#94A3B8]">Author: Gowtham reddy Thumu</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#FF1801] hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#E10600]">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tableau Public Direct Links & Repositories */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Tableau Public Direct Resources
            </h4>
            <div className="space-y-2.5">
              {onOpenDownload && (
                <button
                  onClick={onOpenDownload}
                  className="w-full flex items-center justify-between p-3 rounded-lg bg-[#0B0E14] border border-[#262C38] hover:border-[#E10600] text-xs font-mono text-white transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-[#E10600]" />
                    <span>Download Dossier & Datasets</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                    PDF & CSV
                  </span>
                </button>
              )}

              <a
                href="https://public.tableau.com/views/F1RACEINTELLIGENCEDASHBOARD/Dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-[#0B0E14] border border-[#262C38] hover:border-[#E10600] text-xs font-mono text-white transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <BarChart className="w-4 h-4 text-[#E10600]" />
                  <span>Interactive Dashboard Viz</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://public.tableau.com/views/F1RACEStory/Story1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-[#0B0E14] border border-[#262C38] hover:border-[#E10600] text-xs font-mono text-white transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#E10600]" />
                  <span>Story Narrative Presentation</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-[#0B0E14] border border-[#262C38] hover:border-slate-500 text-xs font-mono text-white transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-[#94A3B8]" />
                  <span>GitHub Repository</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#262C38] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]">
          <p>
            © {new Date().getFullYear()} Formula 1 Race Intelligence • Tableau Public Embedded Architecture
          </p>
          <div className="flex items-center gap-4">
            {onOpenDownload && (
              <button
                onClick={onOpenDownload}
                className="text-white hover:text-[#FF1801] font-bold transition-colors cursor-pointer flex items-center gap-1"
              >
                <Download className="w-3 h-3 text-[#E10600]" />
                <span>Download Hub</span>
              </button>
            )}
            <span>•</span>
            <button
              onClick={onOpenContact}
              className="text-[#E10600] hover:text-[#FF1801] font-bold underline transition-colors cursor-pointer"
            >
              Contact Developer
            </button>
            <span>•</span>
            <span>All F1 Trademarks Belong to Formula One Licensing B.V.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
