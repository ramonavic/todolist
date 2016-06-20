function updateCounters() {

  //Total number of todos
  var totalCount = document.getElementById ('total-count');
  var totalTodos = document.getElementsByClassName("todo").length;
  totalCount.innerHTML = totalTodos;

  // Total number of completed todos
  var completedCount = document.getElementById('completed-count');
  var completedTodos = document.getElementsByClassName("completed").length;
  completedCount.innerHTML = completedTodos;

  //Total number of uncompleted todos
  var uncompletedCount = document.getElementById('todo-count');
  var uncompletedTodos = totalTodos - completedTodos;
  uncompletedCount.innerHTML = uncompletedTodos;

}


function toggleDone() {
  var checkbox = this;

  if (checkbox.checked) {
    checkbox.parentElement.className = "todo completed"
  } else {
    checkbox.parentElement.className = "todo"
  }

  updateCounters();
}





updateCounters();
