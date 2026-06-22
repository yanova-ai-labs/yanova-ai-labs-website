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
    'font-semibold transition-smooth rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 whitespace-nowrap';

  const variants = {
    primary: 'bg-gradient-to-r from-blue-900 to-blue-800 text-white hover:shadow-lg hover:from-blue-800 hover:to-blue-700 focus:ring-blue-900',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-400 border border-gray-200',
    outline:
      'border-2 border-blue-900 text-blue-900 hover:bg-blue-50 focus:ring-blue-900 transition-colors',
    ghost: 'text-blue-900 hover:bg-blue-50 hover:text-blue-800 focus:ring-blue-900',
    gradient: 'bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-500 text-white hover:shadow-lg hover:shadow-cyan-500/30 focus:ring-cyan-500',
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
