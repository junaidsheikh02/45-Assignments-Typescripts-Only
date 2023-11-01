"use strict";
class TodoList {
    constructor() {
        this.tasks = [];
        this.taskIdCounter = 1;
    }
    addTask(text) {
        if (text.trim() === '') {
            return; // Don't add empty tasks
        }
        const newTask = {
            id: this.taskIdCounter++,
            text,
            completed: false,
        };
        this.tasks.push(newTask);
        this.renderTasks();
    }
    completeTask(taskId) {
        const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
        if (taskIndex !== -1) {
            this.tasks[taskIndex].completed = true;
            this.renderTasks();
        }
    }
    deleteTask(taskId) {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
        this.renderTasks();
    }
    renderTasks() {
        // Render tasks in the HTML list
        const listContainer = document.getElementById('task-list');
        listContainer.innerHTML = '';
        this.tasks.forEach((task) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
          <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
          <span>${task.text}</span>
          <button class="delete-button">Delete</button>
        `;
            const checkbox = listItem.querySelector('.task-checkbox');
            const deleteButton = listItem.querySelector('.delete-button');
            checkbox.addEventListener('change', () => {
                this.completeTask(task.id);
            });
            deleteButton.addEventListener('click', () => {
                this.deleteTask(task.id);
            });
            listContainer.appendChild(listItem);
        });
    }
}
// Example usage:
const todoList = new TodoList();
const addButton = document.getElementById('add-button');
const taskInput = document.getElementById('task-input');
addButton.addEventListener('click', () => {
    todoList.addTask(taskInput.value);
    taskInput.value = '';
});
