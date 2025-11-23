import React from "react";
import { motion } from "framer-motion";
import { Code, CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-100 dark:from-dark-bg dark:via-dark-surface dark:to-black transition-colors duration-500 -z-10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
            Your Brilliant Idea Deserves Better Than <span className="text-red-500">Broken Code</span> and <span className="text-red-500">Missed Deadlines</span>.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Partner with <span className="font-bold text-primary">Techovia Labs</span>. We build tech that works.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Ready to Start? Let’s Talk <ArrowRight className="ml-2" />
            </a>
          </div>
        </motion.div>

        {/* Animation Section */}
        <div className="relative h-[400px] w-full flex items-center justify-center">
          {/* Broken State */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 0.8, rotate: -10 }}
            transition={{ duration: 1, delay: 2, repeat: Infinity, repeatDelay: 5, repeatType: "reverse" }}
            className="absolute p-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-red-200 dark:border-red-900 max-w-sm w-full"
          >
            <div className="flex items-center gap-2 mb-4 text-red-500">
              <AlertTriangle />
              <span className="font-bold">System Failure</span>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-red-100 dark:bg-red-900/30 rounded w-3/4" />
              <div className="h-4 bg-red-100 dark:bg-red-900/30 rounded w-full" />
              <div className="h-4 bg-red-100 dark:bg-red-900/30 rounded w-1/2" />
            </div>
            <div className="mt-4 text-xs font-mono text-red-400">
              Error: 500 Internal Server Error
              <br />
              at /src/app.js:42:15
            </div>
          </motion.div>

          {/* Fixed State */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 2, repeat: Infinity, repeatDelay: 5, repeatType: "reverse" }}
            className="absolute p-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-green-200 dark:border-green-900 max-w-sm w-full"
          >
            <div className="flex items-center gap-2 mb-4 text-green-500">
              <CheckCircle />
              <span className="font-bold">System Operational</span>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-green-100 dark:bg-green-900/30 rounded w-3/4" />
              <div className="h-4 bg-green-100 dark:bg-green-900/30 rounded w-full" />
              <div className="h-4 bg-green-100 dark:bg-green-900/30 rounded w-1/2" />
            </div>
            <div className="mt-4 flex gap-2">
              <div className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full">React</div>
              <div className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs rounded-full">AI</div>
              <div className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs rounded-full">Fast</div>
            </div>
          </motion.div>
          
          {/* Connecting Lines/Particles */}
          <motion.div
             className="absolute inset-0 pointer-events-none"
             initial={{ opacity: 0 }}
             animate={{ opacity: [0, 1, 0] }}
             transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatDelay: 4 }}
          >
             <Code className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary w-16 h-16 opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
