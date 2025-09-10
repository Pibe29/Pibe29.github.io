import React from 'react';

interface FooterProps {
    onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    return (
        <footer className="bg-black/80 text-gray-400">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                         <button onClick={() => onNavigate('home')} className="text-white text-3xl font-anton tracking-wider">
                            ALITAS <span className="text-brand-red">EXPRESS</span> 🔥
                        </button>
                        <p className="text-gray-400 text-base">
                            El sabor que enciende tu mundo. Las mejores alitas, siempre frescas, siempre deliciosas.
                        </p>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Síguenos</h3>
                            <div className="flex space-x-6 mt-4">
                                {/* Social Media Icons */}
                                <a href="#" className="text-gray-400 hover:text-brand-orange"><span className="sr-only">Facebook</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></a>
                                <a href="#" className="text-gray-400 hover:text-brand-orange"><span className="sr-only">Instagram</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.531 2.013 9.885 2 12.315 2zM12 7.188c-2.649 0-4.813 2.164-4.813 4.813 0 2.649 2.164 4.813 4.813 4.813s4.813-2.164 4.813-4.813c0-2.649-2.164-4.813-4.813-4.813zM12 15a3 3 0 110-6 3 3 0 010 6zm4.838-7.813a1.162 1.162 0 100-2.324 1.162 1.162 0 000 2.324z" clipRule="evenodd" /></svg></a>
                                
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Navegación</h3>
                                <ul className="mt-4 space-y-4">
                                    <li><button onClick={() => onNavigate('menu')} className="text-base text-gray-400 hover:text-brand-orange">Menú</button></li>
                                    <li><button onClick={() => onNavigate('promociones')} className="text-base text-gray-400 hover:text-brand-orange">Promociones</button></li>
                                    <li><button onClick={() => onNavigate('pedidos')} className="text-base text-gray-400 hover:text-brand-orange">Haz tu Pedido</button></li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Legal</h3>
                                <ul className="mt-4 space-y-4">
                                    <li><a href="#" className="text-base text-gray-400 hover:text-brand-orange">Política de Privacidad</a></li>
                                    <li><a href="#" className="text-base text-gray-400 hover:text-brand-orange">Términos de Servicio</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-1 md:gap-8">
                             <div>
                                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contacto</h3>
                                <ul className="mt-4 space-y-4">
                                    <li><p className="text-base text-gray-400">Av. Siempre Viva 123, Springfield</p></li>
                                    <li><a href="tel:+1234567890" className="text-base text-gray-400 hover:text-brand-orange">(123) 456-7890</a></li>
                                    <li><a href="mailto:contacto@alitasexpress.com" className="text-base text-gray-400 hover:text-brand-orange">contacto@alitasexpress.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-base text-gray-400 text-center sm:text-left">&copy; {new Date().getFullYear()} Alitas Express. Todos los derechos reservados.</p>
                    <button onClick={() => onNavigate('admin')} className="text-sm text-gray-500 hover:text-brand-orange transition-colors duration-200">
                        Panel de Administrador
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;