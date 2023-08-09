const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const listItems = document.getElementsByClassName("task");
const taskNumber = document.querySelector("h1 span");
const searchInput = document.getElementById("search");

const addTask = (e) => {
  e.preventDefault();
  const titleTask = input.value;
  if (titleTask.trim() === "") return;
  const task = document.createElement("li");
  task.className = "task";
  task.innerHTML = `${titleTask} <button>X</button>`;
  ul.appendChild(task);
  input.value = "";
  taskNumber.textContent = listItems.length;
  task.addEventListener("click", removeTask);
};

const removeTask = (e) => {
  //e.target.parentNode.style.textDecoration = "line-through";
  e.target.parentNode.remove();
  taskNumber.textContent = listItems.length;
};

const checkIf = (e) => {
  const searchText = e.target.value.toLowerCase();
  let tasks = [...listItems];
  tasks = tasks.filter((li) =>
    li.textContent.toLowerCase().includes(searchText)
  );
  ul.textContent = "";
  tasks.forEach((li) => ul.appendChild(li));
};

searchInput.addEventListener("input", checkIf);
form.addEventListener("submit", addTask);
