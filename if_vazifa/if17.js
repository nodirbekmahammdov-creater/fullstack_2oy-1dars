let yil = +prompt("Yilni kiriting: ");

if (yil % 400 == 0 || yil % 4 == 0 && yil % 100 != 0) {
    console.log("366 kun");
} else {
    console.log("365 kun");
}