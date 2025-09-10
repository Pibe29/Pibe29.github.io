import React from 'react';

const ContactPage: React.FC = () => {
    
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");
        // Here you would typically handle form submission, e.g., send data to a server
        e.currentTarget.reset();
    };

    return (
        <div className="py-12 sm:py-20 bg-zinc-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-anton uppercase text-brand-yellow">Contáctanos</h1>
                    <p className="mt-2 text-lg text-gray-400">¿Tienes alguna pregunta o sugerencia? ¡Nos encantaría saber de ti!</p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold font-anton text-brand-orange">Información de Contacto</h2>
                            <div className="mt-4 space-y-3 text-lg text-gray-300">
                                <p><strong>Dirección:</strong> Av. Siempre Viva 123, Springfield</p>
                                <p><strong>Teléfono:</strong> <a href="tel:+1234567890" className="hover:text-brand-orange">(123) 456-7890</a></p>
                                <p><strong>Email:</strong> <a href="mailto:contacto@alitasexpress.com" className="hover:text-brand-orange">contacto@alitasexpress.com</a></p>
                            </div>
                        </div>
                        <div>
                             <h2 className="text-2xl font-bold font-anton text-brand-orange">Horario de Atención</h2>
                            <div className="mt-4 space-y-2 text-lg text-gray-300">
                                <p><strong>Lunes a Jueves:</strong> 12:00 PM - 10:00 PM</p>
                                <p><strong>Viernes a Domingo:</strong> 12:00 PM - 11:30 PM</p>
                            </div>
                        </div>
                         <div>
                            <h2 className="text-2xl font-bold font-anton text-brand-orange">Síguenos en Redes</h2>
                            <div className="mt-4 flex space-x-6">
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-orange transition-colors duration-300">
                                    <span className="sr-only">Facebook</span>
                                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-orange transition-colors duration-300">
                                    <span className="sr-only">Instagram</span>
                                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.531 2.013 9.885 2 12.315 2zM12 7.188c-2.649 0-4.813 2.164-4.813 4.813 0 2.649 2.164 4.813 4.813 4.813s4.813-2.164 4.813-4.813c0-2.649-2.164-4.813-4.813-4.813zM12 15a3 3 0 110-6 3 3 0 010 6zm4.838-7.813a1.162 1.162 0 100-2.324 1.162 1.162 0 000 2.324z" clipRule="evenodd" /></svg>
                                </a>
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-lg">
                           <img src="https://picsum.photos/800/400?grayscale" alt="Mapa de ubicación" className="w-full h-64 object-cover" />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-zinc-800 p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold font-anton text-brand-orange">Envíanos un Mensaje</h2>
                        <form onSubmit={handleFormSubmit} className="mt-6 space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nombre</label>
                                <input type="text" id="name" name="name" required className="mt-1 block w-full p-3 bg-zinc-700 rounded border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-brand-orange" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Correo Electrónico</label>
                                <input type="email" id="email" name="email" required className="mt-1 block w-full p-3 bg-zinc-700 rounded border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-brand-orange" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Mensaje</label>
                                <textarea id="message" name="message" rows={5} required className="mt-1 block w-full p-3 bg-zinc-700 rounded border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-brand-orange"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full p-3 bg-brand-red hover:bg-red-700 text-white font-bold rounded-lg transition-colors">Enviar Mensaje</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;