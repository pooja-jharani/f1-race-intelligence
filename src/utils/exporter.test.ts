import test from 'node:test';
import assert from 'node:assert/strict';
import { 
  DRIVER_LEADERBOARD, 
  CONSTRUCTORS, 
  CIRCUIT_LOGS, 
  TYRE_COMPOUNDS 
} from '../data/f1Data';

test('Driver dataset has complete telemetry data for export', () => {
  assert.equal(DRIVER_LEADERBOARD.length, 8);
  const ham = DRIVER_LEADERBOARD[0];
  assert.equal(ham.name, 'Lewis Hamilton');
  assert.equal(ham.points, 31147);
  assert.ok(ham.totalDnfs > 0);
  assert.ok(ham.reliabilityScore > 80);
});

test('Constructors dataset has required team metrics', () => {
  assert.equal(CONSTRUCTORS.length, 10);
  assert.equal(CONSTRUCTORS[0].name, 'Red Bull Racing');
  assert.equal(CONSTRUCTORS[0].leadPoints, 8006);
});

test('Circuits dataset has 12 detailed venue profiles', () => {
  assert.equal(CIRCUIT_LOGS.length, 12);
  const bahrain = CIRCUIT_LOGS[0];
  assert.equal(bahrain.name, 'Bahrain International Circuit');
  assert.equal(bahrain.entries, 2168);
});

test('Tyre compounds has 4 category allocations summing to 100%', () => {
  assert.equal(TYRE_COMPOUNDS.length, 4);
  const totalShare = TYRE_COMPOUNDS.reduce((acc, t) => acc + t.share, 0);
  assert.equal(Math.round(totalShare), 100);
});
