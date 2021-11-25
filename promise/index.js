const color = "ijo";

// bikin promise sederhana yang me-fullfield jika kondisi benar dan reject jika salah
const isRed = new Promise(function (resolve, reject) {
  if (color === "merah") {
    resolve("Betul warnanya merah");
  } else {
    reject("Salah warnanya bukan merah");
  }
});

// agar hasil dari promise kita peroleh, kita handling menggunakan then (mendapat output berhasil) atau catch (mendapatkan output jika gagal)
isRed
  .then(function (result) {
    // then hanya dieksekusi kalau promise fullfiled / berhasil
    console.log(result);
  })
  .catch(function (error) {
    // catch hanya berjalan kalau ada error
    console.log(error);
  })
  .finally(function () {
    // dijalankan meskipun berhasil atau gagal
    console.log("selesai");
  });

// ketika proses asynchronous gagal maka aplikasimu bakal crash/break
// agar aplikasinya tidak break temen2 harus melakukan error handling

const listContainer = document.getElementById("list"); // select container untuk menampilkan list api
const list2Container = document.getElementById("list2"); // select list 2

const url = "https://pokeapi.co/api/v2/"; // base url dari api
// PROMISE CHAINING
fetch(url + "pokemon?limit=100&offset=200") // inputkan url api
  .then(function (rawResponse) {
    return rawResponse.json(); // proses untuk conversi json ke object agar bisa diolah pada aplikasi
  })
  .then(function (response) {
    // proses kedua untuk menampilkan list pokemon
    const pokemons = response.results // dapat 100 array list pokemon
      .map(function (pokemon, index) {
        return `
            <div class="todo-list">
                <p>${pokemon.name}</p>
                <p>${pokemon.url}</p>
            </div>
        `;
      })
      .join(""); // .join berguna untuk mengkonversi array menjadi string dan setelah jadi menghilangkan pemisah (,) dan menggantinya dengan ""

    listContainer.innerHTML = pokemons; // embed list pokemon ke DOM HTML

    //fomat api itu berbeda-beda, console log dulu / cek baru di looping
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(function (rawResponse) {
        return rawResponse.json();
      })
      .then(function (response) {
        const posts = response // dapat 100 array list posts
          .map(function (post, index) {
            return `
            <div class="post-list">
                <p style="font-weight:bold">${post.title}</p>
                <p>${post.body}</p>
            </div>
        `;
          })
          .join("");

        list2Container.innerHTML = posts;
      });
  })
  .finally(function () {
    console.log("done fetching"); // finnaly dijalankan setelah semua proses async selesai dan dia akan dieksekusi meskipun berhasil atau gagal
  });

// ketika eksekusi sebuah proses asynchronous didalam then makan proses tersebut menjadi sychronous / menunggu proeses sebelumnya selesai

// promise ALL => promise yang mengeksekusi beberepa promise dalam 1 waktu dan menggabungkannya
// menjadi 1 proses yang sama kemudian dia akan gabung data2 nya jadi 1 array yang sama

// kapan menggunakan? ketika response dari apinya sama semua

function doFetch(url) {
  return fetch(url).then(function (rawResponse) {
    return rawResponse.json();
  });
}

let urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.coms/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
];

let promises = [];

urls.forEach(function (url) {
  promises.push(doFetch(url));
});

Promise.all(promises)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log("gagal", error);
  });

// promise Race

Promise.race(promises).then(function (response) {
  console.log(response);
});
