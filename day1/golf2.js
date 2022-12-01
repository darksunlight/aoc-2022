r=`${require('fs').readFileSync('t')}`.split`

`.map(l=>l.split(`
`).map(y=>+y).reduce((a,c)=>a+c,0)).sort((a,b)=>b-a);console.log(r[0]+r[1]+r[2])