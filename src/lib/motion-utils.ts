import { useEffect, useState } from 'react';

/**
 * Hook to check if user prefers reduced motion
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(query.matches);

    const handleChange = () => setPrefersReducedMotion(query.matches);
    query.addEventListener('change', handleChange);

    return () => query.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}

/**
 * Get animation duration based on user preference
 */
export function getAnimationDuration(baseDuration: number, reducedMotion?: boolean): number {
  return reducedMotion ? 0.01 : baseDuration;
}

/**
 * Get transition config with reduced motion support
 */
export function getTransition(
  config: {
    duration?: number;
    delay?: number;
    ease?: string;
    repeat?: number;
    repeatType?: 'loop' | 'reverse' | 'mirror';
  },
  reducedMotion?: boolean
) {
  if (reducedMotion) {
    return {
      duration: 0.01,
      repeat: 0,
    };
  }
  return config;
}

/**
 * GPU acceleration styles for performance
 */
export const gpuAcceleration = {
  willChange: 'transform',
  transform: 'translateZ(0)',
  backfaceVisibility: 'hidden' as const,
};