import connection from '../models/connection';
import UserModel from '../models/user';
import IUserModel from '../interfaces/models/UserModel';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: IUserModel): Promise<IUserModel> {
    const userCreated = await this.model.create(user);
    return userCreated;
  }
}

export default UserService;