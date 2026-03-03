import { motion } from 'framer-motion';
import { colors } from '../colors';
import { FaArrowLeft, FaCheckCircle, FaTooth } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { treatmentData } from '../data/treatments';

const TreatmentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const treatment = treatmentData.find(t => t.id === id);
  const treatmentIndex = treatmentData.findIndex(t => t.id === id);
  const layoutType = treatmentIndex % 3;

  if (!treatment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-800">Treatment not found</p>
      </div>
    );
  }

  const whyChooseUs = [
    { title: 'Expert Team', desc: 'Highly qualified specialists with years of experience' },
    { title: 'Advanced Technology', desc: 'State-of-the-art equipment for precise treatment' },
    { title: 'Patient Comfort', desc: 'Gentle care in a relaxing environment' },
    { title: 'Affordable Care', desc: 'Quality treatment at competitive prices' }
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[var(--primary)] hover:text-gray-800 mb-8 font-semibold"
        >
          <FaArrowLeft /> Back to Home
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-[var(--primary)] mb-2 text-lg">Our Specialities</p>
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--secondary)] mb-6">{treatment.title}</h1>
        </motion.div>

        {/* Layout 1: Overlapping images with decorative elements */}
        {layoutType === 0 && (
          <div className="relative mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative z-10 w-full md:w-2/3 h-[450px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src={treatment.images[0]} alt={treatment.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute top-20 right-0 w-full md:w-1/2 h-[350px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
            >
              <img src={treatment.images[1]} alt={treatment.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tl from-black/30 to-transparent"></div>
            </motion.div>
            <div className="absolute -bottom-6 left-10 w-32 h-32 bg-[#f5f0eb] rounded-full -z-10"></div>
            <div className="absolute top-10 right-20 w-20 h-20 bg-gray-200 rounded-full -z-10"></div>
            {treatment.images[2] && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-10 right-1/4 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden lg:block"
              >
                <img src={treatment.images[2]} alt={treatment.title} className="w-full h-full object-cover" />
              </motion.div>
            )}
          </div>
        )}

        {/* Layout 2: Zigzag pattern with text overlay */}
        {layoutType === 1 && (
          <div className="mb-16 space-y-8">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="md:col-span-3 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <img src={treatment.images[0]} alt={treatment.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="md:col-span-2 bg-white rounded-3xl p-8 shadow-xl h-[400px] flex flex-col justify-center"
              >
                <h3 className="text-3xl font-bold text-[var(--primary)] mb-4">Expert Care</h3>
                <p className="text-gray-800 text-lg leading-relaxed">Experience world-class dental treatment with our specialized team and advanced technology.</p>
              </motion.div>
            </div>
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="md:col-span-2 bg-white rounded-3xl p-8 shadow-xl h-[350px] flex flex-col justify-center order-2 md:order-1"
              >
                <h3 className="text-3xl font-bold text-[var(--primary)] mb-4">Your Comfort Matters</h3>
                <p className="text-gray-800 text-lg leading-relaxed">We prioritize your comfort with gentle procedures and a relaxing environment.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="md:col-span-3 relative h-[350px] rounded-3xl overflow-hidden shadow-2xl order-1 md:order-2"
              >
                <img src={treatment.images[1]} alt={treatment.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent"></div>
              </motion.div>
            </div>
            {treatment.images[2] && treatment.images[3] && (
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="h-[250px] rounded-2xl overflow-hidden shadow-lg"
                >
                  <img src={treatment.images[2]} alt={treatment.title} className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="h-[250px] rounded-2xl overflow-hidden shadow-lg"
                >
                  <img src={treatment.images[3]} alt={treatment.title} className="w-full h-full object-cover" />
                </motion.div>
              </div>
            )}
          </div>
        )}

        {/* Layout 3: Circular frame with floating cards */}
        {layoutType === 2 && (
          <div className="relative mb-16 py-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-300 rounded-full blur-3xl opacity-20"></div>
                <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-[#f5f0eb]">
                  <img src={treatment.images[0]} alt={treatment.title} className="w-full h-full object-cover" />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border-2 border-[var(--primary)]"
                >
                  <p className="text-[var(--primary)] font-bold text-lg">Trusted by 8000+</p>
                  <p className="text-gray-800">Happy Patients</p>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-xl">
                  <img src={treatment.images[1]} alt={treatment.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-2">Advanced Technology</h3>
                      <p>State-of-the-art equipment for precise treatment</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {treatment.images[2] && (
                    <div className="h-32 rounded-2xl overflow-hidden shadow-lg">
                      <img src={treatment.images[2]} alt={treatment.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  {treatment.images[3] && (
                    <div className="h-32 rounded-2xl overflow-hidden shadow-lg">
                      <img src={treatment.images[3]} alt={treatment.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* Introduction Section - Different for each layout */}
        {layoutType === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-10 mb-12"
          >
            <h2 className="text-3xl font-semibold text-[var(--primary)] mb-6">Introduction</h2>
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <p className="text-gray-800 leading-relaxed text-lg mb-6">{treatment.introduction}</p>
                {treatment.description && (
                  <p className="text-gray-800 leading-relaxed text-lg">{treatment.description}</p>
                )}
              </div>
              <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
                <img src={treatment.images[treatment.images.length - 1]} alt={treatment.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        )}

        {layoutType === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-10 mb-12"
          >
            <h2 className="text-3xl font-semibold text-[var(--primary)] mb-6">Introduction</h2>
            <p className="text-gray-800 leading-relaxed text-lg mb-6">{treatment.introduction}</p>
            {treatment.description && (
              <p className="text-gray-800 leading-relaxed text-lg">{treatment.description}</p>
            )}
          </motion.div>
        )}

        {layoutType === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-10 mb-12"
          >
            <h2 className="text-3xl font-semibold text-[var(--primary)] mb-6">Introduction</h2>
            <p className="text-gray-800 leading-relaxed text-lg mb-6">{treatment.introduction}</p>
            {treatment.description && (
              <p className="text-gray-800 leading-relaxed text-lg">{treatment.description}</p>
            )}
          </motion.div>
        )}

        {/* Candidates Section - Different for each layout */}
        {treatment.candidates && layoutType === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white border-2 border-[var(--primary)] rounded-3xl p-10 mb-12"
          >
            <h2 className="text-3xl font-semibold text-[var(--primary)] mb-6">Who are the candidates for {treatment.title} treatment?</h2>
            <p className="text-gray-800 leading-relaxed text-lg">{treatment.candidates}</p>
          </motion.div>
        )}

        {treatment.candidates && layoutType === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="h-96 rounded-3xl overflow-hidden shadow-2xl order-2 md:order-1">
                <img src={treatment.images[treatment.images.length - 2] || treatment.images[0]} alt={treatment.title} className="w-full h-full object-cover" />
              </div>
              <div className="bg-white border-2 border-[var(--primary)] rounded-3xl p-10 order-1 md:order-2">
                <h2 className="text-3xl font-semibold text-[var(--primary)] mb-6">Who are the candidates for {treatment.title} treatment?</h2>
                <p className="text-gray-800 leading-relaxed text-lg">{treatment.candidates}</p>
              </div>
            </div>
          </motion.div>
        )}

        {treatment.candidates && layoutType === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white border-2 border-[var(--primary)] rounded-3xl p-10 mb-12"
          >
            <h2 className="text-3xl font-semibold text-[var(--primary)] mb-6">Who are the candidates for {treatment.title} treatment?</h2>
            <p className="text-gray-800 leading-relaxed text-lg">{treatment.candidates}</p>
          </motion.div>
        )}

        {treatment.procedure && treatment.procedure.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12 bg-gray-50 py-16 -mx-6 px-6"
          >
            <h2 className="text-4xl font-bold text-[var(--primary)] mb-12 text-center">Treatment Procedure</h2>
            <div className="max-w-6xl mx-auto relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[var(--primary)] via-[#b49268] to-[var(--primary)] hidden md:block"></div>
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
                          className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all"
                        >
                          <p className="text-gray-800 leading-relaxed text-lg">{step}</p>
                        </motion.div>
                      </div>
                      <motion.div 
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3, type: 'spring', stiffness: 200 }}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[#9a7a5c] text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-2xl z-10 hidden md:flex border-4 border-white"
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
                        className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[#9a7a5c] text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-2xl z-10 hidden md:flex border-4 border-white"
                      >
                        {index + 1}
                      </motion.div>
                      <div className="w-full md:w-[calc(50%-40px)]">
                        <motion.div 
                          whileHover={{ scale: 1.03, y: -5 }}
                          className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all"
                        >
                          <p className="text-gray-800 leading-relaxed text-lg">{step}</p>
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold text-[var(--primary)] mb-8 text-center">Key Benefits</h2>
            
            {/* Benefits Layout 1: Card grid with icons */}
            {layoutType === 0 && (
              <div className="grid md:grid-cols-3 gap-6">
                {treatment.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all"
                  >
                    <div className="w-14 h-14 bg-[var(--primary)] rounded-2xl flex items-center justify-center mb-4">
                      <FaCheckCircle className="text-white text-2xl" />
                    </div>
                    <p className="text-gray-800 leading-relaxed">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Benefits Layout 2: Bento box style */}
            {layoutType === 1 && (
              <div className="grid md:grid-cols-4 gap-6">
                {treatment.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all ${
                      index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''
                    }`}
                  >
                    <div className="flex flex-col h-full">
                      <div className="w-14 h-14 bg-[var(--primary)] rounded-2xl flex items-center justify-center mb-4">
                        <FaCheckCircle className="text-white text-2xl" />
                      </div>
                      <p className="text-gray-800 leading-relaxed flex-1">{benefit}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Benefits Layout 3: Grid with side images */}
            {layoutType === 2 && (
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
                  {treatment.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.03 }}
                      className="bg-white border-2 border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-[var(--primary)] rounded-lg flex items-center justify-center">
                          <FaCheckCircle className="text-white text-lg" />
                        </div>
                        <p className="text-gray-800 leading-relaxed flex-1">{benefit}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="h-64 rounded-2xl overflow-hidden shadow-xl"
                  >
                    <img src={treatment.images[treatment.images.length - 1]} alt={treatment.title} className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="h-64 rounded-2xl overflow-hidden shadow-xl"
                  >
                    <img src={treatment.images[treatment.images.length - 2] || treatment.images[0]} alt={treatment.title} className="w-full h-full object-cover" />
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Why Choose Us - Different for each layout */}
        {layoutType === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-10 mb-12"
          >
            <h2 className="text-3xl font-semibold text-[var(--primary)] mb-8 text-center">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg"
                >
                  <FaTooth className="text-[var(--primary)] text-4xl mx-auto mb-4" />
                  <h3 className="text-[var(--primary)] font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-800 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {layoutType === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold text-[var(--primary)] mb-8 text-center">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-xl flex items-start gap-6 hover:shadow-2xl transition-shadow"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-[var(--primary)] rounded-2xl flex items-center justify-center">
                    <FaTooth className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-[var(--primary)] font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-gray-800">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {layoutType === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold text-[var(--primary)] mb-8 text-center">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {whyChooseUs.slice(0, 2).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-gray-200"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-[var(--primary)] rounded-lg flex items-center justify-center">
                        <FaTooth className="text-white text-xl" />
                      </div>
                      <h3 className="text-[var(--primary)] font-bold text-xl">{item.title}</h3>
                    </div>
                    <p className="text-gray-800 pl-16">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-6">
                {whyChooseUs.slice(2).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: -10 }}
                    className="bg-white rounded-2xl p-8 shadow-xl border-r-4 border-gray-200"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-[var(--primary)] rounded-lg flex items-center justify-center">
                        <FaTooth className="text-white text-xl" />
                      </div>
                      <h3 className="text-[var(--primary)] font-bold text-xl">{item.title}</h3>
                    </div>
                    <p className="text-gray-800 pl-16">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[var(--primary)] text-white rounded-3xl p-12 text-center shadow-2xl"
        >
          <h3 className="text-3xl font-semibold mb-4">Ready to Get Started?</h3>
          <p className="mb-8 text-lg">Book your appointment today and let us take care of your smile</p>
          <a 
            href="tel:+919876543210"
            className="inline-block bg-white text-[var(--primary)] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Call Now: +91 98765 43210
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default TreatmentDetail;
