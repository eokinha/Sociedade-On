import React from 'react';
import { formatDate } from '../../../helpers/formatDate';

interface TempoPublicacaoProps {
  date: string | Date;
  className?: string;
}

export const TempoPublicacao: React.FC<TempoPublicacaoProps> = ({ date, className = '' }) => {
  return (
    <span className={`text-xs text-brand-gray ${className}`}>
      {formatDate(date)}
    </span>
  );
};

export default TempoPublicacao;
