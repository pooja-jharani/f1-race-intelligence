import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatStrips } from './components/StatStrips';
import { ProjectOverview } from './components/ProjectOverview';
import { IntelligenceDimensions } from './components/IntelligenceDimensions';
import { TableauEmbeds } from './components/TableauEmbeds';
import { VisualizationGallery } from './components/VisualizationGallery';
import { DriversSection } from './components/DriversSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { DownloadModal } from './components/DownloadModal';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0E14] text-white flex flex-col font-sans selection:bg-[#E10600] selection:text-white">
      {/* 1. Sticky Navigation Header */}
      <Navbar 
        onOpenContact={() => setContactModalOpen(true)}
        onOpenDownload={() => setDownloadModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenDownload={() => setDownloadModalOpen(true)} />

        {/* 3. Dual Stat Counter Strips (Primary & Operational) */}
        <StatStrips />

        {/* 4. Project Overview Container (ID: project) */}
        <ProjectOverview onOpenDownload={() => setDownloadModalOpen(true)} />

        {/* 5. Live Telemetry Ticker & 6-Card Intelligence Dimensions (ID: insights) */}
        <IntelligenceDimensions />

        {/* 6 & 7. Embedded Tableau Dashboard & Story Sections (IDs: dashboard, story) */}
        <TableauEmbeds onOpenDownload={() => setDownloadModalOpen(true)} />

        {/* 8. Dashboard Visualization Catalog (ID: gallery) */}
        <VisualizationGallery />

        {/* 9. Drivers Head-to-Head & Leaderboard Section (ID: drivers) */}
        <DriversSection onOpenDownload={() => setDownloadModalOpen(true)} />
      </main>

      {/* 10. Footer Section */}
      <Footer 
        onOpenContact={() => setContactModalOpen(true)}
        onOpenDownload={() => setDownloadModalOpen(true)}
      />

      {/* Interactive Download & Export Hub Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />

      {/* Interactive Contact Modal Dialog */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
