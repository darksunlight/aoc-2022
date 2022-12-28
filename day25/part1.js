require("../utils");
/** @type {String} */
const input = readInput();
const lines = input.lines();
const sum = lines.map(x => [...x].reduce((p, v) => p * 5 + '=-012'.indexOf(v) - 2, 0)).sum();
print(sum);
const convert = n => {
    const mod = n % 5;
    return n ? convert((n - mod) / 5 + (mod > 2)) + '012=-'[mod] : '';
};
print(convert(sum));
