// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const port = 5000;

app.use(cors());  // Cho phép giao tiếp giữa frontend và backend
app.use(bodyParser.json());  // Xử lý JSON requests

// Cấu hình routes cho To-Do
app.use('/api/todos', todoRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
