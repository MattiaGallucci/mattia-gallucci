import React, { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  id: string;
  className?: string;
  animation?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale' | 'stagger';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  id, 
  className = '', 
  animation = 'fadeUp',
  delay = 0 
}) => {
  const { observeElement } = useScrollAnimation();
  const isVisible = observeElement(id);

  const getAnimationClass = () => {
    const baseClass = 'transition-all duration-1000 ease-out';
    
    if (!isVisible) {
      switch (animation) {
        case 'fadeUp':
          return `${baseClass} opacity-0 translate-y-12`;
        case 'fadeLeft':
          return `${baseClass} opacity-0 -translate-x-12`;
        case 'fadeRight':
          return `${baseClass} opacity-0 translate-x-12`;
        case 'scale':
          return `${baseClass} opacity-0 scale-95`;
        case 'stagger':
          return `${baseClass} opacity-0 translate-y-8`;
        default:
          return `${baseClass} opacity-0 translate-y-12`;
      }
    }
    
    return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div 
      id={id}
      className={`${getAnimationClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;