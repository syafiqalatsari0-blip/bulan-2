// import dari file lain
import { luasPersegi } from "./persegi.js";
import { luasLingkaran } from "./lingkaran.js";

console.log("Luas Persegi (sisi 4) =", luasPersegi(4));
console.log("Luas Lingkaran (jari-jari 7) =", luasLingkaran(7));


// import  teks.js
import { besar } from "./teks.js";

console.log(besar("belajar modular"));

// import  waktu.js
import { jamSekarang } from "./waktu.js";

console.log("Jam sekarang:", jamSekarang());

// import salam.js
import sapa from "./salam.js";

console.log(sapa("Syafiq"));

// import default (versi) dan named (hitung)
import versi, { hitung } from "./utils.js";

console.log("Aplikasi:", versi());
console.log("Hasil hitung 5 + 3 =", hitung(5, 3));




