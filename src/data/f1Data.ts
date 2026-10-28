export interface DriverStat {
  name: string;
  shortName: string;
  team: string;
  country: string;
  points: number;
  dnfs: {
    engine: number;
    mechanical: number;
    brakes: number;
    collision: number;
  };
  totalDnfs: number;
  podiums: number;
  topSpeed: number; // km/h
  avgQualiDelta: number; // ms vs pole
  reliabilityScore: number; // percentage
  avatarColor: string;
}

export interface ConstructorStat {
  name: string;
  leadPoints: number;
  totalPoints: number;
  titles: number;
  podiums: number;
  color: string;
  activeSince: string;
}

export interface CircuitData {
  name: string;
  country: string;
  entries: number;
  lengthKm: number;
  turns: number;
  lapRecord: string;
  downforce: 'High' | 'Medium' | 'Low';
  type: 'Street' | 'Permanent' | 'Hybrid';
}

export interface TyreCompoundShare {
  compound: string;
  share: number;
  color: string;
  optimalStintLaps: string;
  degradationRate: 'Very High' | 'High' | 'Moderate' | 'Low';
}

export interface CountryDriverDistribution {
  country: string;
  points: number;
  code: string;
}

export const DRIVER_LEADERBOARD: DriverStat[] = [
  {
    name: 'Lewis Hamilton',
    shortName: 'HAM',
    team: 'Ferrari / Mercedes',
    country: 'United Kingdom',
    points: 31147,
    dnfs: { engine: 8, mechanical: 12, brakes: 4, collision: 14 },
    totalDnfs: 38,
    podiums: 197,
    topSpeed: 368.5,
    avgQualiDelta: 0.082,
    reliabilityScore: 94.2,
    avatarColor: '#00D2BE',
  },
  {
    name: 'Max Verstappen',
    shortName: 'VER',
    team: 'Red Bull Racing',
    country: 'Netherlands',
    points: 31126,
    dnfs: { engine: 11, mechanical: 9, brakes: 3, collision: 16 },
    totalDnfs: 39,
    podiums: 111,
    topSpeed: 372.6,
    avgQualiDelta: 0.045,
    reliabilityScore: 93.8,
    avatarColor: '#3671C6',
  },
  {
    name: 'Charles Leclerc',
    shortName: 'LEC',
    team: 'Ferrari',
    country: 'Monaco',
    points: 27673,
    dnfs: { engine: 14, mechanical: 11, brakes: 2, collision: 13 },
    totalDnfs: 40,
    podiums: 42,
    topSpeed: 369.2,
    avgQualiDelta: 0.071,
    reliabilityScore: 91.5,
    avatarColor: '#E8002D',
  },
  {
    name: 'Lando Norris',
    shortName: 'NOR',
    team: 'McLaren',
    country: 'United Kingdom',
    points: 26408,
    dnfs: { engine: 6, mechanical: 7, brakes: 3, collision: 9 },
    totalDnfs: 25,
    podiums: 30,
    topSpeed: 367.8,
    avgQualiDelta: 0.098,
    reliabilityScore: 95.1,
    avatarColor: '#FF8000',
  },
  {
    name: 'Yuki Tsunoda',
    shortName: 'TSU',
    team: 'RB (AlphaTauri)',
    country: 'Japan',
    points: 14438,
    dnfs: { engine: 9, mechanical: 8, brakes: 5, collision: 18 },
    totalDnfs: 40,
    podiums: 3,
    topSpeed: 363.4,
    avgQualiDelta: 0.384,
    reliabilityScore: 88.6,
    avatarColor: '#6692FF',
  },
  {
    name: 'Esteban Ocon',
    shortName: 'OCO',
    team: 'Alpine / Haas',
    country: 'France',
    points: 14205,
    dnfs: { engine: 10, mechanical: 13, brakes: 4, collision: 15 },
    totalDnfs: 42,
    podiums: 4,
    topSpeed: 364.1,
    avgQualiDelta: 0.342,
    reliabilityScore: 89.1,
    avatarColor: '#0093CC',
  },
  {
    name: 'Carlos Sainz',
    shortName: 'SAI',
    team: 'Williams / Ferrari',
    country: 'Spain',
    points: 11004,
    dnfs: { engine: 12, mechanical: 10, brakes: 3, collision: 17 },
    totalDnfs: 42,
    podiums: 26,
    topSpeed: 366.9,
    avgQualiDelta: 0.165,
    reliabilityScore: 90.7,
    avatarColor: '#005AFF',
  },
  {
    name: 'Fernando Alonso',
    shortName: 'ALO',
    team: 'Aston Martin',
    country: 'Spain',
    points: 1353,
    dnfs: { engine: 28, mechanical: 22, brakes: 7, collision: 21 },
    totalDnfs: 78,
    podiums: 106,
    topSpeed: 365.4,
    avgQualiDelta: 0.188,
    reliabilityScore: 87.4,
    avatarColor: '#229971',
  },
];

