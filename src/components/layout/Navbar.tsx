import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isHomepage = location.pathname === '/';

  // Check scroll position to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled || !isHomepage
      ? 'bg-white text-black py-3 shadow-md'
      : 'bg-transparent text-white py-6'
  }`;

  const logoClasses = `font-bold text-xl md:text-2xl transition-colors duration-300 ${
    isScrolled || !isHomepage ? 'text-black' : 'text-white'
  }`;

  const linkClasses = `relative font-medium hover:opacity-80 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-300 hover:after:w-full`;

  const iconColor = isScrolled || !isHomepage ? 'black' : 'white';

  return (
    <header className={navClasses}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className={logoClasses}>
          TF SKATE SHOP
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={linkClasses}>
            Home
          </Link>
          <Link to="/products" className={linkClasses}>
            Produtos
          </Link>
          <Link to="/about" className={linkClasses}>
            Sobre Nós
          </Link>
          <Link to="/contact" className={linkClasses}>
            Contato
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button 
            className="p-2 rounded-full hover:bg-black/10 transition-colors"
            aria-label="Search"
          >
            <Search size={20} color={iconColor} />
          </button>
          
          <Link 
            to="/cart" 
            className="p-2 rounded-full hover:bg-black/10 transition-colors relative"
            aria-label="Shopping cart"
          >
            <ShoppingCart size={20} color={iconColor} />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-black/10 transition-colors"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={20} color={iconColor} /> : <Menu size={20} color={iconColor} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 bg-black z-40 transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-10">
            <span className="text-white font-bold text-xl">TF SKATE SHOP</span>
            <button
              onClick={closeMenu}
              className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6 text-white text-2xl font-medium">
            <Link to="/" className="py-2" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/products" className="py-2" onClick={closeMenu}>
              Products
            </Link>
            <Link to="/about" className="py-2" onClick={closeMenu}>
              About
            </Link>
            <Link to="/contact" className="py-2" onClick={closeMenu}>
              Contact
            </Link>
          </nav>
          
          <div className="mt-auto">
            <Link 
              to="/cart" 
              onClick={closeMenu}
              className="inline-flex items-center space-x-2 text-white text-lg font-medium"
            >
              <ShoppingCart size={20} />
              <span>Cart ({itemCount})</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;