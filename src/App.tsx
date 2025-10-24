import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota de Login sem Header */}
        <Route path="/login" element={<Login />} />
        
        {/* Rotas com Header */}
        <Route path="/*" element={
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;