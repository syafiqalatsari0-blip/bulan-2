// Import fungsi dari file lain
import { luasPersegi } from "./persegi.js";
import { luasLingkaran } from "./lingkaran.js";

let sisi = 5;
let jariJari = 7;

console.log(`Luas persegi dengan sisi ${sisi} = ${luasPersegi(sisi)}`);
console.log(`Luas lingkaran dengan jari-jari ${jariJari} = ${luasLingkaran(jariJari)}`);


// Import fungsi dari teks.js
import { besar } from "./teks.js";

console.log(besar("belajar modular"));


// Import fungsi dari waktu.js
import { jamSekarang } from "./waktu.js";

console.log("Jam sekarang:", jamSekarang());

// Import default dari salam.js
import sapa from "./salam.js";

console.log(sapa("dien")); 


// Import default dan named export dari utils.js
import versi, { hitung } from "./utils.js";

console.log("Aplikasi:", versi());
console.log("Hasil hitung 5 + 3 =", hitung(5, 3));

