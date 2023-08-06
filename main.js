const form = document.querySelector("form");
const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");
const removeTaskButton = document.querySelector(".removeTaskBtn");
let number = 0;

const addTask = (e) => {
  e.preventDefault();
  number++;
  const task = input.value;
  console.log(task);
  const li = document.createElement("li");
  ul.appendChild(
    li
  ).innerHTML = `${task} <button data-key="${number}">X</button>`;
};

const removeTask = (e) => {
  e.target.remove();
};

removeTaskButton.addEventListener("click", removeTask);
form.addEventListener("submit", addTask);
