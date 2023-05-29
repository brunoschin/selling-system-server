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
        return products.find((c) => c.id === id);
    }
    getAll() {
        return products;
    }
    create(name: string, price: number, quantity: number, image: string) {
        const product: Product = new Product(name, price, quantity, image, newID());
        products.push(product);
        return product;
    }
    update(id: string, name: string, price: number, quantity: number, image: string) {
        const product = products.find((c) => c.id === id);
        if (product) {
            product.name = name ? name : product.name;
            product.price = price ? price : product.price;
            product.quantity = quantity ? quantity : product.quantity;
            product.image = image ? image : product.image;
            return product;
        } else {
            return null;
        }
    }
    delete(id: string) {
        const index = products.findIndex((c) => c.id === id);
        if (index === -1) {
            return false;
        }
        products.splice(index, 1);
        return true;
    }
}
