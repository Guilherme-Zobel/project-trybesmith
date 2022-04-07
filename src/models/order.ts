import { Pool, RowDataPacket } from 'mysql2/promise';
import IOrderModel from '../interfaces/models/OrdersModel';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrderModel[]> {
    const query = `
    SELECT o.userId, o.id, 
      CONCAT("[", GROUP_CONCAT(p.id), "]") as 'products'
      from Trybesmith.Orders as o
    JOIN Trybesmith.Products as p 
      ON p.orderId = o.id
    GROUP BY p.orderId ORDER BY o.userId;
    `;
    
    const result = await this.connection.execute<RowDataPacket[]>(query);
    const [rows] = result;
    
    return rows as IOrderModel[];
  }
}
