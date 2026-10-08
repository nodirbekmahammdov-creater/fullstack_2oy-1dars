let A = +prompt("A sonni kiriting: ");
let B = +prompt("B sonni kiriting: ");
if (A != B) {
    let yigindi = A + B;
    A = yigindi;
    B = yigindi;
} else {
    A = 0;
    B = 0;
}
console.log("A =", A);
console.log("B =", B);