import React, { useState } from 'react';
import { Menu, X, Shield, ChevronRight, Download } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenDownload: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenDownload }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', href: '#' },
    { label: 'PROJECT', href: '#project' },
    { label: 'DASHBOARD', href: '#dashboard' },
    { label: 'STORY', href: '#story' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'INSIGHTS', href: '#insights' },
    { label: 'DRIVERS', href: '#drivers' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#151921] border-b border-[#262C38] backdrop-blur-md bg-opacity-95 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left Branding */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#E10600] rounded">
          <div className="bg-[#E10600] text-white font-extrabold italic px-2.5 py-1 rounded text-lg tracking-wider shadow-md shadow-red-950/40 transform -skew-x-12 group-hover:bg-[#FF1801] transition-colors">
            F1
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold tracking-widest text-base sm:text-lg font-['Titillium_Web'] uppercase">
              RACE INTELLIGENCE
            </span>
            <span className="text-xs text-[#94A3B8] font-mono tracking-wider -mt-1 hidden sm:block">
              17 SEASONS (2010–2026) | 6,464 LOGS
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#94A3B8] hover:text-[#FF1801] hover:text-red-500 font-semibold text-xs tracking-wider uppercase px-3 py-2 rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Prominent Download Button */}
          <button
            onClick={onOpenDownload}
            aria-label="Download project dossier and datasets"
            className="bg-[#0B0E14] hover:bg-[#262C38] text-white hover:text-[#FF1801] border border-[#262C38] hover:border-[#E10600] font-bold text-xs uppercase tracking-wider px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer shadow-sm group"
          >
            <Download className="w-3.5 h-3.5 text-[#E10600] group-hover:scale-110 transition-transform" />
            <span className="hidden xs:inline sm:inline">DOWNLOAD</span>
          </button>

          <button
            onClick={onOpenContact}
            aria-label="Open contact form"
            className="bg-[#E10600] hover:bg-[#FF1801] text-white font-bold text-xs uppercase tracking-wider px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-lg shadow-red-900/40 hover:shadow-red-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>CONTACT</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#94A3B8] hover:text-white hover:bg-[#262C38] rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#E10600]"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#151921] border-b border-[#262C38] px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="block text-[#94A3B8] hover:text-white hover:bg-[#262C38] px-3 py-2 rounded-md text-sm font-semibold tracking-wider transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-2 border-t border-[#262C38] space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownload();
              }}
              className="w-full bg-[#0B0E14] hover:bg-[#262C38] text-white border border-[#E10600] font-bold text-xs uppercase tracking-wider py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#E10600]" />
              <span>DOWNLOAD DOSSIER & DATASETS</span>
            </button>

            <div className="flex items-center justify-between text-xs text-[#94A3B8] px-1 pt-1">
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-[#E10600]" />
                Tableau Public Verified
              </span>
              <span>Author: Gowtham reddy Thumu</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
