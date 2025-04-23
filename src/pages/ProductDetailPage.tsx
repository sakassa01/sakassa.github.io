import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { formatPrice, createWhatsAppLink } from '../utils/formatters';
import { ArrowLeft, ShoppingBag, Cpu, MemoryStick as Memory, HardDrive, MonitorSmartphone, Weight, Wifi, Usb } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  
  const product = useMemo(() => 
    products.find(p => p.id === productId),
    [productId]
  );
  
  if (!product) {
    return (
      <div className="container py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="text-gray-400 mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/laptops" className="btn-primary">
          Back to Laptops
        </Link>
      </div>
    );
  }

  return (
    <section className="py-12">
      <div className="container">
        {/* Breadcrumb navigation */}
        <div className="mb-8">
          <Link to="/laptops" className="flex items-center text-gray-400 hover:text-primary transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Laptops
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product Image */}
          <div className="bg-dark-900 rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <span className="bg-dark-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                {product.brand}
              </span>
              {product.featured && (
                <span className="ml-2 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                  Featured
                </span>
              )}
            </div>
            
            <div className="text-3xl font-bold text-primary mb-4">
              {formatPrice(product.price)}
            </div>
            
            <p className="text-gray-300 mb-6">{product.description}</p>
            
            <a 
              href={createWhatsAppLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full py-3 text-center mb-6 flex items-center justify-center"
            >
              <ShoppingBag size={18} className="mr-2" />
              Order via WhatsApp
            </a>
            
            {/* Product Specifications */}
            <div className="bg-dark-900 rounded-lg p-6 mt-6">
              <h2 className="text-xl font-bold mb-4">Specifications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Cpu size={18} className="mt-0.5 text-primary" />
                  <div>
                    <h3 className="font-medium text-gray-200">Processor</h3>
                    <p className="text-gray-400 text-sm">{product.specs.cpu}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Cpu size={18} className="mt-0.5 text-primary" />
                  <div>
                    <h3 className="font-medium text-gray-200">Graphics</h3>
                    <p className="text-gray-400 text-sm">{product.specs.gpu}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Memory size={18} className="mt-0.5 text-primary" />
                  <div>
                    <h3 className="font-medium text-gray-200">Memory</h3>
                    <p className="text-gray-400 text-sm">{product.specs.ram}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <HardDrive size={18} className="mt-0.5 text-primary" />
                  <div>
                    <h3 className="font-medium text-gray-200">Storage</h3>
                    <p className="text-gray-400 text-sm">{product.specs.storage}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MonitorSmartphone size={18} className="mt-0.5 text-primary" />
                  <div>
                    <h3 className="font-medium text-gray-200">Display</h3>
                    <p className="text-gray-400 text-sm">{product.specs.display}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Weight size={18} className="mt-0.5 text-primary" />
                  <div>
                    <h3 className="font-medium text-gray-200">Weight</h3>
                    <p className="text-gray-400 text-sm">{product.specs.weight}</p>
                  </div>
                </div>
              </div>
              
              {/* Additional Specs */}
              <div className="mt-6">
                <div className="flex items-start gap-3 mb-4">
                  <Usb size={18} className="mt-0.5 text-primary" />
                  <div>
                    <h3 className="font-medium text-gray-200">Ports & Connectivity</h3>
                    <ul className="text-gray-400 text-sm mt-1 space-y-1">
                      {product.specs.ports.map((port, index) => (
                        <li key={index}>{port}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Wifi size={18} className="mt-0.5 text-primary" />
                  <div>
                    <h3 className="font-medium text-gray-200">Additional Features</h3>
                    <ul className="text-gray-400 text-sm mt-1 space-y-1">
                      {product.specs.extraFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;