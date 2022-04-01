import express from 'express';
import ProuctsRouter from './routes/products.routes';

const app = express();

app.use(express.json());

app.use('/products', ProuctsRouter);

export default app;
