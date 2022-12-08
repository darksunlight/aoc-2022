require("../utils");
const input = readInput().lines().map(line => line.split('').map(x => +x));
const rows = input.length;
const columns = input[0].length;

let highScore = 0;

for (let i = 1; i < rows - 1; i++) {
    for (let j = 1; j < columns - 1; j++) {
        let score = 0;
        for (let k = i - 1; k >= 0; k--) {
            if (input[k][j] >= input[i][j] || k == 0) {
                score += i - k;
                break;
            }
        }
        for (let k = i + 1; k < rows; k++) {
            if (input[k][j] >= input[i][j] || k == rows - 1) {
                score *= k - i;
                break;
            }
        }
        for (let k = j - 1; k >= 0; k--) {
            if (input[i][k] >= input[i][j] || k == 0) {
                score *= j - k;
                break;
            }
        }
        for (let k = j + 1; k < columns; k++) {
            if (input[i][k] >= input[i][j] || k == columns - 1) {
                score *= k - j;
                break;
            }
        }
        if (score >= highScore) highScore = score;
    }
}
print(highScore);