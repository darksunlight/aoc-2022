require("../utils");
/** @type {String} */
const input = readInput();
const pairs = input.lines().map(l => l.split(': closest beacon is at ').map(x => x.match(/x=(-?\d+), y=(-?\d+)$/).slice(1, 3).map(d => +d)));

const beaconsSet = [...new Set(pairs.map(p => `${p[1][0]},${p[1][1]}`))].map(x => x.split(',').map(d => +d));

function manhattan([x1, y1], [x2, y2]) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

function noBeaconAtY(y, src, beacon) {
    const md = manhattan(src, beacon);
    if ((src[1] < y && src[1] + md < y) || (src[1] > y && src[1] - md > y)) {
        return false;
    }
    const range = md - Math.abs(src[1] - y);
    return [src[0] - range, src[0] + range];
}

const requiredY = 2_000_000;
const noBeaconAtRangesX = pairs.map(([sensor, beacon]) => noBeaconAtY(requiredY, sensor, beacon)).filter(x => x);
print(noBeaconAtRangesX.map(x => x[1]).max() - noBeaconAtRangesX.map(x => x[0]).min() + 1 - beaconsSet.filter(x => x[1] === requiredY).length);
// turns out my initial assumption was probably true, that the whole range is continuous
// since the input is probably chosen to not have a gap in 2000000 o/w part 2 would be trivial
