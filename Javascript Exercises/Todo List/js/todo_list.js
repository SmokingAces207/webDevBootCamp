var todos = new Array();
todos.push("Buy New Turtle");

var input = prompt("What would you like to do?");

while(input !== "quit") {
	
	if (input === "list") {
		
		
	} else if (input === "new") {
		
		
	} else if (input === "delete") {
		
		
	}
	var input = prompt("What would you like to do?");
}

console.log("OK, YOU HAVE QUIT THE APP");

function DisplayTodoList() {
	console.log("**********");
	todos.forEach(function(todo, index) {
		console.log(index + ": " + todo);
	});
	console.log("**********");
}

function CreateTodo() {
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
}

function DeleteTodo() {
	var index = prompt("Enter index of todos to delete");
	todos.splice(index, 1);
	console.log("Item Deleted!");
}