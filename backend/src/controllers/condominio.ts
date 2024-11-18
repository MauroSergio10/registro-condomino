import { Request, Response } from 'express';
import pool from '../config/database';

export const createCondomino = async (req: Request, res: Response) => {
  const { proprietario, administradores, telefones } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO condominios (proprietario, administradores, telefones) VALUES ($1, $2, $3) RETURNING *',
      [proprietario, administradores, telefones]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar condomínio' });
  }
};
