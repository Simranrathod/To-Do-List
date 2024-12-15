document.addEventListener("DOMContentLoaded", () => {
    const taskButton = document.getElementById("task");
    const taskInput = document.getElementById("inputtask");
    const taskList = document.getElementById("tasklist");
  
    // Function to delete task
    const deleteTask = (taskItem) => {
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.textContent = "Delete";
      deleteBtn.onclick = () => taskItem.remove();
      taskItem.appendChild(deleteBtn);
    };
  
    // Function to add a new task
    const addTask = () => {
      const taskValue = taskInput.value.trim();
      if (taskValue !== "") {
        const newTask = document.createElement("li");
        newTask.textContent = taskValue;
        deleteTask(newTask);
        taskList.appendChild(newTask);
        taskInput.value = ""; // Clear input field
      } else {
        alert("Please enter a task!");
      }
    };
  
    // Event listener for Add Task button
    taskButton.addEventListener("click", addTask);
  
    // Event listener for Enter key
    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addTask();
      }
    });
  });
  