import { OrderedItem } from './OrderedItem';
export const orders: Order[] = [];

export class Order {
    id: string;
    clientId: string;
    items: OrderedItem[];
    constructor(clientId?: string, items?: OrderedItem[], id?: string) {
        this.id = id!;
        this.clientId = clientId!;
        this.items = items!;
    }

    get(id: string) {
        return orders.find((p) => p.id === id);
    }
    getAll() {
        return orders;
    }
    create(clientId: string, items: OrderedItem[]) {
        const order: Order = new Order(clientId, items);
        orders.push(order);
        return order;
    }
    update(id: string, clientId: string, items: OrderedItem[]) {
        const order = orders.find((p) => p.id === id);
        if (order) {
            order.clientId = clientId ? clientId : order.clientId;
            order.items = items ? items : order.items;
            return order;
        } else {
            return null;
        } 
    }
    delete(id: string) {
        const index = orders.findIndex((p) => p.id === id);
        if (index === -1) {
            return false;
        }
        orders.splice(index, 1);
        return true;
    }
}