import mongoose from 'mongoose';
import { config } from 'dotenv';

config();


const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI || '');
      console.log('Conectado ao MongoDB');
    } catch (error) {
      console.error('Erro ao conectar ao MongoDB:', error);
      process.exit(1);
    }
  };
  
  export default connectDB;