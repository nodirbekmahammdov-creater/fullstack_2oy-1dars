let a = +prompt("a = ");
let b = +prompt("b = ");
let c = +prompt("c = ");
let d = +prompt("d = ");

if (a == b && a == c) {
    console.log("Tartib raqami =", 4);
} else if (a == b && a == d) {
    console.log("Tartib raqami =", 3);
} else if (a == c && a == d) {
    console.log("Tartib raqami =", 2);
} else {
    console.log("Tartib raqami =", 1);
}