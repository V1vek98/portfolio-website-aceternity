"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  Github, 
  ChevronDown, 
  ChevronUp,
  Clock,
  Target,
  Lightbulb,
  TrendingUp,
  Code,
  X
} from "lucide-react";
import { projects, Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function TechnologyBadge({ tech, index, delay }: { tech: string; index: number; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      key={index}
      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
    >
      {tech}
    </motion.span>
  );
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.1,
          ease: "easeOut"
        }}
        viewport={{ once: true }}
        whileHover={{ 
          y: -5,
          transition: { duration: 0.3 }
        }}
        className="w-full group relative"
      >
        <div className="relative bg-gray-900/40 backdrop-blur-md border border-gray-700/50 
                        rounded-xl hover:border-purple-500/30 transition-all duration-500
                        hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden p-6">
          


          {/* Header */}
          <div className="relative z-10 flex flex-col space-y-4">
            {/* Project Image */}
            <div className="w-full h-48 bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Title and Impact */}
            <div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>
              <div className="text-emerald-400 font-semibold text-sm mb-3">
                {project.impact}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technologies Preview */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech, techIndex) => (
                <TechnologyBadge 
                  key={techIndex}
                  tech={tech} 
                  index={techIndex} 
                  delay={0.1 + techIndex * 0.05} 
                />
              ))}
              {project.technologies.length > 3 && (
                <span className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-sm border border-gray-500/30">
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex gap-2">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
                >
                  <ExternalLink size={14} />
                  Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg transition-colors"
                >
                  <Github size={14} />
                  Code
                </a>
              </div>

              <button
                onClick={() => setIsExpanded(true)}
                className="flex items-center gap-1 px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition-all duration-200"
              >
                Details
                <ChevronDown size={14} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Expanded Content Overlay */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                  <div className="flex gap-2">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X size={20} className="text-gray-400" />
                </button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-6">
                <div className="max-w-3xl mx-auto space-y-8">
                  {/* Project Image */}
                  <div className="w-full h-64 bg-gray-800 rounded-xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Project Impact */}
                  <div className="text-center">
                    <div className="text-emerald-400 font-semibold text-xl mb-4">
                      {project.impact}
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics & Timeline */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/30">
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="text-green-400" size={20} />
                        <h3 className="text-lg font-semibold text-white">Key Metrics</h3>
                      </div>
                      <div className="space-y-2">
                        {project.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="text-gray-300">
                            • {metric}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/30">
                      <div className="flex items-center gap-2 mb-4">
                        <Clock className="text-blue-400" size={20} />
                        <h3 className="text-lg font-semibold text-white">Timeline</h3>
                      </div>
                      <div className="text-gray-300">{project.timeline}</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Project Details</h3>
                    <div className="prose prose-invert max-w-none">
                      <div className="space-y-4">
                        {project.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-300 leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Challenges */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Target className="text-red-400" size={20} />
                      <h3 className="text-xl font-semibold text-white">Challenges</h3>
                    </div>
                    <div className="space-y-3">
                      {project.challenges.map((challenge, challengeIndex) => (
                        <div key={challengeIndex} className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                          <p className="text-gray-300 leading-relaxed">{challenge}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Solutions */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Lightbulb className="text-yellow-400" size={20} />
                      <h3 className="text-xl font-semibold text-white">Solutions</h3>
                    </div>
                    <div className="space-y-3">
                      {project.solutions.map((solution, solutionIndex) => (
                        <div key={solutionIndex} className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                          <p className="text-gray-300 leading-relaxed">{solution}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="text-green-400" size={20} />
                      <h3 className="text-xl font-semibold text-white">Outcomes</h3>
                    </div>
                    <div className="space-y-3">
                      {project.outcomes.map((outcome, outcomeIndex) => (
                        <div key={outcomeIndex} className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                          <p className="text-gray-300 leading-relaxed">{outcome}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Final spacing */}
                  <div className="h-20" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden bg-gray-900/50 flex items-center justify-center min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-purple-900/5 to-gray-900/20" />
      
      <div className="max-w-7xl mx-auto container-spacing w-full">
        <div className="flex-center-col text-center space-y-responsive">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
              Explore my latest work showcasing full-stack development, AI integration, and data analytics solutions
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>

          {/* Bottom Accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 