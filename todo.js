var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML = '';
    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        var pos = todos.indexOf(todo);
        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        var linkText = document.createTextNode('Excluir');
        
        linkElement.appendChild(linkText);
        linkElement.setAttribute('onclick', 'removerTodos('+pos+')');

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
        listElement.appendChild(linkElement);
    };
}
renderTodos();

function addTodos() {
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveStorage();
}

buttonElement.onclick = addTodos;

function removerTodos(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveStorage();
}

function saveStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}