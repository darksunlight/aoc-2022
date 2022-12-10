require("../utils");
const input = readInput().lines();
let x = 1;
let cycle = 1;
let sum = 0;
input.forEach(line => {
    if ((cycle - 20) % 40 === 0) {
        sum += x * cycle;
    }
    if (line === "noop") {
        return cycle++;
    }
    const inc = +line.split(' ')[1];
    cycle++;
    if ((cycle - 20) % 40 === 0) {
        sum += x * cycle;
    }
    cycle++;
    x += inc;
});
console.log(sum);
