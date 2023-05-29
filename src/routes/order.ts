import express, { Request, Response } from 'express';
import { clients } from './client';
import { newID } from '../utils';
import { Order } from '../types';
const router = express.Router();

export const pedidos: Order[] = [];
router.get('/', (_req: Request, res: Response) => {
    res.json(pedidos);
});

router.get('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const pedido = pedidos.find((p) => p.id === id);
    if (pedido) {
        res.json(pedido);
    } else {
        res.status(404).end();
    }
});

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

router.put('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const { clientId, items } = req.body;
    if (!clientId && !items) {
        return res.status(400).json({
            error: 'Informe ao menos um parâmetro',
        });
    }
    const pedido = pedidos.find((p) => p.id === id);
    if (pedido) {
        pedido.clientId = clientId ? clientId : pedido.clientId;
        pedido.items = items ? items : pedido.items;
        res.json(pedido);
    } else {
        res.status(404).end();
    }
});

router.delete('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const index = pedidos.findIndex((p) => p.id === id);
    if (index === -1) {
        return res.status(404).end();
    }
    pedidos.splice(index, 1);
    res.status(204).end();
});

export default router;
