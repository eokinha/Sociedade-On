import React from 'react';
import { Editoria } from '../../../types/editoria';

interface TagEditoriaProps {
  editoria: Editoria;
  className?: string;
}

export const TagEditoria: React.FC<TagEditoriaProps> = ({ editoria, className = '' }) => {
  return (
    <span
      className={`inline-block text-3xs font-extrabold tracking-wide uppercase px-1.5 py-0.5 rounded-sm text-white shrink-0 ${className}`}
      style={{ backgroundColor: editoria.cor || '#0D1B4B' }}
    >
      {editoria.nome}
    </span>
  );
};

export default TagEditoria;
