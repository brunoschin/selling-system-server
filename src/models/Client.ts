import { newID } from '../Utils';
export const clients: Client[] = [];

export class Client {
    id: string;
    name: string;
    email: string;

    constructor(name?: string, email?: string, id?: string) {
        this.id = id!;
        this.name = name!;
        this.email = email!;
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
    create(name: string, email: string) {
        if (!name || !email) {
            throw new Error('Nome e email são obrigatórios');
        }
        if (clients.find((c) => c.email === email)) {
            throw new Error('Email já cadastrado');
        }
        let id: string;
        do {
            id = newID()
        } while (clients.find((c) => c.id === id));
        const client: Client = new Client(name, email, id);
        clients.push(client);
        return client;
    }
    update(id: string, name: string, email: string) {
        if (!name && !email) {
            throw new Error('Insira ao menos um campo para atualizar');
        }
        const client = new Client().get(id);
        client.name = name ? name : client.name;
        if (email && clients.find((c) => c.email === email)) {
            throw new Error('Email já cadastrado');
        }
        client.email = email ? email : client.email;
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