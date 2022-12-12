require("../utils");
/** @type {String} */
const input = readInput();
const lines = input.lines();
const heightmap = lines.map(x => x.split('')).flat();
const width = lines[0].length;

function search(startIndex) {
    const queue = [];
    const visited = [];
    const parent = [];
    visited.push(startIndex);
    queue.push(startIndex);
    
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
    const s = [];
    let i = heightmap.indexOf('E');
    if (parent[i]) {
        while (i) {
            s.push(i);
            i = parent[i];
        }
    }
    return s.length - 1;
}
print([heightmap.indexOf('S'), ...heightmap.map((x, i) => ({ o: x == 'a', i })).filter(({o}) => o).map(x => x.i)].map(x => search(x)).filter(x => x > 0).min())