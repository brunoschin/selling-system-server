import express, { Request, Response } from 'express';
import { Client } from '../models/Client';

const router = express.Router();
const client = new Client();

router.get('/', (_req: Request, res: Response) => {
    res.json(client.getAll());
});

router.get('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const _client = client.get(id);
    if (_client) {
        res.json(_client);
    } else {
        res.status(404).end();
    }
});

router.post('/', (req: Request, res: Response) => {
    const { name, email } = req.body;
    const _client = client.create(name, email);
    if (_client) {
        res.status(201).json(_client);
    } else {
        res.status(400).end();
    }
});

router.put('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const { name, email } = req.body;
    const _client = client.update(id, name, email);
    if (_client) {
        res.json(_client);
    } else {
        res.status(404).end();
    }
});

router.delete('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    if (client.delete(id)) {
        res.status(204).end();
    } {
        res.status(404).end();
    }
});

export default router;