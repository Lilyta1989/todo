var todos = [];

init();
$('input').keyup(function(e) {
	if (e.keyCode===13) {
		var todoText=$(this).val();
		$(this).val('');
		save(todoText);
		var elemento = $('<div>').append($('<h3>').append(todoText));
		$('.todo-list').append(elemento);
	}
});


function save(text) {
	todos.push(text);
	localStorage.setItem('todos',JSON.stringify(todos));
	//localStorage.setItem('todo',text);
}

function getTodo() {
	if (localStorage.todos) {
		return [];

	return JSON.parse(localStorage.todos);

	}
}
function init() {
	var todo = getTodo();

	for (var i = 0; i < todo.length; i++) {
		var elemento = $('<div>').append($('<h3>').append(todo[i]));
		$('.todo-list').append(elemento);

	}
}