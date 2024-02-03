const userInput = ["1 5 6"];

const strArr = userInput[0].split(" ");

const a = Number(strArr[0]);
const b = Number(strArr[1]);
const c = Number(strArr[2]);

// X = {-b + √(b² - 4ac) } / 2a

console.log((-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a));
