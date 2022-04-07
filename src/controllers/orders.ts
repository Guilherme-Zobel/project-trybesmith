import { Request, Response } from 'express';
import OrderService from '../services/orders';

class OrdersController {
  constructor(private productService = new OrderService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const stringAllOrders = await this.productService.getAll();
    const parseOrders = stringAllOrders.map((stringOrder) => ({
      ...stringOrder, products: JSON.parse(stringOrder.products) }));

    res.status(200).json(parseOrders);
  };
}

export default OrdersController;