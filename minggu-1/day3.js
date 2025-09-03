// 1.Menentukan apakah angka ganjil atau genap
const angka = 7
if (angka % 2 === 0) {
    console.log( "Genap")
} else {
    console.log( "Ganjil")
}
// 2.menentukan boleh masuk bioskop (usia > 17)
let usia = 16
if (usia > 17) {
    console.log("boleh masuk bioskop")
} else {
    console.log("tidak boleh masuk bioskop")
}
// 3.Menentukan apakah suhu termasuk dingin, normal, atau panas. 
let suhu = 25
if (suhu < 20) {
    console.log("dingin")
} else if (suhu < 30) {
    console.log("normal")
} else {
    console.log("panas")
}
// 4.Mengecek login dengan username dan password.
let username = "admin"
let password = "1234"
if (username === "admin" && password === "1234") {
    console.log("login berhasil")
} else {
    console.log("login gagal")
}
// 5.Mengecek apakah nilai ujian lulus atau tidak.
let nilai = 65
if (nilai >= 70) {
    console.log("lulus")
} else {
    console.log("tidak lulus")
}

// soal switch
// 1.Menampilkan nama bulan dari angka (1–12).
const bulan = 5
switch (bulan) {
    case 1:
        console.log("januari")
        break;
        case 2:
            console.log("februari")
            break;
            case 3:
                console.log("maret")
                break;
                case 4:
                    console.log("april")
                    break;
                    case 5:
                        console.log("mei")
                        break;
                        case 6:
                            console.log("juni")
                            break;
                            case 7:
                                console.log("juli")
                                break;
                                case 8:
                                    console.log("agustus")
                                    break;
                                    case 9:
                                        console.log("september")
                                        break;
                                        case 10:
                                            console.log("oktober")
                                            break;
                                            case 11:
                                                console.log("november")
                                                break;
                                                case 12:
                                                    console.log("desember")
                                                    break;
    default:
        console.log("bulan tidak valid")
        break;
}
// 2.Menampilkan menu makanan berdasarkan pilihan nomor.
let menu = 2
switch (menu) {
    case 1:
        console.log("nasi goreng")
        break;
        case 2:
            console.log("mie goreng")
            break;
            case 3:
                console.log("sate ayam")
                break;
                case 4:
                    console.log("bakso")
                    break;
    default:
        console.log("menu tidak tersedia")
        break;
}
// 3.Menentukan jenis kelamin (L/P).
let jenisKelamin = "L"
switch (jenisKelamin) {
    case "L":
        console.log("Laki-laki")
        break;
        case "P":
            console.log("Perempuan")
            break;
    default:
        console.log("Jenis kelamin tidak valid")
        break;
}
// 4.Menentukan tingkat pendidikan (SD, SMP, SMA).
const tingkat = "SMA"
switch (tingkat) {
    case "SD":
        console.log("Sekolah Dasar")
        break;
        case "SMP":
            console.log("Sekolah Menengah Pertama")
            break;
            case "SMA":
                console.log("Sekolah Menengah Atas")
                break;
    default:
        console.log("Tingkat pendidikan tidak valid")
        break;
}
// 5.Menentukan status lampu lalu lintas (Merah, Kuning, Hijau).
let lampu = "kuning"
switch (lampu) {
    case "merah":
        console.log("berhenti")
        break;
        case "kuning":
            console.log("hati-hati")
            break;
            case "hijau":
                console.log("jalan")
                break;
    default:
        console.log("status lampu tidak valid")
        break;
}