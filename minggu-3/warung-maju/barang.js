// barang.js

// Daftar barang awal
let daftarBarang = [
  { nama: "Indomie", harga: 3000, stok: 10 },
  { nama: "Teh Botol", harga: 5000, stok: 8 },
  { nama: "Kopi", harga: 4000, stok: 6 }
];

// Fungsi tambah barang baru
export function tambahBarang(nama, harga, stok) {
  daftarBarang.push({ nama, harga, stok });
}

// Fungsi cari barang
export function cariBarang(nama) {
  return daftarBarang.find((item) => item.nama.toLowerCase() === nama.toLowerCase());
}

// Fungsi update stok setelah pembelian
export function updateStok(nama, jumlah) {
  let barang = cariBarang(nama);
  if (barang) {
    if (barang.stok >= jumlah) {
      barang.stok -= jumlah;
      console.log(`Stok ${nama} sekarang: ${barang.stok}`);
    } else {
      console.log(`Stok ${nama} tidak cukup!`);
    }
  } else {
    console.log(`${nama} tidak ada di warung.`);
  }
}

export { daftarBarang };
