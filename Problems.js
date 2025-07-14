// Problem 1 Array Filtering and Mapping - Solution
const teamMembers = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Robert", age: 30, gender: "male" },
  { name: "Sophia", age: 28, gender: "female" },
  { name: "Imran", age: 35, gender: "male" }
];

const extractMaleNames = (members) => {
  return members
  .filter(individual => individual.gender !== "female")
  .map(male => male.name);
};
// console.log(extractMaleNames(teamMembers));


// Problem 2 Object Manipulation - Solution
const libraryShelf = [
  { title: "Design Patterns", author: "Erich Gamma", year: 1994 },
  { title: "Refactoring", author: "Martin Fowler", year: 1999 },
  { title: "Eloquent JavaScript", author: "Marijn Haverbeke", year: 2018 }
];

const listBookTitles = (booksArray) => booksArray.map(book => book.title);
// console.log(listBookTitles(libraryShelf));


// Problem 3 Function Composition - Solution
const squareValue = (n) => n * n;
const doubleValue = (n) => n * 2;
const incrementByFive = (n) => n + 5;

const processNumber = (inputNumber) => {
  return incrementByFive(doubleValue(squareValue(inputNumber)));
};
// console.log(processNumber(4));


// Problem 4 Sorting Objects - Solution
const vehicleInventory = [
  { make: "Mazda", model: "3", year: 2020 },
  { make: "Chevrolet", model: "Cruze", year: 2016 },
  { make: "BMW", model: "320i", year: 2019 }
];

const sortVehiclesByYear = (vehicles) => {
  return vehicles.sort((carA, carB) => carA.year - carB.year);
};
// console.log(sortVehiclesByYear(vehicleInventory));


// Problem 5 Array Reduction - Solution
const scoreList = [10, 15, 22, 7, 6, 13, 4];

const getEvenSum = (numberArray) => {
  return numberArray.reduce((total, current) => {
    return current % 2 === 0 ? total + current : total;
  }, 0);
};
// console.log(getEvenSum(scoreList));