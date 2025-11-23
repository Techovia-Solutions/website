import React from "react";
import { Linkedin, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-surface dark:to-dark-bg pt-16 pb-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <a href="#home" className="text-2xl font-bold font-sans text-primary dark:text-white mb-4 block">
              Techovia Labs
            </a>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We build tech that works. Partner with us for future-proof solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/techovia-labs/" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/techovia.labs" className="text-gray-500 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-500 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Services</a>
              </li>
              <li>
                <a href="#techstack" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Tech Stack</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li>Techovia Labs, Pune, Maharashtra, India</li>
              <li>+91 8149805864</li>
              <li>contact@techovialabs.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} Techovia Labs. All rights reserved.
          </p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918149805864"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 z-50 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </footer>
  );
};

export default Footer;
