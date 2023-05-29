import express, { Request, Response } from 'express';
import presetProducts from '../temp/presetProducts';
import { Product } from '../types';
const router = express.Router();

export const products: Product[] = presetProducts;

router.get('/', (_req: Request, res: Response) => {
    res.json(products);
});

export default router;
