require("../utils");
const input = readInput();
const scores = {
    X: 1,
    Y: 2,
    Z: 3
}
let score = 0;
input.split('\n').forEach(line => {
    const [o, p] = line.split(" ").map(x => x.toInt());
    const diff = 'X'.toInt() - 'A'.toInt();
    if (o == p - diff) {
        score += 3 + scores[p.toChar()];
    } else if (o == p - 1 - diff || o == p + 2 - diff) {
        score += 6 + scores[p.toChar()];
    } else {
        score += scores[p.toChar()];
    }
});
print(score);