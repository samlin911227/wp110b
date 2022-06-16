function transpose(a){
    var f = [];
    for(var r = 0; r < a[0].length; r++) {
       f[r] = [];
       for(var s = 0; s < a.length; s++){
           f[r][s] = a[s][r];
       }
   }
   return f;
}

console.log(transpose([[1,2,3],[3,2,1]]));