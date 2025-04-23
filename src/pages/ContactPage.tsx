import React, { useState } from 'react';
import { Phone, Mail, Instagram, Facebook, MessageSquare, User, AtSign, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would connect to a backend
    // For now, we'll just display an alert
    alert('Thank you for your message! We will contact you shortly via WhatsApp or email.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-16">
      <div className="container">
        <div className="flex items-center mb-10">
          <MessageSquare size={28} className="mr-3 text-primary" />
          <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Have questions about our products or need personalized assistance? 
              We're here to help! Contact us through any of the methods below, and we'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">WhatsApp</h3>
                  <p className="text-gray-400 mb-1">Our preferred contact method</p>
                  <a 
                    href="https://wa.me/212682721588" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-400 transition-colors"
                  >
                    +212 682 721 588
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Email</h3>
                  <p className="text-gray-400 mb-1">For general inquiries</p>
                  <a 
                    href="mailto:contact@computerzone.me"
                    className="text-primary hover:text-primary-400 transition-colors"
                  >
                    contact@computerzone.me
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Instagram size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Instagram</h3>
                  <p className="text-gray-400 mb-1">Follow us for updates and offers</p>
                  <a 
                    href="https://www.instagram.com/computer_zone__/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-400 transition-colors"
                  >
                    @computer_zone__
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Facebook size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Facebook</h3>
                  <p className="text-gray-400 mb-1">Like our page for news and updates</p>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-400 transition-colors"
                  >
                    Computer Zone
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-dark-900 rounded-lg p-6 border border-dark-800">
            <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-1">Your Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <User size={16} className="text-gray-500" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full pl-10 py-2 px-4 bg-dark-800 border border-dark-700 rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-white"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-1">Your Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <AtSign size={16} className="text-gray-500" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full pl-10 py-2 px-4 bg-dark-800 border border-dark-700 rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-white"
                    placeholder="johndoe@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full py-2 px-4 bg-dark-800 border border-dark-700 rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-white min-h-[150px]"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full py-2.5 flex justify-center items-center"
              >
                <Send size={16} className="mr-2" />
                Send Message
              </button>
              
              <p className="text-xs text-gray-400 text-center mt-4">
                By submitting this form, you agree to be contacted via email or WhatsApp. 
                We respect your privacy and will not share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;