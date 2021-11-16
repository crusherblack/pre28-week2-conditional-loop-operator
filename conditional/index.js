// OPERATOR ==========================================================================================
//operator aritmatika

// function sumNumber(numberA, numberB) {
//   return numberA + numberB;
// }

// function subNumber(numberA, numberB) {
//   const result = numberA - numberB;

//   return result;
// }

// function multipleNumber(numberA, numberB) {
//   return numberA * numberB;
// }

// function devideNumber(numberA, numberB) {
//   return numberA / numberB;
// }

// // function isEvenOrOdd(number) {
// //   const color = "red";

// //   if (color == "hijau") {
// //     // jika variable color nilainya sama dengan string hijau
// //     // kalau == maka dia akan membandingkan nilai dari pihak sebelah kiri dengan kanan
// //     console.log("Warnanya adalah merah"); // maka tampilkan warnanya adalah merah
// //   } else {
// //     // jika kondisi tidak terpenuhi maka tampilkan Warnanya bukan merah
// //     console.log("Warnanya bukan merah");
// //   }
// // }

// function isEvenOrOdd(number) {
//   if (number % 2 == 0) {
//     console.log("Bilangan genap");
//   } else {
//     console.log("Bilangan ganjil");
//   }
// }

// console.log(sumNumber(1, 5)); // 6
// console.log(subNumber(10, 5)); // 5
// console.log(multipleNumber(2, 2)); // 4
// console.log(devideNumber(100, 2)); // 50

// isEvenOrOdd(7);

// // operator assigment

// const title = "Hello World"; // menset value ke variable title

// // menset value variable number dari nilai sebelumnya dan ditambahkan ke nilai terbaru
// let number = 10; //awal: 10
// number += 5; // next: 15
// number += 1; // next: 16

// let number2 = 10;
// number2 = number2 + 5;
// number2 = number2 + 1;

// console.log(number);

// let money = 1000; // awal: 1000
// money -= 100; // next: 900
// money -= 100; // next: 800

// console.log(money);

// // *= kali
// // /= bagi
// // %= modulus

// //logical operator

// console.log("A" == "B"); //false
// console.log("1" == 1); //true
// // kalau sama dengan 2 hanya membandingkan nilainya saja

// console.log("1" === "1"); //true
// // kalau sama dengan 3, dia membandingkan tipe data dan nilainya
// console.log(typeof "1"); //string
// console.log(typeof 1); //number

// // kapan menggunakan sama dengan 2 atau 3?
// // usahakan pake sama dengan 3 dimanapun untuk menghindari bug pada program

// // operator lebih kecil dari (hanya untuk tipe data bilangan)
// console.log(1 < 3); //true
// console.log(221 < 192); //false

// // operator lebih besar dari (hanya untuk tipe data bilangan)
// console.log(5 > 1); //true
// // 4, 3, 2 , 1

// // operator lebih besar sama dengan (hanya untuk tipe data bilangan)
// console.log(5 >= 5); //true
// // 5, 4, 3, 2 , 1

// console.log(10 >= 10); //true
// // 10 == 10
// // 10 > 9

// // operator bilangan lebih kecil sama dengan (hanya untuk tipe data bilangan)
// console.log(11 <= 10); //false

// // incrementing dan decrementing operator
// let myMoney = 1000;
// myMoney++;
// myMoney++;
// myMoney++;
// myMoney++;
// myMoney++;

// console.log(myMoney);

// const handiHeight = 180;
// const hanggaHeight = 165;

// console.log(handiHeight > hanggaHeight);

// function checkHeight(height1, height2) {
//   return height1 > height2;
// }

// console.log(checkHeight(100, 50));

// // logical operator advanced

// // table kebenaran operator AND (dan)
// // con1  con2  result
// // true  true  true
// // false true  false
// // true  false false
// // false false false

// const isManInterested = false;
// const isWomenInterested = false;

// if (isManInterested && isWomenInterested) {
//   //membandingkan nilai kiri dan kanan itu benar / sama
//   console.log("Jodoh");
// } else {
//   console.log("Mantan");
// }

// // table kebenaran operator OR (atau)
// // con1  con2  result
// // true  true  true
// // false true  true
// // true  false true
// // false false false

// const fish = false;
// const chicken = false;

// if (fish || chicken) {
//   console.log("oke aku makan disini");
// } else {
//   console.log("oke aku cari restorant lain");
// }

