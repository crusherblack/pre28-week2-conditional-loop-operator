const listContainer = document.getElementById("list");
const list2Container = document.getElementById("list2");

const url = "https://pokeapi.co/api/v2/";

async function getPokemonAndPostList() {
  // async/await hanya bisa digunakan untuk promise
  // promise => function
  // ketika bermain dengan promise itu codenya async
  // ketika kita ingin mendapatkan data dari promise kita harus handle menggunakan promise then / async await
  // ketika menggunakan async await / promise then, promise yang sebelumnya async akan berubah menjadi seolah2 sync
  // ketika menggunakan async await jangan lupa masing2 promise ditambahin await dan tampung dalam sebuah variable
  // kalau gak ditampung datanya bakal tidak dapat, atau kalau lupa nambah await datanya gak muncul / gak dapat
  // ketika ingin menjalankan promise secara async lagi dan tidak depen dengan code sebelumnya kamu bisa menggunakan promise all

  try {
    const rawResponse = await fetch(url + "pokemon?limit=100&offset=200");
    const response = await rawResponse.json();

    const pokemons = response.results
      .map(function (pokemon, index) {
        return `
            <div class="todo-list">
                <p>${pokemon.name}</p>
                <p>${pokemon.url}</p>
            </div>
        `;
      })
      .join("");

    listContainer.innerHTML = pokemons;

    const rawResponse2 = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const response2 = await rawResponse2.json();

    const posts = response2
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
  } catch (error) {
    console.log(error);
  } finally {
    // console.log("selesai");
  }
}

getPokemonAndPostList();

// fetch(url + "pokemon?limit=100&offset=200")
//   .then(function (rawResponse) {
//     return rawResponse.json();
//   })
//   .then(function (response) {
//     const pokemons = response.results
//       .map(function (pokemon, index) {
//         return `
//             <div class="todo-list">
//                 <p>${pokemon.name}</p>
//                 <p>${pokemon.url}</p>
//             </div>
//         `;
//       })
//       .join("");

//     listContainer.innerHTML = pokemons;

//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(function (rawResponse) {
//         return rawResponse.json();
//       })
//       .then(function (response) {
//         const posts = response
//           .map(function (post, index) {
//             return `
//             <div class="post-list">
//                 <p style="font-weight:bold">${post.title}</p>
//                 <p>${post.body}</p>
//             </div>
//         `;
//           })
//           .join("");

//         list2Container.innerHTML = posts;
//       });
//   })
//   .finally(function () {
//     console.log("done fetching");
//   });

// function firstPromise() {
//   return new Promise(function (resolve) {
//     setTimeout(() => {
//       resolve("satu");
//     }, 1000);
//   });
// }

// function secondPromise() {
//   return new Promise(function (resolve) {
//     setTimeout(() => {
//       resolve("dua");
//     }, 1000);
//   });
// }

// function thirdPromise() {
//   return new Promise(function (resolve) {
//     setTimeout(() => {
//       resolve("tiga");
//     }, 1000);
//   });
// }

// async function showNumber() {
//   console.log("nol");
//   console.log(await firstPromise());
//   console.log("satu setengah");
//   console.log(await secondPromise());
//   console.log(await thirdPromise());
// }

// showNumber();

// function sequence(input) {
//   return new Promise(function (resolve, reject) {
//     if (input <= 0) {
//       reject("angka tidak boleh nol atau dibawah nol");
//     } else {
//       let temp = [];
//       for (let index = 0; index < input; index++) {
//         temp.push(index + 1);
//       }

//       resolve(temp);
//     }
//   });
// }

// (async function () {
//   try {
//     const result = await sequence(100);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// })();
