import express, { Request, Response } from 'express';
import presetProducts from '../temp/presetProducts';
import { newID } from '../utils';
import { Product } from '../types';
const router = express.Router();

export const products: Product[] = presetProducts;

router.get('/', (_req: Request, res: Response) => {
    res.json(products);
});

router.get('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const product = products.find((p) => p.id === id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).end();
    }
});

router.post('/', (req: Request, res: Response) => {
    const { name, price, quantity, image } = req.body;
    if (!name || !price || !quantity || !image) {
        return res.status(400).json({
            error: 'Parâmetros ausentes',
        });
    }
    const newProduct: Product = {
        id: newID(),
        name,
        price,
        quantity,
        image,
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

router.put('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const { name, price, quantity, image } = req.body;
    if (!name && !price && !quantity && !image) {
        return res.status(400).json({
            error: 'Informe ao menos um parâmetro',
        });
    }
    const product = products.find((p) => p.id === id);
    if (product) {
        product.name = name? name : product.name;
        product.price = price? price : product.price;
        product.quantity = quantity? quantity : product.quantity;
        product.image = image? image : product.image;
        res.json(product);
    } else {
        res.status(404).end();
    }
});

router.delete('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const productIndex = products.findIndex((p) => p.id === id);
    if (productIndex !== -1) {
        products.splice(productIndex, 1);
        res.status(204).end();
    } else {
        res.status(404).end();
    }
});

export default router;