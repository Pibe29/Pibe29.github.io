import React, { useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHeader from '../../components/admin/AdminHeader';
import DashboardPage from './DashboardPage';
import MenuManagementPage from './MenuManagementPage';
import PromotionsManagementPage from './PromotionsManagementPage';
import OrdersManagementPage from './OrdersManagementPage';
import PlaceholderPage from './PlaceholderPage';
import type { Order } from '../../types';

interface AdminPanelProps {
    onLogout: () => void;
    orders: Order[];
    onUpdateOrderStatus: (orderId: string, newStatus: Order['status']) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onLogout, orders, onUpdateOrderStatus }) => {
    const [activePage, setActivePage] = useState('dashboard');

    const renderContent = () => {
        switch(activePage) {
            case 'dashboard':
                return <DashboardPage />;
            case 'pedidos':
                return <OrdersManagementPage orders={orders} onUpdateStatus={onUpdateOrderStatus} />;
            case 'menu':
                return <MenuManagementPage />;
            case 'promociones':
                return <PromotionsManagementPage />;
            case 'clientes':
                return <PlaceholderPage title="Gestión de Clientes" />;
            case 'configuracion':
                return <PlaceholderPage title="Configuración" />;
            default:
                return <DashboardPage />;
        }
    }

    return (
        <div className="flex h-screen bg-zinc-900 text-white">
            <AdminSidebar activePage={activePage} setActivePage={setActivePage} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <AdminHeader onLogout={onLogout} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-zinc-900 p-6">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default AdminPanel;