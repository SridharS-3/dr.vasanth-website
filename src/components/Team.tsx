import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
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

  const stats = [
    { number: 8000, suffix: '+', label: 'Happy Patients' },
    { number: 2500, suffix: '+', label: 'Teeth Whitened' },
    { number: 800, suffix: '+', label: 'Dental Implants' },
    { number: 25, suffix: '+', label: 'Years of Experience' }
  ];



  return (
    <section id="team" className="bg-white px-4 md:px-6 py-12 md:py-20 relative">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="h-64 bg-gradient-to-b from-[var(--primary)]/20 to-transparent relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0ic3RyaXBlcyIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Q0YTU3NCIgb3BhY2l0eT0iMC4zIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3N0cmlwZXMpIi8+PC9zdmc+')] opacity-30"></div>
                <img src={member.image} alt={member.name} className="w-full h-full object-cover relative z-10" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-[var(--primary)] font-bold text-lg mb-2">{member.name}</h3>
                <p className="text-gray-600 text-sm font-semibold mb-2">{member.degree}</p>
                <p className="text-gray-800 text-base font-semibold">{member.role}</p>
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
