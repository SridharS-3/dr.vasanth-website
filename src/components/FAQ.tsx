import { motion } from 'framer-motion';
import { colors } from '../colors';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import faqImage from '../assets/faq.jpg';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How often should I visit the dentist?',
      answer: 'We recommend visiting the dentist every 6 months for routine checkups and cleanings. However, some patients may need more frequent visits depending on their oral health needs.'
    },
    {
      question: 'What should I do in a dental emergency?',
      answer: 'For dental emergencies such as severe pain, broken teeth, or knocked-out teeth, contact us immediately. We provide emergency dental services and will see you as soon as possible to address the issue.'
    },
    {
      question: 'Do you offer services for kids?',
      answer: 'Yes! We offer comprehensive pediatric dentistry services in a fun, child-friendly environment. We recommend bringing your child for their first dental visit by their first birthday or when their first tooth appears.'
    },
    {
      question: 'What are my options for replacing missing teeth?',
      answer: 'We offer several options including dental implants, bridges, and dentures. Dental implants are the gold standard for tooth replacement, providing a permanent solution that looks and functions like natural teeth.'
    },
    {
      question: 'Is teeth whitening safe?',
      answer: 'Yes, professional teeth whitening is safe when performed by our experienced dental team. We use advanced whitening technology that effectively removes stains while protecting your tooth enamel.'
    }
  ];

  return (
    <section id="faq" className="bg-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full">
              <img 
                src={faqImage} 
                alt="Dental care" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[var(--primary)] uppercase tracking-wider text-sm font-semibold mb-4">Everything You Need To Know</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--tertiary)] mb-8">
              Frequently Asked<br />Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#f5f0eb] transition-colors"
                  >
                    <span className="text-gray-800 font-medium">{faq.question}</span>
                    <motion.span
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[var(--primary)] flex-shrink-0 ml-4"
                    >
                      <FaChevronDown />
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-800 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
