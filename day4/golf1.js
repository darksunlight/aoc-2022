require("../utils");
print(readInput().split`
`.filter(e=>{[l,r]=e.split`,`.map(x=>x.split`-`.map(x=>+x));return (l[0]<=r[0]&&l[1]>=r[1])||(r[0]<=l[0]&&t[1]>=l[1])}).length)