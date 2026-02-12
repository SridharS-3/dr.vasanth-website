import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import doctorImage from '../assets/doctor-1.jpg';

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
      name: 'Dr. B. Keerthika BDS',
      role: 'Dental Surgeon',
      image: doctorImage
    },
    {
      name: 'Dr. B.Mehjabeen BDS.',
      role: 'General Dentist',
      image: doctorImage
    },
    {
      name: 'Dr. Basil M Mathew BDS, MDS',
      role: 'Pediatric Dentist',
      image: doctorImage
    },
    {
      name: 'Prof. Dr. J Sathiya Jeeva. BDS, MDS, PhD',
      role: 'Implantologist',
      image: doctorImage
    },
    {
      name: 'Dr. Adhavan Balaji. K L M - B.D.S. M.D.S. F.C.C.C',
      role: 'Endodontist and Aesthetic Dental Specialist.',
      image: doctorImage
    }
  ];

  const stats = [
    { number: 8000, suffix: '+', label: 'Happy Patients' },
    { number: 2500, suffix: '+', label: 'Teeth Whitened' },
    { number: 800, suffix: '+', label: 'Dental Implants' },
    { number: 25, suffix: '+', label: 'Years of Experience' }
  ];

  return (
    <section id="team" className="bg-[#f5f0eb] px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#d4a574] mb-4">Meet Our Dental Team</p>
          <h2 className="text-4xl md:text-5xl font-light text-[#b8956a] mb-4">Committed to Your Smile</h2>
          <p className="text-[#8b7355] max-w-2xl mx-auto">
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
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="h-64 bg-gradient-to-b from-[#d4a574]/20 to-transparent relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0ic3RyaXBlcyIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Q0YTU3NCIgb3BhY2l0eT0iMC4zIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3N0cmlwZXMpIi8+PC9zdmc+')] opacity-30"></div>
                <img src={member.image} alt={member.name} className="w-full h-full object-cover relative z-10" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-[#b8956a] font-semibold mb-2">{member.name}</h3>
                <p className="text-[#8b7355] text-sm">{member.role}</p>
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
              <h3 className="text-4xl md:text-5xl font-light text-[#8b7355] mb-2">
                <Counter value={stat.number} suffix={stat.suffix} />
              </h3>
              <p className="text-[#8b7355]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
