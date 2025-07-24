"use client";

import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { FloatingDockNavigation } from "@/components/ui/floating-dock-navigation";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Experience Section */}
      <Experience />
      
      {/* Projects Section */}
      <ProjectsSection />
      
      {/* Floating Dock Navigation */}
      <FloatingDockNavigation />
      
      <motion.section
        id="contact"
        className="section-spacing bg-gray-800/50 flex items-center justify-center min-h-screen relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto container-spacing w-full">
          <div className="flex-center-col text-center space-y-responsive">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Contact Section</h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">Coming next...</p>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
