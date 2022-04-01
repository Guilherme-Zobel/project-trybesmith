import { Pool, RowDataPacket } from 'mysql2/promise';
import IProductModel from '../interfaces/models/ProductModel';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<IProductModel[]> {
    const query = 'SELECT * FROM Trybesmith.Products;';

    const result = await this.connection.execute<RowDataPacket[]>(query);
    const [rows] = result;

    return rows as IProductModel[];
  }
}