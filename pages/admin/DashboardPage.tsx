import React from 'react';

const StatCard: React.FC<{ title: string; value: string; icon: JSX.Element }> = ({ title, value, icon }) => (
    <div className="bg-zinc-800 p-6 rounded-lg shadow-lg flex items-center justify-between">
        <div>
            <p className="text-sm font-medium text-gray-400 uppercase">{title}</p>
            <p className="text-3xl font-bold text-white">{value}</p>
        </div>
        <div className="text-brand-orange">
            {icon}
        </div>
    </div>
);

const DashboardPage: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-anton text-brand-yellow mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard 
                    title="Ingresos Hoy" 
                    value="$1,234" 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>}
                />
                <StatCard 
                    title="Pedidos Hoy" 
                    value="42"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>}
                />
                 <StatCard 
                    title="Nuevos Clientes" 
                    value="7"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.28-1.25-1.45-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.28-1.25 1.45-1.857M12 12a3 3 0 100-6 3 3 0 000 6z" /></svg>}
                />
                 <StatCard 
                    title="Items más Vendidos" 
                    value="Alitas BBQ"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>}
                />
            </div>
            <div className="mt-8 bg-zinc-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-white mb-4">Últimos Pedidos</h2>
                {/* A table or list of recent orders would go here */}
                <p className="text-gray-400">La tabla de pedidos recientes aparecerá aquí.</p>
            </div>
        </div>
    );
};

export default DashboardPage;
