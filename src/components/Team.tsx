import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { colors } from '../colors';
import { useEffect, useState, useRef } from 'react';
  import { FaTimes } from 'react-icons/fa';
import doctor1 from '../assets/doctor-1.jpg';
import doctor2 from '../assets/doctor-2.jpg';
import doctor3 from '../assets/doctor-3.jpg';
import doctor4 from '../assets/doctor-4.jpg';
import doctor5 from '../assets/doctor-5.jpg';

const Counter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: 'easeOut'
      });

      const unsubscribe = rounded.on('change', (latest) => {
        setDisplayValue(latest);
      });

      return () => {
        controls.stop();
        unsubscribe();
      };
    } else {
      count.set(0);
      setDisplayValue(0);
    }
  }, [isInView, value, count, rounded]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const Team = () => {
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
      role: 'Endodontist and Aesthetic Dental Specialist.',
      image: doctor5,
      bio: 'Dr. Adhavan is an expert in root canal treatments and aesthetic dentistry, combining technical precision with artistic vision for beautiful smiles.',
      specialties: ['Root Canal Treatment', 'Smile Makeovers', 'Aesthetic Dentistry']
    }
  ];

  const stats = [
    { number: 8000, suffix: '+', label: 'Happy Patients' },
    { number: 2500, suffix: '+', label: 'Teeth Whitened' },
    { number: 800, suffix: '+', label: 'Dental Implants' },
    { number: 25, suffix: '+', label: 'Years of Experience' }
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
    <section id="team" className="bg-white px-4 md:px-6 py-12 md:py-20 relative">
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
            <div className="relative">
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
                  <p className="text-[var(--primary)] text-lg mb-6">{team[selectedDoctor].role}</p>
                  <p className="text-gray-800 leading-relaxed mb-6">{team[selectedDoctor].bio}</p>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--primary)] mb-4">Specialties</h3>
                    <div className="space-y-2">
                      {team[selectedDoctor].specialties.map((specialty, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[var(--primary)] rounded-full"></div>
                          <span className="text-gray-800">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 bg-[var(--primary)] text-white px-8 py-3 rounded-full font-semibold"
                  >
                    Book Appointment
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[var(--primary)] uppercase tracking-wider text-sm font-semibold mb-4">Meet Our Dental Team</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--secondary)] mb-4">Committed to Your Smile</h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            Our experienced dental team is here to make every visit positive and personalized.<br />
            With gentle hands and caring hearts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => handleCardClick(index)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              <div className="h-64 bg-gradient-to-b from-[var(--primary)]/20 to-transparent relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0ic3RyaXBlcyIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Q0YTU3NCIgb3BhY2l0eT0iMC4zIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3N0cmlwZXMpIi8+PC9zdmc+')] opacity-30"></div>
                <img src={member.image} alt={member.name} className="w-full h-full object-cover relative z-10" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-[var(--primary)] font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-800 text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-light text-gray-800 mb-2">
                <Counter value={stat.number} suffix={stat.suffix} />
              </h3>
              <p className="text-gray-800">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
