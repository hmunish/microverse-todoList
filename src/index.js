import './style.css';
import TaskList from './modules/tasksMethods.js';

const app = new TaskList();

window.addEventListener('DOMContentLoaded', () => {
  app.loadTasks();
});
