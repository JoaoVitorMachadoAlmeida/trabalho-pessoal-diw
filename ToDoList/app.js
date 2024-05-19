document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => createTaskElement(task.text, task.completed));
    };

    const saveTasks = () => {
        const tasks = [];
        document.querySelectorAll('.task-list li').forEach(taskElement => {
            tasks.push({
                text: taskElement.querySelector('.task-text').textContent,
                completed: taskElement.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const createTaskElement = (text, completed = false) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = text;
        span.classList.add('task-text');
        if (completed) {
            li.classList.add('completed');
        }
        span.addEventListener('click', () => {
            li.classList.toggle('completed');
            saveTasks();
        });

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.addEventListener('click', () => {
            taskList.removeChild(li);
            saveTasks();
        });

        li.appendChild(span);
        li.appendChild(removeButton);
        taskList.appendChild(li);
    };

    addTaskButton.addEventListener('click', () => {
        if (taskInput.value.trim() !== '') {
            createTaskElement(taskInput.value);
            taskInput.value = '';
            saveTasks();
        }
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && taskInput.value.trim() !== '') {
            createTaskElement(taskInput.value);
            taskInput.value = '';
            saveTasks();
        }
    });

    loadTasks();
});
