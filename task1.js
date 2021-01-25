const input = document.querySelector('.js-input-todolist');
const button = document.querySelector('.js-input-button');
const todoList = document.querySelector('.js-content-todolist');
const jsList = document.querySelector('.js-list');

function onAddNewTodo() {
  const div = document.createElement('div');
  div.className = 'alert alert-primary';
  div.textContent = input.value;
  todoList.prepend(div);
  input.value = '';
  jsList.remove();
  const closeButton = document.createElement('button');
  closeButton.className = 'btn-close';
  div.append(closeButton);
}

button.addEventListener('click', onAddNewTodo);

todoList.addEventListener('click',(event) => {

	const div = event.target.closest('div');
	div.classList.toggle('alert-success');


    const closeButton = event.target.closest('button');
    closeButton.parentElement.remove();
    
	
});




