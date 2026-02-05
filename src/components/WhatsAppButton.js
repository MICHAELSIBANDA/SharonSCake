import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleClick = () => {
    const phoneNumber = '+27645386591';
    const message = "Hello SHARON'S CAKES! I'd like to place an order.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 50,
        backgroundColor: '#25D366',
        color: 'white',
        padding: '1rem',
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp style={{ fontSize: '1.5rem' }} />
    </motion.button>
  );
};

export default WhatsAppButton;