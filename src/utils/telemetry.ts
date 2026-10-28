import { DriverStat, ConstructorStat, TyreCompoundShare, CountryDriverDistribution } from '../data/f1Data';

/**
 * Calculates point delta between two drivers and returns leader and gap
 */
export function calculateDriverPointsDelta(
  driverA: DriverStat,
  driverB: DriverStat
): { leader: string; gap: number } {
  if (driverA.points >= driverB.points) {
    return {
      leader: driverA.name,
      gap: driverA.points - driverB.points,
    };
  }
  return {
    leader: driverB.name,
    gap: driverB.points - driverA.points,
  };
}

/**
 * Calculates tyre compound distribution total percentage (should sum to 100)
 */
export function calculateTyreUsageTotal(compounds: TyreCompoundShare[]): number {
  const sum = compounds.reduce((acc, c) => acc + c.share, 0);
  return Math.round(sum * 100) / 100;
}

/**
 * Calculates mechanical vs collision DNF ratio for a driver
 */
export function calculateDnfBreakdown(driver: DriverStat): {
  mechanicalRatio: number;
  collisionRatio: number;
  total: number;
} {
  const mechanicalTotal = driver.dnfs.engine + driver.dnfs.mechanical + driver.dnfs.brakes;
  const collisionTotal = driver.dnfs.collision;
  const total = mechanicalTotal + collisionTotal;
  
  if (total === 0) {
    return { mechanicalRatio: 0, collisionRatio: 0, total: 0 };
  }
  
  return {
    mechanicalRatio: Math.round((mechanicalTotal / total) * 1000) / 10,
    collisionRatio: Math.round((collisionTotal / total) * 1000) / 10,
    total,
  };
}

/**
 * Converts top speed between km/h and mph with formatting
 */
export function formatTelemetrySpeed(kmh: number, unit: 'km/h' | 'mph' = 'km/h'): string {
  if (unit === 'mph') {
    const mph = Math.round(kmh * 0.621371 * 10) / 10;
    return `${mph} mph`;
  }
  return `${kmh} km/h`;
}

/**
 * Aggregates points across all constructors
 */
export function calculateTotalConstructorPoints(constructors: ConstructorStat[]): number {
  return constructors.reduce((acc, c) => acc + c.totalPoints, 0);
}

/**
 * Gets top N countries by participation count
 */
export function getTopNCountries(
  countries: CountryDriverDistribution[],
  limit: number = 5
): CountryDriverDistribution[] {
  return [...countries]
    .sort((a, b) => b.points - a.points)
    .slice(0, limit);
}

/**
 * Computes driver telemetry delta comparison against pole benchmark
 */
export function computeDriverDeltaMs(driverDeltaSeconds: number): string {
  const sign = driverDeltaSeconds >= 0 ? '+' : '';
  return `${sign}${(driverDeltaSeconds * 1000).toFixed(0)} ms`;
}
