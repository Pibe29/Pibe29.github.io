import type { Product } from '../types';

export const menuData: Product[] = [
    // Alitas
    {
        id: 'alitas-bbq',
        name: 'Alitas BBQ Clásicas',
        description: '10 jugosas alitas bañadas en nuestra salsa BBQ casera con un toque ahumado.',
        price: 15.99,
        category: 'Alitas',
        imageUrl: 'https://picsum.photos/id/102/500/300',
        tags: ['favorito', 'clásico']
    },
    {
        id: 'alitas-buffalo',
        name: 'Alitas Buffalo Picantes',
        description: 'El picante que te gusta. 10 alitas crujientes en salsa buffalo. Servidas con aderezo ranch.',
        price: 16.99,
        category: 'Alitas',
        imageUrl: 'https://picsum.photos/id/103/500/300',
        tags: ['picante']
    },
    {
        id: 'alitas-teriyaki',
        name: 'Alitas Teriyaki Agridulces',
        description: 'Una fusión oriental. 10 alitas glaseadas con salsa teriyaki y semillas de sésamo.',
        price: 16.99,
        category: 'Alitas',
        imageUrl: 'https://picsum.photos/id/104/500/300',
    },
    {
        id: 'alitas-mango-habanero',
        name: 'Alitas Mango Habanero',
        description: 'Dulce y explosivo. 10 alitas en una audaz salsa de mango y chile habanero.',
        price: 17.99,
        category: 'Alitas',
        imageUrl: 'https://picsum.photos/id/105/500/300',
        tags: ['picante', 'exótico']
    },
    // Platos Fuertes
    {
        id: 'salchipapas-supremas',
        name: 'Salchipapas Supremas',
        description: 'Papas fritas doradas, salchichas de primera, huevo frito y todas las cremas.',
        price: 12.99,
        category: 'Platos Fuertes',
        imageUrl: 'https://picsum.photos/id/30/500/300',
        tags: ['favorito']
    },
    {
        id: 'pollo-broaster',
        name: 'Pollo Broaster Crujiente',
        description: '2 piezas de nuestro pollo extra crujiente, acompañado de papas fritas y ensalada.',
        price: 14.99,
        category: 'Platos Fuertes',
        imageUrl: 'https://picsum.photos/id/40/500/300',
        tags: ['clásico']
    },
    {
        id: 'hamburguesa-express',
        name: 'Hamburguesa Express',
        description: 'Carne jugosa, queso cheddar, lechuga, tomate y nuestra salsa especial. Con papas fritas.',
        price: 13.99,
        category: 'Platos Fuertes',
        imageUrl: 'https://picsum.photos/id/106/500/300',
    },
    // Bebidas
    {
        id: 'gaseosa-personal',
        name: 'Gaseosa Personal',
        description: 'Elige tu sabor favorito: Coca-Cola, Inca Kola, Sprite.',
        price: 3.50,
        category: 'Bebidas',
        imageUrl: 'https://picsum.photos/id/200/500/300',
    },
    {
        id: 'jarra-chicha',
        name: 'Jarra de Chicha Morada',
        description: '1 litro de nuestra refrescante chicha morada casera. Perfecta para compartir.',
        price: 8.00,
        category: 'Bebidas',
        imageUrl: 'https://picsum.photos/id/201/500/300',
    },
];
