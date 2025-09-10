import React, { useState } from 'react';
import type { CartItem } from '../types';

interface OrderPageProps {
    cart: CartItem[];
    onUpdateQuantity: (itemId: string, quantity: number) => void;
    onClearCart: () => void;
    onNavigate: (page: string) => void;
    onPlaceOrder: (customerData: { name: string; phone: string; address: string; paymentMethod: string; }, cart: CartItem[]) => void;
}

const OrderPage: React.FC<OrderPageProps> = ({ cart, onUpdateQuantity, onClearCart, onNavigate, onPlaceOrder }) => {
    const [isOrderConfirmed, setOrderConfirmed] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        paymentMethod: 'contra entrega',
    });

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const phoneNumber = "1234567890"; // Should be configurable

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newOrderId = `AE-${Date.now()}`;
        
        let message = `Hola 👋 ¡Quisiera confirmar mi pedido con los siguientes datos!\n\n`;
        message += `*--- Detalles del Pedido ---*\n`;
        message += `*ID de Pedido:* ${newOrderId}\n\n`;
        
        message += `*--- Información de Contacto ---*\n`;
        message += `*Nombre:* ${formData.name}\n`;
        message += `*Teléfono:* ${formData.phone}\n`;
        message += `*Dirección de Entrega:* ${formData.address}\n\n`;
        
        message += `*--- Resumen del Pedido ---*\n`;
        cart.forEach(item => {
            message += `• ${item.quantity}x ${item.name}\n`;
        });
        
        message += `\n*Método de Pago:* ${formData.paymentMethod}\n`;
        message += `*Total a Pagar:* S/${total.toFixed(2)}\n\n`;
        message += `¡Gracias! Espero la confirmación.`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
        
        // Register the order in the application state
        onPlaceOrder(formData, cart);
        
        // After opening WhatsApp, show a confirmation page in the app
        setOrderId(newOrderId);
        setOrderConfirmed(true);
        onClearCart();
    };

    if (isOrderConfirmed) {
        return (
            <div className="max-w-2xl mx-auto text-center py-20 px-4">
                 <h1 className="text-3xl font-anton text-brand-yellow">¡Gracias por tu pedido!</h1>
                 <p className="mt-4 text-lg text-gray-300">Tu pedido ha sido pre-confirmado con el número de seguimiento:</p>
                 <p className="mt-2 text-2xl font-bold text-white bg-zinc-700 rounded-lg py-3 px-4 inline-block">{orderId}</p>
                 <p className="mt-6 text-gray-300">Te hemos redirigido a WhatsApp para que envíes y finalices tu orden. Si la ventana no se abrió, puedes contactarnos directamente.</p>
                 <p className="mt-4 text-gray-400">Una vez que envíes el mensaje, nos pondremos en contacto contigo para confirmar los detalles de la entrega.</p>
                 <button onClick={() => onNavigate('menu')} className="mt-8 px-8 py-3 bg-brand-orange hover:bg-orange-700 text-white font-bold rounded-full transition-colors">
                    Ver más del Menú
                </button>
            </div>
        )
    }

    if (cart.length === 0) {
        return (
            <div className="text-center py-20 px-4">
                <h1 className="text-3xl font-anton text-brand-orange">Tu Carrito está Vacío</h1>
                <p className="mt-4 text-lg text-gray-400">Parece que aún no has agregado nada. ¡Explora nuestras delicias y arma tu pedido!</p>
                <button onClick={() => onNavigate('menu')} className="mt-8 px-8 py-3 bg-brand-orange hover:bg-orange-700 text-white font-bold rounded-full transition-colors">
                    Explorar Menú
                </button>
            </div>
        )
    }

    return (
        <div className="py-12 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-anton uppercase text-white">Tu Pedido</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 bg-zinc-800/50 p-6 rounded-lg">
                        <h2 className="text-2xl font-bold font-anton text-brand-orange mb-4">Resumen del Carrito</h2>
                        <div className="space-y-4">
                            {cart.map(item => (
                                <div key={item.id} className="flex items-center gap-4 bg-zinc-900 p-3 rounded-md">
                                    <img src={item.imageUrl} alt={item.name} className="w-20 h-20 rounded-md object-cover"/>
                                    <div className="flex-grow">
                                        <h3 className="font-bold text-lg text-gray-200">{item.name}</h3>
                                        <p className="text-brand-yellow font-semibold">S/{item.price.toFixed(2)}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 bg-zinc-700 rounded-full font-bold">-</button>
                                        <span className="w-8 text-center font-bold">{item.quantity}</span>
                                        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 bg-zinc-700 rounded-full font-bold">+</button>
                                    </div>
                                    <p className="font-bold text-lg w-20 text-right">S/{(item.price * item.quantity).toFixed(2)}</p>
                                    <button onClick={() => onUpdateQuantity(item.id, 0)} className="text-gray-500 hover:text-brand-red">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Checkout Form */}
                    <div className="bg-zinc-800 p-6 rounded-lg h-fit">
                        <h2 className="text-2xl font-bold font-anton text-brand-orange mb-4">Finalizar Compra</h2>
                        <div className="flex justify-between items-baseline mb-4 text-2xl font-bold">
                            <span>Total:</span>
                            <span className="text-brand-yellow">S/{total.toFixed(2)}</span>
                        </div>
                        <form onSubmit={handleFormSubmit} className="space-y-4">
                             <input type="text" name="name" placeholder="Nombre completo" value={formData.name} onChange={handleFormChange} required className="w-full p-3 bg-zinc-700 rounded border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-brand-orange text-white" />
                             <input type="tel" name="phone" placeholder="Teléfono" value={formData.phone} onChange={handleFormChange} required className="w-full p-3 bg-zinc-700 rounded border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-brand-orange text-white" />
                             <input type="text" name="address" placeholder="Dirección de entrega" value={formData.address} onChange={handleFormChange} required className="w-full p-3 bg-zinc-700 rounded border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-brand-orange text-white" />
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Método de Pago</label>
                                <select name="paymentMethod" value={formData.paymentMethod} onChange={handleFormChange} className="w-full p-3 bg-zinc-700 rounded border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-brand-orange text-white">
                                    <option>Contra entrega</option>
                                    <option>Yape</option>
                                    <option>Plin</option>
                                    <option>Transferencia</option>
                                </select>
                            </div>
                            <button type="submit" className="w-full p-3 bg-brand-red hover:bg-red-700 text-white font-bold rounded-lg transition-colors">Confirmar Pedido</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;