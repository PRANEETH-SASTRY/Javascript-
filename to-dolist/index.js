const inputTask = document.querySelector(".add-task");
const addBtn = document.querySelector(".task-button");
const task = document.querySelectorAll(".sections");

inputTask.addEventListener("keyup", () => {
  if (inputTask.value.length > 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
});

addBtn.addEventListener("click", () => {
  if (inputTask.value.length > 0) {
    let newTask = document.createElement("div");
    newTask.classList.add("item");
    newTask.innerHTML = `
    <p> ${inputTask.value}</p>
    <div class="item-btn">
        <i class="fa-solid fa-arrow-left" id="left-button"></i>
        <i class="fa-solid fa-arrow-right" id="right-button"></i>
    </div>
    `;
    task[0].appendChild(newTask);
    inputTask.value = "";
  } else {
    alert("Enter a task");
  }
});
for (var i = 0; i < task.length; i++) {
  task[i].addEventListener("click", (e) => {
    const buttonName = e.target.id;
    if (buttonName === "left-button") {
      previousFunction(e);
    } else if (buttonName === "right-button") {
      nextFunction(e);
    }
  });
}
function previousFunction(e) {
  let taskName = e.target.parentElement.parentElement.parentElement.classList;
  if (taskName.contains("ongoing")) {
    let newTask1 = addTask(e);
    task[0].appendChild(newTask1);
    e.target.parentElement.parentElement.remove();
  } else if (taskName.contains("completed")) {
    let newTask1 = addTask(e);
    task[1].appendChild(newTask1);
    e.target.parentElement.parentElement.remove();
  }
}

function nextFunction(e) {
  let taskName = e.target.parentElement.parentElement.parentElement.classList;
  if (taskName.contains("pending")) {
    let newTask1 = addTask(e);
    task[1].appendChild(newTask1);
    e.target.parentElement.parentElement.remove();
  } else if (taskName.contains("ongoing")) {
    let newTask1 = addTask(e);
    task[2].appendChild(newTask1);
    e.target.parentElement.parentElement.remove();
  }
}

function addTask(e) {
  let newTask = e.target.parentElement.parentElement;
  let newTask1 = document.createElement("div");
  newTask1.classList.add("item");
  newTask1.innerHTML = newTask.innerHTML;
  return newTask1;
}
