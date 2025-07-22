"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navigationItems, personalInfo } from "@/data/portfolio";
import { scrollToElement, cn } from "@/lib/utils";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);

      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const sectionId = href.substring(1);
    scrollToElement(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 nav-height",
          isScrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto container-spacing h-full">
          <div className="grid grid-cols-2 md:grid-cols-3 items-center h-full w-full gap-4 md:gap-0">
            {/* Logo - Left section with consistent spacing */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-start"
            >
              <span className="text-2xl md:text-3xl font-bold gradient-text">
                {personalInfo.name.split(" ")[0]}
              </span>
            </motion.div>

            {/* Desktop Navigation - Perfectly centered middle section */}
            <div className="hidden md:flex items-center justify-center">
              <div className="flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
                {navigationItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-200 whitespace-nowrap",
                      activeSection === item.href.substring(1)
                        ? "text-blue-400 bg-blue-500/10"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* CTA Button - Right section with adequate space */}
            <div className="flex items-center justify-end">
              {/* Desktop CTA Button */}
              <motion.a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 px-4 lg:px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium text-sm lg:text-base transition-all duration-200 hover:from-blue-700 hover:to-purple-700 glow whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} />
                Resume
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 z-40 md:hidden"
            style={{ top: "var(--nav-height)" }}
          >
            <div className="bg-black/95 backdrop-blur-md border-b border-white/10 container-spacing py-8">
              <div className="max-w-7xl mx-auto">
                <div className="space-y-responsive">
                  {navigationItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className={cn(
                        "w-full text-center px-6 py-4 rounded-lg text-lg font-medium transition-all duration-200",
                        activeSection === item.href.substring(1)
                          ? "text-blue-400 bg-blue-500/10"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      )}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                  
                  {/* Mobile CTA */}
                  <motion.a
                    href={personalInfo.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium text-lg mt-6 mx-auto max-w-xs"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navigationItems.length * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download size={16} />
                    Download Resume
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50 origin-left"
        style={{
          scaleX: isScrolled ? 1 : 0,
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
} 