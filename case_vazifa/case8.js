
let y = prompt("robot yonalishi s, j, q, g:");
let k = +prompt("kamanda 0, 1, 2:");
switch (y) {
    case "s":
        if (k == 1) y = "g";
        else if (k == 2) y = "q";
        break;

    case "j":
        if (k == 1) y = "q";
        else if (k == 2) y = "g";
        break;

    case "q":
        if (k == 1) y = "s";
        else if (k == 2) y = "j";
        break;

    case "g":
        if (k == 1) y = "j";
        else if (k == 2) y = "s";
        break;
}
console.log(y);