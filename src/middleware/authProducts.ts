import { Request, Response, NextFunction } from 'express';

import joi from 'joi';

export function authName(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body;

  const nameString = joi.string();
  const nameRequired = joi.required();
  const nameMin = joi.string().min(2);

  if (nameString.validate(name).error) {
    return res.status(422).json({ error: 'Name must be a string' });
  }

  if (nameRequired.validate(name).error) {
    return res.status(400).json({ error: 'Name is required' });
  }

  if (nameMin.validate(name).error) {
    return res.status(422).json({ error: 'Name must be longer than 2 characters' });
  }

  next();
}

export function authAmount(req: Request, res: Response, next: NextFunction) {
  const { amount } = req.body;

  const amountString = joi.string();
  const amountRequired = joi.required();
  const amountMin = joi.string().min(2);

  if (amountString.validate(amount).error) {
    return res.status(422).json({ error: 'Amount must be a string' });
  }

  if (amountRequired.validate(amount).error) {
    return res.status(400).json({ error: 'Amount is required' });
  }

  if (amountMin.validate(amount).error) {
    return res.status(422).json({ error: 'Amount must be longer than 2 characters' });
  }

  next();
}