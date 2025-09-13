// utils.js

// Hitung total belanja
export function hitungTotal(...belanja) {
  let total = 0;
  for (let { harga, jumlah } of belanja) {
    total += harga * jumlah;
  }
  return total;
}
