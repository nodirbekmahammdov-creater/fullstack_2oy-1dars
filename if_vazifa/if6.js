let max = 0;
let min = 0;
for(let i=1;i<=3;i++){
    let son = + prompt(`${i}-sonni kiriting: `)
    if(son>=max) max = son
    if(son<= min) min =son  
}
console.log("Max ",max);
console.log("Min ",min);

