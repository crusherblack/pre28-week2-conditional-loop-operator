const bookList = document.getElementById("book-list");

const books = [
  "Harry Poter",
  "Narnia",
  "Avatar",
  "Naruto",
  "Kambing Jantan",
  "UUD 1945",
];

let renderList = [];

// for (i = 0; i < books.length; i++) {
//   renderList.push(`<li>${books[i]}</li>`);
// }

// for in => for in gak jauh beda dengan for biasa, tapi lebih clean
// for (var i in books) {
//   renderList.push(`<li>${books[i]}</li>`);
// }

//for of => for of mengakses langsung element array yang di looping secara langsung
for (var book of books) {
  renderList.push(`<li>${book}</li>`);
}

bookList.innerHTML = renderList.join("");

// i = 0 => PERULANGAN PERTAMA | 0 < 6 = TRUE
// i = 1 => PERULANGAN KEDUA   | 1 < 6 = TRUE
// i = 2 => PERULANGAN KETIGA  | 1 < 6 = TRUE
// i = 3 => PERULANGAN KEEMPAT | 3 < 6 = TRUE
// i = 4 => PERULANGAN KELIMA  | 4 < 6 = TRUE
// i = 5 => PERULANGAN KEENAM  | 5 < 6 = TRUE
// i = 6 => PERULANGAN STOP    | 6 < 6 = FALSE
