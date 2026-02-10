
import React from 'react';
import { Mail, MessageCircle, MapPin, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
          
          {/* Info Side */}
          <div className="lg:w-2/5 bg-gray-900 text-white p-12 md:p-16 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-black heading-font mb-8">Estamos aqui para ajudar!</h1>
              <p className="text-gray-400 text-lg mb-12">Tem alguma dúvida sobre nossos cursos ou produtos recomendados? Nossa equipe responde em até 24 horas.</p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="bg-orange-500 p-3 rounded-2xl">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-black">Email</p>
                    <p className="text-lg font-bold">contato@clickelucre.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="bg-green-500 p-3 rounded-2xl">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-black">WhatsApp Suporte</p>
                    <p className="text-lg font-bold">+55 (00) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="bg-blue-500 p-3 rounded-2xl">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-black">Atendimento</p>
                    <p className="text-lg font-bold">100% Online & Remoto</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-sm">Horário de atendimento: Segunda a Sexta, das 09:00 às 18:00 (Brasília).</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-12 md:p-16">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-black text-gray-700 uppercase">Nome Completo</label>
                  <input type="text" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-gray-700 uppercase">Seu Melhor Email</label>
                  <input type="email" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all" placeholder="exemplo@email.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-black text-gray-700 uppercase">Assunto</label>
                <select className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all appearance-none">
                  <option>Dúvida sobre Curso</option>
                  <option>Suporte ao Aluno</option>
                  <option>Parcerias & Afiliados</option>
                  <option>Outros</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-black text-gray-700 uppercase">Sua Mensagem</label>
                <textarea rows={6} className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all" placeholder="Como podemos ajudar você hoje?"></textarea>
              </div>

              <button className="bg-orange-500 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-orange-600 transition-all shadow-xl shadow-orange-100 flex items-center justify-center gap-3 w-full md:w-fit group">
                ENVIAR MENSAGEM
                <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
