import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleWhatsAppOrder = () => {
    const phoneNumber = '+27645386591';
    const message = "Hello! I'd like to place an order for some delicious cakes from SHARON'S CAKES!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: 'linear-gradient(to bottom, #FFFFFF 0%, #F5EFE6 100%)',
      padding: '20px'
    }}>
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: 'rgba(228, 26, 28, 0.1)',
        animation: 'pulse 2s ease-in-out infinite'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        backgroundColor: 'rgba(228, 26, 28, 0.05)',
        animation: 'pulse 2s ease-in-out infinite 0.3s'
      }}></div>

      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ marginBottom: '1rem' }}
          >
            SHARON'S CAKES
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              color: '#E41A1C',
              fontWeight: '600',
              marginBottom: '2rem'
            }}
          >
            Home for golden delights
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              color: 'rgba(28, 28, 28, 0.8)',
              marginBottom: '3rem',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Handcrafted with love and the finest ingredients. Every cake tells a story of passion and perfection.
          </motion.p>
          
          <motion.button
            onClick={handleWhatsAppOrder}
            className="btn btn-primary"
            style={{ fontSize: '1.125rem', padding: '20px 40px' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Order on WhatsApp
          </motion.button>
        </motion.div>
      </div>

      <motion.div 
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div style={{
          width: '24px',
          height: '40px',
          border: '2px solid #E41A1C',
          borderRadius: '9999px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '4px',
            height: '12px',
            backgroundColor: '#E41A1C',
            borderRadius: '9999px',
            marginTop: '8px'
          }}></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;