
let n = +prompt("karta qiymati (6-14):");
let m = +prompt("karta turi (1-4):");

let qiymat;
let tur;
switch (n) {
    case 6: qiymat = "olti"; break;
    case 7: qiymat = "yetti"; break;
    case 8: qiymat = "sakkiz"; break;
    case 9: qiymat = "to'qqiz"; break;
    case 10: qiymat = "o'n"; break;
    case 11: qiymat = "valet"; break;
    case 12: qiymat = "dama"; break;
    case 13: qiymat = "qirol"; break;
    case 14: qiymat = "tuz"; break;
}
switch (m) {
    case 1: tur = "g'isht"; break;
    case 2: tur = "olma"; break;
    case 3: tur = "chillak"; break;
    case 4: tur = "qarg'a"; break;
}
console.log(qiymat, tur);