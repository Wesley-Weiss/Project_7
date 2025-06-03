/*Luke 20:25 "Caesar's," they replied. He said to them, "Then give to Caesar what is Caesar's, and to God what is God's.*/
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanNumerals = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I"
];

const arabicNumerals = [
  1000,
  900,
  500,
  400,
  100,
  90,
  50,
  40,
  10,
  9,
  5,
  4,
  1
];

let romanNumeralString = "";

const inputChecker = number => {
  const num = parseInt(number);
  output.innerText = "";
  romanNumeralString = "";

  if (!num) {
    output.innerText = "Please enter a valid number";
    return;
  } else if (num < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  } else if (num > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  } else {
    converter(num);
  }
}

const converter = number => {
 

  arabicNumerals.forEach((num, index)=> {
    while (number >= num) {
      number -= num;
      romanNumeralString += romanNumerals[index];
    }
  })

  output.innerText = romanNumeralString;
}

convertBtn.addEventListener("click", () => {
  inputChecker(numberInput.value);
});

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    inputChecker(numberInput.value);
  }
});