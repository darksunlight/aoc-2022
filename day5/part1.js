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
    for (let i = 0; i < quantity; i++) {
        stacks[dest - 1].push(stacks[orig - 1].pop())
    }
});
print(stacks.map(x => x[x.length - 1]).join(''));
