// Variabel dasar
let nama = "Syafiq";
let umur = 20;
let statusPelajar = true;

console.log("Nama:", nama);
console.log("Umur:", umur);
console.log("Pelajar:", statusPelajar);

// Fungsi sederhana
function sapa(nama) {
  return "Halo, " + nama + "!";
}

console.log(sapa("Dien"));

// Array dan perulangan
let buah = ["Apel", "Mangga", "Jeruk"];

buah.forEach((item, index) => {
  console.log(index + 1 + ". " + item);
});

// Objek
let user = {
  nama: "Syafiq",
  kota: "Jambi",
  hobi: ["Coding", "Membaca"]
};

console.log("User:", user.nama, "dari", user.kota);
