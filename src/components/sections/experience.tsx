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
      style={{ 
        fontSize: '14px', 
        padding: '8px 16px',
        display: 'inline-block'
      }}
      className="font-medium bg-blue-500/10 text-blue-400 
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
  // Extract the numeric part and the suffix (everything after the last digit)
  const match = metric.match(/([\d,]+)(.*)/);
  let numericValue = 0;
  let suffix = '';
  if (match) {
    numericValue = parseInt(match[1].replace(/,/g, '')) || 0;
    suffix = match[2];
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: delay + index * 0.1 }}
      className="flex items-center justify-center p-7 bg-gradient-to-r from-blue-500/5 to-purple-500/5 
                 rounded-lg border border-blue-500/10 backdrop-blur-sm"
      style={{ width: '220px', height: '90px' }}
    >
      <div className="text-center">
        <div className="text-3xl font-bold text-blue-400 mb-2">
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
        <div className="text-sm text-white-400 leading-tight">{description}</div>
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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.3 }
      }}
      className="w-full max-w-4xl mx-auto mb-8 group"
    >
        <div style={{ padding: '48px' }} className="relative bg-gray-900/40 backdrop-blur-md border border-gray-700/50 
                        rounded-xl hover:border-blue-500/30 transition-all duration-500
                        hover:shadow-2xl hover:shadow-blue-500/10">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div className="text-center md:text-left">
              <motion.h3 
                className="text-xl md:text-2xl font-bold text-white mb-2"
                whileHover={{ color: "#60a5fa" }}
                transition={{ duration: 0.2 }}
              >
                {exp.title}
              </motion.h3>
              
              <div className="flex flex-col items-center md:items-start md:flex-row md:items-center gap-2 md:gap-4 text-gray-400">
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
            
            <div className="flex flex-col items-center md:items-end gap-2">
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
            className="text-gray-300 mb-8 leading-relaxed text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.2 }}
          >
            {exp.description}
          </motion.p>

          {/* Metrics Grid */}
          {exp.highlights && exp.highlights.length > 0 && (
                      <motion.div 
            style={{ marginBottom: '16px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center"
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
            style={{ marginBottom: '8px', marginTop: '16px' }}
            className="text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.2 }}
          >
            <div style={{ marginBottom: '10px' }} className="flex items-center justify-center md:justify-start gap-2">
              <Code size={16} className="text-amber-400" />
              <span className="text-sm font-medium text-gray-400">Technologies</span>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
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
            className="text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 + index * 0.2 }}
          >
            <div className="flex justify-end">
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
            </div>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '16px' }}>
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: achIndex * 0.1 }}
                        style={{ padding: '12px' }}
                        className="flex items-center gap-3 bg-gray-800/30 rounded-lg border border-gray-700/30"
                      >
                        <motion.div
                          style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: '#3b82f6',
                            flexShrink: 0
                          }}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
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
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-32 overflow-hidden bg-gray-900/50 flex items-center justify-center min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-blue-900/5 to-gray-900/20" />
      
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
              Professional{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative w-full max-w-4xl mx-auto flex flex-col gap-y-12">
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
      </div>
    </section>
  );
} 