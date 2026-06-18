import React from 'react';

interface ButtonPrimaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ icon, children, className = '', ...props }) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 bg-brand-yellow hover:bg-[#C0001A] text-white font-bold px-6 py-3 shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-sm md:text-base tracking-wide ${className}`}
      {...props}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default ButtonPrimary;
