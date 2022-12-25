require("../utils");
/** @type {String} */
const input = readTInput();
let jobs = Object.fromEntries(input.lines().map(x => x.split(': ')).map(x => isNaN(x[1]) ? x : [x[0], +x[1]]));
let root = jobs['root'];
function replace(x) {
    if (!isNaN(x)) return x;
    return x.replace(/([a-z]{4}) ([\+\-\*\/]) ([a-z]{4})/, (_, left, op, right) => `(${replace(jobs[left])}${op}${replace(jobs[right])})`);
}
root = eval(root.replace(/([a-z]{4}) ([\+\-\*\/]) ([a-z]{4})/, (_, left, op, right) => `(${replace(jobs[left])}${op}${replace(jobs[right])})`));
print(root);
