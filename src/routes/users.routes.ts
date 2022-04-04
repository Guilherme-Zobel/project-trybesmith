import { Router } from 'express';
import UserController from '../controllers/users';
import { authUserName, authClasse, authPassword, authLevel } from '../middleware/authUsers';

const router = Router();

const userController = new UserController();

router.post('/', authUserName, authClasse, authPassword, authLevel, userController.create);

export default router;