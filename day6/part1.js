require("../utils");
const input = readInput();
print(input.indexOf(input.split('').windowed(4).filter(x => (new Set(x).size === 4))[0].join(''))+4)
