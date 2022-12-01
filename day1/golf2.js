r=`${require('fs').readFileSync(0)}`.split`

`.map(l=>l.split(`
`).reduce((a,c)=>a+ +c,0)).sort((a,b)=>b-a);console.log(r[0]+r[1]+r[2])