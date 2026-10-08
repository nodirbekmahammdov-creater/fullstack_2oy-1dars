let x = +prompt("x = ");
let y;

if (x <= 0) {
    y = -x;
} else if (x < 2) {
    y = x ** 2;
} else {
    y = 4;
}

console.log("y =", y);