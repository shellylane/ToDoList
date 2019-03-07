$(document).ready(function () {


    $(".change-completed").on("click", function (event) {
        var id = $(this).data("id");
        var completed = $(this).data("completed");
        var newCompleted = !completed;
        var newCompletedState = {
            completed: newCompleted
        };

        // Send the PUT request.
        $.ajax("/api/todos/" + id, {

            type: "PUT",
            data: newCompletedState
        }).then(
            function () {
                console.log("changed completed to", newCompleted);
                // Reload the page to get the updated list
                window.location.href = "/";
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newToDo = {
            toDoItem: $("#ca").val().trim(),
            completed: false
        };

        // Send the POST request.
        $.ajax("/api/todos", {
            type: "POST",
            data: newToDo
        }).then(
            function () {
                console.log("created new todo");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-todo").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/todos/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted todo", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
