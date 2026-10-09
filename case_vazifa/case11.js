
let n = +prompt("sonni kiriting (100-999):");

let yuz = Math.floor(n / 100);
let on = Math.floor((n % 100) / 10);
let bir = n % 10;

let natija = "";

switch (yuz) {
    case 1: natija += "bir yuz"; break;
    case 2: natija += "ikki yuz"; break;
    case 3: natija += "uch yuz"; break;
    case 4: natija += "to'rt yuz"; break;
    case 5: natija += "besh yuz"; break;
    case 6: natija += "olti yuz"; break;
    case 7: natija += "yetti yuz"; break;
    case 8: natija += "sakkiz yuz"; break;
    case 9: natija += "to'qqiz yuz"; break;
}

switch (on) {
    case 1: natija += " o'n"; break;
    case 2: natija += " yigirma"; break;
    case 3: natija += " o'ttiz"; break;
    case 4: natija += " qirq"; break;
    case 5: natija += " ellik"; break;
    case 6: natija += " oltmish"; break;
    case 7: natija += " yetmish"; break;
    case 8: natija += " sakson"; break;
    case 9: natija += " to'qson"; break;
}

switch (bir) {
    case 1: natija += " bir"; break;
    case 2: natija += " ikki"; break;
    case 3: natija += " uch"; break;
    case 4: natija += " to'rt"; break;
    case 5: natija += " besh"; break;
    case 6: natija += " olti"; break;
    case 7: natija += " yetti"; break;
    case 8: natija += " sakkiz"; break;
    case 9: natija += " to'qqiz"; break;
}

console.log(natija);