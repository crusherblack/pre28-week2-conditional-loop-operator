// map

// filter

// reduce

const todoInput = document.getElementById("todo-input");
const todoSelect = document.getElementById("todo-select");
const listContainer = document.getElementById("list");
const countIdContiner = document.getElementById("count-id");

let todos = [];

function renderTodos() {
  const sumId = todos.reduce(function (prev, curr) {
    return prev + curr.id;
  }, 0); // gunakan untuk menjumlahkan value pada object disebuah array

  const listTodos = todos.map(function (item, index) {
    return `<div class="todo-list">
        <div>
          <p>${item.id}</p>
          <p>${item.title}</p>
        </div>
        <div style="display:flex; align-items:center;">
          <p class="todo-status" onclick="updateStatus(${item.id})">${item.status}</p>
          <i class="fas fa-trash-alt icon-danger" onclick="deleteTodo(${item.id})"></i>
        </div>
    </div>`;
  });

  listContainer.innerHTML = listTodos.join("");
  countIdContiner.innerHTML =
    "Total Todos: " + todos.length + " - Sum Todos Id: " + sumId;
}

// map => merupakan HOF method untuk array yang berguna untuk membuat array baru dan kita ada akses seluruh element pada array yang dimap

function addTodo() {
  if (!todoInput.value) {
    return alert("Inputkan Todo");
  }

  if (!todoSelect.value) {
    return alert("Pilih Status");
  }

  todos = [
    {
      id: parseInt(Math.random() * 1000),
      title: todoInput.value,
      status: todoSelect.value,
    },
    ...todos,
  ];

  renderTodos();

  //clear input setelah ditambah
  todoInput.value = "";
}

function updateStatus(id) {
  const newTodos = todos.map(function (todo, index) {
    if (todo.id === id) {
      let newStatus;

      if (todo.status === "Done") {
        newStatus = "Not Done";
      }

      if (todo.status === "Not Done") {
        newStatus = "Done";
      }
      //update jika id ketemu dalam perulangan
      return {
        // spread operator beguna untuk mengcopy seluruh properties yang ada pada object agar tidak termodifikasi
        ...todo,
        status: newStatus, // item.status === "Not Done" ? "Done" : "Not Done";
      };
    } else {
      return todo;
    }
  });

  todos = newTodos;

  renderTodos();
}

function deleteTodo(id) {
  // filter merupakan array method / HOF yang mereturn array baru dengan jumlah element yang dimodifikasi

  const filteredTodo = todos.filter(function (todo, index) {
    return todo.id !== id;
  }); //yang kita lakukan adalah memfilter data2 yang tidak dihapus

  todos = filteredTodo;

  // const findedIndex = todos.findIndex((item) => item.id === id);
  // todos.splice(findedIndex, 1);

  renderTodos();
}

// synchronous => menunggu task sebelumnya selesai baru lanjut
// asynchronnous => dia jalankan semua task, task mana paling selesai itu yg ditampilkan outpnya

// TUGAS: Untuk week 1 dan 2 pilih 1 saja dan terapkan HOF & Callback
