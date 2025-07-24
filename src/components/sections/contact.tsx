"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
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
import { ContactTypewriter } from "@/components/ui/contact-typewriter";

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
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex items-center space-x-3 mb-6 p-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10"
    >
      <div className="relative">
        <div className={`w-3 h-3 rounded-full ${isAvailable() ? 'bg-green-400' : 'bg-yellow-400'}`} />
        <div className={`absolute inset-0 w-3 h-3 rounded-full ${isAvailable() ? 'bg-green-400' : 'bg-yellow-400'} animate-ping opacity-50`} />
      </div>
      <div className="text-sm">
        <p className="text-white font-medium">{getTimeMessage()}</p>
        <p className="text-gray-400">
          {isAvailable() ? "Available for quick chats" : "Will respond within 24 hours"}
        </p>
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

// Floating geometric shapes component
const FloatingShapes = () => {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const shapes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 30,
    initialX: Math.random() * dimensions.width,
    initialY: Math.random() * dimensions.height,
    duration: Math.random() * 25 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/5`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.initialX,
            top: shape.initialY,
          }}
          animate={{
            x: [0, 150, -100, 0],
            y: [0, -150, 100, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.3, 0.7, 1],
            opacity: [0.3, 0.8, 0.2, 0.3],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
};

// Enhanced contact card component
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
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [15, -15]));
  const rotateY = useSpring(useTransform(x, [-100, 100], [-15, 15]));
  const { copy, copied } = useCopyToClipboard();

  const handleMouse = (event: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    copy(info, title);
  };

  const CardContent = (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 group cursor-pointer overflow-hidden"
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.02, y: -5 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <motion.div 
            className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white group-hover:from-purple-500 group-hover:to-blue-600 transition-all duration-300 shadow-lg"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Icon size={20} />
          </motion.div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-100 transition-colors">
              {title}
            </h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm">
              {info}
            </p>
          </div>
        </div>
        
        {copyable && (
          <motion.button
            onClick={handleCopy}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {copied === title ? <Check size={16} /> : <Copy size={16} />}
          </motion.button>
        )}
      </div>
      
      {/* Enhanced hover effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl" />
      </div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
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
      <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10">
        <div className="flex items-center space-x-3 mb-6">
          <MessageSquare className="text-blue-400" size={24} />
          <h3 className="text-2xl font-bold text-white">Send a Message</h3>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <Check className="w-16 h-16 text-green-400 mx-auto mb-4" />
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
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
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
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
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
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
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
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300 resize-none"
                placeholder="Tell me about your project or just say hello!"
              />
            </div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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
        className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Zap size={18} />
        <span>Quick Email</span>
      </motion.a>
      
      <motion.a
        href={personalInfo.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium transition-all duration-300"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Coffee size={18} />
        <span>Let's Connect</span>
      </motion.a>
      
      <motion.a
        href={`tel:${personalInfo.phone}`}
        className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium transition-all duration-300"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-purple-900/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-800/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-800/20 via-transparent to-transparent" />
      
      {/* Floating Shapes */}
      <FloatingShapes />
      
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

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 py-20">
          
          {/* Enhanced Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
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
              <ContactTypewriter 
                words={["Connect", "Collaborate", "Create Magic", "Build Together", "Make Impact"]}
                className="text-4xl md:text-6xl lg:text-7xl font-bold"
                typingSpeed={100}
                deletingSpeed={60}
                delayBetweenWords={2000}
              />
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
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
        </div>
      </div>
    </section>
  );
} 