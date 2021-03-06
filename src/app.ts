import express from 'express';
import ProuctsRouter from './routes/products.routes';
import UsersRouter from './routes/users.routes';
import OrdersRouter from './routes/orders.routes';

const app = express();

app.use(express.json());

app.use('/products', ProuctsRouter);
app.use('/users', UsersRouter);
app.use('/orders', OrdersRouter);

export default app;
