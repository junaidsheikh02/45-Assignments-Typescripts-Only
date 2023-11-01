interface Task {
    id: number;
    text: string;
    completed: boolean;
  }
  
  class TodoList {
    private tasks: Task[] = [];
    private taskIdCounter: number = 1;
  
    addTask(text: string): void {
      if (text.trim() === '') {
        return; // Don't add empty tasks
      }
  
      const newTask: Task = {
        id: this.taskIdCounter++,
        text,
        completed: false,
      };
  
      this.tasks.push(newTask);
      this.renderTasks();
    }
  
    completeTask(taskId: number): void {
      const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        this.tasks[taskIndex].completed = true;
        this.renderTasks();
      }
    }
  
    deleteTask(taskId: number): void {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
      this.renderTasks();
    }
  
    renderTasks(): void {
      // Render tasks in the HTML list
      const listContainer = document.getElementById('task-list') as HTMLUListElement;
      listContainer.innerHTML = '';
  
      this.tasks.forEach((task) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
          <span>${task.text}</span>
          <button class="delete-button">Delete</button>
        `;
  
        const checkbox = listItem.querySelector('.task-checkbox') as HTMLInputElement;
        const deleteButton = listItem.querySelector('.delete-button') as HTMLButtonElement;
  
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
  const addButton = document.getElementById('add-button') as HTMLButtonElement;
  const taskInput = document.getElementById('task-input') as HTMLInputElement;
  
  addButton.addEventListener('click', () => {
    todoList.addTask(taskInput.value);
    taskInput.value = '';
  });
  