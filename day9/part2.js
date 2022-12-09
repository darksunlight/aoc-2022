require("../utils");
const input = readInput().lines().map(x => [x.split(' ')[0], +x.split(' ')[1]]);

function tooFar(h, t) {
    return (h.y == t.y && Math.abs(h.x - t.x) > 1) || (h.x == t.x && Math.abs(h.y - t.y) > 1) || (Math.abs(h.x - t.x) > 1 || Math.abs(h.y - t.y) > 1);
}
const knots = [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
];
const visited = new Set();
visited.add('0,0');
input.map(line => {
    for (let i = 0; i < line[1]; i++) {
        [0,1,2,3,4,5,6,7,8,9].windowed(2).forEach(pair => {
            const head = knots[pair[0]];
            const tail = knots[pair[1]];
            if (pair[0] === 0) head['LR'.indexOf(line[0]) > -1 ? 'x' : 'y'] += 'LD'.indexOf(line[0]) > -1 ? -1 : 1;
            if (tooFar(head, tail)) {
                if (head.y !== tail.y) tail.y += head.y > tail.y ? 1 : -1;
                if (head.x !== tail.x) tail.x += head.x > tail.x ? 1 : -1;
                if (pair[1] === 9) visited.add(`${tail.x},${tail.y}`);
            }
        })
    }
});
console.log(visited.size)
