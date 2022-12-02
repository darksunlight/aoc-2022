c=x=>x[0].charCodeAt(0);s=0;r=`${require('fs').readFileSync(0)}`.split`
`.map(l=>{x=c`X`;[o,p]=l.split` `.map(x=>c(x));d=x-c`A`;t=o-p+d;s+=p-x+1+(!t)*3+!(t+1&&t-2)*6;});console.log(s);