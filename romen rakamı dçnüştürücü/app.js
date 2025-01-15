const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

function convertToRoman(num) {
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";
  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      result += romanNumerals[i].symbol;
      num -= romanNumerals[i].value;
    }
  }
  return result;
}

convertBtn.addEventListener("click", () => {
  const data = parseInt(number.value, 10);

  if (isNaN(data) || data === "") {
    output.style.display = "flex";
    output.style.background = "crimson";
    output.textContent = `Please enter a valid number`;
  } else if (data <= 0) {
    output.style.display = "flex";
    output.style.background = "crimson";
    output.textContent = `Please enter a number greater than or equal to 1`;
  } else if (data > 3999) {
    output.style.display = "flex";
    output.style.background = "crimson";
    output.textContent = `Please enter a number less than or equal to 3999`;
  } else {
    const roman = convertToRoman(data);
    output.style.display = "flex";
    output.textContent = `${roman}`;
  }
});

