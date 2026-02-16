import { motion } from 'framer-motion';
import { useState } from 'react';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: 'Oral Medicine and Pathology',
      description: 'Oral Medicine Diagnosis pathology & Radiology is the specialty that focuses on the diagnosis and medical management of diseases of the Head and Neck.',
      fullText: 'The Department emphasizes the responsibility of the dentist to see problems affecting the oral region in the context of overall health status. Oral pathology and oral medicine is concerned with the health of the mouth and the diagnosis and management of diseases of the oral region.'
    },
    {
      title: 'Restorative Dentistry',
      description: 'Restorative dentistry focused on restoring the function and appearance of damaged or missing teeth. It involves various treatments and procedures to repair teeth affected by decay, trauma, wear, or other dental issues.',
      fullText: 'Restorative dentistry aims to improve oral health, restore natural tooth structure, and enhance the overall aesthetics of the smile. Common restorative procedures include dental fillings, veneers, crowns.'
    },
    {
      title: 'Endodontics',
      description: 'Endodontics is a branch of dentistry that deals with the diagnosis, prevention, and treatment of diseases and injuries that affect the dental pulp and the surrounding tissues of the tooth.',
      fullText: 'Root canal therapy saves infected or damaged teeth by removing the infected pulp, cleaning the canal, and sealing it. Using modern techniques and anesthesia, we make the procedure comfortable and pain-free.'
    },
    {
      title: 'Periodontics',
      description: 'Periodontics is a specialized branch of dentistry that focuses on the prevention, diagnosis, and treatment of diseases and conditions affecting the supporting structures of the teeth.',
      fullText: 'Our periodontal services include gum disease treatment, scaling and root planing, gum grafting, and dental implant placement. We help maintain healthy gums and prevent tooth loss.'
    },
    {
      title: 'Oral and Maxillofacial Surgery',
      description: 'Oral and Maxillofacial Surgery is a specialized field of dentistry that focuses on the diagnosis and surgical treatment of diseases, injuries, and defects affecting the mouth, jaws, face, and neck.',
      fullText: 'Our oral surgery services include wisdom teeth extraction, dental implants, jaw surgery, and complex tooth extractions. We use advanced techniques and sedation options to ensure your comfort throughout the procedure.'
    },
    {
      title: 'Prosthodontics',
      description: 'Prosthodontics is a specialized branch of dentistry that focuses on the restoration and replacement of missing or damaged teeth and oral structures.',
      fullText: 'We offer comprehensive prosthodontic services including crowns, bridges, dentures, and implant-supported restorations. Our custom solutions restore both function and aesthetics.'
    },
    {
      title: 'Orthodontics',
      description: 'Orthodontics is a specialized branch of dentistry that focuses on the diagnosis, prevention, and treatment of dental and facial irregularities, particularly those related to the alignment of teeth and jaws.',
      fullText: 'Our orthodontic services include traditional braces, clear aligners, and other corrective appliances. We create beautiful, healthy smiles through personalized treatment plans.'
    },
    {
      title: 'Implant Dentistry',
      description: 'Implant dentistry is a specialized field of dentistry that focuses on the placement and restoration of dental implants to replace missing teeth.',
      fullText: 'Dental implants are the gold standard for tooth replacement. Our implant services include single tooth implants, multiple implants, and implant-supported dentures using advanced technology.'
    },
    {
      title: 'Laser Dentistry',
      description: 'Laser dentistry is a modern and innovative approach to dental treatment that utilizes laser technology to perform various dental procedures with precision and minimal discomfort.',
      fullText: 'Our laser dentistry technology offers minimally invasive treatments with faster healing times. We use lasers for gum reshaping, cavity treatment, teeth whitening, and soft tissue procedures.'
    },
    {
      title: 'Pediatric Dentistry',
      description: 'Pediatric dentistry is a specialized branch of dentistry that focuses on the oral health and dental care of infants, children, and adolescents.',
      fullText: 'Our pediatric dentistry services create positive dental experiences for children. We provide gentle care including cleanings, fluoride treatments, sealants, and cavity treatment in a fun, child-friendly environment.'
    }
  ];

  return (
    <section id="services" className="bg-white px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#3d4a5c] mb-4">Our Services</h2>
          <p className="text-gray-800 max-w-3xl mx-auto">
            From general dentistry wellness, to perfecting cosmetic imperfections, to restoring implants and fillings, to those painful oral emergencies—we have you covered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg relative"
            >
              <div className="w-12 h-12 bg-white border-2 border-[#b49268] rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🦷</span>
              </div>
              <h3 className="text-xl font-bold text-[#36454F] mb-3">{service.title}</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-4">{service.description}</p>
              
              <motion.button
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                animate={{
                  width: hoveredCard === index ? '140px' : '40px'
                }}
                transition={{ 
                  duration: 0.5,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                className="h-10 border-2 border-[#b49268] rounded-full flex items-center text-[#b49268] hover:bg-[#b49268] hover:text-white transition-colors overflow-hidden relative"
              >
                <motion.div
                  animate={{
                    x: hoveredCard === index ? 8 : 0
                  }}
                  transition={{ 
                    duration: 0.5,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                  className="absolute left-0 w-9 h-full flex items-center justify-center"
                >
                  <span className="text-lg">+</span>
                </motion.div>
                <motion.span
                  animate={{ 
                    opacity: hoveredCard === index ? 1 : 0,
                    x: hoveredCard === index ? 0 : -25
                  }}
                  transition={{ 
                    duration: 0.5,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                  className="text-sm font-medium whitespace-nowrap ml-12"
                >
                  Read more
                </motion.span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
