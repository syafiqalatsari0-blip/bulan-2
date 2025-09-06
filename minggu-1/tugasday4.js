// latihan mandiri
// 1. Fungsi luasPersegi(sisi) -> mengembalikan sisi x sisi
const luasPersegi = sisi => sisi * sisi;

console.log(luasPersegi(4)); 
console.log(luasPersegi(7)); 


// 2. Fungsi untuk menghitung jumlah 3 angka
const jumlahTigaAngka = (a, b, c) => a + b + c;

console.log(jumlahTigaAngka(1, 2, 3)); 
console.log(jumlahTigaAngka(10, -2, 5)); 


// 3. Fungsi isEven(angka) -> true jika genap, false jika ganjil
const isEven = angka => angka % 2 === 0;

console.log(isEven(4)); 
console.log(isEven(7)); 
console.log(isEven(0)); 

// study kasus
// f = (c * 9/5) + 32
// Fungsi konversi suhu dari Celcius ke Fahrenheit
const konversiSuhu = celcius => (celcius * 9/5) + 32;

// Contoh penggunaan:
console.log(`Suhu 30°C = ${konversiSuhu(30)}°F`); 


console.log(`Suhu 0°C = ${konversiSuhu(0)}°F`); 


console.log(`Suhu 100°C = ${konversiSuhu(100)}°F`); 