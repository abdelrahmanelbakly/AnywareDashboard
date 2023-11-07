import express from 'express';
import { getusers, createUser, updateUser, deleteUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getusers);
router.post('/', createUser);
router.put('/', updateUser);
router.delete('/', deleteUser);

export default router;