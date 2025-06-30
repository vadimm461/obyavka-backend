const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ������ API
app.get("/", (req, res) => {
  res.send("����� ���������� � API �������!");
});

app.listen(PORT, () => {
  console.log(`������ ������� �� ����� ${PORT}`);
});