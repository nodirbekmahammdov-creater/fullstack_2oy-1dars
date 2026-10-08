let A = +prompt("A = ");
let B = +prompt("B = ");
let amal = +prompt("Amalni kiriting (1-4): ");

switch (amal) {
    case 1:
        console.log(A + B);
        break;
    case 2:
        console.log(A - B);
        break;
    case 3:
        console.log(A / B);
        break;
    case 4:
        console.log(A * B);
        break;
    default:
        console.log("Bunday amal yo'q");
}