import './style.css';
import TaskList from './modules/tasksMethods.js';
import {
  taskList, addTaskForm, clearList,
} from './modules/domElements.js';

const app = new TaskList();

window.addEventListener('DOMContentLoaded', () => {
  app.loadTasks();
});

// Add task event listener
addTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  app.addTask(e.target.taskDescp.value);
  e.target.taskDescp.value = '';
});
// Toggle edit function
taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('edit-task-btn')) {
    app.editTask(e.target);
    e.target.classList.toggle('dsp-none');
    e.target.nextSibling.classList.toggle('dsp-none');
  } else if (e.target.classList.contains('delete-task-btn')) {
    app.deleteTask(e.target.parentElement);
  }
});

// Task checkbox change event

taskList.addEventListener('change', (e) => {
  if (e.target.tagName === 'INPUT') {
    e.target.nextSibling.classList.toggle('stk-tru');
    app.updateTaskStatus(Number(e.target.parentElement.getAttribute('data-index')));
  }
});

// Clear list event listener

clearList.addEventListener('click', () => {
  app.clearCompletedTask();
});
