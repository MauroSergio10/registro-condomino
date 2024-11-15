import { Request, Response } from 'express';
import User from '../models/User';

// Obter todos os usuários
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter usuários' });
  }
};

// Criar um novo usuário
export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar usuário' });
  }
};
