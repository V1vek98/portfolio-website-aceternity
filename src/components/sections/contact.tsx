"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin,
  Sparkles,
  MessageCircle,
  Send,
  Copy,
  Check,
  Clock,
  Calendar,
  User,
  MessageSquare,
  ArrowRight,
  Coffee,
  Zap
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { SparklesCore } from "@/components/ui/sparkles";
import { Meteors } from "@/components/ui/meteors";
import { Typewriter } from "@/components/ui/typewriter";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

// Floating particles component for ambient effects
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 backdrop-blur-sm"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, -30, 0],
            scale: [1, 1.5, 0.8, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

// Availability Status Component
const AvailabilityStatus = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const isAvailable = () => {
    const hour = currentTime.getHours();
    return hour >= 9 && hour <= 18; // 9 AM - 6 PM EST
  };

  const getTimeMessage = () => {
    const hour = currentTime.getHours();
    if (hour >= 6 && hour < 12) return "Good morning!";
    if (hour >= 12 && hour < 18) return "Good afternoon!";
    return "Good evening!";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
      className="relative p-6 rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-2xl shadow-blue-500/10"
    >
      {/* Glassmorphic background with animated gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10"
        animate={{
          background: [
            "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.05), rgba(6, 182, 212, 0.1))",
            "linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(6, 182, 212, 0.05), rgba(59, 130, 246, 0.1))",
            "linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.1))",
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Floating particles inside card */}
      <FloatingParticles />
      
      <div className="relative z-10 flex items-center space-x-4">
        <div className="relative">
          <motion.div 
            className={`w-4 h-4 rounded-full ${isAvailable() ? 'bg-green-400' : 'bg-yellow-400'}`}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className={`absolute inset-0 w-4 h-4 rounded-full ${isAvailable() ? 'bg-green-400' : 'bg-yellow-400'}`}
            animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        <div className="text-sm">
          <motion.p 
            className="text-white font-medium"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {getTimeMessage()}
          </motion.p>
          <p className="text-gray-300">
            {isAvailable() ? "Available for quick chats" : "Will respond within 24 hours"}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Copy to clipboard hook
const useCopyToClipboard = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return { copy, copied };
};

// Contact card with background beams collision effect on hover
const ContactCard = ({ 
  icon: Icon, 
  title, 
  info, 
  href,
  delay = 0,
  copyable = false 
}: { 
  icon: any; 
  title: string; 
  info: string; 
  href?: string;
  delay?: number;
  copyable?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { copy, copied } = useCopyToClipboard();

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    copy(info, title);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const CardContent = (
    <motion.div
      className="group relative p-8 rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:bg-gradient-to-br hover:from-white/15 hover:to-white/10"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay, 
        type: "spring", 
        bounce: 0.4 
      }}
      viewport={{ once: true }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <BackgroundBeamsWithCollision 
        isActive={isHovered}
        className="absolute inset-0 z-0"
      >
        <div className="relative z-10 flex items-center justify-between w-full h-full">
          <div className="flex items-center space-x-6">
            {/* Simple icon container */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-white/20 transition-all duration-300 group-hover:from-purple-500/30 group-hover:to-blue-600/30">
              <Icon size={24} className="text-white" />
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                {info}
              </p>
            </div>
          </div>
          
          {copyable && (
            <motion.button
              onClick={handleCopy}
              className="relative p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition-all duration-300 backdrop-blur-sm border border-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={copied === title ? { 
                scale: [1, 1.1, 1] 
              } : {}}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence mode="wait">
                {copied === title ? (
                  <motion.div
                    key="check"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                  >
                    <Check size={18} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                  >
                    <Copy size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          )}
        </div>
      </BackgroundBeamsWithCollision>
    </motion.div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      {CardContent}
    </a>
  ) : (
    CardContent
  );
};

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
      className="w-full max-w-lg"
    >
      <div className="relative p-8 rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-2xl shadow-purple-500/10">
        {/* Animated background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(147, 51, 234, 0.05), rgba(59, 130, 246, 0.05), rgba(6, 182, 212, 0.05))",
              "linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(6, 182, 212, 0.05), rgba(147, 51, 234, 0.05))",
            ]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-6">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <MessageSquare className="text-blue-400" size={24} />
            </motion.div>
            <h3 className="text-2xl font-bold text-white">Send a Message</h3>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Check className="w-16 h-16 text-green-400 mx-auto mb-4" />
              </motion.div>
              <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
              <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon!</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 backdrop-blur-sm"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                animate={isSubmitting ? { 
                  background: [
                    "linear-gradient(to right, #3b82f6, #9333ea)",
                    "linear-gradient(to right, #9333ea, #3b82f6)",
                  ]
                } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Quick Action Buttons
const QuickActions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-wrap gap-4 justify-center"
    >
      <motion.a
        href={`mailto:${personalInfo.email}`}
        className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500/80 to-blue-600/80 hover:from-blue-600/90 hover:to-blue-700/90 text-white font-medium transition-all duration-300 backdrop-blur-sm border border-white/20"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 0 20px rgba(59, 130, 246, 0.3)",
            "0 0 30px rgba(59, 130, 246, 0.5)",
            "0 0 20px rgba(59, 130, 246, 0.3)",
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Zap size={18} />
        <span>Quick Email</span>
      </motion.a>
      
      <motion.a
        href={personalInfo.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500/80 to-purple-600/80 hover:from-purple-600/90 hover:to-purple-700/90 text-white font-medium transition-all duration-300 backdrop-blur-sm border border-white/20"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 0 20px rgba(147, 51, 234, 0.3)",
            "0 0 30px rgba(147, 51, 234, 0.5)",
            "0 0 20px rgba(147, 51, 234, 0.3)",
          ]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      >
        <Coffee size={18} />
        <span>Let's Connect</span>
      </motion.a>
      
      <motion.a
        href={`tel:${personalInfo.phone}`}
        className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500/80 to-green-600/80 hover:from-green-600/90 hover:to-green-700/90 text-white font-medium transition-all duration-300 backdrop-blur-sm border border-white/20"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 0 20px rgba(34, 197, 94, 0.3)",
            "0 0 30px rgba(34, 197, 94, 0.5)",
            "0 0 20px rgba(34, 197, 94, 0.3)",
          ]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 2 }}
      >
        <Phone size={18} />
        <span>Call Now</span>
      </motion.a>
    </motion.div>
  );
};

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      copyable: true,
    },
    {
      icon: Phone,
      title: "Phone",
      info: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      copyable: true,
    },
    {
      icon: MapPin,
      title: "Location",
      info: personalInfo.location,
      copyable: false,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      title: "LinkedIn",
      info: "Let's connect professionally",
      href: personalInfo.linkedin,
    },
    {
      icon: Github,
      title: "GitHub",
      info: "Check out my repositories",
      href: personalInfo.github,
    },
  ];

  return (
    <section 
      id="contact" 
      className="relative py-20 md:py-32 overflow-hidden bg-gray-900/50 flex items-center justify-center min-h-screen"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-blue-900/5 to-gray-900/20" />
      
      {/* Floating Particles Background */}
      <FloatingParticles />
      
      {/* Enhanced Sparkles Background */}
      <SparklesCore
        id="contact-sparkles"
        background="transparent"
        minSize={0.4}
        maxSize={1.8}
        particleDensity={40}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        particleColor="#3b82f6"
        speed={0.8}
      />

      {/* Meteors */}
      <div className="absolute inset-0 z-0">
        <Meteors number={20} />
      </div>

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
               {/* Enhanced Section Header */}
               <motion.div
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8 }}
                 viewport={{ once: true }}
                 className="text-center mb-16"
               >
              <motion.div 
                className="flex items-center justify-center space-x-3 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <MessageCircle className="text-blue-400" size={40} />
                <Sparkles className="text-purple-400" size={32} />
                <MessageCircle className="text-blue-400" size={40} />
              </motion.div>
              
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
                <span className="gradient-text">Let's </span>
                <div className="inline-block h-16 md:h-20 lg:h-24 flex items-center">
                  <Typewriter 
                    words={["Connect", "Collaborate", "Create Magic", "Build Together", "Make Impact"]}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white"
                    typingSpeed={100}
                    deletingSpeed={60}
                    delayBetweenWords={2000}
                  />
                </div>
              </h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
              >
                Ready to transform data into actionable insights? I'm here to help you unlock the power of your data and drive meaningful business outcomes.
              </motion.p>

              <QuickActions />
            </motion.div>

                         {/* Main Content - Responsive Grid */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto">
            
                         {/* Contact Information */}
                           <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
              <AvailabilityStatus />
              
              <div>
                                                  <motion.h3 
                   className="text-3xl font-bold text-white mb-8 flex items-center space-x-3"
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6, delay: 0.3 }}
                 >
                   <User className="text-blue-400" size={28} />
                   <span>Get in Touch</span>
                 </motion.h3>
                
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <ContactCard
                      key={item.title}
                      icon={item.icon}
                      title={item.title}
                      info={item.info}
                      href={item.href}
                      copyable={item.copyable}
                      delay={0.4 + index * 0.1}
                    />
                  ))}
                </div>
              </div>

              <div>
                                                  <motion.h4 
                   className="text-xl font-semibold text-white mb-6 flex items-center space-x-2"
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6, delay: 0.7 }}
                 >
                   <ArrowRight className="text-purple-400" size={20} />
                   <span>Follow My Journey</span>
                 </motion.h4>
                
                <div className="space-y-4">
                  {socialLinks.map((item, index) => (
                    <ContactCard
                      key={item.title}
                      icon={item.icon}
                      title={item.title}
                      info={item.info}
                      href={item.href}
                      delay={0.8 + index * 0.1}
                    />
                  ))}
                </div>
              </div>

              {/* Enhanced Response Time Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-lg border border-white/10"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="text-green-400" size={20} />
                  <h4 className="text-lg font-semibold text-white">Quick Response</h4>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  I typically respond within <span className="text-green-400 font-semibold">2-4 hours</span> during business days
                </p>
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <Calendar size={14} />
                  <span>Monday - Friday, 9 AM - 6 PM EST</span>
                </div>
              </motion.div>
            </motion.div>

               {/* Contact Form */}
               <ContactForm />
             </div>
           </motion.div>
         </div>
       </div>
     </div>
   </section>
 );
} 