export const CONSTRUCTORS: ConstructorStat[] = [
  { name: 'Red Bull Racing', leadPoints: 8006, totalPoints: 12450, titles: 6, podiums: 281, color: '#3671C6', activeSince: '2005' },
  { name: 'Mercedes-AMG', leadPoints: 6720, totalPoints: 11980, titles: 8, podiums: 292, color: '#00D2BE', activeSince: '2010' },
  { name: 'Scuderia Ferrari', leadPoints: 6150, totalPoints: 11210, titles: 16, podiums: 812, color: '#E8002D', activeSince: '1950' },
  { name: 'McLaren', leadPoints: 5410, totalPoints: 9450, titles: 8, podiums: 520, color: '#FF8000', activeSince: '1966' },
  { name: 'Aston Martin', leadPoints: 3200, totalPoints: 4890, titles: 0, podiums: 18, color: '#229971', activeSince: '2021' },
  { name: 'Alpine', leadPoints: 2980, totalPoints: 4410, titles: 2, podiums: 22, color: '#0093CC', activeSince: '2021' },
  { name: 'Williams', leadPoints: 2450, totalPoints: 3750, titles: 9, podiums: 313, color: '#005AFF', activeSince: '1977' },
  { name: 'RB (AlphaTauri)', leadPoints: 1980, totalPoints: 2870, titles: 0, podiums: 6, color: '#6692FF', activeSince: '2006' },
  { name: 'Haas F1 Team', leadPoints: 1420, totalPoints: 2120, titles: 0, podiums: 0, color: '#B6BABD', activeSince: '2016' },
  { name: 'Kick Sauber', leadPoints: 1150, totalPoints: 1850, titles: 0, podiums: 27, color: '#52E252', activeSince: '1993' },
];

export const TYRE_COMPOUNDS: TyreCompoundShare[] = [
  { compound: 'Soft (C4-C5)', share: 31.52, color: '#EF4444', optimalStintLaps: '12 - 18 laps', degradationRate: 'Very High' },
  { compound: 'Medium (C2-C3)', share: 30.78, color: '#EAB308', optimalStintLaps: '22 - 30 laps', degradationRate: 'Moderate' },
  { compound: 'Hard (C0-C1)', share: 30.36, color: '#E2E8F0', optimalStintLaps: '32 - 45 laps', degradationRate: 'Low' },
  { compound: 'Intermediate / Wet', share: 7.34, color: '#10B981', optimalStintLaps: 'Variable by rain intensity', degradationRate: 'High' },
];

export const GLOBAL_DRIVER_DISTRIBUTION: CountryDriverDistribution[] = [
  { country: 'USA', points: 400, code: 'US' },
  { country: 'Spain', points: 328, code: 'ES' },
  { country: 'Monaco', points: 328, code: 'MC' },
  { country: 'Canada', points: 308, code: 'CA' },
  { country: 'Brazil', points: 308, code: 'BR' },
  { country: 'Singapore', points: 288, code: 'SG' },
  { country: 'Mexico', points: 160, code: 'MX' },
  { country: 'Japan', points: 140, code: 'JP' },
  { country: 'Netherlands', points: 140, code: 'NL' },
  { country: 'Saudi Arabia', points: 140, code: 'SA' },
  { country: 'Azerbaijan', points: 140, code: 'AZ' },
  { country: 'Australia', points: 140, code: 'AU' },
  { country: 'China', points: 40, code: 'CN' },
];

export const CIRCUIT_LOGS: CircuitData[] = [
  { name: 'Bahrain International Circuit', country: 'Bahrain', entries: 2168, lengthKm: 5.412, turns: 15, lapRecord: '1:31.447 (De la Rosa)', downforce: 'Medium', type: 'Permanent' },
  { name: 'Circuit of the Americas', country: 'USA', entries: 400, lengthKm: 5.513, turns: 20, lapRecord: '1:36.169 (Leclerc)', downforce: 'High', type: 'Permanent' },
  { name: 'Hungaroring', country: 'Hungary', entries: 328, lengthKm: 4.381, turns: 14, lapRecord: '1:16.627 (Hamilton)', downforce: 'High', type: 'Permanent' },
  { name: 'Circuit de Monaco', country: 'Monaco', entries: 328, lengthKm: 3.337, turns: 19, lapRecord: '1:12.909 (Hamilton)', downforce: 'High', type: 'Street' },
  { name: 'Circuit de Barcelona-Catalunya', country: 'Spain', entries: 328, lengthKm: 4.657, turns: 14, lapRecord: '1:16.330 (Verstappen)', downforce: 'High', type: 'Permanent' },
  { name: 'Autódromo José Carlos Pace (Interlagos)', country: 'Brazil', entries: 308, lengthKm: 4.309, turns: 15, lapRecord: '1:10.540 (Bottas)', downforce: 'Medium', type: 'Permanent' },
  { name: 'Circuit Gilles Villeneuve', country: 'Canada', entries: 308, lengthKm: 4.361, turns: 14, lapRecord: '1:13.078 (Bottas)', downforce: 'Low', type: 'Hybrid' },
  { name: 'Yas Marina Circuit', country: 'UAE', entries: 308, lengthKm: 5.281, turns: 16, lapRecord: '1:26.103 (Verstappen)', downforce: 'Medium', type: 'Permanent' },
  { name: 'Marina Bay Street Circuit', country: 'Singapore', entries: 288, lengthKm: 4.940, turns: 19, lapRecord: '1:35.867 (Ricciardo)', downforce: 'High', type: 'Street' },
  { name: 'Autodromo Nazionale Monza', country: 'Italy', entries: 240, lengthKm: 5.793, turns: 11, lapRecord: '1:21.046 (Barrichello)', downforce: 'Low', type: 'Permanent' },
  { name: 'Red Bull Ring', country: 'Austria', entries: 230, lengthKm: 4.318, turns: 10, lapRecord: '1:05.619 (Sainz)', downforce: 'Medium', type: 'Permanent' },
  { name: 'Silverstone Circuit', country: 'UK', entries: 225, lengthKm: 5.891, turns: 18, lapRecord: '1:27.097 (Verstappen)', downforce: 'High', type: 'Permanent' },
];

