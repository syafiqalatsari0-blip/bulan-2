// scoope
// 1. Variabel global
let namaSekolah = "SMK Informatika";

function tampilkanSekolah() {
    console.log("1. Nama Sekolah (dari global):", namaSekolah);
}
tampilkanSekolah();


// 2. Variabel local di dalam fungsi
function guru() {
    let namaGuru = "Pak Budi"; // Local
    console.log("2. Nama Guru (di dalam fungsi):", namaGuru);
}
guru();
// console.log(namaGuru); // ERROR: tidak bisa diakses di luar fungsi


// 3. Perulangan dengan let
for (let i = 0; i < 3; i++) {
    console.log("3. Nilai i di dalam loop:", i);
}
// console.log(i); // ERROR: i tidak bisa diakses di luar loop


// 4. Bandingkan var dan let
for (var j = 0; j < 3; j++) {
    console.log("4. Nilai j dengan var:", j);
}
console.log("4. Nilai j di luar loop (var):", j); // bisa diakses

for (let k = 0; k < 3; k++) {
    console.log("4. Nilai k dengan let:", k);
}
// console.log(k); // ERROR: k tidak bisa diakses di luar loop


// 5. Dua fungsi dengan variabel sama (scope berbeda)
function kelasA() {
    let namaSiswa = "Andi";
    console.log("5. Siswa di kelas A:", namaSiswa);
}

function kelasB() {
    let namaSiswa = "Budi";
    console.log("5. Siswa di kelas B:", namaSiswa);
}

kelasA();
kelasB();

// hoisting
// 1. Coba tampilkan variabel var sebelum didefinisikan
console.log("1. var sebelum didefinisikan:", namaVar); 
var namaVar = "Budi";
// Output: undefined (karena var di-hoist tapi nilainya belum ada)


// 2. Coba tampilkan variabel let sebelum didefinisikan
// console.log("2. let sebelum didefinisikan:", namaLet); 
const nama  = "Andi";
// ERROR: Cannot access 'namaLet' before initialization


// 3. Coba tampilkan variabel const sebelum didefinisikan
// console.log("3. const sebelum didefinisikan:", namaConst); 
const name = "Siti";
// ERROR: Cannot access 'namaConst' before initialization


// 4. Buat fungsi normal di bawah, panggil di atas
haloNormal(); 
function haloNormal() {
  console.log("4. Fungsi normal bisa dipanggil walau ditulis di bawah");
}
// Output: Fungsi normal bisa dipanggil walau ditulis di bawah


// 5. Buat fungsi versi panah (arrow function), panggil di atas
// haloArrow(); // ERROR: Cannot access 'haloArrow' before initialization
const halloArrow= () => {
  console.log("5. Arrow function tidak bisa dipanggil sebelum didefinisikan");
};
halloArrow();

// closure
// 1. Coba tampilkan variabel var sebelum didefinisikan
console.log("1. var sebelum didefinisikan:", namaVar); 
var namaVar = "Budi";
// Output: undefined (karena var di-hoist tapi nilainya belum ada)


// 2. Coba tampilkan variabel let sebelum didefinisikan
// console.log("2. let sebelum didefinisikan:", namaLet); 
let namaLet = "Andi";
// ERROR: Cannot access 'namaLet' before initialization


// 3. Coba tampilkan variabel const sebelum didefinisikan
// console.log("3. const sebelum didefinisikan:", namaConst); 
const namaConst = "Siti";
// ERROR: Cannot access 'namaConst' before initialization


// 4. Buat fungsi normal di bawah, panggil di atas
haloNormal(); 
function haloNormal() {
  console.log("4. Fungsi normal bisa dipanggil walau ditulis di bawah");
}
// Output: Fungsi normal bisa dipanggil walau ditulis di bawah


// 5. Buat fungsi versi panah (arrow function), panggil di atas
// haloArrow(); // ERROR: Cannot access 'haloArrow' before initialization
const haloArrow = () => {
  console.log("5. Arrow function tidak bisa dipanggil sebelum didefinisikan");
};
haloArrow();
