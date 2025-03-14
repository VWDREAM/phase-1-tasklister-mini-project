document.addEventListener("DOMContentLoaded", () => {
  // your code here

    // Select the form
    const myForm = document.getElementById("create-task-form");

    // Add an event listener to handle form submission
    myForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevents the page from refreshing

      // Get the input field and extract its value
      const taskInput = document.getElementById("new-task-description");
      const taskText = taskInput.value.trim(); // Removes extra spaces

      // Prevent adding empty tasks
      if (taskText === "") return;

      // Get the task list
      const taskList = document.getElementById("tasks");

      // Create a new task item
      const newTask = document.createElement("li");
      newTask.textContent = taskText;

      // Add the new task to the list
      taskList.appendChild(newTask);

      // Clear the input field after adding the task
      taskInput.value = "";
    });
  });


  