let yosh = +prompt("Yoshni kiriting: ");

let onlik = parseInt(yosh / 10);
let birlik = yosh % 10;
let natija = "";

switch (onlik) {
    case 2:
        natija = "yigirma";
        break;
    case 3:
        natija = "o'ttiz";
        break;
    case 4:
        natija = "qirq";
        break;
    case 5:
        natija = "ellik";
        break;
    case 6:
        natija = "oltmish";
        break;
}

switch (birlik) {
    case 1:
        natija += " bir";
        break;
    case 2:
        natija += " ikki";
        break;
    case 3:
        natija += " uch";
        break;
    case 4:
        natija += " to'rt";
        break;
    case 5:
        natija += " besh";
        break;
    case 6:
        natija += " olti";
        break;
    case 7:
        natija += " yetti";
        break;
    case 8:
        natija += " sakkiz";
        break;
    case 9:
        natija += " to'qqiz";
        break;
}

console.log(natija + " yosh");