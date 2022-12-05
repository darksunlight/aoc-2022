require("../utils");
const [drawing, procedures] = readInput().split('\n\n').map(x => x.split('\n'));
const stacks = Array(drawing[drawing.length-1].trim().split('   ').length).fill(0).map(_ => []);
for (let i = 0; i < stacks.length; i++) {
    for (let j = drawing.length - 2; j >= 0; j--) {
        const el = drawing[j][4*i+1];
        if (el === ' ') break;
        stacks[i].push(el);
    }
}
procedures.map(p => {
    const [, quantity, , orig, , dest] = p.split(' ').map(x => +x);
    const temp = Array.from(stacks[orig - 1].slice(stacks[orig - 1].length-quantity));
    stacks[orig - 1] = stacks[orig - 1].slice(0, stacks[orig - 1].length-quantity);
    stacks[dest - 1].push(...temp);
});
print(stacks.map(x => x[x.length - 1]).join(''));