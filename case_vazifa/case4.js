let birlik = +prompt("Birlik raqami: ");
let qiymat = +prompt("Qiymat: ");

switch (birlik) {
    case 1:
        console.log(qiymat / 10);
        break;
    case 2:
        console.log(qiymat * 1000);
        break;
    case 3:
        console.log(qiymat);
        break;
    case 4:
        console.log(qiymat / 1000);
        break;
    case 5:
        console.log(qiymat / 100);
        break;
    default:
        console.log("xato");
}