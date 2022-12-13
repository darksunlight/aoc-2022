require("../utils");
/** @type {String} */
const input = readInput();
const lines = input.lines();
const heightmap = lines.map(x => x.split('')).flat();
const width = lines[0].length;

const queue = [];
const visited = [];
const parent = [];
visited.push(heightmap.indexOf('S'));
queue.push(heightmap.indexOf('S'));

while (queue.length > 0) {
    const node = queue.shift();
    if (node === heightmap.indexOf('E')) {
        break;
    }
    [1, -1, width, -width].filter(x => {
        return x == width || x == -width || x == 1 && (node + 1) % width !== 0 || x == -1 && node % width !== 0
    }).filter(x => {
        return typeof heightmap[node + x] !== "undefined" && (
            heightmap[node + x] !== 'E' && heightmap[node + x].charCodeAt(0) - heightmap[node].charCodeAt(0) <= 1 ||
            heightmap[node] == 'S' && heightmap[node + x] == 'a' ||
            heightmap[node] == 'z' && heightmap[node + x] == 'E'
        );
    }).map(x => {
        const next = node + x;
        if (!(visited.indexOf(next) > -1)) {
            visited.push(next);
            parent[next] = node;
            queue.push(next);
        }
    })
}
console.log(visited, "visited")
const s = [];
let i = heightmap.indexOf('E');
if (parent[i]) {
    while (i) {
        s.push(i);
        i = parent[i];
    }
}
console.log(s.reverse(), "size", s.length - 1);
console.log(heightmap.map((x, i) => {
    if (s.includes(i)) return "\x1b[43m" + x + "\x1b[0m";
    if (!visited.includes(i)) return "\x1b[41m" + x + "\x1b[0m";
    return x;
}).chunks(width).map(x => x.join('')).join('\n'))
