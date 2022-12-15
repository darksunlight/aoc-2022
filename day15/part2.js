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

const required = 4_000_000;
for (let y = 0; y <= required; y++) {
    const noBeaconAtRangesX = pairs.map(([sensor, beacon]) => noBeaconAtY(y, sensor, beacon)).filter(x => x).sort((a, b) => a[0] - b[0]);
    let range = Array.from(noBeaconAtRangesX[0]);
    noBeaconAtRangesX.map(([start, end]) => {
        if (start > range[1] + 1) {
            print((range[1] + 1) * 4_000_000 + y);
            process.exit(0);
        }
        if (end > range[1]) range[1] = end;
    });
}