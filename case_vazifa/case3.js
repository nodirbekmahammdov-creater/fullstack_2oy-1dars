let oy = +prompt("Oy raqami: ");

switch (oy) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 kun");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 kun");
        break;
    case 2:
        console.log("28 kun");
        break;
    default:
        console.log("xato");
}