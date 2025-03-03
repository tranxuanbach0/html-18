let number = +prompt("nhap vao ma code");

switch (number) {
    case 200:
        console.log("thanh cong");
    break;
    case 201:
        console.log("them thanh cong");
    break;
    case 400:
        console.log("loi request");
    break;
    case 404:
        console.log("not found");
    break;
    case 500:
        console.log("loi sever")
    break;
    default:
        console.log("ma code khong hop le");
    break;
}
