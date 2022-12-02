Array.prototype.sum = function(val = 0) {
    return this.reduce((a, c) => a + c, val);
}
Array.prototype.max = function() {
    return Math.max(...this);
};
Array.prototype.min = function() {
    return Math.min(...this);
};
Array.prototype.toInt = function() {
    return this.map(x => +x);
}
Array.prototype.sortAsc = function() {
    return this.sort((a, b) => a - b);
}
Array.prototype.sortDesc = function() {
    return this.sort((a, b) => b - a);
}
global.readInput = function() {
    return require("fs").readFileSync('./input.txt', 'utf-8');
}
global.print = function(...args) {
    console.log(...args);
}
String.prototype.toInt = function() {
    return this.charCodeAt(0);
}
Number.prototype.toChar = function() {
    return String.fromCharCode(this);
}