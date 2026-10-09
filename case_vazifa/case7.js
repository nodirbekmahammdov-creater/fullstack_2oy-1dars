
let d = +prompt("kun:");
let m = +prompt("oy:");

let kunlar;

switch (m) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        kunlar = 31;
        break;

    case 4:
    case 6:
    case 9:
    case 11:
        kunlar = 30;
        break;

    case 2:
        kunlar = 28;
        break;
}

d++;

if (d > kunlar) {
    d = 1;
    m++;

    if (m > 12) {
        m = 1;
    }
}

console.log(d, m);