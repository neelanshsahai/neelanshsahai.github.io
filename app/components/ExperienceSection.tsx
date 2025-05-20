"use client";

import { motion } from 'framer-motion';
import { BriefcaseIcon, CalendarIcon, MapPinIcon, CheckIcon, PointerOff, LucidePointer, ArrowBigRightDashIcon } from 'lucide-react';

interface Experience {
  company: string;
  position: string;
  logo?: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: readonly string[];
  achievements: readonly string[];
}

interface ExperienceSectionProps {
  experience: readonly Experience[];
  isRemote: boolean;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience, isRemote }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  // Function to generate a default logo if none provided
  const generateDefaultLogo = (companyName: string) => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(companyName)}&background=0D8ABC&color=fff&size=128`;
  };

  return (
    <div className="py-20 px-4 sm:px-6 md:px-12 bg-surface-light dark:bg-surface-dark overflow-hidden" id="experience">
      <div className="container mx-auto max-w-6xl relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{isRemote ? "Other Remote Work Experiences" : "Work Experience"}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {isRemote ? "Apart from the above listed experiences, I have also worked in other remote setups out of interest. Below are a few of them" : "My professional journey and key accomplishments in the tech industry."}
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-full transform -translate-x-1/2 md:translate-x-0"/>

          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {experience.map((exp, index) => (
              <motion.div 
                key={index}
                className="relative flex items-center md:flex-row-reverse"
                variants={itemVariants}
              >
                {/* Timeline point */}
                <div className="absolute left-4 md:left-1/4 w-8 h-8 bg-white dark:bg-gray-800 rounded-full border-4 border-primary dark:border-primary-light transform -translate-x-1/2 flex items-center justify-center z-10">
                  <BriefcaseIcon className="w-4 h-4 text-primary dark:text-primary-light" />
                </div>

                {/* Content */}
                <div className="w-full md:w-3/4 md:pl-16">
                  <motion.div 
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden order-1">
                        <img 
                          src={exp.logo || generateDefaultLogo(exp.company)} 
                          alt={`${exp.company} logo`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="order-2">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.position}</h3>
                        <p className="text-primary dark:text-primary-light font-medium">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className={`flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 'justify-start'`}>
                        <CalendarIcon className="w-4 h-4 flex-shrink-0" />
                        <span>{exp.startDate} - {exp.endDate}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 justify-start">
                        <MapPinIcon className="w-4 h-4 flex-shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 py-3 border-t border-b border-gray-200 dark:border-gray-700 my-3">
                        {exp.description}
                      </p>
                      
                      {/* Skills used */}
                      <div className="flex flex-wrap gap-2 mb-4 justify-start">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 text-xs bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      {/* Achievements */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-left">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1 text-left">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2">
                              <ArrowBigRightDashIcon className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-600 dark:text-gray-300">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection; 