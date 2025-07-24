"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin,
  CheckCircle,
  AlertCircle,
  Sparkles,
  MessageCircle
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { SparklesCore } from "@/components/ui/sparkles";
import { Meteors } from "@/components/ui/meteors";
import { ContactTypewriter } from "@/components/ui/contact-typewriter";

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

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

  const shapes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 20,
    initialX: Math.random() * dimensions.width,
    initialY: Math.random() * dimensions.height,
    duration: Math.random() * 20 + 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.initialX,
            top: shape.initialY,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Interactive contact card component
const ContactCard = ({ 
  icon: Icon, 
  title, 
  info, 
  href,
  delay = 0 
}: { 
  icon: any; 
  title: string; 
  info: string; 
  href?: string;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [30, -30]));
  const rotateY = useSpring(useTransform(x, [-100, 100], [-30, 30]));

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

  const CardContent = (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center space-x-4">
        <motion.div 
          className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white group-hover:from-purple-500 group-hover:to-blue-600 transition-all duration-300"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Icon size={24} />
        </motion.div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
            {info}
          </p>
        </div>
      </div>
      
      {/* Hover effect particles */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ transformStyle: "preserve-3d" }}
      >
        <SparklesCore
          id={`contact-card-${title}`}
          background="transparent"
          minSize={0.4}
          maxSize={1.0}
          particleDensity={20}
          className="absolute inset-0 w-full h-full rounded-2xl"
          particleColor="#3b82f6"
          speed={2}
        />
      </motion.div>
    </motion.div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {CardContent}
    </a>
  ) : (
    CardContent
  );
};

// Animated form input component
const AnimatedInput = ({ 
  label, 
  type = "text", 
  error, 
  ...props 
}: any) => {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative">
      <motion.div
        className="relative"
        initial={false}
        animate={{ scale: focused ? 1.02 : 1 }}
        transition={{ duration: 0.2 }}
      >
        {type === "textarea" ? (
          <textarea
            {...props}
            onFocus={() => setFocused(true)}
            onBlur={(e) => {
              setFocused(false);
              setHasValue(e.target.value.length > 0);
            }}
            onChange={(e) => {
              setHasValue(e.target.value.length > 0);
              props.onChange?.(e);
            }}
            className="w-full px-4 py-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 resize-none h-32"
            placeholder={label}
          />
        ) : (
          <input
            {...props}
            type={type}
            onFocus={() => setFocused(true)}
            onBlur={(e) => {
              setFocused(false);
              setHasValue(e.target.value.length > 0);
            }}
            onChange={(e) => {
              setHasValue(e.target.value.length > 0);
              props.onChange?.(e);
            }}
            className="w-full px-4 py-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300"
            placeholder={label}
          />
        )}
        
        <motion.label
          className="absolute left-4 text-gray-400 pointer-events-none transition-all duration-300"
          initial={false}
          animate={{
            y: focused || hasValue ? -10 : 12,
            scale: focused || hasValue ? 0.85 : 1,
            color: focused ? "#3b82f6" : "#9ca3af",
          }}
        >
          {label}
        </motion.label>
      </motion.div>
      
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-2 mt-2 text-red-400 text-sm"
        >
          <AlertCircle size={16} />
          <span>{error}</span>
        </motion.div>
      )}
    </div>
  );
};

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const watchedFields = watch();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Form data:", data);
      setSubmitStatus('success');
      reset();
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      title: "Phone",
      info: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      title: "Location",
      info: personalInfo.location,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      title: "LinkedIn",
      info: "Connect with me",
      href: personalInfo.linkedin,
    },
    {
      icon: Github,
      title: "GitHub",
      info: "View my code",
      href: personalInfo.github,
    },
  ];

  return (
    <section 
      id="contact" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-purple-900/20" />
      
      {/* Floating Shapes */}
      <FloatingShapes />
      
      {/* Sparkles Background */}
      <SparklesCore
        id="contact-sparkles"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={30}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        particleColor="#3b82f6"
        speed={0.5}
      />

      {/* Meteors */}
      <div className="absolute inset-0 z-0">
        <Meteors number={15} />
      </div>

      <div className="relative z-10 section-container">
        <div className="content-container max-w-7xl mx-auto px-4 py-20">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div 
              className="flex items-center justify-center space-x-2 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <MessageCircle className="text-blue-400" size={32} />
              <Sparkles className="text-purple-400" size={24} />
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Let's </span>
              <ContactTypewriter 
                words={["Connect", "Collaborate", "Create", "Build Together"]}
                className="text-4xl md:text-6xl lg:text-7xl font-bold"
                typingSpeed={120}
                deletingSpeed={80}
                delayBetweenWords={2500}
              />
            </h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Ready to turn data into insights? Let's collaborate and create something extraordinary together.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                  Send me a message
                </h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <AnimatedInput
                      label="Your Name"
                      {...register("name")}
                      error={errors.name?.message}
                    />
                    <AnimatedInput
                      label="Email Address"
                      type="email"
                      {...register("email")}
                      error={errors.email?.message}
                    />
                  </div>
                  
                  <AnimatedInput
                    label="Subject"
                    {...register("subject")}
                    error={errors.subject?.message}
                  />
                  
                  <AnimatedInput
                    label="Your Message"
                    type="textarea"
                    {...register("message")}
                    error={errors.message?.message}
                  />
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || submitStatus === 'success'}
                    className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={false}
                    animate={{
                      backgroundColor: submitStatus === 'success' ? '#10b981' : submitStatus === 'error' ? '#ef4444' : undefined
                    }}
                  >
                    <motion.div
                      className="flex items-center justify-center space-x-2"
                      animate={{ opacity: isSubmitting ? 0.7 : 1 }}
                    >
                      {submitStatus === 'success' ? (
                        <>
                          <CheckCircle size={20} />
                          <span>Message Sent!</span>
                        </>
                      ) : submitStatus === 'error' ? (
                        <>
                          <AlertCircle size={20} />
                          <span>Failed to send</span>
                        </>
                      ) : isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.div>
                    
                    {/* Button hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ borderRadius: "inherit" }}
                    />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center lg:text-left">
                  Get in touch
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <ContactCard
                      key={item.title}
                      icon={item.icon}
                      title={item.title}
                      info={item.info}
                      href={item.href}
                      delay={index * 0.1}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-6 text-center lg:text-left">
                  Follow me
                </h4>
                
                <div className="space-y-4">
                  {socialLinks.map((item, index) => (
                    <ContactCard
                      key={item.title}
                      icon={item.icon}
                      title={item.title}
                      info={item.info}
                      href={item.href}
                      delay={0.3 + index * 0.1}
                    />
                  ))}
                </div>
              </div>

              {/* Call-to-action card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-lg border border-white/10"
              >
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Ready to collaborate?
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Let's discuss your next data project
                  </p>
                  <motion.a
                    href={`mailto:${personalInfo.email}`}
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail size={18} />
                    <span>Start a conversation</span>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 