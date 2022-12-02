s=0;`${require('fs').readFileSync(0)}`.split`
`.map(l=>{[o,p]=l.split` `.map(n=>n.charCodeAt(0));t=o-p+23;s+=p-87+!t*3+!(t+1&&t-2)*6});console.log(s)