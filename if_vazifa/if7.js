let A = +prompt("A sonni kiriting: ");
let B = +prompt("B sonni kiriting: ");
if (A > B) {
    let C = A;
    A = B;
    B = C;
}
console.log("A =", A);
console.log("B =", B);