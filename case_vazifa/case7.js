let D = +prompt("Kun:");
let M = +prompt("Oy:");

let kunlar;

switch (M) {
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

D++;

if (D > kunlar) {
    D = 1;
    M++;

    if (M > 12) {
        M = 1;
    }
}

console.log(D, M);