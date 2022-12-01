Array.prototype.sum = function() {
    return this.reduce((a, c) => a + c, 0);
}
Array.prototype.max = function() {
    return Math.max.apply(null, this);
};
Array.prototype.min = function() {
    return Math.min.apply(null, this);
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