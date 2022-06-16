var i;
var x = Deno.args;
function f(x){
    if(x==0){
        return 0;
    }
    else if(x==1) return 1;
    else return f(x-1) + f(x-2);

}
console.log(f(x))