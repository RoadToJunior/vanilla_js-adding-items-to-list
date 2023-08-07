const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const listItems = document.getElementsByClassName("task");
const taskNumber = document.querySelector("h1 span");

const addTask = (e) => {
  e.preventDefault();
  const titleTask = input.value;
  if (titleTask.trim() === "") return;
  const task = document.createElement("li");
  task.className = "task";
  task.innerHTML = `${titleTask} <button>X</button>`;
  ul.appendChild(task);
  taskNumber.textContent = listItems.length;
  task.addEventListener("click", removeTask);
};

const removeTask = (e) => {
  //e.target.parentNode.style.textDecoration = "line-through";
  e.target.parentNode.remove();
  taskNumber.textContent = listItems.length;
};

form.addEventListener("submit", addTask);
