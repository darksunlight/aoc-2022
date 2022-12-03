require("../utils");
print(
    readInput()
        .lines()
        .chunks(3)
        .map(([l0, l1, l2]) => [...l0].filter(x => l1.indexOf(x) > -1 && l2.indexOf(x) > -1)[0])
        .map(x => x.charCodeAt(0) >= 97 ? x.charCodeAt(0) - 96 : x.charCodeAt(0) - 64 + 26)
        .sum()
);
