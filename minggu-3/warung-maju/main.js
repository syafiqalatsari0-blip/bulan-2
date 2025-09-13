// main.js
import { daftarBarang, tambahBarang, cariBarang, updateStok } from "./barang.js";
import { hitungTotal } from "./utils.js";

// Daftar awal
console.log("Daftar Barang Awal:", daftarBarang);

// Tambah barang baru
tambahBarang("Susu", 7000, 5);
console.log("Setelah tambah barang:", daftarBarang);

// Cari barang
let hasilCari = cariBarang("Kopi");
console.log("Hasil cari Kopi:", hasilCari);

// Hitung total belanja
let totalBelanja = hitungTotal(
  { harga: 3000, jumlah: 2 }, // 2 Indomie
  { harga: 5000, jumlah: 1 }  // 1 Teh Botol
);
console.log("Total Belanja:", totalBelanja);

// Update stok setelah beli