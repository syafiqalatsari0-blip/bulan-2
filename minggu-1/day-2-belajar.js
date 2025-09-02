// biodata
console.log("nama : muhammad dien syafiq")
console.log("umur : 22 tahun")
console.log("alamat : yogyakarta")

// array buah
let buah = ["mangga", "pisang", "semangka", "leci"]
console.table(buah)

// nama lewat prompt
let nama = prompt("masukan nama anda:")
if (nama) {
    alert("halo" +nama+"! senang bertemu denganmu.")
} else {
    alert("kamu belum memasukan nama.")
}

// konfir pakai data
let hapus = confirm("kamu yakin ingin menghapus data ini?")
if (hapus) {
    console.warn ("data berhasil di hapus")
} else {
    console.log("data aman,tidak jadi di hapus")
}

// jika variabel kosong
let user =""
if (user ==="") {
    console.error("error: variabel user masih kosong")
}