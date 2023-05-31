export class OrderedItem {
    produtoId: string;
    quantity: number;
    constructor(produtoId?: string, quantity?: number) {
        this.produtoId = produtoId!;
        this.quantity = quantity!;
    }
}