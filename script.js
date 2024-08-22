document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const li = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            li.appendChild(checkbox);

            const text = document.createElement('span');
            text.textContent = todoText;
            li.appendChild(text);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '✖';
            deleteBtn.addEventListener('click', () => li.remove());
            li.appendChild(deleteBtn);

            todoList.appendChild(li);

            todoInput.value = '';
        }
    }
});
