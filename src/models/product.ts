import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import IProductModel from '../interfaces/models/ProductModel';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IProductModel[]> {
    const query = 'SELECT * FROM Trybesmith.Products;';

    const result = await this.connection.execute<RowDataPacket[]>(query);
    const [rows] = result;
    
    return rows as IProductModel[];
  }

  public async create(product:IProductModel): Promise<IProductModel> {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const result = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }
}