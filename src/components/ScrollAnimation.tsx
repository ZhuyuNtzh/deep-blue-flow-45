
import React, { useEffect, useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-right' | 'fade-left' | 'scale';
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className = '',
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px 0px -100px 0px',
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, threshold, rootMargin]);
  
  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-in': return 'scroll-fade-in';
      case 'fade-right': return 'scroll-fade-right';
      case 'fade-left': return 'scroll-fade-left';
      case 'scale': return 'scroll-scale';
      default: return 'scroll-fade-in';
    }
  };
  
  return (
    <div ref={elementRef} className={`${getAnimationClass()} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
