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
        bg-white rounded-2xl border border-gray-200 p-6 md:p-8
        ${gradient ? 'bg-gradient-to-br from-white to-blue-50' : ''}
        ${hover && interactive ? 'hover-lift hover:border-blue-200 hover:shadow-glow-blue' : ''}
        ${interactive ? 'transition-smooth' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
