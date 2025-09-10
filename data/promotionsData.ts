import type { Promotion } from '../types';

export const promotionsData: Promotion[] = [
    {
        id: 'promo-martes',
        title: 'Martes de 2x1 en Alitas',
        description: '¡Los martes son para compartir! Pide 10 alitas de cualquier sabor y llévate otras 10 completamente GRATIS. No acumulable con otras promociones.',
        imageUrl: 'https://picsum.photos/id/301/600/400',
        discount: '2x1',
    },
    {
        id: 'combo-familiar',
        title: 'Combo Familiar Express',
        description: 'Ideal para 4 personas. Incluye 20 alitas (2 sabores), 1 porción de salchipapas supremas, y una jarra de chicha morada de 1 litro.',
        imageUrl: 'https://picsum.photos/id/302/600/400',
        endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days from now
        discount: 'Ahorra 20%'
    },
    {
        id: 'promo-finde',
        title: 'Fin de Semana Explosivo',
        description: '¡Prepara tu fin de semana! 30 alitas (hasta 3 sabores) por un precio especial. Válido de viernes a domingo.',
        imageUrl: 'https://picsum.photos/id/303/600/400',
        discount: 'Precio Especial'
    },
];
