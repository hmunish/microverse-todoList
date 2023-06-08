const storedTasks = localStorage.getItem('todoTasks');
const tasksData = storedTasks !== null ? JSON.parse(storedTasks) : [];

export default tasksData;