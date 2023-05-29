export interface Client {
    id: string;
    name: string;
    email: string;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image?: string;
}

export interface OrderedItem {
    id: string;
    produtoId: string;
    quantity: number;
}

export interface Order {
    id: string;
    clientId: string;
    items: OrderedItem[];
}