import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Sparkles, LogIn } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

const Header: React.FC = () => {
  const { items } = useCartStore();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-black/80 backdrop-blur-lg border-b border-purple-500/20 text-white shadow-2xl sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-linear-to-br from-purple-600 to-pink-600 p-2 rounded-lg shadow-lg group-hover:shadow-purple-500/50 transition-all">
              <Sparkles className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Painel Seguidores
            </span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link 
              to="/login" 
              className="group hidden md:flex items-center gap-2"
            >
              <div className="bg-purple-900/30 px-4 py-2 rounded-lg border border-purple-500/30 hover:bg-purple-800/40 hover:border-purple-400/50 transition-all">
                <div className="flex items-center gap-2">
                  <LogIn size={20} className="text-purple-300 group-hover:text-white transition-colors" />
                  <span className="text-purple-300 group-hover:text-white transition-colors font-medium">
                    Login
                  </span>
                </div>
              </div>
            </Link>

            <Link 
              to="/cart" 
              className="relative group"
            >
              <div className="bg-purple-900/30 p-3 rounded-lg border border-purple-500/30 hover:bg-purple-800/40 hover:border-purple-400/50 transition-all">
                <ShoppingCart size={24} className="text-purple-300 group-hover:text-white transition-colors" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-linear-to-r from-pink-500 to-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-lg animate-pulse">
                    {totalItems}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;