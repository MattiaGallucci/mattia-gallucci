import { useEffect, useState } from 'react';

export const useCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device supports touch events
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouchDevice();
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      // Prevent default to avoid scrolling while tracking touch
      // Only if needed for specific UI elements
      // e.preventDefault();
      
      if (e.touches && e.touches[0]) {
        setMousePosition({
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        });
      }
    };
    
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        setMousePosition({
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        });
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleTouchEnd = () => setIsHovering(false);

    // Add mouse event listeners
    window.addEventListener('mousemove', handleMouseMove);
    
    // Add touch event listeners for mobile devices
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    
    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
      el.addEventListener('touchstart', () => setIsHovering(true), { passive: true });
      el.addEventListener('touchend', handleTouchEnd);
    });

    return () => {
      // Remove mouse event listeners
      window.removeEventListener('mousemove', handleMouseMove);
      
      // Remove touch event listeners
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      
      // Remove interactive element listeners
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.removeEventListener('touchstart', () => setIsHovering(true));
        el.removeEventListener('touchend', handleTouchEnd);
      });
    };
  }, []);

  return { mousePosition, isHovering, isTouchDevice };
};
