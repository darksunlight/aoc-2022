require("../utils");
/** @type {String} */
const input = readInput();
const divs = [[[2]], [[6]]];
const pairs = [...input.split('\n\n').map(x => x.split('\n').map(x => JSON.parse(x))).flat(), ...divs];
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
const sorted = pairs.sort((l, r) => isInOrder([l, r]) ? -1 : 1);
print((sorted.indexOf(divs[0]) + 1) * (sorted.indexOf(divs[1]) + 1));
