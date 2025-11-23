import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Database, Cloud, Layers } from "lucide-react";

const techCategories = [
  {
    id: "languages",
    name: "Languages",
    icon: <Code2 className="w-6 h-6" />,
    technologies: [
      { name: "Java", icon: "☕", description: "Robust, secure, and scalable enterprise applications." },
      { name: "JavaScript", icon: "JS", description: "Dynamic and interactive web experiences." },
      { name: "Python", icon: "🐍", description: "AI, Data Science, and backend automation." },
      { name: "C++", icon: "⚙️", description: "High-performance system programming." },
    ],
  },
  {
    id: "frameworks",
    name: "Frameworks",
    icon: <Layers className="w-6 h-6" />,
    technologies: [
      { name: "React", icon: "⚛️", description: "Building modern, reactive user interfaces." },
      { name: "Angular", icon: "🅰️", description: "Comprehensive framework for web apps." },
      { name: "Microservices", icon: "🔗", description: "Scalable and maintainable architecture." },
    ],
  },
  {
    id: "cloud",
    name: "Cloud Providers",
    icon: <Cloud className="w-6 h-6" />,
    technologies: [
      { name: "AWS", icon: "☁️", description: "Reliable, scalable, and inexpensive cloud computing." },
      { name: "Azure", icon: "🔷", description: "Cloud computing service created by Microsoft." },
      { name: "GCP", icon: "🌈", description: "High-performance infrastructure by Google." },
    ],
  },
  {
    id: "databases",
    name: "Databases",
    icon: <Database className="w-6 h-6" />,
    technologies: [
      { name: "MongoDB", icon: "🍃", description: "Flexible, document-based database." },
      { name: "PostgreSQL", icon: "🐘", description: "Advanced open-source relational database." },
      { name: "MySQL", icon: "🐬", description: "The world's most popular open-source database." },
      { name: "Oracle", icon: "🔴", description: "Multi-model database management system." },
    ],
  },
];

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState(techCategories[0].id);

  return (
    <div id="techstack" className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-bg dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Tech Stack</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We use the latest and most reliable technologies to build your products.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {techCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-white dark:bg-dark-surface text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Tech Cards Carousel/Grid */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {techCategories
          .find((c) => c.id === activeCategory)
          ?.technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative h-64"
              style={{ perspective: 1000 }}
              whileHover={{ scale: 1.03, y: -6 }}
            >
              <motion.div
                className="relative w-full h-full"
                style={{
            transformStyle: "preserve-3d",
            WebkitTransformStyle: "preserve-3d",
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ rotateY: 180 }}
              >
                {/* Front */}
                <div
            className="absolute inset-0 bg-white dark:bg-dark-surface rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 border border-gray-100 dark:border-gray-800"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
                >
            <div className="text-6xl mb-4">{tech.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{tech.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Hover to learn more</p>
                </div>

                {/* Back */}
                <div
            className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 text-white text-center"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
                >
            <h3 className="text-xl font-bold mb-4">{tech.name}</h3>
            <p className="text-sm leading-relaxed">{tech.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
