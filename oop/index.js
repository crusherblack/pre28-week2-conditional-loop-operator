const person = {
  name: "andi",
  printName: function () {
    return this.name;
  },
};

// console.log(person.printName()); // andi

// Dalam OOP ada 2 hal yang perlu kalian ketahui
// 1. Encapsulation
// - segala macam fungsionalitas dari object tersebut dapat saling berkerjasama dan bekerjasa satu sama lain secara internal dan disembunyikan dari luar.

// kita akan membuat semacam blueprint
// blueprint membuat sebuah mobil
// - mesin
// - roda
// - body
// - mesin harus berfungsi
// - roda harus bisa berputar
// - body/rangka bisa aerodinamis

const car = {
  name: "Lamborgini",
  mesin: "RX Engine 7",
  roda: "Ban King Wheels",
  body: "Body Tangguh",
  turnOnEngine: function () {
    return "Hidupkan" + this.mesin + "Hingga menyala";
  },
  rodaBerputar: function () {
    return (
      "Roda Berputar" + this.roda + "Sehingga mobil" + this.name + "Berjalan"
    );
  },
};

// console.log(car.turnOnEngine());
// console.log(car.rodaBerputar());

// Object Constructor - Prototype Pattern

// function Car() {} // berhasil bikin Object Constructor

// Car.prototype.name = "Lamborgini";
// Car.prototype.mesin = "RX Engine 7";

// console.log(new Car()); // ketika init sebuah object baru, maka javascript akan membuat sebuah instance baru

// const lamborginiCar = new Car();

// console.log(lamborginiCar.name);
// console.log(lamborginiCar.mesin);

// Object Constructor - Constructor Pattern

// function Person(name, gender) {
//   this.name = name;
//   this.gender = gender;
//   this.printName = function () {
//     console.log("This Person Name is:" + this.name);
//   };
// }

// const askaPerson = new Person("Aska", "Male");
// const anjarPerson = new Person("Anjar", "Male");

// console.log(askaPerson);
// console.log(anjarPerson);

// askaPerson.printName();
// anjarPerson.printName();

// Object Constructor - Class Pattern

// class Receipt {
//   name = "Kue";
//   description = "Kue baru";

//   // constructor dijalankan pertama kali ketika instance object dibuat
//   constructor(fullName) {
//     this.fullName = fullName; // object binding
//   }

//   printReceipt() {
//     console.log("Cetak " + this.fullName);
//   }
// }

// const bakwanReceipt = new Receipt("Bakwan Udang");
// console.log(bakwanReceipt.fullName);
// bakwanReceipt.printReceipt();

// const martabakReceipt = new Receipt("Martabak Terang Bulan");
// martabakReceipt.printReceipt();

// ketika bikin sebuah class
// 1. Mulai dengan keyword class
// 2. Berikana nama dengan huruf Capital (untuk membantu membedakan ini class / function)
// 3. Langsung buka tutup kurung kurawal

// static pada class hanya bisa diakses oleh dirinya sendiri dan tidak bisa diluar tetapi ketika ingin memanggil kita harus memanggil class itu sendiri
class Report {
  static address = "jakarta"; // dengan static properties hanya bisa diakses oleh dirinya sendiri

  constructor(studentName, teacher, score) {
    this.studentName = studentName;
    this.teacher = teacher;
    this.score = score;
  }

  static testing() {
    return "testing"; // dengan static method hanya bisa diakses oleh dirinya sendiri
  }

  printStaticMethod() {
    console.log(Report.address);
    console.log(Report.testing());
  }

  printBiodata() {
    return "Nama dari murid:" + this.studentName;
  }

  static printScore() {
    const score = this.score;

    if (score > 85) {
      return "A";
    } else {
      return "B";
    }
  }

  printFullReport() {
    return `Murid dengan nama: ${
      this.studentName
    } mendapatkan nilai: ${Report.printScore()} dengan guru ${this.teacher}`;
  }
}

class MapelReport extends Report {
  printMapel() {
    console.log(this.studentName);
    console.log("Matematika");
  }
} //inheritance, class yang extends sebuah class lain akan mewarisi properties dan method class yang bersifat public tersebut

const udinMapelReport = new MapelReport("Udin", "Mas Fadhil", 80);

udinMapelReport.printMapel();

const rezaReport = new Report("Reza", "Mas Fadhil", 80);

console.log(rezaReport.address);
rezaReport.printStaticMethod();

// const sheillaReport = new Report("Sheilla", "Mas Ilham", 87);
// const afifReport = new Report("Afif", "Mas Fadhil", 90);

// console.log(rezaReport.printScore());
// console.log(afifReport.printScore());

// console.log(sheillaReport.printFullReport());

const formElement = document.getElementById("form"); //select element
const outputElemet = document.getElementById("output"); //select element

formElement.addEventListener("submit", function (e) {
  e.preventDefault(); //tujuannya adalah agar browser refresh ketka disubmit

  const studentNameElement = formElement.elements["studentName"]; //select element
  const teacherNameElement = formElement.elements["teacherName"]; //select element
  const studentScoreElement = formElement.elements["studentScore"]; //select element

  const report = new Report(
    studentNameElement.value, //mendapatkan value dari element
    teacherNameElement.value,
    studentScoreElement.value
  );

  //mencetak report
  outputElemet.innerHTML = report.printFullReport();

  //clear form tiap element
  studentNameElement.value = "";
  teacherNameElement.value = "";
  studentScoreElement.value = "";
});

class Motor {
  static engine = "Engine";
  constructor(name) {
    this.name = name;
  }

  //setter => method yang kita gunakan untuk merubah value dari sebuah properties
  set changeName(newName) {
    this.name = "Motor" + newName;
  }

  //getter => method yang kita gunakan untuk membuat properties baru (kamu bisa menampilkan static properties disini)
  get getEngine() {
    return Motor.engine + "-FACK020";
  }

  get getMotorLengkap() {
    return this.name + "Lengkap";
  }
}

const motor = new Motor("Supra");

motor.changeName = "Mio";

console.log(motor.getEngine);

console.log(motor.name);

console.log(motor.getMotorLengkap);
