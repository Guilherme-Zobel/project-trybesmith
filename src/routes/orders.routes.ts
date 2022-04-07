import { Router } from 'express';
import OrdersController from '../controllers/orders';

const router = Router();

const orderController = new OrdersController();

router.get('/', orderController.getAll);

export default router;