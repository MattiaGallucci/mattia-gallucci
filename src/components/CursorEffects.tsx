import React from 'react';
import { useCursor } from '../hooks/useCursor';

const CursorEffects = () => {
  const { mousePosition, isHovering } = useCursor();

  return (
    <>
      {/* Main cursor follower */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          transform: `scale(${isHovering ? 1.5 : 1})`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <div className="w-5 h-5 bg-white rounded-full opacity-80"></div>
      </div>

      {/* Secondary cursor trail */}
      <div
        className="fixed pointer-events-none z-40"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transform: `scale(${isHovering ? 2 : 1.2})`,
          transition: 'transform 0.3s ease-out, left 0.1s ease-out, top 0.1s ease-out',
        }}
      >
        <div className="w-10 h-10 border-2 border-blue-500/30 dark:border-blue-400/30 rounded-full"></div>
      </div>

      {/* Background floating elements that follow cursor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute w-32 h-32 bg-gradient-to-br from-blue-400/5 to-purple-400/5 dark:from-blue-400/3 dark:to-purple-400/3 rounded-full blur-xl"
          style={{
            left: mousePosition.x * 0.1 - 64,
            top: mousePosition.y * 0.1 - 64,
            transition: 'left 0.8s ease-out, top 0.8s ease-out',
          }}
        />
        <div
          className="absolute w-24 h-24 bg-gradient-to-br from-teal-400/5 to-cyan-400/5 dark:from-teal-400/3 dark:to-cyan-400/3 rounded-full blur-xl"
          style={{
            left: mousePosition.x * 0.05 - 48,
            top: mousePosition.y * 0.05 - 48,
            transition: 'left 1.2s ease-out, top 1.2s ease-out',
          }}
        />
        <div
          className="absolute w-16 h-16 bg-gradient-to-br from-purple-400/5 to-pink-400/5 dark:from-purple-400/3 dark:to-pink-400/3 rounded-full blur-xl"
          style={{
            left: mousePosition.x * 0.03 - 32,
            top: mousePosition.y * 0.03 - 32,
            transition: 'left 1.5s ease-out, top 1.5s ease-out',
          }}
        />
      </div>
    </>
  );
};

export default CursorEffects;