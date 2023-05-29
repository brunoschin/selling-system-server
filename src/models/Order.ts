import { OrderedItem } from './OrderedItem';

export class Order {
    id: string;
    clientId: string;
    items: OrderedItem[];
    constructor(id: string, clientId: string, items: OrderedItem[]) {
        this.id = id;
        this.clientId = clientId;
        this.items = items;
    }
}
