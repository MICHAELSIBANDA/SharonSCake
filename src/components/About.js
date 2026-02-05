import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Happy Customers', value: '1000+' },
    { label: 'Cake Varieties', value: '50+' },
    { label: 'Custom Designs', value: '∞' }
  ];

  return (
    <section className="section" style={{ backgroundColor: '#F5EFE6' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our Story
          </motion.h2>
          
          <div style={{ marginBottom: '3rem' }}>
            <motion.p
              style={{ fontSize: '1.125rem', color: 'rgba(28, 28, 28, 0.8)', marginBottom: '1.5rem' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Welcome to <strong style={{ color: '#E41A1C' }}>SHARON'S CAKES</strong>, where every cake is baked with love, passion, and generations of baking wisdom.
            </motion.p>
            
            <motion.p
              style={{ fontSize: '1.125rem', color: 'rgba(28, 28, 28, 0.8)', marginBottom: '1.5rem' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              We believe in using only the finest, locally-sourced ingredients to create cakes that not only look stunning but taste extraordinary.
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4"
            style={{ gap: '1.5rem' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="card"
                style={{ padding: '1.5rem' }}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#E41A1C' }}>{stat.value}</div>
                <div style={{ fontSize: '0.875rem', color: 'rgba(28, 28, 28, 0.7)', marginTop: '0.5rem' }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;