console.log("Hello World");

function diff(number) {
    let firstDigit = number / 10;
    let secondDigit = number % 10;
    let difference = Math.abs(firstDigit - secondDigit);
    return difference;
}
let result = diff(23);
console.log(result);