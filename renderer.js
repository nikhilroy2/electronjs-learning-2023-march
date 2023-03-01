const $ = require('jquery');

$(document).ready(() => {
  const todoForm = $('#todo-form');
  const todoInput = $('#todo-input');
  const todoList = $('#todo-list');

  let todos = [];

  function renderTodos() {
    todoList.html('');
    todos.forEach((todo, index) => {
      const todoItem = $(`<li>${todo}</li>`);
      const deleteButton = $(`<button data-index="${index}">Delete</button>`);
      todoItem.append(deleteButton);
      todoList.append(todoItem);
    });
  }

  todoForm.submit((event) => {
    event.preventDefault();
    const todo = todoInput.val();
    todos.push(todo);
    todoInput.val('');
    renderTodos();
  });

  todoList.on('click', 'button', function() {
    const index = $(this).data('index');
    todos.splice(index, 1);
    renderTodos();
  });
});
