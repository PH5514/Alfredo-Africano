
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Rocket, 
  ShieldCheck, 
  Target, 
  Users, 
  CheckCircle,
  Star,
  Play
} from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-orange-50 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-blue-50 blur-3xl opacity-50"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-orange-50 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold mb-8 animate-bounce">
              <Star className="h-4 w-4 fill-current" />
              <span>O Caminho Mais Curto para sua Liberdade Financeira</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black heading-font tracking-tight text-gray-900 mb-8 leading-tight">
              Transforme Cliques em <span className="text-orange-500">Lucros Reais</span> Todos os Dias
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Descubra como construir um negócio digital sólido como afiliado, mesmo começando do absoluto zero. Sem segredos, apenas resultados.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/captura" 
                className="w-full sm:w-auto bg-orange-500 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-200 hover:scale-105 active:scale-95 flex items-center justify-center group"
              >
                QUERO COMEÇAR AGORA
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/sobre" 
                className="w-full sm:w-auto bg-gray-100 text-gray-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-200 transition-all flex items-center justify-center"
              >
                Como Funciona?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-gray-50 py-12 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 font-medium mb-8 text-sm uppercase tracking-widest">Plataformas que Utilizamos</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="text-3xl font-black text-gray-800">HOTMART</div>
            <div className="text-3xl font-black text-gray-800">EDUZZ</div>
            <div className="text-3xl font-black text-gray-800">MONETIZZE</div>
            <div className="text-3xl font-black text-gray-800">KIWIFY</div>
            <div className="text-3xl font-black text-gray-800">BRAIP</div>
          </div>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black heading-font mb-4">Por que o Click & Earn?</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Nós não ensinamos apenas teorias. Mostramos o campo de batalha para quem quer lucrar de verdade.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard 
              icon={<Rocket className="h-8 w-8 text-orange-500" />}
              title="Escalabilidade Rápida"
              description="Aprenda a escalar suas campanhas e multiplicar seus ganhos de forma previsível e segura."
            />
            <BenefitCard 
              icon={<Target className="h-8 w-8 text-blue-500" />}
              title="Tráfego Qualificado"
              description="O segredo está em quem vê sua oferta. Te ensinamos a atrair compradores, não curiosos."
            />
            <BenefitCard 
              icon={<ShieldCheck className="h-8 w-8 text-green-500" />}
              title="Estratégias Validadas"
              description="Métodos testados por grandes nomes do mercado para garantir que você não perca dinheiro."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-orange-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <Rocket className="h-96 w-96 text-white" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black heading-font mb-6 leading-tight">
            Pare de apenas olhar. Comece a lucrar!
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Junte-se a mais de 5.000 alunos que já transformaram seus celulares em máquinas de vendas online.
          </p>
          <Link 
            to="/captura" 
            className="bg-white text-orange-600 px-12 py-5 rounded-full font-black text-xl hover:bg-gray-100 transition-all shadow-2xl flex items-center justify-center mx-auto w-fit"
          >
            GARANTIR MINHA VAGA AGORA
          </Link>
          <p className="mt-6 text-sm opacity-80 flex items-center justify-center gap-2">
            <CheckCircle className="h-4 w-4" /> Acesso imediato à aula bônus
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black heading-font text-center mb-16">Resultados Reais de Alunos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Ricardo Santos"
              role="Afiliado Iniciante"
              content="Em menos de 15 dias aplicando o que aprendi aqui, fiz minha primeira venda de R$ 297,00. O suporte é incrível!"
              image="https://picsum.photos/100/100?random=1"
            />
            <TestimonialCard 
              name="Juliana Mello"
              role="Ex-CLT, agora nômade"
              content="O Click & Earn me deu a liberdade que eu sempre sonhei. Hoje trabalho de qualquer lugar do mundo."
              image="https://picsum.photos/100/100?random=2"
            />
            <TestimonialCard 
              name="Felipe Costa"
              role="Gestor de Tráfego"
              content="As estratégias de escala mostradas no blog são de outro nível. Meu ROI subiu 40% em um mês."
              image="https://picsum.photos/100/100?random=3"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-gray-50 p-8 rounded-3xl hover:shadow-xl transition-all border border-gray-100 group">
    <div className="bg-white p-4 rounded-2xl w-fit mb-6 shadow-sm group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-2xl font-black heading-font mb-4 text-gray-900">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const TestimonialCard = ({ name, role, content, image }: { name: string, role: string, content: string, image: string }) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
    <div className="flex items-center space-x-4 mb-6">
      <img src={image} alt={name} className="w-14 h-14 rounded-full border-2 border-orange-500" />
      <div>
        <h4 className="font-bold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-orange-400 fill-current" />)}
    </div>
    <p className="text-gray-600 italic">"{content}"</p>
  </div>
);

export default HomePage;
