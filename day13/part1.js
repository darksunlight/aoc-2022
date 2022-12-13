require("../utils");
/** @type {String} */
const input = readInput();
const pairs = input.split('\n\n').map(x => x.split('\n').map(x => JSON.parse(x)));
function isInOrder(pair) {
    const [left, right] = pair;
    let i = 0;
    for (; i < left.length && i < right.length; i++) {
        let l = left[i];
        let r = right[i];
        if (typeof l === "number" && typeof r === "number") {
            if (l < r) return true;
            if (l > r) return false;
            continue;
        }
        if (!Array.isArray(l)) l = [l];
        if (!Array.isArray(r)) r = [r];
        const sub = isInOrder([l, r]);
        if (sub === null) continue;
        return sub;
    }
    if (left.length == right.length) return null;
    return right.length > left.length;
}
print(pairs.map((pair, i) => isInOrder(pair) ? i + 1 : 0).sum());
