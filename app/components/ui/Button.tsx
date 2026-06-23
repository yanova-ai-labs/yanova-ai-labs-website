import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  isLoading?: boolean;
  icon?: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  isLoading = false,
  icon,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'font-semibold transition-smooth rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 whitespace-nowrap';

  const variants = {
    primary:
      'bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-[#041323] hover:shadow-[0_12px_36px_rgba(0,212,255,0.3)] focus:ring-cyan-500',
    secondary: 'bg-slate-900 text-slate-100 hover:bg-slate-800 focus:ring-slate-600 border border-slate-700',
    outline:
      'border border-cyan-300/40 text-cyan-200 hover:bg-cyan-400/10 focus:ring-cyan-500 transition-colors',
    ghost: 'text-slate-200 hover:bg-white/5 hover:text-cyan-200 focus:ring-cyan-500',
    gradient:
      'bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-[#041323] hover:shadow-lg hover:shadow-cyan-500/30 focus:ring-cyan-500',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
    xl: 'px-10 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
          Loading...
        </>
      ) : (
        <>
          {icon}
          {children}
        </>
      )}
    </button>
  );
}
