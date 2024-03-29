function toggleInput() {
    var input = document.getElementById("taskInput");
    var addButton = document.getElementById("addButton");
    if (input.style.display === "none") {
      input.style.display = "block";
      addButton.style.display = "block";
    } else {
      input.style.display = "none";
      addButton.style.display = "none";
    }
  }
  
  function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input === "") {
      alert("Please enter a task!");
      return;
    }
    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input));
    var deleteButton = document.createElement("span");
    deleteButton.innerHTML = "&#10006;";
    deleteButton.className = "delete";
    deleteButton.onclick = function() {
      li.remove();
    };
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    document.getElementById("taskInput").value = "";
  }
  