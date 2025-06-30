const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Пример API
app.get("/", (req, res) => {
  res.send("Добро пожаловать в API Объявки!");
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});