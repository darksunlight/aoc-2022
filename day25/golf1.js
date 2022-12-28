c=(n,m=n%5)=>n?c((n-m)/5+(m>2))+'012=-'[m]:'';c(i.split`
`.reduce((a,[...x])=>a+x.reduce((p,v)=>p*5+'=-012'.indexOf(v)-2,0),0))