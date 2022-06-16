var flag=0;
function isprime(n)
{
    for(var i=2;i<n;i++){
        if (n%i==0)flag=1;
    }
    if (flag==0)console.log(n,'Is prime number');
    else console.log(n,'Is not prime number');
}
var x = parseInt(Deno.args);
isprime(x);