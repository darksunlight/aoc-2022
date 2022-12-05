[d,p]=`${require('fs').readFileSync(0)}`.split`

`.map(x=>x.split`
`)
s=[...Array(h=d[l=d.length-1].split`   `.length)].map(_=>[]);[...Array(h).keys()].map(i=>{for(j=l-1;j+1;j--)(e=d[j][4*i+1])!=' '&&s[i].push(e)})
p.map(r=>{[,q,,o,,t]=r.split` `.map(x=>x-1);s[t].push(...s[o].slice(u=s[o].length-q-1));s[o]=s[o].slice(0,u)})
console.log(s.map(x=>x[x.length-1]).join(``))