import express from 'express';
import { getupcomming, createUpcomming, updateUpcomming, deleteUpcomming } from '../controllers/upcomming.js';

const router = express.Router();

router.get('/', getupcomming);
router.post('/', createUpcomming);
router.patch('/:id', updateUpcomming);
router.delete('/:id', deleteUpcomming);

export default router;