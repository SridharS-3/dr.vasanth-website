import { motion } from 'framer-motion';
import { colors } from '../colors';
import { FaCheckCircle } from 'react-icons/fa';
import braces1 from '../assets/Braces-1.jpg';
import braces2 from '../assets/Braces-2.jpeg';

const Braces = () => {
  const braceTypes = [
    {
      title: 'Metal Braces',
      description: 'Traditional and most effective option for complex cases',
      features: ['Durable', 'Cost-effective', 'Highly effective']
    },
    {
      title: 'Ceramic Braces',
      description: 'Less visible alternative with tooth-colored brackets',
      features: ['Aesthetic', 'Effective', 'Comfortable']
    },
    {
      title: 'Invisible Aligners',
      description: 'Clear, removable aligners for discreet treatment',
      features: ['Nearly invisible', 'Removable', 'Comfortable']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--secondary)] mb-4">
            Orthodontic Braces
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your smile with our advanced orthodontic solutions designed for all ages
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {braceTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-3">{type.title}</h3>
              <p className="text-gray-600 mb-6">{type.description}</p>
              <ul className="space-y-3">
                {type.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <FaCheckCircle className="text-[var(--primary)] flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="relative mb-16">
          <div className="grid md:grid-cols-5 gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-3 h-[450px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src={braces1} 
                alt="Orthodontic Braces" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-2 h-[450px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src={braces2} 
                alt="Dental Treatment" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-10 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Braces?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-[var(--primary)] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Correct misaligned teeth and improve bite</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-[var(--primary)] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Enhance facial aesthetics and confidence</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-[var(--primary)] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Prevent dental issues and improve oral health</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-[var(--primary)] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Suitable for children, teens, and adults</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Treatment Duration
              </h3>
              <p className="text-gray-700 mb-4">
                Most orthodontic treatments take 12-24 months, depending on the complexity of your case. 
                Regular adjustments every 4-6 weeks ensure optimal progress.
              </p>
              <div className="bg-[var(--primary)] text-white rounded-2xl p-6 mt-6">
                <p className="text-lg font-semibold mb-2">Ready to start your journey?</p>
                <p className="text-sm">Schedule a consultation to discuss the best option for you</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Braces;
