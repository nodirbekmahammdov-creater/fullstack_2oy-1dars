let a = +prompt("a sonni kiriting: ");
let b = +prompt("b sonni kiriting: ");
let c = +prompt("c sonni kiriting: ");

if (a > b && a < c || a < b && a > c) {
    console.log(`${c} va ${a} yigindi = ${a+c}`);
    
} else if (b > a && b < c || b < a && b > c) {
    console.log(`${c} va ${b} yigindi = ${c+b}`);
} else {
    console.log(`${b} va ${a} yigindi = ${a+b}`);
}
