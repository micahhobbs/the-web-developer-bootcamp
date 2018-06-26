window.setTimeout(function() {
   
    var todos = ["buy new turtle"];
    var input = prompt("What would you like to do?");

    while(input !== "quit") {
        //handle input
        if(input === "list") {
            listTodos();
        }   else if(input === "new") {
            createNewTodo();
        }   else if(input === "delete") {
            deleteTodo();
        }
        //ask again for new input
        input = prompt("What would you like to do?");
    } 
    console.log("OK, YOU QUIT THE APP"); 

    function listTodos() {
        console.log("**********")
        todos.forEach(function(todo, i){
            console.log(i + ": " + todo);
        });
        console.log("**********")
    }

    function createNewTodo() {
        //ask for new todo
        var newTodo = prompt("Enter new todo")
        //add to todos array
        todos.push(newTodo);
        //ask again for input
        console.log("Added Todo")
    }

    function deleteTodo(){
        todos.forEach(function(todo, i){
            console.log(i + ": " + todo);
        });
        var itemIndex = prompt("What index is the item you want to delete?")
        todos.splice(itemIndex, 1);
        console.log("Deleted Todo");
    }

}, 500);



