let a = +prompt("a sonni kiriting: ");
let b = +prompt("b sonni kiriting: ");
let c = +prompt("c sonni kiriting: ");
let orta;
if (a > b && a < c || a < b && a > c) {
    orta = a;
} else if (b > a && b < c || b < a && b > c) {
    orta = b;
} else {
    orta = c;
}
console.log("O'rtadagi son =", orta);