import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { colors } from '../colors';

const WhatsAppFloat = () => {
  const [showQR, setShowQR] = useState(false);
  const phoneNumber = '916374669154'; // WhatsApp number
  const message = 'Hello! I would like to book an appointment at Dental Clip.Dental.';

  const handleWhatsAppClick = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Direct WhatsApp chat for mobile
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    } else {
      // Show QR code for desktop
      setShowQR(true);
    }
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-[9999]"
      >
        <button
          onClick={handleWhatsAppClick}
          style={{ backgroundColor: '#25D366' }}
          className="w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-3xl transition-all"
        >
          <FaWhatsapp className="text-3xl" />
        </button>
      </motion.div>

      {/* QR Code Modal for Desktop */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[9998] flex items-center justify-center p-4"
            onClick={() => setShowQR(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold" style={{ color: colors.primary }}>
                  Scan QR Code
                </h3>
                <button
                  onClick={() => setShowQR(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
              
              <div className="text-center">
                <div className="bg-white p-4 rounded-2xl shadow-lg mb-4">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`)}`}
                    alt="WhatsApp QR Code"
                    className="w-48 h-48 mx-auto"
                  />
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Scan this QR code with your phone to start WhatsApp chat
                </p>
                <p className="text-xs text-gray-500">
                  Or click the button on your mobile device
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppFloat;