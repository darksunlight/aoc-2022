require("../utils");
/** @type {String} */
const input = readInput();
const lines = input.lines().map(x => x.split(' -> ').map(c => c.split(',').map(x => +x)).windowed(2)).flat();
const occupied = new Set();
lines.map(([start, end]) => {
    const [sx, sy] = start;
    const [ex, ey] = end;
    if (sx == ex) {
        for (let i = [sy, ey].min(); i <= [sy, ey].max(); i++) {
            occupied.add(`${sx},${i}`);
        }
    } else {
        for (let i = [sx, ex].min(); i <= [sx, ex].max(); i++) {
            occupied.add(`${i},${sy}`);
        }
    }
});
const maxDepth = [...occupied.values()].map(x => +x.split(',')[1]).max();
let sand = [500, 0];
let count = 0;
while (sand[1] <= maxDepth) {
    if ([`${sand[0]},${sand[1] + 1}`, `${sand[0] - 1},${sand[1] + 1}`, `${sand[0] + 1},${sand[1] + 1}`].every(x => occupied.has(x))) {
        count++;
        occupied.add(`${sand[0]},${sand[1]}`);
        sand = [500, 0];
        continue;
    }
    if (occupied.has(`${sand[0]},${sand[1] + 1}`)) { // down occupied
        if (occupied.has(`${sand[0] - 1},${sand[1] + 1}`)) { // down-left occupied
            sand[0]++;
        } else {
            sand[0]--;
        }
    }
    sand[1]++;
}
print(count);
