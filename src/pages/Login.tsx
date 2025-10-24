import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, LogIn, UserPlus, Sparkles } from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simula autenticação
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem!');
      setIsLoading(false);
      return;
    }

    alert(`${isLogin ? 'Login' : 'Cadastro'} realizado com sucesso! Bem-vindo, ${formData.name || formData.email}!`);
    setIsLoading(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-purple-950 to-black flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 group">
            <div className="bg-linear-to-br from-purple-600 to-pink-600 p-3 rounded-xl shadow-2xl group-hover:shadow-purple-500/50 transition-all">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <span className="text-3xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Painel Seguidores
            </span>
          </Link>
          <p className="text-purple-300 mt-2">
            {isLogin ? 'Bem-vindo de volta!' : 'Crie sua conta'}
          </p>
        </div>

        {/* Card de Login/Registro */}
        <div className="bg-linear-to-br from-purple-900/40 to-black/60 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 shadow-2xl">
          {/* Tabs */}
          <div className="flex gap-2 mb-8 bg-black/30 p-1 rounded-xl">
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isLogin
                  ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'text-purple-300 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <LogIn className="w-5 h-5" />
                Login
              </div>
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
                !isLogin
                  ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'text-purple-300 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <UserPlus className="w-5 h-5" />
                Registro
              </div>
            </button>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nome (só no registro) */}
            {!isLogin && (
              <div>
                <label className="block text-purple-200 text-sm font-semibold mb-2">
                  Nome Completo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome"
                    className="w-full pl-12 pr-4 py-3 bg-black/50 border border-purple-500/30 rounded-xl text-white placeholder-purple-400/50 focus:outline-none focus:border-purple-400 transition-colors"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-purple-200 text-sm font-semibold mb-2">
                Email
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

            {/* Senha */}
            <div>
              <label className="block text-purple-200 text-sm font-semibold mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 bg-black/50 border border-purple-500/30 rounded-xl text-white placeholder-purple-400/50 focus:outline-none focus:border-purple-400 transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirmar Senha (só no registro) */}
            {!isLogin && (
              <div>
                <label className="block text-purple-200 text-sm font-semibold mb-2">
                  Confirmar Senha
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-4 py-3 bg-black/50 border border-purple-500/30 rounded-xl text-white placeholder-purple-400/50 focus:outline-none focus:border-purple-400 transition-colors"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            {/* Esqueci a senha (só no login) */}
            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-purple-300 cursor-pointer">
                  <input type="checkbox" className="accent-purple-500" />
                  Lembrar-me
                </label>
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Esqueci a senha
                </a>
              </div>
            )}

            {/* Termos (só no registro) */}
            {!isLogin && (
              <label className="flex items-start gap-2 text-sm text-purple-300 cursor-pointer">
                <input type="checkbox" className="mt-1 accent-purple-500" required={!isLogin} />
                <span>
                  Concordo com os{' '}
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                    Termos de Serviço
                  </a>{' '}
                  e{' '}
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                    Política de Privacidade
                  </a>
                </span>
              </label>
            )}

            {/* Botão Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? (
                <>
                  <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processando...
                </>
              ) : (
                <>
                  {isLogin ? <LogIn className="w-5 h-5" /> : <UserPlus className="w-5 h-5" />}
                  {isLogin ? 'Entrar' : 'Criar Conta'}
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-purple-500/30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-purple-900/40 text-purple-300">ou continue com</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-black/50 border border-purple-500/30 rounded-xl text-purple-300 hover:bg-purple-900/30 hover:border-purple-400/50 transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-black/50 border border-purple-500/30 rounded-xl text-purple-300 hover:bg-purple-900/30 hover:border-purple-400/50 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              GitHub
            </button>
          </div>
        </div>

        {/* Link para voltar */}
        <div className="text-center mt-6">
          <Link to="/" className="text-purple-400 hover:text-purple-300 transition-colors text-sm">
            ← Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;