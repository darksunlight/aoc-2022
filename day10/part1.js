require("../utils");
const input = readInput().lines();
let x = 1;
let sum = 0;
let cycle = 1;
input.forEach(line => {
    if (line == "noop") {
        if ((cycle - 20) % 40 === 0) {
            sum += x * cycle;
        }
        return cycle++;
    }
    const [, inc] = line.split(' ').map(x => +x);
    if ((cycle - 20) % 40 === 0) {
        sum += x * cycle;
    }
    cycle++;
    if ((cycle - 20) % 40 === 0) {
        sum += x * cycle;
    }
    cycle++;
    x += inc;
});
console.log(sum);
