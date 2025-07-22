"use client";

import { motion } from "framer-motion";
import { ChevronDown, Mail, Linkedin, Github, MapPin, TrendingUp, BarChart3, Database, Download } from "lucide-react";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { Typewriter, AnimatedCounter } from "@/components/ui/typewriter";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { animation, scrollToElement } from "@/lib/utils";

const specializations = [
  "Data Visualization Expert",
  "Business Intelligence Analyst",
  "Senior Data Analyst",
  "Data Warehousing Specialist",
  "AI-Driven Product Enhancements",
  "Data Engineering"
];

const stats = [
  { label: "Years Experience", value: 4, suffix: "+" },
  { label: "Projects Completed", value: 50, suffix: "+" },
  { label: "Data Models Built", value: 25, suffix: "+" },
  { label: "Dashboards Built", value: 50, suffix: "+" }
];

export function Hero() {
  const handleContactClick = () => {
    scrollToElement("contact");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden nav-offset">
      {/* Animated Background */}
      <AnimatedBackground />
      
      <div className="relative z-10 section-container">
        <div className="content-container">
          <div className="center-content py-16 md:py-24">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 md:space-y-8"
            >
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex justify-center"
              >
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm md:text-base font-medium">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Available for new opportunities
                </div>
              </motion.div>

              {/* Name and Title */}
              <div className="space-y-4 md:space-y-6 text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
                >
                  <span className="text-white">Hi, I'm </span>
                  <span className="gradient-text">{personalInfo.name}</span>
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-300 h-12 md:h-16 flex items-center justify-center"
                >
                  <Typewriter 
                    words={specializations}
                    className="text-blue-400"
                    typingSpeed={80}
                    deletingSpeed={40}
                    delayBetweenWords={3000}
                  />
                </motion.div>
              </div>

              {/* Bio */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed text-center"
              >
                {personalInfo.bio}
              </motion.p>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex items-center justify-center gap-2 text-gray-500 max-w-4xl mx-auto"
              >
                <MapPin size={18} />
                <span className="text-base md:text-lg">{personalInfo.location}</span>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-4 max-w-4xl mx-auto"
              >
                <motion.button
                  onClick={handleContactClick}
                  className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium text-lg transition-all duration-200 hover:from-blue-700 hover:to-purple-700 interactive-btn glow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} />
                  Get In Touch
                </motion.button>
                
                <motion.a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToElement("projects");
                  }}
                  className="flex items-center gap-3 px-8 py-4 border border-gray-600 text-gray-300 rounded-lg font-medium text-lg transition-all duration-200 hover:border-gray-500 hover:text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <TrendingUp size={20} />
                  View My Work
                </motion.a>

                <motion.a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-medium text-lg transition-all duration-200 hover:from-green-700 hover:to-blue-700 interactive-btn glow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} />
                  Download Resume
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="flex items-center justify-center gap-4 md:gap-6 pt-4 max-w-4xl mx-auto"
              >
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon === "linkedin" ? Linkedin : 
                                      link.icon === "github" ? Github : Mail;
                  
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 text-gray-400 hover:text-white transition-colors duration-200 glass-card"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.8 + index * 0.1 }}
                    >
                      <IconComponent size={24} />
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-16 md:mt-20 pt-8 md:pt-12 border-t border-gray-800"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 + index * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      duration={2000}
                    />
                  </div>
                  <div className="text-gray-400 text-sm md:text-base leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Floating Data Icons - Positioned to avoid content overlap */}
          <div className="hidden lg:block">
            <motion.div
              className="absolute top-24 left-4 xl:left-16 text-blue-500/20"
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Database size={28} />
            </motion.div>
            
            <motion.div
              className="absolute top-48 right-4 xl:right-20 text-purple-500/20"
              animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <BarChart3 size={24} />
            </motion.div>
            
            <motion.div
              className="absolute bottom-48 left-8 xl:left-24 text-blue-400/20"
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <TrendingUp size={20} />
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={() => scrollToElement("about")}
              className="flex flex-col items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 p-4"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-sm md:text-base">Scroll to explore</span>
              <ChevronDown size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 