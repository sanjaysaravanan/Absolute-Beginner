const userInput = ["2"];

// interger conversion
const num = +userInput[0];

let result = "";

for (let i = 1; i <= 3; i++) {
  if (i === 3) {
    result = result + num * i;
  } else {
    result = result + num * i + " ";
  }
}

console.log(result);
