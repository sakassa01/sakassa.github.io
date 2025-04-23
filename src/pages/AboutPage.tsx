import React from 'react';
import { Info, Users, Trophy, Cpu } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex items-center mb-10">
          <Info size={28} className="mr-3 text-primary" />
          <h1 className="text-3xl md:text-4xl font-bold">About Computer Zone</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Gaming Passion</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Computer Zone was founded by a team of passionate gamers who understand the importance of 
              having the right hardware for an exceptional gaming experience. We believe that every gamer 
              deserves access to high-quality gaming laptops without breaking the bank.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Our mission is to provide Moroccan gamers with carefully selected, high-performance gaming 
              laptops at competitive prices. We focus on quality, performance, and value, ensuring that 
              each laptop we offer meets our strict standards for gaming excellence.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Unlike traditional retailers, we maintain a lean operation with direct supplier relationships, 
              allowing us to offer premium gaming laptops at prices lower than the competition. We handle 
              orders via WhatsApp for a personalized experience, answering all your questions and ensuring 
              you get exactly what you need.
            </p>
          </div>
          
          <div className="relative rounded-lg overflow-hidden h-80 lg:h-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/70 to-transparent z-10"></div>
            <img 
              src="https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Gaming Setups" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Values Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-dark-900 p-6 rounded-lg border border-dark-800">
            <Users size={32} className="text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Customer First</h3>
            <p className="text-gray-400">
              We prioritize your satisfaction above all else. Our personalized approach ensures you get 
              the perfect gaming laptop for your specific needs and preferences.
            </p>
          </div>
          
          <div className="bg-dark-900 p-6 rounded-lg border border-dark-800">
            <Trophy size={32} className="text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
            <p className="text-gray-400">
              Every laptop we offer undergoes strict quality checks. We only sell products we would use 
              ourselves, ensuring you receive a reliable, high-performance gaming machine.
            </p>
          </div>
          
          <div className="bg-dark-900 p-6 rounded-lg border border-dark-800">
            <Cpu size={32} className="text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Gaming Expertise</h3>
            <p className="text-gray-400">
              As gamers ourselves, we understand what makes a great gaming experience. We stay up-to-date 
              with the latest gaming hardware developments to bring you the best options.
            </p>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-900/20 to-secondary-900/20 p-8 md:p-12 rounded-lg text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Level Up Your Gaming?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Browse our selection of premium gaming laptops or reach out to us directly via WhatsApp. 
            We're here to help you find the perfect gaming machine for your budget and requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/laptops" 
              className="btn-primary"
            >
              Explore Laptops
            </a>
            <a 
              href="https://wa.me/212682721588" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;