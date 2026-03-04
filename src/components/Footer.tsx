import { motion } from 'framer-motion';
import { colors } from '../colors';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaWhatsapp, FaInstagram, FaYoutube, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="bg-[var(--bg-light)] border-t-2 border-[var(--primary)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/dental clip logo.png" alt="Dental Clip Logo" className="w-14 h-14 object-contain" />
              <div>
                <div className="text-black font-bold text-2xl">DENTAL CLIP</div>
                <div className="text-[var(--primary)] text-xs tracking-widest font-semibold">DENTAL CLINIC</div>
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-6 leading-relaxed">
              We are committed to providing our patients with compassionate and professional dental care of the highest standards in a comfortable and relaxed environment.
            </p>
            <div className="mb-6">
              <p className="text-[var(--secondary)]font-bold text-sm mb-3 flex items-center gap-2">
                <FaMapMarkerAlt className="text-[var(--primary)] text-lg" /> Working hours
              </p>
              <p className="text-gray-700 text-sm font-medium">Mon – Sat  9:00 AM – 8:30 PM</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border-2 border-[var(--primary)] flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all">
                <FaFacebookF className="text-base" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border-2 border-[var(--primary)] flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all">
                <FaWhatsapp className="text-base" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border-2 border-[var(--primary)] flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all">
                <FaInstagram className="text-base" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border-2 border-[var(--primary)] flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all">
                <FaYoutube className="text-base" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[var(--secondary)] font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-gray-700 text-sm hover:text-[var(--primary)] transition-colors font-medium">Home</a></li>
              <li><a href="#about" className="text-gray-700 text-sm hover:text-[var(--primary)] transition-colors font-medium">About Us</a></li>
              <li><a href="#services" className="text-gray-700 text-sm hover:text-[var(--primary)] transition-colors font-medium">Our Services</a></li>
              <li><a href="#team" className="text-gray-700 text-sm hover:text-[var(--primary)] transition-colors font-medium">Our Team</a></li>
              <li><a href="/gallery" className="text-gray-700 text-sm hover:text-[var(--primary)] transition-colors font-medium">Gallery</a></li>
              <li><a href="#footer" className="text-gray-700 text-sm hover:text-[var(--primary)] transition-colors font-medium">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-[var(--secondary)] font-bold text-lg mb-6">Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              <ul className="space-y-3">
                <li><a href="/treatment/oral-medicine-pathology" className="text-gray-700 text-sm hover:text-[var(--primary)] transition-colors font-medium">Oral Medicine and Pathology</a></li>
                <li><a href="/treatment/restorative-dentistry" className="text-gray-700 text-sm hover:text-[var(--primary)] transition-colors font-medium">Restorative Dentistry</a></li>
                <li><a href="/treatment/endodontics" className="text-gray-700 text-sm hover:text-[var(--primary)] transition-colors font-medium">Endodontics</a></li>
                <li><a href="/treatment/periodontics" className="text-gray-700 text-sm hover:text-[var(--primary)] transition-colors font-medium">Periodontics</a></li>
                <li><a href="/treatment/oral-maxillofacial-surgery" className="text-gray-700 text-sm hover:text-[var(--primary)] transition-colors font-medium">Oral and Maxillofacial Surgery</a></li>
              </ul>
              <ul className="space-y-3">
                <li><a href="/treatment/prosthodontics" className="text-gray-700 text-sm hover:text-[var(--primary)] transition-colors font-medium">Prosthodontics</a></li>
                <li><a href="/treatment/orthodontics" className="text-gray-700 text-sm hover:text-[var(--primary)] transition-colors font-medium">Orthodontics</a></li>
                <li><a href="/treatment/implant-dentistry" className="text-gray-700 text-sm hover:text-[var(--primary)] transition-colors font-medium">Implant Dentistry</a></li>
                <li><a href="/treatment/laser-dentistry" className="text-gray-700 text-sm hover:text-[var(--primary)] transition-colors font-medium">Laser Dentistry</a></li>
                <li><a href="/treatment/pediatric-dentistry" className="text-gray-700 text-sm hover:text-[var(--primary)] transition-colors font-medium">Pediatric Dentistry</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-[var(--secondary)] font-bold text-lg mb-6">Contact Us</h3>
            <div className="space-y-5">
              <div>
                <p className="text-[var(--secondary)] font-bold text-sm mb-2 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[var(--primary)] text-lg" /> Clinic Location
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  First Floor, Latha Rajagopalan Hospital, Old Bypass Road, Paramathi Velur, Namakkal – 638182, Tamil Nadu, India.
                </p>
              </div>
              <div>
                <p className="text-[var(--secondary)] font-bold text-sm mb-2 flex items-center gap-2">
                  <FaPhoneAlt className="text-[var(--primary)] text-lg" /> Call Us
                </p>
                <p className="text-gray-700 text-sm font-medium">+91-9087669000 / +91-9514229000</p>
              </div>
              <div>
                <p className="text-[var(--secondary)] font-bold text-sm mb-2 flex items-center gap-2">
                  <FaEnvelope className="text-[var(--primary)] text-lg" /> Send a Message
                </p>
                <p className="text-gray-700 text-sm font-medium">dentalclip.dentalclinic@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 px-4 md:px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-sm font-medium">Copyright 2025 – Dental Clip. Dental Clinic</p>
          <div className="flex gap-8">
            <a href="#" className="text-white text-sm hover:underline font-medium">Terms & Conditions</a>
            <a href="#" className="text-white text-sm hover:underline font-medium">Privacy Policy</a>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-[var(--primary)] hover:bg-gray-100 transition-colors shadow-lg"
          >
            <FaArrowUp className="text-lg" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
