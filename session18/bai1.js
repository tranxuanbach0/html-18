let number = +prompt("nhap vao 1 so nguyen");
if (number) {
    if (number % 2 === 0) {
        console.log(`${number} la so chan`);
    } else {
        console.log(`${number} la so le`);
    }
} else {
    console.log("nhap lai di")
}
