// LATIHAN MANDIRI
// 1. Buat array berisi 5 nama teman
let temann = ["Andi", "Budi", "Citra", "Dewi", "Eko"];
console.log("Awal:", temann);

// 2. Tambahin 1 nama di depan dan di belakang
let temannn = ["Andi", "Budi", "Citra", "Dewi", "Eko"];
temannn.unshift("Fajar"); // tambah di depan
temannn.push("Gina");     // tambah di belakang
console.log("Setelah tambah depan & belakang:", temannn);

// 3. Hapus 1 nama dari depan dan belakang
let temannnn = ["Andi", "Budi", "Citra", "Dewi", "Eko", "Fajar", "Gina"];
temannnn.shift(); // hapus depan
temannnn.pop();   // hapus belakang
console.log("Setelah hapus depan & belakang:", temannnn);

// 4. Selipin nama baru di posisi ke-2 (index 1)
temann.splice(1, 0, "Hani"); // index 1, hapus 0, tambah "Hani"
console.log("Setelah selipin di index 1:", temann);

// 5. Hitung jumlah teman sekarang
console.log("Jumlah teman sekarang:", temann.length);

// STUDY KASUS ( push and shift )
// 1. Array buah, tambahin 2 buah di depan dan 2 buah di belakang
let buah = ["Apel", "Mangga", "Pisang"];
buah.unshift("Jeruk", "Semangka"); // tambah di depan
buah.push("Anggur", "Pepaya");     // tambah di belakang
console.log("Buah:", buah);

// 2. Array daftar belanja, masukin barang baru yang baru diingat
let belanjaa = ["Beras", "Telur", "Minyak"];
belanjaa.push("Gula"); // barang baru
console.log("Daftar Belanja:", belanjaa);

// 3. Array hewan peliharaan, tambahin hewan baru di depan
let hewann = ["Kucing", "Ikan"];
hewann.unshift("Burung"); 
console.log("Hewan Peliharaan:", hewann);

// 4. Array film favorit, tambahin film terbaru
let film = ["Inception", "Avengers", "Interstellar"];
film.push("Oppenheimer");
console.log("Film Favorit:", film);

// 5. Array angka, masukin angka 0 di awal
let angkaa = [1, 2, 3, 4, 5];
angkaa.unshift(0);
console.log("Angka:", angkaa);

// pop and shift
// 1. Array mainan, buang mainan terakhir karena rusak
let mainan = ["Robot", "Boneka", "Mobil", "Pesawat"];
mainan.pop(); // hapus terakhir
console.log("Mainan:", mainan);

// 2. Array baju, buang baju paling depan karena kotor
let baju = ["Kaos", "Jaket", "Kemeja", "Celana"];
baju.shift(); // hapus depan
console.log("Baju:", baju);

// 3. Array makanan, makan makanan terakhir (hapus terakhir)
let makanan = ["Nasi Goreng", "Mie Ayam", "Bakso"];
makanan.pop();
console.log("Makanan:", makanan);

// 4. Array tugas sekolah, hapus tugas pertama karena selesai
let tugas = ["Matematika", "IPA", "IPS", "Bahasa Inggris"];
tugas.shift();
console.log("Tugas Sekolah:", tugas);

// 5. Array daftar antrian, hapus orang pertama (udah dilayani)
let antrian = ["Ali", "Budi", "Citra", "Dewi"];
antrian.shift();
console.log("Daftar Antrian:", antrian);

// lenght
// Array buah
let buahh = ["Apel", "Mangga", "Pisang", "Jeruk"];
console.log("Jumlah buahh:", buahh.length);

// Array teman
let teman = ["Andi", "Budi", "Citra", "Dewi", "Eko", "Gina"];
console.log("Jumlah teman:", teman.length);

// Array angka
let angka = [0, 1, 2, 3, 4, 5];
console.log("Jumlah angka:", angka.length);

// Array daftar belanja
let belanja = ["Beras", "Telur", "Minyak", "Gula"];
console.log("Jumlah barang belanja:", belanja.length);

// Array hewan
let hewan = ["Kucing", "Ikan", "Burung"];
console.log("Jumlah hewan:", hewan.length);

// splice
// 1. Array warna, sisipkan "biru" di posisi ke-2 (index 1)
let warna = ["merah", "kuning", "hijau"];
warna.splice(1, 0, "biru");
console.log("Warna:", warna);

// 2. Array teman, hapus teman di posisi ke-3 (index 2)
let temannnnn = ["Andi", "Budi", "Citra", "Dewi", "Eko"];
temannnnn.splice(2, 1);
console.log("Teman:", temannnnn);

// 3. Array angka, hapus angka 3 dan ganti dengan 30
let angkaaa = [1, 2, 3, 4, 5];
angkaaa.splice(2, 1, 30); 
console.log("Angka:", angkaaa);

// 4. Array makanan, tambahin makanan baru di tengah
let makanann = ["Nasi Goreng", "Mie Ayam", "Bakso", "Sate"];
let tengah = Math.floor(makanann.length / 2);
makanann.splice(tengah, 0, "Soto");
console.log("Makanann:", makanann);

// 5. Array benda, ganti "pensil" jadi "pulpen"
let benda = ["buku", "pensil", "penghapus"];
benda.splice(1, 1, "pulpen");
console.log("Benda:", benda);

// kombinasi
// 1. Array game
let game = ["Minecraft", "Valorant", "GTA"];
game.push("PUBG");         // tambah game baru
game.splice(0, 1);         // hapus game pertama
console.log("Game:", game);
console.log("Jumlah game:", game.length);

// 2. Array hewan peliharaan
let hewannn = ["Kucing", "Ikan", "Burung"];
hewannn.push("Kelinci");            // masukin hewannn baru
hewannn.splice(1, 1);                // hapus hewannn lama (Ikan)
let tengahh = Math.floor(hewannn.length / 2);
hewannn.splice(tengahh, 0, "Hamster"); // selipin hewannn di tengah
console.log("Hewannn Peliharaan:", hewannn);

// 3. Array angka
let angkaaaa = [10, 20, 30, 40, 50];
angkaaaa.push(60);    // tambah angkaaaa baru
angkaaaa.shift();     // buang angkaaaa awal
console.log("Angkaaaa:", angkaaaa);
console.log("Jumlah angkaaaa:", angkaaaa.length);

// 4. Array film
let filmm = ["Inception", "Avengers", "Interstellar"];
filmm.unshift("Oppenheimer"); // tambah filmm di awal
filmm.pop();                  // hapus filmm terakhir
filmm[1] = "The Batman";      // ganti filmm ke-2
console.log("Film:", filmm);

// 5. Array buku
let buku = ["Novel", "Komik", "Ensiklopedia"];
buku.push("Biografi");           // tambah buku
buku.splice(0, 1);                // hapus buku pertama
buku.splice(1, 0, "Majalah");     // selipin buku di tengah
console.log("Buku:", buku);




