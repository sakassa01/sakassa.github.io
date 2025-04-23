import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Laptop, Phone, Info } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="text-primary flex items-center">
            <ShoppingBag size={28} className="mr-2" />
            <h1 className="text-xl md:text-2xl font-bold font-gaming">
              <span className="text-primary">Computer</span>
              <span className="text-secondary">Zone</span>
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={({ isActive }) => 
            `nav-link ${isActive ? 'active' : ''}`
          }>
            Home
          </NavLink>
          <NavLink to="/laptops" className={({ isActive }) => 
            `nav-link ${isActive ? 'active' : ''}`
          }>
            Laptops
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => 
            `nav-link ${isActive ? 'active' : ''}`
          }>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => 
            `nav-link ${isActive ? 'active' : ''}`
          }>
            Contact
          </NavLink>
        </nav>

        {/* WhatsApp Contact Button */}
        <a 
          href="https://wa.me/212682721588" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex btn-primary"
        >
          <Phone size={16} className="mr-2" />
          Contact Us
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-dark-950/95 backdrop-blur-md z-40 transform transition-transform duration-300 pt-20 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center gap-6 p-4">
          <NavLink
            to="/"
            className={({ isActive }) => 
              `text-xl py-2 nav-link ${isActive ? 'active' : ''}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/laptops"
            className={({ isActive }) => 
              `text-xl py-2 nav-link ${isActive ? 'active' : ''}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <Laptop size={20} className="inline mr-2" />
            Laptops
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => 
              `text-xl py-2 nav-link ${isActive ? 'active' : ''}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <Info size={20} className="inline mr-2" />
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => 
              `text-xl py-2 nav-link ${isActive ? 'active' : ''}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <Phone size={20} className="inline mr-2" />
            Contact
          </NavLink>
          
          <div className="mt-4 pt-4 border-t border-dark-800 w-full flex justify-center">
            <a
              href="https://wa.me/212682721588"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center py-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone size={18} className="inline mr-2" />
              Contact via WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;