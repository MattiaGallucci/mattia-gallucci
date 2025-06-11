import { useEffect, useState } from 'react';

export const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const observeElement = (elementId: string) => {
    useEffect(() => {
      const element = document.getElementById(elementId);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(prev => ({
            ...prev,
            [elementId]: entry.isIntersecting
          }));
        },
        { threshold: 0.1, rootMargin: '-50px' }
      );

      observer.observe(element);
      return () => observer.unobserve(element);
    }, [elementId]);

    return isVisible[elementId] || false;
  };

  return { scrollY, observeElement };
};