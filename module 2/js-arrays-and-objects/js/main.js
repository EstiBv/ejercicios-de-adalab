"use strict";
const promos = [
  {
    promo: "A",
    name: "Ada",
    students: [
      {
        id: "id-1",
        name: "Sofía",
        age: 20,
      },
      {
        id: "id-2",
        name: "María",
        age: 21,
      },
      {
        id: "id-3",
        name: "Lucía",
        age: 22,
      },
    ],
  },
  {
    promo: "B",
    name: "Borg",
    students: [
      {
        id: "id-4",
        name: "Julia",
        age: 23,
      },
      {
        id: "id-5",
        name: "Tania",
        age: 24,
      },
      {
        id: "id-6",
        name: "Alaia",
        age: 25,
      },
    ],
  },
  {
    promo: "C",
    name: "Clarke",
    students: [
      {
        id: "id-7",
        name: "Lidia",
        age: 26,
      },
      {
        id: "id-8",
        name: "Celia",
        age: 27,
      },
      {
        id: "id-9",
        name: "Nadia",
        age: 28,
      },
    ],
  },
];

const studentsWorkingInGoogle = ["id-2", "id-3", "id-5", "id-9"];

// TÚ CÓDIGO AQUÍ
// let accName = "";

// function listAdalabers() {
//   for (let i = 0; i < promos.length; i++) {
//     // console.log(promos[i].name);
//     accName += `<li>${promos[i].name}</li>}`;
//   }
// }
// addElement.innerHMTL = `<ul>${accName}</ul>`;
// // console.log(accName);
// listAdalabers();

// Ejercicio 2
// const addElement = document.querySelector(".js-result");
// let accName = " ";

// for (let i = 0; i < promos.length; i++) {
//   accName += `<li><p>Nombre: ${promos[i].name}</p><p>Promo: ${promos[i].name}</p></li>`;
// }

// addElement.innerHTML = `<ul>${accName}</ul>`;

// console.log(accName);

// Ejercicio 4
const listAdalabers = document.querySelector(".js-result");
let printDataAdalaber = " ";

for (let i = 0; i < promos.length; i++) {
  printDataAdalaber = `<li>${promos}</li>`;
  for (let i2 = 0; i2 < promos[i].students.length; i2++) {
    console.log(`${promos[i].name}`);
  }
}
// printDataAdalaber = (
//   <li>
//     <p></p>
//   </li>
// );
