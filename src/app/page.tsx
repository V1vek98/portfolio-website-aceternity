"use client";

import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/sections/hero";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Temporary placeholder for other sections - will be built next */}
      <motion.section
        id="about"
        className="min-h-screen bg-gray-900/50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">About Section</h2>
          <p className="text-gray-400">Coming next...</p>
        </div>
      </motion.section>
      
      <motion.section
        id="experience"
        className="min-h-screen bg-gray-800/50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Experience Section</h2>
          <p className="text-gray-400">Coming next...</p>
        </div>
      </motion.section>
      
      <motion.section
        id="projects"
        className="min-h-screen bg-gray-900/50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Projects Section</h2>
          <p className="text-gray-400">Coming next...</p>
        </div>
      </motion.section>
      
      <motion.section
        id="skills"
        className="min-h-screen bg-gray-800/50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Skills Section</h2>
          <p className="text-gray-400">Coming next...</p>
        </div>
      </motion.section>
      
      <motion.section
        id="testimonials"
        className="min-h-screen bg-gray-900/50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Testimonials Section</h2>
          <p className="text-gray-400">Coming next...</p>
        </div>
      </motion.section>
      
      <motion.section
        id="contact"
        className="min-h-screen bg-gray-800/50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Contact Section</h2>
          <p className="text-gray-400">Coming next...</p>
        </div>
      </motion.section>
    </main>
  );
}
