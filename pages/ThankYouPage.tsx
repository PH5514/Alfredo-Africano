
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, MessageCircle, Mail, Download, Sparkles, Loader2 } from 'lucide-react';
import { Analytics } from '../analytics';

const ThankYouPage: React.FC = () => {
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    Analytics.trackLead();
  }, []);

  const handleDownload = () => {
    setDownloading(true);
    Analytics.trackButtonClick('Download Guia - ThankYouPage');
    
    // Simula a geração/download do PDF
    setTimeout(() => {
      const content = "Este é o seu guia do Click & Earn. Prepare-se para lucrar!";
      const blob = new Blob([content], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Mapa-Primeira-Venda-Click-and-Earn.pdf';
      a.click();
      window.URL.revokeObjectURL(url);
      setDownloading(false);
    }, 2000);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-24 px-4 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-24 text-orange-500/5 animate-float">
        <Sparkles className="h-64 w-64" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block bg-green-100 text-green-600 p-6 rounded-full mb-8 animate-bounce">
          <CheckCircle className="h-16 w-16" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black heading-font text-gray-900 mb-6 leading-tight">
          Inscrição Confirmada! <br/><span className="text-orange-500">O Mapa já é seu.</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Enviamos uma cópia para o seu e-mail, mas você pode baixar a versão digital agora mesmo no botão abaixo:
        </p>

        <button 
          onClick={handleDownload}
          disabled={downloading}
          className="bg-gray-900 text-white px-12 py-6 rounded-2xl font-black text-2xl hover:bg-orange-500 transition-all shadow-2xl flex items-center justify-center mx-auto gap-4 mb-20 disabled:opacity-50"
        >
          {downloading ? (
            <>
              <Loader2 className="h-8 w-8 animate-spin" />
              GERANDO SEU GUIA...
            </>
          ) : (
            <>
              <Download className="h-8 w-8" />
              BAIXAR MAPA AGORA (PDF)
            </>
          )}
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:scale-105 transition-transform">
            <div className="bg-green-500 text-white p-4 rounded-2xl w-fit mx-auto mb-6">
              <MessageCircle className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-black heading-font mb-4">Comunidade VIP</h3>
            <p className="text-gray-500 mb-8">Entre no grupo de alunos no WhatsApp para receber avisos importantes.</p>
            <a 
              href="https://wa.me/5500000000000" 
              target="_blank"
              rel="noreferrer"
              className="block w-full bg-green-500 text-white py-4 rounded-xl font-bold hover:bg-green-600 transition-colors"
            >
              ENTRAR NO GRUPO
            </a>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:scale-105 transition-transform">
            <div className="bg-blue-600 text-white p-4 rounded-2xl w-fit mx-auto mb-6">
              <Mail className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-black heading-font mb-4">Suporte Premium</h3>
            <p className="text-gray-500 mb-8">Dúvidas sobre o material? Fale direto com nossos consultores via E-mail.</p>
            <a href="mailto:contato@clickelucre.com" className="block w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors">
              FALAR COM SUPORTE
            </a>
          </div>
        </div>

        <div className="bg-orange-500 text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden text-left border-4 border-white">
          <h2 className="text-3xl font-black heading-font mb-4">PASSO FINAL:</h2>
          <p className="text-lg mb-8 opacity-90">O Mapa da Primeira Venda é o começo. Se você quer o sistema completo que gerou os resultados que você viu, aproveite o desconto de 50% abaixo.</p>
          <Link 
            to="/oferta"
            className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-xl font-black text-lg hover:bg-gray-100 transition-all"
          >
            QUERO O MÉTODO COMPLETO
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
