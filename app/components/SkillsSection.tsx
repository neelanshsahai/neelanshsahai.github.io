"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2Icon, ServerIcon, LayoutDashboardIcon, PenToolIcon } from 'lucide-react';

interface SkillsProps {
  skills: string[];
}

// Categorized skills
const SKILL_CATEGORIES = {
  "Languages": ["Kotlin", "Java", "Python", "JavaScript", "TypeScript", "C", "C++"],
  "Android": ["Android", "Gradle", "Jetpack Compose", "MVVM", "Coroutines", "Dagger-Hilt", "Retrofit", "RoomDB", "Firebase"],
  "Other": ["Deep Learning", "React.js", "Next.js", "Git", "CI/CD"]
};

const SkillsSection: React.FC<SkillsProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  const categories = [
    { id: "All", label: "All Skills", icon: <Code2Icon className="w-5 h-5" /> },
    { id: "Languages", label: "Languages", icon: <Code2Icon className="w-5 h-5" /> },
    { id: "Android", label: "Android", icon: <LayoutDashboardIcon className="w-5 h-5" /> },
    { id: "Other", label: "Other", icon: <PenToolIcon className="w-5 h-5" /> },
  ];

  const filteredSkills = activeCategory === "All" 
    ? Object.values(SKILL_CATEGORIES).flat() // get all skills from categories
    : SKILL_CATEGORIES[activeCategory as keyof typeof SKILL_CATEGORIES] || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      },
    },
  };

  // Function to get devicon class
  const getDeviconClass = (skill: string): string => {
    const skillLower = skill.toLowerCase().replace(/\./g, '').replace(/\s/g, '');
    
    // Map special cases
    const skillMap: Record<string, string> = {
      "kotlin": "kotlin",
      "java": "java",
      "android": "android",
      "gradle": "gradle",
      "jetpack compose": "jetpack compose",
      "firebase": "firebase",
      "mvvm": "androidstudio",
      "coroutines": "kotlin",
      "dagger-hilt": "androidstudio",
      "retrofit": "networkx",
      "roomdb": "sqldeveloper",
      "python": "python",
      "deeplearning": "illustrator",
      "javascript": "javascript",
      "reactjs": "react",
      "nextjs": "nextjs",
      "typescript": "typescript",
      "c++": "cplusplus",
      "c": "c",
      "git": "git",
      "ci/cd": "githubactions",
    };

    return skillMap[skillLower] || skillLower;
  };

  return (
    <div className="py-20 px-4 sm:px-6 md:px-12 overflow-hidden" id="skills">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A curated collection of my technical skills and proficiencies developed through education, personal projects, and hands-on experience.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredSkills.map((skill, index) => {
            const deviconClass = getDeviconClass(skill);

            return (
              <motion.div
                key={`${skill}-${index}`}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl text-primary mr-3">
                    <i className={`devicon-${deviconClass}-plain colored`}></i>
                  </div>
                  <h3 className="text-xl font-semibold">{skill}</h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          className="mt-16 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Communication",
              "Public Speaking",
              "Presentation Skills",
              "Teamwork",
              "Problem Solving",
              "Time Management",
              "Agile Methodologies",
              "Continuous Learning",
              "Adaptability",
              "Attention to Detail",
              "Critical Thinking",
              "Creativity",
              "Project Management",
              "Team Leadership",
              "Mentoring",
              "Collaboration",
              "Conflict Resolution",
              "Analytical Skills",
              "Code Review",
              "Documentation",
              "Testing & Debugging",
              "Version Control",
            ].map((skill, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  color: "rgb(59, 130, 246)"
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;