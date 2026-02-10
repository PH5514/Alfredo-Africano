
import React, { useState } from 'react';
// Added Link to imports from react-router-dom
import { useNavigate, Link } from 'react-router-dom';
import { CheckCircle, Lock, Mail, MessageSquare, ArrowRight } from 'lucide-react';

const LeadCapturePage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulating API call
    setTimeout(() => {
      setLoading(false);
      navigate('/oferta');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Persuasion */}
        <div className="space-y-8">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
            Presente Gratuito Exclusivo
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black heading-font leading-tight">
            Baixe Agora o Nosso Guia: <span className="text-orange-500">"Mapa da Primeira Venda"</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Descubra o passo a passo exato que nossos alunos utilizam para realizar vendas nos primeiros 7 dias como afiliados, sem precisar aparecer.
          </p>
          
          <ul className="space-y-4">
            {[
              "Como escolher o produto vencedor em 5 minutos",
              "A técnica secreta de copy que converte 4x mais",
              "Tráfego orgânico: venda sem gastar 1 real em anúncios",
              "Script pronto de WhatsApp para fechar vendas"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                <CheckCircle className="text-green-500 h-6 w-6 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="bg-blue-50 p-3 rounded-full text-blue-600">
              <Lock className="h-6 w-6" />
            </div>
            <p className="text-sm text-gray-500 italic">
              Seus dados estão 100% seguros conosco. Odiamos spam tanto quanto você.
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="relative">
          <div className="absolute -inset-4 bg-orange-500/10 rounded-[3rem] blur-2xl"></div>
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative z-10 border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black heading-font mb-2">Acesso Imediato</h3>
              <p className="text-gray-500">Preencha os campos abaixo para receber o guia no seu email.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Seu Melhor Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input 
                    required
                    type="email" 
                    placeholder="exemplo@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Seu WhatsApp (Opcional)</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input 
                    type="tel" 
                    placeholder="(00) 00000-0000"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 text-white py-5 rounded-2xl font-black text-xl hover:bg-orange-600 transition-all shadow-xl shadow-orange-200 flex items-center justify-center gap-2 group"
              >
                {loading ? (
                  <div className="h-6 w-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    QUERO MEU GUIA GRÁTIS
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <div className="text-center">
                <p className="text-xs text-gray-400">
                  Ao clicar no botão, você concorda com nossos <Link to="/privacidade" className="underline">Termos de Uso</Link>.
                </p>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LeadCapturePage;
