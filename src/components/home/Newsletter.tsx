import React from 'react';
import Button from '../ui/Button';

const Newsletter: React.FC = () => {
  return (
    <section className="py-16 bg-zinc-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre para Nossa Comunidade</h2>
          <p className="text-zinc-400 mb-8">
            Inscreva-se em nossa newsletter para receber ofertas exclusivas, novos produtos e conteúdo sobre skate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Seu endereço de e-mail"
              className="flex-1 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
            />
            <Button variant="secondary">
              Inscrever-se
            </Button>
          </div>
          
          <p className="text-xs text-zinc-500 mt-4">
            Ao se inscrever, você concorda com nossa Política de Privacidade e consente em receber atualizações da TF Skate Shop.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;