import express, { Request, Response } from 'express';
import { newID } from '../utils';
import { Client } from '../types';
const router = express.Router();

export const clients: Client[] = [];

router.post('/', (req: Request, res: Response) => {
    const { name, email } = req.body;

    const client: Client = {
        id: newID(),
        name,
        email,
    };

    clients.push(client);

    res.status(201).json(client);
});

router.get('/', (_req: Request, res: Response) => {
    res.json(clients);
});

export default router;
