let m = 2
let n = 4 
var sum = 0
if (m>n){
    console.log(0)
}
else if (m<=n){
    for(i=m ; i<=n; i++){
       let pro = i*i*i;
       sum += pro;
    }
}

console.log(sum)