const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;

app.use(cors());

// Permite receber JSON
app.use(express.json());

// Rota inicial
app.get("/", (req, res) => {
  res.send("Bem-vindo ao backend!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});