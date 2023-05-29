import express, { Request, Response } from 'express';
import { clients } from './client';
import { newID } from '../utils';
import { Order } from '../types';
const router = express.Router();

export const pedidos: Order[] = [];

router.post('/', (req: Request, res: Response) => {
    const { clientId, items } = req.body;

    const client = clients.find((c) => c.id === clientId);
    if (!client) {
        return res.status(404).json({ message: 'Cliente não encontrado.' });
    }

    const pedido: Order = {
        id: newID(),
        clientId,
        items,
    };

    pedidos.push(pedido);

    res.status(201).json(pedido);
});

router.get('/', (_req: Request, res: Response) => {
    res.json(pedidos);
});

export default router;
