document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  //Funtion to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter the task!");
      return;
    }

    // Create a new list item
    const li = document.createElement("li");

    //Add the task text
    li.innerHTML = `<span>${taskText}</span> <button class="deleteBtn">Delete</button>`;

    //Add the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";

    // Add event listener to the delete button
    const deleteBtn = li.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(li);
    });
  }

  //Event listener for the "Add Task" button
  addTaskBtn.addEventListener("click", addTask);

  //Allowing pressing "Enter" to add a task
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });
});
