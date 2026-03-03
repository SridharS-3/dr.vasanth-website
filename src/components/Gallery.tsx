import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import dentalBanner from '../assets/Dental banner.jpg';
import aboutUs1 from '../assets/aboutus-1.jpg';
import whyChooseUs from '../assets/whychooseus.jpg';
import faq from '../assets/faq.jpg';
import doctor1 from '../assets/doctor-1.jpg';
import doctor2 from '../assets/doctor-2.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: dentalBanner, title: 'Modern Dental Clinic', description: 'Our state-of-the-art dental facility with modern equipment' },
    { src: aboutUs1, title: 'Reception Area', description: 'Comfortable and welcoming reception area for our patients' },
    { src: whyChooseUs, title: 'Treatment Room', description: 'Clean and hygienic treatment rooms with advanced technology' },
    { src: faq, title: 'Consultation Area', description: 'Private consultation rooms for patient discussions' },
    { src: doctor1, title: 'Our Expert Team', description: 'Experienced dental professionals providing quality care' },
    { src: doctor2, title: 'Patient Care', description: 'Dedicated staff ensuring comfortable patient experience' }
  ];

  return (
    <div className="min-h-screen bg-white pt-14 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-[var(--primary)] uppercase tracking-wider text-sm font-semibold mb-4">Our Gallery</p>
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--secondary)] mb-6">
            Dental Clip. Dental Clinic Gallery
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Take a look at our modern clinic facilities, comfortable environment, and the professional team that makes your dental experience exceptional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--secondary)] mb-2">{image.title}</h3>
                <p className="text-gray-600 text-sm">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-colors z-10"
            >
              <FaTimes />
            </button>
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;