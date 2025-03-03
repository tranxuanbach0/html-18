let toan = +prompt("nhap diem mon toan");
let van = +prompt("nhap diem mon van");
let anh = +prompt("nhap diem mon anh");

let diemTB = (toan + van + anh) / 3;

if (diemTB >= 8) {
    console.log("Xep loai: Gioi");
} else if (diemTB >= 6.5 && diemTB <= 7.9) {
    console.log("Xep loai: Kha");
} else if (diemTB >= 5 && diemTB <= 6.4) {
    console.log("Xep loai: Trung binh");
} else if (diemTB < 5){
    console.log("Xep loai: Yeu");
}