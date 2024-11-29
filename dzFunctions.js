function isNumeric(str) {
    let pattern = /^[0-9]+$/;
    return pattern.test(str);
}
console.log(isNumeric("1357"));
console.log(isNumeric("abcd"));
console.log(isNumeric("abc123"));

function countLetters(str) {
    return str.length;
}
let myString = "Hello, Kaliningrad!";
let letterCount = countLetters(myString);
console.log(letterCount);

function countVowels(str) {
    const vowels = ['e', 'y', 'u', 'i', 'o', 'a'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
let vowelCount = countVowels(myString);
console.log(vowelCount);

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

}
let leapYear = isLeapYear(2024);
console.log(leapYear);
let notLeapYear = isLeapYear(2025);
console.log(notLeapYear);

function diff(number) {
    let firstNumber = Math.floor(number / 10);
    let secondNumber = number % 10;
    let difference = Math.abs(firstNumber - secondNumber);
    return difference;
}
let result = diff(22);
console.log(result);

result = diff(53);
console.log(result);

function isMirror(n) {
    let str = String(n);
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}
console.log(isMirror(12345));
console.log(isMirror(1221));
console.log(isMirror(123454321));
