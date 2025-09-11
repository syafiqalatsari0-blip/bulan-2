// latihan mandiri
// 1.Bikin array isi angka 1–10
let angka = [1,2,3,4,5,6,7,8,9,10];

console.log("Array awal:", angka);

// 2.Pakai map buat kaliin semua angka dengan 5
let kaliLima = angka.map(num => num * 5);
console.log("Hasil kali 5:", kaliLima);

// 3.Pakai filter buat ambil angka genap
let genap = angka.filter(num => num % 2 === 0);
console.log("Angka genap:", genap);

// 4.Pakai reduce buat jumlahin semua angka
let jumlah = angka.reduce((total, num) => total + num, 0);
console.log("Jumlah semua angka:", jumlah);

// 5.Pakai find buat cari angka pertama yang lebih dari 8
let cari = angka.find(num => num > 8);
console.log("Angka pertama > 8:", cari);

// study kasus
//  1.Daftar nama buah
let buah = ["Apel", "Mangga", "Jeruk", "Pisang"];
console.log("Daftar Buah:");
buah.forEach(nama => console.log(nama));

// 2.Daftar harga barang
let harga = [1000, 5000, 7500, 12000];
let hargaNaik = harga.map(h => h * 1.1); // naik 10%
console.log("Harga setelah naik 10%:", hargaNaik);

// 3.Daftar umur orang
let umur = [12, 16, 18, 20, 25];
let dewasa = umur.filter(u => u > 17);
console.log("Umur > 17:", dewasa);

// 4.Daftar nilai ujian
let nilai = [80, 90, 75, 85, 100];
let totalNilai = nilai.reduce((total, n) => total + n, 0);
console.log("Total nilai ujian:", totalNilai);

// 5.Daftar nomor kursi
let kursi = [5, 12, 19, 21, 25, 30];
let kursiBesar = kursi.find(k => k > 20);
console.log("Kursi pertama > 20:", kursiBesar);

