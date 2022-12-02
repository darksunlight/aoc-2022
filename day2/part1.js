require("../utils");
const input = readInput();
let score = 0;
input.split('\n').forEach(line => {
    const [o, p] = line.split(" ").map(x => x.toInt());
    const diff = 'X'.toInt() - 'A'.toInt();
    const scoreDiff = 'X'.toInt() - 1;
    score += p - scoreDiff;
    if (o == p - diff) { // draw
        score += 3;
    } else if (o == p - 1 - diff || o == p + 2 - diff) { // win
        score += 6;
    }
});
print(score);