// study kasus deklaratif
// 1.fungsi untuk menyapa user
function sapaUser(nama) {
    console.log("Halo, " + nama + "! Selamat datang!");
}
sapaUser("Dien");
// 2.fungsi untuk menghitung luas persegi
function luasPersegi(sisi) {
    return sisi * sisi;
}
console.log("luas persegi = " + luasPersegi(5));
// 3. fungsi untuk menampilkan biodata 
function biodata(nama, umur, alamat) {
    console.log("Nama: " + nama);
    console.log("Umur: " + umur + " tahun");
    console.log("Alamat: " + alamat);
}
biodata("Dien", 20, "yogyakarta");
// 4. fungsi untuk mengecek bilangan genap atau ganjil
function cekGenapGanjil(angka) {
    if (angka % 2 === 0) {
        console.log(angka + " adalah bilangan genap.");
    } else {
        console.log(angka + " adalah bilangan ganjil.");
    }
}
cekGenapGanjil(7);
cekGenapGanjil(10);
// 5. fungsi untuk mengecek daftar menu
function cekMenu(menu) {
    console.log("=== Daftar Menu ===");
    console.log("1. Nasi Goreng");
    console.log("2. Mie Ayam");
    console.log("3. Soto Ayam");
    console.log("4. Bakso");
    console.log("5. Es Teh Manis");
}
cekMenu();
    
// fungsi ekspresif
// 1. funsi menghitung luas segitiga
const luasSegitiga = function(alas, tinggi) {
    return 0.5 * alas * tinggi;
};
console.log("luas segitiga = " + luasSegitiga(6, 8));
// 2. fungsi hitung keliling lingkaran
const kelilingLingkaran = function(jariJari) {
    return 2 * Math.PI * jariJari;
}; 
console.log("keliling lingkaran = " + kelilingLingkaran(7));
// 3.fungsi menambahkan dua angka
const tambah = function(a, b) {
    return a + b;
};
console.log("hasil penjumlahan = " + tambah(10, 15));
// 4. fungsi mengubah huruf menjadi kapital
const ubahKapital = function(teks) {
    return teks.toUpperCase();
};
console.log(ubahKapital("selamat pagi"));
// 5.fungi menghitung diskon belanja
const hitungDiskon = function(harga, diskon) {
    return harga - (harga * diskon / 100);
};
console.log("harga setelah diskon = " + hitungDiskon(200000, 15));

// Arrow function
// 1. fungsi mengurangi dua angka
const kurang = (a, b) => a - b;
console.log("hasil pengurangan = " + kurang(20, 5));
// 2. fungsi menghitung pajak
const hitungPajak = (total, persen ) => (total * persen / 100);
console.log("pajak =", hitungPajak(100000, 10));
// 3. fungsi menghitung salam
const salam = nama => "Halo, " + nama + "!";
console.log(salam("Dien"));
// 4. Fungsi menghitung umur dari tahun lahir
let hitungUmur = (tahunLahir) => new Date().getFullYear() - tahunLahir;
console.log("Umur =", hitungUmur(2003), "tahun");

// 5. Fungsi mengonversi suhu Celcius ke Fahrenheit
let celciusToFahrenheit = (c) => (c * 9/5) + 32;
console.log("30°C =", celciusToFahrenheit(30), "°F");

// parameter dan return
// 1. Fungsi menghitung nilai rata-rata
function hitungRataRata(a, b, c) {
  return (a + b + c) / 3;
}
console.log("Rata-rata =", hitungRataRata(80, 90, 100));

// 2. Fungsi menggabungkan dua string
function gabungString(str1, str2) {
  return str1 + " " + str2;
}
console.log("Gabungan String =", gabungString("Belajar", "JavaScript"));

// 3. Fungsi mencari angka terbesar dari 2 angka
function angkaTerbesar(a, b) {
  return a > b ? a : b;
}
console.log("Angka Terbesar =", angkaTerbesar(25, 40));

// 4. Fungsi menghitung luas lingkaran
function luasLingkaran(r) {
  return Math.PI * r * r;
}
console.log("Luas Lingkaran =", luasLingkaran(7));

// 5. Fungsi menghitung gaji bersih setelah potongan
function gajiBersih(gaji, potongan) {
  return gaji - potongan;
}
console.log("Gaji Bersih =", gajiBersih(5000000, 750000));


 