"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { generateParticles } from "@/lib/utils";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>(generateParticles(60));
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create subtle gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.03)");
      gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.02)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Animate particles with reduced opacity
      particlesRef.current.forEach((particle) => {
        // Update position
        particle.y -= particle.speed;
        if (particle.y < -10) {
          particle.y = canvas.height + 10;
          particle.x = Math.random() * canvas.width;
        }

        // Draw particle with reduced opacity
        ctx.beginPath();
        ctx.arc(
          (particle.x / 100) * canvas.width,
          (particle.y / 100) * canvas.height,
          particle.size,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity * 0.3})`;
        ctx.fill();

        // Draw connections with much lower opacity
        particlesRef.current.forEach((otherParticle) => {
          const dx = (particle.x - otherParticle.x) / 100 * canvas.width;
          const dy = (particle.y - otherParticle.y) / 100 * canvas.height;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(
              (particle.x / 100) * canvas.width,
              (particle.y / 100) * canvas.height
            );
            ctx.lineTo(
              (otherParticle.x / 100) * canvas.width,
              (otherParticle.y / 100) * canvas.height
            );
            ctx.strokeStyle = `rgba(59, 130, 246, ${
              (1 - distance / 100) * 0.05
            })`;
            ctx.lineWidth = 0.3;
            ctx.stroke();
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Reduced opacity gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/3 to-purple-500/5" />
      
      {/* Animated canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "transparent" }}
      />

      {/* Floating geometric shapes - positioned to avoid content areas */}
      <div className="hidden md:block">
        <motion.div
          className="absolute top-32 left-8 w-3 h-3 bg-blue-500/10 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute top-64 right-12 w-4 h-4 border border-purple-500/15 rotate-45"
          animate={{
            y: [0, 12, 0],
            rotate: [45, 75, 45],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-64 left-1/4 w-2 h-2 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full"
          animate={{
            y: [0, -18, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute top-80 right-1/3 w-1 h-6 bg-blue-400/10 rounded-full"
          animate={{
            y: [0, 15, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Subtle pulse rings */}
      <div className="hidden lg:block">
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 border border-blue-500/5 rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.05, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 border border-purple-500/5 rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.02, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
} 