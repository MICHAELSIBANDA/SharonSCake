import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  const contactDetails = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      detail: '57 High Street, Berea, Johannesburg',
      link: 'https://maps.google.com/?q=57+High+Street+Berea+Johannesburg'
    },
    {
      icon: <FaPhoneAlt />,
      title: 'Phone / WhatsApp',
      detail: '+27 64 538 6591',
      link: 'tel:+27645386591'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      detail: 'baloyisharon40@gmail.com',
      link: 'mailto:baloyisharon40@gmail.com'
    },
    {
      icon: <FaClock />,
      title: 'Order Hours',
      detail: 'Mon-Sat: 8AM - 6PM\nSun: 9AM - 4PM',
      link: null
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: '#F5EFE6' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Get In Touch</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '2rem' }}>
            {contactDetails.map((item, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ padding: '1.5rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ 
                    backgroundColor: '#E41A1C', 
                    color: 'white', 
                    padding: '1rem',
                    borderRadius: '12px'
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                      {item.title}
                    </h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'rgba(28, 28, 28, 0.8)', textDecoration: 'none' }}
                      >
                        {item.detail}
                      </a>
                    ) : (
                      <p style={{ color: 'rgba(28, 28, 28, 0.8)', whiteSpace: 'pre-line' }}>
                        {item.detail}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;