"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Calendar, 
  MapPin, 
  Building2, 
  ChevronDown, 
  ChevronUp,
  Award,
  Target,
  TrendingUp,
  Code
} from "lucide-react";
import { experience } from "@/data/portfolio";
import { AnimatedCounter } from "@/components/ui/typewriter";

interface TechnologyBadgeProps {
  tech: string;
  index: number;
  delay: number;
}

function TechnologyBadge({ tech, index, delay }: TechnologyBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: delay + index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.05,
        y: -2,
        transition: { duration: 0.2 }
      }}
      className="inline-block px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 
                 border border-blue-500/20 rounded-full backdrop-blur-sm
                 hover:bg-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
    >
      {tech}
    </motion.span>
  );
}

interface MetricHighlightProps {
  metric: string;
  description: string;
  index: number;
  delay: number;
}

function MetricHighlight({ metric, description, index, delay }: MetricHighlightProps) {
  const numericValue = parseInt(metric.replace(/[^\d]/g, '')) || 0;
  const suffix = metric.replace(/\d/g, '');

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: delay + index * 0.1 }}
      className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-500/5 to-purple-500/5 
                 rounded-lg border border-blue-500/10 backdrop-blur-sm"
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/20">
        <TrendingUp size={16} className="text-blue-400" />
      </div>
      <div>
        <div className="text-lg font-bold text-blue-400">
          {numericValue > 0 ? (
            <AnimatedCounter
              value={numericValue}
              suffix={suffix}
              duration={1500}
            />
          ) : (
            metric
          )}
        </div>
        <div className="text-sm text-gray-400">{description}</div>
      </div>
    </motion.div>
  );
}

interface ExperienceCardProps {
  exp: typeof experience[0];
  index: number;
  isLast: boolean;
}

function ExperienceCard({ exp, index, isLast }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      {/* Timeline Line */}
      {!isLast && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
          className="absolute left-6 top-16 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30"
          style={{ height: "calc(100% + 2rem)" }}
        />
      )}

      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.5, 
          delay: 0.3 + index * 0.2,
          type: "spring",
          stiffness: 200
        }}
        className="absolute left-4 top-8 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 
                   border-4 border-gray-900 z-10 shadow-lg shadow-blue-500/20"
      />

      {/* Experience Card */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.2,
          ease: "easeOut"
        }}
        whileHover={{ 
          y: -5,
          transition: { duration: 0.3 }
        }}
        className="ml-16 mb-12 group"
      >
        <div className="relative p-6 md:p-8 bg-gray-900/40 backdrop-blur-md border border-gray-700/50 
                        rounded-xl hover:border-blue-500/30 transition-all duration-500
                        hover:shadow-2xl hover:shadow-blue-500/10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <motion.h3 
                className="text-xl md:text-2xl font-bold text-white mb-2"
                whileHover={{ color: "#60a5fa" }}
                transition={{ duration: 0.2 }}
              >
                {exp.title}
              </motion.h3>
              
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <Building2 size={16} className="text-blue-400" />
                  <span className="font-medium">{exp.company}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-purple-400" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-start md:items-end gap-2">
              <div className="flex items-center gap-2 text-blue-400">
                <Calendar size={16} />
                <span className="font-medium">{exp.period}</span>
              </div>
              
              <span className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-400 
                             border border-purple-500/20 rounded-full">
                {exp.type}
              </span>
            </div>
          </div>

          {/* Description */}
          <motion.p 
            className="text-gray-300 mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.2 }}
          >
            {exp.description}
          </motion.p>

          {/* Metrics Grid */}
          {exp.highlights && exp.highlights.length > 0 && (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.2 }}
            >
              {exp.highlights.map((highlight, idx) => (
                <MetricHighlight
                  key={idx}
                  metric={highlight.metric}
                  description={highlight.description}
                  index={idx}
                  delay={0.7 + index * 0.2}
                />
              ))}
            </motion.div>
          )}

          {/* Technologies */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.2 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Code size={16} className="text-amber-400" />
              <span className="text-sm font-medium text-gray-400">Technologies</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, techIndex) => (
                <TechnologyBadge
                  key={tech}
                  tech={tech}
                  index={techIndex}
                  delay={0.8 + index * 0.2}
                />
              ))}
            </div>
          </motion.div>

          {/* Expandable Achievements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 + index * 0.2 }}
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 
                         transition-colors duration-200 mb-4 group/expand"
            >
              <Award size={16} />
              <span className="font-medium">Key Achievements</span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: achIndex * 0.1 }}
                        className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg
                                   border border-gray-700/30"
                      >
                        <div className="flex items-center justify-center w-6 h-6 rounded-full 
                                        bg-green-500/20 border border-green-500/30 mt-0.5 flex-shrink-0">
                          <Target size={12} className="text-green-400" />
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {achievement}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-blue-900/5 to-gray-900/20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A journey through data analytics, from hands-on technical work to strategic leadership, 
            driving innovation and delivering measurable business impact.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              index={index}
              isLast={index === experience.length - 1}
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
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
} 