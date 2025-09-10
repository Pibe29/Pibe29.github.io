import React, { useState } from 'react';

interface AdminLoginPageProps {
    onLogin: () => void;
}

const AdminLoginPage: React.FC<AdminLoginPageProps> = ({ onLogin }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would be a proper authentication call
        if (password === 'password') { // Simple password check
            onLogin();
        } else {
            setError('Contraseña incorrecta.');
        }
    };

    return (
        <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
            <div className="bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h1 className="text-2xl font-anton text-brand-yellow text-center">Admin Login</h1>
                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full p-3 bg-zinc-700 rounded border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <div>
                        <button type="submit" className="w-full p-3 bg-brand-red hover:bg-red-700 text-white font-bold rounded-lg transition-colors">
                            Ingresar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminLoginPage;
