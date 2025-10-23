# 🚀 Painel de Venda de Seguidores

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=react&logoColor=white" alt="Zustand" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</div>

## 📋 Sobre o Projeto

Sistema moderno de venda de pacotes de seguidores para Instagram, com interface dark em tema roxo e preto, desenvolvido com as tecnologias mais recentes do ecossistema React.

### ✨ Features

- 🎨 **Design Moderno**: Tema dark com gradientes roxo/preto e efeitos glassmorphism
- 🛒 **Carrinho de Compras**: Sistema completo com Zustand para gerenciamento de estado
- 💳 **Checkout**: Fluxo de finalização de compra
- 📊 **Dashboard**: Visão geral com estatísticas e cards de produtos
- 🎭 **Animações Suaves**: Hover effects e transições elegantes
- 📱 **100% Responsivo**: Layout adaptável para mobile, tablet e desktop
- ⚡ **Performance**: Build otimizado com Vite

## 🛠️ Tecnologias

- **React 18** - Biblioteca para interfaces
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Framework CSS utilitário (última versão)
- **Zustand** - Gerenciamento de estado leve e moderno
- **React Router DOM** - Roteamento SPA
- **Lucide React** - Ícones modernos
- **Vite** - Build tool ultra rápida

## 📁 Estrutura do Projeto

```
painel-seguidores/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── CartItem.tsx    # Item do carrinho
│   │   ├── Header.tsx      # Cabeçalho
│   │   ├── ProductCard.tsx # Card de produto
│   │   └── Sidebar.tsx     # Menu lateral
│   ├── pages/              # Páginas
│   │   ├── Cart.tsx        # Carrinho de compras
│   │   ├── Checkout.tsx    # Finalização
│   │   └── Dashboard.tsx   # Página inicial
│   ├── store/              # Estado global
│   │   └── cartStore.ts    # Zustand store
│   ├── types/              # TypeScript types
│   │   └── index.ts        # Interfaces
│   ├── App.tsx             # Componente principal
│   ├── main.tsx            # Entry point
│   └── index.css           # Estilos globais
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/painel-seguidores.git
cd painel-seguidores
```

2. Instale as dependências
```bash
npm install
```

3. Execute o projeto
```bash
npm run dev
```

4. Acesse no navegador
```
http://localhost:5173
```

## 📦 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Gera build de produção
npm run preview  # Preview da build
npm run lint     # Executa linter
```

## 🎨 Paleta de Cores

- **Primary**: Roxo (`purple-400` a `purple-900`)
- **Secondary**: Rosa (`pink-400` a `pink-600`)
- **Background**: Preto (`black`) com gradientes
- **Text**: Branco e variações de roxo

## 🛒 Pacotes Disponíveis

| Pacote | Seguidores | Preço | Descrição |
|--------|-----------|-------|-----------|
| **Básico** | 100 | $5 | Seguidores reais para Instagram |
| **Premium** | 500 | $20 | Seguidores de alta qualidade |
| **VIP** | 1000 | $35 | Seguidores engajados |

## 💡 Funcionalidades Principais

### Dashboard
- Cards de estatísticas
- Grid de produtos
- Seção de features e benefícios
- Design com glassmorphism

### Carrinho
- Adicionar/remover produtos
- Cálculo automático do total
- Persistência com Zustand
- Interface intuitiva

### Checkout
- Formulário de dados
- Validação de campos
- Confirmação de compra

## 🔧 Configuração do Tailwind CSS v4

O projeto utiliza Tailwind CSS v4 com a nova sintaxe simplificada:

```css
/* index.css */
@import "tailwindcss";
```

**Principais mudanças da v4:**
- `bg-gradient-*` → `bg-linear-*`
- Não precisa mais de `tailwind.config.js`
- Configuração automática

## 📝 Estrutura de Estado (Zustand)

```typescript
interface CartState {
  items: CartItem[];
  addItem: (product: CartItem) => void;
  removeItem: (id: number) => void;
  getTotal: () => number;
  clearCart: () => void;
}
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Davyd Willian**

- GitHub: [@JezzXL](https://github.com/JezzXL)
- LinkedIn: [davydwillianp](https://www.linkedin.com/in/davydwillianp/)
- Portfolio: [davydwillian.vercel.app](https://davydwillian.vercel.app/)

## 🙏 Agradecimentos

- Lucide React pelos ícones
- Tailwind CSS pela framework incrível
- Zustand pelo gerenciamento de estado simples

---

<div align="center">
  
  **Feito com 💜 e ☕**
  
  Se este projeto te ajudou, considere dar uma ⭐!

</div>