let name = prompt("nhap ten vao");
if (name === "ADMIN") {
    let password = prompt("password");
    if (password === "TheMaster") {
        alert("Welcome.");
    } else if (password === null) {
        alert("Cancelled.");
    } else {
        alert("Wrong password.");
    }
} else if (name === null) {
    alert("Cancelled.");
} else {
    alert("I don't know you");
}