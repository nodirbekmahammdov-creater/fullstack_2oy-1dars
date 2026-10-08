let a = +prompt("Sonni kiriting: ");

if (a >= 1 && a <= 9) {
    if (a % 2 == 0) {
        console.log("bir xonali juft son");
    } else {
        console.log("bir xonali toq son");
    }
} else if (a >= 10 && a <= 99) {
    if (a % 2 == 0) {
        console.log("ikki xonali juft son");
    } else {
        console.log("ikki xonali toq son");
    }
} else if (a >= 100 && a <= 999) {
    if (a % 2 == 0) {
        console.log("uch xonali juft son");
    } else {
        console.log("uch xonali toq son");
    }
}