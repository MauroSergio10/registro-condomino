import express from 'express';
import registerUser from './routes/registerUser'

// Criação do app
const app = express();
const port = 3000;

// Middleware para permitir parsing de JSON
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
  res.send('Hello, TypeScript + Express!');
});

app.use('/registerUser', registerUser)

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
