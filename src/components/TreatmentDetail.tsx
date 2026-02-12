import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { treatmentData } from '../data/treatments';

const TreatmentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const treatment = treatmentData.find(t => t.id === id);

  if (!treatment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#8b7355]">Treatment not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[#b8956a] hover:text-[#8b7355] mb-8 font-semibold"
        >
          <FaArrowLeft /> Back to Home
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-[#d4a574] mb-2 text-lg">Our Specialities</p>
          <h1 className="text-5xl md:text-6xl font-light text-[#b8956a] mb-6">{treatment.title}</h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src={treatment.image} 
              alt={treatment.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#b8956a]/30 to-transparent"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src={treatment.image2} 
              alt={treatment.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#b8956a]/30 to-transparent"></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#f5f0eb] rounded-3xl p-10 mb-12"
        >
          <h2 className="text-3xl font-semibold text-[#b8956a] mb-6">Introduction</h2>
          <p className="text-[#8b7355] leading-relaxed text-lg mb-6">{treatment.introduction}</p>
          {treatment.description && (
            <p className="text-[#8b7355] leading-relaxed text-lg">{treatment.description}</p>
          )}
        </motion.div>

        {treatment.candidates && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white border-2 border-[#d4a574] rounded-3xl p-10 mb-12"
          >
            <h2 className="text-3xl font-semibold text-[#b8956a] mb-6">Who are the candidates for {treatment.title} treatment?</h2>
            <p className="text-[#8b7355] leading-relaxed text-lg">{treatment.candidates}</p>
          </motion.div>
        )}

        {treatment.procedure && treatment.procedure.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12 bg-gradient-to-b from-[#f5f0eb] to-white py-16 -mx-6 px-6"
          >
            <h2 className="text-4xl font-bold text-[#b8956a] mb-12 text-center">Treatment Procedure</h2>
            <div className="max-w-6xl mx-auto relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#d4a574] via-[#b8956a] to-[#d4a574] hidden md:block"></div>
              {treatment.procedure.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.15, type: 'spring', stiffness: 80, damping: 15 }}
                  className="relative flex items-center justify-between mb-16 last:mb-0"
                >
                  {index % 2 === 0 ? (
                    <>
                      <div className="w-full md:w-[calc(50%-40px)]">
                        <motion.div 
                          whileHover={{ scale: 1.03, y: -5 }}
                          className="bg-white rounded-3xl p-8 shadow-xl border-l-4 border-[#d4a574] hover:shadow-2xl transition-all"
                        >
                          <p className="text-[#8b7355] leading-relaxed text-lg">{step}</p>
                        </motion.div>
                      </div>
                      <motion.div 
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3, type: 'spring', stiffness: 200 }}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#b8956a] to-[#8b7355] text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-2xl z-10 hidden md:flex border-4 border-white"
                      >
                        {index + 1}
                      </motion.div>
                      <div className="w-full md:w-[calc(50%-40px)] hidden md:block"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-full md:w-[calc(50%-40px)] hidden md:block"></div>
                      <motion.div 
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3, type: 'spring', stiffness: 200 }}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#b8956a] to-[#8b7355] text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-2xl z-10 hidden md:flex border-4 border-white"
                      >
                        {index + 1}
                      </motion.div>
                      <div className="w-full md:w-[calc(50%-40px)]">
                        <motion.div 
                          whileHover={{ scale: 1.03, y: -5 }}
                          className="bg-white rounded-3xl p-8 shadow-xl border-r-4 border-[#d4a574] hover:shadow-2xl transition-all"
                        >
                          <p className="text-[#8b7355] leading-relaxed text-lg">{step}</p>
                        </motion.div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {treatment.benefits && treatment.benefits.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold text-[#b8956a] mb-8 text-center">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {treatment.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="flex items-start gap-4 bg-white border border-[#d4a574]/30 p-6 rounded-2xl hover:shadow-lg transition-shadow"
                >
                  <FaCheckCircle className="text-[#d4a574] text-2xl flex-shrink-0 mt-1" />
                  <p className="text-[#8b7355] leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-gradient-to-r from-[#b8956a] to-[#8b7355] text-white rounded-3xl p-12 text-center shadow-2xl"
        >
          <h3 className="text-3xl font-semibold mb-4">Ready to Get Started?</h3>
          <p className="mb-8 text-lg">Book your appointment today and let us take care of your smile</p>
          <a 
            href="tel:+919876543210"
            className="inline-block bg-white text-[#b8956a] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#f5f0eb] transition-colors shadow-lg"
          >
            Call Now: +91 98765 43210
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default TreatmentDetail;
