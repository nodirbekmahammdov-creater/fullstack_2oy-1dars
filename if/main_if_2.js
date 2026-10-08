// let son1=+prompt("1-sonni kiriting: ")
// let son2=+prompt("2-sonni kiriting: ")
// let son3=+prompt("3-sonni kiriting: ")
let musbat = 0
let manfiy = 0
for (let i=1;i<=3;i++){
    let son = +prompt(`${i}-sonni kiriting: `)
    if(son>=0) musbat++
    else manfiy++

}
console.log("Musbat",musbat);
console.log("Manfiy",manfiy);

