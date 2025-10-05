import React from 'react';

interface PageVignetteProps {
  intensity?: 'light' | 'medium' | 'strong';
}

const PageVignette: React.FC<PageVignetteProps> = ({ intensity = 'medium' }) => {
  const opacityMap = {
    light: 0.1,
    medium: 0.15,
    strong: 0.25
  };

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-40"
      style={{
        background: `
          radial-gradient(120% 90% at 50% 40%, transparent 35%, rgba(0,0,0,${opacityMap[intensity]}) 100%),
          radial-gradient(80% 60% at 50% 50%, transparent 60%, rgba(0,0,0,${opacityMap[intensity] * 0.5}) 100%)
        `
      }}
    />
  );
};

export default PageVignette;