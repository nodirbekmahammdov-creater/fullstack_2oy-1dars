let A = +prompt("A sonni kiriting: ");
let B = +prompt("B sonni kiriting: ");
let C = +prompt("C sonni kiriting: ");
let kichik;
if (A < B && A < C) {
    kichik = A;
} else if (B < A && B < C) {
    kichik = B;
} else {
    kichik = C;
}
console.log("kichik son =", kichik);