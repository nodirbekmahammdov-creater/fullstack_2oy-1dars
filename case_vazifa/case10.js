
let n = +prompt("sonni kiriting (10-40):");

let onlar = Math.floor(n / 10);
let birlik = n % 10;

let natija = "";

switch (onlar) {
    case 1: natija = "o'n"; break;
    case 2: natija = "yigirma"; break;
    case 3: natija = "o'ttiz"; break;
    case 4: natija = "qirq"; break;
}

switch (birlik) {
    case 1: natija += " bitta"; break;
    case 2: natija += " ikkita"; break;
    case 3: natija += " uchta"; break;
    case 4: natija += " to'rtta"; break;
    case 5: natija += " beshta"; break;
    case 6: natija += " oltita"; break;
    case 7: natija += " yettita"; break;
    case 8: natija += " sakkizta"; break;
    case 9: natija += " to'qqizta"; break;
}

if (birlik == 0) {
    natija += "ta";
}

natija += " masala";

console.log(natija);