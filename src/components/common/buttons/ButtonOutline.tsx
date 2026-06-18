import React from 'react';

interface ButtonOutlineProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const ButtonOutline: React.FC<ButtonOutlineProps> = ({ icon, children, className = '', ...props }) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 bg-transparent hover:bg-brand-blue/5 border-2 border-brand-blue text-brand-blue font-bold px-6 py-2.5 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-sm md:text-base ${className}`}
      {...props}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default ButtonOutline;
