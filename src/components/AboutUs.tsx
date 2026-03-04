import { motion } from 'framer-motion';
import { colors } from '../colors';
import aboutUsImage1 from '../assets/aboutus-1.jpg';
import aboutUsImage2 from '../assets/Dental banner.jpg';


const AboutUs = () => {
  return (
    <section id="about" className="bg-white px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4 md:space-y-6"
        >
          <motion.img
            whileHover={{ scale: 1.02 }}
            src={aboutUsImage1}
            alt="Dental Clip. Dental Clinic Reception"
            className="w-full rounded-2xl shadow-lg"
          />
          <motion.img
            whileHover={{ scale: 1.02 }}
            src={aboutUsImage2}
            alt="Dental Clip. Dental Clinic Clinic"
            className="w-full rounded-2xl shadow-lg hidden md:block"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[var(--primary)] uppercase tracking-wider text-sm font-semibold mb-4">About Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--secondary)] mb-6 leading-tight">
            Dental Clip – The Best Dental Care in Paramathi Velur
          </h2>
          <p className="text-gray-800 mb-6">
            Our practice is led by <span className="font-semibold">Dr. Vasanthan</span>, an internationally experienced Orthodontist & <span className="font-semibold">Dr. Sabitha</span>, a skilled Oral & Maxillofacial Surgeon. By combining advanced technology, advanced expertise, and a patient-first philosophy, we deliver exceptional results to our patients.
          </p>
          <p className="text-gray-800 mb-6">
            Our team of <span className="font-semibold">highly skilled and experienced dentists in Paramathi Velur</span> is committed to delivering top-quality care using the latest advancements in dental technology. As a premier <span className="font-semibold">multispeciality dental hospital</span>, we take pride in offering a comprehensive range of treatments tailored to your unique needs:
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-gray-800">
              <span className="font-semibold">Advanced Orthodontics:</span> Modern braces and clear aligner solutions.
            </p>
            <p className="text-gray-800">
              <span className="font-semibold">General Dentistry:</span> Painless extractions and routine care for all ages.
            </p>
            <p className="text-gray-800">
              <span className="font-semibold">Cosmetic Dentistry:</span> Professional teeth whitening and smile design.
            </p>
            <p className="text-gray-800">
              <span className="font-semibold">Laser & Implants:</span> Cutting-edge technology for faster healing and permanent results.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/book-appointment'}
            className="bg-[var(--primary)] text-white px-8 py-3 rounded-lg hover:bg-[var(--primary-hover)] transition-colors cursor-pointer"
          >
            Book Appointment
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
