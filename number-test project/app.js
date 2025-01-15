const userİnput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

checkBtn.addEventListener("click", () => {
  const data = userİnput.value;
  const phoneNumberTest = /^(1\s?)?(\(\d{3}\)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/;

  if (data == "") {
    alert("Please provide a phone number");
  } else if (phoneNumberTest.test(data)) {
    resultsDiv.innerHTML += `<p class="true"> Valid US number: ${data}</p>`;
  }else {
    resultsDiv.innerHTML += `<p class="false"> Invalid US number: ${data}</p>`;
  }
});

clearBtn.addEventListener("click", () => {
  resultsDiv.innerHTML = "";
});
