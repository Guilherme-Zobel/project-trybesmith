import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUserModel from '../interfaces/models/UserModel';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user:IUserModel): Promise<IUserModel> {
    const { username, classe, level, password } = user;
    const query = `INSERT INTO Trybesmith.Users
    (username, classe, level, password) VALUES (?, ?, ?, ?)`;
    const values = [username, classe, level, password];
    const result = await this.connection.execute<ResultSetHeader>(query, values);
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }
}