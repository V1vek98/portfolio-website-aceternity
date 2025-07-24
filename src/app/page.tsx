"use client";

import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { FloatingDockNavigation } from "@/components/ui/floating-dock-navigation";


export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Experience Section */}
      <Experience />
      
      {/* Projects Section */}
      <ProjectsSection />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Floating Dock Navigation */}
      <FloatingDockNavigation />
    </main>
  );
}
