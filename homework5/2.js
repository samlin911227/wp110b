var factorial=1
var i;
var x=parseInt(Deno.args);
for ( i=1;i<=x;i++)
{
    factorial = factorial*i;
} 
console.log('factorial(10)=',factorial);