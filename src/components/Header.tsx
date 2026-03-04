import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTooth, FaChild, FaTeethOpen, FaSyringe, FaCrown, FaSmile, FaXRay, FaUserMd, FaStethoscope, FaHome, FaInfoCircle, FaUsers, FaImages, FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import { colors } from '../colors';

const Header = () => {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Home', icon: FaHome, href: '/' },
    { name: 'About Us', icon: FaInfoCircle, href: '/about' },
    { name: 'Our Team', icon: FaUsers, href: '/team' },
    { name: 'Gallery', icon: FaImages, href: '/gallery' },
    { name: 'Contact', icon: FaPhoneAlt, href: '/contact' }
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
      style={{ backgroundColor: colors.white }}
      className="px-6 py-4 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <img src="/dental clip logo.png" alt="Dental Clip Logo" className="w-24 h-24 object-contain" />
          <div className="hidden md:block">
            <div className="font-bold text-xl" style={{ color: colors.primary }}>DENTAL CLIP</div>
            <div className="text-xs tracking-wider font-medium" style={{ color: colors.secondary }}>DENTAL CLINIC</div>
          </div>
        </motion.div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-semibold">
          {menuItems.slice(0, 2).map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                style={{ color: isActive ? colors.primary : colors.secondary }}
                className="flex items-center gap-2 transition-colors hover:opacity-80"
              >
                <Icon className="text-md" />
                {item.name}
              </Link>
            );
          })}
          
          <div 
            className="relative"
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
          >
            <a
              href="#services"
              style={{ color: colors.secondary }}
              className="cursor-pointer flex items-center gap-2 hover:opacity-80 transition-colors"
            >
              <FaTooth className="text-md" />
              Services
            </a>
            
            {showServicesDropdown && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                style={{ backgroundColor: colors.white, borderColor: colors.border }}
                className="absolute top-full left-0 mt-2 w-64 rounded-xl shadow-xl py-2 z-50 border"
              >
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={index}
                      to={`/treatment/${service.id}`}
                      className="flex items-center gap-3 px-4 py-3 transition-colors font-medium text-sm"
                      style={{ color: colors.black }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.background.light}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <Icon style={{ color: colors.primary }} className="flex-shrink-0" />
                      <span style={{ color: colors.secondary }}>{service.name}</span>
                    </Link>
                  );
                })}
              </motion.div>
            )}
          </div>

          {menuItems.slice(2).map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                style={{ color: isActive ? colors.primary : colors.secondary }}
                className="flex items-center gap-2 transition-colors hover:opacity-80"
              >
                <Icon className="text-md" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = '/book-appointment'}
          style={{ backgroundColor: colors.primary, color: colors.white }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.primaryHover}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.primary}
          className="hidden md:block px-6 py-2 rounded-lg transition-colors cursor-pointer"
        >
          Book Appointment
        </motion.button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ color: colors.primary }}
          className="md:hidden text-2xl"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{ backgroundColor: colors.white }}
            className="md:hidden rounded-2xl mt-4 overflow-hidden shadow-xl max-h-[80vh] overflow-y-auto"
          >
            <nav className="flex flex-col">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ color: colors.primary, borderBottomColor: colors.border }}
                    className="flex items-center gap-3 px-6 py-4 transition-colors border-b"
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.background.light}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <Icon />
                    {item.name}
                  </a>
                );
              })}
              
              {/* Services Submenu */}
              <div className="border-b" style={{ borderBottomColor: colors.border }}>
                <button
                  onClick={() => setShowServicesDropdown(!showServicesDropdown)}
                  style={{ color: colors.primary }}
                  className="w-full flex items-center justify-between gap-3 px-6 py-4 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.background.light}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <div className="flex items-center gap-3">
                    <FaTooth />
                    Services
                  </div>
                  <span className={`transition-transform ${showServicesDropdown ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {showServicesDropdown && (
                  <div style={{ backgroundColor: colors.background.light }}>
                    {services.map((service, index) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={index}
                          to={`/treatment/${service.id}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 px-10 py-3 text-gray-800 transition-colors text-sm"
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.white}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                          <Icon style={{ color: colors.primary }} />
                          <span>{service.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="px-6 py-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.location.href = '/book-appointment';
                  }}
                  style={{ backgroundColor: colors.primary, color: colors.white }}
                  className="w-full py-3 rounded-lg font-semibold"
                >
                  Book Appointment
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
