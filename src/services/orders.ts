import connection from '../models/connection';
import OrderModel from '../models/order';
import IOrderModel from '../interfaces/models/OrdersModel';

class OrderService {
  public order: OrderModel;

  constructor() {
    this.order = new OrderModel(connection);
  }

  public async getAll(): Promise<IOrderModel[]> {
    const orders = await this.order.getAll();

    return orders;
  }
}

export default OrderService;