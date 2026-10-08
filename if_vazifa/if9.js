let A = +prompt("A sonni kiriting: ");
let B = +prompt("B sonni kiriting: ");
if (A != B) {
    if (A > B) {
        B = A;
    } else {
        A = B;
    }
} else {
    A = 0;
    B = 0;
}
console.log("A =", A);
console.log("B =", B);