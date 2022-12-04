require("../utils");
print(readInput().lines().filter(line => {
    const [l,r] = line.split(',').map(x => x.split('-').map(x=>+x));
    return (l[0] <= r[0] && l[1]>=r[0]) || (r[0] <= l[0] && r[1]>=l[0]);
}).length);