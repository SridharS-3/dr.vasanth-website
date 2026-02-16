import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    const count = window.innerWidth < 768 ? 1 : 3;
    for (let i = 0; i < count; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section id="testimonials" className="bg-gradient-to-b from-white to-gray-50 px-4 md:px-6 py-12 md:py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#b49268] uppercase tracking-wider text-sm font-semibold mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#36454F] mb-4">Our Happy Customers</h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            Join thousands of happy patients who trust us for gentle, expert care and beautiful smiles. Your perfect dental experience starts here!
          </p>
        </motion.div>

        <div className="relative px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {getVisibleTestimonials().map((testimonial, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all relative"
                >
                  <div className="absolute -top-4 left-8 w-12 h-12 bg-[#b49268] rounded-full flex items-center justify-center shadow-lg">
                    <FaQuoteLeft className="text-white text-xl" />
                  </div>
                  <div className="flex gap-1 mb-4 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-[#b49268] text-lg" />
                    ))}
                  </div>
                  <p className="text-gray-800 leading-relaxed mb-6 text-sm">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#b49268] to-[#9a7a5c] flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-[#36454F] font-bold">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-[#b49268] hover:bg-[#b49268] hover:text-white transition-all z-10"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-[#b49268] hover:bg-[#b49268] hover:text-white transition-all z-10"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-[#b49268] w-8' : 'bg-gray-300 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
