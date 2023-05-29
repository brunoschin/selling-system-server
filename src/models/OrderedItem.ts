export class OrderedItem {
    id: string;
    produtoId: string;
    quantity: number;
    constructor(id: string, produtoId: string, quantity: number) {
        this.id = id;
        this.produtoId = produtoId;
        this.quantity = quantity;
    }
}