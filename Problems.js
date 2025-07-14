// Problem 1 Array Filtering and Mapping
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


// Problem 2 Object Manipulation
const libraryShelf = [
  { title: "Design Patterns", author: "Erich Gamma", year: 1994 },
  { title: "Refactoring", author: "Martin Fowler", year: 1999 },
  { title: "Eloquent JavaScript", author: "Marijn Haverbeke", year: 2018 }
];

const listBookTitles = (booksArray) => booksArray.map(book => book.title);

// console.log(listBookTitles(libraryShelf));
