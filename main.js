const input = document.querySelector("input");
const addButton = document.querySelector("#add");
const card = document.querySelector(".card");
const removeButton = document.querySelector("#remove");
const count = document.querySelector("span");
const addedValue = document.querySelector(".added-value");

addButton.addEventListener("click", function (e) {
  e.preventDefault();
  const inputValue = input.value;
  if (inputValue === " " || inputValue === "") {
    input.value = "";
    return alert("No no No!!!");
  } else {
    const value = document.createElement("span");
    value.innerHTML = inputValue;
    addedValue.appendChild(value);
  }
  input.value = "";
});
