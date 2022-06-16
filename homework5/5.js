var list1 = [];
list1 = Deno.args;
var i,count=0,avg=0,sum=0
for(i in list1 ){
    sum = sum + parseInt(list1[i])
    count++
}
avg = sum/count
console.log(avg)