import React from 'react';

interface ButtonWhatsAppProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
}

export const ButtonWhatsApp: React.FC<ButtonWhatsAppProps> = ({ children, className = '', ...props }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-5 py-2 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-sm ${className}`}
      {...props}
    >
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.488 5.275 1.49 5.485.001 9.948-4.437 9.951-9.886.002-2.64-1.019-5.123-2.877-6.986-1.858-1.862-4.332-2.888-6.974-2.889-5.49 0-9.953 4.437-9.956 9.886-.002 1.849.493 3.57 1.487 5.124L2.43 21.03l6.217-1.876zm7.25-10.457c-.24-.12-.142-.876-.622-1.353-.473-.472-.9-.374-1.14-.374-.24 0-.476-.035-.715.203-.24.238-.913.893-.913 2.181 0 1.288.937 2.531 1.069 2.709.13.178 1.805 2.755 4.372 3.864.61.264 1.086.42 1.458.539.614.195 1.173.167 1.614.101.492-.074 1.517-.619 1.73-1.22.213-.601.213-1.116.149-1.221-.064-.105-.233-.167-.472-.288z"/>
      </svg>
      <span>{children || 'Fale no WhatsApp'}</span>
    </a>
  );
};

export default ButtonWhatsApp;
