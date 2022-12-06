require("../utils");
const input = readInput();
print(input.indexOf(input.split('').windowed(14).filter(x => new Set(x).size === 14)[0].join(''))+14)
