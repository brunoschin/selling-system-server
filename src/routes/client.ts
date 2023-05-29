import express, { Request, Response } from 'express';
import { newID } from '../Utils';
import { Client } from '../models/Client';
const router = express.Router();

export const clients: Client[] = [];

router.get('/', (_req: Request, res: Response) => {
    res.json(clients);
});

router.get('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const client = clients.find((c) => c.id === id);
    if (client) {
        res.json(client);
    } else {
        res.status(404).end();
    }
});

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

router.put('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const { name, email } = req.body;
    if (!name && !email) {
        return res.status(400).json({
            error: 'Informe ao menos um parâmetro',
        });
    }
    const client = clients.find((c) => c.id === id);
    if (client) {
        client.name = name ? name : client.name;
        client.email = email ? email : client.email;
        res.json(client);
    } else {
        res.status(404).end();
    }
});

router.delete('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const index = clients.findIndex((c) => c.id === id);
    if (index === -1) {
        return res.status(404).end();
    }
    clients.splice(index, 1);
    res.status(204).end();
});


export default router;
