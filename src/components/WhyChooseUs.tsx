import { motion } from 'framer-motion';
import { FaTooth } from 'react-icons/fa';
import whychooseus from '../assets/whychooseus.jpg'

const WhyChooseUs = () => {
  const features = [
    'Enjoy personalized appointments',
    'Specialized dental care',
    'Custom treatment plan and follow-up appointments',
    'Family Dentistry'
  ];

  return (
    <section id="why-choose-us" className=" px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#3d4a5c] mb-6">Why Choose US?</h2>
            <p className="text-[#6b7280] mb-8 leading-relaxed">
              We use latest treatment techniques, procedures & dental materials that enable us to deliver a wide range of options to suit your needs. We use a wide variety of cosmetic dentistry options and treatments to transform your regular smile into a million dollar one. We offer all your treatments in the same place, whichever specialist you may need to see, you will find them available here.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-[#fafafa] p-4 rounded-lg border-l-4 border-[#b49268]"
                >
                  <div className="w-10 h-10 bg-[#fef3e6] rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaTooth className="text-[#b49268] text-xl" />
                  </div>
                  <p className="text-[#3d4a5c] font-medium">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img 
              src={whychooseus}
              alt="Dental implants" 
              className="w-full max-w-md border-gray-900 rounded-lg shadow object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
