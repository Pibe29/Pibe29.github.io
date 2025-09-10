import React from 'react';

interface AdminHeaderProps {
    onLogout: () => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ onLogout }) => {
    return (
        <header className="flex items-center justify-between h-20 px-6 bg-zinc-800/50 border-b border-zinc-700">
            <h1 className="text-xl font-semibold">Bienvenido, Admin</h1>
            <button
                onClick={onLogout}
                className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-brand-red rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80"
            >
                Cerrar Sesión
            </button>
        </header>
    );
};

export default AdminHeader;
