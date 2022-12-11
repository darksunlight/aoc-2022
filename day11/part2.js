require("../utils");
/** @type {String} */
const input = readInput();
const monkeys = input.split('\n\n').map(monkey => {
    const desc = monkey.split('\n');
    return {
        items: desc[1].split(':')[1].trim().split(',').map(x => +x),
        operation: desc[2].split(':')[1].trim().replaceAll('old', 'monkey.items[k]').replace('new', 'newLevel'),
        test: +desc[3].split('Test: divisible by ')[1],
        ifTrue: +desc[4].split('If true: throw to monkey ')[1],
        ifFalse: +desc[5].split('If false: throw to monkey ')[1],
        inspections: 0
    };
});
const stressReducer = monkeys.reduce((acc, { test }) => acc * test, 1);
for (let round = 0; round < 10000; round++) {
    for (let j = 0; j < monkeys.length; j++) {
        const monkey = monkeys[j];
        const removed = [];

        for (let k = 0; k < monkey.items.length; k++) {
            monkey.inspections++;
            let newLevel = 0;
            eval(monkey.operation);
            monkey.items[k] = newLevel;
            monkeys[monkey.items[k] % monkey.test === 0 ? monkey.ifTrue : monkey.ifFalse]
                .items.push(monkey.items[k] % stressReducer);
            removed.push(k);
        }
        monkey.items = monkey.items.filter((_, i) => !removed.includes(i));
    }
}
const inspections = monkeys.map(m => m.inspections).sortDesc();
console.log(inspections[0] * inspections[1]);
