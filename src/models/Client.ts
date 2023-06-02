import { newID } from '../Utils';
export const clients: Client[] = [];

export class Client {
    id: string;

    constructor(id?: string) {
        this.id = id!;
    }

    get(id: string) {
        const _client = clients.find((c) => c.id === id);
        if (_client) {
            return _client;
        } else {
            throw new Error('Cliente não encontrado');
        }
    }
    getAll() {
        return clients;
    }
    create() {
        let id: string;
        do {
            id = newID()
        } while (clients.find((c) => c.id === id));
        const client: Client = new Client(id);
        clients.push(client);
        return client;
    }
    delete(id: string) {
        const index = clients.findIndex((c) => c.id === id);
        if (index === -1) {
            throw new Error('Cliente não encontrado');
        }
        clients.splice(index, 1);
        return true;
    }
}