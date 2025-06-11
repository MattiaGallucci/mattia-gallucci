import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ 
  children, 
  speed = 0.5, 
  className = '' 
}) => {
  const { scrollY } = useScrollAnimation();

  return (
    <div 
      className={`relative ${className}`}
      style={{
        transform: `translateY(${scrollY * speed}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxBackground;