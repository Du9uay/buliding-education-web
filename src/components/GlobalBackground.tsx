import React from 'react';

const GlobalBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* 主背景渐变 - 深蓝灰专业色调 */}
      <div className="absolute inset-0 bg-gradient-to-br from-base-900 via-[#1A252F] to-base-700" />
      
      {/* 金色光晕 - 右上角 */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent-500 opacity-5 blur-3xl" />
      
      {/* 蓝色光晕 - 左下角 */}
      <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] rounded-full bg-bidding-primary opacity-5 blur-3xl" />
      
      {/* 网格背景纹理 */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, #D97706 1px, transparent 1px),
                           linear-gradient(to bottom, #D97706 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* 动态光效 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-500/5 to-transparent rotate-45 animate-pulse-slow" />
      </div>
    </div>
  );
};

export default GlobalBackground;