// Array

// let
// tidak bisa di declare ulang
// valuenya bisa di assign kembali

// const
// tidak bisa di declare ulang
// valuenya tidak bisa di assign lagi

const arraySimple = [];

const cars = ["lamborgini", "bmw", "toyota", "mitsubisi", "bemo"];

cars.splice(3, 2);

console.log("splice cars", cars);

//string
const arrayBoolean = [true, false, true, true]; //boolean
const numbers = [1, 2, 4, 5, 10, 23]; //number

const mixData = ["kevin", 20, true, "gandi"]; //array yang dicampur

// mencari panjang sebuah array
console.log(cars.length);

console.log(mixData);

const array = ["valueA", "valueB", "valueC"]; // panjang dari arraynya itu adalah 3
//                0          1         2
// data atau nilai yang ada dalam array itu dipanggil element
// masing-masing element punya lokasi / identifier sendiri2 yang disebut index
// index selalu dimulai dari 0

console.log(mixData[4]); //undefined
// ketika kita memanggil sebuah element yang indexnya tidak ada maka js akan mereturn undefined

const testAfif = ["Jhon's"];

// konsep manipulasi array
// penambahan
// menghapus

// Penambahan

const basketTeamMembers = ["Ahmad", "Alvin", "Diah", "Ilham"];

console.log(basketTeamMembers);

basketTeamMembers.push("Gandi"); // menambahkan element pada ujung/akhir array

console.log(basketTeamMembers);

basketTeamMembers.unshift("Nadiwa"); // menambahkan element pada awal array

// ===============

// Penghapusan

console.log(basketTeamMembers);

const flowers = ["lili", "mawar", "kembang"];

flowers.pop(); // menghapus element terakhir pada array

console.log(flowers);

flowers.shift(); // menghapus element awal pada array

console.log(flowers);

// ===============

const zodiaks = ["capricorn", "gemini", "aries", "aquarius"];

zodiaks.splice(1, 3); // param1: mau hapus dari index keberapa | param2: mau hapus berapa dari index tersebut

console.log(zodiaks);

// ================ cara hapus elemet dari arary sesuai dengan value

const colors = ["merah", "ungu", "biru", "hijau", "ping"];

// kita bisa gunakan method yang bernama findIndex

const findedColorIndex = colors.findIndex((element) => element === "hijau"); //3

colors.splice(findedColorIndex, 1);
// ketika menggunakan slice jika tidak menambahkan parameter ke dua maka efeknya dia akan menghapus semua element dari array setelahnya

console.log(colors);

// arrray of array
const carts = [
  ["Laptop", 1_000_000],
  ["Mobil", 2_000_000],
  ["Payung", 1_000_000],
  ["Topi", 500_000],
];

console.log(carts[1][0]); // Mobil
console.log(carts[3][0]);

console.table(carts);
