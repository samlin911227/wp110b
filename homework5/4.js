var list1 = []
var a=parseInt(Deno.args[0])
var b=parseInt(Deno.args[1])
for(a;a<=b;a++){
    if(a%3!=0 && a%5!=0 && a%7!=0){
        list1.push(a)
    }
}
console.log(list1)
