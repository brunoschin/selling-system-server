export class Product {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;

    constructor(id: string, name: string, price: number, quantity: number, image: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.image = image;
    }
}
