// server.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.send('Добро пожаловать в API объявки!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});

//Fix: добавлена кодировка UTF-8
