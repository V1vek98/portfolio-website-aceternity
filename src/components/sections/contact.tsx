"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin,
  Copy,
  Check,
  ExternalLink
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { SparklesCore } from "@/components/ui/sparkles";
import { Meteors } from "@/components/ui/meteors";
import { LinkPreview } from "@/components/ui/link-preview";
import { useToast } from "@/components/ui/toast";

// Copy to clipboard hook
const useCopyToClipboard = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const { addToast } = useToast();

  const copy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      addToast({
        message: `${id} copied to clipboard!`,
        type: 'success',
        duration: 2000
      });
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      addToast({
        message: 'Failed to copy to clipboard',
        type: 'error',
        duration: 3000
      });
    }
  };

  return { copy, copied };
};

// Contact Card Component
const ContactCard = ({ 
  icon: Icon, 
  title, 
  info, 
  href,
  delay = 0,
  copyable = false,
  iconColor = "text-blue-300",
  bgColor = "from-blue-500/20 to-blue-600/20"
}: { 
  icon: React.ComponentType<{ size?: number; className?: string }>; 
  title: string; 
  info: string; 
  href?: string;
  delay?: number;
  copyable?: boolean;
  iconColor?: string;
  bgColor?: string;
}) => {
  const { copy, copied } = useCopyToClipboard();

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    copy(info, title);
  };

  const CardContent = (
    <motion.div
      className="relative p-6 rounded-2xl overflow-hidden backdrop-blur-xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-lg group w-full mx-auto sm:max-w-sm"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay, 
        type: "spring", 
        bounce: 0.3 
      }}
      viewport={{ once: true }}
    >
      <div className="relative z-10">
        {/* Copy button for copyable items - positioned in top right with larger touch target */}
        {copyable && (
          <button
            onClick={handleCopy}
            className="absolute top-1 right-1 min-w-[44px] min-h-[44px] p-3 rounded-lg bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition-all duration-300 flex items-center justify-center"
            aria-label={`Copy ${title} to clipboard`}
          >
            {copied === title ? (
              <Check size={18} />
            ) : (
              <Copy size={18} />
            )}
          </button>
        )}
        
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Icon */}
          <div className={`p-4 rounded-full bg-gradient-to-br ${bgColor} border border-white/10`}>
            <Icon size={24} className={iconColor} />
          </div>
          
          {/* Content */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">
              {title}
            </h3>
            <p className="text-gray-300 text-sm">
              {info}
            </p>
            {title === "Email" && (
              <p className="text-gray-300 text-xs">
                Send me an email anytime
              </p>
            )}
            {title === "Phone" && (
              <p className="text-gray-300 text-xs">
                Available during normal business hours
              </p>
            )}
            {title === "Location" && (
              <p className="text-gray-300 text-xs">
                Open to remote, on-site and relocation opportunities
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return href ? (
    href.startsWith('http') ? (
      <LinkPreview url={href} className="block">
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
          {CardContent}
        </a>
      </LinkPreview>
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {CardContent}
      </a>
    )
  ) : (
    CardContent
  );
};

// Social Link Card Component
const SocialCard = ({ 
  icon: Icon, 
  title, 
  description,
  href,
  delay = 0,
  bgColor = "from-blue-500 to-blue-600",
  hoverColor = "from-blue-600 to-blue-700",
  staticImage
}: { 
  icon: React.ComponentType<{ size?: number; className?: string }>; 
  title: string; 
  description: string;
  href: string;
  delay?: number;
  bgColor?: string;
  hoverColor?: string;
  staticImage?: string;
}) => {
  const cardContent = (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative p-6 rounded-2xl overflow-hidden bg-gradient-to-br ${bgColor} hover:${hoverColor} transition-all duration-300 hover:shadow-lg hover:-translate-y-1 block w-full`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay, 
        type: "spring", 
        bounce: 0.3 
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Background Icon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <Icon size={120} className="opacity-10 text-white drop-shadow-lg" />
      </div>
      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-4">
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>
        <p className="text-white/80 text-sm">
          {description}
        </p>
        <ExternalLink size={16} className="text-white/60 group-hover:text-white transition-colors duration-300 mx-auto" />
      </div>
    </motion.a>
  );

  return href.startsWith('http') ? (
    staticImage ? (
      <LinkPreview 
        url={href} 
        className="block w-full max-w-sm mx-auto"
        isStatic={true}
        imageSrc={staticImage}
      >
        {cardContent}
      </LinkPreview>
    ) : (
      <LinkPreview 
        url={href} 
        className="block w-full max-w-sm mx-auto"
      >
        {cardContent}
      </LinkPreview>
    )
  ) : (
    <div className="block w-full max-w-sm mx-auto">
      {cardContent}
    </div>
  );
};

export function Contact() {
  return (
    <section 
      id="contact" 
      className="relative py-20 md:py-32 overflow-hidden bg-slate-900 flex items-center justify-center min-h-screen"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-blue-900/5 to-slate-900/20" />
      
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

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your next data project? I&apos;d love to hear from you. Let&apos;s explore how we can turn your data into actionable insights.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 w-full">
          <ContactCard
            icon={Mail}
            title="Email"
            info={personalInfo.email}
            href={`mailto:${personalInfo.email}`}
            copyable={true}
            delay={0.1}
            iconColor="text-red-400"
            bgColor="from-red-500/20 to-red-600/20"
          />
          
          <ContactCard
            icon={Phone}
            title="Phone"
            info={personalInfo.phone}
            href={`tel:${personalInfo.phone}`}
            copyable={true}
            delay={0.2}
            iconColor="text-green-400"
            bgColor="from-green-500/20 to-green-600/20"
          />
          
          <ContactCard
            icon={MapPin}
            title="Location"
            info={personalInfo.location}
            copyable={false}
            delay={0.3}
            iconColor="text-purple-400"
            bgColor="from-purple-500/20 to-purple-600/20"
          />
        </div>

        {/* Connect Online Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Connect Online
          </h2>
          <p className="text-gray-300 mb-12">
            Let&apos;s connect and explore opportunities together
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <SocialCard
              icon={Linkedin}
              title="LinkedIn"
              description="Connect with me professionally"
              href={personalInfo.linkedin}
              delay={0.5}
              bgColor="from-blue-500 to-blue-600"
              hoverColor="from-blue-600 to-blue-700"
              staticImage="/previews/vivek-patel-linkedin-profile.jpg"
            />
            
            <SocialCard
              icon={Github}
              title="GitHub"
              description="Check out my repositories"
              href={personalInfo.github}
              delay={0.6}
              bgColor="from-slate-600 to-slate-700"
              hoverColor="from-slate-700 to-slate-800"
            />
            
            <SocialCard
              icon={Mail}
              title="Email"
              description="Send me a direct message"
              href={`mailto:${personalInfo.email}`}
              delay={0.7}
              bgColor="from-red-500 to-red-600"
              hoverColor="from-red-600 to-red-700"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 