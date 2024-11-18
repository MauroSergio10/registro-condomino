import { Router } from 'express';
import { createCondomino } from '../controllers/condominio';

const router = Router();

router.post('/condominios', createCondomino);

export default router;
