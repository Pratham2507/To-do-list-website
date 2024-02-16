$(document).ready(function() {
  // Make tasks sortable
  $(".sortable").sortable();

  // Function to add a new task
  function addTask() {
    var taskInput = $("#taskInput").val().trim();
    if (taskInput !== "") {
      $("#taskList").append("<li>" + taskInput + "<button class='delete-btn'>Delete</button></li>");
      $("#taskInput").val("");
    }
  }

  // Event listener for adding a new task
  $(".add-btn").on("click", function() {
    addTask();
  });

  // Event listener for deleting a task
  $(document).on("click", ".delete-btn", function() {
    $(this).parent().remove();
  });

  // Function to clear all completed tasks
  function clearCompletedTasks() {
    $("#taskList li").each(function() {
      if ($(this).css("text-decoration") === "line-through") {
        $(this).remove();
      }
    });
  }

  // Event listener for clearing completed tasks
  $(".clear-btn").on("click", function() {
    clearCompletedTasks();
  });
});
