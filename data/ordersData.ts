import type { Order } from '../types';

export const ordersData: Order[] = [
    {
        id: 'AE-1678886400000',
        customerName: 'Juan Pérez',
        customerPhone: '987654321',
        customerAddress: 'Calle Falsa 123, Miraflores',
        items: [
            { id: 'alitas-bbq', name: 'Alitas BBQ Clásicas', quantity: 2, price: 15.99 },
            { id: 'gaseosa-personal', name: 'Gaseosa Personal', quantity: 2, price: 3.50 },
        ],
        total: 38.98,
        status: 'delivered',
        orderDate: '2023-03-15T12:00:00Z',
        paymentMethod: 'Yape'
    },
    {
        id: 'AE-1678890000000',
        customerName: 'Maria Garcia',
        customerPhone: '912345678',
        customerAddress: 'Av. Principal 456, San Isidro',
        items: [
            { id: 'alitas-bbq', name: 'Alitas BBQ Clásicas', quantity: 1, price: 15.99 },
            { id: 'salchipapas-supremas', name: 'Salchipapas Supremas', quantity: 1, price: 12.99 }
        ],
        total: 28.98,
        status: 'out for delivery',
        orderDate: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), // 1 hour ago
        paymentMethod: 'Contra entrega'
    },
    {
        id: 'AE-1678893600000',
        customerName: 'Carlos Rodríguez',
        customerPhone: '998877665',
        customerAddress: 'Jr. de la Unión 789, Centro',
        items: [
            { id: 'pollo-broaster', name: 'Pollo Broaster Crujiente', quantity: 1, price: 14.99 },
            { id: 'jarra-chicha', name: 'Jarra de Chicha Morada', quantity: 1, price: 8.00 },
        ],
        total: 22.99,
        status: 'preparing',
        orderDate: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30 mins ago
        paymentMethod: 'Plin'
    },
    {
        id: 'AE-1678897200000',
        customerName: 'Ana Martinez',
        customerPhone: '965432109',
        customerAddress: 'Calle Las Begonias 101, Surco',
        items: [
            { id: 'alitas-mango-habanero', name: 'Alitas Mango Habanero', quantity: 1, price: 17.99 },
        ],
        total: 17.99,
        status: 'confirmed',
        orderDate: new Date(Date.now() - 15 * 60 * 1000).toISOString(), // 15 mins ago
        paymentMethod: 'Transferencia'
    },
     {
        id: 'AE-1678900800000',
        customerName: 'Luis Gonzales',
        customerPhone: '955555555',
        customerAddress: 'Av. Arequipa 2020, Lince',
        items: [
            { id: 'alitas-buffalo', name: 'Alitas Buffalo Picantes', quantity: 3, price: 16.99 },
        ],
        total: 50.97,
        status: 'pending',
        orderDate: new Date(Date.now() - 5 * 60 * 1000).toISOString(), // 5 mins ago
        paymentMethod: 'Contra entrega'
    },
];
