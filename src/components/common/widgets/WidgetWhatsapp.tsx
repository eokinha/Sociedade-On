import React from 'react';

export const WidgetWhatsapp: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-br from-[#00D69A] to-[#00A37A] text-white p-6 shadow-md flex flex-col items-center justify-between select-none relative overflow-hidden group">
      {/* Decorative WhatsApp background icon/lines */}
      <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-500">
        <svg className="w-32 h-32 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.028 14.07 1.001 11.5 1.001c-5.438 0-9.863 4.373-9.867 9.801-.002 1.73.465 3.42 1.353 4.908l-.988 3.604 3.759-.974zm12.18-7.148c-.29-.145-1.71-.844-1.97-.939-.26-.095-.45-.145-.64.145-.19.29-.73.939-.9 1.139-.16.19-.33.219-.62.074-1.859-.93-2.935-1.747-4.01-3.599-.28-.48.28-.445.81-1.5.09-.19.045-.355-.022-.49-.068-.135-.64-1.54-.877-2.11-.23-.56-.465-.482-.64-.492-.166-.01-.36-.01-.554-.01-.197 0-.518.074-.79.37-.272.296-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.71-.698 1.95-1.37.24-.672.24-1.25.17-1.37-.07-.12-.26-.19-.55-.335z"/>
        </svg>
      </div>

      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-black tracking-tight leading-none drop-shadow-sm">
          WhatsApp
        </h3>
        <h3 className="text-2xl font-black tracking-tight leading-none drop-shadow-sm">
          Sociedade
        </h3>
      </div>

      <div className="my-6 text-xl sm:text-2xl font-black tracking-tight drop-shadow-sm select-text text-center">
        (71) 9 9656.1025
      </div>

      <a
        href="https://wa.me/5571996561025"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full border border-white hover:bg-white hover:text-[#00A37A] text-white font-extrabold py-2.5 px-4 rounded-lg transition-all duration-300 active:scale-95 cursor-pointer text-center text-xs uppercase tracking-wider z-10"
      >
        enviar mensagem
      </a>
    </div>
  );
};

export default WidgetWhatsapp;
