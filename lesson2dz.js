let name = "Liliya";
let age = 32;
let isStudent = true;
let height = 164;
let hobby = "knitting";
let favoriteNumber = 11;
let isGraduated = false;

const nameType = typeof name;
const ageType = typeof age;
const isStudentType = typeof isStudent;
const heightType = typeof height;
const hobbyType = typeof hobby;
const favoriteNumberType = typeof favoriteNumber;
const isGraduatedType = typeof isGraduated;

console.log(`${nameType}:${name}, ${ageType}:${age}, ${isStudentType}:${isStudent}, ${heightType}:${height}, ${hobbyType}:${hobby}, ${favoriteNumberType}:${favoriteNumber}, ${isGraduatedType}:${isGraduated}`);

let myVariable;
console.log(myVariable);
let implicitUndefined;
console.log(implicitUndefined);
let NullVariable = null;
console.log(NullVariable);

console.log(typeof myVariable, "||", typeof implicitUndefined, "||", typeof NullVariable);

let birthYear = 1992;
let currentYear = new Date().getFullYear();
let currentAge = currentYear - birthYear;
console.log(`Привет, мне ${currentAge} лет.`)