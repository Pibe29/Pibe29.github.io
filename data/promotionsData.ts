import type { Promotion } from '../types';

export const promotionsData: Promotion[] = [
    {
        id: 'promo-martes',
        title: 'Martes de 2x1 en Alitas BBQ',
        description: '¡Los martes son para compartir! Pide 10 alitas BBQ y llévate otras 10 completamente GRATIS. Válido solo para Alitas BBQ. No acumulable con otras promociones.',
        imageUrl: 'https://picsum.photos/id/301/600/400',
        discount: '2x1',
        price: 15.99,
    },
    {
        id: 'combo-familiar',
        title: 'Combo Familiar Express',
        description: 'Ideal para 4 personas. Incluye 20 alitas (sabores clásicos), 1 porción de salchipapas supremas, y una jarra de chicha morada de 1 litro.',
        imageUrl: 'https://picsum.photos/id/302/600/400',
        endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days from now
        discount: 'Ahorra 20%',
        price: 42.99,
    },
    {
        id: 'promo-finde',
        title: 'Fin de Semana Explosivo',
        description: '¡Prepara tu fin de semana! 30 alitas (sabores clásicos) por un precio especial. Válido de viernes a domingo.',
        imageUrl: 'https://picsum.photos/id/303/600/400',
        discount: 'Precio Especial',
        price: 39.99,
    },
];