import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import Button from '../ui/Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Entre para a Crew</h3>
          <p className="text-zinc-400 mb-6">
            Inscreva-se para receber ofertas exclusivas, novidades e conteúdo sobre skate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <Button variant="secondary" size="md">
              Inscrever
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & About */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block font-bold text-xl mb-4">
              TF SKATE SHOP
            </Link>
            <p className="text-zinc-400 mb-4">
              Skates e acessórios premium para skatistas de todos os níveis.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Loja</h4>
            <ul className="space-y-2">
              <li><Link to="/products?category=decks" className="text-zinc-400 hover:text-white transition-colors">Shapes</Link></li>
              <li><Link to="/products?category=completes" className="text-zinc-400 hover:text-white transition-colors">Skates Completos</Link></li>
              <li><Link to="/products?category=trucks" className="text-zinc-400 hover:text-white transition-colors">Trucks</Link></li>
              <li><Link to="/products?category=wheels" className="text-zinc-400 hover:text-white transition-colors">Rodas</Link></li>
              <li><Link to="/products?category=bearings" className="text-zinc-400 hover:text-white transition-colors">Rolamentos</Link></li>
            </ul>
          </div>
          
          {/* Info */}
          <div>
            <h4 className="font-semibold mb-4">Informações</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-zinc-400 hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link to="/team" className="text-zinc-400 hover:text-white transition-colors">Time de Riders</Link></li>
              <li><Link to="/blog" className="text-zinc-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/events" className="text-zinc-400 hover:text-white transition-colors">Eventos</Link></li>
              <li><Link to="/careers" className="text-zinc-400 hover:text-white transition-colors">Trabalhe Conosco</Link></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-zinc-400 hover:text-white transition-colors">Fale Conosco</Link></li>
              <li><Link to="/faq" className="text-zinc-400 hover:text-white transition-colors">Dúvidas Frequentes</Link></li>
              <li><Link to="/shipping" className="text-zinc-400 hover:text-white transition-colors">Envio e Devoluções</Link></li>
              <li><Link to="/warranty" className="text-zinc-400 hover:text-white transition-colors">Garantia</Link></li>
              <li><Link to="/sizing" className="text-zinc-400 hover:text-white transition-colors">Guia de Tamanhos</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-sm mb-4 md:mb-0">
            © 2025 TF SKATE SHOP. Todos os direitos reservados.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-500">
            <Link to="/privacy" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Termos de Serviço</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Política de Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;