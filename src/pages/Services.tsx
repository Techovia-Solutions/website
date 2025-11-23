import React from "react";
import { motion } from "framer-motion";
// import { Globe, Smartphone, Cloud, Cpu, Briefcase, ArrowRight, ServerCog, Link2 } from "lucide-react";

// const services = [
//   {
//     title: "Web Development",
//     tagline: "Future-proof websites built with speed and scalability in mind.",
//     description: "From responsive websites to progressive web apps, we ensure your online presence is robust and user-friendly.",
//     icon: <Globe className="w-12 h-12 text-blue-500" />,
//     color: "bg-blue-50 dark:bg-blue-900/20",
//   },
//   {
//     title: "Mobile Development",
//     tagline: "Mobile apps that delight and perform.",
//     description: "Crafting intuitive mobile experiences for iOS and Android with top-tier functionality and performance.",
//     icon: <Smartphone className="w-12 h-12 text-green-500" />,
//     color: "bg-green-50 dark:bg-green-900/20",
//   },
//   {
//     title: "Cloud Support",
//     tagline: "Scale smarter, not harder.",
//     description: "Cloud-based solutions that drive growth—AWS, Azure, or GCP, tailored to your business needs.",
//     icon: <Cloud className="w-12 h-12 text-sky-500" />,
//     color: "bg-sky-50 dark:bg-sky-900/20",
//   },
//   {
//     title: "ML/AI Automation",
//     tagline: "Harness the power of AI for smarter decisions.",
//     description: "Let AI and Machine Learning automate repetitive tasks, enhance efficiency, and bring data-driven insights.",
//     icon: <Cpu className="w-12 h-12 text-purple-500" />,
//     color: "bg-purple-50 dark:bg-purple-900/20",
//   },
//   {
//     title: "Project Assistance",
//     tagline: "Guiding your tech projects to success, every step of the way.",
//     description: "Whether you need project management, DevOps, or end-to-end technical support, we’ve got your back.",
//     icon: <Briefcase className="w-12 h-12 text-orange-500" />,
//     color: "bg-orange-50 dark:bg-orange-900/20",
//   },
// ];

import {
  Globe,
  Smartphone,
  Cloud,
  Cpu,
  ServerCog,
  Link2
} from "lucide-react";

export const services = [
  {
    title: "Web Development",
    tagline: "Future-proof websites built for speed & scalability.",
    description:
      "From responsive websites to progressive web apps, we craft digital experiences that are fast, modern, and tailored to your business needs.",
    icon: <Globe className="w-12 h-12 text-blue-500" />,
    color: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    title: "Mobile Development",
    tagline: "Seamless mobile experiences for iOS & Android.",
    description:
      "We build intuitive, high-performance mobile apps using React Native and modern frameworks to deliver smooth cross-platform interactions.",
    icon: <Smartphone className="w-12 h-12 text-green-500" />,
    color: "bg-green-50 dark:bg-green-900/20",
  },
  {
    title: "ML/AI Automation",
    tagline: "Smarter systems powered by machine intelligence.",
    description:
      "Integrate AI-driven automation, predictive analytics, and custom ML models to streamline workflows and enhance decision-making.",
    icon: <Cpu className="w-12 h-12 text-purple-500" />,
    color: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    title: "Cloud Support",
    tagline: "Deploy, scale, and secure your cloud ecosystem.",
    description:
      "AWS, Azure, or GCP — we optimize infrastructure, manage deployments, and implement cloud-native architectures for high availability and performance.",
    icon: <Cloud className="w-12 h-12 text-sky-500" />,
    color: "bg-sky-50 dark:bg-sky-900/20",
  },
  {
    title: "DevOps & CI/CD Engineering",
    tagline: "Ship faster with automation done right.",
    description:
      "End-to-end DevOps implementation including CI/CD pipelines, Docker, Kubernetes, infrastructure as code, monitoring, and automated deployments.",
    icon: <ServerCog className="w-12 h-12 text-amber-500" />,
    color: "bg-amber-50 dark:bg-amber-900/20",
  },
  {
    title: "API Development & Integration",
    tagline: "APIs that connect your entire ecosystem.",
    description:
      "Secure, scalable REST and GraphQL APIs with seamless third-party integrations — authentication, databases, billing, and automation included.",
    icon: <Link2 className="w-12 h-12 text-indigo-500" />,
    color: "bg-indigo-50 dark:bg-indigo-900/20",
  },
];


const Services = () => {
  return (
    <div id="services" className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to elevate your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 }} // no per-card delay anymore
              whileHover={{ y: -10, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`group p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-200 bg-white dark:bg-dark-surface border border-gray-100 dark:border-gray-800 overflow-hidden relative cursor-pointer`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 transition-transform group-hover:scale-150 ${service.color.replace('/20', '')}`} />
              
              <div className="mb-6 relative z-10">
          <div className={`inline-flex p-4 rounded-xl ${service.color} mb-4`}>
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
          <p className="text-primary font-medium text-sm mb-4">{service.tagline}</p>
              </div>

              <div className="relative z-10">
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            {service.description}
          </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
