import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaWhatsapp, FaInstagram, FaYoutube, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#f5f0eb]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-10 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#b8956a] rounded"></div>
              <div>
                <div className="text-[#b8956a] font-bold text-xl">IVORY</div>
                <div className="text-[#b8956a] text-xs tracking-widest">DENTISTRY</div>
              </div>
            </div>
            <p className="text-[#8b7355] text-sm mb-6 leading-relaxed">
              We are committed to providing our patients with compassionate and professional dental care of the highest standards in a comfortable and relaxed environment.
            </p>
            <div className="mb-6">
              <p className="text-[#b8956a] font-semibold text-sm mb-2 flex items-center gap-2">
                <FaMapMarkerAlt className="text-base" /> Working hours
              </p>
              <p className="text-[#8b7355] text-sm">Mon – Sat  9:00 AM – 8:30 PM</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-[#b8956a] hover:text-[#8b7355] transition-colors">
                <FaFacebookF className="text-lg" />
              </a>
              <a href="#" className="text-[#b8956a] hover:text-[#8b7355] transition-colors">
                <FaWhatsapp className="text-lg" />
              </a>
              <a href="#" className="text-[#b8956a] hover:text-[#8b7355] transition-colors">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#" className="text-[#b8956a] hover:text-[#8b7355] transition-colors">
                <FaYoutube className="text-lg" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[#b8956a] font-bold text-base mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-[#8b7355] text-sm hover:text-[#b8956a] transition-colors">Home</a></li>
              <li><a href="#about" className="text-[#8b7355] text-sm hover:text-[#b8956a] transition-colors">About Us</a></li>
              <li><a href="#services" className="text-[#8b7355] text-sm hover:text-[#b8956a] transition-colors">Our Services</a></li>
              <li><a href="#team" className="text-[#8b7355] text-sm hover:text-[#b8956a] transition-colors">Our Team</a></li>
              <li><a href="#testimonials" className="text-[#8b7355] text-sm hover:text-[#b8956a] transition-colors">Dental Insights</a></li>
              <li><a href="#footer" className="text-[#8b7355] text-sm hover:text-[#b8956a] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#b8956a] font-bold text-base mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-[#8b7355] text-sm hover:text-[#b8956a] transition-colors">Dental Implants</a></li>
              <li><a href="#services" className="text-[#8b7355] text-sm hover:text-[#b8956a] transition-colors">Cosmetic Dentistry</a></li>
              <li><a href="#services" className="text-[#8b7355] text-sm hover:text-[#b8956a] transition-colors">Dental Crowns</a></li>
              <li><a href="#services" className="text-[#8b7355] text-sm hover:text-[#b8956a] transition-colors">Pediatric Dentistry</a></li>
              <li><a href="#services" className="text-[#8b7355] text-sm hover:text-[#b8956a] transition-colors">Teeth Whitening</a></li>
              <li><a href="#services" className="text-[#8b7355] text-sm hover:text-[#b8956a] transition-colors">Sedation Dentistry</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#b8956a] font-bold text-base mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <p className="text-[#b8956a] font-semibold text-sm mb-2 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-base" /> Clinic Location
                </p>
                <p className="text-[#8b7355] text-sm leading-relaxed">
                  No 17/3A6B, Alagapuram village, Junction Main Road, State Bank Colony, Salem – 636004, Tamil Nadu , India.
                </p>
              </div>
              <div>
                <p className="text-[#b8956a] font-semibold text-sm mb-2 flex items-center gap-2">
                  <FaPhone className="text-base" /> Call Us
                </p>
                <p className="text-[#8b7355] text-sm">+91-9087669000 / +91-9514229000</p>
              </div>
              <div>
                <p className="text-[#b8956a] font-semibold text-sm mb-2 flex items-center gap-2">
                  <FaEnvelope className="text-base" /> Send a Message
                </p>
                <p className="text-[#8b7355] text-sm">ivorydentistry001@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#b8956a] px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-sm">Copyright 2025 – Ivory Dentistry</p>
          <div className="flex gap-6">
            <a href="#" className="text-white text-sm hover:underline">Terms & Conditions</a>
            <a href="#" className="text-white text-sm hover:underline">Privacy Policy</a>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#b8956a] hover:bg-[#f5f0eb] transition-colors shadow-lg"
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
