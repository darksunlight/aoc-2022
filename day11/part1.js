require("../utils");
/** @type {String} */
const input = readInput();
const monkeys = input.split('\n\n').map(monkey => {
    const desc = monkey.split('\n');
    return {
        items: desc[1].slice(18).split(',').map(x => +x),
        operation: desc[2].slice(13).replace('new', 'newLevel'),
        test: +desc[3].slice(21),
        ifTrue: +desc[4].slice(29),
        ifFalse: +desc[5].slice(29),
        inspections: 0,
    };
});
for (let round = 0; round < 20; round++) {
    for (let j = 0; j < monkeys.length; j++) {
        const monkey = monkeys[j];
        const removed = [];

        for (let k = 0; k < monkey.items.length; k++) {
            monkey.inspections++;
            let newLevel = 0;
            let old = monkey.items[k];
            eval(monkey.operation);
            monkey.items[k] = Math.floor(newLevel / 3);
            if (monkey.items[k] % monkey.test === 0) {
                monkeys[monkey.ifTrue].items.push(monkey.items[k]);
            } else {
                monkeys[monkey.ifFalse].items.push(monkey.items[k]);
            }
            removed.push(k);
        }
        monkey.items = monkey.items.filter((_, i) => !removed.includes(i));
    }
}
const inspections = monkeys.map(m => m.inspections).sortDesc();
console.log(inspections[0] * inspections[1]);
