import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'paulo@gmail.com',
    password: '123',
    techs: [
      'Nodejs',
      'Reactjs',
      'React Native',
      { title: 'JavaScript', experience: 100 },
    ],
  });

  return response.json({ message: 'Hello World' });
}
