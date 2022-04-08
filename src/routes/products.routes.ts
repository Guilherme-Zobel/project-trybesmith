import { Router } from 'express';
import ProductsController from '../controllers/products';
import { authName, authAmount } from '../middleware/validateProducts';

const router = Router();

const productsController = new ProductsController();

router.get('/', productsController.getAll);
router.post('/', authName, authAmount, productsController.create);

export default router;