export const STAKEHOLDER_PERSONAS = [
  {
    role: 'F1 Team Performance Strategist',
    icon: 'Activity',
    goal: 'Lap Optimization & Stint Windows',
    quote: 'Benchmarks mid-tier team points trajectories against top constructors like Red Bull Racing and Mercedes, evaluates tyre compound degradation (Soft, Medium, Hard, Intermediate) across circuit types, and evaluates international driver talent pools to optimize recruitment and race strategy.',
    kpis: ['Pace Delta vs Pole', 'Undercut Likelihood', 'Degradation Cliff Lap'],
  },
  {
    role: 'Motorsport Broadcast Analyst',
    icon: 'Radio',
    goal: 'Live Storytelling & Visual Infographics',
    quote: 'Accesses real-time leaderboards, historical Grand Prix host nation data, and podium volume bubbles to construct pre-race infographics, live commentary statistics, and post-race media analysis.',
    kpis: ['Overtakes per Sector', 'Head-to-Head Deltas', 'Podium Conversion %'],
  },
  {
    role: 'FIA Technical Regulation Analyst',
    icon: 'ShieldCheck',
    goal: 'Mechanical Attrition & Parity Audits',
    quote: 'Analyzes mechanical failure patterns (engine, brake, structural) and driver reliability scores across 17 seasons to determine whether historical technical regulation iterations successfully improved car completion rates and reduced on-track collisions.',
    kpis: ['DNF Categorization', 'Engine Life Hours', 'Safety Incident Rate'],
  },
];

export const INTELLIGENCE_DIMENSIONS = [
  {
    id: 'circuits',
    title: 'Circuit Analysis',
    tag: 'Track Telemetry',
    desc: 'Track-by-track mapping of 24 Grand Prix locations comparing high-speed vs. technical downforce setups.',
    metric: '29 Circuits Mapped',
    submetric: 'Top speed 372 km/h',
    badge: 'Spatial Data',
  },
  {
    id: 'laps',
    title: 'Lap Time Breakdown',
    tag: 'Delta Timing',
    desc: 'Sector-by-sector driver telemetry delta analysis at millisecond resolution.',
    metric: '±0.045s Pole Delta',
    submetric: 'Micro-sector slicing',
    badge: 'Millisecond Precision',
  },
  {
    id: 'tyres',
    title: 'Tire Strategy',
    tag: 'Degradation Modeling',
    desc: 'Stint optimization models across 5 compound categories (Soft, Medium, Hard, Inter, Wet).',
    metric: '31.52% Soft Stint Share',
    submetric: 'C0 through C5 Pirelli',
    badge: 'Thermal Analytics',
  },
  {
    id: 'h2h',
    title: 'Driver Head-to-Head',
    tag: 'Teammate Delta',
    desc: 'Comparative performance deltas between teammates across qualifying pace, race speed, and DNF rates.',
    metric: '19 Drivers Audited',
    submetric: 'Quali vs Race Ratio',
    badge: 'Rival Benchmarking',
  },
  {
    id: 'points',
    title: 'Points Progression',
    tag: 'Championship Trajectory',
    desc: 'Season-long interactive points trajectory visualization tracing championship momentum shifts.',
    metric: 'Hamilton 31,147 pts',
    submetric: 'Verstappen 31,126 pts',
    badge: 'Championship Race',
  },
  {
    id: 'weather',
    title: 'Weather & Safety Cars',
    tag: 'Dynamic Conditions',
    desc: 'Strategic impact analysis evaluating rain transitions, Virtual Safety Cars, and full SC deployments.',
    metric: '7.34% Wet Condition Rate',
    submetric: 'VSC Pit delta -11.2s',
    badge: 'Chaos Probability',
  },
];
