window.setTimeout(function () {
    var todos = ["Buy new turtle."];

    var input = prompt("What would you like to do?");

    while (input !== "quit") {
        if (input === "list") {
            todos.forEach(function (todo, i) {
                console.log(" " + i + ": " +todo);
            });
        } else if (input === "new") {
            var newTodo = prompt("Enter To Do item");
            todos.push(newTodo);
        } else if (input === "delete"){
            var index = prompt("Enter index of to do item to be deleted");
            todos.splice(index,1);
        }

        input = prompt("What would you like to do?");
    }
    console.log("OK. You quit the app");
}, 500);