import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import aboutUsImage from '../assets/aboutus-1.jpg';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white pt-10 md:pt-15 pb-12 md:pb-16">
      {/* Section 1 */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-0 md:py-18">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left  pt-10 md:pt-0"
          >
            <p className="text-[#b49268] mb-3 text-sm font-bold tracking-widest uppercase">About Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#36454F] mb-6 leading-tight">
              Professionals and Personalized Dental Excellence
            </h2>
            <p className="text-gray-800 mb-10 leading-relaxed text-lg">
              We offer high-quality dental care tailored for the whole family. From routine checkups to advanced treatments, our compassionate team ensures your smile stays healthy and confident.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                'Personalized Treatment Plans',
                'State-of-the-Art Technology',
                'Gentle Care for Kids and Adults',
                'Flexible Appointment Scheduling'
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-md"
                >
                  <FaCheckCircle className="text-[#b49268] text-lg mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 text-sm font-medium leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/book-appointment'}
              className="bg-[#b49268] text-white px-12 py-4 rounded-full font-semibold text-lg shadow-2xl cursor-pointer"
            >
              Book Appointment
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px]"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="absolute top-0 right-0 w-[70%] h-[48%] rounded-[3rem] overflow-hidden shadow-2xl z-20"
            >
              <img src={aboutUsImage} alt="Dental care" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="absolute bottom-0 left-0 w-[70%] h-[48%] rounded-[3rem] overflow-hidden shadow-2xl z-10"
            >
              <img src={aboutUsImage} alt="Dental treatment" className="w-full h-full object-cover" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-transparent rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-5"
            >
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`rounded-3xl overflow-hidden shadow-xl ${i === 1 ? 'mt-8' : i === 2 ? '-mt-8' : ''}`}
                >
                  <img src={aboutUsImage} alt="Dental" className="w-full h-56 object-cover" />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <p className="text-[#b49268] mb-3 text-sm font-bold tracking-widest uppercase">Why Choose Our Dental Care</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#36454F] mb-6 leading-tight">
                Exceptional Service With a Personal Touch
              </h2>
              <p className="text-gray-800 mb-10 leading-relaxed text-lg">
                Choosing the right dental provider matters. We combine expert care, advanced technology, and a warm atmosphere to ensure every visit is comfortable, efficient, and tailored to your unique needs.
              </p>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { title: 'Experienced Dental', desc: 'Skilled care backed by years of trusted dental experience.' },
                  { title: 'Advanced Technology', desc: 'Modern tools ensure accurate and efficient treatments.' },
                  { title: 'Personalized Treatment', desc: 'Custom care plans made to fit your smile and lifestyle.' },
                  { title: 'Family-Friendly', desc: 'Welcoming space for kids, teens, adults, and seniors.' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                  >
                    <h3 className="text-[#b49268] font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-800 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
