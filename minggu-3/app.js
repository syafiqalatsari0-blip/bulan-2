// // Variabel dasar
// let nama = "Syafiq";
// let umur = 20;
// let statusPelajar = true;

// console.log("Nama:", nama);
// console.log("Umur:", umur);
// console.log("Pelajar:", statusPelajar);

// // Fungsi sederhana
// function sapa(nama) {
//   return "Halo, " + nama + "!";
// }

// console.log(sapa("Dien"));

// // Array dan perulangan
// let buah = ["Apel", "Mangga", "Jeruk"];

// buah.forEach((item, index) => {
//   console.log(index + 1 + ". " + item);
// });

// // Objek
// let user = {
//   nama: "Syafiq",
//   kota: "Jambi",
//   hobi: ["Coding", "Membaca"]
// };

// console.log("User:", user.nama, "dari", user.kota);

import prayerTime from './components/prayerTime.js'

const apiPrayerTime = await prayerTime()
const jadwals = apiPrayerTime.jadwal.data.jadwal
const lokasi = apiPrayerTime.location

const prayerTimes = [
  {name: "Subuh",   jadwal: jadwals.subuh},
  {name: "Dzuhur",  jadwal: jadwals.dzuhur},
  {name: "Ashar",   jadwal: jadwals.ashar},
  {name: "Maghrib", jadwal: jadwals.maghrib},
  {name: "Isya",    jadwal: jadwals.isya},
]

function render() {
  const prayerTime = document.getElementById("prayerTimes")
  prayerTime.innerHTML = ""
}

console.table(prayerTimes)

render()
