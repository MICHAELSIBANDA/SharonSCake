import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaTiktok, 
  FaWhatsapp, 
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaHeart
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social media data
  const socialMedia = [
    { 
      name: 'Facebook', 
      icon: <FaFacebookF />, 
      url: 'https://facebook.com/yourpage' 
    },
    { 
      name: 'Instagram', 
      icon: <FaInstagram />, 
      url: 'https://instagram.com/yourprofile' 
    },
    { 
      name: 'Twitter', 
      icon: <FaTwitter />, 
      url: 'https://twitter.com/yourprofile' 
    },
    { 
      name: 'TikTok', 
      icon: <FaTiktok />, 
      url: 'https://tiktok.com/@yourprofile' 
    },
    { 
      name: 'WhatsApp', 
      icon: <FaWhatsapp />, 
      url: 'https://wa.me/27645386591' 
    },
    { 
      name: 'Email', 
      icon: <FaEnvelope />, 
      url: 'mailto:baloyisharon40@gmail.com' 
    }
  ];

  return (
    <footer style={{
      backgroundColor: '#1C1C1C',
      color: 'white',
      padding: '3rem 20px',
      width: '100%'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto' 
      }}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem' 
          }}>
            SHARON'S CAKES
          </h3>
          
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.8)', 
            marginBottom: '2rem' 
          }}>
            Home for golden delights
          </p>
          
          {/* Social Media Icons - Horizontal Layout */}
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '2.5rem',
            padding: '0 1rem'
          }}>
            {socialMedia.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${platform.name}`}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  color: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {platform.icon}
              </motion.a>
            ))}
          </div>
          
          {/* Contact Info - Responsive Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem',
            padding: '0 1rem'
          }}>
            <div>
              <h4 style={{ 
                fontSize: '1.25rem', 
                fontWeight: '600', 
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}>
                <FaMapMarkerAlt />
                Business Details
              </h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                57 High Street, Berea, Johannesburg
              </p>
            </div>
            
            <div>
              <h4 style={{ 
                fontSize: '1.25rem', 
                fontWeight: '600', 
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}>
                <FaPhone />
                Contact Info
              </h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Phone: +27 64 538 6591
              </p>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Email: baloyisharon40@gmail.com
              </p>
            </div>
          </div>
          
          {/* Copyright */}
          <div style={{ 
            color: 'rgba(255, 255, 255, 0.6)', 
            fontSize: '0.875rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '1.5rem',
            marginTop: '1.5rem'
          }}>
            <p>© {currentYear} SHARON'S CAKES. All rights reserved.</p>
            <p style={{ 
              marginTop: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              Made with <FaHeart color="#ff6b6b" /> in Johannesburg
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;