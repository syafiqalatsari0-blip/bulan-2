// alarm
// setelah 5 detik tampil "Bangun!"
setTimeout(() => {
  console.log("Bangun!");
}, 5000);


// tampilkan jam sekarang setiap detik
setInterval(() => {
  console.log("Jam sekarang:", new Date().toLocaleTimeString());
}, 1000);

let counter = 0;
let loading = setInterval(() => {
  console.log("Loading...");
  counter++;

  if (counter === 5) {
    clearInterval(loading); // stop setelah 5 kali
    console.log("Selesai Loading");
  }
}, 1000);

function cekNomor(n) {
  return new Promise((resolve, reject) => {
    if (n % 2 === 0) {
      resolve("Genap");
    } else {
      reject("Ganjil");
    }
  });
}

// coba pakai
cekNomor(4)
  .then((pesan) => console.log(pesan))
  .catch((error) => console.log(error));

cekNomor(7)
  .then((pesan) => console.log(pesan))
  .catch((error) => console.log(error));

  // fungsi pura-pura ambil data setelah 3 detik
async function ambilUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Budi");
    }, 3000);
  });
}

// pakai async/await
async function tampilkanUser() {
  const user = await ambilUser();
  console.log("Data User:", user);
}

tampilkanUser();
