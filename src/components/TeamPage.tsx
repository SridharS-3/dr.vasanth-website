import { motion } from 'framer-motion';
import { colors } from '../colors';
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
      name: 'Dr. Vasanthan',
      role: 'Specialist Orthodontist',
      degree: 'B.SC, BDS, MDS, (ortho), PhD,(ortho) DHA (ortho), QCHP (ortho)',
      yearsExperience: '15+ Years',
      image: doctor1,
      bio: 'Dr. Vasanthan is a dedicated orthodontist whose practice is defined by precision, innovation, and an unwavering commitment to lifelong learning. With a patient-centered approach, he transforms smiles through cutting-edge orthodontic solutions.',
      education: 'BDS from Tamil Nadu Dr. MGR Medical University, MDS in Orthodontics from Saveetha University, PhD from Vinayaka Mission\'s Research Foundation University.',
      experience: 'Professor and Head of Department of Orthodontics at Vinayaka Mission Dental College. International licenses: DHA (Dubai) and QCHP (Qatar).',
      specialties: [
        'Advanced clear aligner treatments (Invisalign)',
        'Damon braces and Spark Ormco Aligners',
        'Complex malocclusions and preventive orthodontics',
        'International experience with DHA and QCHP licenses'
      ]
    },
    {
      name: 'Dr. Sabitha Vasanthan',
      role: 'Oral and Maxillofacial Surgeon',
      degree: 'MDS, PhD, MFDS RCPS (Glasg), FDS RCPS (Glasg)',
      yearsExperience: '20+ Years',
      image: doctor2,
      bio: 'Dr. Sabitha is a distinguished dental professional with over two decades of expertise in Oral and Maxillofacial Surgery, and Cosmetic Dentistry.',
      education: 'BDS from Saveetha Dental College & Hospital, MDS in Oral and Maxillofacial Surgery from Tamil Nadu Dr. MGR Medical University, PhD in Dentistry from Vinayaka Mission\'s Research Foundation.',
      experience: 'Over two decades of progressive achievements in Education, Clinical Practice, and Cosmetic dentistry. International credentials: MFDS RCPS(Glasgow) and FDS RCPS(Glasgow) from Royal College of Physicians & Surgeons of Glasgow, UK.',
      specialties: [
        'Oral and Maxillofacial Surgery',
        'Cosmetic Dentistry',
        'Forensic Odontology',
        'International credentials from Royal College of Glasgow'
      ]
    },
    {
      name: 'Dr. Basil M Mathew',
      role: 'Pediatric Dentist',
      degree: 'BDS, MDS',
      yearsExperience: '10+ Years',
      image: doctor3,
      bio: 'Dr. Basil specializes in pediatric dentistry, making dental visits fun and stress-free for children. His gentle approach helps kids develop healthy dental habits.',
      specialties: ['Pediatric Dentistry', 'Child Dental Care', 'Preventive Treatments']
    },
    {
      name: 'Prof. Dr. J Sathiya Jeeva',
      role: 'Implantologist',
      degree: 'BDS, MDS, PhD',
      yearsExperience: '25+ Years',
      image: doctor4,
      bio: 'Prof. Dr. Sathiya Jeeva is a renowned implantologist with extensive experience in dental implants and advanced restorative procedures.',
      specialties: ['Dental Implants', 'Bone Grafting', 'Full Mouth Rehabilitation']
    },
    {
      name: 'Dr. Adhavan Balaji K L M',
      role: 'Endodontist and Aesthetic Dental Specialist',
      degree: 'B.D.S. M.D.S. F.C.C.C',
      yearsExperience: '12+ Years',
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
              <FaTimes className="text-[var(--primary)] text-xl" />
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
                <h2 className="text-4xl font-light text-[var(--primary)] mb-3">{team[selectedDoctor].name}</h2>
                <p className="text-[var(--primary)] text-lg mb-2">{team[selectedDoctor].role}</p>
                {team[selectedDoctor].degree && (
                  <p className="text-gray-600 text-sm mb-6">{team[selectedDoctor].degree}</p>
                )}
                <p className="text-gray-800 leading-relaxed mb-6">{team[selectedDoctor].bio}</p>
                
                {team[selectedDoctor].education && (
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">Education</h3>
                    <p className="text-gray-800 text-sm leading-relaxed">{team[selectedDoctor].education}</p>
                  </div>
                )}
                
                {team[selectedDoctor].experience && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">Experience</h3>
                    <p className="text-gray-800 text-sm leading-relaxed">{team[selectedDoctor].experience}</p>
                  </div>
                )}
                
                <div>
                  <h3 className="text-xl font-semibold text-[var(--primary)] mb-4">Specialties</h3>
                  <div className="space-y-2">
                    {team[selectedDoctor].specialties.map((specialty, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[var(--primary)] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-800 text-sm leading-relaxed">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/book-appointment'}
                  className="mt-8 bg-[var(--primary)] text-white px-8 py-3 rounded-full font-semibold cursor-pointer"
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
          <p className="text-[var(--primary)] uppercase tracking-wider text-sm font-semibold mb-4 text-sm font-bold tracking-widest uppercase">Meet Our Team</p>
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--secondary)] mb-6">Our Expert Dental Professionals</h1>
          <p className="text-gray-800 max-w-2xl mx-auto text-lg">
            Our experienced dental team is here to make every visit positive and personalized with gentle hands and caring hearts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h3 className="text-[var(--primary)] font-bold text-xl mb-2">{member.name}</h3>
                <p className="text-gray-600 text-base font-semibold mb-2">{member.degree}</p>
                <p className="text-gray-800 text-lg font-semibold mb-4">{member.role}</p>
                <button className="mt-4 text-[var(--primary)] font-semibold hover:text-[var(--primary)] transition-colors">
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
