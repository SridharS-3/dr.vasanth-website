import { motion } from 'framer-motion';
import { colors } from '../colors';
import { FaClock, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white pt-14 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-[var(--primary)] uppercase tracking-wider text-sm font-semibold mb-4">Get In Touch With Salem's Preferred Dental Experts</p>
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--secondary)] mb-6">
            We Are Always Ready to Help<br />You and Answer Your Questions
          </h1>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-[var(--bg-light)] rounded-3xl p-8 shadow-lg border-2 border-[var(--border)]">
              <FaClock className="text-[var(--primary)] text-3xl mb-4" />
              <h3 className="text-xl font-bold text-[var(--secondary)] mb-3">We're Open</h3>
              <p className="text-gray-700">Monday – Friday</p>
              <p className="text-gray-700 font-semibold">09.00 Am – 8.30 Pm</p>
            </div>

            <div className="bg-[var(--bg-light)] rounded-3xl p-8 shadow-lg border-2 border-[var(--border)]">
              <FaPhoneAlt className="text-[var(--primary)] text-3xl mb-4" />
              <h3 className="text-xl font-bold text-[var(--secondary)] mb-3">Call Us Directly</h3>
              <a href="tel:+919087669000" className="block hover:text-[var(--primary)] mb-1 font-medium text-gray-700">+91-9087669000</a>
              <a href="tel:+919514229000" className="block hover:text-[var(--primary)] font-medium text-gray-700">+91-9514229000</a>
            </div>

            <div className="bg-[var(--bg-light)] rounded-3xl p-8 shadow-lg border-2 border-[var(--border)]">
              <FaMapMarkerAlt className="text-[var(--primary)] text-3xl mb-4" />
              <h3 className="text-xl font-bold text-[var(--secondary)] mb-3">Clinic Location</h3>
              <p className="text-gray-700 leading-relaxed">
                No 17/3A6B, Alagapuram village,<br />
                Junction Main Road, State Bank<br />
                Colony, Salem – 636004,<br />
                Tamil Nadu, India.
              </p>
            </div>

            <div className="bg-[var(--bg-light)] rounded-3xl p-8 shadow-lg border-2 border-[var(--border)]">
              <FaEnvelope className="text-[var(--primary)] text-3xl mb-4" />
              <h3 className="text-xl font-bold text-[var(--secondary)] mb-3">Send a Message</h3>
              <a href="mailto:dentalclip.dentalclinic@gmail.com" className="text-gray-700 hover:text-[var(--primary)] break-all font-medium">
                dentalclip.dentalclinic@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl p-10 shadow-lg border-2 border-[var(--border)]">
              <h2 className="text-3xl font-bold text-[var(--secondary)] mb-4">Get In Touch</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At <span className="font-semibold text-[var(--primary)]">Dental Clip. Dental Clinic</span>, your comfort and convenience come first. Whether you have a question about a specific treatment, a suggestion for our team, or you are ready to book your consultation, we are here for you.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Simply fill out the form below with your details, and our patient coordinator will get back to you shortly. For immediate assistance or to schedule an <span className="font-semibold text-[var(--primary)]">emergency dental appointment in Salem</span>, feel free to call us directly.
              </p>

              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-5 py-4 bg-white border-2 border-[var(--border)] rounded-xl focus:outline-none focus:border-[var(--primary)] text-black placeholder-gray-400 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="px-5 py-4 bg-white border-2 border-[var(--border)] rounded-xl focus:outline-none focus:border-[var(--primary)] text-black placeholder-gray-400 transition-colors"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-5 py-4 bg-white border-2 border-[var(--border)] rounded-xl focus:outline-none focus:border-[var(--primary)] text-black placeholder-gray-400 transition-colors"
                />
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-5 py-4 bg-white border-2 border-[var(--border)] rounded-xl focus:outline-none focus:border-[var(--primary)] text-black placeholder-gray-400 resize-none transition-colors"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[var(--primary)] text-white py-4 rounded-xl font-bold text-lg hover:bg-[var(--primary-hover)] transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
