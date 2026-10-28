import { 
  DRIVER_LEADERBOARD, 
  CONSTRUCTORS, 
  CIRCUIT_LOGS, 
  TYRE_COMPOUNDS, 
  GLOBAL_DRIVER_DISTRIBUTION 
} from '../data/f1Data';

/**
 * Triggers a file download directly in the user's browser
 */
export function triggerFileDownload(content: string, filename: string, mimeType: string = 'text/plain') {
  const blob = new Blob([content], { type: `${mimeType};charset=utf-8;` });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Downloads the official project PDF dossier
 */
export function downloadOfficialPdf() {
  const pdfUrl = '/assets/aistudio/F1_Dashboard_Website_Master_Prompt_426058a8.pdf';
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.setAttribute('download', 'Formula_1_Race_Intelligence_Master_Dossier.pdf');
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Opens the official PDF in a new browser tab
 */
export function viewOfficialPdf() {
  const pdfUrl = '/assets/aistudio/F1_Dashboard_Website_Master_Prompt_426058a8.pdf';
  window.open(pdfUrl, '_blank');
}

/**
 * Generates and downloads Driver Leaderboard & Telemetry CSV
 */
export function downloadDriversCsv() {
  const headers = [
    'Rank',
    'Driver Name',
    'Code',
    'Team',
    'Country',
    'Career Points',
    'Reliability Score (%)',
    'Podiums',
    'Top Speed (km/h)',
    'Avg Quali Delta vs Pole (s)',
    'Engine DNFs',
    'Mechanical DNFs',
    'Brake DNFs',
    'Collision DNFs',
    'Total DNFs'
  ];

  const rows = DRIVER_LEADERBOARD.map((d, index) => [
    index + 1,
    `"${d.name}"`,
    d.shortName,
    `"${d.team}"`,
    `"${d.country}"`,
    d.points,
    d.reliabilityScore,
    d.podiums,
    d.topSpeed,
    d.avgQualiDelta,
    d.dnfs.engine,
    d.dnfs.mechanical,
    d.dnfs.brakes,
    d.dnfs.collision,
    d.totalDnfs
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
  triggerFileDownload(csvContent, 'f1_drivers_telemetry_2010_2026.csv', 'text/csv');
}

/**
 * Generates and downloads Constructors Championship CSV
 */
export function downloadConstructorsCsv() {
  const headers = [
    'Rank',
    'Constructor Name',
    'Lead Points Window',
    'Aggregate Points',
    'Championship Titles',
    'Podium Count',
    'Active Since'
  ];

  const rows = CONSTRUCTORS.map((c, index) => [
    index + 1,
    `"${c.name}"`,
    c.leadPoints,
    c.totalPoints,
    c.titles,
    c.podiums,
    c.activeSince
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
  triggerFileDownload(csvContent, 'f1_constructors_championship_standings.csv', 'text/csv');
}

/**
 * Generates and downloads Circuits & Track Telemetry CSV
 */
export function downloadCircuitsCsv() {
  const headers = [
    'Circuit Name',
    'Country',
    'Race Outcome Logs',
    'Circuit Length (km)',
    'Turns',
    'Downforce Configuration',
    'Track Classification',
    'Official Lap Record'
  ];

  const rows = CIRCUIT_LOGS.map(c => [
    `"${c.name}"`,
    `"${c.country}"`,
    c.entries,
    c.lengthKm,
    c.turns,
    `"${c.downforce}"`,
    `"${c.type}"`,
    `"${c.lapRecord}"`
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
  triggerFileDownload(csvContent, 'f1_circuits_telemetry_database.csv', 'text/csv');
}

/**
 * Generates and downloads Tyre Degradation Strategy Matrix CSV
 */
export function downloadTyreStrategyCsv() {
  const headers = [
    'Tyre Compound',
    'Stint Usage Share (%)',
    'Degradation Rate',
    'Optimal Stint Window'
  ];

  const rows = TYRE_COMPOUNDS.map(t => [
    `"${t.compound}"`,
    t.share,
    `"${t.degradationRate}"`,
    `"${t.optimalStintLaps}"`
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
  triggerFileDownload(csvContent, 'f1_tyre_degradation_matrix.csv', 'text/csv');
}

/**
 * Generates and downloads complete analytical dataset in JSON
 */
export function downloadFullDatasetJson() {
  const fullData = {
    metadata: {
      title: 'Formula 1 Race Intelligence Analytical Archive',
      coverageSeasons: '2010–2026 (17 Seasons)',
      totalOutcomeLogs: 6464,
      totalCircuits: 29,
      totalConstructors: 10,
      exportTimestamp: new Date().toISOString(),
      sourceSystem: 'Tableau Public BI & F1 Race Telemetry Suite',
      author: 'Gowtham reddy Thumu'
    },
    drivers: DRIVER_LEADERBOARD,
    constructors: CONSTRUCTORS,
    circuits: CIRCUIT_LOGS,
    tyreCompounds: TYRE_COMPOUNDS,
    countryDistribution: GLOBAL_DRIVER_DISTRIBUTION
  };

  const jsonContent = JSON.stringify(fullData, null, 2);
  triggerFileDownload(jsonContent, 'f1_race_intelligence_complete_dataset.json', 'application/json');
}

/**
 * Triggers browser print dialog for printing or saving report as PDF
 */
export function printExecutiveReport() {
  window.print();
}
