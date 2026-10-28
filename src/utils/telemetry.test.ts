import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateDriverPointsDelta,
  calculateTyreUsageTotal,
  calculateDnfBreakdown,
  formatTelemetrySpeed,
  getTopNCountries,
  computeDriverDeltaMs,
  calculateTotalConstructorPoints,
} from './telemetry';
import {
  DRIVER_LEADERBOARD,
  TYRE_COMPOUNDS,
  GLOBAL_DRIVER_DISTRIBUTION,
  CONSTRUCTORS,
} from '../data/f1Data';

test('Hamilton and Verstappen points delta matches specification', () => {
  const hamilton = DRIVER_LEADERBOARD.find(d => d.name === 'Lewis Hamilton')!;
  const verstappen = DRIVER_LEADERBOARD.find(d => d.name === 'Max Verstappen')!;

  assert.equal(hamilton.points, 31147);
  assert.equal(verstappen.points, 31126);

  const delta = calculateDriverPointsDelta(hamilton, verstappen);
  assert.equal(delta.leader, 'Lewis Hamilton');
  assert.equal(delta.gap, 21);
});

test('Tyre compound distribution sums to exactly 100%', () => {
  const total = calculateTyreUsageTotal(TYRE_COMPOUNDS);
  assert.equal(total, 100);
});

test('DNF breakdown computes accurate mechanical vs collision proportions', () => {
  const verstappen = DRIVER_LEADERBOARD.find(d => d.name === 'Max Verstappen')!;
  const breakdown = calculateDnfBreakdown(verstappen);
  
  // engine: 11, mechanical: 9, brakes: 3 (23 mechanical) + collision: 16 (total 39)
  assert.equal(breakdown.total, 39);
  assert.equal(breakdown.mechanicalRatio + breakdown.collisionRatio, 100);
});

test('Speed conversion handles km/h and mph', () => {
  assert.equal(formatTelemetrySpeed(372, 'km/h'), '372 km/h');
  assert.equal(formatTelemetrySpeed(372, 'mph'), '231.2 mph');
});

test('Top N countries returns correctly sorted slice', () => {
  const top3 = getTopNCountries(GLOBAL_DRIVER_DISTRIBUTION, 3);
  assert.equal(top3.length, 3);
  assert.equal(top3[0].country, 'USA');
  assert.equal(top3[0].points, 400);
});

test('Constructor points aggregation', () => {
  const total = calculateTotalConstructorPoints(CONSTRUCTORS);
  assert.ok(total > 50000);
});

test('Driver delta ms formatting', () => {
  assert.equal(computeDriverDeltaMs(0.045), '+45 ms');
  assert.equal(computeDriverDeltaMs(-0.020), '-20 ms');
});
