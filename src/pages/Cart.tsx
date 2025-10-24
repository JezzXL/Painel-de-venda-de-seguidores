import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight, ShoppingCart, Instagram, Sparkles } from 'lucide-react';
import CartItemComponent from '../components/CartItem';
import Sidebar from '../components/Sidebar';
import { useCartStore } from '../store/cartStore';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Cart: React.FC = () => {
  const { items, getTotal } = useCartStore();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="flex min-h-screen bg-linear-to-br from-black via-purple-950 to-black">
      <Sidebar />
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <ShoppingCart className="w-10 h-10 text-purple-400" />
            <h1 className="text-4xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Meu Carrinho
            </h1>
          </div>
          <p className="text-purple-200 text-lg">
            {items.length === 0 ? 'Seu carrinho está vazio' : `${totalItems} ${totalItems === 1 ? 'item' : 'itens'} no carrinho`}
          </p>
        </div>

        {items.length === 0 ? (
          /* Carrinho Vazio */
          <div className="flex flex-col items-center justify-center py-20">
            <div className="bg-linear-to-br from-purple-900/40 to-black/60 backdrop-blur-lg rounded-full p-12 mb-8 border border-purple-500/30">
              <ShoppingBag className="w-24 h-24 text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Seu carrinho está vazio</h2>
            <p className="text-purple-300 mb-8 text-center max-w-md">
              Adicione produtos incríveis ao seu carrinho e comece a impulsionar suas redes sociais!
            </p>
            <Link
              to="/"
              className="flex items-center gap-2 px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-5 h-5" />
              Explorar Serviços
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        ) : (
          /* Carrinho com Itens */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Lista de Itens */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <CartItemComponent key={item.id} item={item} />
              ))}
            </div>

            {/* Resumo do Pedido */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-linear-to-br from-purple-900/40 to-black/60 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30 shadow-2xl">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="text-purple-400">💰</span>
                    Resumo do Pedido
                  </h2>

                  {/* Itens */}
                  <div className="space-y-3 mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2 text-purple-200">
                          {item.platform === 'instagram' ? (
                            <Instagram className="w-4 h-4 text-pink-400" />
                          ) : (
                            <div className="text-cyan-400">
                              <TikTokIcon />
                            </div>
                          )}
                          <span>{item.followers?.toLocaleString()} un.</span>
                        </div>
                        <span className="text-white font-semibold">
                          R$ {(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-purple-500/30 pt-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-purple-300">Subtotal</span>
                      <span className="text-white font-semibold">R$ {getTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-purple-300">Desconto</span>
                      <span className="text-green-400 font-semibold">R$ 0,00</span>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="bg-linear-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-4 mb-6 border border-purple-500/30">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-white">Total</span>
                      <span className="text-3xl font-bold text-white">
                        R$ {getTotal().toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Botão Finalizar */}
                  <Link
                    to="/checkout"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-linear-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 mb-4"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Finalizar Compra
                    <ArrowRight className="w-5 h-5" />
                  </Link>

                  {/* Continuar Comprando */}
                  <Link
                    to="/"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-purple-900/30 text-purple-300 font-semibold rounded-xl hover:bg-purple-900/50 transition-all duration-300 border border-purple-500/30"
                  >
                    Continuar Comprando
                  </Link>

                  {/* Garantias */}
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-purple-300">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>Entrega em até 24h</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-purple-300">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>Garantia de reposição</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-purple-300">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>Suporte 24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;