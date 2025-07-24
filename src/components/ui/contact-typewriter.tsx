"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

interface ContactTypewriterProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

export function ContactTypewriter({
  words,
  className = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 2000,
}: ContactTypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const cursorOpacity = useMotionValue(1);

  useEffect(() => {
    // Animate cursor blinking
    const cursorAnimation = animate(cursorOpacity, [1, 0, 1], {
      duration: 1.2,
      repeat: Infinity,
      ease: "easeInOut",
    });

    return () => cursorAnimation.stop();
  }, [cursorOpacity]);

  useEffect(() => {
    if (isWaiting) return;

    const currentWord = words[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing
      if (currentText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing, wait then start deleting
        timeout = setTimeout(() => {
          setIsWaiting(true);
          setTimeout(() => {
            setIsWaiting(false);
            setIsDeleting(true);
          }, delayBetweenWords);
        }, 100);
      }
    } else {
      // Deleting
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isWaiting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span className="text-white">{currentText}</span>
      <motion.span
        style={{ opacity: cursorOpacity }}
        className="inline-block w-1 h-8 md:h-12 lg:h-16 bg-blue-400 ml-1"
      />
    </div>
  );
} 