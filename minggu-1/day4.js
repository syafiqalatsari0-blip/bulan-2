// day 4 (for)
// soal 1
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
// soal 2
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}
// soal 3
let jumlah = 0;
for (let i = 1; i <= 10; i++) {
    jumlah += i;
}
console.log("jumlah 1 sampai 10 adalah " + jumlah);
// soal 4
for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}// soal 5
let segitiga = "";
for (let i = 1; i <= 5; i++) {
    segitiga += "*".repeat(i) + "\n";
}
console.log(segitiga);

// while
// soal 1
let passwordBenar = "open123";
let passwordInput = "";
while (passwordInput !== passwordBenar) {
    passwordInput = prompt("Masukkan password:");
}
console.log("Password benar, akses diberikan.");
// soal 2
let bensin = 10;
while (bensin > 0) {
    console.log("Mobil berjalan...");
    bensin--;
}
console.log("Bensin habis, mobil berhenti.");
// soal 3   
let dadu = 0;
while (dadu !== 6) {
    dadu = Math.floor(Math.random() * 6) + 1;
    console.log("Dadu menunjukkan angka: " + dadu);
}
console.log("Dadu menunjukkan angka 6, permainan selesai.");
// soal 4
let tabungan = 0;
let hargaBarang = 50;
 while (tabungan < hargaBarang) {
    tabungan    += 10; // menabung 10 setiap kali menabung
    console.log("Menabung... Total tabungan: " + tabungan);
}
console.log("Tabungan cukup untuk membeli barang.");

// soal 5
let input = "";
while (input !== "stop") {
    input = prompt("Masukkan sesuatu (ketik 'stop' untuk berhenti):");
    if (input !== "stop") {
        console.log("Kamu memasukkan: " + input);
    }   else {
        console.log("Program dihentikan.");
    }
}

 


