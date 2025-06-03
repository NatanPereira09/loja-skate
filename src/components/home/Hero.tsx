import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video or Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="src\assets\skate.jpg" 
          alt="Skatista em ação" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Ande do Seu Jeito, <br />
            <span className="text-orange-500">Defina Seu Estilo</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Skates e equipamentos premium para todos os níveis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              as={Link} 
              to="/products" 
              variant="secondary" 
              size="lg"
              className="group"
            >
              Comprar Agora
              <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            
            <Button 
              as={Link}
              to="/about"
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/20"
            >
              Sobre Nós
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white animate-bounce">
        <div className="w-0.5 h-6 bg-white mb-2"></div>
        <span className="text-sm font-medium">Rolar</span>
      </div>
    </section>
  );
};

export default Hero;