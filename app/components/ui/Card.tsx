import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  interactive?: boolean;
}

export function Card({ 
  children, 
  className = '', 
  hover = true,
  gradient = false,
  interactive = true 
}: CardProps) {
  return (
    <div
      className={`
        rounded-2xl border border-white/10 p-6 md:p-8
        ${gradient ? 'bg-gradient-to-br from-[#10192c] to-[#111128]' : 'bg-[#0e1729]/80'}
        ${hover && interactive ? 'hover:translate-y-[-4px] hover:border-cyan-300/30 hover:shadow-[0_14px_36px_rgba(0,0,0,0.35)]' : ''}
        ${interactive ? 'transition-smooth' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
