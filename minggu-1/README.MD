1. Jawaban (pilihan): c. Membuat website interaktif.
Penjelasan singkat: JavaScript dipakai untuk menangani interaksi pengguna, mengubah/menampilkan konten (DOM), menangani event, validasi form, dan membuat UI dinamis.


2. Jawaban (pilihan): a. React.
Catatan: jQuery dan Lodash lebih tepat disebut library (utility), Bootstrap adalah framework CSS/komponen UI, sedangkan React adalah library/framework JS untuk membangun UI komponen.


3. Sebutkan 2 keunggulan JavaScript:

Dapat berjalan di sisi klien (browser) sehingga membuat halaman menjadi interaktif tanpa perlu reload.

Ekosistem besar (banyak library/framework seperti React, Vue, Node.js) dan komunitas aktif.



4. Sebutkan 2 kelemahan JavaScript:

Kode berjalan di client sehingga logika penting/rahasia jika ditempatkan di client rentan dilihat; masalah keamanan perlu ditangani.

Typing yang longgar (loosely typed) bisa menyebabkan bug runtime; kompatibilitas antar-browser kadang perlu penyesuaian.



5. Perbedaan let dan const:

let = variabel yang boleh di-reassign, bersifat block-scoped.

const = variabel yang tidak boleh di-reassign setelah inisialisasi (tetapi untuk objek/array, isi internal masih bisa diubah), juga block-scoped.



6. Tipe data cocok untuk menyimpan:

Nama lengkap siswa → String.

Status login (true/false) → Boolean.



7. Perbedaan == dengan ===:

== melakukan type coercion (mencoba menyamakan tipe dulu sebelum banding), sehingga 5 == "5" → true.

=== adalah strict equality tanpa konversi tipe; 5 === "5" → false.



8. Jawaban (pilihan): b. prompt() — prompt() digunakan untuk meminta input teks dari user. (alert() hanya menampilkan pesan, confirm() meminta konfirmasi true/false, console.log() mencetak ke console.)


9. Apa itu hoisting (singkat):
Hoisting adalah perilaku JavaScript di mana deklarasi fungsi dan deklarasi variabel (khususnya var) dipindahkan ke bagian atas scope saat runtime — sehingga deklarasi bisa diakses sebelum baris tempat mereka ditulis; catatan: var di-hoist dan diinisialisasi undefined, sedangkan let/const di-hoist tetapi belum diinisialisasi (temporal dead zone).


10. Apa itu closure + contoh sederhana (singkat):
Closure adalah fungsi yang “mengingat” dan dapat mengakses variabel dari scope induknya walau scope induk sudah selesai dijalankan.
Contoh (satu baris):

function makeCounter(){ let n = 0; return () => ++n; }
const counter = makeCounter(); // counter() akan terus menambah n yang “diingat”



