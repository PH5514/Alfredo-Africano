
import React, { useEffect, useState } from 'react';
import { 
  CheckCircle, 
  Play, 
  Users, 
  Timer, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Award,
  ChevronDown,
  Lock,
  Star,
  Monitor,
  Layout,
  MousePointer2,
  BarChart3,
  MessagesSquare,
  Repeat,
  Image as ImageIcon
} from 'lucide-react';
import { Analytics } from '../analytics';

const SalesPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60 + 43);
  const [showCTA, setShowCTA] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    
    const ctaTimer = setTimeout(() => setShowCTA(true), 8000);

    return () => {
      clearInterval(timer);
      clearTimeout(ctaTimer);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEnroll = () => {
    Analytics.trackInitiateCheckout(297.00);
    window.location.href = "https://pay.exemplo.com/click-earn-oferta";
  };

  const proofScreenshots = [
    { label: "Venda de R$ 4.290,00", user: "André M.", img: "https://picsum.photos/400/600?random=101" },
    { label: "Primeiros R$ 1.000,00", user: "Bianca S.", img: "https://picsum.photos/400/600?random=102" },
    { label: "Escala para R$ 10k", user: "Ricardo F.", img: "https://picsum.photos/400/600?random=103" },
    { label: "Notificações diárias", user: "Carla T.", img: "https://picsum.photos/400/600?random=104" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-red-600 text-white text-center py-3 text-sm font-bold flex items-center justify-center gap-4 sticky top-0 z-50 shadow-lg">
        <Timer className="h-4 w-4 animate-pulse" />
        <span className="uppercase tracking-wider">Atenção: Vagas limitadas. Promoção expira em {formatTime(timeLeft)}</span>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            Acesso Exclusivo à Nova Estratégia 2024
          </div>
          <h1 className="text-4xl md:text-6xl font-black heading-font text-gray-900 leading-tight mb-8">
            O Sistema de <span className="text-orange-500 underline decoration-orange-200">6 Dígitos</span> para Afiliados que Desejam Liberdade
          </h1>
          
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl bg-black border-[6px] border-white group mb-12">
            {!videoStarted ? (
              <div 
                className="absolute inset-0 z-10 flex flex-col items-center justify-center cursor-pointer bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://picsum.photos/1200/675?random=50')` }}
                onClick={() => setVideoStarted(true)}
              >
                <div className="bg-orange-500 text-white p-8 rounded-full shadow-2xl transform group-hover:scale-110 transition-all duration-500">
                  <Play className="h-16 w-16 fill-current" />
                </div>
                <p className="mt-6 text-white font-black text-xl animate-pulse">CLIQUE PARA ASSISTIR AGORA</p>
              </div>
            ) : (
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=1" 
                title="VSL"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>

        {/* Earnings Proof Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black heading-font flex items-center justify-center gap-3">
              <ImageIcon className="text-orange-500" />
              Resultados Que Falam Por Si Só:
            </h2>
            <p className="text-gray-500 mt-2 italic">Prints reais enviados por nossos alunos via WhatsApp</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {proofScreenshots.map((item, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden shadow-md border border-gray-100 aspect-[2/3]">
                <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                  <p className="text-white text-xs font-black uppercase tracking-widest opacity-70">{item.user}</p>
                  <p className="text-white text-sm font-bold leading-tight">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`transition-all duration-1000 transform ${showCTA ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95 pointer-events-none'}`}>
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border-4 border-orange-500 text-center mb-24 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-2 bg-orange-500"></div>
             <h2 className="text-3xl font-black heading-font mb-4 uppercase">Faça sua inscrição agora!</h2>
             
             <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 mt-8">
                <div className="text-center">
                  <p className="text-gray-400 line-through">De R$ 997,00</p>
                  <p className="text-5xl font-black text-gray-900">12x R$ 29,70</p>
                  <p className="text-orange-500 font-bold">ou R$ 297,00 à vista</p>
                </div>
                <div className="h-px w-20 bg-gray-100 md:h-20 md:w-px"></div>
                <button 
                  onClick={handleEnroll}
                  className="bg-green-500 text-white px-12 py-6 rounded-2xl font-black text-2xl hover:bg-green-600 transition-all shadow-xl shadow-green-100 flex items-center gap-3 animate-bounce"
                >
                  QUERO ME INSCREVER
                  <ArrowRight className="h-6 w-6" />
                </button>
             </div>
             
             <div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-gray-400 uppercase tracking-widest">
                <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-green-500" /> Garantia de 7 Dias</span>
                <span className="flex items-center gap-2"><Lock className="h-4 w-4 text-blue-500" /> Checkout Seguro</span>
                <span className="flex items-center gap-2"><Star className="h-4 w-4 text-orange-500 fill-current" /> Acesso Imediato</span>
             </div>
          </div>
        </div>

        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-sm border border-gray-100">
          <h2 className="text-3xl font-black heading-font mb-12 text-center">Perguntas Frequentes</h2>
          <div className="space-y-4">
            <FAQItem question="Preciso aparecer nos vídeos?" answer="Não! Nosso método foca 100% em estratégias onde você pode ser um 'afiliado árbitro', vendendo sem precisar expor seu rosto ou nome." />
            <FAQItem question="Em quanto tempo terei resultados?" answer="Isso depende da sua aplicação. Temos alunos que fazem a primeira venda em 24h e outros que levam 15 dias. O importante é seguir o processo." />
            <FAQItem question="Tenho suporte se eu travar?" answer="Com certeza! Temos um grupo VIP de alunos e suporte via email e WhatsApp para tirar qualquer dúvida técnica ou estratégica." />
            <FAQItem question="E se eu não gostar?" answer="Você tem 7 dias de garantia incondicional. Se não gostar, basta um clique e devolvemos 100% do seu dinheiro, sem perguntas." />
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-orange-500 transition-colors"
      >
        <span className="font-bold text-lg">{question}</span>
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-8 text-gray-600 leading-relaxed animate-in fade-in slide-in-from-top-2">
          {answer}
        </div>
      )}
    </div>
  );
};

export default SalesPage;
