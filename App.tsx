import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import PromotionsPage from './pages/PromotionsPage';
import OrderPage from './pages/OrderPage';
import ContactPage from './pages/ContactPage';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminPanel from './pages/admin/AdminPanel';
import { ordersData as initialOrdersData } from './data/ordersData';
import type { Product, CartItem, Order, Promotion } from './types';

const App: React.FC = () => {
    // State for routing and cart management
    const [currentPage, setCurrentPage] = useState('home');
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
    const [orders, setOrders] = useState<Order[]>(initialOrdersData);
    
    // Load cart from local storage on initial render
    useEffect(() => {
        try {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                setCart(JSON.parse(savedCart));
            }
        } catch (error) {
            console.error("Could not parse cart from localStorage", error);
        }
    }, []);

    // Save cart to local storage whenever it changes
    useEffect(() => {
        try {
            localStorage.setItem('cart', JSON.stringify(cart));
        } catch (error)
        {
            console.error("Could not save cart to localStorage", error);
        }
    }, [cart]);

    const handleNavigate = (page: string) => {
        setCurrentPage(page);
        window.scrollTo(0, 0); // Scroll to top on page change
    };

    const handleAddToCart = (product: Product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item => 
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const handleAddToCartPromotion = (promotion: Promotion) => {
        if (typeof promotion.price !== 'number') return;

        const promoAsCartItem: CartItem = {
            id: promotion.id,
            name: promotion.title,
            description: promotion.description,
            price: promotion.price,
            imageUrl: promotion.imageUrl,
            category: 'Promoción',
            quantity: 1,
        };

        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === promoAsCartItem.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === promoAsCartItem.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, promoAsCartItem];
        });
    };

    const handleUpdateQuantity = (itemId: string, quantity: number) => {
        if (quantity <= 0) {
            setCart(prevCart => prevCart.filter(item => item.id !== itemId));
        } else {
            setCart(prevCart => prevCart.map(item => 
                item.id === itemId ? { ...item, quantity } : item
            ));
        }
    };
    
    const handleClearCart = () => {
        setCart([]);
    };

    const handlePlaceOrder = (customerData: { name: string; phone: string; address: string; paymentMethod: string; }, orderCart: CartItem[]) => {
        const total = orderCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const newOrder: Order = {
            id: `AE-${Date.now()}`,
            customerName: customerData.name,
            customerPhone: customerData.phone,
            customerAddress: customerData.address,
            items: orderCart.map(item => ({
                id: item.id,
                name: item.name,
                quantity: item.quantity,
                price: item.price,
            })),
            total: total,
            status: 'pending', // New orders always start as 'pending'
            orderDate: new Date().toISOString(),
            paymentMethod: customerData.paymentMethod,
        };
        setOrders(prevOrders => [newOrder, ...prevOrders]); // Prepend to show newest first
    };
    
    const handleUpdateOrderStatus = (orderId: string, newStatus: Order['status']) => {
        setOrders(prevOrders => 
            prevOrders.map(o => (o.id === orderId ? { ...o, status: newStatus } : o))
        );
    };

    const handleLogin = () => {
        setIsAdminLoggedIn(true);
        setCurrentPage('admin-panel');
    }

    const handleLogout = () => {
        setIsAdminLoggedIn(false);
        setCurrentPage('home');
    }

    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Admin Panel Logic
    if (currentPage === 'admin') {
        return <AdminLoginPage onLogin={handleLogin} />;
    }
    if (currentPage === 'admin-panel' && isAdminLoggedIn) {
        return <AdminPanel onLogout={handleLogout} orders={orders} onUpdateOrderStatus={handleUpdateOrderStatus} />;
    }

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage onNavigate={handleNavigate} />;
            case 'menu':
                return <MenuPage onAddToCart={handleAddToCart} />;
            case 'promociones':
                return <PromotionsPage onAddToCart={handleAddToCartPromotion} />;
            case 'pedidos':
                return <OrderPage cart={cart} onUpdateQuantity={handleUpdateQuantity} onClearCart={handleClearCart} onNavigate={handleNavigate} onPlaceOrder={handlePlaceOrder}/>;
            case 'contacto':
                return <ContactPage />;
            default:
                return <HomePage onNavigate={handleNavigate} />;
        }
    };

    return (
        <div className="bg-zinc-900 text-white min-h-screen font-sans">
            <Header onNavigate={handleNavigate} cartCount={cartCount}/>
            <main>
                {renderPage()}
            </main>
            <Footer onNavigate={handleNavigate} />
            <FloatingWhatsAppButton phoneNumber="1234567890" />
        </div>
    );
};

export default App;