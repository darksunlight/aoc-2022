require("../utils");
print(
    readInput()
        .lines()
        .map(l => [...l.slice(0,l.length/2)].filter(x => l.slice(l.length/2).indexOf(x) > -1)[0])
        .map(x => x.charCodeAt(0) >= 97 ? x.charCodeAt(0) - 96 : x.charCodeAt(0) - 64 + 26)
        .sum()
);
