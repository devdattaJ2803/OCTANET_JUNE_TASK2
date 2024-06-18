// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', addTask);

    function addTask(e) {
        e.preventDefault();
        
        const taskInput = document.getElementById('task-input').value;
        const dueDate = document.getElementById('due-date').value;
        const priority = document.getElementById('priority').value;
        const category = document.getElementById('category').value;

        if (taskInput === '') {
            alert('Please enter a task');
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskInput} (Due: ${dueDate}, Priority: ${priority}, Category: ${category})</span>
            <div class="buttons">
                <button class="complete"><i class="fas fa-check"></i></button>
                <button class="delete"><i class="fas fa-times"></i></button>
            </div>
        `;

        taskList.appendChild(li);

        document.getElementById('task-input').value = '';
        document.getElementById('due-date').value = '';
        document.getElementById('priority').value = 'low';
        document.getElementById('category').value = 'work';

        li.querySelector('.complete').addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.querySelector('.delete').addEventListener('click', () => {
            taskList.removeChild(li);
        });
    }
});
