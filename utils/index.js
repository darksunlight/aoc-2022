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
Array.prototype.windowed = function(size, step = 1, partialWindows = false) {
    return Array.from(
        { length: Math.floor(this.length / step) - Math.ceil(size / step) + 1 + partialWindows },
        (_, i) => this.slice(i * step, i * step + size)
    )
}
Array.prototype.chunks = function(x) { // like last year I got this from https://stackoverflow.com/a/37826698
    return this.reduce((p, c, i) => {
        const ci = Math.floor(i / x);
        if (!p[ci]) p[ci] = [];
        p[ci].push(c);
        return p;
    }, []);
}
global.readInput = function() {
    return require("fs").readFileSync('./input.txt', 'utf-8');
}
global.readTInput = function() {
    return require("fs").readFileSync('./test.txt', 'utf-8');
}
global.print = function(...args) {
    console.log(...args);
}
String.prototype.toInt = function() {
    return this.charCodeAt(0);
}
String.prototype.lines = function() {
    return this.split('\n');
}
Number.prototype.toChar = function() {
    return String.fromCharCode(this);
}