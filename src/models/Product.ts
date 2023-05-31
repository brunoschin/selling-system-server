import { newID } from '../Utils';
import presetProducts from '../temp/PresetProducts';
export const products: Product[] = presetProducts;

export class Product {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;

    constructor(name?: string, price?: number, quantity?: number, image?: string, id?: string,) {
        this.id = id!;
        this.name = name!;
        this.price = price!;
        this.quantity = quantity!;
        this.image = image!;
    }

    get(id: string) {
        const _product = products.find((c) => c.id === id);
        if (_product) {
            return _product;
        } else {
            throw new Error('Produto não encontrado');
        }
    }
    getAll() {
        return products;
    }
    create(name: string, price: number, quantity: number, image: string) {
        if (!name || !price || !quantity || !image) {
            throw new Error('Todos os campos são obrigatórios');
        }
        const _product: Product = new Product(name, price, quantity, image, newID());
        products.push(_product);
        return _product;
    }
    update(id: string, name: string, price: number, quantity: number, image: string) {
        if (!name && !price && !quantity && !image) {
            throw new Error('Insira ao menos um campo para atualizar');
        }
        const _product = new Product().get(id);
        _product.name = name ? name : _product.name;
        _product.price = price ? price : _product.price;
        _product.quantity = quantity ? quantity : _product.quantity;
        _product.image = image ? image : _product.image;
        return _product;
    }
    delete(id: string) {
        const index = products.findIndex((c) => c.id === id);
        if (index === -1) {
            throw new Error('Produto não encontrado');
        }
        products.splice(index, 1);
        return true;
    }
}
