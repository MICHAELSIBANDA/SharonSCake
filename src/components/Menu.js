import React from 'react';
import { motion } from 'framer-motion';

// Import your cake images (make sure these images are in your project)
// For this example, I'm using placeholder URLs. Replace with your actual image paths
import redVelvetImg from './images/red-velvet.jpeg';
import chocolateImg from './images/chocolate.png';
import berryImg from './images/berry.jpeg';
import carrotImg from './images/carrot.jpeg';
import lemonImg from './images/lemon.jpeg';
import tropicalImg from './images/tropical.jpeg';

// If you don't have images yet, you can use placeholder URLs from a service
const placeholderImages = {
  'Red Velvet Dream': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'Chocolate Indulgence': 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'Berry Bliss': 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'Carrot Delight': 'https://images.unsplash.com/photo-1596223575327-99a5be5f930b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'Lemon Zest': 'https://images.unsplash.com/photo-1558306330-5d6a5c59c5c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'Tropical Paradise': 'https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
};

const cakeItems = [
  { 
    id: 1, 
    name: 'Red Velvet Dream', 
    description: 'Classic red velvet with cream cheese frosting', 
    price: 'customized',
    // Use either imported image or placeholder
    image: redVelvetImg || placeholderImages['Red Velvet Dream']
  },
  { 
    id: 2, 
    name: 'Chocolate Indulgence', 
    description: 'Triple-layer chocolate cake with ganache', 
    price: 'customized',
    image: chocolateImg || placeholderImages['Chocolate Indulgence']
  },
  { 
    id: 3, 
    name: 'Berry Bliss', 
    description: 'Vanilla sponge with fresh berries and cream', 
    price: 'customized',
    image: berryImg || placeholderImages['Berry Bliss']
  },
  { 
    id: 4, 
    name: 'Carrot Delight', 
    description: 'Moist carrot cake with walnuts and cream cheese', 
    price: 'customized',
    image: carrotImg || placeholderImages['Carrot Delight']
  },
  { 
    id: 5, 
    name: 'Lemon Zest', 
    description: 'Tangy lemon cake with citrus glaze', 
    price: 'customized',
    image: lemonImg || placeholderImages['Lemon Zest']
  },
  { 
    id: 6, 
    name: 'Tropical Paradise', 
    description: 'Coconut and pineapple cake with cream', 
    price: 'customized',
    image: tropicalImg || placeholderImages['Tropical Paradise']
  }
];

const Menu = () => {
  const handleOrder = (cakeName) => {
    const phoneNumber = '+27645386591';
    const message = `Hello! I'd like to order a ${cakeName} cake from SHARON'S CAKES.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2>Our Cake Collection</h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(28, 28, 28, 0.7)', maxWidth: '600px', margin: '0 auto' }}>
            Each cake is crafted with premium ingredients and attention to detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '2rem' }}>
          {cakeItems.map((cake, index) => (
            <motion.div
              key={cake.id}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              style={{ overflow: 'hidden' }}
            >
              {/* Image Section */}
              <div style={{ 
                height: '220px',
                width: '100%',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <motion.img 
                  src={cake.image} 
                  alt={cake.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Optional: Price tag overlay on image */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  backgroundColor: 'rgba(228, 26, 28, 0.9)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  fontWeight: '600',
                  fontSize: '0.875rem'
                }}>
                  {cake.price}
                </div>
              </div>
              
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{cake.name}</h3>
                  {/* Price is now on the image, but you can keep it here too if needed */}
                  {/* <span style={{ 
                    backgroundColor: '#E41A1C', 
                    color: 'white', 
                    padding: '0.5rem 1rem', 
                    borderRadius: '9999px',
                    fontWeight: '600'
                  }}>
                    {cake.price}
                  </span> */}
                </div>
                <p style={{ color: 'rgba(28, 28, 28, 0.7)', marginBottom: '1.5rem' }}>
                  {cake.description}
                </p>
                <motion.button
                  onClick={() => handleOrder(cake.name)}
                  className="btn btn-secondary"
                  style={{ width: '100%' }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Order This Cake
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;