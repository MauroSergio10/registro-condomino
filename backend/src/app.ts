import express from 'express';
import cors from 'cors';
import connectDB from './config/database';
import userRoutes from './routes/userRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

// Conectar ao MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/users', userRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
