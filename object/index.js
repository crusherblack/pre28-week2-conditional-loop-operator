// object berisikan data berupa propertis dan value

// const person = {
//   name: "Deby",
//   gender: "famale",
//   age: 21,
//   isGraduated: false,
//   skills: ["HTML", "CSS", "React.js"],
//   school: {
//     name: "Universitas Indonesia",
//     address: "Bogor",
//     jurusan: "Sistem Informasi",
//     mapel: {
//       mapelUtama: "Matematika",
//     },
//   },
//   phone: "02832093023",
// };

// cara memanggil value dari object
// console.log(person["name"]); //tidak biasa
// console.log(person.name); // biasa digunakna

// menghitung panjang object
// const objectLength = Object.keys(person).length;

// console.log(objectLength);

// const person = ["Deby", "Famale", 21, false];

// gunakan array ketika punya yang type datanya sama dan maknanya sama
// gunakan object agar kita tahu attribute dari sebuah variable

// console.log(person.name);
// console.log(person.gender);

// console.log(person.jurusan); // salah karena jurusan berada pada hirarki kedua dan milik propertis school

// console.log(person.school); // {
//     name: "Universitas Indonesia",
//     address: "Bogor",
//     jurusan: "Sistem Informasi",
//   }, => kurang tepat

// console.log(person.school[2]); // salah karena object tidak punya index

// console.log(person.school.jurusan); // bener

// console.log(person.school.mapel.mapelUtama);

// console.log(person.skills[2]);

//function dalam object itu dipanggil method
// const student = {
//   name: "Brian",
//   gender: "male",
//   job: "Data Analyst",
//   address: {
//     name: "Jakarta",
//     postCode: "12121",
//   },
//   printName: function (params) {
//     alert(`name ${this.name} | job: ${this.job} | ${params}`);
//   },
//   "Log In": "saya sudah login",
// };

// console.log(student["Log In"]);

// student.printName("hallo aku paramenter");

// for (var properties in student) {
//   console.log(student[properties]);

//   if (typeof student[properties] === "object") {
//     for (var pro2 in student[properties]) {
//       student[properties][pro2];
//     }
//   }
// }
