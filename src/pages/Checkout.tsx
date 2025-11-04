  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { CreditCard, User, Mail, Phone, Lock, CheckCircle, Instagram, ShoppingBag, ArrowLeft } from 'lucide-react';
  import Sidebar from '../components/Sidebar';
  import { useCartStore } from '../store/cartStore';

  const TikTokIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );

  const Checkout: React.FC = () => {
    const { items, getTotal, clearCart } = useCartStore();
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState<'credit' | 'pix'>('credit');
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      cardNumber: '',
      cardName: '',
      expiryDate: '',
      cvv: '',
      cpf: '',
      username: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsProcessing(true);

      // Simula processamento
      await new Promise(resolve => setTimeout(resolve, 2000));

      alert(`🎉 Compra finalizada com sucesso!\n\nTotal: R$ ${getTotal().toFixed(2)}\nObrigado, ${formData.name}!\n\nSeus pedidos serão processados em até 24h.`);
      clearCart();
      setIsProcessing(false);
      navigate('/');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (items.length === 0) {
      navigate('/');
      return null;
    }

    return (
      <div className="flex min-h-screen bg-linear-to-br from-black via-purple-950 to-black">
        <Sidebar />
        <main className="flex-1 p-8">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={() => navigate('/cart')}
              className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors mb-4"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar ao carrinho
            </button>
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="w-10 h-10 text-purple-400" />
              <h1 className="text-4xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Finalizar Compra
              </h1>
            </div>
            <p className="text-purple-200 text-lg">
              Complete seus dados para concluir o pedido
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formulário */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Informações Pessoais */}
                <div className="bg-linear-to-br from-purple-900/40 to-black/60 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30 shadow-2xl">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <User className="w-6 h-6 text-purple-400" />
                    Informações Pessoais
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-purple-200 text-sm font-semibold mb-2">
                        Nome Completo *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Seu nome completo"
                          className="w-full pl-12 pr-4 py-3 bg-black/50 border border-purple-500/30 rounded-xl text-white placeholder-purple-400/50 focus:outline-none focus:border-purple-400 transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-purple-200 text-sm font-semibold mb-2">
                          Email *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="seu@email.com"
                            className="w-full pl-12 pr-4 py-3 bg-black/50 border border-purple-500/30 rounded-xl text-white placeholder-purple-400/50 focus:outline-none focus:border-purple-400 transition-colors"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-purple-200 text-sm font-semibold mb-2">
                          WhatsApp *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="(00) 00000-0000"
                            className="w-full pl-12 pr-4 py-3 bg-black/50 border border-purple-500/30 rounded-xl text-white placeholder-purple-400/50 focus:outline-none focus:border-purple-400 transition-colors"
                            required
                          />
                        </div>
                        <p className="text-xs text-purple-400 mt-1">Para suporte e atualizações</p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-purple-200 text-sm font-semibold mb-2">
                        Nome de Usuário (Instagram/TikTok) *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 font-bold">@</span>
                        <input
                          type="text"
                          name="username"
                          value={formData.username}
                          onChange={handleInputChange}
                          placeholder="nomedeusuario"
                          className="w-full pl-10 pr-4 py-3 bg-black/50 border border-purple-500/30 rounded-xl text-white placeholder-purple-400/50 focus:outline-none focus:border-purple-400 transition-colors"
                          required
                        />
                      </div>
                      <p className="text-xs text-purple-400 mt-1">Digite apenas o @ sem espaços</p>
                    </div>
                  </div>
                </div>

                {/* Pagamento */}
                <div className="bg-linear-to-br from-purple-900/40 to-black/60 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30 shadow-2xl">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <CreditCard className="w-6 h-6 text-purple-400" />
                    Forma de Pagamento
                  </h2>

                  {/* Opções de Pagamento */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('credit')}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        paymentMethod === 'credit'
                          ? 'border-purple-500 bg-purple-500/20 shadow-lg shadow-purple-500/30'
                          : 'border-purple-500/30 bg-black/30 hover:border-purple-500/50'
                      }`}
                    >
                      <CreditCard className={`w-8 h-8 mx-auto mb-2 ${
                        paymentMethod === 'credit' ? 'text-purple-400' : 'text-purple-500/50'
                      }`} />
                      <p className={`text-sm font-semibold ${
                        paymentMethod === 'credit' ? 'text-white' : 'text-purple-300'
                      }`}>
                        Cartão de Crédito
                      </p>
                      {paymentMethod === 'credit' && (
                        <span className="text-xs text-purple-400 mt-1 block">✓ Selecionado</span>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('pix')}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        paymentMethod === 'pix'
                          ? 'border-green-500 bg-green-500/20 shadow-lg shadow-green-500/30'
                          : 'border-purple-500/30 bg-black/30 hover:border-purple-500/50'
                      }`}
                    >
                      <div className={`w-8 h-8 mx-auto mb-2 font-bold text-2xl ${
                        paymentMethod === 'pix' ? 'text-green-400' : 'text-purple-500/50'
                      }`}>
                        PIX
                      </div>
                      <p className={`text-sm font-semibold ${
                        paymentMethod === 'pix' ? 'text-white' : 'text-purple-300'
                      }`}>
                        PIX
                      </p>
                      {paymentMethod === 'pix' && (
                        <span className="text-xs text-green-400 mt-1 block">✓ Aprovação Instantânea</span>
                      )}
                    </button>
                  </div>

                  {/* Campos de Pagamento */}
                  <div className="space-y-4">
                    {paymentMethod === 'credit' && (
                      <>
                        <div>
                          <label className="block text-purple-200 text-sm font-semibold mb-2">
                            Número do Cartão *
                          </label>
                          <div className="relative">
                            <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                            <input
                              type="text"
                              name="cardNumber"
                              value={formData.cardNumber}
                              onChange={handleInputChange}
                              placeholder="0000 0000 0000 0000"
                              maxLength={19}
                              className="w-full pl-12 pr-4 py-3 bg-black/50 border border-purple-500/30 rounded-xl text-white placeholder-purple-400/50 focus:outline-none focus:border-purple-400 transition-colors"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-purple-200 text-sm font-semibold mb-2">
                            Nome no Cartão *
                          </label>
                          <input
                            type="text"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleInputChange}
                            placeholder="Nome como está no cartão"
                            className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-xl text-white placeholder-purple-400/50 focus:outline-none focus:border-purple-400 transition-colors"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-purple-200 text-sm font-semibold mb-2">
                              Validade *
                            </label>
                            <input
                              type="text"
                              name="expiryDate"
                              value={formData.expiryDate}
                              onChange={handleInputChange}
                              placeholder="MM/AA"
                              maxLength={5}
                              className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-xl text-white placeholder-purple-400/50 focus:outline-none focus:border-purple-400 transition-colors"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-purple-200 text-sm font-semibold mb-2">
                              CVV *
                            </label>
                            <div className="relative">
                              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                              <input
                                type="text"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleInputChange}
                                placeholder="000"
                                maxLength={4}
                                className="w-full pl-12 pr-4 py-3 bg-black/50 border border-purple-500/30 rounded-xl text-white placeholder-purple-400/50 focus:outline-none focus:border-purple-400 transition-colors"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {paymentMethod === 'pix' && (
                      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center">
                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-3xl font-bold text-green-400">PIX</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Pagamento via PIX</h3>
                        <p className="text-green-200 text-sm mb-4">
                          Após confirmar o pedido, você receberá um QR Code para pagamento instantâneo.
                        </p>
                        <div className="flex items-center justify-center gap-2 text-green-400 text-sm">
                          <CheckCircle className="w-4 h-4" />
                          <span>Aprovação em segundos</span>
                        </div>
                      </div>
                    )}

                    {/* CPF (para todos os métodos) */}
                    <div>
                      <label className="block text-purple-200 text-sm font-semibold mb-2">
                        CPF *
                      </label>
                      <input
                        type="text"
                        name="cpf"
                        value={formData.cpf}
                        onChange={handleInputChange}
                        placeholder="000.000.000-00"
                        maxLength={14}
                        className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-xl text-white placeholder-purple-400/50 focus:outline-none focus:border-purple-400 transition-colors"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Botão Submit */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className={`w-full flex items-center justify-center gap-3 px-8 py-4 ${
                    paymentMethod === 'pix' 
                      ? 'bg-linear-to-r from-green-600 to-emerald-600 hover:shadow-green-500/50' 
                      : 'bg-linear-to-r from-purple-600 to-pink-600 hover:shadow-purple-500/50'
                  } text-white font-bold text-lg rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
                >
                  {isProcessing ? (
                    <>
                      <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processando...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      {paymentMethod === 'pix' ? 'Gerar QR Code PIX' : 'Confirmar Pagamento'} - R$ {getTotal().toFixed(2)}
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Resumo */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Resumo do Pedido */}
                <div className="bg-linear-to-br from-purple-900/40 to-black/60 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30 shadow-2xl">
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-purple-400" />
                    Resumo do Pedido
                  </h2>

                  <div className="space-y-3 mb-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-3 bg-black/30 rounded-lg border border-purple-500/20">
                        <div className="flex items-center gap-2">
                          {item.platform === 'instagram' ? (
                            <Instagram className="w-4 h-4 text-pink-400" />
                          ) : (
                            <div className="text-cyan-400">
                              <TikTokIcon />
                            </div>
                          )}
                          <div>
                            <p className="text-white text-sm font-semibold">
                              {item.followers?.toLocaleString()} un.
                            </p>
                            <p className="text-purple-400 text-xs">{item.serviceType}</p>
                          </div>
                        </div>
                        <span className="text-white font-bold">R$ {item.price.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-purple-500/30 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xl font-bold text-white">Total</span>
                      <span className="text-3xl font-bold text-white">
                        R$ {getTotal().toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Garantias */}
                  <div className="space-y-2 mt-4 pt-4 border-t border-purple-500/30">
                    <div className="flex items-center gap-2 text-sm text-purple-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Pagamento 100% seguro</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-purple-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Entrega em até 24h</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-purple-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Garantia de reposição</span>
                    </div>
                  </div>
                </div>

                {/* Segurança */}
                <div className="bg-linear-to-br from-green-900/20 to-black/40 backdrop-blur-lg rounded-2xl p-4 border border-green-500/30">
                  <div className="flex items-center gap-3 text-green-400">
                    <Lock className="w-5 h-5" />
                    <div>
                      <p className="font-semibold text-sm">Pagamento Seguro</p>
                      <p className="text-xs text-green-300">Seus dados estão protegidos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  };

  export default Checkout;