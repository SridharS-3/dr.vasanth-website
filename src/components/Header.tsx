import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTooth, FaChild, FaTeethOpen, FaSyringe, FaCrown, FaSmile, FaXRay, FaUserMd, FaStethoscope, FaHome, FaInfoCircle, FaUsers, FaBlog, FaPhone } from 'react-icons/fa';

const Header = () => {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const menuItems = [
    { name: 'Home', icon: FaHome, href: '#hero' },
    { name: 'About Us', icon: FaInfoCircle, href: '#about' },
    { name: 'Our Team', icon: FaUsers, href: '#team' },
    { name: 'Dental Insights', icon: FaBlog, href: '#testimonials' },
    { name: 'Contact', icon: FaPhone, href: '#footer' }
  ];

  const services = [
    { name: 'Oral Medicine and Pathology', icon: FaStethoscope, id: 'oral-medicine-pathology' },
    { name: 'Restorative Dentistry', icon: FaTooth, id: 'restorative-dentistry' },
    { name: 'Endodontics', icon: FaSyringe, id: 'endodontics' },
    { name: 'Periodontics', icon: FaTeethOpen, id: 'periodontics' },
    { name: 'Oral and maxilla facial surgery', icon: FaUserMd, id: 'oral-maxillofacial-surgery' },
    { name: 'Prosthodontics', icon: FaCrown, id: 'prosthodontics' },
    { name: 'Orthodontics', icon: FaSmile, id: 'orthodontics' },
    { name: 'Implant Dentistry', icon: FaTooth, id: 'implant-dentistry' },
    { name: 'Laser Dentistry', icon: FaXRay, id: 'laser-dentistry' },
    { name: 'Pediatric Dentistry', icon: FaChild, id: 'pediatric-dentistry' }
  ];
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#f5f0eb] px-6 py-4 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-[#b8956a] rounded"></div>
          <div>
            <div className="text-[#b8956a] font-semibold text-xl">IVORY</div>
            <div className="text-[#b8956a] text-xs tracking-wider">DENTISTRY</div>
          </div>
        </motion.div>
        
        <nav className="hidden md:flex items-center gap-8 text-[#b8956a] font-semibold">
          {menuItems.slice(0, 2).map((item) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1, color: '#8b7355' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex items-center gap-2"
              >
                <Icon className="text-sm" />
                {item.name}
              </motion.a>
            );
          })}
          
          <div 
            className="relative"
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.1, color: '#8b7355' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="cursor-pointer flex items-center gap-2"
            >
              <FaTooth className="text-sm" />
              Services
            </motion.a>
            
            {showServicesDropdown && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl py-2 z-50 border border-[#d4a574]/20"
              >
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={index}
                      to={`/treatment/${service.id}`}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-[#fef9f3] transition-colors text-[#6b5d4f] font-medium text-sm"
                    >
                      <Icon className="text-[#d4a574] flex-shrink-0" />
                      <span>{service.name}</span>
                    </Link>
                  );
                })}
              </motion.div>
            )}
          </div>

          {menuItems.slice(2).map((item) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1, color: '#8b7355' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex items-center gap-2"
              >
                <Icon className="text-sm" />
                {item.name}
              </motion.a>
            );
          })}
        </nav>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#b8956a] text-white px-6 py-2 rounded-lg hover:bg-[#8b7355] transition-colors"
        >
          Book Appointment
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;
