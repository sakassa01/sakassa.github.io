import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/90 to-dark-950/70"></div>
        <img 
          src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Gaming Setup" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight">
            <span className="block mb-2">Gaming Power</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">
              Starts Here
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
            Premium gaming laptops with powerful specs at competitive prices. 
            Find your perfect machine for next-level gaming performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/laptops" className="btn-primary group text-center sm:text-left">
              Explore Laptops
              <ArrowRight size={16} className="ml-2 inline-block group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="https://wa.me/212682721588" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline text-center sm:text-left"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated Accent */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow"></div>
    </section>
  );
};

export default Hero;