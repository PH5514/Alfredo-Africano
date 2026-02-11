
import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronRight, 
  TrendingUp, 
  Facebook, 
  Instagram, 
  Youtube,
  MessageCircle,
  Send,
  Loader2,
  Sparkles,
  ShoppingBag,
  ShieldCheck,
  Gift,
  AlertCircle
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { Analytics } from './analytics';

// Pages
import HomePage from './pages/HomePage';
import LeadCapturePage from './pages/LeadCapturePage';
import SalesPage from './pages/SalesPage';
import BlogPage from './pages/BlogPage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import ThankYouPage from './pages/ThankYouPage';

const NotFoundPage = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 text-center">
    <AlertCircle className="h-20 w-20 text-orange-500 mb-6 animate-bounce" />
    <h1 className="text-4xl font-black heading-font mb-4">OPS! CAMINHO ERRADO.</h1>
    <p className="text-gray-600 mb-8 max-w-md">Parece que essa página não existe ou foi movida para um novo funil de lucro.</p>
    <Link to="/" className="bg-orange-500 text-white px-8 py-4 rounded-2xl font-black hover:bg-orange-600 transition-all">
      VOLTAR PARA O INÍCIO
    </Link>
  </div>
);

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-[2.5rem] max-w-lg w-full p-8 md:p-12 relative shadow-2xl animate-in zoom-in-95 duration-300 border-4 border-orange-500">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center">
          <div className="bg-orange-100 text-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Gift className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-black heading-font mb-4 text-gray-900 uppercase">Não vá embora ainda!</h2>
          <p className="text-gray-600 mb-8">
            Você ainda não baixou o seu <strong>Guia de Vendas Rápidas</strong>. Liberei um acesso temporário só para você.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-100">
            <p className="text-orange-500 font-black text-xl mb-1 italic">PRESENTE LIBERADO</p>
            <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Acesso Vitalício ao Grupo de Alertas</p>
          </div>

          <Link 
            to="/captura" 
            onClick={() => setIsVisible(false)}
            className="block w-full bg-orange-500 text-white py-4 rounded-xl font-black text-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-200"
          >
            QUERO MEU PRESENTE
          </Link>
        </div>
      </div>
    </div>
  );
};

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 p-4 z-[200] shadow-2xl animate-in slide-in-from-bottom-full duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <ShieldCheck className="text-orange-500 h-5 w-5 shrink-0" />
          <p>Utilizamos cookies para otimizar sua conversão e experiência. <Link to="/privacidade" className="text-orange-500 underline">Saiba mais</Link>.</p>
        </div>
        <button 
          onClick={accept}
          className="bg-gray-900 text-white px-8 py-2.5 rounded-xl font-bold hover:bg-orange-500 transition-colors shrink-0"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
};

const PageViewTracker = () => {
  const location = useLocation();
  useEffect(() => {
    Analytics.pageView(location.pathname + location.search);
    const utms = Analytics.getUTMs();
    if (utms.source) {
      sessionStorage.setItem('user_utms', JSON.stringify(utms));
    }
  }, [location]);
  return null;
};

