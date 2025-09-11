// Array of object berisi daftar menu
const menu = [
  { nama: "Nasi Goreng", kategori: "Makanan", harga: 20000 },
  { nama: "Mie Ayam", kategori: "Makanan", harga: 25000 },
  { nama: "Es Teh", kategori: "Minuman", harga: 5000 },
  { nama: "Jus Alpukat", kategori: "Minuman", harga: 18000 },
  { nama: "Ayam Bakar", kategori: "Makanan", harga: 30000 }
];

// 1. Tampilkan semua menu dengan forEach
console.log("=== Daftar Menu ===");
menu.forEach(item => {
  console.log(`Nama: ${item.nama} | Kategori: ${item.kategori} | Harga: ${item.harga}`);
});

// 2. Cari semua menu dengan harga di bawah Rp30.000 (filter)
const murah = menu.filter(item => item.harga < 30000);
console.log("\n=== Menu di bawah Rp30.000 ===");
console.log(murah);

// 3. Buat array baru berisi nama-nama menu (map)
const namaMenu = menu.map(item => item.nama);
console.log("\n=== Nama-nama Menu ===");
console.log(namaMenu);

// 4. Hitung total harga semua menu (reduce)
const totalHarga = menu.reduce((total, item) => total + item.harga, 0);
console.log("\n=== Total Harga Semua Menu ===");
console.log(totalHarga);

// 5. Cari satu menu dengan nama tertentu (find)
const cariEsTeh = menu.find(item => item.nama === "Es Teh");
console.log("\n=== Cari Menu 'Es Teh' ===");
console.log(cariEsTeh);

// 6. Destructuring array untuk ambil 2 makanan pertama
const [makanan1, makanan2] = menu;
console.log("\n=== Destructuring Array ===");
console.log(makanan1, makanan2);

// 7. Destructuring object untuk ambil nama dan harga dari menu[0]
const { nama, harga } = menu[0];
console.log("\n=== Destructuring Object ===");
console.log(`Nama: ${nama}, Harga: ${harga}`);
