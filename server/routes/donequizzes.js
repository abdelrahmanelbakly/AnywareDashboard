import express from 'express';
import { getquizzes, createQuizz, updateQuizz, deleteQuizz } from '../controllers/donequizzes.js';

const router = express.Router();

router.get('/', getquizzes);
router.post('/', createQuizz);
router.put('/', updateQuizz);
router.delete('/', deleteQuizz);

export default router;