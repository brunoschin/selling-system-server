import express, { Request, Response } from 'express';
import { Order } from '../models/Order';

const router = express.Router();
const order = new Order();

router.get('/', (_req: Request, res: Response) => {
    res.json(order.getAll());
});

router.get('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const _order = order.get(id);
    if (_order) {
        res.json(_order);
    } else {
        res.status(404).end();
    }
});

router.post('/', (req: Request, res: Response) => {
    const { clientId, items } = req.body;
    const _order = order.create(clientId, items);
    if (_order) {
        return res.status(400).end();
    }else{
        res.status(201).json(_order);
    }
});

router.put('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const { clientId, items } = req.body;
    const _order = order.update(id, clientId, items);
    if (_order) {
        res.json(_order);
    } else {
        res.status(404).end();
    }
});

router.delete('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    if (order.delete(id)) {
        res.status(204).end();
    } else {
        res.status(404).end();
    }
});

export default router;
