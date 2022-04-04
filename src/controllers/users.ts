import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import UserService from '../services/users';

dotenv.config();

const secret = process.env.JWT_SECRET || 'senha muito forte';

class UserController {
  constructor(private userService = new UserService()) {}
  
  public create = async (req: Request, res: Response) => {
    const user = req.body;
    
    const userCreated = await this.userService.create(user);
    
    if (!userCreated) return;
    
    const jwtConfig = {
      expiresIn: '1d',
    };
    
    const { password, ...userWithoutPassword } = user;
    
    const token = jwt.sign({ data: userWithoutPassword }, secret, jwtConfig);
    
    res.status(201).json({ token });
  };
}

export default UserController;