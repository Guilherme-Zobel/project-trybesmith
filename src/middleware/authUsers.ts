import { Request, Response, NextFunction } from 'express';

import joi from 'joi';

export function authUserName(req: Request, res: Response, next: NextFunction) {
  const { username } = req.body;

  const userNameRequired = joi.required();
  const userNameString = joi.string();
  const userNameMin = joi.string().min(3);

  if (userNameRequired.validate(username).error) {
    return res.status(400).json({ error: 'Username is required' });
  }

  if (userNameString.validate(username).error) {
    return res.status(422).json({ error: 'Username must be a string' });
  }

  if (userNameMin.validate(username).error) {
    return res.status(422).json({ error: 'Username must be longer than 2 characters' });
  }

  next();
}

export function authClasse(req: Request, res: Response, next: NextFunction) {
  const { classe } = req.body;

  const classeString = joi.string();
  const classeRequired = joi.required();
  const classeMin = joi.string().min(3);

  if (classeRequired.validate(classe).error) {
    return res.status(400).json({ error: 'Classe is required' });
  }

  if (classeString.validate(classe).error) {
    return res.status(422).json({ error: 'Classe must be a string' });
  }

  if (classeMin.validate(classe).error) {
    return res.status(422).json({ error: 'Classe must be longer than 2 characters' });
  }

  next();
}

export function authPassword(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;

  const passwordString = joi.string();
  const passwordRequired = joi.required();
  const passwordMin = joi.string().min(8);

  if (passwordRequired.validate(password).error) {
    return res.status(400).json({ error: 'Password is required' });
  }

  if (passwordString.validate(password).error) {
    return res.status(422).json({ error: 'Password must be a string' });
  }

  if (passwordMin.validate(password).error) {
    return res.status(422).json({ error: 'Password must be longer than 7 characters' });
  }

  next();
}

export function authLevel(req: Request, res: Response, next: NextFunction) {
  const { level } = req.body;

  const levelRequired = joi.required();
  const levelNumber = joi.number();
  const levelMin = joi.number().min(1);

  if (levelRequired.validate(level).error) {
    return res.status(400).json({ error: 'Level is required' });
  }

  if (levelNumber.validate(level, { convert: false }).error) {
    return res.status(422).json({ error: 'Level must be a number' });
  }

  if (levelMin.validate(level).error) {
    return res.status(422).json({ error: 'Level must be greater than 0' });
  }

  next();
}