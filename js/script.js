function ToDo(task, done) {
    this.task = task;
    this.done = done;
}

$(document).ready(function () {
    $("form#new-task-form").submit(function (event) {
        event.preventDefault();

        var inputtedTask = $("input#new-task").val();
   

        var toDo = new ToDo(inputtedTask, false);
        console.log(toDo)

        $("ul#tasks").append("<li><span class='contact'>" + toDo.task + "</span></li>");

        $("input#new-task").val("");
    });
});