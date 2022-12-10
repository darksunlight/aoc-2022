require("../utils");
const input = readInput().lines();
let x = 1;
let cycle = 1;
let crt = [...'.'.repeat(240)];
input.forEach(line => {
    if (line == "noop") {
        if (Math.abs((cycle - 1) % 40 - x) < 2) {
            crt[cycle - 1] = '#'
        }
        return cycle++;
    }
    const [, inc] = line.split(' ').map(x => +x);
    if (Math.abs((cycle - 1) % 40 - x) < 2) {
        crt[cycle - 1] = '#'
    }
    cycle++;
    if (Math.abs((cycle - 1) % 40 - x) < 2) {
        crt[cycle - 1] = '#'
    }
    cycle++;
    x += inc;
});
console.log(crt.chunks(40).map(x => x.join('')).join('\n'));
