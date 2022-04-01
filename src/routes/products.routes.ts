import { Router } from 'express';
import ProductsController from '../controllers/products';

const router = Router();

const productsController = new ProductsController();

router.get('/', productsController.getAll);

export default router;