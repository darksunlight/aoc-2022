require("../utils");
const [, procedures] = readInput().split('\n\n').map(x => x.split('\n'));
const Tstacks = [
    'ZN',
    'MCD',
    'PZND'
].map(x => [...x]);
const stacks = [
    'FDBZTJRN',
    'RSNJH',
    'CRNJGZFQ',
    'FVNGRTQ',
    'LTQF',
    'QCWZBRGN',
    'FCLSNHM',
    'DNQMTJ',
    'PGS',
].map(x => [...x]);
procedures.map(p => {
    const [, quantity, , orig, , dest] = p.split(' ').map(x => +x);
    const temp = Array.from(stacks[orig - 1].slice(stacks[orig - 1].length-quantity));
    stacks[orig - 1] = stacks[orig - 1].slice(0, stacks[orig - 1].length-quantity);
    stacks[dest - 1].push(...temp);
    console.log(stacks);
});
print(stacks.map(x => x[x.length - 1]).join(''));