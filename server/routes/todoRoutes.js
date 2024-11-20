// routes/todoRoutes.js
const express = require('express');
const router = express.Router();

let todos = [
  { id: 1, text: 'Learn Vue.js', completed: false },
  { id: 2, text: 'Learn Express.js', completed: false },
];

// Lấy tất cả todos
router.get('/', (req, res) => {
  res.json(todos);
});

// Thêm todo mới
router.post('/', (req, res) => {
  const newTodo = { id: Date.now(), text: req.body.text, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Xóa todo theo ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.status(204).end();
});

// Cập nhật trạng thái hoàn thành của todo
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.completed = req.body.completed;
    res.json(todo);
  } else {
    res.status(404).send('Todo not found');
  }
});

module.exports = router;
