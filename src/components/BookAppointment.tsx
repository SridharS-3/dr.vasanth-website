import { motion } from 'framer-motion';
import { FaClock, FaCalendar } from 'react-icons/fa';
import aboutUsImage from '../assets/aboutus-1.jpg';

const BookAppointment = () => {
  const services = [
    'General Checkup',
    'Teeth Whitening',
    'Dental Implants',
    'Root Canal',
    'Orthodontics',
    'Cosmetic Dentistry',
    'Pediatric Dentistry',
    'Emergency Care'
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
    '06:00 PM', '07:00 PM', '08:00 PM'
  ];

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-24 pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-[#b49268] uppercase tracking-wider text-sm font-semibold mb-4 text-sm font-bold tracking-widest uppercase">Schedule Your Visit</p>
          <h1 className="text-5xl md:text-6xl font-bold text-[#36454F] mb-6">Book Your Appointment</h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Book your appointment today for expert dental care tailored to your needs. Healthy, beautiful smiles start with a simple step, schedule now!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-[#36454F] font-bold mb-2">Select Service</label>
                <select className="w-full px-4 py-3 rounded-xl border-2 border-[#e5e5e5] focus:border-[#b49268] focus:outline-none transition-colors">
                  <option>Select service</option>
                  {services.map((service, i) => (
                    <option key={i}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#36454F] font-bold mb-2">Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#e5e5e5] focus:border-[#b49268] focus:outline-none transition-colors"
                    />
                    <FaCalendar className="absolute right-4 top-1/2 -translate-y-1/2 text-[#b49268] pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-[#36454F] font-bold mb-2">Time</label>
                  <select className="w-full px-4 py-3 rounded-xl border-2 border-[#e5e5e5] focus:border-[#b49268] focus:outline-none transition-colors">
                    <option>Select Time</option>
                    {timeSlots.map((time, i) => (
                      <option key={i}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[#36454F] font-bold mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#e5e5e5] focus:border-[#b49268] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#36454F] font-bold mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#e5e5e5] focus:border-[#b49268] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#36454F] font-bold mb-2">Phone</label>
                  <input
                    type="tel"
                    placeholder="Your phone"
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#e5e5e5] focus:border-[#b49268] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#36454F] font-bold mb-2">Message (Optional)</label>
                <textarea
                  rows={4}
                  placeholder="Any special requirements or concerns..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#e5e5e5] focus:border-[#b49268] focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#b49268] text-white py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                Send Appointment Request
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl relative h-[500px]">
              <img src={aboutUsImage} alt="Dental Care" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <FaClock className="text-[#b49268] text-2xl" />
                  </div>
                  <div className="text-white">
                    <p className="font-bold text-xl mb-1">Opening Hours</p>
                    <p className="text-white/90">Mon to Sat 09:00 AM - 08:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-xl text-center"
              >
                <div className="text-4xl font-bold text-[#b49268] mb-2">8,000+</div>
                <p className="text-gray-700">Happy Patients</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-xl text-center"
              >
                <div className="text-4xl font-bold text-[#b49268] mb-2">4.7</div>
                <p className="text-gray-700">Google Rating</p>
              </motion.div>
            </div>

            <div className="bg-[#fafafa] rounded-3xl p-8 border-2 border-[#e5e5e5]">
              <h3 className="text-2xl font-bold mb-4 text-[#36454F]">Why Choose Us?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-[#b49268]">✓</span>
                  <span>Expert team with 15+ years experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-[#b49268]">✓</span>
                  <span>State-of-the-art equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-[#b49268]">✓</span>
                  <span>Painless and comfortable procedures</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-[#b49268]">✓</span>
                  <span>Flexible appointment scheduling</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
