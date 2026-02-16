import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTooth, FaChild, FaTeethOpen, FaSyringe, FaCrown, FaSmile, FaXRay, FaUserMd, FaStethoscope, FaHome, FaInfoCircle, FaUsers, FaBlog, FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Home', icon: FaHome, href: '/' },
    { name: 'About Us', icon: FaInfoCircle, href: '/about' },
    { name: 'Our Team', icon: FaUsers, href: '/team' },
    { name: 'Dental Insights', icon: FaBlog, href: '/insights' },
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
      className="bg-white px-6 py-4 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-[#b49268] rounded"></div>
          <div>
            <div className="text-[#b49268] font-semibold text-xl">IVORY</div>
            <div className="text-[#b49268] text-xs tracking-wider">DENTISTRY</div>
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
                className={`flex items-center gap-2 transition-colors ${
                  isActive ? 'text-[#b49268]' : 'text-[#36454F] hover:text-[#b49268]'
                }`}
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
              className="cursor-pointer flex items-center gap-2 text-[#36454F] hover:text-[#36454F] transition-colors"
            >
              <FaTooth className="text-md" />
              Services
            </a>
            
            {showServicesDropdown && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl py-2 z-50 border border-[#e5e5e5]"
              >
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={index}
                      to={`/treatment/${service.id}`}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-[#fafafa] transition-colors text-black font-medium text-sm"
                    >
                      <Icon className="text-[#b49268] flex-shrink-0" />
                      <span className='text-[#36454F]'>{service.name}</span>
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
                className={`flex items-center gap-2 transition-colors ${
                  isActive ? 'text-[#b49268]' : 'text-[#36454F] hover:text-[#b49268]'
                }`}
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
          className="hidden md:block bg-[#b49268] text-white px-6 py-2 rounded-lg hover:bg-[#9a7a5c] transition-colors cursor-pointer"
        >
          Book Appointment
        </motion.button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#b49268] text-2xl"
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
            className="md:hidden bg-white rounded-2xl mt-4 overflow-hidden shadow-xl max-h-[80vh] overflow-y-auto"
          >
            <nav className="flex flex-col">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-6 py-4 text-[#b49268] hover:bg-[#fafafa] transition-colors border-b border-[#e5e5e5]"
                  >
                    <Icon />
                    {item.name}
                  </a>
                );
              })}
              
              {/* Services Submenu */}
              <div className="border-b border-[#e5e5e5]">
                <button
                  onClick={() => setShowServicesDropdown(!showServicesDropdown)}
                  className="w-full flex items-center justify-between gap-3 px-6 py-4 text-[#b49268] hover:bg-[#fafafa] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FaTooth />
                    Services
                  </div>
                  <span className={`transition-transform ${showServicesDropdown ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {showServicesDropdown && (
                  <div className="bg-[#fafafa]">
                    {services.map((service, index) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={index}
                          to={`/treatment/${service.id}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 px-10 py-3 text-gray-800 hover:bg-white transition-colors text-sm"
                        >
                          <Icon className="text-[#b49268]" />
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
                  className="w-full bg-[#b49268] text-white py-3 rounded-lg font-semibold"
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
