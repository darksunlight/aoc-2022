[d,p]=`${require('fs').readFileSync(0)}`.split`

`.map(x=>x.split`
`)
s=[...Array(h=d[l=d.length-1].split`   `.length)].map(_=>[]);[...Array(h).keys()].map(i=>{for(j=l-1;j+1;j--)(e=d[j][4*i+1])!=' '&&s[i].push(e)})
p.map(r=>{[,q,,o,,t]=r.split` `.map(x=>+x);[...Array(q)].map(_=>s[t-1].push(s[o-1].pop()))})
console.log(s.map(x=>x[x.length-1]).join(``))