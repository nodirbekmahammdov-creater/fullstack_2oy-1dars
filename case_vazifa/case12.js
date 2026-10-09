
let yil = +prompt("yilni kiriting:");

let rang;
let hayvon;

switch (Math.floor((yil - 1984) / 2) % 5) {
    case 0: rang = "yashil"; break;
    case 1: rang = "qizil"; break;
    case 2: rang = "sariq"; break;
    case 3: rang = "oq"; break;
    case 4: rang = "qora"; break;
}
switch ((yil - 1984) % 12) {
    case 0: hayvon = "sichqon"; break;
    case 1: hayvon = "sigir"; break;
    case 2: hayvon = "yo'lbars"; break;
    case 3: hayvon = "quyon"; break;
    case 4: hayvon = "ajdar"; break;
    case 5: hayvon = "ilon"; break;
    case 6: hayvon = "ot"; break;
    case 7: hayvon = "qo'y"; break;
    case 8: hayvon = "maymun"; break;
    case 9: hayvon = "tovuq"; break;
    case 10: hayvon = "it"; break;
    case 11: hayvon = "to'ng'iz"; break;
}
console.log(rang, hayvon, "yili");