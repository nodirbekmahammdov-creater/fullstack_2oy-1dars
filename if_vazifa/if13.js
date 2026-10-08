let a = +prompt("a sonni kiriting: ");
let b = +prompt("b sonni kiriting: ");
let c = +prompt("c sonni kiriting: ");
if (a < b && b < c) {
    a = a * 2;
    b = b * 2;
    c = c * 2;
} else {
    a = -a;
    b = -b;
    c = -c;
}
console.log("a =", a);
console.log("b =", b);
console.log("c =", c);