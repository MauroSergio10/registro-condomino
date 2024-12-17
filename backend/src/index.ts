import express from "express";
import cors from "cors";
import userRoutes from "./routes/useRoutes";

// Criação do app
const app = express();
const port = 3000;

// Middleware para permitir parsing de JSON
app.use(express.json());

app.use(cors());

// Rota principal
app.get("/", (req, res) => {
  res.send("Hello, TypeScript + Express!");
});

app.use("/api", userRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
