import express, { Request, Response } from 'express';
import { Product } from '../models/Product';

const router = express.Router();
const product = new Product();

router.get('/', (_req: Request, res: Response) => {
    res.json(product.getAll());
});

router.get('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const _product = product.get(id);
    if (_product) {
        res.json(_product);
    } else {
        res.status(404).end();
    }
});

router.post('/', (req: Request, res: Response) => {
    const { name, price, image } = req.body;
    const _product = product.create(name, price, image);
    if (_product) {
        res.status(201).json(_product);
    } else {
        return res.status(400).end();
    }
});

router.put('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const { name, price, image } = req.body;
    const _product = product.update(id, name, price, image);
    if (_product) {
        res.json(_product);
    } else {
        res.status(404).end();
    }
});

router.delete('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    if (product.delete(id)) {
        res.status(204).end();
    } else {
        res.status(404).end();
    }
});

export default router;