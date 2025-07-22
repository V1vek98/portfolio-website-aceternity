"use client";

import { FloatingDock } from "./floating-dock";
import { Mail, Linkedin, Github, User, Briefcase, FolderOpen, Award, MessageSquare, Phone, Home, Info } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function FloatingDockNavigation() {
  const links = [
    {
      title: "Home",
      icon: <Home className="h-full w-full text-sky-500" />,
      href: "#home",
    },
    {
      title: "About",
      icon: <Info className="h-full w-full text-blue-500" />,
      href: "#about",
    },
    {
      title: "Experience",
      icon: <Briefcase className="h-full w-full text-amber-800" />,
      href: "#experience",
    },
    {
      title: "Projects",
      icon: <FolderOpen className="h-full w-full text-yellow-500" />,
      href: "#projects",
    },
    {
      title: "Skills",
      icon: <Award className="h-full w-full text-amber-400" />,
      href: "#skills",
    },
    {
      title: "Testimonials",
      icon: <MessageSquare className="h-full w-full text-green-500" />,
      href: "#testimonials",
    },
    {
      title: "Contact",
      icon: <Phone className="h-full w-full text-green-600" />,
      href: "#contact",
    },
    {
      title: "LinkedIn",
      icon: <Linkedin className="h-full w-full text-blue-600" />,
      href: personalInfo.linkedin,
    },
    {
      title: "GitHub",
      icon: <Github className="h-full w-full text-gray-300" />,
      href: personalInfo.github,
    },
    {
      title: "Email",
      icon: <Mail className="h-full w-full text-red-500" />,
      href: `mailto:${personalInfo.email}`,
    },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <FloatingDock
        items={links}
        desktopClassName="bg-black/20 backdrop-blur-md border border-white/20"
        mobileClassName="bg-black/20 backdrop-blur-md border border-white/20"
      />
    </div>
  );
} 