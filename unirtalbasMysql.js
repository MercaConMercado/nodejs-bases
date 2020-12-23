var a=require('./conexiona') ; // Output 123
var b=require('./conexiona') ; // No output
console.log(a.var1) ; // Output 4
console.log(b.var1) ; // Output 4
a.var2 = 5 ; 
console.log(b.var2) ; // Output 5