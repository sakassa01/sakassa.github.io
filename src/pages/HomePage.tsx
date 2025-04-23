import React from 'react';
import Hero from '../components/UI/Hero';
import FeaturedProducts from '../components/UI/FeaturedProducts';
import { Cpu, Shield, Zap, Truck } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Cpu className="w-10 h-10 text-primary" />,
      title: 'Premium Hardware',
      description: 'Best-in-class CPUs, GPUs, and components for ultimate gaming performance.'
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: 'Warranty Coverage',
      description: 'Comprehensive manufacturer warranties on all our gaming laptops.'
    },
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: 'Expert Selection',
      description: 'Carefully curated catalog of the best gaming laptops on the market.'
    },
    {
      icon: <Truck className="w-10 h-10 text-primary" />,
      title: 'Fast Delivery',
      description: 'Quick delivery throughout Morocco to get you gaming as soon as possible.'
    }
  ];

  return (
    <>
      <Hero />
      
      <FeaturedProducts />
      
      {/* Features Section */}
      <section className="py-16 bg-dark-900">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Why Choose Computer Zone?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-dark-800 border border-dark-700 rounded-lg p-6 text-center transition-transform hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-secondary-900/20 z-0"></div>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dark-950/90"></div>
          <img 
            src="https://images.pexels.com/photos/4004374/pexels-photo-4004374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Gaming Setup" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Upgrade Your Gaming Experience?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Discover our selection of high-performance gaming laptops and elevate your gaming experience to the next level.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/212682721588" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Contact Us Now
            </a>
            <a 
              href="/laptops" 
              className="btn-outline"
            >
              Browse Laptops
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;