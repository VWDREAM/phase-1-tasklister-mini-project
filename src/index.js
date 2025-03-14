document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const myForm = document.getElementById("create-task-form")
  myForm.addEventListener("submit", function(event){
    event.preventDefault();

    const taskInput = document.getElementById("new-task-description");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const myList = document.getElementById("tasks")
  const newTask = document.createElement("li");
  newTask.textContent = taskText;
  myList.appendChild(newTask);
  taskInput.value = "";


  });

  });



