p=5000
t=2
r=5
si=(p*t*r)/100
console.clear()
console.log("simple interest=",si)
ci=p*(Math.pow((1+r/100),t))
console.log("compound interest=",ci-p)