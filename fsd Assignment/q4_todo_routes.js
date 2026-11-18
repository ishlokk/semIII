const express = require('express');
const app = express();

app.use(express.json()); 

let tasks = [];   
let nextId = 1;


app.get('/tasks', (req, res) => {
  res.json(tasks);
});


app.post('/tasks', (req, res) => {
  const title = req.body && req.body.title;
  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }
  const task = { id: nextId++, title, completed: false };
  tasks.push(task);
  res.status(201).json(task);
});


app.put('/tasks/:id', (req, res) => {
  const task = tasks.find((t) => t.id === Number(req.params.id));
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  task.completed = true;
  res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
  const index = tasks.findIndex((t) => t.id === Number(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }
  const removed = tasks.splice(index, 1)[0];
  res.json({ message: 'Task deleted', task: removed });
});

app.listen(3000, () => {
  console.log('To-do app running at http://localhost:3000');
});