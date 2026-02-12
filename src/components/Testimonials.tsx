import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaUser, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const testimonials = [
    {
      name: 'Karthika',
      role: 'Patient',
      text: 'Hi extracted from Ivory dentistry.It was vry good rience pain at any stage doctor work was clean.I ommend this clinic to my frds.'
    },
    {
      name: 'Senthil Raja',
      role: 'Patient',
      text: 'I am very Happy with the well experienced dental surgery Doctor. First of all, the clinic is very nice and modern, not like the other I had when I was a child. The Doctors are friendly, always explains what is going on in the mouth, as well as what are all the options to fix it. Quality treatment with quick recovery of dental issues. Clinic staff are very polite and kind with patients. Appointment system is effectively implemented and not much waiting time. Thanks to all the dental staff.'
    },
    {
      name: 'Santhosh J',
      role: 'Patient',
      text: 'Ivory Dental Clinic offers exceptional dental care with a highly professional and friendly team. The clinic is well-maintained, and appointments are efficiently managed. My wife had a very comfortable experience, and the treatment was thorough and effective. Highly recommended for anyone seeking quality dental services in Salem.'
    },
    {
      name: 'Shiva',
      role: 'Patient',
      text: 'My recent visit to Ivory Dental Hospital was an amazing experience. The hospital has hygienic, comfortable facilities and up-to-date technologies.I was put at ease as soon as I came in by the friendly and extremely professional staff. The doctors and staff were professional.He took the time to go over my treatment options and answer all of my questions. The clinic is highly convenient because it provides a variety of dental services under one roof, such as orthodontics, cosmetic operations, and general dentistry. The post-treatment care was similarly remarkable, and the team makes sure the patient is well taken care of.I felt secure and pleased with my care when I left the hospital.'
    },
    {
      name: 'Krishna Prakash',
      role: 'Patient',
      text: 'I had good experience at this clinic for my root canal treatment. The doctors and staff were professional,friendly and took me through out the process. The ambience was good.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="bg-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#d4a574] mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-light text-[#b8956a] mb-4">Our Happy Customers</h2>
          <p className="text-[#8b7355] max-w-2xl mx-auto">
            Join thousands of happy patients who trust us for gentle, expert care and beautiful smiles. Your perfect dental experience starts here!
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div 
            key={currentIndex}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[0, 1, 2, 3].map((offset) => {
              const index = (currentIndex + offset) % testimonials.length;
              const testimonial = testimonials[index];
              const isExpanded = expandedCard === index;
              const truncatedText = testimonial.text.length > 120 
                ? testimonial.text.substring(0, 120) + '...' 
                : testimonial.text;
              
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 min-h-[280px] flex flex-col shadow-md hover:shadow-xl transition-shadow border border-[#d4a574]/10"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4a574] to-[#b8956a] flex items-center justify-center flex-shrink-0">
                      <FaUser className="text-white text-sm" />
                    </div>
                    <div>
                      <h4 className="text-[#b8956a] font-bold text-sm">{testimonial.name}</h4>
                      <p className="text-[#8b7355] text-xs italic">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="relative flex-grow">
                    <div className="absolute -left-2 -top-2 text-[#d4a574] text-6xl font-serif opacity-40">&ldquo;</div>
                    <p className="text-[#6b5d4f] text-sm leading-relaxed relative z-10 pl-6">
                      {isExpanded ? testimonial.text : truncatedText}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-[#d4a574] text-xs" />
                      ))}
                    </div>
                    {testimonial.text.length > 120 && (
                      <button
                        onClick={() => setExpandedCard(isExpanded ? null : index)}
                        className="text-[#b8956a] text-xs font-semibold hover:text-[#8b7355] transition-colors"
                      >
                        {isExpanded ? 'Show less' : 'Read more'}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-[#b8956a] w-8' : 'bg-[#d4a574]/30 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
