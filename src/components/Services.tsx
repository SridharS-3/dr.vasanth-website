import { motion } from 'framer-motion';
import { useState } from 'react';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: 'Oral Surgery',
      description: 'Simple extractions to tricky wisdom teeth removal, dental implants, and jaw surgeries—our oral surgery care provide the best care for all your oral surgery needs.',
      fullText: 'Our oral surgery services include wisdom teeth extraction, dental implants, jaw surgery, and complex tooth extractions. We use advanced techniques and sedation options to ensure your comfort throughout the procedure. Our experienced oral surgeons are dedicated to providing safe, effective treatment with minimal recovery time.'
    },
    {
      title: 'General & Family Dentistry',
      description: 'Our experienced dentists provide high-quality care in a friendly environment. We make scheduling simple, like. Book appointments for your whole family at once. Get in, get out, and get on with your lives.',
      fullText: 'We offer comprehensive family dental care including routine checkups, cleanings, fillings, and preventive care for all ages. Our family-friendly approach ensures everyone from children to seniors receives personalized attention and quality treatment in a comfortable setting.'
    },
    {
      title: 'Full Mouth Reconstruction',
      description: 'Rebuilding and replacing all your teeth sounds intimidating, right? Well, it doesn\'t have to be! That\'s where full mouth reconstruction comes in. This process gives you the ultimate smile makeover.',
      fullText: 'Full mouth reconstruction combines multiple dental procedures to restore function and aesthetics. This may include dental implants, crowns, bridges, veneers, and orthodontics. We create a customized treatment plan to rebuild your smile and improve your oral health comprehensively.'
    },
    {
      title: 'Dental Emergencies',
      description: 'Maybe you\'ve all seen if you have a dental emergency — sometimes things happen that aren\'t normal. We recommend you seek professional help whenever you feel uncomfortable or if you experience an unusual sensation in your mouth.',
      fullText: 'We provide immediate care for dental emergencies including severe toothaches, broken teeth, knocked-out teeth, and oral injuries. Our emergency services are available to address urgent dental issues promptly and effectively, minimizing pain and preventing further complications.'
    },
    {
      title: 'Comprehensive Dental Examination',
      description: 'All new patients will receive a comprehensive oral examination from in their first treatment. Our dentists will check your mouth\'s Gum Disease, tooth decay, oral diseases, Head and Neck evaluations.',
      fullText: 'Our thorough examination includes digital X-rays, oral cancer screening, gum disease assessment, bite analysis, and TMJ evaluation. We use advanced diagnostic tools to detect issues early and create personalized treatment plans for optimal oral health.'
    },
    {
      title: 'Fillings, Crowns, & Bridges',
      description: 'We offer a full range of restorative services from fillings, veneers, inlays, on lays, dental jewels, precious metal crowns. Our team of dentists can help smile artists repair your damaged or missing teeth and get your smile back today.',
      fullText: 'Our restorative dentistry services restore damaged or missing teeth using high-quality materials. We offer tooth-colored fillings, porcelain crowns, and custom bridges that blend seamlessly with your natural teeth, providing both function and aesthetics.'
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Leave our office with the smile you\'ve always wanted. Whether it\'s procedures like veneers, contouring, or even whitening, our cosmetic experts have you covered. The goal is to enhance the aesthetic appeal of the teeth and create a more pleasing and confident smile.',
      fullText: 'Transform your smile with our cosmetic dentistry services including teeth whitening, porcelain veneers, smile makeovers, and tooth contouring. We combine artistry with advanced techniques to create beautiful, natural-looking results that boost your confidence.'
    },
    {
      title: 'Dental Implants',
      description: 'Dental implants made simple if you\'ve lost a tooth, schedule an implant consult as Infinite Dental care center. We use the latest technological fusions the beauty of your teeth, gums, and jaw bone Discuss options for replacing missing teeth.',
      fullText: 'Dental implants are the gold standard for tooth replacement. Our implant services include single tooth implants, multiple implants, and implant-supported dentures. Using advanced technology, we ensure precise placement and long-lasting results that look and function like natural teeth.'
    },
    {
      title: 'Laser dentistry',
      description: 'Laser is coherent in modern dentistry, starts with teeth whitening, bacterial killing, root canal disinfection to surgical cutting without blood loss. Laser is useful and more convenient method for comfort for patients compared to conventional treatment.',
      fullText: 'Our laser dentistry technology offers minimally invasive treatments with faster healing times. We use lasers for gum reshaping, cavity treatment, teeth whitening, and soft tissue procedures. Laser treatments are often more comfortable, require less anesthesia, and promote quicker recovery.'
    },
    {
      title: 'Preventive Cleaning',
      description: 'We advise patients to undergo preventive cleaning once in 6 months based on their oral hygiene status. It offers for patient to present and it is an essential part of maintaining good oral health. Regular visits to your dentist, along with consistent oral hygiene practices at home is necessary for healthy and vanity.',
      fullText: 'Professional dental cleanings remove plaque and tartar buildup that regular brushing can\'t reach. Our hygienists provide thorough cleanings, fluoride treatments, and personalized oral hygiene instructions to help you maintain optimal dental health between visits.'
    },
    {
      title: 'Root canal treatment',
      description: 'We get it. Nobody likes the idea of possibly needing a root canal. But here\'s what our dentists want you to know: if you have a really bad toothache caused by bacteria deep inside your tooth, root canal therapy can save your tooth and very necessary treatment for many people.',
      fullText: 'Root canal therapy saves infected or damaged teeth by removing the infected pulp, cleaning the canal, and sealing it. Using modern techniques and anesthesia, we make the procedure comfortable and pain-free. Root canals allow you to keep your natural tooth and avoid extraction.'
    },
    {
      title: 'Children Dentistry',
      description: 'Children\'s dentistry plays a vital role in promoting lifelong oral health and establishing positive dental experiences for children. Regular dental visits and early intervention can help prevent dental issues. Your child should see a dentist by their first birthday or when their first tooth appears, whichever comes first. Our first dental appointments are quick, gentle, and designed to be a positive experience.',
      fullText: 'Our pediatric dentistry services create positive dental experiences for children. We provide gentle care including cleanings, fluoride treatments, sealants, and cavity treatment in a fun, child-friendly environment. Early dental visits help establish good oral hygiene habits and prevent future dental problems.'
    }
  ];

  return (
    <section id="services" className="bg-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#d4a574] mb-4">Our Services</h2>
          <p className="text-[#8b7355] max-w-3xl mx-auto">
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
              <div className="w-12 h-12 bg-[#d4a574] rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🦷</span>
              </div>
              <h3 className="text-xl font-semibold text-[#8b7355] mb-3">{service.title}</h3>
              <p className="text-[#8b7355] text-sm leading-relaxed mb-4">{service.description}</p>
              
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
                className="h-10 border-2 border-[#b8956a] rounded-full flex items-center text-[#b8956a] hover:bg-[#b8956a] hover:text-white transition-colors overflow-hidden relative"
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