// // not
// const balon1 = "merah";
// const balon2 = "merah";

// if (balon1 != balon2) {
//   //mencek apakah kedua nilai/variable beda
//   console.log("warnanya beda");
// } else {
//   console.log("warnanya sama");
// }

// OPERATOR END ==========================================================================================

// LOOPING ==========================================================================================

// for loop

for (let i = 0; i < 1000; i++) {
  // hanya melakukan jika kondisi terpenuhi
  console.log("perulangan" + i);
}

let nilaiAwal = 0;

while (nilaiAwal < 10) {
  // hanya melakukan jika kondisi terpenuhi
  console.log("kirim surat" + nilaiAwal);

  nilaiAwal++;
}

let p = 0;

do {
  console.log("jalan"); // pasti melakukan perulangan minimal 1 kali
  p++;
} while (p < 10);

// perulangan dalam perulangan

for (let i = 0; i < 10; i++) {
  console.log("Perulangan Luar" + i);

  for (let j = 0; j < 5; j++) {
    console.log("Perulangan Dalam" + j);
  }
}

for (let i = 0; i < 10; ++i) {
  // hanya melakukan jika kondisi terpenuhi
  console.log("perulangan" + i);
}

let bilangan = 10;
console.log(++bilangan); //11
console.log(bilangan); //11

let bilangan2 = 10;
console.log(bilangan2++); //10
console.log(bilangan2); //11

//conditional

const alvinScore = 90;

if (alvinScore >= 85) {
  //jika nilai alvin lebih besar sama dengan 85 maka A
  console.log("Nilainya A");
} else if (alvinScore < 85 && alvinScore >= 70) {
  //jika nilai alvin lebih kecil dari 85 dan lebih besar sama dengan 70 maka nilainya adalah B
  console.log("Nilainya B");
} else {
  //Jika nilai alvin tidak sesuai dengan kondisi diatas maka nilainya adalah E
  console.log("Nilainya E");
}

const lampu = "Merah";

switch (
  lampu // jadi dia caseSensitive || ===
) {
  case "merah":
    console.log("Berhenti");
    break;

  case "kuning":
    console.log("Hati-hati");
    break;

  case "hijau":
    console.log("Jalan");
    break;

  default:
    console.log("gak boleh ngapa-ngapa2in");
    break;
}

const number = 1;

//dia mencek type data dan nilai
switch (number) {
  case "1":
    console.log("satu");
    break;

  default:
    console.log("dua");
    break;
}

const person1 = {
  name: "M Afif",
  gender: "male",
  position: "Manager",
  golangan: "IV",
};

const person2 = {
  name: "Hidayatullah",
  gender: "male",
  position: "CEO",
  golangan: "III",
};

const person3 = {
  name: "Sheilla Ryzki",
  gender: "famale",
  position: "Manager",
  golangan: "III",
};

//nested loop bacanya dari atas kebawah, dari parent ke children / dari luar kedalam

function calculatedSallary(person) {
  //object destructuring

  const { name, gender, position, golangan } = person;

  let baseSallary = 0;
  let bonus = 0;

  if (position === "Manager") {
    baseSallary = 5_000_000;
    if (golangan === "IV") {
      bonus = 1_000_000;
    } else {
      bonus = 500_000;
    }
  } else if (position === "CEO") {
    baseSallary = 20_000_000;
    if (golangan === "IV") {
      bonus = 2_000_000;
    } else {
      bonus = 1_000_000;
    }
  } else {
    baseSallary = 4_000_000;
    if (golangan === "IV") {
      bonus = 500_000;
    } else {
      bonus = 300_000;
    }
  }

  return baseSallary + bonus;
}

console.log(calculatedSallary(person2));

function calculatedSallary2(person) {
  //object destructuring

  const { name, gender, position, golangan } = person;

  let baseSallary = 0;
  let bonus = 0;

  switch (position) {
    case "Manager":
      baseSallary = 5_000_000;
      if (golangan === "IV") {
        bonus = 1_000_000;
      } else {
        bonus = 500_000;
      }
      break;

    case "CEO":
      baseSallary = 20_000_000;
      if (golangan === "IV") {
        bonus = 2_000_000;
      } else {
        bonus = 1_000_000;
      }
      break;

    default:
      baseSallary = 4_000_000;
      if (golangan === "IV") {
        bonus = 500_000;
      } else {
        bonus = 300_000;
      }
      break;
  }

  return baseSallary + bonus;
}
