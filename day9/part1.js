require("../utils");
const input = readInput().lines().map(x => [x.split(' ')[0], +x.split(' ')[1]]);
function tooFar(h, t) {
    return (h.y == t.y && Math.abs(h.x - t.x) > 1) || (h.x == t.x && Math.abs(h.y - t.y) > 1) || (Math.abs(h.x - t.x) > 1 || Math.abs(h.y - t.y) > 1);
}
function getSign(t) {
    return 'LD'.indexOf(t) > -1 ? -1 : 1;
}
let head = { x: 0, y: 0 };
let tail = { x: 0, y: 0 };
const beenTo = new Set();
beenTo.add(`${tail.x},${tail.y}`);
input.map(line => {
    for (let i = 0; i < line[1]; i++) {
        head['LR'.indexOf(line[0]) > -1 ? 'x' : 'y'] += getSign(line[0]);
        if (tooFar(head, tail)) {
            if (head.y == tail.y) tail.x += head.x > tail.x ? 1 : -1;
            else if (head.x == tail.x) tail.y += head.y > tail.y ? 1 : -1;
            else {
                tail.x += head.x > tail.x ? 1 : -1;
                tail.y += head.y > tail.y ? 1 : -1;
            }
            beenTo.add(`${tail.x},${tail.y}`);
        }
    }
})
console.log([...beenTo])
console.log(beenTo.size)
