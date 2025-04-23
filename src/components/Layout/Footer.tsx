import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, ShoppingBag, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 border-t border-dark-800 pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <ShoppingBag size={24} className="text-primary" />
              <h2 className="text-xl font-bold font-gaming">
                <span className="text-primary">Computer</span>
                <span className="text-secondary">Zone</span>
              </h2>
            </Link>
            <p className="text-gray-400 text-sm">
              Premium gaming laptops at competitive prices. Your one-stop destination for 
              high-performance gaming machines.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://www.instagram.com/computer_zone__/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/laptops" className="text-gray-400 hover:text-primary transition-colors">
                  Laptops
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary mt-0.5" />
                <a 
                  href="https://wa.me/212682721588" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  +212 682 721 588
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary mt-0.5" />
                <span className="text-gray-400">
                  contact@computerzone.me
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5" />
                <span className="text-gray-400">
                  Morocco
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Business Hours</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 flex justify-between">
                <span>Monday-Friday:</span>
                <span>9:00 AM - 8:00 PM</span>
              </li>
              <li className="text-gray-400 flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 6:00 PM</span>
              </li>
              <li className="text-gray-400 flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-dark-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Computer Zone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;