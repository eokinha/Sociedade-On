import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginacaoProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Paginacao: React.FC<PaginacaoProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show page 1
      pages.push(1);

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      if (start > 2) {
        pages.push('...');
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages - 1) {
        pages.push('...');
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-8 select-none">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 border border-gray-200 text-brand-blue hover:text-brand-yellow hover:border-brand-yellow/30 bg-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:text-brand-blue disabled:hover:border-gray-200 transition-all cursor-pointer flex items-center justify-center"
        aria-label="Página anterior"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Page Numbers */}
      {getPageNumbers().map((page, idx) => {
        if (typeof page === 'string') {
          return (
            <span key={idx} className="px-3 py-1.5 text-xs font-bold text-brand-gray">
              {page}
            </span>
          );
        }

        const isCurrent = page === currentPage;

        return (
          <button
            key={idx}
            onClick={() => onPageChange(page)}
            className={`px-3.5 py-1.5 text-xs font-black uppercase transition-all cursor-pointer ${
              isCurrent
                ? 'bg-brand-blue text-white shadow-xs'
                : 'bg-white border border-gray-200 text-brand-blue hover:text-brand-yellow hover:border-brand-yellow/30'
            }`}
          >
            {page}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 border border-gray-200 text-brand-blue hover:text-brand-yellow hover:border-brand-yellow/30 bg-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:text-brand-blue disabled:hover:border-gray-200 transition-all cursor-pointer flex items-center justify-center"
        aria-label="Próxima página"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Paginacao;
