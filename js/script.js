//Business logic
function ToDo(task, done) {
    this.task = task;
    this.done = done;
}

ToDo.prototype.markDone = function () {
    this.done = true
    alert('You have finished ' + this.task);
}

ToDo.prototype.finish = function () {
    return "Whoop! Whoop!"
}
ToDo.prototype.Undo = function () {
    this.done = false
    alert('You have not finished ' + this.task);

}

//User Interface
$(document).ready(function () {
    $("form#new-task-form").submit(function (event) {
        event.preventDefault();

        var inputtedTask = $("input#new-task").val();
   

        var toDo = new ToDo(inputtedTask, false);

        $("ul#tasks").append("<li><span class='contact'>" + toDo.task +"</span></li>");

        $("input#new-task").val(""); // Clear input field

        $("ul#tasks").on("click", "li", function () {
            var inputtedTask = $(this).text()
            var toDo = new ToDo(inputtedTask, false);
            toDo.markDone()
            if(toDo.done){
                $(this).css({ "background-color": "yellow", "text-decoration":"line-through" });

            }

        })

    });
});

//Todo
