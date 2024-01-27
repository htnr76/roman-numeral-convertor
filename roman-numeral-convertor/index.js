const numbers = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanNumerals = [
  { value: 1000, numeral: "M" },
  { value: 900, numeral: "CM" },
  { value: 500, numeral: "D" },
  { value: 400, numeral: "CD" },
  { value: 100, numeral: "C" },
  { value: 90, numeral: "XC" },
  { value: 50, numeral: "L" },
  { value: 40, numeral: "XL" },
  { value: 10, numeral: "X" },
  { value: 9, numeral: "IX" },
  { value: 5, numeral: "V" },
  { value: 4, numeral: "IV" },
  { value: 1, numeral: "I" }
];

button.addEventListener("click", function() {
  if(numbers.value === ""){
    output.textContent ="Please enter a valid number"
  } else if (numbers.value == -1) {
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (numbers.value < 1 || numbers.value > 3999 || isNaN(numbers.value)) {
    if (numbers.value > 3999) {
      output.textContent = "Please enter a number less than or equal to 3999.";
    } else {
      output.textContent = "Please enter a valid number.";
    }
  } else {
    let roman = "";
    for (let i = 0; i < romanNumerals.length; i++) {
      const numeral = romanNumerals[i];
      while (numbers.value >= numeral.value) {
        roman += numeral.numeral;
        numbers.value -= numeral.value;
      }
    }
    output.textContent = roman;
  }
});