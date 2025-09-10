import React, { useState } from 'react';
import type { Order } from '../../types';
import AdminModal from '../../components/admin/AdminModal';

const statusColors: Record<Order['status'], string> = {
    pending: 'bg-yellow-500/20 text-yellow-300',
    confirmed: 'bg-blue-500/20 text-blue-300',
    preparing: 'bg-indigo-500/20 text-indigo-300',
    'out for delivery': 'bg-purple-500/20 text-purple-300',
    delivered: 'bg-green-500/20 text-green-300',
    cancelled: 'bg-red-500/20 text-red-400',
};

interface OrdersManagementPageProps {
    orders: Order[];
    onUpdateStatus: (orderId: string, newStatus: Order['status']) => void;
}

const OrdersManagementPage: React.FC<OrdersManagementPageProps> = ({ orders, onUpdateStatus }) => {
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

    const handleViewDetails = (order: Order) => {
        setSelectedOrder(order);
    };

    const handleStatusChange = (orderId: string, newStatus: Order['status']) => {
        onUpdateStatus(orderId, newStatus);
        if (selectedOrder && selectedOrder.id === orderId) {
            setSelectedOrder({ ...selectedOrder, status: newStatus });
        }
    };
    
    // Sort orders to show newest first
    const sortedOrders = [...orders].sort((a, b) => new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime());


    return (
        <div>
            <h1 className="text-3xl font-anton text-brand-yellow mb-6">Gestión de Pedidos</h1>
            <div className="bg-zinc-800 shadow-lg rounded-lg overflow-x-auto">
                <table className="min-w-full">
                    <thead className="bg-zinc-700">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">ID Pedido</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Cliente</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Total</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Estado</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Fecha</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-700">
                        {sortedOrders.map(order => (
                            <tr key={order.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-400">{order.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{order.customerName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-yellow font-semibold">S/{order.total.toFixed(2)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[order.status]}`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{new Date(order.orderDate).toLocaleString()}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button onClick={() => handleViewDetails(order)} className="text-blue-400 hover:text-blue-300">Ver Detalles</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {selectedOrder && (
                <AdminModal isOpen={true} onClose={() => setSelectedOrder(null)} title={`Detalles del Pedido: ${selectedOrder.id}`}>
                    <div className="space-y-4 text-gray-300">
                        <p><strong>Cliente:</strong> {selectedOrder.customerName}</p>
                        <p><strong>Teléfono:</strong> {selectedOrder.customerPhone}</p>
                        <p><strong>Dirección:</strong> {selectedOrder.customerAddress}</p>
                        <p><strong>Total:</strong> <span className="font-bold text-brand-yellow">S/{selectedOrder.total.toFixed(2)}</span></p>
                        <p><strong>Método de Pago:</strong> {selectedOrder.paymentMethod}</p>
                        <div>
                            <strong>Items:</strong>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                {selectedOrder.items.map(item => (
                                    <li key={item.id}>{item.quantity}x {item.name} (@ S/{item.price.toFixed(2)})</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex items-center gap-4 pt-4 border-t border-zinc-700">
                            <strong>Actualizar Estado:</strong>
                            <select 
                                value={selectedOrder.status} 
                                onChange={(e) => handleStatusChange(selectedOrder.id, e.target.value as Order['status'])}
                                className="p-2 bg-zinc-700 rounded text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                            >
                                {Object.keys(statusColors).map(status => (
                                    <option key={status} value={status}>{status}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </AdminModal>
            )}
        </div>
    );
};

export default OrdersManagementPage;