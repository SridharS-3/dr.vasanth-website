import { motion } from 'framer-motion';

const Hero = () => {
  const doctors = [
    { name: 'Dr. Mehjabeen', degree: 'BDS' },
    { name: 'Dr. B. Keerthika', degree: '' },
    { name: 'Dr. J. Sathiya Jeeva', degree: 'BDS, MDS, PhD' },
    { name: 'Dr. Basil M Mathew', degree: 'BDS, MDS - Pedodontics' }
  ];

  return (
    <section id="hero" className="bg-white min-h-screen px-6 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#b8956a] mb-4"
          >
            Ivory Dentistry
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-light text-[#b8956a] mb-6 leading-tight"
          >
            The Most Trusted Dental Clinic in Salem
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[#8b7355] mb-6"
          >
            Advanced Care. Compassionate Smiles. Quality Dental Care for Your Whole Family.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[#8b7355] mb-8"
          >
            At <span className="font-semibold">Ivory Dentistry</span>, we provide world-class dental solutions tailored to every member of your family. From routine <span className="font-semibold">dental checkups</span> to advanced <span className="font-semibold">laser treatments</span> and <span className="font-semibold">smile makeovers</span>, our expert team in Salem ensures a painless and comfortable experience. We combine state-of-the-art technology with a gentle touch to keep your smile healthy, bright, and confident.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#8b7355] text-white px-8 py-3 rounded-lg hover:bg-[#6d5a43] mb-8 transition-colors"
          >
            Book Appointment
          </motion.button>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-2"
          >
            <span className="text-[#8b7355]">Google Rating</span>
            <span className="font-semibold text-[#8b7355]">4.7</span>
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <motion.span 
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                >
                  ★
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            {doctors.map((doctor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-[#b8956a] rounded-lg p-6 text-white h-64 flex flex-col justify-center cursor-pointer"
              >
                <p className="text-sm mb-2">{doctor.name}</p>
                {doctor.degree && <p className="text-xs">{doctor.degree}</p>}
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="absolute bottom-0 right-0 bg-white rounded-lg shadow-lg p-6 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-[#b8956a] rounded-full flex items-center justify-center text-white text-2xl">
              🕐
            </div>
            <div>
              <p className="font-semibold text-[#8b7355]">Opening Hours</p>
              <p className="text-sm text-[#8b7355]">Mon to Sat 09:00 AM - 08:30 PM</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className="mt-8 bg-white rounded-lg shadow-lg p-6 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-[#b8956a] rounded-full flex items-center justify-center text-white text-2xl">
              📞
            </div>
            <div>
              <p className="font-semibold text-[#8b7355]">Need Dental Services?</p>
              <p className="text-sm text-[#8b7355]">Call: +91-9087669000</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
