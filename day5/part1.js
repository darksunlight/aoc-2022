require("../utils");
const [, procedures] = readInput().split('\n\n').map(x => x.split('\n'));
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
    for (let i = 0; i < quantity; i++) {
        stacks[dest - 1].push(stacks[orig - 1].pop())
    }
});
print(stacks.map(x => x[x.length - 1]).join(''));