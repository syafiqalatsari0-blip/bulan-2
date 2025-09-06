// 1. Buat variabel nama, umur, statusPelajar
let nama = "Muhammad Dien Syafiq";
let umur = 20;
let statusPelajar = true;

console.log("Nama:", nama);
console.log("Umur:", umur);
console.log("Status Pelajar:", statusPelajar);

// 2. Hitung sisa uang
let uangSaku = 50000;
let jajan = 15000;
let sisaUang = uangSaku - jajan;

console.log("Sisa Uang:", sisaUang);

// 3. Cek login
let sudahLogin = true;

if (sudahLogin) {
  console.log("Selamat datang");
} else {
  console.log("Silakan login terlebih dahulu");
}

// 4. Cek nilai
let nilai = 75;

if (nilai >= 70) {
  console.log("Lulus");
} else {
  console.log("Tidak Lulus");
}

// 5. Coba deklarasikan const lalu ubah nilainya
const angkaa = 10;
// angkaa = 20; //  Akan error karena const tidak bisa diubah nilainya

// console.log("Nilai const angka:", angka);

// 6. Program cek ganjil/genap
let angka = 7;
if (angka % 2 === 0) {
  console.log(angka + " adalah Genap");
} else {
  console.log(angka + " adalah Ganjil");
}

// 7. Program nama bulan dengan switch
let bulan = 5;
switch (bulan) {
  case 1: console.log("Januari"); break;
  case 2: console.log("Februari"); break;
  case 3: console.log("Maret"); break;
  case 4: console.log("April"); break;
  case 5: console.log("Mei"); break;
  case 6: console.log("Juni"); break;
  case 7: console.log("Juli"); break;
  case 8: console.log("Agustus"); break;
  case 9: console.log("September"); break;
  case 10: console.log("Oktober"); break;
  case 11: console.log("November"); break;
  case 12: console.log("Desember"); break;
  default: console.log("Bulan tidak valid");
}

// 8. Program cetak angka 1 sampai 20 dengan for
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// 9. Program cetak bilangan kelipatan 5 dari 1–50
for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

// 10. Program input password hingga benar (while)
let passwordBenar = "12345";
let input;

while (input !== passwordBenar) {
  // gunakan prompt di browser, di Node.js bisa pakai readline-sync
  input = prompt("Masukkan password: ");
  if (input === passwordBenar) {
    console.log("Password benar, selamat datang!");
  } else {
    console.log("Password salah, coba lagi!");
  }
}

// 11. Fungsi sapa
function sapa(nama) {
  console.log("Halo, " + nama + "!");
}
sapa("Dien");

// 12. Fungsi hitungLuasSegitiga
function hitungLuasSegitiga(alas, tinggi) {
  return (alas * tinggi) / 2;
}
console.log("Luas segitiga:", hitungLuasSegitiga(10, 5));

// 13. Fungsi cekUmur
function cekUmur(umur) {
  if (umur >= 18) {
    console.log("Dewasa");
  } else {
    console.log("Anak-anak");
  }
}
cekUmur(20);
cekUmur(12);

// 14. Fungsi ekspresi untuk menghitung diskon belanja
const hitungDiskon = function(totalBelanja, persenDiskon) {
  let potongan = totalBelanja * (persenDiskon / 100);
  return totalBelanja - potongan;
};
console.log("Total setelah diskon:", hitungDiskon(100000, 20));

// 15. Arrow function konversi suhu (Celcius → Fahrenheit)
const konversiSuhu = (celcius) => (celcius * 9/5) + 32;
console.log("30°C =", konversiSuhu(30), "°F");

// 16. Variabel global
let sekolah = "Pondok IT";

function tampilSekolah() {
  console.log("Saya belajar di " + sekolah);
}
tampilSekolah();  // Bisa tampil karena 'sekolah' global

// 17. Variabel lokal di dalam fungsi
function buatGuru() {
  let guru = "Ustadz Ahmad";
  console.log("Guru di dalam fungsi:", guru);
}
buatGuru();

// console.log(guru); //  Error: guru is not defined
// Karena 'guru' hanya bisa diakses di dalam fungsi buatGuru()

// 18. Hoisting dengan var
console.log(namaVar); //  Hasil: undefined (karena hoisting, deklarasi naik tapi nilainya belum)
// console.log(namaLet); //  Error: Cannot access 'namaLet' before initialization

var namaVar = "Ali";
let namaLet = "Budi";

// 19. Closure buatCounter
function buatCounter() {
  let hitung = 0;
  return function() {
    hitung++;
    return hitung;
  };
}

let counter = buatCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// 20. Closure pencatatanPengeluaran
function pencatatanPengeluaran() {
  let total = 0;
  return function(pengeluaran) {
    total += pengeluaran;
    return total;
  };
}

let catat = pencatatanPengeluaran();
console.log("Total:", catat(50000)); // 50000
console.log("Total:", catat(20000)); // 70000
console.log("Total:", catat(30000)); // 100000

