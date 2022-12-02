require("../utils");
const input = readInput();
const scores = {
    A: 1,
    B: 2,
    C: 3
};
// this is the ugliest thing I've ever written please forgive me I was in a rush
const offsetLose = (x) => {
    if (x == 'A') return 'C';
    if (x == 'B') return 'A';
    return 'B';
}
const offsetWin = (x) => {
    if (x == 'A') return 'B';
    if (x == 'B') return 'C';
    return 'A';
}
let score = 0;
input.split('\n').forEach(line => {
    const [o, p] = line.split(" ");
    switch (p) {
        case 'X':
            score += scores[offsetLose(o)];
            break;
        case 'Y':
            score += 3 + scores[o];
            break;
        case 'Z':
            score += 6 + scores[offsetWin(o)];
            break;
    }
});
print(score);
