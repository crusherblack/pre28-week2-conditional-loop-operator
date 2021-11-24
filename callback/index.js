// callback
// function yang dipanggil didalam function melalui parameter

function helloWorld(text, callback) {
  console.log(text);
  const newText = text + "Hello From DumbWays.id";

  callback(newText);
}

helloWorld("hello world", function (newText) {
  console.log(newText);
});

const cars = ["lamborigini", "bmw", "buggati"];

function convertCars(array, callback) {
  const temp = [];

  for (let i = 0; i < array.length; i++) {
    temp.push("Mobil " + array[i]);
  }

  console.log(temp);

  callback(temp);
}

convertCars(cars, function (cars) {
  const temp = [];

  for (let i = 0; i < cars.length; i++) {
    if (cars[i] == "Mobil lamborigini") {
      temp.push(cars[i] + " Warna Merah");
    } else {
      temp.push(cars[i] + " Warna Biru");
    }
  }

  console.log(temp);
});

let testing = [];
convertCars(cars, function (cars) {
  const temp = [];

  for (let i = 0; i < cars.length; i++) {
    if (cars[i] == "Mobil bmw") {
      temp.push(cars[i] + " Warna Merah");
    } else {
      temp.push(cars[i] + " Warna Biru");
    }
  }

  console.log(temp);
  testing = temp;
});

console.log("dari global", testing);
