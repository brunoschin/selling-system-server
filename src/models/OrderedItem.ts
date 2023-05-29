export class OrderedItem {
    id: string;
    produtoId: string;
    quantity: number;
    constructor(produtoId?: string, quantity?: number, id?: string) {
        this.id = id!;
        this.produtoId = produtoId!;
        this.quantity = quantity!;
    }
}