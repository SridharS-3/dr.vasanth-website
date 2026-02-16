import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import doctor1 from '../assets/doctor-1.jpg';
import doctor2 from '../assets/doctor-2.jpg';
import doctor3 from '../assets/doctor-3.jpg';
import doctor4 from '../assets/doctor-4.jpg';
import doctor5 from '../assets/doctor-5.jpg';

const TeamPage = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const team = [
    {
      name: 'Dr. B. Keerthika BDS',
      role: 'Dental Surgeon',
      image: doctor1,
      bio: 'Dr. Keerthika is a highly skilled dental surgeon with expertise in comprehensive oral care. She is dedicated to providing gentle and effective treatments for all dental needs.',
      specialties: ['General Dentistry', 'Oral Surgery', 'Preventive Care']
    },
    {
      name: 'Dr. B.Mehjabeen BDS.',
      role: 'General Dentist',
      image: doctor2,
      bio: 'Dr. Mehjabeen brings compassionate care and expertise to every patient. She specializes in creating comfortable dental experiences for patients of all ages.',
      specialties: ['Family Dentistry', 'Cosmetic Procedures', 'Dental Checkups']
    },
    {
      name: 'Dr. Basil M Mathew BDS, MDS',
      role: 'Pediatric Dentist',
      image: doctor3,
      bio: 'Dr. Basil specializes in pediatric dentistry, making dental visits fun and stress-free for children. His gentle approach helps kids develop healthy dental habits.',
      specialties: ['Pediatric Dentistry', 'Child Dental Care', 'Preventive Treatments']
    },
    {
      name: 'Prof. Dr. J Sathiya Jeeva. BDS, MDS, PhD',
      role: 'Implantologist',
      image: doctor4,
      bio: 'Prof. Dr. Sathiya Jeeva is a renowned implantologist with extensive experience in dental implants and advanced restorative procedures.',
      specialties: ['Dental Implants', 'Bone Grafting', 'Full Mouth Rehabilitation']
    },
    {
      name: 'Dr. Adhavan Balaji. K L M - B.D.S. M.D.S. F.C.C.C',
      role: 'Endodontist and Aesthetic Dental Specialist',
      image: doctor5,
      bio: 'Dr. Adhavan is an expert in root canal treatments and aesthetic dentistry, combining technical precision with artistic vision for beautiful smiles.',
      specialties: ['Root Canal Treatment', 'Smile Makeovers', 'Aesthetic Dentistry']
    }
  ];

  const handleCardClick = (index: number) => {
    setScrollPosition(window.scrollY);
    setSelectedDoctor(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClose = () => {
    setSelectedDoctor(null);
    setTimeout(() => {
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      {/* Doctor Details Modal */}
      {selectedDoctor !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center overflow-y-auto pt-10 pb-10"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            className="bg-white rounded-3xl max-w-4xl w-full mx-4 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <FaTimes className="text-[#b49268] text-xl" />
            </button>
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div>
                <div className="rounded-3xl overflow-hidden shadow-xl mb-6">
                  <img
                    src={team[selectedDoctor].image}
                    alt={team[selectedDoctor].name}
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-light text-[#b49268] mb-3">{team[selectedDoctor].name}</h2>
                <p className="text-[#b49268] text-lg mb-6">{team[selectedDoctor].role}</p>
                <p className="text-gray-800 leading-relaxed mb-6">{team[selectedDoctor].bio}</p>
                <div>
                  <h3 className="text-xl font-semibold text-[#b49268] mb-4">Specialties</h3>
                  <div className="space-y-2">
                    {team[selectedDoctor].specialties.map((specialty, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#b49268] rounded-full"></div>
                        <span className="text-gray-800">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/book-appointment'}
                  className="mt-8 bg-[#b49268] text-white px-8 py-3 rounded-full font-semibold cursor-pointer"
                >
                  Book Appointment
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-[#b49268] uppercase tracking-wider text-sm font-semibold mb-4 text-sm font-bold tracking-widest uppercase">Meet Our Team</p>
          <h1 className="text-5xl md:text-6xl font-bold text-[#36454F] mb-6">Our Expert Dental Professionals</h1>
          <p className="text-gray-800 max-w-2xl mx-auto text-lg">
            Our experienced dental team is here to make every visit positive and personalized with gentle hands and caring hearts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => handleCardClick(index)}
              className="bg-white rounded-3xl overflow-hidden shadow-xl cursor-pointer group"
            >
              <div className="h-80 overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-[#b49268] font-bold text-xl mb-2">{member.name}</h3>
                <p className="text-gray-800">{member.role}</p>
                <button className="mt-4 text-[#b49268] font-semibold hover:text-[#b49268] transition-colors">
                  View Details →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
