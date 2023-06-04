import { OrderedItem } from './OrderedItem';
import { Client } from './Client';
import { newID } from '../Utils';
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
        const _order = orders.find((p) => p.id === id);
        if (_order) {
            return _order;
        } else {
            throw new Error('Pedido não encontrado');
        }
    }
    getByClient(id: string) {
        const _order = orders.map((p) => p.clientId === id && p);
        if (_order) {
            return _order;
        } else {
            throw new Error('Pedido não encontrado');
        }
    }
    getAll() {
        return orders;
    }
    create(clientId: string, items: OrderedItem[]) {
        if (!clientId || !items) {
            throw new Error('Cliente e itens são obrigatórios');
        }
        new Client().get(clientId);
        let id: string;
        do {
            id = newID()
        } while (orders.find((p) => p.id === id));
        const order: Order = new Order(clientId, items, id);
        orders.push(order);
        return order;
    }
    update(id: string, clientId: string, items: OrderedItem[]) {
        if (!clientId && !items) {
            throw new Error('Insira ao menos um campo para atualizar');
        }
        const order = new Order().get(id);
        if (clientId) new Client().get(clientId);
        order.clientId = clientId ? clientId : order.clientId;
        order.items = items ? items : order.items;
        return order;
    }
    delete(id: string) {
        const index = orders.findIndex((p) => p.id === id);
        if (index === -1) {
            throw new Error('Pedido não encontrado');
        }
        orders.splice(index, 1);
        return true;
    }
}