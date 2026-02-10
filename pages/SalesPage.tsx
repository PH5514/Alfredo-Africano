
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
  ChevronDown
} from 'lucide-react';

const SalesPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60 + 43); // 15:43

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Top Banner Scarcity */}
      <div className="bg-red-600 text-white text-center py-3 text-sm font-bold flex items-center justify-center gap-4 sticky top-0 z-50">
        <Timer className="h-4 w-4 animate-pulse" />
        <span>OFERTA LIMITADA: Os bônus expiram em {formatTime(timeLeft)}</span>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Headline */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-black text-sm uppercase tracking-widest mb-4">Atenção Afiliados e Empreendedores Digitais</p>
          <h1 className="text-4xl md:text-6xl font-black heading-font text-gray-900 leading-tight mb-8">
            Domine as Estratégias de <span className="text-orange-500">Escala de 6 Dígitos</span> e Viva de Internet em 2024
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Esqueça o que te disseram sobre sorte. Marketing de Afiliados é técnica, processo e consistência. Aprenda o método Click & Earn.
          </p>

          {/* Video Placeholder */}
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black group cursor-pointer border-4 border-white">
            <img 
              src="https://picsum.photos/1200/675?grayscale" 
              alt="Video Preview" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-orange-500 text-white p-6 rounded-full shadow-2xl group-hover:scale-110 transition-transform">
                <Play className="h-12 w-12 fill-current" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white text-left opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="font-bold text-lg">Assista ao Vídeo Completo (12:45)</p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-black heading-font mb-6 flex items-center gap-3">
              <Zap className="text-orange-500" />
              O Que Você Vai Levar:
            </h3>
            <ul className="space-y-4">
              {[
                "Módulo 01: Mentalidade de Tubarão",
                "Módulo 02: Escolhendo Nichos de Ouro",
                "Módulo 03: Copywriting Hipnótico para Vendas",
                "Módulo 04: Tráfego Pago (FB, IG & Google)",
                "Módulo 05: A Arte da Conversão no WhatsApp",
                "BÔNUS: Comunidade Secreta de Alunos"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium text-gray-700">
                  <CheckCircle className="text-green-500 h-5 w-5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center text-center">
            <p className="text-gray-400 line-through text-lg">De R$ 997,00</p>
            <h4 className="text-6xl font-black heading-font text-gray-900 mb-2">R$ 297,00</h4>
            <p className="text-gray-500 mb-8 font-medium">ou 12x de R$ 29,70 no cartão</p>
            
            <button className="w-full bg-orange-500 text-white py-6 rounded-2xl font-black text-2xl hover:bg-orange-600 transition-all shadow-xl shadow-orange-100 animate-pulse">
              QUERO ME INSCREVER AGORA
            </button>
            
            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-400">
              <ShieldCheck className="h-4 w-4" />
              Garantia de 7 dias incondicional
            </div>
          </div>
        </div>

        {/* Authority / Trust Section */}
        <div className="text-center mb-24">
          <h2 className="text-3xl font-black heading-font mb-8">Por que confiar em nós?</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <Users className="h-10 w-10 text-orange-500 mb-2" />
              <p className="font-bold text-xl">50k+</p>
              <p className="text-sm text-gray-500 uppercase tracking-tighter">Alunos Ativos</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-10 w-10 text-orange-500 mb-2" />
              <p className="font-bold text-xl">R$ 5M+</p>
              <p className="text-sm text-gray-500 uppercase tracking-tighter">Faturados por Alunos</p>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="h-10 w-10 text-orange-500 mb-2" />
              <p className="font-bold text-xl">100%</p>
              <p className="text-sm text-gray-500 uppercase tracking-tighter">Seguro & Vitalício</p>
            </div>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100">
          <h2 className="text-3xl font-black heading-font mb-8 text-center">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            <FAQItem question="Preciso investir em anúncios?" answer="Não é obrigatório. Ensinamos tanto estratégias orgânicas (gratuitas) quanto tráfego pago para quem quer acelerar os resultados." />
            <FAQItem question="Funciona para quem nunca trabalhou com isso?" answer="Sim! O curso foi desenhado do absoluto zero até o avançado." />
            <FAQItem question="Quanto tempo tenho de acesso?" answer="O acesso é vitalício. Você pode assistir as aulas quando e onde quiser, para sempre." />
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
        <div className="pb-6 text-gray-600 leading-relaxed animate-in fade-in slide-in-from-top-2">
          {answer}
        </div>
      )}
    </div>
  );
};

export default SalesPage;
