
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Menu, 
  X, 
  ChevronRight, 
  TrendingUp, 
  ShieldCheck, 
  MessageSquare, 
  Mail, 
  Facebook, 
  Instagram, 
  Youtube 
} from 'lucide-react';

// Pages
import HomePage from './pages/HomePage';
import LeadCapturePage from './pages/LeadCapturePage';
import SalesPage from './pages/SalesPage';
import BlogPage from './pages/BlogPage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Início', path: '/' },
    { label: 'Produtos', path: '/produtos' },
    { label: 'Blog', path: '/blog' },
    { label: 'Sobre', path: '/sobre' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-orange-500 p-2 rounded-lg">
                <TrendingUp className="text-white h-6 w-6" />
              </div>
              <span className="text-2xl font-black heading-font tracking-tight text-gray-900">
                CLICK<span className="text-orange-500">&</span>EARN
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  location.pathname === item.path ? 'text-orange-500' : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/captura"
              className="bg-orange-500 text-white px-6 py-2.5 rounded-full font-bold hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-orange-200"
            >
              Começar Grátis
            </Link>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in fade-in slide-in-from-top-4">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-bold text-gray-900 border-b border-gray-50"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/captura"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-orange-500 text-white px-6 py-4 rounded-xl font-black mt-4"
            >
              COMEÇAR AGORA
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <TrendingUp className="text-orange-500 h-8 w-8" />
              <span className="text-2xl font-black heading-font tracking-tight">
                CLICK<span className="text-orange-500">&</span>EARN
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Sua plataforma definitiva para dominar o marketing de afiliados e construir um negócio digital lucrativo do zero.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500 transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Youtube /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Links Rápidos</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/produtos" className="hover:text-white transition-colors">Produtos Recomendados</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog de Dicas</Link></li>
              <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre Nós</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Legal</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/privacidade" className="hover:text-white transition-colors">Privacidade</Link></li>
              <li><Link to="/contato" className="hover:text-white transition-colors">Termos de Uso</Link></li>
              <li><Link to="/contato" className="hover:text-white transition-colors">Políticas de Cookies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Receba estratégias de vendas diretamente no seu email.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Seu melhor email" 
                className="bg-gray-800 border-none rounded-l-lg px-4 py-2 w-full focus:ring-1 focus:ring-orange-500 outline-none"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-r-lg font-bold hover:bg-orange-600 transition-colors">
                <ChevronRight />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs">
          <p>© 2024 Click & Earn (clickelucre.com) - Todos os direitos reservados. Feito com paixão pelo sucesso.</p>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/captura" element={<LeadCapturePage />} />
            <Route path="/oferta" element={<SalesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/produtos" element={<ProductsPage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/privacidade" element={<PrivacyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
