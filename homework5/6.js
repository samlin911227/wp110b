var x = parseInt(Deno.args);
var list1 = []
var x1=x
var i=2
for(;i<=x;i++)
    {
        if(x1%i==0)
        {
            list1.push(i);
            x1=x1/i;
            i=1;
        }
    }   

console.log(list1)