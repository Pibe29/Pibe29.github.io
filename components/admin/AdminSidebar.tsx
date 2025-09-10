import React from 'react';

interface AdminSidebarProps {
    activePage: string;
    setActivePage: (page: string) => void;
}

const NavLink: React.FC<{
    page: string;
    activePage: string;
    onClick: () => void;
    children: React.ReactNode;
}> = ({ page, activePage, onClick, children }) => {
    const isActive = page === activePage;
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center px-4 py-2 mt-2 text-gray-300 transition-colors duration-200 transform rounded-md hover:bg-zinc-700 hover:text-white ${isActive ? 'bg-zinc-700 text-white' : ''}`}
        >
            {children}
        </button>
    )
};

const AdminSidebar: React.FC<AdminSidebarProps> = ({ activePage, setActivePage }) => {
    const navItems = [
        { id: 'dashboard', name: 'Dashboard' },
        { id: 'pedidos', name: 'Pedidos' },
        { id: 'menu', name: 'Menú' },
        { id: 'promociones', name: 'Promociones' },
        { id: 'clientes', name: 'Clientes' },
        { id: 'configuracion', name: 'Configuración' },
    ];

    return (
        <div className="flex flex-col w-64 bg-zinc-800">
            <div className="flex items-center justify-center h-20 shadow-md">
                <h1 className="text-2xl font-anton text-white">ADMIN <span className="text-brand-red">PANEL</span></h1>
            </div>
            <nav className="flex-1 px-2 py-4">
                {navItems.map(item => (
                     <NavLink key={item.id} page={item.id} activePage={activePage} onClick={() => setActivePage(item.id)}>
                        <span className="mx-4 font-medium">{item.name}</span>
                     </NavLink>
                ))}
            </nav>
        </div>
    );
};

export default AdminSidebar;
