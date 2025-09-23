document.getElementById("btn1").onclick = function() {
  document.getElementById("msg").innerText = "Tombol diklik!";
};

let area = document.getElementById("area");
area.onmouseover = function() {
  area.style.backgroundColor = "yellow";
};
area.onmouseout = function() {
  area.style.backgroundColor = "lightblue";
};

let input1 = document.getElementById("input1");
let show = document.getElementById("show");
input1.oninput = function() {
  show.innerText = this.value;
};

let btn2 = document.getElementById("btn2");
btn2.onclick = function() {
  this.disabled = true;
  this.innerText = "Sudah nonaktif";
};

let btn3 = document.getElementById("btn3");
btn3.onclick = function() {
  alert("Handler pertama");
};
btn3.onclick = function() {
  alert("Handler kedua (menimpa yang pertama)");
};

let btn4 = document.getElementById("btn4");
function changeColor() {
  btn4.style.backgroundColor = "pink";
}
function logConsole() {
  console.log("Tombol diklik!");
}
btn4.addEventListener("click", changeColor);
btn4.addEventListener("click", logConsole);

document.getElementById("btnRemove").onclick = function() {
  btn4.removeEventListener("click", logConsole);
  alert("Handler log dihapus");
};

let form = document.getElementById("myForm");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  console.log("Nama: " + document.getElementById("nama").value);
});

let myList = document.getElementById("myList");
myList.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.innerText = "Sudah diklik!";
  }
});

document.getElementById("btnOnce").addEventListener("click", function() {
  alert("Aku hanya bisa diklik sekali!");
}, { once: true });
