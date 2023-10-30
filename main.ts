import * as fs from 'fs';
import inquirer  from 'inquirer';

const todoFile = 'todo.json';

interface Task {
  id: number;
  task: string;
  completed: boolean;
}

// Function to load tasks from the JSON file
function loadTasks(): Task[] {
  try {
    const data = fs.readFileSync(todoFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Function to save tasks to the JSON file
function saveTasks(tasks: Task[]) {
  fs.writeFileSync(todoFile, JSON.stringify(tasks, null, 2), 'utf8');
}

// Function to display the current tasks
function displayTasks() {
  const tasks = loadTasks();

  if (tasks.length === 0) {
    console.log('No tasks in the to-do list.');
  } else {
    console.log('To-Do List:');
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. [${task.completed ? 'X' : ' '}] ${task.task}`);
    });
  }
}

// Function to add a new task
async function addTask() {
  const { task } = await inquirer.prompt([
    {
      type: 'input',
      name: 'task',
      message: 'Enter a new task:',
    },
  ]);

  const tasks = loadTasks();
  const newTask: Task = {
    id: Date.now(),
    task: task,
    completed: false,
  };
  tasks.push(newTask);
  saveTasks(tasks);
  console.log('Task added to the to-do list.');
}

// Function to remove a task
async function removeTask() {
  const tasks = loadTasks();

  if (tasks.length === 0) {
    console.log('No tasks to remove.');
    return;
  }

  const { taskIndex } = await inquirer.prompt([
    {
      type: 'list',
      name: 'taskIndex',
      message: 'Select a task to remove:',
      choices: tasks.map((task, index) => `${index + 1}. ${task.task}`),
    },
  ]);

  const indexToRemove = parseInt(taskIndex.split('.')[0]) - 1;
  tasks.splice(indexToRemove, 1);
  saveTasks(tasks);
  console.log('Task removed from the to-do list.');
}

async function main() {
  while (true) {
    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Choose an action:',
        choices: ['Add a task', 'Remove a task', 'Show tasks', 'Exit'],
      },
    ]);

    switch (action) {
      case 'Add a task':
        await addTask();
        break;
      case 'Remove a task':
        await removeTask();
        break;
      case 'Show tasks':
        displayTasks();
        break;
      case 'Exit':
        process.exit();
    }
  }
}

main();

