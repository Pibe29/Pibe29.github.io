export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    tags?: string[];
}

export interface CartItem extends Product {
    quantity: number;
}

export interface Promotion {
    id:string;
    title: string;
    description: string;
    imageUrl: string;
    endDate?: string;
    discount?: string;
}

export interface Order {
    id: string;
    customerName: string;
    customerPhone: string;
    customerAddress: string;
    items: {
        id: string;
        name: string;
        quantity: number;
        price: number;
    }[];
    total: number;
    status: 'pending' | 'confirmed' | 'preparing' | 'out for delivery' | 'delivered' | 'cancelled';
    orderDate: string;
    paymentMethod: string;
}
