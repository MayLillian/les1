let myFloat = 7.3;
console.log(myFloat);

let roundedUp = Math.ceil(7.3);
let roundedDown = Math.floor(7.3);
let roundedInteger = Math.round(7.3);
console.log(roundedUp);
console.log(roundedDown);
console.log(roundedInteger);

let randomNumber = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
let randomNumber2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
console.log(randomNumber);
console.log(randomNumber2);
if (randomNumber > randomNumber2) {console.log(randomNumber);} else {console.log(randomNumber2);};
if (randomNumber > randomNumber2) {console.log(randomNumber - randomNumber2);} else {console.log(randomNumber2 - randomNumber);};
let difference = randomNumber - randomNumber2;
console.log(difference);

let a = 4;
let b = 3;
let sum = a + b;
let product = a * b;
let quotient = a / b;
let mathPow = a ** 2;
let mathScrt = Math.sqrt(b);
console.log(sum);
console.log(product);
console.log(quotient);
console.log(mathPow);
console.log(mathScrt);

let MyString = "Hello JavaScript!";
console.log(MyString.length);
console.log(MyString.toUpperCase());
console.log(MyString.toLowerCase());
console.log(MyString.includes("Java"));
console.log(MyString.substring(6,16));
console.log(MyString.trim());

let now = new Date();
console.log("Год:" + now.getFullYear());
console.log("Месяц:" + (now.getMonth()+1));
console.log("День месяца:" + now.getDate());
console.log("День недели: " + now.getDay());
now.setFullYear(now.getFullYear() + 1);
console.log(now.getFullYear());
now.setMonth(0);
console.log(now.getMonth() + 1 + "/" + now.getFullYear());
