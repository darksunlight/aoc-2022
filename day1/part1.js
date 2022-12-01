const input = require('fs').readFileSync('./input.txt', 'utf-8').split('\n\n');
const cals = input.map(x => x.split('\n').map(y => +y).reduce((a,c)=>a+c,0));
console.log(cals.sort((a,b)=>b-a)[0])
