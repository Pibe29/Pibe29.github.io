import React, { useState } from 'react';

interface HeaderProps {
    onNavigate: (page: string) => void;
    cartCount: number;
}

const NavLink: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
    <button onClick={onClick} className="text-gray-300 hover:text-brand-orange transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">
        {children}
    </button>
);

const Header: React.FC<HeaderProps> = ({ onNavigate, cartCount }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { page: "menu", text: "Menú" },
        { page: "promociones", text: "Promociones" },
        { page: "pedidos", text: "Pedidos" },
        { page: "contacto", text: "Contacto" },
    ];

    const handleMobileNavClick = (page: string) => {
        onNavigate(page);
        setMobileMenuOpen(false);
    }

    return (
        <header className="bg-black/60 backdrop-blur-lg sticky top-0 z-50 shadow-lg shadow-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <button onClick={() => onNavigate('home')} className="text-white text-2xl font-anton tracking-wider">
                            ALITAS <span className="text-brand-red">EXPRESS</span> 🔥
                        </button>
                    </div>
                    <nav className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map(link => <NavLink key={link.page} onClick={() => onNavigate(link.page)}>{link.text}</NavLink>)}
                        </div>
                    </nav>
                    <div className="hidden md:block">
                        <button 
                            onClick={() => onNavigate('pedidos')}
                            className="ml-4 px-5 py-2 bg-brand-red hover:bg-red-700 text-white font-bold rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                            <span>Haz tu Pedido</span>
                            {cartCount > 0 && (
                                <span className="bg-brand-yellow text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>
                            )}
                        </button>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button 
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                            type="button" 
                            className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            <span className="sr-only">Abrir menú</span>
                            {isMobileMenuOpen ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map(link => 
                          <button key={link.page} onClick={() => handleMobileNavClick(link.page)} className="text-gray-300 hover:bg-gray-700 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium">{link.text}</button>
                        )}
                         <button 
                            onClick={() => { onNavigate('pedidos'); setMobileMenuOpen(false); }}
                            className="w-full mt-2 px-5 py-3 bg-brand-red hover:bg-red-700 text-white font-bold rounded-md transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                            Haz tu Pedido {cartCount > 0 && <span className="bg-brand-yellow text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>}
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;