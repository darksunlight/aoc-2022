require("../utils");
const input = readInput().lines().map(line => line.split('').map(x => +x));
const rows = input.length;
const columns = input[0].length;
let count = (rows - 1) * 2 + (columns - 1) * 2;
for (let i = 1; i < rows - 1; i++) {
    for (let j = 1; j < columns - 1; j++) {
        let visible = false;
        for (let k = i - 1; k >= 0; k--) {
            if (input[k][j] >= input[i][j]) break;
            if (k == 0) visible = true;
        }
        for (let k = i + 1; k < rows; k++) {
            if (input[k][j] >= input[i][j]) break;
            if (k == rows - 1) visible = true;
        }
        for (let k = j - 1; k >= 0; k--) {
            if (input[i][k] >= input[i][j]) break;
            if (k == 0) visible = true;
        }
        for (let k = j + 1; k < columns; k++) {
            if (input[i][k] >= input[i][j]) break;
            if (k == columns - 1) visible = true;
        }
        if (visible) count++;
    }
}
print(count);