"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, BarChart3, Database } from "lucide-react";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { Typewriter, AnimatedCounter } from "@/components/ui/typewriter";
import { SparklesCore } from "@/components/ui/sparkles";
import { personalInfo, socialLinks } from "@/data/portfolio";


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
  { label: "Dashboards Built", value: 100, suffix: "+" }
];

// Keywords to make colorful in the bio
const colorfulKeywords = ["Python", "SQL", "PowerBI", "Tableau", "AI", "NLP"];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Sparkles Full Background */}
      <SparklesCore
        id="hero-sparkles"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={50}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        particleColor="#3b82f6"
        speed={1}
      />
      
      <div className="relative z-10 section-container">
        <div className="content-container">
          <div className="flex-center-col w-full h-full py-12 md:py-16">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-center-col space-y-6 md:space-y-8 w-full"
            >
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

              {/* Social Links */}
              {/* removed social links section */}
            </motion.div>

            {/* Spacer above the divider line */}
            <div className="h-4 md:h-6"></div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="border-t border-gray-800"
            >
              {/* Spacer below the divider line */}
              <div className="h-4 md:h-6"></div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.0 + index * 0.1 }}
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
              </div>
            </motion.div>

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
                <BarChart3 size={20} />
              </motion.div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
} 