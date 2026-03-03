import { motion } from 'framer-motion';
import { colors } from '../colors';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import aboutUsImage from '../assets/aboutus-1.jpg';

const DentalInsights = () => {
  const [selectedInsight, setSelectedInsight] = useState<number | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const insights: {
    title: string;
    image: string;
    excerpt: string;
    content: string[];
  }[] = [
    {
      title: 'Discover 10 Easy Tips to Maintain a Healthier and Brighter Smile Today',
      image: aboutUsImage,
      excerpt: 'Learn simple daily habits that can transform your oral health and keep your smile radiant.',
      content: [
        'Brush twice daily with fluoride toothpaste',
        'Floss regularly to remove plaque between teeth',
        'Visit your dentist every six months for checkups',
        'Limit sugary foods and drinks',
        'Stay hydrated to promote saliva production',
        'Replace your toothbrush every three months'
      ]
    },
    {
      title: 'Is Teeth Whitening Safe and Effective? Here\'s What You Need to Know',
      image: aboutUsImage,
      excerpt: 'Everything you need to know about professional teeth whitening procedures and their benefits.',
      content: [
        'Safe and effective when performed by dental professionals',
        'Uses controlled bleaching agents to remove stains',
        'Results last several months to years',
        'More effective than over-the-counter products',
        'Minimal side effects like temporary sensitivity',
        'Customized to your specific needs and desired shade'
      ]
    },
    {
      title: 'Braces vs. Clear Aligners: Which Orthodontic Option Fits You Best?',
      image: aboutUsImage,
      excerpt: 'Compare the pros and cons of traditional braces and modern clear aligners for your perfect smile.',
      content: [
        'Traditional braces are highly effective for complex cases',
        'Clear aligners offer a nearly invisible, removable option',
        'Braces typically cost less but require more adjustments',
        'Aligners need discipline to wear 20-22 hours daily',
        'Treatment time averages 12-24 months for both',
        'Your orthodontist will recommend based on your case'
      ]
    },
    {
      title: 'What to Expect During Your First Visit to the Dentist\'s Office',
      image: aboutUsImage,
      excerpt: 'A comprehensive guide to help you prepare for your first dental appointment with confidence.',
      content: [
        'Comprehensive examination of teeth, gums, and mouth',
        'Review of medical history and dental concerns',
        'X-rays taken to assess hidden issues',
        'Professional cleaning removes plaque buildup',
        'Personalized oral hygiene advice provided',
        'Treatment recommendations discussed if needed'
      ]
    },
    {
      title: '5 Warning Signs You May Need a Root Canal and Why It\'s Not So Bad',
      image: aboutUsImage,
      excerpt: 'Understand the symptoms that indicate you need a root canal and why modern treatment is painless.',
      content: [
        'Severe toothache and prolonged sensitivity',
        'Tooth discoloration and swollen gums',
        'Modern procedures are virtually painless',
        'Treatment saves your natural tooth',
        'Success rates exceed 95% with proper care',
        'Prevents infection from spreading'
      ]
    },
    {
      title: 'How to Protect Your Child\'s Teeth and Prevent Cavities Early On',
      image: aboutUsImage,
      excerpt: 'Essential tips for parents to ensure their children develop strong, healthy teeth from an early age.',
      content: [
        'Start cleaning gums before teeth emerge',
        'Use fluoride toothpaste once teeth appear',
        'Schedule first dental visit by age one',
        'Limit sugary drinks and snacks',
        'Teach proper brushing technique early',
        'Make dental visits fun and positive experiences'
      ]
    }
  ];

  const handleCardClick = (index: number) => {
    setScrollPosition(window.scrollY);
    setSelectedInsight(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClose = () => {
    setSelectedInsight(null);
    setTimeout(() => {
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-24 pb-12 md:pb-16">
      {/* Detail Modal */}
      {selectedInsight !== null && (
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
            className="bg-white rounded-3xl max-w-5xl w-full mx-4 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <FaTimes className="text-[var(--primary)] text-xl" />
            </button>
            <div className="p-8">
              <div>
                <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">{insights[selectedInsight].title}</h2>
                <ul className="space-y-3 mb-6">
                  {insights[selectedInsight].content.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[var(--primary)] text-xl mt-1">•</span>
                      <span className="text-gray-800 text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/book-appointment'}
                  className="bg-[var(--primary)] text-white px-8 py-3 rounded-full font-semibold cursor-pointer"
                >
                  Book Appointment
                </motion.button>
              </div>
              <div className="mt-8">
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src={insights[selectedInsight].image}
                    alt={insights[selectedInsight].title}
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-[var(--primary)] uppercase tracking-wider text-sm font-semibold mb-4 text-sm font-bold tracking-widest uppercase">Dental Insights</p>
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--secondary)] mb-6">Expert Tips for a Healthier Smile</h1>
          <p className="text-gray-800 max-w-2xl mx-auto text-lg">
            Stay informed with the latest dental care tips, treatment insights, and oral health advice from our experts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -15, scale: 1.02 }}
              onClick={() => handleCardClick(index)}
              className="bg-white rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer group"
            >
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={insight.image} 
                  alt={insight.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-[var(--primary)] font-bold text-xl mb-4 leading-tight group-hover:text-gray-800 transition-colors">
                  {insight.title}
                </h3>
                <p className="text-gray-800 leading-relaxed mb-5">
                  {insight.excerpt}
                </p>
                <button className="text-[var(--primary)] font-bold hover:text-[var(--primary)] transition-colors flex items-center gap-2">
                  Read More <span className="group-hover:translate-x-2 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DentalInsights;