const SaleNotification = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: '', city: '', time: '' });

  const names = ['André', 'Beatriz', 'Carlos', 'Daniela', 'Eduardo', 'Fernanda', 'Gustavo', 'Helena', 'Ítalo', 'Júlia'];
  const cities = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Salvador', 'Brasília'];

  useEffect(() => {
    const showRandomSale = () => {
      setData({
        name: names[Math.floor(Math.random() * names.length)],
        city: cities[Math.floor(Math.random() * cities.length)],
        time: Math.floor(Math.random() * 5) + 1 + ' min atrás'
      });
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    };

    const interval = setInterval(showRandomSale, 20000);
    setTimeout(showRandomSale, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-24 left-6 z-[95] bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 flex items-center gap-4 animate-in slide-in-from-left-10 duration-500 max-w-[280px]">
      <div className="bg-green-100 text-green-600 p-2 rounded-full">
        <ShoppingBag className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-bold text-gray-900 leading-tight">
          <span className="text-orange-500">{data.name}</span> de {data.city} realizou uma venda!
        </p>
        <p className="text-[10px] text-gray-500">{data.time}</p>
      </div>
    </div>
  );
};

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: 'Olá! Sou o assistente da Click & Earn. Como posso te ajudar a lucrar na internet hoje?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: 'Você é um consultor especialista em Marketing de Afiliados da plataforma Click & Earn (clickelucre.com). Seu objetivo é ajudar o usuário com dicas de vendas, tráfego e persuadi-lo a conhecer os produtos e cursos da plataforma de forma profissional, ética e motivadora.'
        }
      });
      
      setMessages(prev => [...prev, { role: 'ai', text: response.text || 'Desculpe, tive um problema técnico. Pode repetir?' }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: 'Estou processando muitas solicitações. Confira nosso blog para dicas imediatas!' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-orange-500 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              <span className="font-bold">Consultoria IA Click & Earn</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X className="h-5 w-5" /></button>
          </div>
          <div ref={scrollRef} className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-orange-500 text-white rounded-tr-none' : 'bg-white text-gray-700 shadow-sm border border-gray-100 rounded-tl-none'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 rounded-tl-none flex gap-1">
                  <div className="w-1.5 h-1.5 bg-orange-300 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>
          <form onSubmit={handleChat} className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Dúvida sobre vendas?"
              className="flex-grow px-4 py-2 bg-gray-50 rounded-xl text-sm outline-none focus:ring-1 focus:ring-orange-500 transition-all"
            />
            <button type="submit" className="bg-orange-500 text-white p-2 rounded-xl hover:bg-orange-600 transition-colors">
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-orange-500 text-white p-4 rounded-full shadow-xl shadow-orange-200 hover:scale-110 transition-transform active:scale-95"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Sparkles className="h-6 w-6" />}
      </button>
    </div>
  );
};

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
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-[90] border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-orange-500 p-2 rounded-lg">
                <TrendingUp className="text-white h-6 w-6" />
              </div>
              <span className="text-2xl font-black heading-font tracking-tight text-gray-900">
                CLICK<span className="text-orange-500">&</span>EARN
              </span>
            </Link>
            <div className="hidden lg:flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">Servidor Online</span>
            </div>
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
              Começar Agora
            </Link>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

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
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      Analytics.trackLead();
    }, 1000);
  };

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
              A maior comunidade de empreendedores digitais focada em liberdade e lucro real.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500 transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Youtube /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg uppercase tracking-widest text-orange-500">Navegação</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/produtos" className="hover:text-white transition-colors">Produtos</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg uppercase tracking-widest text-orange-500">Políticas</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li><Link to="/privacidade" className="hover:text-white transition-colors">Privacidade</Link></li>
              <li><Link to="/contato" className="hover:text-white transition-colors">Contato</Link></li>
              <li><Link to="/privacidade" className="hover:text-white transition-colors">Termos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg uppercase tracking-widest text-orange-500">Estratégias</h4>
            <p className="text-gray-400 text-sm mb-4">Receba hacks de vendas no seu email.</p>
            {subscribed ? (
              <div className="bg-green-500/10 text-green-500 p-4 rounded-xl text-sm font-bold border border-green-500/20">
                Pronto! Verifique seu e-mail.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex">
                <input 
                  required
                  type="email" 
                  placeholder="Seu email" 
                  className="bg-gray-800 border-none rounded-l-lg px-4 py-2 w-full focus:ring-1 focus:ring-orange-500 outline-none text-white"
                />
                <button 
                  disabled={loading}
                  className="bg-orange-500 text-white px-4 py-2 rounded-r-lg font-bold hover:bg-orange-600 transition-colors disabled:opacity-50"
                >
                  {loading ? <Loader2 className="animate-spin h-5 w-5" /> : <ChevronRight />}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs">
          <p>© 2024 Click & Earn (clickelucre.com) - Sucesso é uma decisão.</p>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <PageViewTracker />
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
            <Route path="/obrigado" element={<ThankYouPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <AIAssistant />
        <a 
          href="https://wa.me/5500000000000" 
          target="_blank" 
          rel="noreferrer"
          className="fixed bottom-6 left-6 z-[100] bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center justify-center"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <SaleNotification />
        <CookieConsent />
        <ExitIntentPopup />
      </div>
    </Router>
  );
};

export default App;
